'use client'
import { PostTitle } from '@/components/post'
import { Box, Button, Container, Grid2, TextField } from '@mui/material'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'

interface PostData {
  nickName: string
  password: string
  title: string
  content: string
}

const vaildatePostData = (data: PostData): string | null => {
  if (!data.nickName) {
    return '닉네임을 입력해주세요.'
  }
  if (!data.password) {
    return '비밀번호를 입력해주세요.'
  }
  if (!data.title) {
    return '제목을 입력해주세요.'
  }
  if (!data.content) {
    return '내용을 입력해주세요.'
  }
  return null
}

export default function WirtePage() {
  const searchParams = useSearchParams()

  const router = useRouter()

  const category = searchParams.get('category') || ''

  const handleCancle = () => {
    alert('글 작성을 취소하시겠습니까?') //  모달로 변경해야 함
    router.push(`/post/lists?category=${category}`)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: PostData = {
      nickName: formData.get('nickName') as string,
      password: formData.get('password') as string,
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    }

    const errorMessage = vaildatePostData(data)
    if (errorMessage) {
      alert(errorMessage)
      return
    } else {
      writePost(data)
    }
  }

  const writePost = async (data: PostData) => {
    try {
      const response = await axios.post(`http://localhost:8080/post?categoryTitle=${category}`, data)
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
    <Container maxWidth={'md'} sx={{ p: 20 }}>
      <PostTitle category={category} />

      <Box component={'form'} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid2 container direction={'column'} sx={{}} alignItems={'center'}>
          <Grid2>
            <TextField id="outlined-basic" name="nickName" label="닉네임" variant="outlined" />
            <TextField id="outlined-basic" name="password" label="비밀번호" variant="outlined" />
          </Grid2>
          <Grid2>
            <TextField id="outlined-basic" name="title" label="제목" variant="outlined" />
          </Grid2>
          <Grid2>
            <TextField id="outlined-basic" name="content" label="내용" variant="outlined" />
          </Grid2>
          <Grid2>
            <Button variant="contained" onClick={handleCancle}>
              취소
            </Button>
            <Button variant="contained" type="submit">
              등록
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  )
}
