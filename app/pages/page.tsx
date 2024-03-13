
import SearchBar from "./search";
import ShowPages from "./shower";
import { Suspense } from "react";
export default function Page(){
    return(
        <div>
        <div className="flex justify-center mx-auto max-w-4xl">
          <SearchBar /></div>
        <div className="flex justify-center">
            
            <div className=" grid grid-cols-1 lg:grid-cols-2 max-w-8xl items-center">
                <Suspense><ShowPages/></Suspense>
            </div>
        </div>
        </div>
    )
}



export interface Post{
    href:string,
    tn:string,
    title:string,
    subtitle:string,
    date:string,
    category:string[],
  }

const tags:string[]=["blog","project"];
const pages:Post[]=[
    {
      href:"downloads",
      tn:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/940e1cee-ed14-4190-af62-c406fbab9094/d7kld7y-2d2849d2-cf03-4838-8d81-9206c3f1f9eb.png/v1/fill/w_1024,h_576,q_80,strp/open_source_wallpaper_by_pawel10_d7kld7y-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvOTQwZTFjZWUtZWQxNC00MTkwLWFmNjItYzQwNmZiYWI5MDk0XC9kN2tsZDd5LTJkMjg0OWQyLWNmMDMtNDgzOC04ZDgxLTkyMDZjM2YxZjllYi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0gzA0udIkoBEoYrn03jTxeifFIkgmZsa8b25a_pZu7s",
      title:"素材の配布について",
      subtitle:"素材の配布についてです。",
      date:"13/03/24",
      category:["project"]
    },
    {
      href:"newer_website",
      tn:"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
      title:"新しいウェブサイトを作ってきた",
      subtitle:"React等のフレームワークを使って作ったウェブサイトの開発談です。",
      date:"10/3/24",
      category:["blog"]
    },
    {
      href:"introduction",
      tn:"https://drive.google.com/uc?export=view&id=1n-QW_4URO0jQGuc3H5qKyYKTh9w3qsSW",
      title:"自己紹介",
      subtitle:"",
      date:"13/3/24",
      category:["blog"]
    },
    {
      href:"myapps",
      tn:"https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/04/Surface-Studio-2-lead.jpg",
      title:"良く使うソフトを紹介",
      subtitle:"創作を始めたい人には参考になるかもしれません。",
      date:"14/3/24",
      category:["blog"]
    },
]

export {pages, tags};