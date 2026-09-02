import {
  LayoutDashboard,
  AppWindow,
  Component,
  Sparkles,
  FileText,
  Wrench,
  Shapes,
  BarChart3,
  Menu as MenuIcon,
  FormInput,
  Table2,
  LayoutGrid,
  Map as MapIcon,
  ShoppingBag,
  Calendar,
  Users,
  MessageSquare,
  Mail,
  FolderOpen,
  StickyNote,
  CheckSquare,
  Image,
  ListTree,
  Bell,
} from 'lucide-react'

export const NAV = [
  {
    heading: 'Main',
    items: [
      {
        label: 'Dashboards',
        icon: LayoutDashboard,
        children: [
          { label: 'Dashboard 1', to: '/dashboards/default' },
          { label: 'Dashboard 2', to: '/dashboards/analytics' },
          { label: 'Dashboard 3', to: '/dashboards/sales' },
        ],
      },
    ],
  },
  {
    heading: 'Web Apps',
    items: [
      {
        label: 'Apps',
        icon: AppWindow,
        children: [
          { label: 'Calendar', to: '/apps/calendar', icon: Calendar },
          { label: 'Contacts', to: '/apps/contacts', icon: Users },
          { label: 'Chat', to: '/apps/chat', icon: MessageSquare },
          { label: 'Mail', to: '/apps/mail', icon: Mail },
          { label: 'File Manager', to: '/apps/file-manager', icon: FolderOpen },
          { label: 'Notes', to: '/apps/notes', icon: StickyNote },
          { label: 'To-Do', to: '/apps/todo', icon: CheckSquare },
          { label: 'Gallery', to: '/apps/gallery', icon: Image },
          { label: 'Tree View', to: '/apps/tree-view', icon: ListTree },
          { label: 'Notifications', to: '/apps/notifications', icon: Bell },
        ],
      },
      {
        label: 'E-Commerce',
        icon: ShoppingBag,
        children: [
          { label: 'Products', to: '/ecommerce/products' },
          { label: 'Orders', to: '/ecommerce/orders' },
          { label: 'Shop', to: '/ecommerce/shop' },
          { label: 'Product Details', to: '/ecommerce/product' },
          { label: 'Cart', to: '/ecommerce/cart' },
          { label: 'Checkout', to: '/ecommerce/checkout' },
          { label: 'Wishlist', to: '/ecommerce/wishlist' },
        ],
      },
      {
        label: 'Elements',
        icon: Component,
        children: [
          { label: 'Alerts', to: '/components/alert' },
          { label: 'Avatars', to: '/components/avatar' },
          { label: 'Badges', to: '/components/badge' },
          { label: 'Breadcrumbs', to: '/components/breadcrumbs' },
          { label: 'Buttons', to: '/components/button' },
          { label: 'Chips & Tags', to: '/components/chip' },
          { label: 'Dropdowns', to: '/components/dropdown' },
          { label: 'Loaders', to: '/components/loader' },
          { label: 'Navigation', to: '/components/nav' },
          { label: 'Pagination', to: '/components/pagination' },
          { label: 'Progress', to: '/components/progress' },
          { label: 'Tabs', to: '/components/tabs' },
          { label: 'Toasts', to: '/components/toast' },
          { label: 'Tooltips', to: '/components/tooltip' },
          { label: 'Typography', to: '/components/typography' },
        ],
      },
      {
        label: 'Advanced UI',
        icon: Sparkles,
        children: [
          { label: 'Accordions', to: '/components/accordion' },
          { label: 'Cards', to: '/components/card' },
          { label: 'Command Palette', to: '/components/command-palette' },
          { label: 'Modals & Drawers', to: '/components/modal' },
          { label: 'Timeline', to: '/components/timeline' },
          { label: 'Calendar', to: '/components/calendar' },
          { label: 'Kanban Board', to: '/components/board' },
          { label: 'Split Layout', to: '/components/split-layout' },
          { label: 'Messages', to: '/components/message' },
          { label: 'Kitchen Sink', to: '/components/kitchen-sink' },
          { label: 'All Components', to: '/components' },
        ],
      },
    ],
  },
  {
    heading: 'Pages',
    items: [
      {
        label: 'Pages',
        icon: FileText,
        children: [
          { label: 'Profile', to: '/pages/profile' },
          { label: 'About Us', to: '/pages/about' },
          { label: 'Pricing', to: '/pages/pricing' },
          { label: 'FAQ', to: '/pages/faq' },
          { label: 'Invoice', to: '/pages/invoice' },
          { label: 'Timeline', to: '/pages/timeline' },
          { label: 'Notification List', to: '/pages/notification-list' },
          { label: 'Empty Page', to: '/pages/empty' },
        ],
      },
      {
        label: 'Authentication',
        icon: Users,
        children: [
          { label: 'Sign In', to: '/auth/sign-in' },
          { label: 'Sign Up', to: '/auth/sign-up' },
          { label: 'Forgot Password', to: '/auth/forgot-password' },
          { label: 'Reset Password', to: '/auth/reset-password' },
          { label: 'Lock Screen', to: '/auth/lock' },
          { label: 'Two-Step Verification', to: '/auth/two-step' },
        ],
      },
      {
        label: 'Settings',
        icon: Wrench,
        children: [
          { label: 'Account', to: '/settings/account' },
          { label: 'Notifications', to: '/settings/notifications' },
          { label: 'Security', to: '/settings/security' },
          { label: 'Billing', to: '/settings/billing' },
          { label: 'Appearance', to: '/settings/appearance' },
        ],
      },
      {
        label: 'Error Pages',
        icon: Shapes,
        children: [
          { label: '404 Not Found', to: '/errors/404' },
          { label: '500 Server Error', to: '/errors/500' },
          { label: 'Maintenance', to: '/errors/maintenance' },
        ],
      },
    ],
  },
  {
    heading: 'General',
    items: [
      { label: 'Icons', to: '/icons', icon: Shapes },
      {
        label: 'Charts',
        icon: BarChart3,
        children: [
          { label: 'Line & Area', to: '/charts/line-area' },
          { label: 'Bar & Column', to: '/charts/bar-column' },
          { label: 'Pie & Donut', to: '/charts/pie-donut' },
          { label: 'Heatmap', to: '/charts/heatmap' },
        ],
      },
      { label: 'Maps', to: '/maps', icon: MapIcon },
    ],
  },
  {
    heading: 'Multi Level',
    items: [
      {
        label: 'Menu Levels',
        icon: MenuIcon,
        children: [
          { label: 'Level 1', to: '/menu-levels/level-1' },
          {
            label: 'Level 2',
            children: [
              { label: 'Level 2.1', to: '/menu-levels/level-2/one' },
              {
                label: 'Level 2.2',
                children: [
                  { label: 'Level 3.1', to: '/menu-levels/level-2/two/a' },
                  { label: 'Level 3.2', to: '/menu-levels/level-2/two/b' },
                ],
              },
              { label: 'Level 2.3', to: '/menu-levels/level-2/three' },
            ],
          },
        ],
      },
    ],
  },
  {
    heading: 'Components',
    items: [
      {
        label: 'Forms',
        icon: FormInput,
        children: [
          { label: 'Form Elements', to: '/forms/elements' },
          { label: 'Form Layouts', to: '/forms/layouts' },
          { label: 'Form Validation', to: '/forms/validation' },
          { label: 'Form Wizard', to: '/forms/wizard' },
          { label: 'Form Editor', to: '/forms/editor' },
        ],
      },
      {
        label: 'Tables',
        icon: Table2,
        children: [
          { label: 'Basic Tables', to: '/tables/basic' },
          { label: 'Data Tables', to: '/tables/data' },
        ],
      },
      { label: 'Widgets', to: '/widgets', icon: LayoutGrid },
      { label: 'Utilities', to: '/utilities/helpers', icon: Wrench },
    ],
  },
]

const collect = (items) =>
  items.flatMap((n) => (n.children ? collect(n.children) : n.to ? [n.to] : []))

export const NAV_ROUTES = Array.from(
  new Set(NAV.flatMap((s) => collect(s.items))),
)
