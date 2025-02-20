'use client'
import { Container, Grid2 } from '@mui/material'
import { TopPosts } from '../topPosts'

export default function HomePage() {
  return (
    <Container maxWidth={'md'} sx={{ p: 20 }}>
      <Grid2>
        <TopPosts />
      </Grid2>
    </Container>
  )
}
