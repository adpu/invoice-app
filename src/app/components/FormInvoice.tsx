'use client';
import { useState } from "react";
import Link from 'next/link';




export default function FormInvoice() {

  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [dni, setDni] = useState('');
  const [amount, setAmount] = useState('0');
  const [iva, setIva] = useState('0');
  const [irpf, setIrpf] = useState('0');
  const [invoiceid, setInvoiceid] = useState('');
  const status = 'draft';
  const [description, setDescription] = useState('');
  const [payment, setPayment] = useState('');
  const [created_at, setCreatedAt] = useState('');

  const [error, setError] = useState([]);
  const [message, setMessage] = useState([]);

  // Reset input file
  const resetForm = () => {
    setName('');
    setLastName('');
    setAddress('');
    setCity('');
    setInvoiceid('');
    setDni('');
    setAmount('0');
    setIva('0');
    setIrpf('0');
    setDescription('');
    setPayment('');
    setCreatedAt('');

  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(name);
    console.log(lastname);
    console.log(address);
    console.log(city);
    console.log(dni);
    console.log(invoiceid);
    console.log(created_at);
    console.log(description);
    console.log(payment);
    console.log(amount);
    console.log(iva);
    console.log(irpf);
    console.log(status);

    

    const res = await fetch("/api/invoice/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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

    // Check if the success property is true or false
    if (success) {
      setMessage(msg);
      resetForm(); // Assuming msg is an array of success messages
      setError([]); // Clear any existing errors
    } else {
      setError(msg); // Assuming msg is an array of error messages
      setMessage([]); // Clear any existing success messages
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
              value={name} 
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
              value={lastname} 
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
              value={address}
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
              value={city}
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
              value={dni}
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
              value={invoiceid}
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
              value={created_at}
              onChange={(e) => setCreatedAt(e.target.value)}
              className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
            />
          </div>
        </div>

        <div className="relative w-full flex flex-col justify-start mb-2 items-start">
          <label htmlFor="description" className="block mb-1">Concepte:</label>
          <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
            <textarea id="description" value={description} name="description" onChange={(e) => setDescription(e.target.value)} className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"></textarea>
          </div>
        </div>

        <div className="relative w-full flex flex-col justify-start mb-2 items-start">
          <label htmlFor="payment" className="block mb-1">Formes de pagament:</label>
          <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
            <textarea id="payment" value={payment} name="payment" onChange={(e) => setPayment(e.target.value)} className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"></textarea>
          </div>
        </div>

        <div className="relative w-full flex flex-col justify-start mb-2 items-start">
          <label htmlFor="amount"  className="block mb-1">Base:</label>
          <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
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
              value={iva}
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
              value={irpf}
              onChange={(e) => setIrpf(e.target.value)}
              className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
            />
          </div>
        </div>


        <div className='flex justify-between items-center w-full relative gap-4'>
          <Link href="/" className='bg-gray-200 w-full text-center text-black py-2 px-4 mt-4'>Tornar</Link>
          <button type="submit" className="bg-blue-500 w-full text-center  text-white py-2 px-4 mt-4">Guardar</button>
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








