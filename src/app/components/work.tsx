"use client";

const experiences = [
  {
    company: "Handshake",
    location: "San Francisco, CA",
    title: "Cloud Engineer Intern – Infrastructure Team",
    date: "June 2025 – Present",
    responsibilities: [
      "Automating service creation using Terraform, GitHub Actions, and Google Cloud Platform (GCP).",
    ],
  },
  {
    company: "TrampolineAI",
    location: "San Francisco, CA",
    title: "Software Engineer Intern",
    date: "May 2024 – June 2025",
    responsibilities: [
      "Migrated services from Google Cloud to Amazon ECS using GitHub Actions, Terraform, and ALB.",
      "Designed and deployed an authentication system using AWS Lambda, GraphQL, and TypeScript to securely verify caller identities.",
      "Led the migration from DynamoDB to Elasticsearch, reducing homepage load times from 10+ seconds to under 2 seconds.",
    ],
  },
  {
    company: "humanID (non-profit)",
    location: "San Francisco, CA",
    title: "Lead Software Engineer Intern",
    date: "Jan 2024 – May 2024",
    responsibilities: [
      "Conducted 27+ technical interviews and recruited three high-performing software developer interns.",
      "Resolved a critical bug in the humanID Discord bot by adjusting AWS security groups to enable secure EC2 ↔ RDS communication.",
    ],
  },
  {
    company: "Bushido",
    location: "San Francisco, CA",
    title: "Software Engineer Intern",
    date: "May 2023 – Jan 2024",
    responsibilities: [
      "Built a native ticketing platform using React.js, TypeScript, and PostgreSQL — resulting in 43 events by 14 unique artists.",
      "Created a media lookup feature with tRPC and the Spotify API for DJs to manage ISRC codes and publishing rights.",
    ],
  },
];

export default function Work() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-black dark:text-black font-sans">
      <h2 className="text-3xl font-bold mb-10 border-b border-black-500 dark:border-black-700 pb-2">
        Work Experience
      </h2>

      <div className="space-y-12">
        {experiences.map((job, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold">{job.company}</h3>
            <p className="text-sm text-black dark:text-black-400 mb-1">
              {job.title} · {job.location}
            </p>
            <p className="text-sm text-black dark:text-black-400 mb-3">{job.date}</p>
            <ul className="list-disc list-inside space-y-1">
              {job.responsibilities.map((item, i) => (
                <li key={i} className="text-black -800 dark:text-black-200">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
