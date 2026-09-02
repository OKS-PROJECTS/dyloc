// Deterministic mock data — index-generated, never Math.random, all original.

const FIRST = ['Ava', 'Noah', 'Mia', 'Liam', 'Zoe', 'Ethan', 'Iris', 'Owen', 'Lena', 'Kai', 'Nora', 'Jude', 'Elsa', 'Rhys', 'Cora', 'Milo', 'Freya', 'Theo', 'Sana', 'Otto']
const LAST = ['Reid', 'Marsh', 'Vance', 'Okafor', 'Bloom', 'Nash', 'Frost', 'Adeyemi', 'Cole', 'Hart', 'Lindqvist', 'Mercer', 'Bianchi', 'Osei', 'Park', 'Rowe', 'Ferro', 'Quinn', 'Aziz', 'Wren']
const COMPANY = ['Northwind', 'Greenlane', 'Corewave', 'Brightsmith', 'Latitude', 'Fernbank', 'Oakmont', 'Pathline', 'Vireo', 'Sundry', 'Meridian', 'Kestrel']
const CITY = ['Lisbon', 'Toronto', 'Osaka', 'Munich', 'Austin', 'Nairobi', 'Bristol', 'Malmö', 'Bogotá', 'Perth', 'Tallinn', 'Cebu']
const PRODUCT = ['Aperture Lens 24mm', 'Nimbus Wireless Pad', 'Corewave Router X2', 'Brightsmith Desk Lamp', 'Latitude Travel Pack', 'Fernbank Field Chair', 'Vireo Smart Bulb 4-pack', 'Meridian Standing Mat', 'Kestrel Bluetooth Speaker', 'Oakmont Coffee Grinder', 'Pathline Trail Bottle', 'Sundry Cable Organizer']
const STATUS = ['Delivered', 'Pending', 'Shipped', 'Processing', 'Cancelled', 'Delivered', 'Delivered', 'Refunded']
const PAY = ['Card', 'PayPal', 'Bank transfer', 'Card', 'Wallet']

export const fullName = (i) => `${FIRST[i % FIRST.length]} ${LAST[(i * 7) % LAST.length]}`
export const company = (i) => COMPANY[i % COMPANY.length]
export const city = (i) => CITY[i % CITY.length]
const money = (i, base) => base + ((i * 6353) % base)

export const money0 = (n) =>
  '$' + Math.round(n).toLocaleString('en-US')

export function makeCustomers(n = 40) {
  return Array.from({ length: n }, (_, i) => ({
    id: `CUS-${(1042 + i).toString()}`,
    name: fullName(i),
    email: `${FIRST[i % FIRST.length].toLowerCase()}.${LAST[(i * 7) % LAST.length].toLowerCase()}@${company(i).toLowerCase()}.com`,
    company: company(i),
    city: city(i),
    orders: 3 + ((i * 5) % 28),
    spend: money(i, 4200),
    status: i % 9 === 0 ? 'Inactive' : 'Active',
    joined: `2025-0${(i % 9) + 1}-${((i * 3) % 27) + 1}`.replace(/-(\d)-/, '-0$1-'),
    seed: i + 1,
  }))
}

export function makeOrders(n = 48) {
  return Array.from({ length: n }, (_, i) => ({
    id: `#ORD-${(90210 + i * 3).toString()}`,
    customer: fullName(i * 2),
    product: PRODUCT[i % PRODUCT.length],
    date: `2026-0${(i % 8) + 1}-${((i * 4) % 26) + 2}`.replace(/-(\d)-/, '-0$1-').replace(/-(\d)$/, '-0$1'),
    total: money(i, 900),
    payment: PAY[i % PAY.length],
    status: STATUS[i % STATUS.length],
    seed: i * 2 + 1,
  }))
}

export function makeProducts(n = 36) {
  return Array.from({ length: n }, (_, i) => ({
    id: `SKU-${(3300 + i * 11).toString()}`,
    name: PRODUCT[i % PRODUCT.length],
    category: ['Photography', 'Audio', 'Networking', 'Home', 'Outdoor', 'Office'][i % 6],
    price: 19 + ((i * 13) % 240),
    stock: (i * 17) % 180,
    sold: 40 + ((i * 29) % 900),
    status: (i * 17) % 180 === 0 ? 'Out of stock' : i % 7 === 0 ? 'Low stock' : 'In stock',
    seed: i * 3 + 2,
  }))
}

export function makeInvoices(n = 30) {
  return Array.from({ length: n }, (_, i) => ({
    id: `INV-${(2026000 + i).toString()}`,
    client: company(i),
    issued: `2026-0${(i % 8) + 1}-05`.replace(/-(\d)-/, '-0$1-'),
    due: `2026-0${(i % 8) + 2}-05`.replace(/-(\d)-/, '-0$1-'),
    amount: money(i, 3400),
    status: ['Paid', 'Pending', 'Overdue', 'Paid', 'Draft'][i % 5],
    seed: i * 5 + 4,
  }))
}

export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const series = (len, base, spread, phase = 0) =>
  Array.from({ length: len }, (_, i) =>
    Math.round(base + Math.sin((i + phase) / 1.7) * spread + ((i * 37) % (spread / 1.5))),
  )
