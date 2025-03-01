'use client'

import { Post } from '@/types/Post'
import customFormatDate from '@/utils/customFormatDate'
import { Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

interface PostListProps {
  paginatedData: { postList: Post[]; totalPages: number; totalElements: number; currentPage: number; size: number }
  onPageChange: (newPage: number) => void
}
export default function PostList({ paginatedData, onPageChange }: PostListProps) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">번호</TableCell>
              <TableCell align="center">제목</TableCell>
              <TableCell align="center">닉네임</TableCell>
              <TableCell align="center">날짜</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.postList.map((post) => (
              <TableRow
                key={post.id}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'black',
                    '& td.title': { color: 'red' },
                  },
                }}
              >
                <TableCell align="center" className="title">
                  {post.id}
                </TableCell>
                <TableCell align="center" className="title">
                  {post.title}
                </TableCell>
                <TableCell align="center">{post.nickName}</TableCell>
                <TableCell align="center">{customFormatDate(post.updatedAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={paginatedData.totalPages} // 전체 페이지 수
        page={paginatedData.currentPage} // 현재 페이지
        onChange={(event, newPage) => onPageChange(newPage)} // 페이지 전환 함수
        showFirstButton
        showLastButton
        sx={{ py: 2, justifyItems: 'flex-end' }}
      />
    </>
  )
}
