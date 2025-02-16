
import { Header, HEADERS } from '@/data/header'
import { Typography } from '@mui/material'
import Link from 'next/link'


export default function HeaderMenu() {
  return (
    <>
      {HEADERS.map((header: Header) => (
        <Link key={header.id} href={'/'}>
          <Typography>{header.title}</Typography>
        </Link>
      ))}
    </>
  )
}
