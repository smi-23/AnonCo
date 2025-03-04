'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PostDetail, PostList, PostTitle } from '@/components/post'
import { PaginationRes, Post } from '@/types'
import { Container } from '@mui/material'
import { FetchPost, FetchPostPage } from '@/app/service/post'
import { CommentList } from '@/components/comment'

export default function PostViewPage() {
  const [paginatedData, setPaginatedData] = useState<PaginationRes>({
    categoryTitle: '',
    postList: [],
    totalPages: 0,
    totalElements: 0,
    currentPage: 1,
    size: 10,
  })
  const [post, setPost] = useState<Post | null>(null)

  const router = useRouter()
  const searchParams = useSearchParams()
  const category = searchParams.get('category') || ''
  const postId = parseInt(searchParams.get('no') || '0', 10)

  const handlePage = (newPage: number) => {
    router.push(`/post/lists?category=${category}&page=${newPage}`)
  }

  const page = parseInt(searchParams.get('page') || '1', 10)

  useEffect(() => {
    const fetchPostAndList = async () => {
      try {
        const [postRes, postPageRes] = await Promise.all([FetchPost({ postId }), FetchPostPage({ category, page })])
        setPost(postRes.data.data)
        setPaginatedData(postPageRes.data.data)
      } catch (error) {
        console.error('fetchPostAndList error: ', error)
        router.push('/')
      }
    }

    fetchPostAndList()
  }, [postId, category, page, router])

  return (
    <Container maxWidth="md" sx={{ p: 20 }}>
      <PostTitle category={post?.categoryTitle} />
      <PostDetail post={post} category={category} />
      <CommentList commentCount={post?.commentCount} />
      <PostList paginatedData={paginatedData} onPageChange={handlePage} category={category} />
    </Container>
  )
}
