export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    trailingZeroDisplay: "stripIfInteger",
  }).format(amount);
}

export function toBoolean(str: string) {
  return str.toLowerCase() === "true";
}
