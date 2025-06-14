"use client";
import { Section } from "@/components/Section";
import Image from "next/image";

export function AboutSection() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-center justify-center">

        <div className="md:col-span-1 flex justify-center">
          <div className="w-full max-w-xl"> {/* Max width for image container */}
            <Image
              src="/SimplePhoto.jpg"
              alt="About Me"
              width={900} // increased width
              height={600} // increased height
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        <div className="md:col-span-1 space-y-6 text-md text-muted-foreground">
          <p>
            I'm a final-year engineering student with a strong interest in backend development, data analysis, and building useful software. I work with Python, Java, C, SQL, and JavaScript to create clean and efficient applications.
          </p>
          <p>
            My experience includes working with Django, Flask, Bootstrap, and web scraping tools like BeautifulSoup and Selenium. I enjoy turning data into insights using Pandas, NumPy, Matplotlib, and Seaborn.
          </p>
          <p>
            I’m comfortable with tools like Git, VS Code, PyCharm, Postman, and have explored core CS subjects like DSA, OS, DBMS, CN, and Advanced Java.
          </p>
          <p>
            I love learning new technologies, solving problems, and contributing to meaningful projects.
          </p>
        </div>
      </div>
    </Section>
  );
}
