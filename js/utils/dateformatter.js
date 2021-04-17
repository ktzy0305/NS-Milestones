import { months } from "../data.js"

const zeroPad = (num, places) => String(num).padStart(places, '0');

function formatDate(date){
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} ${zeroPad(date.getHours(), 2)}:${zeroPad(date.getMinutes(), 2)}:${zeroPad(date.getSeconds(), 2)}`;
}

export { formatDate }