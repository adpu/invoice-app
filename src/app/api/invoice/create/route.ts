// src/app/api/invoice/route.ts

import { NextResponse } from "next/server";
import { z } from "zod";
import { createInvoice } from "@/app/lib/data";

// Define the schema using Zod
const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    lastname: z.string().min(1, "Last name is required"),
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    dni: z.string().min(1, "DNI is required"),
    invoiceid: z.string().min(1, "Invoice id is required"),
    created_at: z.date().or(z.string()),
    description: z.string().min(1, "Description is required"),
    payment: z.string().min(1, "System Payment is required"),
    amount: z.string().min(1, "Amount is required"),
    iva: z.number().or(z.string()).refine(val => !isNaN(Number(val)), { message: "Iva must be a number" }),
    irpf: z.number().or(z.string()).refine(val => !isNaN(Number(val)), { message: "Irpf must be a number" }),
});

export async function POST(req: Request) {
    const { name, lastname, address, city, dni, created_at, invoiceid, description, payment, amount, iva, irpf, status } = await req.json();

    try {
        const validatedData = formSchema.safeParse({ name, lastname, address, city, dni, invoiceid, created_at, description, payment, amount, iva, irpf });
        console.log("Validation result: ", validatedData);

        if (!validatedData.success) {
            const errorMessages = validatedData.error.errors.map((err) => err.message);
            console.error("Validation failed: ", validatedData.error);  // Log full error details for debugging
            return NextResponse.json({
                msg: errorMessages,
                success: false
            }, { status: 400 });
        }

        // Insert register to Database
        await createInvoice({
            name,
            lastname,
            address,
            city,
            dni,
            amount: Number(amount*100),
            irpf: Number(irpf),
            iva: Number(iva),
            invoiceid,
            description,
            payment,
            created_at,
            status
        });
        
        
        return NextResponse.json({ msg: ["Registre actualitzat"], success: true });
    } catch (error) {
        console.error("Error on Updating register: ", error);
        return NextResponse.json({ msg: ["An error occurred"], success: false }, { status: 500 });
    }
}
