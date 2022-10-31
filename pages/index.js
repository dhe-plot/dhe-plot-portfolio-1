import Head from "next/head"
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from "react-icons/ai"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { useState } from "react"
import deved from "../public/dev-ed-wave.png"
import code from "../public/code.png"
import design from "../public/design.png"
import consulting from "../public/consulting.png"
import Image from "next/image"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"

export default function Home() {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Dhe-Plot</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="  bg-zinc-300 px-10 font-operatorMonoMedium dark:bg-zinc-900 md:px-20 lg:px-40">
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 flex justify-between dark:text-white">
                        <h1 className="font-burtons text-2xl">Dhe-Plot</h1>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={() => setDarkMode(!darkMode)}
                                    className=" cursor-pointer text-2xl"
                                />
                            </li>
                            <li>
                                <a
                                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                                    href="https://www.dhe-plot.company.site/"
                                >
                                    Website
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center p-10 py-10">
                        <h2 className="text-5xl py-2 font-operatorMono text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                            DAYO GANIYU
                        </h2>
                        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                            Procurement & Creative Marketer
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-700 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                        Providing marketing services with expertise in procurements of goods and market strategy formulation
                        Join me lets brand and Improve your business while leveraging on new technology
                    
                        </p>
                        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                            <a href="https://twitter.com/dhe_plot">
                                <AiFillTwitterCircle />
                            </a>

                            <a href="https://www.linkedin.com/in/dayoganiyu/">
                                <AiFillLinkedin />
                            </a>
                            <a href="https://instagram.com/dhe_plot">
                                <AiFillInstagram />
                            </a>
                        </div>
                        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                            <Image src={deved} layout="fill" objectFit="cover" />
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                        I run a procurement and creative marketing company with our services spanning - 
                        Procurement of Materials, Experiencial Marketing, Digital Marketing, 
                        Advisory Services in Marketing and Promotions. We have worked with 
                            <span className="text-teal-500"> agencies </span>
                            consulted for <span className="text-teal-500">startups </span>
                            and collaborated with talanted people to create products for
                            both business and consumer use.
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                        </p>
                    </div>
                    <div className="md:flex gap-10">
                        <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white flex-1">
                            <Image src={design} width={100} height={100} />
                            <h3 className="text-xl text-emerald-600 font-medium pt-8 pb-2  ">
                                Procurement Services
                            </h3>
                            <p className="py-2">
                                Sourcing, design and production of materials for the promotion of brands 
                                and gift Items for celeberations i.e Weddings, Naming and birthday celeberations
                            </p>
                          
                        </div>
                        <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white flex-1">
                            <Image src={code} width={100} height={100} />
                            <h3 className="text-xl text-emerald-600 font-medium pt-8 pb-2 ">
                                Promotion Services
                            </h3>
                            <p className="py-2">
                                Do you have an idea for your next great campaign? Let's make it a
                                reality.
                            </p>
                           
                        </div>
                        <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white flex-1">
                            <Image src={consulting} width={100} height={100} />
                            <h3 className="text-xl text-emerald-600 font-medium pt-8 pb-2 ">
                                Branding & Consulting
                            </h3>
                            <p className="py-2">
                                Whether it is a new marketing enquiry, an exciting campaign idea or 
                                you simply wish to bounce an idea off us: We will be glad to pick our lines
                                We pay considerable attention to understand the dynamic marketing challenges of our clients. 
                                as a strategic partner we provide exceptional services that ensure efficient communication 
                                between brands and consumers, to achieve long term marketing goal 
                                and also address short-term objectives
                            </p>
                           
                        </div>
                    </div>
                </section>
                <section className="py-10">
                    
                       
                        
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1 ">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={flier2}

                            />
                            </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={flier3}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web3}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web4}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web5}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web6}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
