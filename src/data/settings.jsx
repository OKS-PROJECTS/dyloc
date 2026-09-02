export const SETTINGS_CONFIGS = {
  '/settings/account': {
    title: 'Account settings',
    tabs: [
      {
        key: 'profile',
        title: 'Profile',
        groups: [
          {
            title: 'Public profile',
            description: 'This information appears on your comments and shared links.',
            fields: [
              { type: 'text', name: 'displayName', label: 'Display name', defaultValue: 'Ava Reid' },
              { type: 'text', name: 'title', label: 'Job title', defaultValue: 'Head of Operations' },
              { type: 'textarea', name: 'bio', label: 'Bio', showLengthCounter: true },
            ],
          },
        ],
      },
      {
        key: 'contact',
        title: 'Contact',
        groups: [
          {
            title: 'Contact details',
            fields: [
              { type: 'email', name: 'email', label: 'Email', defaultValue: 'ava.reid@northwind.com' },
              { type: 'phone', name: 'phone', label: 'Phone', defaultCountryCode: 'US' },
              {
                type: 'select',
                name: 'timezone',
                label: 'Timezone',
                options: [
                  { label: 'UTC', value: 'utc' },
                  { label: 'Europe/Lisbon', value: 'lisbon' },
                  { label: 'America/Toronto', value: 'toronto' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  '/settings/notifications': {
    title: 'Notification settings',
    tabs: [
      {
        key: 'email',
        title: 'Email',
        groups: [
          {
            title: 'Email notifications',
            description: 'Choose which updates land in your inbox.',
            fields: [
              { type: 'switch', name: 'digest', label: 'Weekly digest', hint: 'A Monday summary of activity', defaultChecked: true },
              { type: 'switch', name: 'mentions', label: 'Mentions', hint: 'When someone @-mentions you', defaultChecked: true },
              { type: 'switch', name: 'billing', label: 'Billing alerts', defaultChecked: true },
              { type: 'switch', name: 'product', label: 'Product news' },
            ],
          },
        ],
      },
      {
        key: 'push',
        title: 'Push',
        groups: [
          {
            title: 'Push notifications',
            fields: [
              { type: 'switch', name: 'pushMentions', label: 'Mentions', defaultChecked: true },
              { type: 'switch', name: 'pushOrders', label: 'New orders' },
              { type: 'switch', name: 'pushQuiet', label: 'Quiet hours (22:00–07:00)', defaultChecked: true },
            ],
          },
        ],
      },
    ],
  },

  '/settings/security': {
    title: 'Security settings',
    tabs: [
      {
        key: 'password',
        title: 'Password',
        groups: [
          {
            title: 'Change password',
            fields: [
              { type: 'password', name: 'current', label: 'Current password' },
              { type: 'password', name: 'next', label: 'New password' },
              { type: 'password', name: 'confirm', label: 'Confirm new password' },
            ],
          },
        ],
      },
      {
        key: 'mfa',
        title: 'Two-factor',
        groups: [
          {
            title: 'Two-factor authentication',
            description: 'Add a second step when signing in from a new device.',
            fields: [
              { type: 'switch', name: 'totp', label: 'Authenticator app', defaultChecked: true },
              { type: 'switch', name: 'sms', label: 'SMS backup codes' },
              { type: 'switch', name: 'sessions', label: 'Notify on new sign-in', defaultChecked: true },
            ],
          },
        ],
      },
    ],
  },

  '/settings/billing': {
    title: 'Billing settings',
    tabs: [
      {
        key: 'plan',
        title: 'Plan',
        groups: [
          {
            title: 'Current plan',
            description: 'You are on the Growth plan, billed annually.',
            fields: [
              {
                type: 'radio',
                name: 'plan',
                label: 'Change plan',
                options: [
                  { label: 'Starter — $0', value: 'starter' },
                  { label: 'Growth — $49 / mo', value: 'growth' },
                  { label: 'Scale — $149 / mo', value: 'scale' },
                ],
              },
              { type: 'switch', name: 'annual', label: 'Bill annually (save 20%)', defaultChecked: true },
            ],
          },
        ],
      },
      {
        key: 'payment',
        title: 'Payment method',
        groups: [
          {
            title: 'Card on file',
            fields: [
              { type: 'text', name: 'cardName', label: 'Name on card', defaultValue: 'Ava Reid' },
              { type: 'text', name: 'cardCountry', label: 'Billing country', defaultValue: 'Portugal' },
              { type: 'text', name: 'vat', label: 'VAT number' },
            ],
          },
        ],
      },
    ],
  },

  '/settings/appearance': {
    title: 'Appearance settings',
    tabs: [
      {
        key: 'theme',
        title: 'Theme',
        groups: [
          {
            title: 'Interface',
            fields: [
              {
                type: 'radio',
                name: 'theme',
                label: 'Colour scheme',
                options: [
                  { label: 'Light', value: 'light' },
                  { label: 'Dark', value: 'dark' },
                  { label: 'System', value: 'system' },
                ],
              },
              { type: 'switch', name: 'compact', label: 'Compact density' },
              { type: 'switch', name: 'reduce', label: 'Reduce motion' },
            ],
          },
        ],
      },
    ],
  },
}
