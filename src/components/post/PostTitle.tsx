import { Box, Divider, Typography } from '@mui/material'

interface PostTitleProps {
  category: string
}

export default function PostTitle({ category }: PostTitleProps) {
  return (
    <Box>
      <Typography variant="h4">{category}</Typography>
      <Divider sx={{ my: 3 }} />
    </Box>
  )
}
