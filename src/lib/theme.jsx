import { createContext, useCallback, useContext, useState } from 'react'

const KEY = 'dyloc-theme'
const ThemeContext = createContext({ theme: 'light', toggle: () => {}, setTheme: () => {} })

function readInitial() {
  if (typeof document === 'undefined') return 'light'
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* ignore */
  }
  const prefersDark =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

function apply(theme) {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-theme', theme)
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    const t = readInitial()
    apply(t)
    return t
  })

  const setTheme = useCallback((next) => {
    setThemeState(next)
    apply(next)
    try {
      localStorage.setItem(KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const toggle = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      apply(next)
      try {
        localStorage.setItem(KEY, next)
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext)
