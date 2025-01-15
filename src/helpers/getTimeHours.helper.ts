export default function getTimeHours(unixTime: number) {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours();
    if      (hours === 0)  return '12 AM';
    else if (hours < 12)   return hours + ' AM';
    else if (hours === 12) return '12 PM';
    else                   return hours - 12 + ' PM';
}