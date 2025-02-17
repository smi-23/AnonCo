'use client'
import React from 'react'
import { useColorScheme } from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import BedtimeRoundedIcon from '@mui/icons-material/BedtimeRounded'
import { TooltipIconButton } from '../button'

export default function HeaderTheme() {
  const { mode, setMode } = useColorScheme()
  const toggleTheme = React.useCallback(() => {
    if (mode) {
      setMode(mode === 'dark' ? 'light' : 'dark')
    }
  }, [mode, setMode])

  return (
    <TooltipIconButton
      title={mode === 'dark' ? '라이트 모드' : '다크 모드'}
      onClick={toggleTheme}
      Icon={mode === 'dark' ? WbSunnyIcon : BedtimeRoundedIcon}
    />
  )
}
