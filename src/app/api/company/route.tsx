import { NextResponse } from "next/server";
import { z } from "zod";
import { updateCompanyData } from "@/app/lib/data";


// Define the schema using Zod
const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    lastname: z.string().min(1, "Last name is required"),
    logoName: z.string().min(1, "Logo is required"), 
    company: z.string().min(1, "Company name is required"),
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    dni: z.string().min(1, "DNI is required")
});

export async function POST(req: Request) {

    const { name, lastname, logoName, company, address, city, dni } = await req.json();
   
    /*console.log(logo);
    console.log(company);
    console.log(name);
    console.log(lastname);
    console.log(address);
    console.log(city);
    console.log(dni);*/
    try {
        const validatedData = formSchema.safeParse({name, lastname, logoName, company, address, city, dni});

        if (!validatedData.success) {
            const errorMessages = validatedData.error.errors.map((err) => err.message);
            return NextResponse.json({
                msg: errorMessages, // Send the validation error messages to the client
                success: false
            }, { status: 400 });
        }


        // Update database
        const id=1;
        const logo =logoName;
        await updateCompanyData({id, name, lastname, logo, company, address, city, dni});

        return NextResponse.json({ msg: ["Registre actualitzat"], success: true });
    } catch (error) {
        console.error("Error on Updating register: ", error);
    }

}