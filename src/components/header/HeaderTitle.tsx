import { Typography } from '@mui/material'
import Link from 'next/link'

export default function HeaderTitle() {
  return (
    <Link href={'/'} style={{ textDecoration: 'none' }}>
      <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
        AnonCo
      </Typography>
    </Link>
  )
}
