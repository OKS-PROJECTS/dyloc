import {
  Alert,
  Avatar,
  AvatarGroup,
  Badge,
  Breadcrumbs,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Chip,
  Divider,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Loader,
  Nav,
  Pagination,
  Progress,
  CircularProgress,
  Tabs,
  Tab,
  Tooltip,
  Accordion,
  AccordionItem,
  Timeline,
  TimelineItem,
  SegmentedControl,
  Skeleton,
  EmptyState,
  toast,
} from 'oks-ui'
import {
  Card,
  CardBody,
  Modal,
  Drawer,
  Calendar,
  Board,
  SplitLayout,
  SplitPane,
  Message,
  MessageList,
  CommandPalette,
} from 'oks-ui'
import { useState } from 'react'
import { Bell, Check, Home, Inbox, Star } from 'lucide-react'
import { avatarUrl } from '../lib/cx.js'

function Demo({ children }) {
  return (
    <div className="flex flex-wrap items-center gap-3">{children}</div>
  )
}

function PaginationDemo() {
  const [page, setPage] = useState(2)
  return <Pagination page={page} pageCount={9} onChange={setPage} size="sm" showEdges />
}

function ModalDemo() {
  const [open, setOpen] = useState(false)
  const [drawer, setDrawer] = useState(false)
  return (
    <Demo>
      <Button variant="bordered" color="default" onPress={() => setOpen(true)}>Open modal</Button>
      <Button variant="bordered" color="default" onPress={() => setDrawer(true)}>Open drawer</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm action"
        actions={<><Button variant="bordered" color="default" onPress={() => setOpen(false)}>Cancel</Button><Button color="primary" onPress={() => setOpen(false)}>Confirm</Button></>}>
        <p className="text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>This dialog is an oks-ui Modal — focus-trapped and dismissible.</p>
      </Modal>
      <Drawer isOpen={drawer} onClose={() => setDrawer(false)} position="right" title="Details">
        <p className="text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>A right-side Drawer panel.</p>
      </Drawer>
    </Demo>
  )
}

function CommandPaletteDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="bordered" color="default" onPress={() => setOpen(true)}>Open ⌘K palette</Button>
      <CommandPalette
        isOpen={open}
        onClose={() => setOpen(false)}
        onSelect={() => setOpen(false)}
        items={[
          { id: 'dash', label: 'Go to Dashboard', group: 'Navigate' },
          { id: 'orders', label: 'Go to Orders', group: 'Navigate' },
          { id: 'new', label: 'Create product', group: 'Actions', shortcut: '⌘N' },
          { id: 'theme', label: 'Toggle theme', group: 'Actions' },
        ]}
      />
    </>
  )
}

function BoardDemo() {
  const [items, setItems] = useState([
    { id: '1', col: 'todo', title: 'Draft Q3 report' },
    { id: '2', col: 'todo', title: 'Review supplier list' },
    { id: '3', col: 'doing', title: 'Update pricing page' },
    { id: '4', col: 'done', title: 'Ship changelog' },
  ])
  return (
    <div className="h-[320px] w-full">
      <Board
        columns={[
          { id: 'todo', title: 'To do' },
          { id: 'doing', title: 'In progress' },
          { id: 'done', title: 'Done' },
        ]}
        items={items}
        getItemId={(i) => i.id}
        getItemColumn={(i) => i.col}
        onItemMove={({ itemId, to }) =>
          setItems((prev) => prev.map((it) => (it.id === itemId ? { ...it, col: to.columnId } : it)))
        }
        renderCard={(i) => <span className="text-[12.5px]">{i.title}</span>}
      />
    </div>
  )
}

function SegmentedDemo() {
  const [v, setV] = useState('week')
  return (
    <SegmentedControl
      aria-label="Range"
      value={v}
      onChange={setV}
      options={[
        { label: 'Day', value: 'day' },
        { label: 'Week', value: 'week' },
        { label: 'Month', value: 'month' },
      ]}
    />
  )
}

export const GALLERY = {
  alert: {
    title: 'Alert',
    group: 'Feedback',
    blurb: 'Inline banner with title, description, icon, actions and dismiss.',
    render: () => (
      <div className="w-full space-y-3">
        <Alert color="success" variant="soft" title="Payment received" description="Invoice INV-2026014 was paid in full." />
        <Alert color="warning" variant="soft" title="Storage almost full" description="You have used 82% of your plan." isClosable />
        <Alert color="danger" variant="bordered" title="Sync failed" description="Reconnect the warehouse integration to continue." />
      </div>
    ),
    code: `<Alert color="success" variant="soft" title="Payment received"
  description="Invoice INV-2026014 was paid in full." />`,
  },
  avatar: {
    title: 'Avatar',
    group: 'Data display',
    blurb: 'Image avatar with initials fallback, status dot, and overflow group.',
    render: () => (
      <Demo>
        <Avatar name="Ava Reid" src={avatarUrl(1)} />
        <Avatar name="Noah Marsh" src={avatarUrl(3)} status="online" isBordered />
        <Avatar name="Mia Vance" showFallback />
        <AvatarGroup max={3}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Avatar key={i} name={`User ${i}`} src={avatarUrl(i)} />
          ))}
        </AvatarGroup>
      </Demo>
    ),
    code: `<AvatarGroup max={3}>
  {users.map((u) => <Avatar key={u.id} name={u.name} src={u.avatar} />)}
</AvatarGroup>`,
  },
  badge: {
    title: 'Badge',
    group: 'Data display',
    blurb: 'Count / status indicator anchored to a child.',
    render: () => (
      <Demo>
        <Badge content={7} color="primary"><Button isIconOnly variant="soft" color="default" aria-label="Cart"><Inbox size={16} /></Button></Badge>
        <Badge content={99} max={20} color="danger"><Button isIconOnly variant="soft" color="default" aria-label="Alerts"><Bell size={16} /></Button></Badge>
        <Badge isDot color="success"><Button variant="soft" color="default">Status</Button></Badge>
      </Demo>
    ),
    code: `<Badge content={7} color="primary"><Button isIconOnly>…</Button></Badge>`,
  },
  breadcrumbs: {
    title: 'Breadcrumbs',
    group: 'Navigation',
    blurb: 'Navigation trail with a collapsing middle.',
    render: () => (
      <Breadcrumbs aria-label="Breadcrumb">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>E-Commerce</BreadcrumbItem>
        <BreadcrumbItem>Products</BreadcrumbItem>
        <BreadcrumbItem isCurrent>Nimbus Wireless Pad</BreadcrumbItem>
      </Breadcrumbs>
    ),
    code: `<Breadcrumbs aria-label="Breadcrumb">
  <BreadcrumbItem>Home</BreadcrumbItem>
  <BreadcrumbItem isCurrent>Product</BreadcrumbItem>
</Breadcrumbs>`,
  },
  button: {
    title: 'Button',
    group: 'Actions',
    blurb: 'Five variants, seven colours, loading + icon slots, polymorphic as.',
    render: () => (
      <div className="space-y-3">
        <Demo>
          <Button color="primary">Solid</Button>
          <Button variant="soft" color="primary">Soft</Button>
          <Button variant="bordered" color="default">Bordered</Button>
          <Button variant="ghost" color="default">Ghost</Button>
          <Button variant="link" color="primary">Link</Button>
        </Demo>
        <Demo>
          <Button color="success" startContent={<Check size={15} />}>Approve</Button>
          <Button color="danger" variant="soft">Delete</Button>
          <Button isLoading color="primary">Saving</Button>
          <ButtonGroup variant="bordered" color="default">
            <Button>Day</Button>
            <Button>Week</Button>
            <Button>Month</Button>
          </ButtonGroup>
        </Demo>
      </div>
    ),
    code: `<Button color="primary" startContent={<Check size={15} />}>Approve</Button>`,
  },
  chip: {
    title: 'Chip & Tag',
    group: 'Data display',
    blurb: 'Tags, pills, dismissible chips and toggle chips.',
    render: () => (
      <Demo>
        <Chip color="primary">Primary</Chip>
        <Chip variant="soft" color="success">Active</Chip>
        <Chip variant="bordered" color="default">Draft</Chip>
        <Chip variant="dot" color="warning">Pending</Chip>
        <Chip onClose={() => {}}>Dismissible</Chip>
        <Chip avatar={<Avatar name="Ava" src={avatarUrl(1)} size={18} />}>Ava Reid</Chip>
      </Demo>
    ),
    code: `<Chip variant="soft" color="success">Active</Chip>`,
  },
  dropdown: {
    title: 'Dropdown',
    group: 'Navigation',
    blurb: 'Menu / popover-menu with sections, descriptions and shortcuts.',
    render: () => (
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" color="default">Open menu</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Actions">
          <DropdownItem key="new" shortcut="⌘N">New file</DropdownItem>
          <DropdownItem key="copy" shortcut="⌘C">Copy link</DropdownItem>
          <DropdownItem key="edit" description="Rename this item">Edit</DropdownItem>
          <DropdownItem key="delete" color="danger">Delete</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    ),
    code: `<Dropdown><DropdownTrigger><Button>Menu</Button></DropdownTrigger>
  <DropdownMenu aria-label="Actions">
    <DropdownItem key="new" shortcut="⌘N">New file</DropdownItem>
  </DropdownMenu>
</Dropdown>`,
  },
  loader: {
    title: 'Loader',
    group: 'Feedback',
    blurb: 'Spinner variants and sizes.',
    render: () => (
      <Demo>
        <Loader />
        <Loader variant="dots-roll" />
        <Loader variant="pulse" color="primary" />
        <Loader size={28} label="Loading" />
      </Demo>
    ),
    code: `<Loader variant="dots-roll" />`,
  },
  nav: {
    title: 'Navigation',
    group: 'Navigation',
    blurb: 'The Nav tree with collapsible groups and active state.',
    render: () => (
      <div className="w-full max-w-xs">
        <Nav
          aria-label="Example"
          defaultExpandedKeys={['apps']}
          items={[
            { key: 'home', label: 'Dashboard', icon: <Home size={16} /> },
            {
              key: 'apps',
              label: 'Apps',
              children: [
                { key: 'contacts', label: 'Contacts' },
                { key: 'calendar', label: 'Calendar' },
              ],
            },
            { key: 'starred', label: 'Starred', icon: <Star size={16} />, badge: '3' },
          ]}
        />
      </div>
    ),
    code: `<Nav aria-label="Example" items={items} defaultExpandedKeys={['apps']} />`,
  },
  pagination: {
    title: 'Pagination',
    group: 'Navigation',
    blurb: 'Page-number control with sibling window and edge jumps.',
    render: () => <PaginationDemo />,
    code: `<Pagination page={page} pageCount={9} onChange={setPage} showEdges />`,
  },
  progress: {
    title: 'Progress',
    group: 'Feedback',
    blurb: 'Linear and circular progress, determinate or indeterminate.',
    render: () => (
      <div className="w-full space-y-4">
        <Progress value={68} color="primary" label="Upload" showValueLabel aria-label="Upload" />
        <Progress value={32} color="warning" aria-label="Storage" />
        <Demo>
          <CircularProgress value={72} color="primary" showValueLabel aria-label="Score" />
          <CircularProgress aria-label="Loading" />
        </Demo>
      </div>
    ),
    code: `<Progress value={68} color="primary" label="Upload" showValueLabel />`,
  },
  tabs: {
    title: 'Tabs',
    group: 'Navigation',
    blurb: 'Four variants; tabs can be links; vertical on desktop.',
    render: () => (
      <Tabs aria-label="Example" variant="underlined" color="primary">
        <Tab key="overview" title="Overview"><p className="pt-3 text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>Overview panel content.</p></Tab>
        <Tab key="activity" title="Activity"><p className="pt-3 text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>Activity panel content.</p></Tab>
        <Tab key="settings" title="Settings"><p className="pt-3 text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>Settings panel content.</p></Tab>
      </Tabs>
    ),
    code: `<Tabs aria-label="Example" variant="underlined">
  <Tab key="overview" title="Overview">…</Tab>
</Tabs>`,
  },
  toast: {
    title: 'Toast',
    group: 'Feedback',
    blurb: 'Transient notifications via the toast client.',
    render: () => (
      <Demo>
        <Button variant="soft" color="success" onPress={() => toast.success('Saved')}>Success</Button>
        <Button variant="soft" color="warning" onPress={() => toast.warning('Check your input')}>Warning</Button>
        <Button variant="soft" color="danger" onPress={() => toast.error('Something broke')}>Error</Button>
        <Button variant="soft" color="primary" onPress={() => toast.promise(new Promise((r) => setTimeout(r, 1200)), { loading: 'Syncing…', success: 'Synced', error: 'Failed' })}>Promise</Button>
      </Demo>
    ),
    code: `toast.promise(save(), { loading: 'Syncing…', success: 'Synced', error: 'Failed' })`,
  },
  tooltip: {
    title: 'Tooltip',
    group: 'Feedback',
    blurb: 'Hover / focus tip, 12 placements, optional arrow.',
    render: () => (
      <Demo>
        <Tooltip content="Top placement"><Button variant="bordered" color="default">Top</Button></Tooltip>
        <Tooltip content="With an arrow" showArrow placement="bottom"><Button variant="bordered" color="default">Bottom</Button></Tooltip>
        <Tooltip content="Right" placement="right" color="primary"><Button variant="bordered" color="default">Right</Button></Tooltip>
      </Demo>
    ),
    code: `<Tooltip content="Copy link" showArrow><Button isIconOnly>…</Button></Tooltip>`,
  },
  typography: {
    title: 'Typography',
    group: 'Data display',
    blurb: 'The Poppins type scale used across dyloc.',
    render: () => (
      <div className="space-y-1">
        <p className="text-[22px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>Display · 22 / 600</p>
        <p className="text-[17px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>Heading · 17 / 600</p>
        <p className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>Card title · 14 / 600</p>
        <p className="text-[13px]" style={{ color: 'var(--app-fg)' }}>Body · 13 / 400 — the quick brown fox jumps over the lazy dog.</p>
        <p className="text-[11.5px]" style={{ color: 'var(--app-fg-muted)' }}>Caption · 11.5 / 400</p>
      </div>
    ),
    code: `/* Poppins 300–700, base 13px — see src/styles/theme.css */`,
  },
  accordion: {
    title: 'Accordion',
    group: 'Disclosure',
    blurb: 'Collapsible sections, single or multiple, three variants.',
    render: () => (
      <Accordion selectionMode="multiple" variant="bordered" defaultExpandedKeys={['a']}>
        <AccordionItem itemKey="a" title="What is dyloc?">
          <p className="text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>An admin template built entirely with oks-ui.</p>
        </AccordionItem>
        <AccordionItem itemKey="b" title="Which chart library does it use?">
          <p className="text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>Only oks-ui's Chart component.</p>
        </AccordionItem>
      </Accordion>
    ),
    code: `<Accordion selectionMode="multiple" variant="bordered">
  <AccordionItem itemKey="a" title="Question">Answer</AccordionItem>
</Accordion>`,
  },
  timeline: {
    title: 'Timeline',
    group: 'Data display',
    blurb: 'Vertical activity feed with markers and right-aligned times.',
    render: () => (
      <Timeline>
        <TimelineItem title="Order placed" time="09:24" color="primary">Order #ORD-90210 created</TimelineItem>
        <TimelineItem title="Packed" time="11:02" color="warning">Picked from aisle 4</TimelineItem>
        <TimelineItem title="Shipped" time="14:47" color="success">Handed to carrier</TimelineItem>
      </Timeline>
    ),
    code: `<Timeline>
  <TimelineItem title="Shipped" time="14:47" color="success">Handed to carrier</TimelineItem>
</Timeline>`,
  },
  'segmented-control': {
    title: 'Segmented control',
    group: 'Navigation',
    blurb: 'Inline mutually-exclusive switch — composed over Tabs variant="solid", re-skinned for dark.',
    render: () => <SegmentedDemo />,
    code: `<SegmentedControl aria-label="Range" options={[
  { label: 'Day', value: 'day' }, { label: 'Week', value: 'week' },
]} value={v} onChange={setV} />`,
  },
  skeleton: {
    title: 'Skeleton & EmptyState',
    group: 'Feedback',
    blurb: 'Loading placeholders and the "nothing here" state.',
    render: () => (
      <div className="grid w-full gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Skeleton variant="text" lines={3} />
          <Skeleton variant="rect" height={60} radius={6} />
        </div>
        <EmptyState size="sm" icon={<Inbox size={20} />} title="No messages" description="Your inbox is empty." />
      </div>
    ),
    code: `<Skeleton variant="text" lines={3} />
<EmptyState title="No messages" description="Your inbox is empty." />`,
  },
  divider: {
    title: 'Divider',
    group: 'Data display',
    blurb: 'Rule with optional label and line styles.',
    render: () => (
      <div className="w-full space-y-3">
        <Divider />
        <Divider lineStyle="dashed" />
        <Divider>OR</Divider>
      </div>
    ),
    code: `<Divider>OR</Divider>`,
  },
  card: {
    title: 'Card',
    group: 'Data display',
    blurb: 'Surface container — Card + CardBody, hoverable / pressable.',
    render: () => (
      <div className="grid w-full gap-4 sm:grid-cols-2">
        <Card isHoverable><CardBody><p className="text-[13px]" style={{ color: 'var(--app-fg)' }}>A hoverable card.</p></CardBody></Card>
        <Card isPressable onPress={() => toast.success('Pressed')}><CardBody><p className="text-[13px]" style={{ color: 'var(--app-fg)' }}>A pressable card.</p></CardBody></Card>
      </div>
    ),
    code: `<Card isHoverable><CardBody>…</CardBody></Card>`,
  },
  modal: {
    title: 'Modal & Drawer',
    group: 'Overlays',
    blurb: 'Centred dialog and slide-in panel — both controlled and focus-trapped.',
    render: () => <ModalDemo />,
    code: `<Modal isOpen={open} onClose={close} title="Confirm action" actions={…}>…</Modal>`,
  },
  'command-palette': {
    title: 'Command palette',
    group: 'Overlays',
    blurb: '⌘K overlay with grouped items, keyboard nav and fuzzy filter.',
    render: () => <CommandPaletteDemo />,
    code: `<CommandPalette isOpen={open} onClose={close} items={items} onSelect={run} />`,
  },
  calendar: {
    title: 'Calendar',
    group: 'Data display',
    blurb: 'Standalone month grid with range selection and keyboard nav.',
    render: () => (
      <div className="max-w-sm">
        <Calendar defaultValue="2026-09-12" />
      </div>
    ),
    code: `<Calendar selectionMode="range" value={range} onChange={setRange} />`,
  },
  board: {
    title: 'Kanban board',
    group: 'Data display',
    blurb: 'Dependency-free drag-and-drop board with keyboard support.',
    render: () => <BoardDemo />,
    code: `<Board columns={cols} items={items} getItemId={…} getItemColumn={…} onItemMove={…} />`,
  },
  'split-layout': {
    title: 'Split layout',
    group: 'Data display',
    blurb: 'Resizable multi-pane frame — master / detail.',
    render: () => (
      <div className="h-[240px] w-full overflow-hidden rounded-md" style={{ border: '1px solid var(--app-border)' }}>
        <SplitLayout direction="horizontal">
          <SplitPane defaultSize="35%" minSize={120} isResizable>
            <div className="h-full p-3 text-[12.5px]" style={{ background: 'var(--app-surface-2)', color: 'var(--app-fg-muted)' }}>List pane</div>
          </SplitPane>
          <SplitPane>
            <div className="h-full p-3 text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>Detail pane — drag the divider.</div>
          </SplitPane>
        </SplitLayout>
      </div>
    ),
    code: `<SplitLayout direction="horizontal">
  <SplitPane defaultSize="35%" isResizable>…</SplitPane>
  <SplitPane>…</SplitPane>
</SplitLayout>`,
  },
  message: {
    title: 'Messages',
    group: 'Data display',
    blurb: 'Chat / message-thread display with bubbles and status.',
    render: () => (
      <div className="w-full max-w-md">
        <MessageList>
          <Message author="Noah Marsh" avatar={avatarUrl(3)} timestamp="09:24" align="start">
            Can you confirm the shipping window for the EU orders?
          </Message>
          <Message author="Ava Reid" avatar={avatarUrl(1)} timestamp="09:26" align="end" status="read">
            Yes — 3 to 5 business days from Lisbon.
          </Message>
        </MessageList>
      </div>
    ),
    code: `<MessageList>
  <Message author="Ava Reid" align="end" status="read">Yes — 3 to 5 business days.</Message>
</MessageList>`,
  },
}

export const GALLERY_SLUGS = Object.keys(GALLERY)
