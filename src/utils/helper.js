const formatNumberToPrice = (price) => {
  const formater = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formater.format(price / 100);
};

export default formatNumberToPrice;
