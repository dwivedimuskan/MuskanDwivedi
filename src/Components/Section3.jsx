import React from 'react'

const projects = [
    {
        title: "SEO Analyzer",
        description:
            "A web application that analyzes website SEO performance and provides actionable insights for optimization.",
        tech: ["React", "Java", "Spring Boot"],
        github: "#",
        live: "#"
    },
    {
        title: "TubiSmart",
        description:
            "An AI-powered YouTube transcript summarizer that generates concise summaries from video content.",
        tech: ["Python", "Flask", "HTML", "JavaScript"],
        github: "#",
        live: "#"
    },
    {
        title: "Portfolio Website",
        description:
            "A modern responsive portfolio showcasing my skills, projects, and professional journey.",
        tech: ["React", "Tailwind CSS"],
        github: "#",
        live: "#"
    }
]

const Section3 = () => {
    return (
        <section className="bg-[#251F17] py-24 px-6 md:px-12">

            <div className="max-w-7xl mx-auto">

                <p className="uppercase tracking-[4px] text-[#C5B8A5] text-center mb-4">
                    Portfolio
                </p>

                <h2 className="text-4xl md:text-5xl font-light text-center text-[#F5F1EA] mb-16">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#30281F] p-8 rounded-xl border border-[#453A2F] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-[#F5F1EA] mb-4">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 leading-7 mb-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-[#F5F1EA] text-[#251F17] text-sm rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    className="border border-white px-4 py-2 text-sm text-white hover:bg-white hover:text-[#251F17] transition"
                                >
                                    GitHub
                                </a>

                                <a
                                    href={project.live}
                                    className="bg-white text-[#251F17] px-4 py-2 text-sm hover:opacity-90 transition"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Section3