'use client';
import { useState } from "react";
import Link from "next/link";
interface FilterByDateListProps {
    period: string; // Ensure it's a string
  }

export default function FilterByDate({ period }:FilterByDateListProps) {
    const [menu, setMenu] = useState(false);
    const handleClick = () => {
        setMenu(!menu);
      };
      const svgColor = period === 'all' ? '#5f6368' : '#ff7b00';
    return(
        <div className="relative">
        <button onClick={handleClick}  className="group w-auto bg-white hover:bg-gray-200 flex gap-2 border rounded-sm py-2 px-4 text-black text-base"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={svgColor}><path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/></svg> Filtrar per intervals de temps</button>
        {menu && (
         <ul className="absolute top-12 w-full border p-4 z-30 flex flex-col gap-2 bg-white list-none">
            <li><Link onClick={handleClick} href="/?period=last-week" className={`${period === 'last-week' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Última setmana</Link></li>
            <li><Link onClick={handleClick} href="/?period=last-month" className={`${period === 'last-month' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Últim mes</Link></li>
            <li><Link onClick={handleClick} href="/?period=first-trimester" className={`${period === 'first-trimester' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Primer trimestre</Link></li>
            <li><Link onClick={handleClick} href="/?period=second-trimester" className={`${period === 'second-trimester' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Segon trimestre</Link></li>
            <li><Link onClick={handleClick} href="/?period=third-trimester" className={`${period === 'third-trimester' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Tercer trimestre</Link></li>
            <li><Link onClick={handleClick} href="/?period=four-trimester" className={`${period === 'four-trimester' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Quart trimestre</Link></li>
            <li><Link onClick={handleClick} href="/?period=current-year" className={`${period === 'current-year' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Any actual</Link></li>
            <li><Link onClick={handleClick} href="/?period=all" className={`${period === 'all' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Totes</Link></li>
         </ul>
        )}
        </div>
    );

}