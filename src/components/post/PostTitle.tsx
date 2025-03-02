import { Box, Divider, Typography } from '@mui/material'

interface PostTitleProps {
  category: string
}

export default function PostTitle({ category }: PostTitleProps) {
  return (
    <Box sx={{ p: 0 }}>
      <Typography variant="h3">{category}</Typography>
      <Divider sx={{ my: 3 }} />
    </Box>
  )
}
