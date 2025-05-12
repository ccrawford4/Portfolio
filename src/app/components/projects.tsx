"use client";

const projects = [
  {
    title: "Blink",
    href: "https://blink.rahoi.com",
    date: "Jan 2025 – May 2025",
    description: [
      "Built a browser-based System Design game as part of our senior capstone project.",
      "Used the Godot game engine and WebAssembly (WASM) to deliver a fast, web-native experience for students and developers to practice system design concepts.",
      "Implemented core features using object-oriented programming, Dijkstra’s algorithm for request routing, and custom shaders for transitions.",
    ],
    skills: ["Godot", "WASM", "OOP", "Shaders"],
  },
  {
    title: "EKS Infrastructure & CI/CD for Microservices",
    href: "https://github.com/ccrawford4/k8s-infra",
    date: "Apr 2025 – May 2025",
    description: [
      "Built and deployed scalable AWS infrastructure using Terraform, EKS, and GitHub Actions.",
      "Configured multi-environment support (QA, UAT, Prod) with RDS, Redis, ECR, and Cert Manager using Kubernetes ingress.",
      "Automated blue/green deployments with Argo Rollouts and managed CI/CD with GitHub Actions.",
    ],
    skills: ["Amazon EKS", "Kubernetes", "Terraform", "ArgoCD", "MySQL", "Redis"],
  },
  {
    title: "Blueprint",
    href: "https://",
    date: "Apr 2025",
    description: [
      'Awarded "Most Innovative" at DonsHack ‘25 and received a $500 micro-grant.',
      "Built a data visualization tool using Next.js, PostgreSQL, and Python to help USF students map degree progress and visualize co/prerequisites via expression trees.",
    ],
    skills: ["Next.js", "PostgreSQL", "Python", "React.js"],
  },
  {
    title: "OneFlow",
    date: "Nov 2024 – Jan 2025",
    description: [
      'Built during Compsigh’s hackathon "Deploy24", OneFlow is a meeting productivity app for organizations.',
      "Features include live transcription, real-time chat, and automated summaries with key takeaways.",
      "Developed using Next.js, React, TypeScript, Tailwind CSS, and Firebase.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Search Engine",
    date: "Sep 2024 – Dec 2024",
    description: [
      "Built a full-stack search engine to index the USF corpus using Go, web scraping, and goroutines for high performance.",
      "Frontend: Next.js, TypeScript, NextAuth, React, Tailwind CSS.",
      "Backend: Go, Docker, Azure SQL, Redis.",
    ],
    skills: ["Go", "Next.js", "Azure SQL", "Redis", "Docker", "React.js", "TypeScript"],
  },
];

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-black dark:text-black font-sans">
      <h2 className="text-3xl font-bold mb-10 border-b border-black-300 dark:border-black-700 pb-2">
        Projects
      </h2>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-black-600 dark:text-black-400 mb-4">{project.date}</p>
            <ul className="list-disc list-inside mb-3 space-y-1">
              {project.description.map((line, i) => (
                <li key={i} className="text-black-800 dark:text-black-200">{line}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 border border-black dark:border-black rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
