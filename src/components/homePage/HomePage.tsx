'use client'
import { Container, Grid2 } from '@mui/material'
import { TopPostList } from '../post'


export default function HomePage() {
  return (
    <Container maxWidth={'md'} sx={{ p: 20 }}>
      <Grid2>
        <TopPostList />
      </Grid2>
    </Container>
  )
}
