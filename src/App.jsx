import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import InnerTemplate from './Components/Commom/InnerTemplate.jsx'
import ComingSoon from './Pages/ComingSoon.jsx'
import { NAV_ROUTES } from './data/nav.js'

const DefaultDashboard = lazy(() => import('./Pages/Dashboards/DefaultDashboard.jsx'))
const AnalyticsDashboard = lazy(() => import('./Pages/Dashboards/AnalyticsDashboard.jsx'))
const SalesDashboard = lazy(() => import('./Pages/Dashboards/SalesDashboard.jsx'))

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
}

const shellRoutes = NAV_ROUTES.filter((p) => !EXPLICIT[p])

export default function App() {
  return (
    <Routes>
      {/* shell-less */}
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/sign-up" element={<SignUp />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />
      <Route path="/auth/lock" element={<LockScreen />} />
      <Route path="/auth/two-step" element={<TwoStep />} />
      <Route path="/errors/404" element={<NotFound />} />
      <Route path="/errors/500" element={<ServerError />} />
      <Route path="/errors/maintenance" element={<Maintenance />} />

      {/* shell */}
      <Route element={<InnerTemplate />}>
        <Route path="/" element={<Navigate to="/dashboards/default" replace />} />
        <Route path="/dashboard" element={<Navigate to="/dashboards/default" replace />} />
        <Route path="/dashboards" element={<Navigate to="/dashboards/default" replace />} />
        {Object.entries(EXPLICIT).map(([p, el]) => (
          <Route key={p} path={p} element={el} />
        ))}
        {shellRoutes.map((p) => (
          <Route key={p} path={p} element={<ComingSoon />} />
        ))}
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  )
}
