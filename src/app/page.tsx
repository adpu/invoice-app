
'use client'

import InvoicesList from './components/InvoicesList';
import { fetchInvoicesDataByStatus } from './lib/data';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Invoice } from './lib/definitions';
import StatusMenuList from './components/StatusMenuList';

export default function Home() {

  const searchParams = useSearchParams();
  const status = searchParams.get('status') || 'all';

  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [filterMobile, setFilterMobile] = useState<boolean>(false);

  const handleClick = () => {
    setFilterMobile(!filterMobile);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInvoicesDataByStatus(status);
      setInvoices(data || []);
    };
    fetchData();
  }, [status]);

  return (
    <>
      <div className="w-full relative block sm:flex justify-start items-center py-8">
        <h1 className="font-medium block w-full text-2xl sm:text-4xl text-black">Factures</h1>
        <button onClick={handleClick} className="sm:hidden mt-2 group bg-white hover:bg-gray-200 flex gap-2 border rounded-sm py-2 px-4 text-black text-base w-full">Filtrar per status</button>
        {filterMobile && (
          <div className='relative w-full block'>
            <div className='absolute w-full bg-red-500 z-50 top-0 pt-4 left-0'>
              <StatusMenuList status={status} />
            </div>
          </div>
        )}
        <div className='sm:block hidden'>
        <StatusMenuList status={status} />
        </div>
      </div>
      <div className="relative w-full block">
        <InvoicesList invoices={invoices || []} />
      </div>
    </>
  );
}

