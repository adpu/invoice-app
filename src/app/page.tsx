import InvoicesList from './components/InvoicesList';
import { fetchInvoicesDataByStatus } from './lib/data';
import StatusMenuList from './components/StatusMenuList';
import StatusMobileMenuList from './components/StatusMobileMenuList';


interface HomeProps {
  searchParams: { status?: string };
}

export default async function Home({ searchParams }: HomeProps) {
  // Fetch data on the server
  const status = searchParams?.status || 'all';
  const invoices = await fetchInvoicesDataByStatus(status);

  return (
    <div>
      <div className="w-full relative block sm:flex justify-start items-center pt-8 pb-4">
        <h1 className="font-medium block w-full text-2xl sm:text-4xl text-black">Factures</h1>
        <div className='sm:hidden block'><StatusMobileMenuList status={status} /></div>
        <div className='sm:block hidden'><StatusMenuList status={status} /></div>
      </div>
      <div className="relative w-full block">      
        <InvoicesList invoices={invoices ?? []} />
      </div>
    </div>
  );
}
