import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import InnerTemplate from './Components/Commom/InnerTemplate.jsx'
import ComingSoon from './Pages/ComingSoon.jsx'
import { NAV_ROUTES } from './data/nav.js'
import { listRoutes, listRoutePaths } from './data/listRoutes.jsx'
import { formRoutes, formRoutePaths } from './data/formRoutes.jsx'
import { settingsRoutes, settingsRoutePaths } from './data/settingsRoutes.jsx'
import { detailRoutes, detailRoutePaths } from './data/detailRoutes.jsx'

const DefaultDashboard = lazy(() => import('./Pages/Dashboards/DefaultDashboard.jsx'))
const AnalyticsDashboard = lazy(() => import('./Pages/Dashboards/AnalyticsDashboard.jsx'))
const SalesDashboard = lazy(() => import('./Pages/Dashboards/SalesDashboard.jsx'))

const GalleryIndex = lazy(() => import('./Pages/Components/GalleryIndex.jsx'))
const GalleryEntry = lazy(() => import('./Pages/Components/GalleryEntry.jsx'))
const KitchenSink = lazy(() => import('./Pages/Components/KitchenSink.jsx'))
const ChartsGallery = lazy(() => import('./Pages/Components/ChartsGallery.jsx'))
const IconsPage = lazy(() => import('./Pages/Components/IconsPage.jsx'))

const About = lazy(() => import('./Pages/Content/About.jsx'))
const Pricing = lazy(() => import('./Pages/Content/Pricing.jsx'))
const Faq = lazy(() => import('./Pages/Content/Faq.jsx'))
const TimelinePage = lazy(() => import('./Pages/Content/TimelinePage.jsx'))
const NotificationList = lazy(() => import('./Pages/Content/NotificationList.jsx'))
const EmptyPage = lazy(() => import('./Pages/Content/EmptyPage.jsx'))
const Widgets = lazy(() => import('./Pages/Content/Widgets.jsx'))
const Utilities = lazy(() => import('./Pages/Content/Utilities.jsx'))
const MenuLevelStub = lazy(() => import('./Pages/Content/MenuLevelStub.jsx'))
const MapsPage = lazy(() => import('./Pages/Content/MapsPage.jsx'))

const Contacts = lazy(() => import('./Pages/Apps/Contacts.jsx'))
const CalendarApp = lazy(() => import('./Pages/Apps/CalendarApp.jsx'))
const ChatApp = lazy(() => import('./Pages/Apps/ChatApp.jsx'))
const MailApp = lazy(() => import('./Pages/Apps/MailApp.jsx'))
const FileManager = lazy(() => import('./Pages/Apps/FileManager.jsx'))
const Notes = lazy(() => import('./Pages/Apps/Notes.jsx'))
const Todo = lazy(() => import('./Pages/Apps/Todo.jsx'))
const GalleryApp = lazy(() => import('./Pages/Apps/GalleryApp.jsx'))
const TreeView = lazy(() => import('./Pages/Apps/TreeView.jsx'))
const NotificationsApp = lazy(() => import('./Pages/Apps/NotificationsApp.jsx'))

const Shop = lazy(() => import('./Pages/Ecommerce/Shop.jsx'))
const Cart = lazy(() => import('./Pages/Ecommerce/Cart.jsx'))
const Checkout = lazy(() => import('./Pages/Ecommerce/Checkout.jsx'))
const Wishlist = lazy(() => import('./Pages/Ecommerce/Wishlist.jsx'))

const FormWizard = lazy(() => import('./Pages/Forms/FormWizard.jsx'))
const FormEditor = lazy(() => import('./Pages/Forms/FormEditor.jsx'))

const lazyNamed = (loader, name) => lazy(() => loader().then((m) => ({ default: m[name] })))
const SignIn = lazyNamed(() => import('./Pages/Auth/AuthPages.jsx'), 'SignIn')
const SignUp = lazyNamed(() => import('./Pages/Auth/AuthPages.jsx'), 'SignUp')
const ForgotPassword = lazyNamed(() => import('./Pages/Auth/AuthPages.jsx'), 'ForgotPassword')
const ResetPassword = lazyNamed(() => import('./Pages/Auth/AuthPages.jsx'), 'ResetPassword')
const LockScreen = lazyNamed(() => import('./Pages/Auth/AuthPages.jsx'), 'LockScreen')
const TwoStep = lazyNamed(() => import('./Pages/Auth/AuthPages.jsx'), 'TwoStep')
const NotFound = lazyNamed(() => import('./Pages/Standalone/ErrorPages.jsx'), 'NotFound')
const ServerError = lazyNamed(() => import('./Pages/Standalone/ErrorPages.jsx'), 'ServerError')
const Maintenance = lazyNamed(() => import('./Pages/Standalone/ErrorPages.jsx'), 'Maintenance')

const EXPLICIT = {
  '/dashboards/default': <DefaultDashboard />,
  '/dashboards/analytics': <AnalyticsDashboard />,
  '/dashboards/sales': <SalesDashboard />,
  '/components': <GalleryIndex />,
  '/components/kitchen-sink': <KitchenSink />,
  '/charts/line-area': <ChartsGallery kind="line-area" />,
  '/charts/bar-column': <ChartsGallery kind="bar-column" />,
  '/charts/pie-donut': <ChartsGallery kind="pie-donut" />,
  '/charts/heatmap': <ChartsGallery kind="heatmap" />,
  '/icons': <IconsPage />,
  '/pages/about': <About />,
  '/pages/pricing': <Pricing />,
  '/pages/faq': <Faq />,
  '/pages/timeline': <TimelinePage />,
  '/pages/notification-list': <NotificationList />,
  '/pages/empty': <EmptyPage />,
  '/widgets': <Widgets />,
  '/utilities/helpers': <Utilities />,
  '/maps': <MapsPage />,
  '/menu-levels/level-1': <MenuLevelStub label="Level 1" />,
  '/menu-levels/level-2/one': <MenuLevelStub label="Level 2.1" />,
  '/menu-levels/level-2/two/a': <MenuLevelStub label="Level 3.1" />,
  '/menu-levels/level-2/two/b': <MenuLevelStub label="Level 3.2" />,
  '/menu-levels/level-2/three': <MenuLevelStub label="Level 2.3" />,
  '/apps/contacts': <Contacts />,
  '/apps/calendar': <CalendarApp />,
  '/apps/chat': <ChatApp />,
  '/apps/mail': <MailApp />,
  '/apps/file-manager': <FileManager />,
  '/apps/notes': <Notes />,
  '/apps/todo': <Todo />,
  '/apps/gallery': <GalleryApp />,
  '/apps/tree-view': <TreeView />,
  '/apps/notifications': <NotificationsApp />,
  '/ecommerce/shop': <Shop />,
  '/ecommerce/cart': <Cart />,
  '/ecommerce/checkout': <Checkout />,
  '/ecommerce/wishlist': <Wishlist />,
  '/forms/wizard': <FormWizard />,
  '/forms/editor': <FormEditor />,
}

const CONFIGURED = new Set([
  ...listRoutePaths,
  ...formRoutePaths,
  ...settingsRoutePaths,
  ...detailRoutePaths,
])

const shellRoutes = NAV_ROUTES.filter(
  (p) => !EXPLICIT[p] && !CONFIGURED.has(p) && !p.startsWith('/components/'),
)

export default function App() {
  return (
    <Routes>
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/sign-up" element={<SignUp />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />
      <Route path="/auth/lock" element={<LockScreen />} />
      <Route path="/auth/two-step" element={<TwoStep />} />
      <Route path="/errors/404" element={<NotFound />} />
      <Route path="/errors/500" element={<ServerError />} />
      <Route path="/errors/maintenance" element={<Maintenance />} />

      <Route element={<InnerTemplate />}>
        <Route path="/" element={<Navigate to="/dashboards/default" replace />} />
        <Route path="/dashboard" element={<Navigate to="/dashboards/default" replace />} />
        <Route path="/dashboards" element={<Navigate to="/dashboards/default" replace />} />

        {Object.entries(EXPLICIT).map(([p, el]) => (
          <Route key={p} path={p} element={el} />
        ))}
        <Route path="/components/:slug" element={<GalleryEntry />} />
        {listRoutes}
        {formRoutes}
        {settingsRoutes}
        {detailRoutes}
        {shellRoutes.map((p) => (
          <Route key={p} path={p} element={<ComingSoon />} />
        ))}
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  )
}
