export const DETAIL_CONFIGS = {
  '/pages/profile': {
    title: 'Profile',
    trail: [{ label: 'Pages', to: '/pages/profile' }, { label: 'Profile' }],
    hero: {
      name: 'Ava Reid',
      sub: 'Head of Operations · Northwind',
      seed: 1,
      tags: ['Admin', 'Operations', 'Lisbon'],
    },
    sections: [
      {
        title: 'About',
        rows: [
          { label: 'Full name', value: 'Ava Reid' },
          { label: 'Email', value: 'ava.reid@northwind.com' },
          { label: 'Phone', value: '+351 21 000 0000' },
          { label: 'Location', value: 'Lisbon, Portugal' },
          { label: 'Joined', value: '12 January 2025' },
        ],
      },
      {
        title: 'Recent activity',
        rows: [
          { label: 'Today', value: 'Closed the Northwind renewal' },
          { label: 'Yesterday', value: 'Updated shipping rules for EU zones' },
          { label: '3 days ago', value: 'Approved 6 refund requests' },
        ],
      },
    ],
    aside: [
      {
        title: 'Stats',
        rows: [
          { label: 'Orders managed', value: '1,284' },
          { label: 'Team members', value: '9' },
          { label: 'Response time', value: '2h 10m' },
        ],
      },
    ],
  },

  '/ecommerce/product': {
    title: 'Product details',
    trail: [{ label: 'E-Commerce', to: '/ecommerce/products' }, { label: 'Product' }],
    hero: {
      name: 'Nimbus Wireless Pad',
      sub: 'SKU-3311 · Audio & accessories',
      tags: ['In stock', 'Best seller'],
    },
    sections: [
      {
        title: 'Overview',
        rows: [
          { label: 'Price', value: '$39.00' },
          { label: 'Compare at', value: '$49.00' },
          { label: 'Category', value: 'Networking' },
          { label: 'Weight', value: '210 g' },
          { label: 'Warranty', value: '24 months' },
        ],
      },
      {
        title: 'Description',
        rows: [
          { label: 'Summary', value: 'A slimline Qi charging pad with a woven top and a non-slip base.' },
          { label: 'In the box', value: 'Pad, 1m USB-C cable, quick start card' },
        ],
      },
    ],
    aside: [
      {
        title: 'Inventory',
        rows: [
          { label: 'On hand', value: '142' },
          { label: 'Committed', value: '18' },
          { label: 'Reorder point', value: '40' },
          { label: 'Units sold (30d)', value: '612' },
        ],
      },
    ],
  },

  '/pages/invoice': {
    title: 'Invoice',
    trail: [{ label: 'Pages', to: '/pages/profile' }, { label: 'Invoice' }],
    hero: {
      name: 'INV-2026014',
      sub: 'Issued 05 Aug 2026 · Due 05 Sep 2026',
      tags: ['Pending'],
    },
    sections: [
      {
        title: 'Bill to',
        rows: [
          { label: 'Client', value: 'Greenlane Ltd' },
          { label: 'Address', value: '4 Fernbank Road, Bristol, UK' },
          { label: 'VAT', value: 'GB123456789' },
        ],
      },
      {
        title: 'Line items',
        rows: [
          { label: 'Growth plan (annual)', value: '$588.00' },
          { label: 'Additional seats × 4', value: '$192.00' },
          { label: 'Priority support', value: '$120.00' },
          { label: 'Tax (20%)', value: '$180.00' },
          { label: 'Total due', value: '$1,080.00' },
        ],
      },
    ],
    aside: [
      { title: 'Payment', rows: [{ label: 'Method', value: 'Bank transfer' }, { label: 'Terms', value: 'Net 30' }] },
    ],
  },
}
