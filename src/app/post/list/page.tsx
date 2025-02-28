'use client'
import { PostList } from '@/components/post'
import { Post } from '@/types/Post'
import { Container } from '@mui/material'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PostListPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const searchParams = useSearchParams()
  const router = useRouter()

  const category = searchParams.get('category')
  const page = parseInt(searchParams.get('page') || '1', 10)
  useEffect(() => {
    axios.get(`http://localhost:8080/post/category?categoryTitle=${category}&page=${page}&size=10`).then((response) => {
      setPosts(response.data.data)
    })
  }, [category, page])

  const handlePageChange = (newPage: number) => {
    // 페이지 변경 시 URL을 업데이트
    router.push(`/post/list?category=${category}&page=${newPage}`)
  }

  return (
    <Container maxWidth={'md'} sx={{ p: 20 }}>
      <PostList posts={posts} page={page} onPageChange={handlePageChange} />
    </Container>
  )
}
