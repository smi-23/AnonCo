'use client'
import { Box, Divider, Typography } from '@mui/material'

interface PostTitleProps {
  category: string | undefined
}

export default function PostTitle({ category }: PostTitleProps) {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        {category}
      </Typography>
      <Divider sx={{ my: 3 }} />
    </Box>
  )
}
