'use client'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import { useRouter } from 'next/navigation'
import React from 'react'

interface PostPasswordCheckProps {
  category: string
  postId: number
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function PostPasswordCheck({ category, postId, onSubmit }: PostPasswordCheckProps) {
  const router = useRouter()

  return (
    <Box
      component={'form'}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
      width={400}
      height={300}
      justifySelf={'center'}
      justifyItems={'center'}
      alignContent={'center'}
      sx={{ backgroundColor: 'grey' }}
    >
      <Stack direction={'column'} gap={2}>
        <Typography variant="h6" align="center">
          비밀번호를 입력하세요.
        </Typography>
        <TextField
          id="outlined-password-input"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
        />
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Button variant="contained" onClick={() => router.push(`/post/view?category=${category}&no=${postId}`)}>
            취소
          </Button>
          <Button variant="contained" type="submit">
            확인
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
