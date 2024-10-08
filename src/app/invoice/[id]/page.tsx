import { fetchSingleInvoice } from "@/app/lib/data";
import Remitent from "@/app/components/Remitent";
import InvoiceActions from "@/app/components/InvoiceActions";

type InvoiceProps = {
  params: {
    id: string;
  };
};

export default async function InvoiceDetail({ params }: InvoiceProps) {
  const { id } = params;
  const invoice = await fetchSingleInvoice(id);
  const date = new Date(invoice.created_at);
  console.log(invoice);
  return (
    <>
      <div className="w-full relative max-w-5xl mx-auto gap-4 flex flex-col items-start justify-start my-12 sm:my-24">
        <InvoiceActions />
        <div className="relative border border-gray-200 w-full block sm:flex flex-row-reverse justify-between items-start">
          <div className="flex justify-start sm:justify-end items-start px-8 pt-8 pb-0 sm:p-8 w-full  sm:w-1/2">
            <p className="text-gray-400 text-3xl sm:text-5xl">Factura</p>
          </div>
          <div className="flex justify-start border-r border-gray-200 items-start p-8 w-full  sm:w-1/2">
            <Remitent />
          </div>

        </div>
        <div className="relative border border-gray-200 w-full block sm:flex justify-between items-start">
          <div className="flex justify-start border-b border-r-0 sm:border-t-0 sm:border-r border-gray-200 items-start p-8 w-full sm:w-1/2">
            <div className="flex justify-start flex-col items-start gap-4">
              <p className=" text-sm text-black">Per:<br /><br />
                <span className="text-black text-sm">{invoice.name} {invoice.lastname}<br />{invoice.address}, {invoice.city}<br />{invoice.dni}</span>
              </p>

            </div>
          </div>
          <div className="flex flex-col gap-4 justify-start items-start sm:items-end  p-8 w-full sm:w-1/2">
            <p className=" text-sm text-left sm:text-right text-black">Data:<br />
              <span className="text-black text-sm">{date.toLocaleDateString('ca', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</span></p>
            <p className=" text-sm text-left sm:text-right text-black">Número Factura:<br />
              <span className="text-black text-sm">{invoice.invoiceid}</span></p>
          </div>

        </div>
        <div className="relative border border-gray-200 w-full block p-8">
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

        <div className="relative border border-gray-200 w-full block p-8">
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

    </>
  );
}