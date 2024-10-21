import { useState } from 'react';

export default function FilterByCustomDates() {
    const [startDate, setStartDate] = useState('');

    const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(e.target.value);
    };
    return (
        <form method="GET" className="relative w-full flex flex-col justify-start mb-2 items-start">

            <label htmlFor="datei" className="block mb-1">Data d&apos;inici:</label>
            <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2 mb-2'>
                <input
                    type="date"
                    id="datei"
                    name="datei"
                    onChange={handleStartDateChange}
                    className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
                />
            </div>
            <label htmlFor="datef" className="block mb-1">Data finalitzacio:</label>
            <div className='flex w-full placeholder:text-gray-400 justify-start items-center gap-2'>
                <input
                    type="date"
                    id="datef"
                    name="datef"
                    min={startDate} // Set min date to start date
                    className="border outline-0 placeholder:text-gray-400 border-gray-500 px-4 py-2 w-full relative block"
                />
            </div>
            <button type="submit" className="bg-blue-500 w-full text-center  text-white py-2 px-4 mt-4">Filtrar</button>
        </form>
    );
}