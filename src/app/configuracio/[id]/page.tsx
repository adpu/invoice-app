
import { fetchCompanyData } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import FormCompany from '@/app/components/FormCompany';



export const metadata: Metadata = {
  title: 'Edit Settings',
};

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;
  const companySet = await fetchCompanyData(id);

  if (!companySet) {
    return notFound();
  }

  return (
    <main>
         <FormCompany companySet={companySet}  />
    </main>
  );
}