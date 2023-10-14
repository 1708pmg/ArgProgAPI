
export const formatearFechaYHora = (fecha) => {
  const dia = fecha.getDate();
  const mes = fecha.toLocaleString('default', { month: 'long' });
  const año = fecha.getFullYear();
  const horas = fecha.getHours();
  const minutos = fecha.getMinutes();

  // Obteniendo sufijo para las horas (AM/PM)
  const sufijoHoras = horas >= 12 ? 'PM' : 'AM';

  // Ajustando las horas para el formato de 12 horas
  const horasFormato12 = horas % 12 || 12;

  const formatoFecha = `${dia} de ${mes} de ${año}`;
  const formatoHora = `${horasFormato12}:${minutos < 10 ? '0' : ''}${minutos} ${sufijoHoras}`;

  return { formatoFecha, formatoHora };
};







/*import { format, parse } from 'date-fns';

export function formatearFechaYHora(fechaString) {
  try {
    // Parseo la fecha
    const fecha = parse(fechaString, "yyyy-MM-dd'T'HH:mm", new Date());

    // Formateo la fecha y la hora
    const formatoFecha = format(fecha, "dd 'de' MM 'de' yyyy");
    const formatoHora = format(fecha, "HH:mm 'hs.'");

    return { formatoFecha, formatoHora };
  } catch (error) {
    console.error("Error al formatear fecha y hora:", error);
    return { formatoFecha: "Fecha no disponible", formatoHora: "Hora no disponible" };
  }
}*/






/*export const formatearFechaYHora = (fecha) => {
  const dia = fecha.getDate();
  const mes = fecha.toLocaleString('default', { month: 'long' });
  const año = fecha.getFullYear();
  const horas = fecha.getHours();
  const minutos = fecha.getMinutes();
  const formatoFecha = `${dia} de ${mes} ${año}`;
  const formatoHora = `${horas}:${minutos < 10 ? '0' : ''}${minutos} hs`;
  return { formatoFecha, formatoHora };
};*/
  