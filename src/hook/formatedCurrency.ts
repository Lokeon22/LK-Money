export function convert(price: number) {
  let currencyFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return { currencyFormated };
}
