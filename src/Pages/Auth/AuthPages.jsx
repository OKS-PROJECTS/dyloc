import { Link, useNavigate } from 'react-router-dom'
import { Form, FormFieldSet, PasswordField, OtpField, Button, Checkbox, toast } from 'oks-ui'
import { AuthLayout } from './AuthLayout.jsx'

const submit = (navigate, msg) => () => {
  toast.success(msg)
  setTimeout(() => navigate('/dashboards/default'), 600)
}

export function SignIn() {
  const navigate = useNavigate()
  return (
    <AuthLayout
      title="Sign in"
      subtitle="Welcome back. Enter your details to continue."
      footer={<>New here? <Link to="/auth/sign-up" style={{ color: 'var(--app-primary)' }}>Create an account</Link></>}
    >
      <Form onSubmit={submit(navigate, 'Signed in')} className="space-y-4">
        <FormFieldSet type="email" name="email" label="Email" placeholder="you@company.com" validation={{ rules: { required: true, email: true } }} />
        <PasswordField name="password" label="Password" placeholder="••••••••" />
        <div className="flex items-center justify-between">
          <Checkbox defaultChecked label="Remember me" />
          <Link to="/auth/forgot-password" className="text-[12px]" style={{ color: 'var(--app-primary)' }}>
            Forgot password?
          </Link>
        </div>
        <Button type="submit" color="primary" fullWidth>Sign in</Button>
      </Form>
    </AuthLayout>
  )
}

export function SignUp() {
  const navigate = useNavigate()
  return (
    <AuthLayout
      title="Create account"
      subtitle="Start your 14-day trial. No card required."
      footer={<>Already have an account? <Link to="/auth/sign-in" style={{ color: 'var(--app-primary)' }}>Sign in</Link></>}
    >
      <Form onSubmit={submit(navigate, 'Account created')} className="space-y-4">
        <FormFieldSet type="text" name="name" label="Full name" placeholder="Ava Reid" validation={{ rules: { required: true } }} />
        <FormFieldSet type="email" name="email" label="Email" placeholder="you@company.com" validation={{ rules: { required: true, email: true } }} />
        <PasswordField name="password" label="Password" placeholder="8+ characters" />
        <Checkbox label="I agree to the terms of service" />
        <Button type="submit" color="primary" fullWidth>Create account</Button>
      </Form>
    </AuthLayout>
  )
}

export function ForgotPassword() {
  const navigate = useNavigate()
  return (
    <AuthLayout
      title="Reset your password"
      subtitle="We'll email you a secure reset link."
      footer={<Link to="/auth/sign-in" style={{ color: 'var(--app-primary)' }}>Back to sign in</Link>}
    >
      <Form onSubmit={submit(navigate, 'Reset link sent')} className="space-y-4">
        <FormFieldSet type="email" name="email" label="Email" placeholder="you@company.com" validation={{ rules: { required: true, email: true } }} />
        <Button type="submit" color="primary" fullWidth>Send reset link</Button>
      </Form>
    </AuthLayout>
  )
}

export function ResetPassword() {
  const navigate = useNavigate()
  return (
    <AuthLayout title="Set a new password" subtitle="Choose a strong password you don't use elsewhere.">
      <Form onSubmit={submit(navigate, 'Password updated')} className="space-y-4">
        <PasswordField name="password" label="New password" placeholder="8+ characters" />
        <PasswordField name="confirm" label="Confirm password" placeholder="Repeat password" />
        <Button type="submit" color="primary" fullWidth>Update password</Button>
      </Form>
    </AuthLayout>
  )
}

export function LockScreen() {
  const navigate = useNavigate()
  return (
    <AuthLayout title="Welcome back, Ava" subtitle="Enter your password to unlock the workspace.">
      <Form onSubmit={submit(navigate, 'Unlocked')} className="space-y-4">
        <PasswordField name="password" label="Password" placeholder="••••••••" />
        <Button type="submit" color="primary" fullWidth>Unlock</Button>
      </Form>
    </AuthLayout>
  )
}

export function TwoStep() {
  const navigate = useNavigate()
  return (
    <AuthLayout title="Two-step verification" subtitle="Enter the 6-digit code from your authenticator app.">
      <Form onSubmit={submit(navigate, 'Verified')} className="space-y-5">
        <OtpField name="code" length={6} label="Verification code" />
        <Button type="submit" color="primary" fullWidth>Verify</Button>
      </Form>
    </AuthLayout>
  )
}
