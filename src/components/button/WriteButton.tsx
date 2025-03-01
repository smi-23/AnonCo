'use client'
import { Button, Stack } from '@mui/material'
import { useRouter } from 'next/navigation'

interface WriteButtonProps {
  category: string
}
export default function WriteButton({ category }: WriteButtonProps) {
  const router = useRouter()

  const handleWritePage = () => {
    router.push(`/post/write?category=${category}`)
  }

  return (
    <Stack sx={{ alignItems: 'flex-end' }}>
      <Button variant="contained" onClick={handleWritePage}>
        글쓰기
      </Button>
    </Stack>
  )
}
