'use server'

import { sql } from '@vercel/postgres';
 
export async function fetchCompanyData(id?: number) {
 
  if (id === 0 || id === undefined) {
    id = 1;
   }
 
  try {  
    const result = await sql`SELECT * FROM invoicesetting WHERE id = ${id} ;`;
    const company = result.rows.map((company) => ({
      ...company,
    }));
   console.log(company[0])
    return company[0];
  } catch (error) {
    console.error('Error fetching company data:', error);
    return null; 
  }
}

export async function fetchInvoicesDataByStatus(currentStatus?: string) {
  let rows: any[]; 
  
  try {
    if(currentStatus==='all'){
      currentStatus='';
    }
    const query = currentStatus 
      ? sql`SELECT * FROM invoices WHERE status = ${currentStatus};`
      : sql`SELECT * FROM invoices;`; // Fetch all if no status is provided
    
    const result = await query;
    rows = result.rows;
    return rows; 
  } catch (error) {
    console.error('Error fetching company data:', error);
    return null; // Return null in case of an error
  }


 
}



