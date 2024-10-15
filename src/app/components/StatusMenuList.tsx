'use client';
import Link from "next/link";
interface StatusMenuListProps {
    status: string; // Ensure it's a string
  }

export default function StatusMenuList({ status }:StatusMenuListProps) {
return(
    <ul className="list-none block sm:flex justify-end items-center gap-4">
          <li><Link href="/?status=all" className={`${status === 'all' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Totes</Link></li>
          <li><Link href="/?status=draft" className={`${status === 'draft' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Borrador</Link></li>
          <li><Link href="/?status=pendant" className={`${status === 'pendant' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Pendents</Link></li>
          <li><Link href="/?status=expired" className={`${status === 'expired' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Expirades</Link></li>
          <li><Link href="/?status=payed" className={`${status === 'payed' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Pagades</Link></li>
        </ul>
);
}