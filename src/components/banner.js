"use client"; // Required in Next.js 15 for interactivity
import Link from "next/link"
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { IoCodeSlashSharp } from "react-icons/io5";
import { AiTwotoneCheckCircle, AiFillInstagram, AiFillTwitterSquare,  AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { ReactTyped } from "react-typed";

function Banner(){
  return (
    <div className="bg-white leading-none tracking-tight w-full flex flex-col justify-center h-full items-center px-2 pt-40">
      
        <span className="py-6 w-60 text-center text-black font-semibold text-lg"> Journal </span>
        <h1 className="text-4xl text-black text-center font-medium uppercase">TACKLING SUSTAINABILITY  :    WHAT, WHY AND HOW?</h1>
        <span className="text-base text-center text-black uppercase py-6"><span className="font-bold">Date: </span> july 12, 2024</span>
        <span className="text-green-700 text-left font-bold sm:w-3/5 w-66 text-3xl my-6 "> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum consequuntur nihil quia, repudiandae quaerat a qui!.</span>
        <Image src={"https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fwaiting-man.jpg&w=600&q=75"} objectFit="contain" height={300} width={600} />

        <p className=" text-left text-black banner-text font-medium sm:w-3/5 w-66 text-lg my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa quia laudantium ad sequi. Eveniet dolor vel doloribus iure! Eligendi adipisci dolorem quos perspiciatis natus officia iure aliquam ipsa enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa quia laudantium ad sequi. Eveniet dolor vel doloribus iure! Eligendi adipisci dolorem quos perspiciatis natus officia iure aliquam ipsa enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa quia laudantium ad sequi. Eveniet dolor vel doloribus iure! Eligendi adipisci dolorem quos perspiciatis natus officia iure aliquam ipsa enim.</p>
        
      </div>
    
  );
};

export default Banner;
