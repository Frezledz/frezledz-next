import {Header,Footer} from "./ui/headers";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const ID:string|undefined=process.env.GA_ID;
  let trueID:string;
  if(ID===undefined){
    trueID="";
  }else{
    trueID=ID;
  }
  return (
    <html lang="en">
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
      <GoogleAnalytics gaId={trueID} />
    </html>
  )
}