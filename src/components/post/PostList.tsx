'use client'

import { Post } from '@/types/Post'
import customFormatDate from '@/utils/customFormatDate'
import { Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

interface PostListProps {
  posts: Post[]
  page: number
  onPageChange: (newPage: number) => void
}
export default function PostList({ posts, page, onPageChange }: PostListProps) {
  // 현재 페이지에 맞는 데이터만 슬라이싱
  const currentPosts = posts.slice((page - 1) * 10, page * 10)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">제목</TableCell>
            <TableCell align="right">닉네임</TableCell>
            <TableCell align="right">날짜</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentPosts.map((post) => (
            <TableRow
              key={post.id}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'black', // 🟡 tr 배경색 변경
                  '& td.title': { color: 'red' }, // 🔴 tr에 hover 시 특정 td(title)만 빨갛게
                },
              }}
            >
              <TableCell align="right" className="title">
                {post.title}
              </TableCell>
              <TableCell align="right">{post.nickName}</TableCell>
              <TableCell align="right">{customFormatDate(post.updatedAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={Math.ceil(posts.length / 10)} // 전체 페이지 수 (전체 데이터 개수 / 한 페이지당 데이터 수)
        page={page} // 현재 페이지
        onChange={(event, newPage) => onPageChange(newPage)} // 페이지 전환 함수
        showFirstButton
        showLastButton
        sx={{ py: 2, justifyItems: 'flex-end' }}
      />
    </TableContainer>
  )
}
