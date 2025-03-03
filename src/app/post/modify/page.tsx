'use client'
import { PostModifyForm, PostPasswordCheck, PostTitle } from '@/components/post'
import { Container } from '@mui/material'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

// view 페이지에서 얻은 정보를 상태 관리를 통해 update form에서 place holder로 정보를 넘겨줄 방법을 찾아야 함

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

export default function PostModifyPage() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category') || ''
  const postId = parseInt(searchParams.get('no') || '', 10)
  const router = useRouter()

  const [isPasswordRight, setIsPasswordRight] = useState<boolean>(false)

  const handlePasswordCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const password = formData.get('password') as string

    if (!password) {
      alert('비밀번호를 입력해주세요!')
      return
    }

    axios
      .post(`http://localhost:8080/post/${postId}/check-password`, { password })
      .then(() => {
        setIsPasswordRight(true)
      })
      .catch(() => {
        alert('비밀번호가 일치하지 않습니다.')
      })
  }

  const handleModifySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      nickName: formData.get('nickName') as string,
      password: formData.get('password') as string,
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    }

    const errorMessage = vaildatePostData(data)
    if (errorMessage) {
      alert(errorMessage)
      return
    }

    axios
      .patch(`http://localhost:8080/post/${postId}`, data)
      .then(() => {
        alert('게시글이 수정되었습니다.')
        router.push(`/post/view?category=${category}&no=${postId}`) // 만약 view하단에 list를 출력할 것이라면 pageNo가 필요할 것이라 고민 해 봐야함
      })
      .catch(() => {
        alert('글 수정에 실패했습니다.')
      })
  }

  return (
    <Container maxWidth="md" sx={{ p: 20 }}>
      <PostTitle category={category} />
      {!isPasswordRight ? (
        <PostPasswordCheck category={category} postId={postId} onSubmit={handlePasswordCheck} />
      ) : (
        <PostModifyForm category={category} handleSubmit={handleModifySubmit} />
      )}
    </Container>
  )
}
