'use client'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import HeaderSearch from './HeaderSearch'
import HeaderTitle from './HeaderTitle'
import HeaderMenu from './HeaderMenu'
import HeaderTheme from './HeaderTheme'
import { useEffect, useState } from 'react'
import { Box } from '@mui/material'

export default function Header() {
  const [showHeader, setShowHeader] = useState(true)

  const handleHeaderByScroll = () => {
    const curScroll = window.scrollY
    setShowHeader(curScroll < 5)
  }

  useEffect(() => {
    setShowHeader(true)
    window.addEventListener('scroll', handleHeaderByScroll)
    return () => window.removeEventListener('scroll', handleHeaderByScroll)
  }, [])
  return (
    <>
      <AppBar component={'div'} elevation={3}>
        {showHeader && (
          <Toolbar sx={{ justifyContent: 'center' }}>
            {/* 검색 컴포넌트 */}
            <HeaderSearch />
          </Toolbar>
        )}
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: 900,
              width: '100%',
              gap: 10,
            }}
          >
            {/* 타이틀 컴포넌트 */}
            <HeaderTitle />
            {/* <Box sx={{ flexGrow: 1 }} /> */}
            {/* 메뉴 컴포넌트 */}
            <HeaderMenu />
            {/* 테마 아이콘 컴포넌트 */}
            <HeaderTheme />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
