import { MONTHS, series, makeCustomers, makeProducts, money0 } from './mock.js'

export const kpis = [
  { label: 'Today Orders', value: '5,472', delta: 4.2, tone: 'primary', spark: series(14, 60, 18) },
  { label: 'Today Revenue', value: '$47,589', delta: -1.8, tone: 'success', spark: series(14, 80, 22, 2) },
  { label: 'New Customers', value: '1,204', delta: 6.1, tone: 'warning', spark: series(14, 40, 14, 4) },
  { label: 'Refund Requests', value: '312', delta: -3.4, tone: 'danger', spark: series(14, 30, 10, 1) },
]

export const storagePct = 82

export const budget = MONTHS.map((m, i) => ({
  month: m,
  orders: series(12, 62, 20)[i],
  sales: series(12, 48, 24, 3)[i],
}))

export const browsers = [
  { name: 'Chrome', vendor: 'Google LLC', visits: 35502, trend: 12.7 },
  { name: 'Edge', vendor: 'Microsoft Corp.', visits: 25364, trend: 8.4 },
  { name: 'Firefox', vendor: 'Mozilla Foundation', visits: 14635, trend: -4.6 },
  { name: 'Safari', vendor: 'Apple Inc.', visits: 33657, trend: 5.2 },
  { name: 'Opera', vendor: 'Opera Software', visits: 12563, trend: -1.1 },
]

export const recentCustomers = makeCustomers(6).map((c, i) => ({
  ...c,
  payStatus: ['Paid', 'Pending', 'Pending', 'Paid', 'Paid', 'Pending'][i],
}))

export const mainTasks = [
  { text: 'Reconcile the Q3 supplier invoices', when: 'Today', done: false },
  { text: 'Share the pipeline report with stakeholders', when: 'Today', done: true },
  { text: 'Respond to the escalated support thread', when: '22 hrs', done: false },
  { text: 'Customize the onboarding email sequence', when: '1 day', done: false },
  { text: 'Draft the 360° sales overview deck', when: '2 days', done: false },
]

export const salesActivity = [
  { label: 'United States', value: money0(45870), percent: 86 },
  { label: 'Germany', value: money0(67357), percent: 73 },
  { label: 'Canada', value: money0(56291), percent: 69 },
  { label: 'India', value: money0(32879), percent: 65 },
  { label: 'Brazil', value: money0(34209), percent: 60 },
  { label: 'Australia', value: money0(22710), percent: 55 },
]

export const warehouse = [
  { label: 'Order Picking', value: '3,876', delta: -3, when: '5 days ago' },
  { label: 'Storage', value: '2,178', delta: 16, when: '2 days ago' },
  { label: 'Shipping', value: '1,367', delta: -6, when: '1 day ago' },
  { label: 'Receiving', value: '678', delta: 25, when: '10 days ago' },
  { label: 'Review', value: '578', delta: -55, when: '11 days ago' },
  { label: 'Profit', value: '$27,215', delta: 32, when: '11 days ago' },
]

export const timeline = [
  { name: 'Ava Reid', text: 'closed the Northwind renewal', date: '23 Sep, 2026' },
  { name: 'Noah Marsh', text: 'added 4 products to the Audio catalog', date: '16 Aug, 2026' },
  { name: 'Mia Vance', text: 'updated the shipping rules for EU zones', date: '02 Aug, 2026' },
  { name: 'Liam Okafor', text: 'resolved 12 support tickets', date: '21 Jun, 2026' },
  { name: 'Zoe Bloom', text: 'published the summer pricing update', date: '04 May, 2026' },
]

export const visitors = ['1', '2', '3', '4', '5', '6', '7'].map((d, i) => ({
  day: d,
  male: series(7, 210, 60)[i],
  female: series(7, 160, 55, 2)[i],
}))

export const productSummary = makeProducts(10)
