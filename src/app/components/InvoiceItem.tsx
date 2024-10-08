import { Invoice } from "../lib/definitions";
import Link from "next/link";

export default function InvoiceIteam({ invoice }: { invoice: Invoice }) {
  const date = new Date(invoice.created_at);

  return (
    <tr key={invoice.id}>
      <td className="border text-left border-slate-200 p-4 pl-8 text-black flex gap-4">
        <Link href={`/invoice/${invoice.id}`} ><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#5f6368"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></Link>
        <Link href={`/invoice/${invoice.id}`} ><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368"><path d="M480-312q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm0-72q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28Zm0 192q-142.6 0-259.8-78.5Q103-349 48-480q55-131 172.2-209.5Q337.4-768 480-768q142.6 0 259.8 78.5Q857-611 912-480q-55 131-172.2 209.5Q622.6-192 480-192Zm0-288Zm0 216q112 0 207-58t146-158q-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58Z"/></svg></Link>
        </td>
      <td className="border text-left border-slate-200 p-4 pl-8 text-black ">{invoice.name} {invoice.lastname}</td>
      <td className="border text-right border-slate-200 p-4 pl-8 text-black ">{(invoice.amount + invoice.iva - invoice.irpf) / 100} EUR</td>
      <td className="border border-slate-200 p-4 pl-8 text-black ">{invoice.invoiceid}</td>
      <td className="border border-slate-200 p-4 pl-8 text-black"><div
        className={`px-4 text-center border py-2 rounded-lg 
              ${invoice.status === 'draft' ? 'bg-draft' : ''} 
              ${invoice.status === 'pendant' ? 'bg-pending' : ''} 
              ${invoice.status === 'expired' ? 'bg-expired' : ''} 
              ${invoice.status === 'payed' ? 'bg-payed' : ''} 
              `}>
        {invoice.status}</div></td>
      <td className="border text-right border-slate-200 p-4 pl-8 text-black ">{date.toLocaleDateString('ca', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}</td>
    </tr>
  );
}