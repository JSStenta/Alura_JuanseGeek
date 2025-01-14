export const formatCurrency = (number) => {
    return new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(number);
};
