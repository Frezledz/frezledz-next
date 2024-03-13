'use client'

import Image from "next/image"
import logo from "@/public/logo512.png"
import Link from "next/link"
import { useState } from "react";
function Burger(){
  const [isClosed, setIsOpen] = useState(true);

  
  const handleClick = () => {
      setIsOpen(!isClosed);
  };


return(
    <>
  <button onClick={handleClick} className="flex flex-col justify-center items-center">    
    <svg width={32} height={32}>
        <path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  </button>
  {/*Pointer-events-noneを使用してOpacityが0の時に操作を無効化した、でもこれって大丈夫? */}
  <div className={`${isClosed ? ' opacity-0 pointer-events-none -translate-y-5' : ' opacity-100 flex-none translate-y-0'} fixed grid duration-150 top-5 right-5 w-full max-w-xs text-slate-800 dark:text-slate-300 space-y-2 bg-white dark:bg-slate-800 rounded-lg p-5 text-lg shadow-lg font-semibold`} >
    <button className=' p-3 ml-auto hover:rotate-180 duration-500 space-y-0' onClick={handleClick}>
      <svg className=" w-2.5 h-2.5 overflow-visible" aria-hidden="true"><path d="M0 0L10 10M10 0L0 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
    </button>
    <Link href="/pages" className="link-primary">All posts</Link>
    <Link href="/pages?query=project" className="link-primary">Projects</Link>
    <Link href="/pages?query=blog" className="link-primary">Blogs</Link>
  </div>
  </>
  
)
};


export function Header(){
    return(
      <>
      <header className="sticky top-0 z-50 backdrop-blur">
        <div className="mx-auto flex max-w-3xl  items-center justify-center p-4 lg:px-1">
          <div className="flex-0">{/*logo*/}
            <Link href="/">
              <Image src={logo} width={60} height={60} alt="home"/>
            </Link>
          </div>
          <div className="flex-1"></div>
          <div className="md:flex flex-0 hidden text-sm font-Noto antialiased font-semibold text-slate-600 dark:text-slate-100 animation ">{/*large menu*/}
            <Link href="/pages" className="link-primary">All posts</ Link>
            <Link href="/pages?query=project" className="link-primary">Projects</Link>
            <Link href="/pages?query=blog" className="link-primary">Blogs</Link>
          </div>
          <div className="md:hidden">
            <Burger/>
          </div>
        </div>
      </header>
      </>

  )
}


export function Footer(){
  return(
    <footer className="">
      <div className="flex mx-auto justify-center items-center p-8 max-w-xl">
        <span className="flex-1 font-Roboto font-thin italic text-slate-400">©frezledz</span>
        <div className="space-x-5 flex items-center">
          <a href="https://github.com/frezledz">
            <Image src="https://github.githubassets.com/assets/github-mark-9be88460eaa6.svg" height={24} width={24} alt="github"></Image>
          </a>
          <a href="https://www.youtube.com/@frezledz">
            <Image src="https://github.githubassets.com/assets/youtube-25bc21e924c8.svg" height={24} width={24} alt="Youtube"></Image>
          </a>
          <a href="https://twitter.com/frezledz">
            <Image src="https://github.githubassets.com/assets/x-023c3ca5e173.svg" height={24} width={24} alt="X"></Image>
          </a>
        </div>

      </div>
    </footer>
)
}