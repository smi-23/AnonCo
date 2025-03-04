'use client'

import { FetchPostPage } from '@/app/service/post'
import { PostList, PostTitle } from '@/components/post'
import { PaginationRes } from '@/types'
import { Container } from '@mui/material'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PostListPage() {
  const [paginatedData, setPaginatedData] = useState<PaginationRes>({
    postList: [],
    totalPages: 0,
    totalElements: 0,
    currentPage: 1,
    size: 10,
  })

  const router = useRouter()
  const searchParams = useSearchParams()
  const category = searchParams.get('category') || ''
  const page = parseInt(searchParams.get('page') || '1', 10)

  const handlePage = (newPage: number) => {
    router.push(`/post/lists?category=${category}&page=${newPage}`)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postPageRes = await FetchPostPage({ category, page })
        setPaginatedData(postPageRes.data.data)
      } catch (error) {
        console.error('fetchPostList error: ', error)
        router.push('/')
      }
    }

    fetchData()
  }, [category, page, router])

  return (
    // footer 생기기 전까진 패딩으로 유지 이후에 조절
    <Container maxWidth={'md'} sx={{ p: 20 }}>
      <PostTitle category={category} />
      <PostList paginatedData={paginatedData} onPageChange={handlePage} category={category} />
    </Container>
  )
}
