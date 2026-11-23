export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    trailingZeroDisplay: "stripIfInteger",
  }).format(amount);
}
