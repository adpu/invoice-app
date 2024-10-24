import { fetchCompanyData } from './lib/data';
import "./globals.css";
import { Poppins } from 'next/font/google'
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";


const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})





export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const companyData = await fetchCompanyData();


  const date = new Date();
  const year = date.getFullYear();

  return (
    
    <html lang="ca">
      <body className={`${poppins.className} antialiased`}>
        <div className="relative max-w-7xl mx-auto px-4 py-6">
          <header>
            <div className=" block sm:flex justify-between items-start gap-3 relative w-full">
          
            {companyData ? (
                <div className="flex flex-col justify-start items-start gap-2">
                   <Image src={`/uploads/${companyData.logo}`} width="32" height="32" alt="Logo" />
                   <p className="text-black text-sm"><strong>{companyData.company}</strong><br />{companyData.name} {companyData.lastname}<br />{companyData.address}, {companyData.city}<br />{companyData.dni}</p>
                 </div>
              ) : (
                <p>No data.</p>
              )}
          
              <ul className="flex justify-start sm:justify-end items-center gap-2 list-none mt-4 sm:mt-0">
                <li><Link href="/configuracio/1" className="group bg-white hover:bg-gray-200 flex gap-2 border rounded-sm py-2 px-4 text-black text-base"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg> <span className="text-black">Configuració</span></Link></li>          
                <li><Link href="/invoice/create/" className="group bg-white hover:bg-gray-200 flex gap-2 border rounded-sm py-2 px-4 text-black text-base"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg> <span className="text-black">Crear Factura</span></Link></li>
              </ul>
            </div>


          </header>
          <Suspense>
          {children}
          </Suspense>
          
          <div className="relative block w-full text-center mt-4">
            <p className="font-normal text-sm text-black block">Invoice Generator V.1.0 - {year}</p>
          </div>
        </div>
      </body>
    </html>

  );
}
