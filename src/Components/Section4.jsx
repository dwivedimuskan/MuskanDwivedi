import React from 'react'

const Section4 = () => {
    return (
        <section className="bg-[#F5F1EA] py-24 px-6 md:px-12">

            <div className="max-w-7xl mx-auto">

                <p className="uppercase tracking-[4px] text-[#8B7355] text-center mb-4">
                    Contact
                </p>

                <h2 className="text-4xl md:text-5xl font-light text-center text-[#251F17] mb-16">
                    Let's Connect
                </h2>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Left Side */}
                    <div>
                        <h3 className="text-3xl font-semibold text-[#251F17] mb-6">
                            Get In Touch
                        </h3>

                        <p className="text-gray-700 leading-8 mb-8">
                            I'm always open to discussing new opportunities,
                            collaborations, or innovative projects. Feel free
                            to reach out if you'd like to work together.
                        </p>

                        <div className="space-y-6">

                            <div>
                                <h4 className="font-semibold text-[#251F17]">
                                    Email
                                </h4>
                                <a
                                    href="mailto:muskand713@gmail.com"
                                    className="text-gray-600 hover:text-[#251F17] transition-colors"
                                >
                                    muskand713@gmail.com
                                </a>
                            </div>

                            <div>
                                <h4 className="font-semibold text-[#251F17]">
                                    Phone
                                </h4>
                                <a
                                    href="tel:+919890668214"
                                    className="text-gray-600 hover:text-[#251F17] transition-colors"
                                >
                                    +91 98906 68214
                                </a>
                            </div>

                            <div>
                                <h4 className="font-semibold text-[#251F17]">
                                    Location
                                </h4>
                                <p className="text-gray-600">
                                    India
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-[#251F17]">
                                    LinkedIn
                                </h4>
                                <a
                                    href="https://www.linkedin.com/in/muskan-dwivedi-736b17262/"
                                    className="text-gray-600 hover:text-[#251F17]"
                                >
                                    linkedin.com/in/muskan-dwivedi-736b17262
                                </a>
                            </div>

                            <div>
                                <h4 className="font-semibold text-[#251F17]">
                                    GitHub
                                </h4>
                                <a
                                    href="https://github.com/dwivedimuskan"
                                    className="text-gray-600 hover:text-[#251F17] transition-colors"
                                >
                                    github.com/dwivedimuskan
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="bg-white p-8 rounded-xl shadow-sm">

                        <form className="space-y-6">

                            <div>
                                <label className="block mb-2 text-[#251F17]">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-[#251F17]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-[#251F17]">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter subject"
                                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-[#251F17]">
                                    Message
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-[#251F17] text-white px-8 py-3 rounded-lg hover:opacity-90 transition"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Section4