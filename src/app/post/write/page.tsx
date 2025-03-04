'use client'
import { PostCreateForm, PostTitle } from '@/components/post'
import { Container } from '@mui/material'
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

export default function PostWirtePage() {
  const searchParams = useSearchParams()

  const router = useRouter()

  const category = searchParams.get('category') || ''

  const handleCreateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      const response = await axios.post(`http://localhost:8080/post?categoryUrl=${category}`, data)
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
      <PostCreateForm category={category} handleSubmit={handleCreateSubmit} />
    </Container>
  )
}
