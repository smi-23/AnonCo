'use client'
import { Box, Button, Grid2, TextField } from '@mui/material'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function WirtePage() {
  const [nickName, setNickName] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const searchParams = useSearchParams()

  const router = useRouter()

  const category = searchParams.get('category') || ''

  const handleCancle = () => {
    router.push(`/post/lists?category=${category}`)
  }
  const writePost = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/post?categoryTitle=${category}`, {
        nickName,
        password,
        title,
        content,
      })
      if (response.status === 201) {
        alert('글이 생성되었습니다.')
        router.push(`/post/lists?category=${category}`)
      }
    } catch (err) {
      console.error(err)
      alert('글 생성에 실패했습니다.')
    }
  }

  return (
    <Grid2 container direction={'column'} sx={{ p: 20 }} alignItems={'center'}>
      <Grid2>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="닉네임"
            variant="outlined"
            onChange={(e) => setNickName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="비밀번호"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
      </Grid2>
      <Grid2>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '52ch' } }} noValidate autoComplete="off">
          <TextField label="제목" variant="outlined" onChange={(e) => setTitle(e.target.value)} />
        </Box>
      </Grid2>
      <Grid2>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '52ch' } }} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="내용" variant="outlined" onChange={(e) => setContent(e.target.value)} />
        </Box>
      </Grid2>
      <Grid2>
        <Button variant="contained" onClick={handleCancle}>
          취소
        </Button>
        <Button variant="contained" onClick={writePost}>
          등록
        </Button>
      </Grid2>
    </Grid2>
  )
}
