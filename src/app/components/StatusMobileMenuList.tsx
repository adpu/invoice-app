'use client';
import { useState } from "react";
import StatusMenuList from "./StatusMenuList";

interface StatusMobileMenuListProps {
  status: string; // Ensure it's a string
}

export default function StatusMobileMenuList({ status }: StatusMobileMenuListProps) {
  const [filterMobile, setFilterMobile] = useState<boolean>(false);
  const handleClick = () => {
    setFilterMobile(!filterMobile);
  };

  return (
    <>
      <button onClick={handleClick} className="mt-2 group bg-white hover:bg-gray-200 flex gap-2 border justify-between rounded-sm py-2 px-4 text-black text-base w-full">
        Filtrar per status
        {filterMobile ? (
          <svg key="up-arrow" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
            <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
          </svg>

        ) : (
          <svg key="down-arrow" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        )}
      </button>
      {filterMobile && (
        <div className='relative w-full block'>
          <div className='absolute w-full bg-white border z-50 top-0 p-4 left-0'>
            <StatusMenuList status={status} />
          </div>
        </div>
      )}
    </>
  );
}