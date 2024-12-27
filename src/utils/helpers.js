export const formatCurrency = (amount) => {
    return `₹${parseFloat(amount).toFixed(2)}`;
};

export const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};
