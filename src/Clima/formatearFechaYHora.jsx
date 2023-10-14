
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
