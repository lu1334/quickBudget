export const formatAmount = (value: string) => {
  const parsed = Number(value);

  if (Number.isNaN(parsed)) {
    return value;
  }

  return parsed.toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}; 