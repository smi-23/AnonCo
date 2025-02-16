'use client'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import HeaderSearch from './HeaderSearch'
import HeaderTitle from './HeaderTitle'
import HeaderMenu from './HeaderMenu'

export default function Header() {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'center' }}>
          {/* 헤더 검색 컴포넌트 */}
          <HeaderSearch />
        </Toolbar>
      </AppBar>
      <AppBar position="static">
        <Toolbar>
          {/* 헤더 타이틀 컴포넌트 */}
          <HeaderTitle />
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          {/* 헤더 메뉴 컴포넌트 */}
          <HeaderMenu />
        </Toolbar>
      </AppBar>
    </>
  )
}
