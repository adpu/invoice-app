import Link from "next/link";
interface InvoiceActionsProps {
  id: string; 
}
export default async function InvoiceActions({ id }: InvoiceActionsProps) {
    
    return(
        <ul className="flex justify-end gap-4 w-full list-none items-center">
            <li>
            <Link href={`/invoice/${id}/download`} className=" flex gap-1 hover:underline rounded-sm text-black text-base">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
                <span className="text-black">Descarregar</span></Link>
            </li>
            
        </ul>
    
    );

}
 