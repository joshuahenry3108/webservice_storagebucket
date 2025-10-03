[
  {
    question: 2,
    questionName: "framework",
    action: "React",
    order: 1,
    timestamp: "2025-09-08T15:34:14.589Z",
    answer: "React",
  },
  {
    question: 5,
    questionName: "envBranches",
    action: "Confirm",
    order: 2,
    timestamp: "2025-09-08T15:34:26.135Z",
    answer: [
      {
        env: {
          id: 1,
          name: "qa",
        },
        branch: "qa",
      },
      {
        env: {
          id: 3,
          name: "staging",
        },
        branch: "staging",
      },
      {
        env: {
          id: 4,
          name: "production",
        },
        branch: "main",
      },
    ],
    optionsSelected: {
      envBranchMappings: [
        {
          env: {
            id: 1,
            name: "qa",
          },
          branch: "qa",
        },
        {
          env: {
            id: 3,
            name: "staging",
          },
          branch: "staging",
        },
        {
          env: {
            id: 4,
            name: "production",
          },
          branch: "main",
        },
      ],
    },
  },
  {
    question: 6,
    questionName: "frameworkScope",
    action: "Both",
    order: 3,
    timestamp: "2025-09-08T15:34:30.626Z",
    answer: "Both",
    optionsSelected: {
      id: 3,
      value: "Both",
    },
  },
  {
    question: 7,
    questionName: "devXSetup",
    action: "No, Let's Customise",
    order: 4,
    timestamp: "2025-09-08T15:34:36.278Z",
    answer: "No, Let's Customise",
    optionsSelected: {
      devxFeatures: ["codeReview", "lint"],
    },
  },
  {
    question: 8,
    questionName: "codeReview",
    action: "Confirm",
    order: 5,
    timestamp: "2025-09-08T15:34:43.951Z",
    answer: {
      summarize: true,
      suggestFixes: true,
      commentStyle: "Concise",
    },
    optionsSelected: {
      summarize: true,
      suggestFixes: true,
      commentStyle: "Concise",
    },
  },
  {
    question: 9,
    questionName: "preset",
    action: "WEB_SERVICE&DATABASE",
    order: 6,
    timestamp: "2025-09-08T15:34:50.301Z",
    answer: "WEB_SERVICE&DATABASE",
  },
  {
    question: 10,
    questionName: "presetProperties",
    action: "Confirm",
    order: 7,
    timestamp: "2025-09-08T15:34:54.888Z",
    answer: [
      {
        type: "DATABASE",
        name: "userDatabase",
        specifications: {
          engine: "postgres",
          cpuMemory: "2|1",
          storage: 100,
        },
      },
      {
        type: "WEB_SERVICE",
        name: "userService",
        entryPoint: "Program.cs",
        specifications: {
          cpuMemory: "2|1",
          storage: 30,
        },
        properties: {
          health: "/health",
          port: 8080,
        },
        insights: {
          cpu: ["cpu_time_idle"],
          swap: ["swap_used"],
          mem: ["mem_total"],
          disk: ["disk_used", "disk_total", "disk_free"],
        },
      },
    ],
  },
];
