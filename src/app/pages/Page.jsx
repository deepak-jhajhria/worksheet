"use client";
import { Container } from "@mui/material"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"

const Page = () => {
    const [first, setfirst] = useState(0)
    function tabchange(tabs) {
        setfirst(tabs)
    }
    const workData = [
        {
            january: [
                { id: 1, title: "page name", gitHubLink: "https://github.com", liveLink: "https://github.com", image: "", date: "2021-01-01", },
                { id: 2, title: "page name", gitHubLink: "https://github.", liveLink: "https://github.com", image: "", date: "202" }
            ]
        },
        {
            feb: [
                {
                    id: 1,
                    title: "page name 2",
                    gitHubLink: "https://github.com",
                    liveLink: "https://github.com",
                    image: "",
                    date: "2021-01-01",
                },
            ]
        },
        {
            march: [
                {
                    id: 1,
                    title: "page name 3",
                    gitHubLink: "https://github.com",
                    liveLink: "https://github.com",
                    image: "",
                    date: "2021-01-01",
                },
            ]
        },
    ]
    return (
        <Container maxWidth="xl">
            <div className="grid grid-cols-8">
                <div className="min-h-screen col-span-2 bg-white rounded-lg shadow-md">
                    <h1 className="pt-10 font-sans text-3xl font-medium text-center text-black">WorkSheet 2024</h1>
                    <div className="flex flex-col items-center justify-center gap-6 pt-16">
                        <button onClick={() => tabchange(0)} className={`${first === 0 && "text-[#1B59F8] bg-[#E9EFFF]"} text-base capitalize font-sans py-3 px-10 rounded-lg`}>January</button>
                        <button onClick={() => tabchange(1)} className={`${first === 1 && "text-[#1B59F8] bg-[#E9EFFF]"} text-base capitalize font-sans py-3 px-10 rounded-lg`}>February</button>
                        <button onClick={() => tabchange(2)} className={`${first === 2 && "text-[#1B59F8] bg-[#E9EFFF]"} text-base capitalize font-sans py-3 px-10 rounded-lg`}>March</button>
                    </div>
                </div>
                <div className="col-span-6 p-20">
                    {
                        first === 0 && <div className="p-4 bg-white shadow-xl rounded-2xl">
                            <h2 className="text-2xl text-black opacity-90">January Topics :-</h2>
                            <div className="flex flex-col gap-5">
                                {
                                    workData[0].january.map((data, index) => (
                                        <div className="flex pt-5 min-h-20" key={index}>
                                            <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs bg-green-500 rounded-full">{data.id}</span>
                                            <Image src={data.image} alt={data.title} className=" rounded-xl max-w-[200px] w-full" />
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-xl font-bold capitalize">{data.title}<span className="ml-5 text-sm font-light opacity-70">Date of submisson:- {data.date}</span></h3>
                                                <Link href={data.gitHubLink} className="text-gray-600">GitHub link:- {data.gitHubLink}</Link>
                                                <Link href={data.liveLink} className="text-gray-600">Live link:- {data.liveLink}</Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    }
                    {
                        first === 1 && <div className="p-4 bg-white shadow-xl rounded-2xl">
                            <h2 className="text-2xl text-black opacity-90">February Topics :-</h2>
                            <div className="flex flex-col gap-5">
                                {
                                    workData[1].feb.map((data, index) => (
                                        <div className="flex pt-3 min-h-20" key={index}>
                                            <Image src={data.image} alt={data.title} className=" rounded-xl max-w-[200px] w-full" />
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-xl font-bold capitalize">{data.title}<span className="ml-5 text-sm font-light opacity-70">Date of submisson:- {data.date}</span></h3>
                                                <Link href={data.gitHubLink} className="text-gray-600">GitHub link:- {data.gitHubLink}</Link>
                                                <Link href={data.liveLink} className="text-gray-600">Live link:- {data.liveLink}</Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    }
                    {
                        first === 2 && <div className="p-4 bg-white shadow-xl rounded-2xl">
                            <h2 className="text-2xl text-black opacity-90">March Topics :-</h2>
                            <div className="flex flex-col gap-5">
                                {
                                    workData[2].march.map((data, index) => (
                                        <div className="flex pt-3 min-h-20" key={index}>
                                            <Image src={data.image} alt={data.title} className=" rounded-xl max-w-[200px] w-full" />
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-xl font-bold capitalize">{data.title}<span className="ml-5 text-sm font-light opacity-70">Date of submisson:- {data.date}</span></h3>
                                                <Link href={data.gitHubLink} className="text-gray-600">GitHub link:- {data.gitHubLink}</Link>
                                                <Link href={data.liveLink} className="text-gray-600">Live link:- {data.liveLink}</Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    }

                </div>
            </div>
        </Container >
    )
}

export default Page
