"use client";
import { Skeleton } from "@mui/material"
import { workData } from "./WorkData"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import imageSelf from "../../../public/assets/images/deepakimg.jpg"
const Page = () => {
    const [first, setfirst] = useState(getDate())
    const [Loading, setLoading] = useState(true);
    function getDate() {
        const today = new Date();
        const first = today.getMonth() + 1
        return first
    }
    let month = first;
    switch (month) {
        case 0: month = "Profile"; break;
        case 1: month = "Jan"; break;
        case 2: month = "Feb"; break;
        case 3: month = "Mar"; break;
        case 4: month = "Apr"; break;
        case 5: month = "May"; break;
        case 6: month = "Jun"; break;
        case 7: month = "Jul"; break;
        case 8: month = "Aug"; break;
        case 9: month = "Sep"; break;
        case 10: month = "Oct"; break;
        case 11: month = "Nov"; break;
        case 12: month = "Dec"; break;
        default: month = ""; break;
    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [])
    function tabchange(tabs) {
        setfirst(tabs)
    }
    useEffect(() => {
        document.title = `${month} | Worksheet`;
    }, [month]);
    const { user, isAuthenticated } = useAuth0();
    return (
        <div className="container w-full max-w-full">
            <div className="grid min-h-screen grid-cols-8">
                <div className="col-span-2 bg-white rounded-lg shadow-md">
                    <div className="flex flex-col items-center justify-between h-full">
                        <div className="pt-10">
                            <Link onClick={() => tabchange(0)} href={"/"} className="font-sans text-3xl font-medium text-center text-black ">WorkSheet 2024</Link>
                            <div className="flex flex-col items-center justify-center gap-6 pt-16">
                                <button onClick={() => tabchange(1)} className={`${first === 1 && "text-[#1B59F8] bg-[#E9EFFF]"} text-lg font-medium capitalize font-sans py-3 px-10 rounded-lg`}>January</button>
                                <button onClick={() => tabchange(2)} className={`${first === 2 && "text-[#1B59F8] bg-[#E9EFFF]"} text-lg font-medium capitalize font-sans py-3 px-10 rounded-lg`}>February</button>
                                <button onClick={() => tabchange(3)} className={`${first === 3 && "text-[#1B59F8] bg-[#E9EFFF]"} text-lg font-medium capitalize font-sans py-3 px-10 rounded-lg`}>March</button>
                                <button onClick={() => tabchange(4)} className={`${first === 4 && "text-[#1B59F8] bg-[#E9EFFF]"} text-lg font-medium capitalize font-sans py-3 px-10 rounded-lg`}>April</button>
                            </div>
                        </div>
                        <div className="px-4 py-2 pb-10 bg-white rounded-full">
                            <LogoutButton />
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <nav className="px-10 py-4 bg-transparent">
                        <div className="flex justify-end w-full min-h-[50px]">
                            {
                                isAuthenticated && (
                                    <div className="flex items-center justify-between px-8 py-2 bg-white rounded-full">
                                        <div className="flex items-center gap-8">
                                            <img className="w-10 h-10 rounded-full" src={user.picture} alt={user.name} width={38} height={38} />
                                            <h2 className="font-sans text-xl font-semibold text-black opacity-90">{user.name}</h2>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                isAuthenticated || (
                                    <div className="flex items-center">
                                        <div className="px-4 py-2 bg-white rounded-full">
                                            <LoginButton />
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </nav>
                    <div className="overflow-y-scroll h-[550px] m-10 mt-5">
                        {
                            first === 0 && <div className="p-4 bg-white shadow-xl rounded-2xl">
                                <div className="flex items-center justify-between pl-10">
                                    <div>
                                        <Image className="object-cover w-20 h-20 rounded-full" src={imageSelf} alt="Deepak" width={50} height={50} />
                                        <h2 className="pt-5 font-sans text-5xl font-bold text-black">Hey,  I am Deepak</h2>
                                        <p className="pt-3 font-sans text-2xl font-medium text-black">This is my <span className="text-red-500">Worksheet-2024</span></p>
                                    </div>
                                    <div className="flex flex-col gap-5">

                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-5 p-10">
                                    <button onClick={() => tabchange(1)} className={`${first === 1 && "text-[#1B59F8] bg-[#E9EFFF]"} text-lg capitalize font-medium font-sans duration-300 hover:bg-[#E9EFFF] hover:text-[#1B59F8] bg-black text-white py-3 px-10 rounded-lg`}>January</button>
                                    <button onClick={() => tabchange(2)} className={`${first === 2 && "text-[#1B59F8] bg-[#E9EFFF]"} text-lg capitalize font-medium font-sans duration-300 hover:bg-[#E9EFFF] hover:text-[#1B59F8] bg-black text-white py-3 px-10 rounded-lg`}>Febuary</button>
                                    <button onClick={() => tabchange(3)} className={`${first === 3 && "text-[#1B59F8] bg-[#E9EFFF]"} text-lg capitalize font-medium font-sans duration-300 hover:bg-[#E9EFFF] hover:text-[#1B59F8] bg-black text-white py-3 px-10 rounded-lg`}>March</button>
                                    <button onClick={() => tabchange(4)} className={`${first === 4 && "text-[#1B59F8] bg-[#E9EFFF]"} text-lg capitalize font-medium font-sans duration-300 hover:bg-[#E9EFFF] hover:text-[#1B59F8] bg-black text-white py-3 px-10 rounded-lg`}>April</button>
                                    <button onClick={() => tabchange(5)} className={`${first === 5 && "text-[#1B59F8] bg-[#E9EFFF]"} text-lg capitalize font-medium font-sans duration-300 hover:bg-[#E9EFFF] hover:text-[#1B59F8] bg-black text-white py-3 px-10 rounded-lg`}>May</button>
                                    <button onClick={() => tabchange(6)} className={`${first === 6 && "text-[#1B59F8] bg-[#E9EFFF]"} text-lg capitalize font-medium font-sans duration-300 hover:bg-[#E9EFFF] hover:text-[#1B59F8] bg-black text-white py-3 px-10 rounded-lg`}>June</button>
                                    <button onClick={() => tabchange(7)} className={`${first === 7 && "text-[#1B59F8] bg-[#E9EFFF]"} text-lg capitalize font-medium font-sans duration-300 hover:bg-[#E9EFFF] hover:text-[#1B59F8] bg-black text-white py-3 px-10 rounded-lg`}>July</button>
                                    <button onClick={() => tabchange(8)} className={`${first === 8 && "text-[#1B59F8] bg-[#E9EFFF]"} text-lg capitalize font-medium font-sans duration-300 hover:bg-[#E9EFFF] hover:text-[#1B59F8] bg-black text-white py-3 px-10 rounded-lg`}>August</button>
                                    <button onClick={() => tabchange(9)} className={`${first === 9 && "text-[#1B59F8] bg-[#E9EFFF]"} text-lg capitalize font-medium font-sans duration-300 hover:bg-[#E9EFFF] hover:text-[#1B59F8] bg-black text-white py-3 px-10 rounded-lg`}>September</button>
                                    <button onClick={() => tabchange(10)} className={`${first === 10 && "text-[#1B59F8] bg-[#E9EFFF]"} text-lg capitalize font-medium font-sans duration-300 hover:bg-[#E9EFFF] hover:text-[#1B59F8] bg-black text-white py-3 px-10 rounded-lg`}>October</button>
                                    <button onClick={() => tabchange(11)} className={`${first === 11 && "text-[#1B59F8] bg-[#E9EFFF]"} text-lg capitalize font-medium font-sans duration-300 hover:bg-[#E9EFFF] hover:text-[#1B59F8] bg-black text-white py-3 px-10 rounded-lg`}>November</button>
                                    <button onClick={() => tabchange(12)} className={`${first === 12 && "text-[#1B59F8] bg-[#E9EFFF]"} text-lg capitalize font-medium font-sans duration-300 hover:bg-[#E9EFFF] hover:text-[#1B59F8] bg-black text-white py-3 px-10 rounded-lg`}>December</button>
                                </div>
                            </div>
                        }
                        {
                            first === 1 && <div className="p-4 bg-white shadow-xl rounded-2xl">
                                {Loading ? (<Skeleton variant="text" sx={{ fontSize: '2rem' }} />) : (<h2 className="text-2xl text-black opacity-90">January Topics :-</h2>)}
                                <div className="flex flex-col gap-5">
                                    {workData[0].january.map((data, index) => (
                                        <div className="flex gap-3 pt-5 min-h-20" key={index}>
                                            {Loading ? (<Skeleton variant="text" sx={{ fontSize: '3rem' }} />) : (<span className="flex items-center justify-center p-2 text-xs text-white bg-green-500 rounded-full">{data.id}</span>)}
                                            {Loading ? (<Skeleton sx={{ bgcolor: 'grey.100' }} variant="rounded" width={200} height={118} />) : (<Image src={data.image} alt={data.title} className=" rounded-xl max-w-[200px] w-full" width={200} height={118} />)}
                                            <div className="flex flex-col max-w-[470px] w-full gap-2">
                                                {Loading ? (<Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />) : (<h3 className="text-xl font-bold capitalize">{data.title}<span className="ml-5 text-sm font-light opacity-90">Date of submisson:- {data.date}-01-2024</span></h3>)}
                                                {Loading ? (<Skeleton variant="text" sx={{ fontSize: '1rem' }} />) : (<Link target="_blank" href={data.gitHubLink} className="text-gray-600">GitHub link:- <span className="text-blue-500 ">{data.gitHubLink}</span></Link>)}
                                                {Loading ? (<Skeleton variant="text" sx={{ fontSize: '1rem' }} />) : (<Link target="_blank" href={data.liveLink} className="text-gray-600">Live link:- <span className="text-blue-500">{data.liveLink}</span></Link>)}
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        }
                        {
                            first === 2 && <div className="p-4 bg-white shadow-xl rounded-2xl">
                                {Loading ? (<Skeleton variant="text" sx={{ fontSize: '2rem' }} />) : (<h2 className="text-2xl text-black opacity-90">February Topics :-</h2>)}
                                <div className="flex flex-col gap-5">
                                    {workData[1].feb.map((data, index) => (
                                        <div className="flex gap-3 pt-5 min-h-20" key={index}>
                                            {Loading ? (<Skeleton variant="text" sx={{ fontSize: '3rem' }} />) : (<span className="flex items-center justify-center p-2 text-xs text-white bg-green-500 rounded-full">{data.id}</span>)}
                                            {Loading ? (<Skeleton sx={{ bgcolor: 'grey.100' }} variant="rounded" width={210} height={118} />) : (<Image src={data.image} alt={data.title} className=" rounded-xl max-w-[200px] h-[118px] object-cover w-full" width={210} height={118} />)}
                                            <div className="flex flex-col max-w-[470px] w-full gap-2">
                                                {Loading ? (<Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />) : (<h3 className="text-xl font-bold capitalize">{data.title}<span className="ml-5 text-sm font-light opacity-90">Date of submisson:- {data.date}-02-2024</span></h3>)}
                                                {Loading ? (<Skeleton variant="text" sx={{ fontSize: '1rem' }} />) : (<Link target="_blank" href={data.gitHubLink} className="text-gray-600">GitHub link:- <span className="text-blue-500 ">{data.gitHubLink}</span></Link>)}
                                                {Loading ? (<Skeleton variant="text" sx={{ fontSize: '1rem' }} />) : (<Link target="_blank" href={data.liveLink} className="text-gray-600">Live link:- <span className="text-blue-500">{data.liveLink}</span></Link>)}
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        }
                        {
                            first === 3 && <div className="p-4 bg-white shadow-xl rounded-2xl">
                                {Loading ? (<Skeleton variant="text" sx={{ fontSize: '2rem' }} />) : (<h2 className="text-2xl text-black opacity-90">March Topics :-</h2>)}
                                <div className="flex flex-col gap-5">
                                    {workData[2].march.map((data, index) => (
                                        <div className="flex gap-3 pt-5 min-h-20" key={index}>
                                            {Loading ? (<Skeleton variant="text" sx={{ fontSize: '3rem' }} />) : (<span className="flex items-center justify-center p-2 text-xs text-white bg-green-500 rounded-full">{data.id}</span>)}
                                            {Loading ? (<Skeleton sx={{ bgcolor: 'grey.100' }} variant="rounded" width={210} height={118} />) : (<Image src={data.image} alt={data.title} className=" rounded-xl max-w-[200px] w-full" width={210} height={118} />)}
                                            <div className="flex flex-col max-w-[470px] w-full gap-2">
                                                {Loading ? (<Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />) : (<h3 className="text-xl font-bold capitalize">{data.title}<span className="ml-5 text-sm font-light opacity-90">Date of submisson:- {data.date}-03-2024</span></h3>)}
                                                {Loading ? (<Skeleton variant="text" sx={{ fontSize: '1rem' }} />) : (<Link target="_blank" href={data.gitHubLink} className="text-gray-600">GitHub link:- <span className="text-blue-500 ">{data.gitHubLink}</span></Link>)}
                                                {Loading ? (<Skeleton variant="text" sx={{ fontSize: '1rem' }} />) : (<Link target="_blank" href={data.liveLink} className="text-gray-600">Live link:- <span className="text-blue-500">{data.liveLink}</span></Link>)}
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        }
                        {
                            first === 4 && <div className="p-4 bg-white shadow-xl rounded-2xl">
                                {Loading ? (<Skeleton variant="text" sx={{ fontSize: '2rem' }} />) : (<h2 className="text-2xl text-black opacity-90">April Topics :-</h2>)}
                                <div className="flex flex-col gap-5">
                                    {workData[3].april.map((data, index) => (
                                        <div className="flex gap-3 pt-5 min-h-20" key={index}>
                                            {Loading ? (<Skeleton variant="text" sx={{ fontSize: '3rem' }} />) : (<span className="flex items-center justify-center p-2 text-xs text-white bg-green-500 rounded-full">{data.id}</span>)}
                                            {Loading ? (<Skeleton sx={{ bgcolor: 'grey.100' }} variant="rounded" width={210} height={118} />) : (<Image src={data.image} alt={data.title} className=" rounded-xl max-w-[200px] w-full" width={210} height={118} />)}
                                            <div className="flex flex-col max-w-[470px] w-full gap-2">
                                                {Loading ? (<Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />) : (<h3 className="text-xl font-bold capitalize">{data.title}<span className="ml-5 text-sm font-light opacity-90">Date of submisson:- {data.date}-04-2024</span></h3>)}
                                                {Loading ? (<Skeleton variant="text" sx={{ fontSize: '1rem' }} />) : (<Link target="_blank" href={data.gitHubLink} className="text-gray-600">GitHub link:- <span className="text-blue-500 ">{data.gitHubLink}</span></Link>)}
                                                {Loading ? (<Skeleton variant="text" sx={{ fontSize: '1rem' }} />) : (<Link target="_blank" href={data.liveLink} className="text-gray-600">Live link:- <span className="text-blue-500">{data.liveLink}</span></Link>)}
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </ div>
    )
}

export default Page
