'use client'

import { PostDetail, PostTitle } from '@/components/post'
import { Post } from '@/types/Post'
import { Container } from '@mui/material'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PostViewPage() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category') || ''
  const postId = parseInt(searchParams.get('no') || '0', 10)

  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    if (!postId) return

    axios.get(`http://localhost:8080/post/${postId}`).then((response) => {
      setPost(response.data.data)
    })
  }, [postId])

  return (
    <Container maxWidth="md" sx={{ p: 20 }}>
      <PostTitle category={category} />
      <PostDetail post={post} category = {category}/>
    </Container>
  )
}
