import { Link } from 'react-router-dom'
import {
  Button,
  TextField,
  Badge,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Tooltip,
} from 'oks-ui'
import {
  Menu,
  Search,
  Moon,
  Sun,
  Bell,
  ShoppingCart,
  Mail,
  Maximize,
  Globe,
  Settings,
  User,
  LogOut,
  PanelLeftClose,
} from 'lucide-react'
import { useTheme } from '../../lib/theme.jsx'
import { avatarUrl } from '../../lib/cx.js'

function IconButton({ label, children, ...rest }) {
  return (
    <Tooltip content={label} placement="bottom">
      <Button isIconOnly size="sm" variant="ghost" color="default" aria-label={label} {...rest}>
        {children}
      </Button>
    </Tooltip>
  )
}

export default function Header({ onOpenMobileNav, onToggleCollapse }) {
  const { theme, toggle } = useTheme()

  return (
    <header
      className="sticky top-0 z-30 flex items-center gap-2 px-3 sm:px-4"
      style={{
        height: 'var(--app-header-height)',
        background: 'var(--app-header-bg)',
        borderBottom: '1px solid var(--app-border)',
        boxShadow: 'var(--app-header-shadow)',
      }}
    >
      <Button
        isIconOnly
        size="sm"
        variant="ghost"
        color="default"
        aria-label="Open navigation"
        className="lg:hidden"
        onPress={onOpenMobileNav}
      >
        <Menu size={18} />
      </Button>
      <Button
        isIconOnly
        size="sm"
        variant="ghost"
        color="default"
        aria-label="Collapse navigation"
        className="hidden lg:inline-flex"
        onPress={onToggleCollapse}
      >
        <PanelLeftClose size={18} />
      </Button>

      <div className="hidden max-w-xs flex-1 sm:block">
        <TextField
          type="search"
          size="sm"
          placeholder="Search…"
          startIcon={<Search size={14} />}
          aria-label="Search"
        />
      </div>

      <div className="ml-auto flex items-center gap-1">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button isIconOnly size="sm" variant="ghost" color="default" aria-label="Language">
              <Globe size={17} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Language">
            <DropdownItem key="en">English</DropdownItem>
            <DropdownItem key="fr">Français</DropdownItem>
            <DropdownItem key="de">Deutsch</DropdownItem>
            <DropdownItem key="es">Español</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <IconButton label={theme === 'dark' ? 'Light mode' : 'Dark mode'} onPress={toggle}>
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </IconButton>

        <Badge content={7} color="primary" size="sm" placement="top-right">
          <Button
            as={Link}
            to="/ecommerce/cart"
            isIconOnly
            size="sm"
            variant="ghost"
            color="default"
            aria-label="Cart"
          >
            <ShoppingCart size={17} />
          </Button>
        </Badge>

        <Badge content={5} color="danger" size="sm" placement="top-right">
          <Button
            as={Link}
            to="/apps/mail"
            isIconOnly
            size="sm"
            variant="ghost"
            color="default"
            aria-label="Mail"
          >
            <Mail size={17} />
          </Button>
        </Badge>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Badge content={3} color="warning" size="sm" placement="top-right">
              <Button isIconOnly size="sm" variant="ghost" color="default" aria-label="Notifications">
                <Bell size={17} />
              </Button>
            </Badge>
          </DropdownTrigger>
          <DropdownMenu aria-label="Notifications">
            <DropdownSection title="Notifications">
              <DropdownItem key="1" description="30 mins ago">New website is created</DropdownItem>
              <DropdownItem key="2" description="2 hours ago">Prepare for the next project</DropdownItem>
              <DropdownItem key="3" description="4 hours ago">Meeting at 3:00 pm</DropdownItem>
            </DropdownSection>
            <DropdownItem key="all" href="/pages/notification-list">View all</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <IconButton
          label="Fullscreen"
          className="hidden sm:inline-flex"
          onPress={() => {
            if (document.fullscreenElement) document.exitFullscreen?.()
            else document.documentElement.requestFullscreen?.()
          }}
        >
          <Maximize size={16} />
        </IconButton>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <button type="button" className="ml-1 rounded-full" aria-label="Account menu">
              <Avatar src={avatarUrl('dyloc-admin')} name="Ava Reid" size={32} showFallback />
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Account">
            <DropdownItem key="profile" href="/pages/profile" startContent={<User size={15} />}>
              Profile
            </DropdownItem>
            <DropdownItem key="settings" href="/settings/account" startContent={<Settings size={15} />}>
              Settings
            </DropdownItem>
            <DropdownItem key="signout" href="/auth/sign-in" color="danger" startContent={<LogOut size={15} />}>
              Sign out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  )
}
