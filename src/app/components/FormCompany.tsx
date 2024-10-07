'use client';
import { useState } from "react";
import { CompanySetForm } from "../lib/definitions";
import Link from 'next/link';

interface FormCompanyProps {
  companySet: CompanySetForm;
}



export default function FormCompany({companySet}: FormCompanyProps) {
  const [logo, setLogo] = useState(companySet.logo);
  const [company, setCompany] = useState(companySet.company);
  const [name, setName] = useState(companySet.name);
  const [lastname, setLastName] = useState(companySet.lastname);
  const [address, setAddress] = useState(companySet.address);
  const [city, setCity] = useState(companySet.city);
  const [dni, setDni] = useState(companySet.dni);
  const [error, setError] = useState([]);

  const handleSubmit=async (e: React.FormEvent) => {
    e.preventDefault();

    /*console.log(logo);
    console.log(company);
    console.log(name);
    console.log(lastname);
    console.log(address);
    console.log(city);
    console.log(dni);*/

    const res = await fetch("http://localhost:3000/api/company", {
      method: "POST",
      headers:{
        "Content-type": "application/json",    
      },
      body: JSON.stringify({
        name,
        lastname,
        logo,
        company,
        address,
        city,
        dni,
      })
    });
    const {msg} = await res.json();
    setError(msg);

    console.log(msg)
   
  };

  return (
    <form onSubmit={handleSubmit}>
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
            defaultValue={companySet.logo}
            onChange={(e) => setLogo(e.target.value)}
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
            onChange={(e) => setCompany(e.target.value)}
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setLastName(e.target.value)}
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
            onChange={(e) => setAddress(e.target.value)}
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
            onChange={(e) => setCity(e.target.value)}
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
            onChange={(e) => setDni(e.target.value)}
            defaultValue={companySet.dni}
            className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
          />
        </div>
      </div>

    
      <div className='flex justify-between items-center w-full relative gap-4'>
        <Link href="/" className='bg-gray-200 w-full text-center text-black py-2 px-4 mt-4'>Tornar</Link>
      <button type="submit" className="bg-blue-500 w-full text-center  text-white py-2 px-4 mt-4">Actualizar</button>
      </div>
      
{/* Display Validation Errors */}
{error.length > 0 && (
          <div className="bg-red-100 text-red-600 p-4 my-4">
            <ul>
              {error.map((errorItem, index) => (
                <li key={index}>{errorItem}</li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </form>
  );
}







