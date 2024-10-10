import { fetchSingleInvoice } from "@/app/lib/data";
import Remitent from "@/app/components/Remitent";
import InvoiceActions from "@/app/components/InvoiceActions";
import Link from "next/link";

type InvoiceProps = {
  params: {
    id: number;
  };
};

export default async function InvoiceDetail({ params }: InvoiceProps) {
  const { id } = params;
  const invoice = await fetchSingleInvoice(id);
 
  
  console.log(invoice);
  return (
    <>
    {invoice ? (
      <div className="w-full relative max-w-5xl mx-auto gap-4 flex flex-col items-start justify-start my-12 sm:my-24">
        <InvoiceActions id={id} />
      <div className="border border-gray-200 p-4 w-full relative mb-4">
        <div className="relative w-full block sm:flex flex-row-reverse justify-between items-start">
          <div className="flex justify-start sm:justify-end items-start px-8 pt-8 pb-0 sm:p-8 w-full  sm:w-1/2">
            <p className="text-gray-400 text-3xl sm:text-5xl">Factura</p>
          </div>
          <div className="flex justify-start  items-start p-8 w-full  sm:w-1/2">
            <Remitent />
          </div>

        </div>

        <div className="relative border border-gray-200 mb-4 w-full block sm:flex justify-between items-start">
          <div className="flex justify-start border-b sm:border-b-0  border-gray-200 items-start p-8 w-full sm:w-1/2">
            <div className="flex justify-start  flex-col items-start gap-4">
              <p className=" text-sm text-black">{invoice.name} {invoice.lastname}<br />{invoice.address}, {invoice.city}<br />{invoice.dni}
              </p>

            </div>
          </div>
          <div className="flex border-l-0 sm:border-l flex-col gap-4 justify-start items-start sm:items-end  p-8 w-full sm:w-1/2">
            <p className=" text-sm text-left sm:text-right text-black">Data:<br />
              <span className="text-black text-sm">{new Date(invoice.created_at).toLocaleDateString('ca', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</span></p>
            <p className=" text-sm text-left sm:text-right text-black">Número Factura:<br />
              <span className="text-black text-sm">{invoice.invoiceid}</span></p>
          </div>

        </div>
        <div className="relative border mb-4 border-gray-200 w-full block p-8">
          <p className=" text-sm text-left text-black mb-4">Concepte:</p>
          <p className="text-black text-sm max-w-[75%] mb-4">{invoice.description}</p>
          <div className="flex py-4 justify-between items-start mt-4 ">
            <p className="text-black text-sm">BASE</p>
            <p className="text-black text-sm">{invoice.amount / 100} €</p>
          </div>
          <div className="flex py-4 justify-between items-start border-t border-gray-200">
            <p className="text-black text-sm">IVA</p>
            <p className="text-black text-sm">{((invoice.amount / 100) * (invoice.iva / 100)).toFixed(2)} €</p>
          </div>
          <div className="flex py-4 justify-between items-start border-t border-gray-200">
            <p className="text-black text-sm">IRPF</p>
            <p className="text-black text-sm">-{((invoice.amount / 100) * (invoice.irpf / 100)).toFixed(2)} €</p>
          </div>
        </div>

        <div className="relative border mb-4 border-gray-200 w-full block p-8">
          <div className="flex py-4 justify-between items-start ">
            <p>TOTAL</p>
            <p className="font-bold">{((invoice.amount / 100) + ((invoice.amount / 100) * (invoice.iva / 100)) - ((invoice.amount / 100) * (invoice.irpf / 100))).toFixed(2)} €</p>
          </div>

        </div>
        <div className="relative border border-gray-200 w-full block p-8">
          <p className=" text-sm text-left text-black mb-4">Forma de pagament:</p>
          <p className="text-black text-sm max-w-[75%] mb-4">{invoice.payment}</p>

        </div>

      </div>
      <Link href="/" className='bg-gray-200 w-full text-center mx-auto max-w-80 text-black py-2 px-4 mt-4'>Tornar</Link>
      </div>
    ):(
      <p className=" text-sm text-left text-black mb-4">No data</p>
    )}
    </>
  );
}