"use client"

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./search";
import { Post,pages,tags } from "./page";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export function ShowPage({page}:{page:Post}){
    return(
        <Link href={`pages/${page.href}`} className=" group flex md:flex-row  flex-col items-center max-w-2xl  gap-x-5 m-2">
            
            <div className=""><Image src={page.tn} alt={page.title} width={200} height={200} className=" dark:group-hover:brightness-125 dark:group-hover:opacity-100 group-hover:opacity-65  duration-200 shadow-xl md:w-48 w-full aspect-video"/></div>
            <div className=" max-w-64 md:max-w-xs lg:max-w-96">
                <div className=" overflow-hidden text-md font-Noto font-medium truncate">{page.title}</div>
                <div className=" text-sm font-Noto font-thin">{page.date}</div>
                <Tags tags={page.category}/>
            </div>
        </Link>
    )
}

function Tags({tags}:{tags:string[]}){
    let elements =tags.map((tag)=>{
        return <span key={1} className=" bg-slate-100 dark:bg-slate-900 shadow-md dark:shadow-slate-800 hover:dark:bg-slate-700 hover:bg-slate-200 duration-300 rounded-xl w-auto py-1 px-2 text-xs mx-2">{tag}</span>;
    })
    return <div className=" my-2">{elements}</div>;
}

function ShowsPages(){
    
    const searchParams = useSearchParams();
    const search = searchParams.get('query');
    let params;
    if(search===null){
        params="";
    }else{
        params=search;
    }
    if(params===""){
        let lists:JSX.Element[]=[];
        pages.forEach(element => {
            lists.push(<ShowPage page={element}/>);
        });
        return(<>{lists}</>);
    }

    const paramarr:string[] =  params.split(" ");
    let lists:JSX.Element[]=[];
    pages.forEach(page => {
        const judge:boolean = Judgement(page,paramarr);
        console.log(judge);
        if(judge){
            lists.push(<ShowPage page={page}/>);
        }
    });
    return(<>{lists}</>);
}

export default function ShowPages(){
    return <Suspense><ShowsPages/></Suspense>
}

function Judgement(page: Post, paramarr: string[]): boolean {
    for (const param of paramarr) {
        if (tags.indexOf(param) !== -1) { // if parameter was tag
            if (page.category.indexOf(param) !== -1) {
                return true;
            }
        }
        if (page.title.includes(param)) {
            return true;
        }
    }
    return false;
}