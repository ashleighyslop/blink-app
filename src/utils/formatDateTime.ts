export const formatDateTime = (dateString: string) => {
   const formattedDT = new Date(dateString).toLocaleDateString('en-GB', {hour12:true, hour:'numeric', minute:'numeric', second:'numeric'})
    return formattedDT ;
}