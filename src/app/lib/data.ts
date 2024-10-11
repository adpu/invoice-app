'use server'
import { revalidatePath } from 'next/cache'
import { sql } from '@vercel/postgres';
import { Invoice, InvoiceInsert, CompanySetForm } from './definitions';

export async function fetchCompanyData(id?: number) {

  if (id === 0 || id === undefined) {
    id = 1;
  }

  try {
    const result = await sql`SELECT * FROM invoicesetting WHERE id = ${id} ;`;
    const company = result.rows.map((company) => ({
      ...company,
    }));
    return {
      id: company[0].id, // Ensure these fields match the `CompanySetForm`
      logo: company[0].logo,
      company: company[0].company,
      name: company[0].name,
      lastname: company[0].lastname,
      address: company[0].address,
      city: company[0].city,
      dni: company[0].dni,
    };

  } catch (error) {
    console.error('Error fetching company data:', error);
    return null;
  }
}

export async function fetchInvoicesDataByStatus(currentStatus?: string): Promise<Invoice[] | null> {
  let rows: Invoice[];

  try {
    if (currentStatus === 'all') {
      currentStatus = '';
    }
    const query = currentStatus
      ? sql`SELECT * FROM invoices WHERE status = ${currentStatus};`
      : sql`SELECT * FROM invoices;`; // Fetch all if no status is provided

    const result2 = await query;
    rows = result2.rows.map((row) => ({
      id: row.id,
      created_at: row.created_at,
      amount: row.amount,
      iva: row.iva,
      irpf: row.irpf,
      invoiceid: row.invoiceid,
      name: row.name,
      lastname: row.lastname,
      address: row.address,
      city: row.city,
      dni: row.dni,
      description: row.description,
      payment: row.payment,
      status: row.status,
    }));
    return rows;
  } catch (error) {
    console.error('Error fetching company data:', error);
    return null; // Return null in case of an error
  }



}


export async function updateCompanyData(iset: CompanySetForm) {

  try {
    await sql`
      UPDATE invoicesetting
      SET company = ${iset.company}, 
      logo = ${iset.logo}, 
      name = ${iset.name},
      lastname = ${iset.lastname},
      address = ${iset.address},
      city = ${iset.city},
      dni = ${iset.dni}
      WHERE id = ${iset.id}`;

    // Serveix x refrescar la pàgina i mostrar el registre actualitzat
    revalidatePath('/configuracio/1')




  } catch (error) {
    console.error('An error occurred:', error);
    return { message: 'Database Error: Failed to Update .' };
  }
}

export async function fetchSingleInvoice(id: number) {

  try {
    const result = await sql`SELECT id, created_at, amount, iva, irpf, invoiceid, name, lastname, address, city, dni, status, description, payment FROM invoices WHERE id = ${id};`;
    if (result.rows.length === 0) {
      return null; // No invoice found
    }
    const invoice: Invoice = {
      id: result.rows[0].id,
      created_at: result.rows[0].created_at,
      amount: result.rows[0].amount,
      iva: result.rows[0].iva,
      irpf: result.rows[0].irpf,
      invoiceid: result.rows[0].invoiceid,
      name: result.rows[0].name,
      lastname: result.rows[0].lastname,
      address: result.rows[0].address,
      city: result.rows[0].city,
      dni: result.rows[0].dni,
      status: result.rows[0].status,
      description: result.rows[0].description,
      payment: result.rows[0].payment
    };

    return invoice;

  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
}



export async function createInvoice(iset: InvoiceInsert) {

  try {
    await sql`
  INSERT INTO invoices (name, lastname, address, city, dni, created_at, invoiceid, description, payment, amount, iva, irpf, status )
  VALUES (
    ${iset.name}, 
    ${iset.lastname}, 
    ${iset.address}, 
    ${iset.city}, 
    ${iset.dni}, 
    ${iset.created_at},
    ${iset.invoiceid},
     ${iset.description}, 
    ${iset.payment},
    ${iset.amount}, 
    ${iset.iva}, 
    ${iset.irpf}, 
    ${iset.status}
  );
`;

    // Serveix x refrescar la pàgina i mostrar el registre actualitzat
    revalidatePath('/invoice/create/')




  } catch (error) {
    console.error('An error occurred:', error);
    return { message: 'Database Error: Failed to Update .' };
  }
}








