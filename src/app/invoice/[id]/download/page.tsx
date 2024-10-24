import { Document, Page, Text, Image, View, Font } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import { StyleSheet } from "@react-pdf/renderer";
import path from 'path';
import Link from "next/link";
import { CompanySetForm, Invoice } from "@/app/lib/definitions";
import { fetchCompanyData, fetchSingleInvoice } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoice Gnerator App",
  description: "Generated by adpu.net",
};

interface InvoiceBodyProps {
  companySet: CompanySetForm;
  invoice: Invoice;
}

const InvoiceBody = ({ companySet, invoice }: InvoiceBodyProps) => (
  <Document>
    <Page style={styles.container}>
      <View style={styles.sectionnoborder}>
        <View style={styles.row}>
          <View>
            {companySet ? (
              <View style={[styles.row, { padding: 0 }, { justifyContent: 'flex-start' }]}>
                <Image style={styles.logo} src="/uploads/acme-logo.png" />
                <Text style={styles.smallText}>
                  {companySet.company}{'\n'}
                  {companySet.name} {companySet.lastname}
                  {'\n'}
                  {companySet.address}, {companySet.city}
                  {'\n'}
                  {companySet.dni}
                </Text>
              </View>
            ) : (
              <View style={[styles.row, { padding: 0 }, { justifyContent: 'flex-start' }]}>
                <Text style={styles.smallText}>No data</Text>
              </View>
            )}
          </View>
          <Text style={styles.title}>Factura</Text>

        </View>
      </View>

      <View style={styles.section}>
        {invoice ? (
          <View style={styles.row}>
            <Text style={styles.smallText}>
              {invoice.name} {invoice.lastname}
              {'\n'}
              {invoice.address}, {invoice.city}
              {'\n'}
              {invoice.dni}
            </Text>
            <Text style={[styles.smallText, { textAlign: 'right' }]}>
              Data:
              {'\n'}
              {new Date(invoice.created_at).toLocaleDateString('ca', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
              {'\n'}
              Número Factura:
              {'\n'}
              {invoice.invoiceid}
            </Text>
          </View>
        ) : (
          <View style={styles.row}>
            <Text style={styles.smallText}>No data</Text>
          </View>
        )}
      </View>


      {invoice ? (
        <View style={styles.section}>
          <Text style={[styles.smallText, { padding: 10 }, { maxWidth: '70%' }]}>
            Concepte:{'\n'}
            {invoice.description}</Text>
          <View style={styles.row}>
            <Text style={styles.smallText}>BASE</Text>
            <Text style={styles.smallText}>{invoice.amount / 100} €</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.smallText}>IVA</Text>
            <Text style={styles.smallText}>
            {((invoice.amount / 100) * (invoice.iva / 100)).toFixed(2)} €
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.smallText}>IRPF</Text>
            <Text style={styles.smallText}>
            -{((invoice.amount / 100) * (invoice.irpf / 100)).toFixed(2)} €
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.row}>
          <Text style={styles.smallText}>No data</Text>
        </View>
      )}

      {invoice ? (
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.boldText}>TOTAL</Text>
            <Text style={styles.boldText}>{((invoice.amount / 100) + ((invoice.amount / 100) * (invoice.iva / 100)) - ((invoice.amount / 100) * (invoice.irpf / 100))).toFixed(2)} €</Text>
          </View>
        </View>
      ) : (
        <View style={styles.row}>
          <Text style={styles.smallText}>No data</Text>
        </View>
      )}
      {invoice ? (
        <View style={styles.section}>
          <Text style={[styles.smallText, { padding: 10 }]}>Forma de pagament:{'\n'}
            {invoice.payment}</Text>
        </View>
      ) : (
        <View style={styles.row}>
          <Text style={styles.smallText}>No data</Text>
        </View>
      )}

    </Page>
  </Document>
);

Font.register({
  family: 'Poppins',
  src: 'http://fonts.gstatic.com/s/poppins/v1/TDTjCH39JjVycIF24TlO-Q.ttf'
});

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Poppins',
    width: '100%',
    maxWidth: 600,
    padding: '20px',
    margin: '20px auto',
  },
  logo: {
    width: 'auto',
    height: 40,
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'gray',
  },
  sectionnoborder: {
    padding: '10px 0',
    marginBottom: 10,
  },
  section: {
    border: '1px solid lightgray',
    padding: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  smallText: {
    fontSize: 10,
    color: 'black',
  },
  boldText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
});



export default async function InvoicePDF({ params }: { params: { id: string } }) {
  const id = 1;
  const companySet = await fetchCompanyData(id);

  const idInvoice = parseInt(params.id, 10);
  const invoice = await fetchSingleInvoice(idInvoice);
  console.log(invoice)

  if (!companySet || !invoice) {
    return notFound();
  }

  const filePath = path.resolve('./public/invoices', `${invoice.invoiceid}.pdf`);
  ReactPDF.render(<InvoiceBody companySet={companySet} invoice={invoice} />, filePath);
  return (
    <div className="w-full relative max-w-5xl mx-auto gap-4 flex flex-col items-start justify-center my-12 sm:my-24">
      <div className="w-full relative text-center flex flex-col gap-4 mx-auto ">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" height="240px" viewBox="0 -960 960 960" width="240px" fill="#333333"><path d="m438-240 226-226-58-58-169 169-84-84-57 57 142 142ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" /></svg>
        <Link href={`/invoices/${invoice.invoiceid}.pdf`} target="_blank" className="hover:underline text-base sm:text-lg">Descarrega&apos;t la Factura amb nº {invoice.invoiceid}</Link>
        <Link href="/" className='bg-gray-200 w-full text-center mx-auto max-w-80 text-black py-2 px-4 mt-4'>Tornar</Link>
      </div>
    </div>
  );
}