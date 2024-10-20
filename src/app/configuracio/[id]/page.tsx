
import { fetchCompanyData } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import FormCompany from '@/app/components/FormCompany';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoice Gnerator App",
  description: "Generated by adpu.net",
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