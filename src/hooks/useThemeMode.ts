import { useEffect, useState } from 'react'

const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState('')

  const handleThemeMode = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme')

    if (theme) setThemeMode(theme)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', themeMode)
  }, [themeMode])

  return { themeMode, handleThemeMode }
}

export default useThemeMode
