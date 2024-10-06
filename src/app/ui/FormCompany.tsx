'use client';

import { CompanySetForm } from "../lib/definitions";
import Link from 'next/link';

interface FormCompanyProps {
  companySet: CompanySetForm;
}



export default function FormCompany({companySet}: FormCompanyProps) {


  return (
    <form >
       <div className="mx-auto mt-8 flex flex-col flex-wrap justify-start items-start max-w-2xl w-full relative">
        
      <h1 className="text-2xl mb-4">Actualizar Empresa</h1>
      <div className="relative w-full flex flex-col justify-start mb-2 items-start">
        <label htmlFor="logo" className="block mb-1">Logo:</label>
        <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
          <input
            type="file"
            id="logo"
            name="logo"
            aria-describedby="logo-error"

          />
        </div>
      </div>
      <div className="relative w-full flex flex-col justify-start mb-2 items-start">
        <label htmlFor="company" className="block mb-1">Empresa:</label>
        <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
          <input
            type="text"
            id="company"
            name="company"
            defaultValue={companySet.company} 
          
            className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
          />
        </div>
      </div>

      <div className="relative w-full flex flex-col justify-start mb-2 items-start">
        <label htmlFor="name" className="block mb-1">Nom:</label>
        <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={companySet.name}
            className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
          />
        </div>
      </div>

      <div className="relative w-full flex flex-col justify-start mb-2 items-start">
        <label htmlFor="lastname" className="block mb-1">Cognoms:</label>
        <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
          <input
            type="text"
            id="lastname"
            name="lastname"
            defaultValue={companySet.lastname}
            className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
          />
        </div>
      </div>

      <div className="relative w-full flex flex-col justify-start mb-2 items-start">
        <label htmlFor="address" className="block mb-1">Direcció:</label>
        <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
          <input
            type="text"
            id="address"
            name="address"
            defaultValue={companySet.address}
            className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
          />
        </div>
      </div>

      <div className="relative w-full flex flex-col justify-start mb-2 items-start">
        <label htmlFor="city" className="block mb-1">Ciutat:</label>
        <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
          <input
            type="text"
            id="city"
            name="city"
            defaultValue={companySet.city}
            className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
          />
        </div>
      </div>

      <div className="relative w-full flex flex-col justify-start mb-2 items-start">
        <label htmlFor="dni" className="block mb-1">Dni:</label>
        <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
          <input
            type="text"
            id="dni"
            name="dni"
            defaultValue={companySet.dni}
            className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
          />
        </div>
      </div>

    
      <div className='flex justify-between items-center w-full relative gap-4'>
        <Link href="/" className='bg-gray-200 w-full text-center text-black py-2 px-4 mt-4'>Tornar</Link>
      <button type="submit" className="bg-blue-500 w-full text-center  text-white py-2 px-4 mt-4">Actualizar</button>
      </div>
      
      </div>
    </form>
  );
}








