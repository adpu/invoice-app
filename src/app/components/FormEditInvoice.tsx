'use client';
import { useState } from "react";
import Link from 'next/link';
import { Invoice } from "../lib/definitions";

interface FormEditInvoiceProps {
  invoice: Invoice;
}


export default function FormEditInvoice({ invoice }: FormEditInvoiceProps) {

  const [name, setName] = useState(invoice.name || '');
  const [lastname, setLastName] = useState(invoice.lastname || '');
  const [address, setAddress] = useState(invoice.address || '');
  const [city, setCity] = useState(invoice.city || '');
  const [dni, setDni] = useState(invoice.dni || '');
  const [amount, setAmount] = useState(invoice.amount || '0');
  const [iva, setIva] = useState(invoice.iva || '0');
  const [irpf, setIrpf] = useState(invoice.irpf || '0');
  const [invoiceid, setInvoiceid] = useState(invoice.invoiceid || '');
  const [status, setStatus] = useState(invoice.status || 'draft');
  const [description, setDescription] = useState(invoice.description || '');
  const [payment, setPayment] = useState(invoice.payment || '');
  const [created_at, setCreatedAt] = useState(invoice.created_at || '');
  const id=invoice.id;
  const [error, setError] = useState([]);
  const [message, setMessage] = useState([]);



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/invoice/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        lastname,
        address,
        city,
        dni,
        invoiceid,
        created_at,
        description,
        payment,
        amount,
        iva,
        irpf,
        status,
      }),
    });

    const { msg, success } = await res.json();


    if (success) {
      setMessage(msg);
      setError([]);
    } else {
      setError(msg);
      setMessage([]);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto mt-8 flex flex-col flex-wrap justify-start items-start max-w-2xl w-full relative">

        <h1 className="text-2xl mb-4">Crear Factura</h1>
        <h2 className="text-lg my-4 underline">Dades client</h2>
        <div className="relative w-full flex flex-col justify-start mb-2 items-start">
          <label htmlFor="name" className="block mb-1">Nom:</label>
          <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={invoice.name}
              onChange={(e) => setName(e.target.value)}
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
              defaultValue={invoice.lastname}
              onChange={(e) => setLastName(e.target.value)}

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
              defaultValue={invoice.address}
              onChange={(e) => setAddress(e.target.value)}

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
              defaultValue={invoice.city}
              onChange={(e) => setCity(e.target.value)}

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
              defaultValue={invoice.dni}
              onChange={(e) => setDni(e.target.value)}

              className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
            />
          </div>
        </div>

        <h2 className="text-lg my-4 underline">Dades Factura</h2>

        <div className="relative w-full flex flex-col justify-start mb-2 items-start">
          <label htmlFor="invoiceid" className="block mb-1">Número de factura:</label>
          <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
            <input
              type="text"
              id="invoiceid"
              name="invoiceid"
              defaultValue={invoice.invoiceid}
              onChange={(e) => setInvoiceid(e.target.value)}
              className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
            />
          </div>
        </div>

        <div className="relative w-full flex flex-col justify-start mb-2 items-start">
          <label htmlFor="created_at" className="block mb-1">Data de factura:</label>
          <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
            <input
              type="date"
              id="created_at"
              name="created_at"
              defaultValue={invoice.created_at}
              onChange={(e) => setCreatedAt(e.target.value)}
              className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
            />
          </div>
        </div>

        <div className="relative w-full flex flex-col justify-start mb-2 items-start">
          <label htmlFor="description" className="block mb-1">Concepte:</label>
          <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
            <textarea id="description" defaultValue={invoice.description} name="description" onChange={(e) => setDescription(e.target.value)} className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"></textarea>
          </div>
        </div>

        <div className="relative w-full flex flex-col justify-start mb-2 items-start">
          <label htmlFor="payment" className="block mb-1">Formes de pagament:</label>
          <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
            <textarea id="payment" defaultValue={invoice.payment} name="payment" onChange={(e) => setPayment(e.target.value)} className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"></textarea>
          </div>
        </div>

        <div className="relative w-full flex flex-col justify-start mb-2 items-start">
          <label htmlFor="amount" className="block mb-1">Base:</label>
          <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
            <input
              type="number"
              id="amount"
              name="amount"
              defaultValue={invoice.amount/100}
              onChange={(e) => setAmount(e.target.value)}
              className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
            />
          </div>
        </div>

        <div className="relative w-full flex flex-col justify-start mb-2 items-start">
          <label htmlFor="iva" className="block mb-1">Iva (%):</label>
          <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
            <input
              type="number"
              id="iva"
              defaultValue={invoice.iva}
              name="iva"
              onChange={(e) => setIva(e.target.value)}
              className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
            />
          </div>
        </div>

        <div className="relative w-full flex flex-col justify-start mb-2 items-start">
          <label htmlFor="irpf" className="block mb-1">Irpf (%):</label>
          <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
            <input
              type="number"
              id="irpf"
              name="irpf"
              defaultValue={invoice.irpf}
              onChange={(e) => setIrpf(e.target.value)}
              className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
            />
          </div>
        </div>

        <div className="relative w-full flex flex-col justify-start mb-2 items-start">
          <label htmlFor="status" className="block mb-1">Estat:</label>
          <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
            <select
              name="status"
              id="status"
              defaultValue={invoice.status}
              onChange={(e) => setStatus(e.target.value)}
              className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
            >
              <option value="draft">Borrador</option>
              <option value="pendant">Pendent</option>
              <option value="payed">Pagada</option>
              <option value="expired">Expirada</option>
            </select>

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
        {message.length > 0 && (
          <div className="bg-green-400 text-black p-4 my-4">
            <ul>
              {message.map((messageItem, index) => (
                <li key={index}>{messageItem}</li>
              ))}
            </ul>

          </div>
        )}

      </div>
    </form>
  );
}








