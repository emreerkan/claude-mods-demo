export function cartTotal(items) {
  return items.reduce((sum, item) => sum + (item.giftCard ? 0 : item.price * item.qty), 0)
}
