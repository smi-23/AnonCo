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
      <AppBar component={'div'} elevation={0}>
        {showHeader && (
          <Toolbar sx={{ backgroundColor: '#00cccc' }}>
            {/* 900px 크기를 가진 Box로 감싸서 센터 배치 */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between', // 타이틀 왼쪽, 서치 중앙 배치
                alignItems: 'center',
                maxWidth: 900, // 크기 제한
                width: '100%',
                margin: '0 auto', // 가운데 정렬
                pl: 2,
              }}
            >
              {/* 타이틀 컴포넌트 왼쪽 끝에 배치 */}
              <HeaderTitle />
              {/* 검색 컴포넌트 가운데 배치 */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  // flexGrow: 1
                }}
              >
                <HeaderSearch />
              </Box>
            </Box>
          </Toolbar>
        )}
        <Toolbar sx={{ justifyContent: 'center', borderTop: '10px solid #00cccc', borderBottom: '1px solid #e1e1e1' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              maxWidth: 900,
              width: '100%',
              gap: 2,
              pl: 2,
            }}
          >
            {/* 메뉴 컴포넌트 */}
            <HeaderMenu />
            <Box flexGrow={1} />
            {/* 테마 아이콘 컴포넌트 */}
            <HeaderTheme />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
