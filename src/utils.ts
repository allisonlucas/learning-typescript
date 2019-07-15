interface IProduct {
  name: string;
  unitPrice: number;
}

function calucalateTotalPrice(
  product: IProduct,
  quantity: number,
  discount: number
): number {
  var priceWithouthDiscount = product.unitPrice * quantity;
  var discountAmount = priceWithouthDiscount * discount;
  return priceWithouthDiscount - discountAmount;
}
