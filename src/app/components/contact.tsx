"use client";

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16 font-sans text-black dark:text-black">
      <h2 className="text-2xl font-bold mb-6 border-b border-black-300 dark:border-black-700 pb-2">
        Get in Touch
      </h2>

      <p className="mb-6 text-black-700 dark:text-black-300">
        I'm always happy to connect — feel free to reach out via email or follow me on LinkedIn and GitHub.
      </p>

      <div className="space-y-4">
        <a
          href="mailto:calumcrawford9@gmail.com"
          className="block w-full text-center border border-black dark:border-black py-3 rounded hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white transition"
        >
          Email Me
        </a>
        <a
          href="https://github.com/ccrawford4"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center border border-black dark:border-black py-3 rounded hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/calum-crawford-05b093253/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center border border-black dark:border-black py-3 rounded hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
