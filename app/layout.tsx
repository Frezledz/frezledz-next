import {Header,Footer} from "./ui/headers";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const ID:string|undefined=process.env.GA_ID;
  let ga_id:string;
  if(ID===undefined){
    ga_id="";
  }else{
    ga_id=ID;
  }
  return (
    <html lang="en">
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js? 
      id=${ga_id}`}
    ></Script>
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ga_id}');
        `,
      }}
    ></Script>
      <head>
        
        <title>frezledz</title>
        
      </head>
      {/*mx-auto grid min-h-screen max-w-2xl grid-rows-[auto,1fr,auto] px-8 py-14 sm:p-20 */}
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50">
        <Header/>
        
        <main className="min-h-96">
          {children}
          </main>
          
        <Footer/>
        </body>
    </html>
  )
}