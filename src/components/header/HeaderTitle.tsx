import { Typography } from '@mui/material'
import Link from 'next/link'

export default function HeaderTitle() {
  return (
    <Link href={'/'} style={{ textDecoration: 'none' }}>
      <Typography variant="h6" component="div" sx={{}}>
        AnonCo
      </Typography>
    </Link>
  )
}
