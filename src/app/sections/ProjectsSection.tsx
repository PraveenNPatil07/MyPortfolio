
"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Blogopedia",
    description: "Full-stack blog app with user roles, JWT auth, post CRUD operations, and a responsive UI.",
    techStack: ["Python", "Flask", "React", "JavaScript", "SQLAlchemy", "JWT"],
    githubLink: "https://github.com/PraveenNPatil07/Blogopedia",
    imageSrc: "/Blogopedia.png",
    imageAlt: "Blogopedia project screenshot",
    dataAiHint: "blog interface"
  },
  {
    name: "ApexBrowser",
    description: "Custom web browser built with Python and PyQt5, featuring tabbed browsing, navigation controls, and a fast UI.",
    techStack: ["Python", "PyQt5", "Web Engine"],
    githubLink: "https://github.com/PraveenNPatil07/ApexBrowser",
    imageSrc: "/Apex Browser.png",
    imageAlt: "ApexBrowser project screenshot",
    dataAiHint: "browser ui"
  },
  {
    name: "Google Trends + Data Visualization",
    description: "Analyzes and visualizes search trends using the Google Trends API and Matplotlib for graphical representation.",
    techStack: ["Python", "Pytrends API", "Matplotlib", "Pandas"],
    githubLink: "https://github.com/PraveenNPatil07/Google_Trends_and_Data_Visualisation",
    imageSrc: "/Google Trends project screenshot.png",
    imageAlt: "Google Trends project screenshot",
    dataAiHint: "data chart"
  },
  {
    name: "Image Watermarking App",
    description: "A desktop GUI application developed with Tkinter for adding text or image watermarks to images.",
    techStack: ["Python", "Tkinter", "Pillow"],
    githubLink: "https://github.com/PraveenNPatil07/Image-Watermarking-App",
    imageSrc: "/ImageWatermarkingApp.png",
    imageAlt: "Image Watermarking App screenshot",
    dataAiHint: "image editor"
  },
];


const sectionTitleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = (index: number) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, delay: (index % 2) * 0.1 }
  },
});


export function ProjectsSection() {
  return (
    <Section id="projects" title="Featured Projects & Contributions" removePadding>
      <div className="py-16 md:py-24">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-12 font-headline"
          initial="hidden"
          whileInView="visible"
          variants={sectionTitleVariants}
          viewport={{ once: false, amount: 0.2 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants(index)}
              viewport={{ once: false, amount: 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
        </div>
    </Section>
  );
}

