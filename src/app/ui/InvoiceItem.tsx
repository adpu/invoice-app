import { Invoice } from "../lib/definitions";

export default function InvoiceIteam({ invoice }: { invoice: Invoice }) {
  const date = new Date(invoice.created_at);
  
    return (
        <tr key={invoice.id}>
            <td className="border text-left border-slate-200 p-4 pl-8 text-black ">{invoice.name} {invoice.lastname}</td>
            <td className="border text-right border-slate-200 p-4 pl-8 text-black ">{(invoice.amount + invoice.iva - invoice.irpf)/100} EUR</td>
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