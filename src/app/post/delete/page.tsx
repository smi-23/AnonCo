'use client'
import { PostPasswordCheck } from '@/components/post'
import { Container } from '@mui/material'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'

export default function PostDeletePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const category = searchParams.get('category') || ''
  const postId = parseInt(searchParams.get('no') || '', 10)

  const handleDeleteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const password = formData.get('password') as string

    if (!password) {
      alert('비밀번호를 입력해주세요!')
      return
    }

    if (!confirm('해당 게시글을 정말 삭제하시겠습니까?')) return

    axios
      .delete(`http://localhost:8080/post/${postId}`, { data: { password } })
      .then(() => {
        alert('해다 게시글이 삭제되었습니다.')
        router.push(`/post/lists?category=${category}`)
      })
      .catch(() => {
        alert('비밀번호가 일치하지 않습니다.')
      })
  }

  return (
    <Container maxWidth="md" sx={{ p: 20 }}>
      <PostPasswordCheck category={category} postId={postId} onSubmit={handleDeleteSubmit} />
    </Container>
  )
}
