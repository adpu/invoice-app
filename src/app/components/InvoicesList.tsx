'use client';

import { Invoice } from '../lib/definitions';
import InvoiceItem from './InvoiceItem';

interface InvoicesListProps {
  invoices: Invoice[];
}

export default function InvoicesList ({ invoices }: InvoicesListProps)  {
  return (
    <div className='overflow-auto shadow rouded-lg'>
        <table className="w-full text-sm">
          <thead className=" bg-gray-50">
            <tr>
              <th className="border font-medium p-4 pl-8 pt-3 pb-3 text-black text-left">Accions</th>
              <th className="border font-medium p-4 pl-8 pt-3 pb-3 text-black text-left">Client</th>
              <th className="border text-right font-medium p-4 pl-8 pt-3 pb-3 text-black ">Import</th>
              <th className="border font-medium p-4 pl-8 pt-3 pb-3 text-black text-left">Nº Factura</th>
              <th className="border font-medium p-4 pl-8 pt-3 pb-3 text-black text-left">Estat</th>
              <th className="border text-right font-medium p-4 pl-8 pt-3 pb-3 text-black ">Data creació</th>
            </tr>
          </thead>
          <tbody className="bg-white ">

          {invoices.map(invoice => (
       <InvoiceItem key={invoice.id} invoice={invoice} />
     
      ))}
          </tbody>
        </table>

      
    </div>
  );
};

