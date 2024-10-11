
interface BadgeStatusProps {
    status: string;
}



export default function BadgeStatus({ status }: BadgeStatusProps) {
    let statusMap: { [key: string]: string } = {};

    const getStatusName = (status: string) => {
        statusMap = {
            draft: 'Borrador',
            pendant: 'Pendent',
            expired: 'Expirat',
            payed: 'Pagada'
        };

        return statusMap[status] || 'Unknown status';
    }
    return (
        <div
            className={`px-4 text-center border py-2 rounded-lg 
              ${status === 'draft' ? 'bg-draft' : ''} 
              ${status === 'pendant' ? 'bg-pending' : ''} 
              ${status === 'expired' ? 'bg-expired' : ''} 
              ${status === 'payed' ? 'bg-payed' : ''} 
              `}>
            {getStatusName(status)}</div>
    );
}