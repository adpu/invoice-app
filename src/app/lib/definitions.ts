// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

  
  export type CompanySetForm = {
    id: number;
    logo: string;
    company: string;
    name: string;
    lastname: string;
    address: string;
    city: string;
    dni: string;
  };

  export type Invoice ={
    id: number;
    created_at: string;
    amount: number;
    iva: number;
    irpf: number;
    invoiceid: string;
    name: string;
    lastname: string;
    address: string;
    city: string;
    dni: string;
    status: string; 
    description: string;
    payment:string;
  };

  export type InvoiceInsert ={ 
    name: string;
    lastname: string;
    address: string;
    city: string;
    dni: string;
    invoiceid: string;
    created_at: string;
    description: string;
    payment:string;
    amount: number;
    iva: number;
    irpf: number;
    status: string; 
  };