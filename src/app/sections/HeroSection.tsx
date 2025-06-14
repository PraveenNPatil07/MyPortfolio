
"use client";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import { Github, Send, Linkedin, Instagram, Twitter, Link as LinkIcon, Code } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { motion } from "framer-motion";

const textBlockVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
};

const buttonsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
};

const socialLinksVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6, staggerChildren: 0.1 } },
};

const socialLinkItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};


export function HeroSection() {
  return (
    <Section
      id="hero"
      className="bg-transparent"
      contentClassName="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center"
      removePadding
    >
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="text-center md:text-left space-y-6 order-2 md:order-1"
            variants={textBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-headline flex flex-col items-center md:items-start">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Hi, I&apos;m
              </span>
              <div className="inline-flex items-baseline">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Praveen Patil
                </span>
                <span
                  role="img"
                  aria-label="waving hand"
                  className="inline-block animate-wave origin-[70%_70%] text-current ml-2 sm:ml-3 md:ml-4"
                >
                  👋
                </span>
              </div>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Aspiring Software Developer 
            | Python Developer
            </p>
            <p className="text-md sm:text-lg md:text-xl text-foreground max-w-xl mx-auto md:mx-0">
            I’m a passionate and versatile developer with a strong foundation in full-stack development, data visualization, and desktop apps.  
            From Flask APIs to GUI tools — I love turning ideas into robust, scalable, and clean code.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={buttonsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-3 justify-center md:justify-start pt-4"
              variants={socialLinksVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="https://github.com/PraveenNPatil07" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" /> GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="#contact">
                    <Send className="mr-2 h-5 w-5" /> Contact Me
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="https://www.linkedin.com/in/praveenpatil07/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="https://www.instagram.com/_praveen_patil_07_/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-4 w-4" /> Instagram
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="https://leetcode.com/u/Praveen0_7/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode className="mr-2 h-4 w-4" /> LeetCode
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="https://www.codechef.com/users/praveenpatil07" target="_blank" rel="noopener noreferrer">
                    <SiCodechef className="mr-2 h-4 w-4" /> CodeChef
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-end order-1 md:order-2 mt-10 md:mt-0"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <div className="relative group w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Image
                src="/ProfilePhoto.jpg"
                alt="Praveen Patil"
                width={384}
                height={384}
                className="relative rounded-full shadow-2xl border-4 border-card object-cover w-full h-full"
                data-ai-hint="professional portrait"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
