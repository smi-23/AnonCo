'use client'
import { WriteButton } from '@/components/button'
import { PostList } from '@/components/post'
import { Post } from '@/types/Post'
import { Container } from '@mui/material'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface PaginationRes {
  postList: Post[]
  totalPages: number
  totalElements: number
  currentPage: number
  size: number
}

export default function PostListPage() {
  const [paginatedData, setPaginatedData] = useState<PaginationRes>({
    postList: [],
    totalPages: 0,
    totalElements: 0,
    currentPage: 1,
    size: 10,
  })
  const searchParams = useSearchParams()
  const router = useRouter()

  const category = searchParams.get('category') || ''
  const page = parseInt(searchParams.get('page') || '1', 10)

  const handlePage = (newPage: number) => {
    router.push(`/post/lists?category=${category}&page=${newPage}`)
  }

  useEffect(() => {
    if (!category) {
      alert('해당 카테고리는 존재하지 않습니다.') // 카테고리 빈 값일 때 오류 메시지 설정
      router.push('/')
      return
    }
    axios.get(`http://localhost:8080/post/category?categoryTitle=${category}&page=${page}&size=10`).then((response) => {
      setPaginatedData(response.data.data)
    })
  }, [category, page, router])

  return (
    <Container maxWidth={'md'} sx={{ p: 20 }}>
      <PostList paginatedData={paginatedData} onPageChange={handlePage} />
      <WriteButton />
    </Container>
  )
}
