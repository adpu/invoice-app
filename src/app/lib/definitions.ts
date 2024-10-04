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
    amount: number,
    iva: number;
    irpf: number,
    invoiceid: string,
    name: string,
    lastname: string,
    address: string,
    city: string,
    dni: string,
    status: string,
    created_at: string
  };