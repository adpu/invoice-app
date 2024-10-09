import { fetchCompanyData } from "../lib/data";
import Image from "next/image";

export default async function Remitent() {
    const companyData = await fetchCompanyData();  
    if (!companyData) {
        // Handle the case where companyData is null
        return <div>No company data available</div>;
    }
    return(
        <div className="flex justify-start flex-col items-start gap-4">
           <div className="flex justify-start gap-4 items-start">
           <Image src={`/uploads/${companyData.logo}`} width="32" height="32" alt="Logo" />
           <p className="text-black text-sm"><strong>{companyData.company}</strong><br />{companyData.name} {companyData.lastname}<br />{companyData.address}, {companyData.city}<br />{companyData.dni}</p>
           </div>
         </div> 
    
    );

}
 