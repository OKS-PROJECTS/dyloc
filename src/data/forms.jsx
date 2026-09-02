export const FORM_CONFIGS = {
  '/forms/elements': {
    title: 'Form elements',
    subtitle: 'Every oks-ui field component, wired through Form + FormFieldSet.',
    trail: [{ label: 'Forms', to: '/forms/elements' }, { label: 'Elements' }],
    sections: [
      {
        title: 'Text inputs',
        fields: [
          { type: 'text', name: 'firstName', label: 'First name', placeholder: 'Ava' },
          { type: 'text', name: 'lastName', label: 'Last name', placeholder: 'Reid' },
          { type: 'email', name: 'email', label: 'Email', placeholder: 'you@company.com', colSpan: 2 },
          { type: 'url', name: 'site', label: 'Website', placeholder: 'https://…' },
          { type: 'number', name: 'seats', label: 'Seats', placeholder: '10' },
          { type: 'textarea', name: 'bio', label: 'Bio', placeholder: 'A few words…', showLengthCounter: true, colSpan: 2 },
          { type: 'password', name: 'password', label: 'Password' },
          { type: 'otp', name: 'code', label: 'One-time code', length: 6 },
        ],
      },
      {
        title: 'Choice + specialised',
        fields: [
          {
            type: 'select',
            name: 'plan',
            label: 'Plan',
            options: [
              { label: 'Starter', value: 'starter' },
              { label: 'Growth', value: 'growth' },
              { label: 'Scale', value: 'scale' },
            ],
          },
          { type: 'switch', name: 'notify', label: 'Email notifications' },
          {
            type: 'radio',
            name: 'billing',
            label: 'Billing cycle',
            options: [
              { label: 'Monthly', value: 'monthly' },
              { label: 'Annual', value: 'annual' },
            ],
          },
          {
            type: 'checkbox',
            name: 'features',
            label: 'Add-ons',
            options: [
              { label: 'Priority support', value: 'support' },
              { label: 'Audit log', value: 'audit' },
            ],
          },
          { type: 'range', name: 'budget', label: 'Monthly budget', min: 0, max: 1000, step: 50 },
          { type: 'phone', name: 'phone', label: 'Phone', defaultCountryCode: 'US' },
          { type: 'datepicker', name: 'start', label: 'Start date' },
          { type: 'file', name: 'avatar', label: 'Avatar', ui: 'dropzone', colSpan: 2 },
        ],
      },
    ],
  },

  '/forms/layouts': {
    title: 'Form layouts',
    subtitle: 'Two-column grid layout with section cards and colSpan hints.',
    trail: [{ label: 'Forms', to: '/forms/elements' }, { label: 'Layouts' }],
    sections: [
      {
        title: 'Company profile',
        fields: [
          { type: 'text', name: 'company', label: 'Company name', colSpan: 2 },
          { type: 'text', name: 'vat', label: 'VAT / Tax ID' },
          { type: 'url', name: 'website', label: 'Website' },
          { type: 'textarea', name: 'address', label: 'Registered address', colSpan: 2 },
        ],
      },
      {
        title: 'Primary contact',
        fields: [
          { type: 'text', name: 'contactName', label: 'Name' },
          { type: 'email', name: 'contactEmail', label: 'Email' },
          { type: 'phone', name: 'contactPhone', label: 'Phone', defaultCountryCode: 'US' },
          {
            type: 'select',
            name: 'role',
            label: 'Role',
            options: [
              { label: 'Owner', value: 'owner' },
              { label: 'Finance', value: 'finance' },
              { label: 'Operations', value: 'ops' },
            ],
          },
        ],
      },
    ],
  },

  '/forms/validation': {
    title: 'Form validation',
    subtitle: 'oks-ui VALIDATION_RULES on blur — required, email, minLength, pattern.',
    trail: [{ label: 'Forms', to: '/forms/elements' }, { label: 'Validation' }],
    submitLabel: 'Submit',
    sections: [
      {
        title: 'Account',
        fields: [
          { type: 'text', name: 'username', label: 'Username', validation: { rules: { required: true, minLength: 3 } } },
          { type: 'email', name: 'email', label: 'Email', validation: { rules: { required: true, email: true } } },
          { type: 'password', name: 'password', label: 'Password', validation: { rules: { required: true, strongPassword: true } } },
          { type: 'text', name: 'zip', label: 'Postal code', validation: { rules: { required: true, pattern: '^[0-9A-Za-z -]{3,10}$' } } },
        ],
      },
    ],
  },
}
