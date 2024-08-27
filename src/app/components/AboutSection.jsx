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
                <li>Node.js</li>
                <li>Express</li>
                <li>Flask</li>
                <li>Python</li>
                <li>Spring Boot</li>
                <li>Java</li>
                <li>Go</li>
                <li>C/C++/CUDA</li>
                <li>Rust</li>
            </ul>
        ),
    },
    {
        title: "DevOps and Infrastructure Skills",
        id: "site-reliability-engineering",
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
            </ul>
        ),
    },
    {
        title: "Databases",
        id: "databases",
        content: (
            <ul className="list-disc pl-2">
                <li>MySQL, PostgreSQL, SQLite</li>
                <li>MongoDB</li>
                <li>Firebase, Cloud Firestore, Supabase</li>
            </ul>
        ),
    },
    {
        title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MS Computer Science from Georgia Institute of Technology</li>
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
            I am a software engineer with a passion for creating
            interactive and responsive web applications and maintaining them. I have experience working with
            Go, Python, C/C++/CUDA, Rust, TypeScript, Terraform, Next.js, Docker, Kubernetes, Firebase, Supabase, NoSQL and SQL.
            I am adept at both backend development and devops tooling, and always
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
                  selectTab={() => handleTabChange("site-reliability-engineering")}
                  active={tab === "site-reliability-engineering"}
              >
                  {" "}
                  SRE & DevOps{" "}
              </TabButton>
              <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
              >
                  {" "}
                  Databases{" "}
              </TabButton>
              <TabButton
                  selectTab={() => handleTabChange("databases")}
                  active={tab === "databases"}
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
