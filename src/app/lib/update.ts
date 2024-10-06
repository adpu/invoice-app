// lib/update.tsx
import { CompanySetForm } from "../lib/definitions";
import { updateCompanyData } from './data';

// Función para actualizar una empresa
export async function updateCompany(updatedCompany: CompanySetForm) {
 
  try {
   
    const result = await updateCompanyData(updatedCompany);
    
    if (!result) {
      throw new Error('Failed to update the database');
    }
   
    return result; // Return the updated company data
  } catch (error) {
    console.error('Error updating company:', error); // Log the error
    return null; // Return null to indicate failure
  }
}
