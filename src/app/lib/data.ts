'use server'

import { revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres';
import { Invoice, CompanySetForm } from './definitions';

export async function fetchCompanyData(id?: number) {

  if (id === 0 || id === undefined) {
    id = 1;
  }

  try {
    const result = await sql`SELECT * FROM invoicesetting WHERE id = ${id} ;`;
    const company = result.rows.map((company) => ({
      ...company,
    }));
    
    return company[0];
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
      SET company = '${iset.company}, 
      logo = 'image.svg', 
      name = ${iset.name},
      lastname = ${iset.lastname},
      address = ${iset.address},
      city = ${iset.city},
      dni = ${iset.dni}
      WHERE id = ${iset.id}'
    `;
  revalidatePath('/');
  } catch (error) {
    console.error('An error occurred:', error);
    return { message: 'Database Error: Failed to Update .' };
  }
}

export async function fetchSingleInvoice(id:string){
 
  try{
    const result= await sql`SELECT * FROM invoices WHERE id = ${id};`;
   
   return result.rows[0];
  }catch(error){
    console.error('An error occurred:', error);
    return { message: 'Database Error: Failed to Load register .' };
  }
}








