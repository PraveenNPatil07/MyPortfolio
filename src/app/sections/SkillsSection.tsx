"use client";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandTailwind, TbBrandTypescript, TbBrandCpp } from "react-icons/tb";
import {
  SiNodedotjs,
  SiFramer,
  SiPython,
  SiC,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiDjango,
  SiFlask,
  SiBootstrap,
  SiGit,
  SiPycharm,
  SiIntellijidea,
  SiEclipseide,
  SiPostman,
  SiTableau,
  SiGooglecolab,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

export const SkillsSection = () => {
  const techIcons = [
    { icon: FaReact, name: "React" },
    { icon: RiNextjsFill, name: "Next.js" },
    { icon: TbBrandTailwind, name: "Tailwind CSS" },
    { icon: TbBrandTypescript, name: "TypeScript" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiFramer, name: "Framer Motion" },
    { icon: SiPython, name: "Python" },
    { icon: SiC, name: "C" },
    { icon: TbBrandCpp, name: "C++" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiHtml5, name: "HTML5" },
    { icon: SiCss3, name: "CSS3" },
    { icon: SiDjango, name: "Django" },
    { icon: SiFlask, name: "Flask" },
    { icon: SiBootstrap, name: "Bootstrap" },
    { icon: SiGit, name: "Git" },
    { icon: SiPycharm, name: "PyCharm" },
    { icon: SiIntellijidea, name: "IntelliJ IDEA" },
    { icon: SiEclipseide, name: "Eclipse" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiTableau, name: "Tableau" },
    { icon: SiGooglecolab, name: "Google Colab" },
    { icon: SiPandas, name: "Pandas" },
    { icon: SiNumpy, name: "NumPy" },
  ];

  const repeatedIcons = Array(3).fill(techIcons).flat();

  return (
    <Section id="skills" title="Skills" contentClassName="py-8 md:py-24">
      <div
        className="my-10 h-[220px] overflow-hidden whitespace-nowrap relative items-bottom justify-bottom py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`
          ::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {/* Scrolling row */}
        <motion.div
          className="flex gap-6 w-max items-bottom justify-bottom"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {repeatedIcons.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ y: 0 }}
              animate={{ y: [4, -4, 4] }}
              transition={{
                duration: 3.5 + (index % 5), // slight wave variation
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="relative z-10 overflow-visible rounded-2xl border-4 border-neutral-800 px-8 py-10 group flex flex-col items-bottom justify-bottom bg-neutral-900 min-w-[120px] min-h-[120px] my-auto mx-2"
            >
              <tech.icon className="text-[3.75rem] text-white group-hover:scale-105 transition-transform duration-300 ease-in-out" />
              <span className="absolute top-full mt-3 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 text-xs text-white bg-neutral-800 px-3 py-1 rounded shadow-lg z-50 whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
