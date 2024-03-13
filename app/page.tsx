import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/mylogo.svg"
import Fadein from "./ui/fadein";
import { Post } from "./pages/page";

const FeaturedLists:Post[] = [
  {
    href:"/pages/newer_website",
    tn:"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    title:"新しいウェブサイトを作ってきた",
    subtitle:"React等のフレームワークを使って作ったウェブサイトの開発談です。",
    date:"10/3/24",
    category:["blog"]
  },
  {
    href:"/pages/downloads",
    tn:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/940e1cee-ed14-4190-af62-c406fbab9094/d7kld7y-2d2849d2-cf03-4838-8d81-9206c3f1f9eb.png/v1/fill/w_1024,h_576,q_80,strp/open_source_wallpaper_by_pawel10_d7kld7y-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvOTQwZTFjZWUtZWQxNC00MTkwLWFmNjItYzQwNmZiYWI5MDk0XC9kN2tsZDd5LTJkMjg0OWQyLWNmMDMtNDgzOC04ZDgxLTkyMDZjM2YxZjllYi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0gzA0udIkoBEoYrn03jTxeifFIkgmZsa8b25a_pZu7s",
    title:"素材の配布について",
    subtitle:"素材の配布についてです。",
    date:"13/03/24",
    category:["project"]
  },
  {
    href:"/pages/introduction",
    tn:"https://drive.google.com/uc?export=view&id=1n-QW_4URO0jQGuc3H5qKyYKTh9w3qsSW",
    title:"自己紹介",
    subtitle:"",
    date:"13/3/24",
    category:["blog"]
  },
  {
    href:"/pages/myapps",
    tn:"https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/04/Surface-Studio-2-lead.jpg",
    title:"良く使うソフトを紹介",
    subtitle:"創作を始めたい人には参考になるかもしれません。",
    date:"14/3/24",
    category:["blog"]
  },
]

const Section=({components}:{components:Post})=>{
  return(
    <div className=" mx-auto max-w-4xl">
      <Link href={components.href} className=" md:flex group rounded-2xl items-center">
        <div className=" m-5 dark:group-hover:brightness-125 dark:group-hover:opacity-100 group-hover:opacity-65  duration-200 shadow-lg">
          <Image src={`${components.tn}`} height={192} width={192} className="aspect-video w-full md:w-18" alt={`Image of ${components.title}`}/>
        </div>
        <div className="p-5 flex-col flex">
          <span className="text-2xl">{components.title}</span>
          <span className="text-sm italic font-thin">{`${components.date} - ${components.subtitle}`}</span>
        </div>

      </Link>
    </div>
  )
}
const Sections = ()=>{
  let components= [];
  for(let i=0;i<FeaturedLists.length;i++){
    components.push((<Section components={FeaturedLists[i]}/>));
  }
  return (
    components
  )
}

export default function Page(){
  return(
    <main className=" mt-10">
      <div className="justify-center flex-col items-center flex gap-y-2">
        <Fadein><Image src={Logo} height={150} width={150} alt="a"/></Fadein>
        <Fadein><div className=" font-Roboto font-bold text-5xl mt-5">Frezledz</div></Fadein>
        <Fadein><div className="font-extralight text-xl">Just a Japanese hobbyist.</div></Fadein>
        <Fadein><div className="flex gap-x-3 m-3 items-center">
        <a href="https://github.com/frezledz">
            <Image src="https://github.githubassets.com/assets/github-mark-9be88460eaa6.svg" height={24} width={24} alt="github"></Image>
          </a>
          <a href="https://www.youtube.com/@frezledz">
            <Image src="https://github.githubassets.com/assets/youtube-25bc21e924c8.svg" height={24} width={24} alt="Youtube"></Image>
          </a>
          <a href="https://twitter.com/frezledz">
            <Image src="https://github.githubassets.com/assets/x-023c3ca5e173.svg" height={24} width={24} alt="X"></Image>
          </a>
        </div></Fadein>
      </div>
      <div className=" items-center mt-10 gap-y-10">
      <Fadein><div className=" pl-5 max-w-2xl mx-auto flex text-3xl md:text-4xl font-bold mb-8">Featured Contents</div></Fadein>
      <Fadein><Sections/></Fadein>

      </div>

    </main>
  
  );
}