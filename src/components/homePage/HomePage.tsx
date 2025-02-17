import { Container, Grid2 } from '@mui/material'
import { TopPosts } from '../topPosts'

export default function HomePage() {
  return (
    <Container maxWidth={'xl'} sx={{ p: 16 }}>
      <Grid2>
        <TopPosts />
      </Grid2>
    </Container>
  )
}
