
'use client'
import Link from 'next/link';
import InvoicesList from './ui/InvoicesList';
import { fetchInvoicesDataByStatus } from './lib/data';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Invoice } from './lib/definitions';

export default function Home() {
  
  const searchParams = useSearchParams();
  const status = searchParams.get('status') || 'all';

  const [invoices, setInvoices] = useState<Invoice[]>([]);


  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInvoicesDataByStatus(status);
      setInvoices(data || []);
    };
    fetchData();
  }, [status]);

  return (
    <>
      <div className="w-full relative flex justify-start items-center py-8">
        <h1 className="font-medium block w-full text-4xl text-black">Factures</h1>
        <ul className="list-none flex justify-end items-center gap-4">
          <li><Link href="/?status=all" className={`${status === 'all' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Totes</Link></li>
          <li><Link href="/?status=draft" className={`${status === 'draft' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Borrador</Link></li>
          <li><Link href="/?status=pendant" className={`${status === 'pendant' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Pendents</Link></li>
          <li><Link href="/?status=expired" className={`${status === 'expired' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Expirades</Link></li>
          <li><Link href="/?status=payed" className={`${status === 'payed' ? 'font-bold' : ''} hover:underline hover:underline-offset-4`}>Pagades</Link></li>
        </ul>
        
      </div>
      <div className="relative w-full block">
      <InvoicesList invoices={invoices || []} />
      </div>
    </>
  );
}
