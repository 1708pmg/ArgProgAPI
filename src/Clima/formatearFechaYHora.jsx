
export const formatearFechaYHora = (fecha) => {
  const dia = fecha.getDate();
  const mes = fecha.toLocaleString('default', { month: 'long' });
  const año = fecha.getFullYear();
  const horas = fecha.getHours();
  const minutos = fecha.getMinutes();
  const formatoFecha = `${dia} de ${mes} ${año}`;
  const formatoHora = `${horas}:${minutos < 10 ? '0' : ''}${minutos} hs`;
  return { formatoFecha, formatoHora };
};
  