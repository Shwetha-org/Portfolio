"use client"; // required for Framer Motion in Next.js app

import Navbar from "../components/Navbar";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import { HiOutlineDownload } from "react-icons/hi";



export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ensures Typewriter only renders after client hydration
  }, []);

  const projects = [
    {
      title: "IoT Doorbell",
      description:
        "Smart doorbell built on a Raspberry Pi with camera, button, LEDs, and buzzer. Uses AWS Rekognition for facial recognition–based access control.",
      skills: ["Raspberry Pi", "Python", "Flask", "OpenCV", "AWS Rekognition", "GPIO"],
      link: "https://github.com/Shwetha-org/iot-doorbell",
    },
    {
      title: "BeautyBrand Order Tracking Chatbot",
      description:
        "Internship project: GUI-based chatbot enabling users to query order status, inventory, and delivery details through a SQL-backed system.",
      skills: ["Python", "Tkinter", "SQL Server", "GUI Design"],
      link: "https://github.com/Shwetha-org/Optimal-Solutions-chatbot",
    },
    {
      title: "Mini Password Manager (PPM)",
      description:
        "A Python-based command-line password manager that uses a master password and PBKDF2+Fernet encryption to securely store, retrieve, and manage multiple credentials per service.​",
      skills: ["Python", "Cryptography (Fernet, PBKDF2)", "CLI Application Design", "File I/O & JSON Storage"],
      link: "https://github.com/Shwetha-org/Mini-Password-Manager-PPM-",
    },
    {
      title: "Forest Grid Game",
      description:
        "A Java console game built with Gradle featuring OOP design with interfaces and abstract classes. Manage a 10x10 forest grid, move a player and wolf, and save/load game state using serialization and JSON.",
      skills: ["Java", "Gradle", "OOP Design", "File I/O & Serialization"],
      link: "https://github.com/Shwetha-org/Forest-Grid-Game",
      video: "https://youtu.be/9NZGy5z3TQw"

    },
    {
      title: "Personal Portfolio",
      description:
        "This portfolio website is built with Next.js, React, and Tailwind CSS to showcase my IoT and embedded systems projects. Live on Vercel and fully responsive.",
      skills: ["Next.js", "React", "Tailwind CSS", "Vercel Deployment"],
      link: "https://github.com/Shwetha-org/Portfolio",
    },
  ];

  const experiences = [
    {
      role: "Android Developer (Kotlin) - Project in Collaboration with Industry Partner",
      company: "Assimilatus AB",
      dates: "10/2025 – Present",
      description: `Built a native Android app in Kotlin (MVVM, Jetpack Compose, Hilt) integrating REST APIs and scalable features. Currently evolving the project into a startup idea in collaboration with the company.`,
      skills: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit", "Coroutines", "Room", "Hilt", "REST APIs", "Agile"],
    },
    {
      role: "Teaching Assistant – IoT & Engineering Courses",
      company: "Kristianstad University",
      dates: "08/2025 – Present",
      description: `Facilitated labs and workshops across multiple courses, helping students troubleshoot and master key IoT and engineering concepts.`,
      skills: ["IoT", "Labs Facilitation", "Mentoring", "Engineering Courses"],
    },
    {
      role: "Mini‑Thesis – Smart Garment Lifecycle Tracking (IoT & ML)",
      company: "Kristianstad University / Assimilatus AB",
      dates: "11/2025 – 12/2025",
      description: `Designed an IoT prototype for tracking garment usage with BLE beacons and cloud services. This forms the foundation for the upcoming bachelor's thesis.`,
      skills: ["IoT", "BLE", "Cloud Services", "Data Collection", "Python", "Data Analysis", "Prototyping"],
    },
    {
      role: "Summer Intern (Remote)",
      company: "Optimal Solutions Nordic AB",
      dates: "06/2025 – 08/2025",
      description: `Developed and maintained backend systems for a production chatbot. Optimized Azure SQL queries and collaborated remotely to deliver scalable features.`,
      skills: ["Python", "Tkinter", "Azure SQL", "Backend Development", "SQL Queries", "Remote Collaboration"],
    },
  ];

  const skillsCategories = [
    { title: "Programming", skills: ["Python", "Kotlin", "Java", "C", "Basic Assembly"] },
    { title: "Databases", skills: ["Azure SQL", "MySQL"] },
    { title: "Tools & Frameworks", skills: ["JIRA (Scrum/Agile)", "Git/GitHub", "Wireshark", "UML Modeling", "Retrofit", "Coroutines", "Hilt"] },
    { title: "Cloud & Backend", skills: ["Azure platform", "REST API integration", "Backend system development"] },
    { title: "Hardware / Embedded", skills: ["PCB assembly", "Digital electronics", "Raspberry Pi", "Sensor interfacing"] },
    { title: "Soft Skills", skills: ["Strong communication", "Collaboration", "Effective problem-solving"] },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-100 via-gray-50 to-blue-50">
      <Navbar />

      {/* FIXED BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/profile.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative z-10 min-h-screen flex items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Hi, I’m Shwetha Rajesh
          </h1>

          <p className="text-xl text-gray-200">
            I am{" "}
            <span className="text-gray-200 font-semibold">
              <Typewriter
                words={[
                  "a Final-year Computer Engineering Student | IoT, Embedded Systems & Innovation Enthusiast"
                ]}
                loop={1}          // only type once
                cursor={false}    // optional: hide cursor after typing
                typeSpeed={70}
              />
            </span>
          </p>
        </motion.div>
      </section>



      {/* ABOUT ME */}
      <section
        id="about"
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
        <motion.div
          className="max-w-3xl text-center space-y-6 bg-white/90 backdrop-blur-md p-10 rounded-xl shadow-2xl transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a final-year Computer Engineering student specializing in Internet of Things, 
            with strong interests in embedded systems, cloud-connected systems, 
            and designing systems with security built in from the ground up.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I enjoy building hands-on projects that connect hardware, software,
            and real-world problem solving, from IoT systems to database-driven applications.
          </p>
          <p className="text-sm text-gray-500">
            BSc Computer Engineering - Högskolan Kristianstad, Sweden
          </p>
        </motion.div>
      </section>

      {/* WRAP FROM PROJECTS TO CONTACT */}
      <div
        className="relative z-10"
        style={{
          background: "linear-gradient(135deg, #f5e6d3, #d9e2ff, #f5f3f2)",
        }}
      >
        {/* PROJECTS */}
        <section
          id="projects"
          className="py-20 px-8"
        >
          <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Projects
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="border p-6 rounded-lg bg-white/80 shadow hover:shadow-lg transition text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  {project.title}
                </h3>
                <p>{project.description}</p>
                <p className="mt-2 font-medium text-gray-600">
                  Skills: {project.skills.join(", ")}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition"
                  >
                    Go to GitHub Repo
                  </a>

                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                      Watch Presentation
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* EXPERIENCE / INTERNSHIPS */}
        <section id="experience" className="py-24 px-6">
          <h2 className="text-3xl font-bold mb-14 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Experience / Internships
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full hidden lg:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-12 relative lg:flex lg:items-center w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`bg-white/80 backdrop-blur-md rounded-xl shadow-2xl w-full lg:w-1/2 px-6 py-5 mt-6 lg:mt-0 transition-transform duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-3xl ${
                    index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                >
                  <h3 className="mb-1 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{exp.company} | {exp.dates}</p>

                  <ul className="text-gray-800 leading-relaxed list-disc list-inside space-y-1">
                    {exp.description.split(". ").map((line, idx) =>
                      line.trim() ? <li key={idx}>{line.trim()}.</li> : null
                    )}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 shadow-xl w-8 h-8 rounded-full flex items-center justify-center z-20">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section
          id="education"
          className="py-24 px-8"
        >
          <h2 className="text-3xl font-bold mb-14 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Education
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* BSc */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-2xl px-6 py-5 transition-transform duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                BSc in Computer Science & Engineering (IoT)
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Högskolan Kristianstad, Sweden
              </p>
              <p className="text-sm text-gray-600 mt-1">
                08/2023 – Present | Sweden
              </p>
            </motion.div>

            {/* IB */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-2xl px-6 py-5 transition-transform duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                International Baccalaureate (IB)
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                ISSR, Stockholm
              </p>
              <p className="text-sm text-gray-600 mt-1">
                08/2020 – 06/2023 | Stockholm
              </p>
              <p className="text-sm text-gray-600 mt-1">
                HL: Math, Physics, Psychology
              </p>
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24 px-8">
          <h2 className="text-3xl font-bold mb-14 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Skills
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {skillsCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-2xl bg-white/80 shadow hover:shadow-xl transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => {
                    let bgColor = "bg-gray-100";
                    let textColor = "text-gray-800";

                    switch (cat.title) {
                      case "Programming":
                        bgColor = "bg-blue-100"; textColor = "text-blue-800";
                        break;
                      case "Databases":
                        bgColor = "bg-purple-100"; textColor = "text-purple-800";
                        break;
                      case "Tools & Frameworks":
                        bgColor = "bg-green-100"; textColor = "text-green-800";
                        break;
                      case "Cloud & Backend":
                        bgColor = "bg-orange-100"; textColor = "text-orange-800";
                        break;
                      case "Hardware / Embedded":
                        bgColor = "bg-red-100"; textColor = "text-red-800";
                        break;
                      case "Soft Skills":
                        bgColor = "bg-gray-200"; textColor = "text-gray-800";
                        break;
                    }

                    return (
                      <motion.span
                        key={skill}
                        className={`px-3 py-1 rounded-full ${bgColor} ${textColor} text-sm font-medium`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        {skill}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* RESUME SECTION */}
        <section
          id="CV"
          className="relative z-10 py-24 px-8 bg-gradient-to-br from-[#f5e6d3] via-[#d9e2ff] to-[#f5f3f2]"
        >
          <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            CV / Resume
          </h2>

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-gray-800">
              You can download my CV here to see my projects, skills, and experience.
            </p>

            <a
              href="/ShwethaRajesh_CV.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              <HiOutlineDownload size={24} />
              Download CV
            </a>

            <p className="text-sm text-gray-600">
              PDF format – 1 page
            </p>
          </div>
        </section>


        {/* CONTACT */}
        <section id="contact" className="py-24 text-center">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Contact
          </h2>

          <motion.div
            className="flex justify-center gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <a href="mailto:shwetha_rajesh@outlook.se" className="flex flex-col items-center text-blue-500 hover:text-purple-500 transition transform hover:-translate-y-1">
              <HiOutlineMail size={50} />
              <span className="mt-2 text-lg font-medium">Email Me</span>
            </a>
            <a href="https://github.com/Shwetha-org" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-800 hover:text-gray-900 transition transform hover:-translate-y-1">
              <FaGithub size={50} />
              <span className="mt-2 text-lg font-medium">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/shwetha-rajesh-a29195358/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-blue-700 hover:text-blue-900 transition transform hover:-translate-y-1">
              <FaLinkedin size={50} />
              <span className="mt-2 text-lg font-medium">LinkedIn</span>
            </a>
          </motion.div>

          <motion.p className="mt-12 text-gray-600" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            Always eager to learn and connect! I’m open to collaborations, internships, or just saying hi 🙂
          </motion.p>
        </section>
      </div>

      {/* FIXED CONTACT + RESUME PANEL */}
      <div className="fixed top-1/4 right-4 z-50 flex flex-col items-center gap-4">        

        {/* FIXED CONTACT + RESUME PANEL */}
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-white/90 backdrop-blur-md p-3 rounded-full shadow">
          <a
            href="/ShwethaRajesh_CV.pdf"
            download
            className="text-blue-600 hover:text-white hover:bg-blue-600 p-2 rounded-full transition"
            title="Download Resume"
          >
            <HiOutlineDownload size={24} />
          </a>

          <a href="mailto:shwetha_rajesh@outlook.se" className="text-blue-500 hover:text-purple-500 transition">
            <HiOutlineMail size={24} />
          </a>
          <a href="https://github.com/Shwetha-org" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 transition">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/shwetha-rajesh-a29195358/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition">
            <FaLinkedin size={24} />
          </a>
        </div>


      </div>
    </div>
  );
}
