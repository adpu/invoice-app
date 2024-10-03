import { sql } from '@vercel/postgres';
 



export async function fetchCompanyData(id?: number) {
 
  let rows: any[]; // Initialize rows variable
  if(id==null){
    let id=1;
  }
  try {
    const result = await sql`SELECT * FROM invoicesetting WHERE id == ${id};`;
    rows = result.rows; // Assign rows from the result
    console.log(rows);
    return rows; // Return the rows fetched from the database
  } catch (error) {
    console.error('Error fetching company data:', error);
    return null; // Return null in case of an error
  }
}

export async function fetchInvoicesDataByStatus(currentStatus?: string) {
  let rows: any[]; 
  try {
    const result = await sql`SELECT * FROM invoicesetting WHERE status == ${currentStatus};`;
    rows = result.rows; // Assign rows from the result
    return rows; // Return the rows fetched from the database
  } catch (error) {
    console.error('Error fetching company data:', error);
    return null; // Return null in case of an error
  }


 
}



