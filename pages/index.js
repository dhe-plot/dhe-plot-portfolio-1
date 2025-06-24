import Head from "next/head"
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from "react-icons/ai"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { useState } from "react"
import deved from "../public/dev-ed-wave.jpg"
import code from "../public/code.png"
import design from "../public/design.png"
import consulting from "../public/consulting.png"
import Image from "next/image"
import flier0 from "../public/flier0.jpg"
import flier2 from "../public/flier2.png"
import flier3 from "../public/flier3.png"
import flier4 from "../public/flier4.png"
import flier6 from "../public/flier6.png"
import flier7 from "../public/flier7.png"
import flier8 from "../public/flier8.png"
import Navbar from "../components/Navbar"
import ServiceCard from "../components/ServiceCard"
import Gallery from "../components/Gallery"
import { motion } from "framer-motion"

export default function Home() {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div className={darkMode ? "" : "dark"}>
            <Head>
                <title>Dhe-Plot | Procurement & Creative Marketing</title>
                <meta name="description" content="Procurement and creative marketing services by Dayo Ganiyu. Expertise in procurement, marketing strategy, branding, and consulting." />
                <meta property="og:title" content="Dhe-Plot | Procurement & Creative Marketing" />
                <meta property="og:description" content="Procurement and creative marketing services by Dayo Ganiyu. Expertise in procurement, marketing strategy, branding, and consulting." />
                <meta property="og:image" content="/dev-ed-wave.jpg" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Dhe-Plot | Procurement & Creative Marketing" />
                <meta name="twitter:description" content="Procurement and creative marketing services by Dayo Ganiyu." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="  bg-zinc-300 px-10 font-operatorMonoMedium dark:bg-zinc-900 md:px-20 lg:px-40">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <motion.section
                  className="min-h-screen"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                    <div className="text-center p-10 py-10">
                        <h2 className="text-6xl py-2 font-operatorMono text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                            DAYO GANIYU
                        </h2>
                        <h3 className="text-4xl py-2 dark:text-white md:text-3xl">
                            Procurement & Creative Marketer
                        </h3>
                        <p className="text-xl py-5 leading-8 text-gray-700 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                        Providing marketing services with expertise in procurement of goods and market strategy formulation.
                        Join me, let's brand and improve your business while leveraging new technology.
                        </p>
                        <div className="flex justify-center gap-6 py-3">
                            <a href="/cv.pdf" download className="bg-teal-600 text-white px-6 py-2 rounded-lg shadow hover:bg-teal-700 transition">Download CV</a>
                        </div>
                        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                            <a href="https://twitter.com/dhe_plot" aria-label="Twitter">
                                <AiFillTwitterCircle />
                            </a>
                            <a href="https://www.linkedin.com/in/dayoganiyu/" aria-label="LinkedIn">
                                <AiFillLinkedin />
                            </a>
                            <a href="https://instagram.com/dhe_plot" aria-label="Instagram">
                                <AiFillInstagram />
                            </a>
                        </div>
                        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-70 md:w-70">
                            <Image src={deved} layout="fill" objectFit="cover" alt="Dayo Ganiyu portrait" priority />
                        </div>
                    </div>
                </motion.section>
                <motion.section
                  className="py-10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <h3 className="text-4xl py-1 dark:text-white text-center">About Me</h3>
                    <p className="text-xl py-2 leading-8 text-gray-800 dark:text-gray-200 max-w-2xl mx-auto text-center">
                        {/* TODO: Add professional summary and key skills here */}
                        I possess a strong background in communication, sales, marketing, and team leadership. I am passionate about helping brands grow and thrive in competitive markets.
                    </p>
                </motion.section>
                <motion.section
                  className="py-10 bg-zinc-100 dark:bg-zinc-800"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h3 className="text-4xl py-1 dark:text-white text-center">Experience</h3>
                    <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
                        {/* Garden Investment */}
                        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
                            <h4 className="text-2xl font-semibold text-teal-700 dark:text-teal-400">Garden Investment</h4>
                            <p className="text-gray-600 dark:text-gray-300">2017 – Present</p>
                            <p className="font-medium">Sales/Marketer</p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mt-2">
                                <li>Supervised and Trained Employees</li>
                                <li>Marketing Strategies</li>
                            </ul>
                        </div>
                        {/* Al Azeezah Int'l Ltd */}
                        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
                            <h4 className="text-2xl font-semibold text-teal-700 dark:text-teal-400">Al Azeezah Int'l Ltd</h4>
                            <p className="text-gray-600 dark:text-gray-300">2018 – 2020</p>
                            <p className="font-medium">Procurement/Accountant</p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mt-2">
                                <li>Client Relationship</li>
                                <li>Sourcing</li>
                                <li>Inventory Management</li>
                                <li>Bookkeeping</li>
                            </ul>
                        </div>
                        {/* Softdeal Communications */}
                        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
                            <h4 className="text-2xl font-semibold text-teal-700 dark:text-teal-400">Softdeal Communications</h4>
                            <p className="text-gray-600 dark:text-gray-300">2018 – 2020</p>
                            <p className="font-medium">Admin/Marketing</p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mt-2">
                                <li>Marketing</li>
                                <li>Recruitment and Training</li>
                                <li>Supervision</li>
                            </ul>
                        </div>
                        {/* INEC */}
                        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
                            <h4 className="text-2xl font-semibold text-teal-700 dark:text-teal-400">INEC</h4>
                            <p className="text-gray-600 dark:text-gray-300">2019</p>
                            <p className="font-medium">Polling Officer</p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mt-2">
                                <li>Accounting</li>
                                <li>Voter Management</li>
                            </ul>
                        </div>
                        {/* Oxford Provinces Alliance Ltd */}
                        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
                            <h4 className="text-2xl font-semibold text-teal-700 dark:text-teal-400">Oxford Provinces Alliance Ltd</h4>
                            <p className="text-gray-600 dark:text-gray-300">2020</p>
                            <p className="font-medium">Business Development Manager</p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mt-2">
                                <li>Managing and Motivating Teams</li>
                                <li>Sourcing Investors</li>
                                <li>Marketing</li>
                            </ul>
                        </div>
                        {/* Home Pilot Pay */}
                        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
                            <h4 className="text-2xl font-semibold text-teal-700 dark:text-teal-400">Home Pilot Pay</h4>
                            <p className="text-gray-600 dark:text-gray-300">2021 – Present</p>
                            <p className="font-medium">Sales/Marketing</p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mt-2">
                                <li>Sales Promotion</li>
                                <li>Customer Feedback</li>
                                <li>Product/Service Education</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>
                <motion.section
                  className="py-10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <h3 className="text-4xl py-1 dark:text-white text-center">Skills</h3>
                    <div className="max-w-3xl mx-auto flex flex-col gap-6">
                        {/* Animated skill bars */}
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-lg font-medium text-teal-700 dark:text-teal-400">Sales</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">95%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                                <div className="bg-teal-500 h-3 rounded-full transition-all duration-700" style={{width: '95%'}}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-lg font-medium text-teal-700 dark:text-teal-400">Marketing</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">90%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                                <div className="bg-teal-500 h-3 rounded-full transition-all duration-700" style={{width: '90%'}}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-lg font-medium text-teal-700 dark:text-teal-400">Team Leadership</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">85%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                                <div className="bg-teal-500 h-3 rounded-full transition-all duration-700" style={{width: '85%'}}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-lg font-medium text-teal-700 dark:text-teal-400">Digital Marketing</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">80%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                                <div className="bg-teal-500 h-3 rounded-full transition-all duration-700" style={{width: '80%'}}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-lg font-medium text-teal-700 dark:text-teal-400">Research</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">75%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                                <div className="bg-teal-500 h-3 rounded-full transition-all duration-700" style={{width: '75%'}}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-lg font-medium text-teal-700 dark:text-teal-400">Data Analysis</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">70%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                                <div className="bg-teal-500 h-3 rounded-full transition-all duration-700" style={{width: '70%'}}></div>
                            </div>
                        </div>
                    </div>
                </motion.section>
                <motion.section
                  className="py-10 bg-zinc-100 dark:bg-zinc-800"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <h3 className="text-4xl py-1 dark:text-white text-center">Education & Awards</h3>
                    <div className="max-w-3xl mx-auto text-center">
                        {/* TODO: Add education and awards here */}
                        <p className="text-lg text-gray-700 dark:text-gray-200">B.Sc. Economics, University of Ilorin (2013–2017)</p>
                        <p className="text-lg text-gray-700 dark:text-gray-200">Productivity Award, Jubileesavers Soft-Skill Certificate</p>
                    </div>
                </motion.section>
                <motion.section
                  className="py-10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <h3 className="text-4xl py-1 dark:text-white text-center">Contact</h3>
                    <div className="max-w-2xl mx-auto">
                        <form className="bg-white dark:bg-zinc-900 shadow rounded-lg p-8 flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-gray-100"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-gray-100"
                                required
                            />
                            <textarea
                                placeholder="Your Message"
                                rows={5}
                                className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-gray-100"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-teal-600 text-white px-6 py-2 rounded-lg shadow hover:bg-teal-700 transition font-semibold"
                                disabled
                            >
                                Send Message (Coming Soon)
                            </button>
                        </form>
                        <div className="text-center mt-8">
                            <p className="text-lg text-gray-700 dark:text-gray-200">Email: your.email@example.com</p>
                            <p className="text-lg text-gray-700 dark:text-gray-200">LinkedIn: <a href="https://www.linkedin.com/in/dayoganiyu/" className="text-teal-600 underline">dayoganiyu</a></p>
                        </div>
                    </div>
                </motion.section>
                <motion.section
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                    <section>
                        <div>
                            <h3 className="text-4xl py-1 dark:text-white ">Services I offer</h3>
                            <p className="text-xl py-2 leading-8 text-gray-800 dark:text-gray-200">
                            I run a procurement and creative marketing company with our services spanning - 
                            Procurement of Materials, Experiential Marketing, Digital Marketing, 
                            Advisory Services in Marketing and Promotions. We have worked with 
                                <span className="text-teal-500"> agencies </span>
                                consulted for <span className="text-teal-500">startups </span>
                                and collaborated with talented people to create products for
                                both business and consumer use.
                            </p>
                        </div>
                        <div className="md:flex gap-10">
                            <ServiceCard
                              image={design}
                              title="Procurement Services"
                              description="Sourcing, design and production of materials for the promotion of brands and gift items for celebrations i.e. weddings, naming and birthday celebrations."
                              alt="Procurement services icon"
                            />
                            <ServiceCard
                              image={code}
                              title="Promotion Services"
                              description="Do you have an idea for your next great campaign? Let's make it a reality."
                              alt="Promotion services icon"
                            />
                            <ServiceCard
                              image={consulting}
                              title="Branding & Consulting"
                              description="Whether it is a new marketing enquiry, an exciting campaign idea or you simply wish to bounce an idea off us: We will be glad to pick our lines. We pay considerable attention to understand the dynamic marketing challenges of our clients. As a strategic partner we provide exceptional services that ensure efficient communication between brands and consumers, to achieve long term marketing goals and also address short-term objectives."
                              alt="Branding and consulting icon"
                            />
                        </div>
                    </section>
                </motion.section>
                <motion.section
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                >
                <Gallery
                  images={[
                    { src: flier0, alt: "Promotional flier 0" },
                    { src: flier2, alt: "Promotional flier 2" },
                    { src: flier3, alt: "Promotional flier 3" },
                    { src: flier4, alt: "Promotional flier 4" },
                    { src: flier7, alt: "Promotional flier 7" },
                    { src: flier8, alt: "Promotional flier 8" },
                  ]}
                />
                </motion.section>
            </main>
        </div>
    )
}
