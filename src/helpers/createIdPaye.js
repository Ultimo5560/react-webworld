export const createId = async () => {
    // Creamos un objeto Date
    const currentDate = new Date();
  
    // Obtenemos la fecha actual como una cadena de texto con formato dd-mm-yyyy
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Sumamos 1 porque los meses empiezan en 0
    const year = currentDate.getFullYear().toString();
    const dateString =`${day}-${month}-${year}`;
  
    // Obtenemos el segundo actual como una cadena de texto con formato ss
    const hour = currentDate.getHours().toString().padStart(2, '0');
    const minuts = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  
    // Concatenamos la fecha y segundo actuales en una cadena de texto para crear el ID único
    const uniqueId = `${dateString}-${hour}-${minuts}-${seconds}`;
  
    return uniqueId;
  }