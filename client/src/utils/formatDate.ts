export const formatDateTime = (dateString: string) => {

    const date = new Date(dateString);

    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).format(date);

    const formattedTime = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }).format(date);
    
    return `${formattedDate} at ${formattedTime}`;
}