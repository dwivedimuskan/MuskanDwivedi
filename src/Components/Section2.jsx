import React from 'react'

const Section2 = () => {
    return (
        <section className="bg-[#F5F1EA] py-24 px-6 md:px-12">

            {/* About Me */}
            <div className="max-w-5xl mx-auto text-center fade-in-up">

                <p className="uppercase tracking-[4px] text-[#8B7355] mb-4">
                    About Me
                </p>

                <h2 className="text-4xl md:text-5xl font-light text-[#251F17] mb-8">
                    Crafting Digital Experiences Through Code
                </h2>

                <div className="space-y-6 text-gray-700 text-lg leading-8 max-w-4xl mx-auto">
                    <p>
                        I am a Computer Science graduate and aspiring Software
                        Engineer with a strong interest in web development and
                        problem-solving. I enjoy building responsive,
                        user-friendly applications that combine clean design
                        with efficient functionality.
                    </p>

                    <p>
                        My experience includes working with technologies such as
                        React, JavaScript, HTML, CSS, Tailwind CSS, Java,
                        Spring Boot, and MySQL. Through academic projects and
                        personal development work, I have gained hands-on
                        experience in creating modern web applications and
                        solving real-world challenges.
                    </p>

                    <p>
                        I am continuously learning new technologies, improving
                        my development skills, and exploring innovative ways to
                        create meaningful digital experiences.
                    </p>
                </div>
            </div>

            {/* Core Competencies */}
            <div className="max-w-7xl mx-auto mt-24">

                <p className="uppercase tracking-[4px] text-[#8B7355] text-center mb-4">
                    Expertise
                </p>

                <h2 className="text-4xl md:text-5xl font-light text-center text-[#251F17] mb-16">
                    Core Competencies
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-[#251F17] mb-4">
                            Technical Expertise
                        </h3>

                        <p className="text-gray-600 leading-7 mb-6">
                            Building responsive and scalable web applications
                            using modern technologies.
                        </p>

                        <p className="font-medium text-[#251F17] mb-3">
                            Technologies
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {[
                                "React",
                                "JavaScript",
                                "Java",
                                "Spring Boot",
                                "MySQL",
                                "HTML5",
                                "CSS3",
                                "Tailwind CSS"
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-[#F5F1EA] rounded-full text-sm text-[#251F17]"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-[#251F17] mb-4">
                            Tools
                        </h3>

                        <p className="text-gray-600 leading-7 mb-6">
                            Leveraging industry-standard tools for efficient
                            development and collaboration.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {[
                                "Git",
                                "GitHub",
                                "VS Code",
                                "Postman",
                                "IntelliJ IDEA",
                                "Chrome DevTools"
                            ].map((tool) => (
                                <span
                                    key={tool}
                                    className="px-3 py-1 bg-[#F5F1EA] rounded-full text-sm text-[#251F17]"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-[#251F17] mb-4">
                            Soft Skills
                        </h3>

                        <p className="text-gray-600 leading-7 mb-6">
                            Combining technical expertise with communication,
                            teamwork, and continuous learning.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {[
                                "Problem Solving",
                                "Communication",
                                "Teamwork",
                                "Adaptability",
                                "Time Management",
                                "Continuous Learning"
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-[#F5F1EA] rounded-full text-sm text-[#251F17]"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Section2