import {Header,Footer} from "./ui/headers";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
    </html>
  )
}