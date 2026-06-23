import React from 'react'
import { Link } from 'react-router-dom'

const Contacts = () => {
    return (
        <div className="min-h-screen bg-[#251F17] px-6 py-24">

            <div className="max-w-6xl mx-auto">

                <p className="uppercase tracking-[4px] text-[#C5B8A5] text-center mb-4">
                    Contact /
                    <Link
                        to="/"
                        className="ml-2 hover:text-[#F5F1EA] transition-colors"
                    >
                        HOME
                    </Link>
                </p>

                <h1 className="text-5xl font-light text-center text-[#F5F1EA] mb-16">
                    Get In Touch
                </h1>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl text-[#F5F1EA] mb-6">
                            Let's Connect
                        </h2>

                        <p className="text-gray-300 leading-8 mb-10">
                            Whether you have a project idea, internship opportunity,
                            or simply want to connect, I'd love to hear from you.
                        </p>

                        <div className="space-y-6 text-gray-300">

                            <div>
                                <h3 className="text-white font-semibold">
                                    Email
                                </h3>
                                <a
                                    href="mailto:muskand713@gmail.com"
                                    className="text-[#C5B8A5] hover:text-[#F5F1EA] transition-colors"
                                >
                                    muskand713@gmail.com
                                </a>
                            </div>

                            <div>
                                <h3 className="text-white font-semibold">
                                    Phone
                                </h3>
                                <a
                                    href="tel:+919890668214"
                                    className="text-[#C5B8A5] hover:text-[#F5F1EA] transition-colors"
                                >
                                    +91 98906 68214
                                </a>
                            </div>

                            <div>
                                <h3 className="text-white font-semibold">
                                    Location
                                </h3>
                                <p>India</p>
                            </div>

                            <div>
                                <h3 className="text-white font-semibold">
                                    GitHub
                                </h3>
                                <a
                                    href="https://github.com/dwivedimuskan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#C5B8A5] hover:text-[#F5F1EA] transition-colors"
                                >
                                    github.com/dwivedimuskan
                                </a>
                            </div>

                            <div>
                                <h3 className="text-white font-semibold">
                                    LinkedIn
                                </h3>
                                <a
                                    href="https://www.linkedin.com/in/muskan-dwivedi-736b17262/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#C5B8A5] hover:text-[#F5F1EA] transition-colors"
                                >
                                    linkedin.com/in/muskan-dwivedi-736b17262
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-xl p-8">

                        <form className="space-y-5">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border p-3 rounded-lg outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border p-3 rounded-lg outline-none"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full border p-3 rounded-lg outline-none"
                            />

                            <textarea
                                rows="6"
                                placeholder="Your Message"
                                className="w-full border p-3 rounded-lg outline-none resize-none"
                            ></textarea>

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

        </div>
    )
}

export default Contacts