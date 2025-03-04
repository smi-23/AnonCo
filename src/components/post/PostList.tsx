'use client'

import customFormatDate from '@/utils/customFormatDate'
import {
  Pagination,
  Paper,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import { WriteButton } from '../button'
import { Post } from '@/types'

interface PostListProps {
  paginatedData: { postList: Post[]; totalPages: number; totalElements: number; currentPage: number; size: number }
  onPageChange: (newPage: number) => void
  category: string
}
export default function PostList({ paginatedData, onPageChange, category }: PostListProps) {
  const router = useRouter()

  const handlePostView = (post: Post) => {
    router.push(`/post/view?category=${category}&no=${post.id}&page=${paginatedData.currentPage}`)
  }

  const CustomTableCell = styled(TableCell)({
    paddingLeft: '4px',
    paddingRight: '4px',
    paddingBottom: '4px',
    paddingTop: '4px',
    fontSize: '13px',
  })

  return (
    <Stack spacing={2}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <CustomTableCell align="center" sx={{ width: '50px' }}>
                번호
              </CustomTableCell>
              <CustomTableCell align="center" sx={{ width: '300px' }}>
                제목
              </CustomTableCell>
              <CustomTableCell align="center" sx={{ width: '100px' }}>
                닉네임
              </CustomTableCell>
              <CustomTableCell align="center" sx={{ width: '50px' }}>
                날짜
              </CustomTableCell>
              <CustomTableCell align="center" sx={{ width: '50px' }}>
                조회수
              </CustomTableCell>
              <CustomTableCell align="center" sx={{ width: '50px' }}>
                추천수
              </CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.postList.map((post) => (
              <TableRow
                hover
                key={post.id}
                sx={{
                  cursor: 'pointer',
                  // '&:hover': {
                  //   backgroundColor: 'black',
                  //   '& td.title': { color: 'red' },
                  // },
                }}
                onClick={() => handlePostView(post)}
              >
                <CustomTableCell align="center">{post.id}</CustomTableCell>
                <CustomTableCell align="left">{post.title}</CustomTableCell>
                <CustomTableCell align="center">{post.nickName}</CustomTableCell>
                <CustomTableCell align="center">{customFormatDate(post.updatedAt)}</CustomTableCell>
                <CustomTableCell align="center">0</CustomTableCell>
                <CustomTableCell align="center">11111</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <WriteButton category={category} />
      <Pagination
        count={paginatedData.totalPages} // 전체 페이지 수
        page={paginatedData.currentPage} // 현재 페이지
        onChange={(event, newPage) => onPageChange(newPage)} // 페이지 전환 함수
        showFirstButton
        showLastButton
        sx={{ justifyItems: 'center' }}
      />
    </Stack>
  )
}
