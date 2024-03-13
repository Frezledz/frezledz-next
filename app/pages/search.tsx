"use client"
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Suspense } from "react";
function SearchBarwithout(){
    const searchParams = useSearchParams();
    const [update, setupdate] = useState("");
    const pathname = usePathname();
    const {replace} = useRouter();
    const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>)=>{
      setupdate((event.target.value));
    }
    const handleKeyDown=(event:any)=>{
      if(event.key==="Enter"){
        replace(`${pathname}?query=${update}`);
      }
    }
    return(
      <div className="w-full">

<div className="mb-4">
      <input onChange={handleUpdate} onKeyDown={handleKeyDown} className=" shadow-md w-full p-1 rounded focus:outline-none border appearance-none dark:border-gray-700 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300" type="text" defaultValue={searchParams.get("query")?.toString()} placeholder="Search..."></input>
    </div>
      </div>
    )
}

export default function SearchBar(){
  return(
    <Suspense><SearchBarwithout/></Suspense>
  )
}