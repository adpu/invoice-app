import { fetchSingleInvoice } from "@/app/lib/data";
type InvoiceProps = {
  params: {
    id: string;
  };
};
export default async function InvoiceDetail({ params }: InvoiceProps) {
  const { id } = params;
  const invoice = await fetchSingleInvoice(id);
  console.log(invoice);
  return (
    <>
    <ul>
      <li>{invoice.name}</li>
      <li>{invoice.lastname}</li>
      <li>{invoice.address}</li>
      <li>{invoice.city}</li>
      <li>{invoice.dni}</li>
      <li>{invoice.status}</li>
      <li>{JSON.stringify(invoice.created_at)}</li>
      <li>{invoice.amount}</li>
      <li>{invoice.iva}</li>
      <li>{invoice.irpf}</li>
      <li>{invoice.invoiceid}</li>
      </ul>
    </>
  );
}