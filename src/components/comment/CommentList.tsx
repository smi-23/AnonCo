'use client'
import { Comment } from '@/types'
import { Divider, List, ListItem, Stack, Typography } from '@mui/material'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import CommentDeleteButton from './CommentDeleteButton'

interface CommentListProps {
  commentCount: number | undefined
}
export default function CommentList({ commentCount }: CommentListProps) {
  const [commentList, setCommentList] = useState<Comment[]>([])
  const searchParams = useSearchParams()
  const postId = searchParams.get('no') || ''

  const formatDate = (date: Date | undefined) => {
    if (!date) return '날짜 없음'

    return new Date(date).toLocaleString('ko-KR', {
      year: 'numeric', // 연도
      month: '2-digit', // 월 (두 자리로 표시)
      day: '2-digit', // 일 (두 자리로 표시)
      hour: '2-digit', // 시간 (두 자리로 표시)
      minute: '2-digit', // 분 (두 자리로 표시)
      second: '2-digit', // 초 (두 자리로 표시)
      hour12: false, // 24시간 형식
    })
  }

  useEffect(() => {
    const fetchCommentList = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/comment/${postId}`)
        setCommentList(response.data.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchCommentList()
  }, [postId])

  return (
    <List sx={{ mb: 3 }}>
      <ListItem>
        <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>댓글({commentCount})</Typography>
      </ListItem>
      <Divider />
      {commentList.map((comment: Comment) => (
        <div key={comment.id}>
          <ListItem>
            <Stack direction="row" spacing={3} justifyContent={'space-between'} sx={{}}>
              <Stack direction="row" spacing={3}>
                <Typography width={'130px'} sx={{ fontSize: '13px' }}>
                  {comment.nickName}
                </Typography>
                <Typography width={'500px'} sx={{ fontSize: '13px' }}>
                  {comment.content}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} sx={{}}>
                <Typography width="130px" align="left" sx={{ fontSize: '12px' }}>
                  {formatDate(comment.createdAt)}
                </Typography>
                <CommentDeleteButton commentId={comment.id} />
              </Stack>
            </Stack>
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  )
}
