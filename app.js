// Load express module using `require` directive
 
// import multer from "multer";
import { S3Client, PutObjectCommand,GetObjectCommand } from "@aws-sdk/client-s3";
// import fs from "fs";
import express from "express";
import { pipeline } from "stream";
import { promisify } from "util";
 
let app = express();
// Define request response in root URL (/)
app.get("/", function (req, res) {
  res.send("Dockerize the node app");
});
 
// Define request response in root URL (/)
app.get("/health", function (req, res) {
  res.json({
    app2: true,
    success: true,
  });
});
 
// Launch listening server on port 8081
app.listen(3000, function () {
  console.log("app listening on port 8080");
});
 
// Promisify pipeline for easier async/await
app.use("/upload", express.raw({ type: "*/*", limit: "50mb" }));
const s3 = new S3Client({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});
app.post("/upload", async (req, res) => {
  try {
    const fileBuffer = req.body;
    if (!fileBuffer || fileBuffer.length === 0) {
      return res.status(400).send("No file received");
    }
 
    const bucketName = "revolte-ramco-code-red";
    const key = "apple.png";
 
    // Upload to S3
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: fileBuffer,
      ContentType: req.headers["content-type"] || "application/octet-stream",
    });
 
    await s3.send(command);
 
    res.status(200).send({ message: "File uploaded successfully", key });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading file");
  }
});
 
 
const streamPipeline = promisify(pipeline);
 
app.get("/object", async (req, res) => {
  const bucketName = "revolte-ramco-code-red";
  const key = req.query.key; // pass ?key=apple.png
 
  if (!key) {
    return res.status(400).send("Missing key parameter");
  }
 
  try {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    });
 
    const response = await s3.send(command);
 
    // Set headers so the browser downloads the file
    res.setHeader(
      "Content-Type",
      response.ContentType || "application/octet-stream"
    );
    res.setHeader("Content-Disposition", `attachment; filename="${key}"`);
 
    // Pipe the S3 stream to the client response
    await streamPipeline(response.Body, res);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error downloading object");
  }
});