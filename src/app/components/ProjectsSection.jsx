"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "OWASP Juice Shop",
    description: "Attacked the OWASP Juice Shop application and then hardened it to patch the discovered vulnerabilities",
    image: "/Halim-Portfolio/p1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/glennan93/cs467-WebsiteSecurityProject",
    previewUrl: "https://vimeo.com/953378302?share=copy",
  },
  {
    id: 2,
    title: "GoGato",
    description: "Full-Stack Social Media Application (Tools: Spring boot, React, Docker, Microservice Architecture, MVC)",
    image: "/Halim-Portfolio/p2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Revature-GoGato",
    previewUrl: "https://gogatotest.vercel.app/",
  },
  {
    id: 3,
    title: "Small Shell",
    description: "My custom Unix shell (Tools: C, Linux)",
    image: "/Halim-Portfolio/p3.png",
    tag: ["All", "Systems"],
    gitUrl: "https://github.com/HalimUzodike/Unix_Shell",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "One-Time Pad",
    description: "Secure communication system implementing One-Time Pad encryption (Tools: C, Linux)",
    image: "/Halim-Portfolio/p4.png",
    tag: ["All", "Systems"],
    gitUrl: "https://github.com/HalimUzodike/One-Time-Pads",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Tarpaulin Course Management Tool",
    description: "Alternative to the Canvas and Blackboard learning management tools Authentication and CRUD operations (Tools: GCP, Flask, Cloud Storage, Datastore, JWTs)",
    image: "/Halim-Portfolio/p5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HalimUzodike/Tarpaulin-Course-Management-Tool",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Hangman Client-Server Game",
    description: "A simple implementation of the classic Hangman game using a client-server architecture (Tools: Python)",
    image: "/Halim-Portfolio/p6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HalimUzodike/Client-Server-Chat-Game",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Base 64 Encoder",
    description: "Encodes input data to Base64 format (Tools: Rust, Linux)",
    image: "/Halim-Portfolio/p7.png",
    tag: ["All", "Systems"],
    gitUrl: "https://github.com/HalimUzodike/Base64_encoder",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "HalimSearch",
    description: "Full-Stack Search Engine. Work in progress (Tools: Go, Fiber, Next.js, PostgreSQL)",
    image: "/Halim-Portfolio/p8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HalimUzodike/HalimSearch",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "PanApp",
    description: "Pantry Application. Work in progress (Tools: Next.js, Firebase, Material-UI, TypeScript)",
    image: "/Halim-Portfolio/p9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HalimUzodike/Panapp",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
            onClick={handleTagChange}
            name="Systems"
            isSelected={tag === "Systems"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
