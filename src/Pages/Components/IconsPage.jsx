import { useMemo, useState } from 'react'
import {
  Activity, AlertCircle, Archive, ArrowRight, Award, BarChart3, Bell, Bookmark,
  Box, Briefcase, Calendar, Camera, Check, ChevronRight, Circle, Clipboard,
  Clock, Cloud, Code, Command, Compass, CreditCard, Database, Download, Edit,
  ExternalLink, Eye, Feather, File, FileText, Filter, Flag, Folder, Gift, Globe,
  Grid, Heart, Home, Image, Inbox, Info, Key, Layers, LayoutDashboard, Link2,
  List, Lock, Mail, Map, MapPin, Menu, MessageSquare, Mic, Moon, MoreHorizontal,
  Package, Paperclip, Pause, Pencil, Phone, PieChart, Play, Plus, Printer,
  RefreshCw, Rocket, Save, Search, Send, Settings, Share2, Shield, ShoppingBag,
  ShoppingCart, Sliders, Star, Sun, Tag, Target, Trash2, TrendingUp, Truck,
  Upload, User, Users, Wallet, Wifi, X, Zap,
} from 'lucide-react'
import { TextField } from 'oks-ui'
import { PageHeader, Surface } from '../../Components/ui/index.js'

const ICONS = {
  Activity, AlertCircle, Archive, ArrowRight, Award, BarChart3, Bell, Bookmark,
  Box, Briefcase, Calendar, Camera, Check, ChevronRight, Circle, Clipboard,
  Clock, Cloud, Code, Command, Compass, CreditCard, Database, Download, Edit,
  ExternalLink, Eye, Feather, File, FileText, Filter, Flag, Folder, Gift, Globe,
  Grid, Heart, Home, Image, Inbox, Info, Key, Layers, LayoutDashboard, Link2,
  List, Lock, Mail, Map, MapPin, Menu, MessageSquare, Mic, Moon, MoreHorizontal,
  Package, Paperclip, Pause, Pencil, Phone, PieChart, Play, Plus, Printer,
  RefreshCw, Rocket, Save, Search, Send, Settings, Share2, Shield, ShoppingBag,
  ShoppingCart, Sliders, Star, Sun, Tag, Target, Trash2, TrendingUp, Truck,
  Upload, User, Users, Wallet, Wifi, X, Zap,
}
const NAMES = Object.keys(ICONS)

export default function IconsPage() {
  const [q, setQ] = useState('')
  const shown = useMemo(
    () => (q ? NAMES.filter((n) => n.toLowerCase().includes(q.toLowerCase())) : NAMES),
    [q],
  )

  return (
    <>
      <PageHeader
        title="Icons"
        trail={[{ label: 'General', to: '/icons' }, { label: 'Icons' }]}
        actions={
          <TextField
            type="search"
            size="sm"
            placeholder="Search icons…"
            value={q}
            startIcon={<Search size={14} />}
            onChange={setQ}
            className="w-56"
          />
        }
      />
      <Surface className="p-5">
        <p className="mb-4 text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
          dyloc uses <strong>lucide-react</strong> exclusively — over 1,500 icons, tree-shaken
          per import. A representative set is shown below ({shown.length}).
        </p>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {shown.map((name) => {
            const Icon = ICONS[name]
            return (
              <div
                key={name}
                className="flex flex-col items-center gap-2 rounded-md p-3 text-center"
                style={{ border: '1px solid var(--app-border)' }}
              >
                <Icon size={20} style={{ color: 'var(--app-fg)' }} />
                <span className="w-full truncate text-[10px]" style={{ color: 'var(--app-fg-muted)' }}>
                  {name}
                </span>
              </div>
            )
          })}
        </div>
      </Surface>
    </>
  )
}
