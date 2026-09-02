import { StatusChip, EntityCell } from '../Components/ui/chips.jsx'
import { makeCustomers, makeOrders, makeProducts, makeInvoices } from './mock.js'

const CUSTOMERS = makeCustomers(42)
const ORDERS = makeOrders(48)
const PRODUCTS = makeProducts(36)
const INVOICES = makeInvoices(30)

const money = (n) => `$${Number(n).toLocaleString('en-US')}`

export const LIST_CONFIGS = {
  '/ecommerce/products': {
    title: 'Products',
    subtitle: 'Every SKU across all channels.',
    trail: [{ label: 'E-Commerce', to: '/ecommerce/products' }, { label: 'Products' }],
    rows: PRODUCTS,
    searchKeys: ['name', 'category', 'id'],
    stats: [
      { label: 'Total SKUs', value: String(PRODUCTS.length) },
      { label: 'In stock', value: String(PRODUCTS.filter((p) => p.status === 'In stock').length) },
      { label: 'Low stock', value: String(PRODUCTS.filter((p) => p.status === 'Low stock').length) },
      { label: 'Out of stock', value: String(PRODUCTS.filter((p) => p.status === 'Out of stock').length) },
    ],
    filters: [
      { key: 'low', label: 'Low / out', test: (r) => r.status !== 'In stock' },
      { key: 'audio', label: 'Audio', test: (r) => r.category === 'Audio' },
    ],
    columns: [
      { key: 'name', header: 'Product', sortable: true, render: (r) => <EntityCell name={r.name} sub={r.id} seed={r.seed} square /> },
      { key: 'category', header: 'Category', sortable: true },
      { key: 'price', header: 'Price', align: 'end', sortable: true, render: (r) => money(r.price.toFixed(2)) },
      { key: 'stock', header: 'Stock', align: 'end', sortable: true },
      { key: 'sold', header: 'Sold', align: 'end', sortable: true, render: (r) => r.sold.toLocaleString() },
      { key: 'status', header: 'Status', render: (r) => <StatusChip status={r.status} /> },
    ],
  },

  '/ecommerce/orders': {
    title: 'Orders',
    subtitle: 'All orders across every sales channel.',
    trail: [{ label: 'E-Commerce', to: '/ecommerce/products' }, { label: 'Orders' }],
    rows: ORDERS,
    searchKeys: ['id', 'customer', 'product'],
    stats: [
      { label: 'Orders', value: String(ORDERS.length) },
      { label: 'Delivered', value: String(ORDERS.filter((o) => o.status === 'Delivered').length) },
      { label: 'Pending', value: String(ORDERS.filter((o) => o.status === 'Pending').length) },
      { label: 'Cancelled', value: String(ORDERS.filter((o) => o.status === 'Cancelled').length) },
    ],
    filters: [
      { key: 'open', label: 'Open', test: (r) => !['Delivered', 'Cancelled', 'Refunded'].includes(r.status) },
      { key: 'refunded', label: 'Refunded', test: (r) => r.status === 'Refunded' },
    ],
    columns: [
      { key: 'id', header: 'Order', sortable: true },
      { key: 'customer', header: 'Customer', render: (r) => <EntityCell name={r.customer} sub={r.product} seed={r.seed} /> },
      { key: 'date', header: 'Date', sortable: true },
      { key: 'total', header: 'Total', align: 'end', sortable: true, render: (r) => money(r.total) },
      { key: 'payment', header: 'Payment' },
      { key: 'status', header: 'Status', render: (r) => <StatusChip status={r.status} /> },
    ],
  },

  '/tables/basic': {
    title: 'Basic tables',
    subtitle: 'The composed DataTable with sort, search and pagination.',
    trail: [{ label: 'Tables', to: '/tables/basic' }, { label: 'Basic' }],
    rows: CUSTOMERS.slice(0, 12),
    searchKeys: ['name', 'company'],
    columns: [
      { key: 'name', header: 'Name', sortable: true },
      { key: 'company', header: 'Company', sortable: true },
      { key: 'city', header: 'City' },
      { key: 'orders', header: 'Orders', align: 'end', sortable: true },
      { key: 'status', header: 'Status', render: (r) => <StatusChip status={r.status} /> },
    ],
  },

  '/tables/data': {
    title: 'Data tables',
    subtitle: 'Larger dataset with filters, stats and per-column sort.',
    trail: [{ label: 'Tables', to: '/tables/basic' }, { label: 'Data' }],
    rows: ORDERS,
    searchKeys: ['id', 'customer', 'product', 'status'],
    stats: [
      { label: 'Rows', value: String(ORDERS.length) },
      { label: 'Avg. total', value: money(Math.round(ORDERS.reduce((a, o) => a + o.total, 0) / ORDERS.length)) },
      { label: 'Channels', value: String(new Set(ORDERS.map((o) => o.payment)).size) },
      { label: 'Statuses', value: String(new Set(ORDERS.map((o) => o.status)).size) },
    ],
    filters: [{ key: 'card', label: 'Card', test: (r) => r.payment === 'Card' }],
    columns: [
      { key: 'id', header: 'Order', sortable: true },
      { key: 'customer', header: 'Customer', sortable: true },
      { key: 'product', header: 'Product' },
      { key: 'date', header: 'Date', sortable: true },
      { key: 'total', header: 'Total', align: 'end', sortable: true, render: (r) => money(r.total) },
      { key: 'status', header: 'Status', render: (r) => <StatusChip status={r.status} /> },
    ],
  },

  '/pages/invoice-list': {
    title: 'Invoices',
    subtitle: 'Billing history for every account.',
    trail: [{ label: 'Pages', to: '/pages/profile' }, { label: 'Invoices' }],
    rows: INVOICES,
    searchKeys: ['id', 'client', 'status'],
    stats: [
      { label: 'Invoices', value: String(INVOICES.length) },
      { label: 'Paid', value: String(INVOICES.filter((i) => i.status === 'Paid').length) },
      { label: 'Overdue', value: String(INVOICES.filter((i) => i.status === 'Overdue').length) },
      { label: 'Outstanding', value: money(INVOICES.filter((i) => i.status !== 'Paid').reduce((a, i) => a + i.amount, 0)) },
    ],
    filters: [{ key: 'unpaid', label: 'Unpaid', test: (r) => r.status !== 'Paid' }],
    columns: [
      { key: 'id', header: 'Invoice', sortable: true },
      { key: 'client', header: 'Client', sortable: true },
      { key: 'issued', header: 'Issued', sortable: true },
      { key: 'due', header: 'Due', sortable: true },
      { key: 'amount', header: 'Amount', align: 'end', sortable: true, render: (r) => money(r.amount) },
      { key: 'status', header: 'Status', render: (r) => <StatusChip status={r.status} /> },
    ],
  },
}

export const EXTRA_DATA = { CUSTOMERS, ORDERS, PRODUCTS, INVOICES }
