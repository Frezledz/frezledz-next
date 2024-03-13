;
import fs from "fs";
import {pages} from "../page";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import Fadein from "@/app/ui/fadein";
function Tags({tags}:{tags:string[]}){
    let elements =tags.map((tag)=>{
        return (<span key={1} className=" bg-slate-100 dark:bg-slate-900 shadow-md dark:shadow-slate-800 hover:dark:bg-slate-700 hover:bg-slate-200 duration-300 rounded-xl w-auto py-1 px-2 mx-2">
            {tag}
            </span>);
    })
    return <div className="  mt-2 mb-5">{elements}</div>;
}

export default function Page ({ params }: { params: { slug: string } }){
    const slug:string = params.slug;
    const isPathExists:number = searcher(slug);
    if(isPathExists!==-1){
        const file = fs.readFileSync(`./posts/${slug}.md`,'utf-8');
        const info = pages[isPathExists];
        return(
            <Fadein>
        <div className=" max-w-3xl mx-auto">
            <div className="">
                <Image src={info.tn} width={500} height={500} alt="tn" className=" my-5 w-full aspect-video rounded-lg"/>
                <div className=" text-lg font-light">{info.date}</div>
                <div className=" text-3xl font-bold">{info.title}</div>
                <Tags tags={info.category}/>
            </div>
            <div className=" mt-5 prose dark:prose-invert max-w-none">
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{file}</Markdown>
            </div>
        </div>
        </Fadein>)
    }else{
        notFound();
    }
        
}

const searcher = (slug:string):number=>{
    for(let i=0;i<pages.length;i++){
        if(pages[i].href===slug){
            return i;
        }
    }
    return -1;
};
