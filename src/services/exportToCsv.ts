import type { Product } from "./ecwidService"

export const exportToCSV = (selected: Product[]) => {
  const csvContent =
    'data:text/csv;charset=utf-8,' +
    'name,price,currency\n' +
    selected.map((product: Product) => `${product.name},${product.price},${product.currency}`).join('\n')
  const encodedUri = encodeURI(csvContent)
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', 'selected_products.csv')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}