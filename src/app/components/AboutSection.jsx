"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Frontend Skills",
    id: "frontend",
    content: (
        <ul className="list-disc pl-2">
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Oracle JET</li>
            <li>NextJS</li>
            <li>React</li>
        </ul>
    ),
  },
    {
        title: "Backend Skills",
        id: "backend",
        content: (
            <ul className="list-disc pl-2">
                <li>Microservices</li>
                <li>MVC architecture</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Flask</li>
                <li>Python</li>
                <li>Spring Boot</li>
                <li>Java</li>
                <li>Go</li>
                <li>C/C++/CUDA</li>
                <li>Rust</li>
                <li>MySQL, PostgreSQL, SQLite</li>
            </ul>
        ),
    },
    {
        title: "DevOps",
        id: "devops",
        content: (
            <ul className="list-disc pl-2">
                <li>GitHub Actions</li>
                <li>Docker</li>
                <li>Jenkins</li>
                <li>Kubernetes</li>
                <li>Terraform</li>
                <li>GCP, AWS, OCI</li>
                <li>Linux</li>
                <li>Shell Scripting</li>
                <li>MongoDB</li>
                <li>Firebase, Cloud Firestore</li>
            </ul>
        ),
    },
    {
        title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BS Computer Science from Oregon State University</li>
        <li>BA Psychology from University of Maryland, Baltimore County</li>
      </ul>
    ),
  },

];

const AboutSection = () => {
  const [tab, setTab] = useState("frontend");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/Halim-Portfolio/about-image.jpg" width={600} height={600} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full-stack software engineer with a passion for creating
            interactive and responsive web applications. I have experience working with
            Go, Java, JavaScript, Python, C/C++, Rust, TypeScript, React, Node.js, Express.js, Spring Boot, Firebase, NoSQL, SQL, and many more technologies.
            I am adept at both frontend and backend development, and always
            looking to expand my knowledge and skill set. As a team player with experience in collaborative projects,
            I am excited to work with others to create impactful applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("frontend")}
              active={tab === "frontend"}
            >
              {" "}
              Frontend{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("backend")}
              active={tab === "backend"}
            >
              {" "}
              Backend{" "}
            </TabButton>
              <TabButton
                  selectTab={() => handleTabChange("devops")}
                  active={tab === "devops"}
              >
                  {" "}
                  DevOps{" "}
              </TabButton>
              <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
              >
                  {" "}
                  Education{" "}
              </TabButton>
          </div>
          <div className="mt-8 h-[200px] overflow-y-auto">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
