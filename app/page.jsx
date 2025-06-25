"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Download, ExternalLink, Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Uday Kumar</h1>
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Projects", "Resume", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleDarkMode}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Uday Kumar</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              <TypewriterText
                texts={[
                  "Computer Science Student",
                  "Data Engineer",
                  "Full Stack Developer",
                  "Machine Learning Enthusiast",
                ]}
              />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Passionate about building innovative solutions through code, web development, and machine learning.
              Currently pursuing B.Tech in CSE with a CGPA of 9.63/10.
            </p>
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm a Computer Science and Engineering student at SASTRA Deemed to be University with a passion for
                technology and innovation. With a strong background in programming, machine learning, and software
                development, I'm eager to contribute to meaningful projects and grow in the tech industry.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Problem Solving
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                  Leadership
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  Team Collaboration
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
                  Time Management
                </span>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <SkillCategory title="Frontend" skills={["HTML", "CSS", "JavaScript", "React"]} />
                  <SkillCategory title="Backend" skills={["Node.js", "Express", "Django", "REST APIs"]} />
                  <SkillCategory title="Database" skills={["MongoDB", "SQLite", "SQL"]} />
                  <SkillCategory title="Languages" skills={["Python", "Java", "C++"]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="The Outfit Hub"
              description="Full-stack e-commerce application with shopping cart, order management, and user authentication. Built with MERN stack."
              tech={["React", "Node.js", "MongoDB", "Express"]}
              githubUrl="https://github.com/udaykumar12352/The-Outfit-Hub"
            />
            <ProjectCard
              title="Quiz Master"
              description="Interactive educational platform with text-to-speech support, real-time scoring, and separate dashboards for teachers and students."
              tech={["Django", "Python", "SQLite", "HTML/CSS"]}
              githubUrl="https://github.com/udaykumar12352/Quiz-Master"
            />
            <ProjectCard
              title="Soyabean Seed Classification"
              description="Machine learning project using SVM, KNN, XGBoost, and CatBoost for seed classification with advanced feature extraction."
              tech={["Python", "Scikit-learn", "XGBoost", "OpenCV"]}
              githubUrl="https://github.com/udaykumar12352/soyabean"
            />
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Resume</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Computer Science student with hands-on experience in data engineering, full-stack development, and machine
              learning. Currently maintaining a 9.63/10 CGPA while gaining practical experience through internships and
              personal projects.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Data Engineer Trainee - PWC</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Feb 2025 - Present</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      • Improved data pipeline efficiency by 20%
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">• Reduced data retrieval time by 15%</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Tech Intern - AICTE Virtual Internship</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Mar 2025 - Apr 2025</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      • Built complete e-commerce application with MERN stack
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Education & Certifications</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">B.Tech Computer Science</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">SASTRA University</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">CGPA: 9.63/10 (2022-2026)</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Key Certifications</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">• ML Specialization - Stanford</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">• Web Development - Infosys</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">• SQL & Databases - Cognitive Class</p>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => {
                // Create a downloadable resume link
                const link = document.createElement("a")
                link.href = "/Uday_kumar_Resume.pdf" // You'll need to add your actual resume file
                link.download = "Uday_Kumar_Resume.pdf"
                link.click()
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a href="mailto:udaykumarvakacharla@gmail.com" className="hover:text-blue-600 transition-colors">
                    udaykumarvakacharla@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <a href="tel:+917386950788" className="hover:text-blue-600 transition-colors">
                    +91 7386950788
                  </a>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900"
                  onClick={() => window.open("https://www.linkedin.com/in/uday-vakacharla-89b527312/", "_blank")}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900"
                  onClick={() => window.open("https://github.com/udaykumar12352", "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Vakacharla Uday Kumar. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">Built with Next.js, Tailwind CSS, and lots of ☕</p>
        </div>
      </footer>
    </div>
  )
}

function TypewriterText({ texts }) {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex]

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1))
        } else {
          setCurrentText(current.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 1500)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % texts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <span>
      {currentText}
      <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
    </span>
  )
}

function SkillCategory({ title, skills }) {
  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
      <h4 className="font-medium mb-3 text-blue-600 dark:text-blue-400">{title}</h4>
      <div className="space-y-2">
        {skills.map((skill) => (
          <div key={skill} className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ title, description, tech, githubUrl, demoUrl }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </Button>
          
        </div>
      </CardContent>
    </Card>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("Thank you for your message! I'll get back to you soon.")
      setIsSubmitting(false)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(""), 5000)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          name="name"
          placeholder="Your Name"
          className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Input
          name="subject"
          placeholder="Subject"
          className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      {submitStatus && (
        <div className="p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-sm">
          {submitStatus}
        </div>
      )}
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
