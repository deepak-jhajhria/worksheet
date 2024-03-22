"use client";
import { Container, Skeleton } from "@mui/material"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"
import image from "../../../public/assets/images/248labs.png"
import cloopp from "../../../public/assets/images/cloopp.png"
import nexai from "../../../public/assets/images/nexai.png"
import exgames from "../../../public/assets/images/exgames.bmp"
import dino from "../../../public/assets/images/dinolfg.png"
import coin from "../../../public/assets/images/coin.png"
import furniture from "../../../public/assets/images/furniture.png"
import calculator from "../../../public/assets/images/calculator.jpg"
import dompkong from "../../../public/assets/images/dompkong.png"
import counter from "../../../public/assets/images/counter.png"
import lemon from "../../../public/assets/images/lemon.png"

const Page = () => {
    const [first, setfirst] = useState(0)
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, [])
    function tabchange(tabs) {
        setfirst(tabs)
    }
    const workData = [
        {
            january: [
                { id: 1, title: "DompKong", gitHubLink: "https://github.com/deepak-jhajhria/DompKong.git", liveLink: "https://domp-kong.vercel.app/", image: (dompkong), date: 10, },
                { id: 2, title: "advance counter", gitHubLink: "https://github.com/deepak-jhajhria/advancecounter.git", liveLink: "https://advancecounter.vercel.app/", image: (counter), date: 11 },
                { id: 3, title: "Wuao Coin", gitHubLink: "https://github.com/deepak-jhajhria/Wuao-Coin.git", liveLink: "https://wuao-coin.vercel.app/", image: (coin), date: 14 },
                { id: 4, title: "Urban Nft", gitHubLink: "https://github.com/deepak-jhajhria/Urban-Nft.git", liveLink: "https://urban-nft.vercel.app/", image: (image), date: 17 },
                { id: 5, title: "Furniture", gitHubLink: "https://github.com/deepak-jhajhria/furniture-page.git", liveLink: "https://furniture-page-seven.vercel.app/", image: (furniture), date: 20 },
                { id: 6, title: "Lamon Wares", gitHubLink: "https://github.com/deepak-jhajhria/LamonWares.git", liveLink: "https://lamon-wares.vercel.app/", image: (lemon), date: 26 },
                { id: 7, title: "To Do", gitHubLink: "https://github.com/deepak-jhajhria/To-Do.git", liveLink: "https://to-do-liard-nu.vercel.app/", image: (image), date: 30 },
            ]
        },
        {
            feb: [
                { id: 1, title: "Exclusive Games", gitHubLink: "https://github.com/deepak-jhajhria/Exclusive-games.git", liveLink: "https://exclusive-games-one.vercel.app/", image: (exgames), date: "07" },
                { id: 2, title: "Dino-LFG", gitHubLink: "https://github.com/deepak-jhajhria/Dino-LFG.git", liveLink: "https://dino-lfg-chi.vercel.app/", image: (dino), date: 12 },
                { id: 3, title: "Nex-Ai", gitHubLink: "https://github.com/deepak-jhajhria/Nex-AI.git", liveLink: "https://nex-ai-eta.vercel.app/", image: (nexai), date: 16 },
                { id: 4, title: "Calculator", gitHubLink: "https://github.com/deepak-jhajhria/calculator.git", liveLink: "https://calculator-psi-blue.vercel.app/", image: (calculator), date: 21 },
                { id: 5, title: "Nex-Ai Bootstrap", gitHubLink: "https://github.com/deepak-jhajhria/Nex-Ai-Bootstrap.git", liveLink: "https://nex-ai-bootstrap-one.vercel.app/", image: (nexai), date: 28 },
            ]
        },
        {
            march: [
                { id: 1, title: "Cloopp", gitHubLink: "https://github.com/deepak-jhajhria/cloopp.git", liveLink: "https://cloopp.vercel.app/", image: (cloopp), date: "06", },
                { id: 2, title: "HTML Vite", gitHubLink: "https://github.com/deepak-jhajhria/main-topics.git", liveLink: "https://htmlvite.vercel.app/", image: (image), date: 16 },
                { id: 3, title: "Form-validation", gitHubLink: "https://github.com/deepak-jhajhria/formValidationReact.git", liveLink: "https://form-validation-react-one.vercel.app/", image: (image), date: 18 },
                { id: 4, title: "topics", gitHubLink: "https://github.com/deepak-jhajhria/topics.git", liveLink: "https://topics-rho.vercel.app/", image: (image), date: 20 },
                { id: 5, title: "worksheet", gitHubLink: "https://github.com/deepak-jhajhria/worksheet.git", liveLink: "https://worksheet-alpha.vercel.app/", image: (image), date: 22 },
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
                <div className="h-[710px] col-span-6 p-20 overflow-y-scroll">
                    {
                        first === 0 && <div className="p-4 bg-white shadow-xl rounded-2xl">
                            {isLoading ? (<Skeleton variant="text" sx={{ fontSize: '2rem' }} />) : (<h2 className="text-2xl text-black opacity-90">January Topics :-</h2>)}
                            <div className="flex flex-col gap-5">
                                {workData[0].january.map((data, index) => (
                                    <div className="flex gap-3 pt-5 min-h-20" key={index}>
                                        {isLoading ? (<Skeleton variant="text" sx={{ fontSize: '3rem' }} />) : (<span className="flex items-center justify-center p-2 text-xs text-white bg-green-500 rounded-full">{data.id}</span>)}
                                        {isLoading ? (<Skeleton sx={{ bgcolor: 'grey.100' }} variant="rounded" width={200} height={118} />) : (<Image src={data.image} alt={data.title} className=" rounded-xl max-w-[200px] w-full" width={200} height={118} />)}
                                        <div className="flex flex-col max-w-[470px] w-full gap-2">
                                            {isLoading ? (<Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />) : (<h3 className="text-xl font-bold capitalize">{data.title}<span className="ml-5 text-sm font-light opacity-90">Date of submisson:- {data.date}-01-2024</span></h3>)}
                                            {isLoading ? (<Skeleton variant="text" sx={{ fontSize: '1rem' }} />) : (<Link target="_blank" href={data.gitHubLink} className="text-gray-600">GitHub link:- <span className="text-blue-500 ">{data.gitHubLink}</span></Link>)}
                                            {isLoading ? (<Skeleton variant="text" sx={{ fontSize: '1rem' }} />) : (<Link target="_blank" href={data.liveLink} className="text-gray-600">Live link:- <span className="text-blue-500">{data.liveLink}</span></Link>)}
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    }
                    {
                        first === 1 && <div className="p-4 bg-white shadow-xl rounded-2xl">
                            {isLoading ? (<Skeleton variant="text" sx={{ fontSize: '2rem' }} />) : (<h2 className="text-2xl text-black opacity-90">February Topics :-</h2>)}
                            <div className="flex flex-col gap-5">
                                {workData[1].feb.map((data, index) => (
                                    <div className="flex gap-3 pt-5 min-h-20" key={index}>
                                        {isLoading ? (<Skeleton variant="text" sx={{ fontSize: '3rem' }} />) : (<span className="flex items-center justify-center p-2 text-xs text-white bg-green-500 rounded-full">{data.id}</span>)}
                                        {isLoading ? (<Skeleton sx={{ bgcolor: 'grey.100' }} variant="rounded" width={210} height={118} />) : (<Image src={data.image} alt={data.title} className=" rounded-xl max-w-[200px] w-full" width={210} height={118} />)}
                                        <div className="flex flex-col max-w-[470px] w-full gap-2">
                                            {isLoading ? (<Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />) : (<h3 className="text-xl font-bold capitalize">{data.title}<span className="ml-5 text-sm font-light opacity-90">Date of submisson:- {data.date}-02-2024</span></h3>)}
                                            {isLoading ? (<Skeleton variant="text" sx={{ fontSize: '1rem' }} />) : (<Link target="_blank" href={data.gitHubLink} className="text-gray-600">GitHub link:- <span className="text-blue-500 ">{data.gitHubLink}</span></Link>)}
                                            {isLoading ? (<Skeleton variant="text" sx={{ fontSize: '1rem' }} />) : (<Link target="_blank" href={data.liveLink} className="text-gray-600">Live link:- <span className="text-blue-500">{data.liveLink}</span></Link>)}
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    }
                    {
                        first === 2 && <div className="p-4 bg-white shadow-xl rounded-2xl">
                            {isLoading ? (<Skeleton variant="text" sx={{ fontSize: '2rem' }} />) : (<h2 className="text-2xl text-black opacity-90">March Topics :-</h2>)}
                            <div className="flex flex-col gap-5">
                                {workData[2].march.map((data, index) => (
                                    <div className="flex gap-3 pt-5 min-h-20" key={index}>
                                        {isLoading ? (<Skeleton variant="text" sx={{ fontSize: '3rem' }} />) : (<span className="flex items-center justify-center p-2 text-xs text-white bg-green-500 rounded-full">{data.id}</span>)}
                                        {isLoading ? (<Skeleton sx={{ bgcolor: 'grey.100' }} variant="rounded" width={210} height={118} />) : (<Image src={data.image} alt={data.title} className=" rounded-xl max-w-[200px] w-full" width={210} height={118} />)}
                                        <div className="flex flex-col max-w-[470px] w-full gap-2">
                                            {isLoading ? (<Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />) : (<h3 className="text-xl font-bold capitalize">{data.title}<span className="ml-5 text-sm font-light opacity-90">Date of submisson:- {data.date}-03-2024</span></h3>)}
                                            {isLoading ? (<Skeleton variant="text" sx={{ fontSize: '1rem' }} />) : (<Link target="_blank" href={data.gitHubLink} className="text-gray-600">GitHub link:- <span className="text-blue-500 ">{data.gitHubLink}</span></Link>)}
                                            {isLoading ? (<Skeleton variant="text" sx={{ fontSize: '1rem' }} />) : (<Link target="_blank" href={data.liveLink} className="text-gray-600">Live link:- <span className="text-blue-500">{data.liveLink}</span></Link>)}
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
