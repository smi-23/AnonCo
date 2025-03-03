import { Post } from '@/types/Post'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { WriteButton } from '../button'
import { useRouter } from 'next/navigation'

interface PostDetailProps {
  post: Post | null
  category: string
}

export default function PostDetail({ post, category }: PostDetailProps) {
  const router = useRouter()
  // 날짜를 읽기 좋은 형식으로 포맷하는 함수
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

  return (
    <>
      <Stack direction="row" spacing={2} justifyContent={'space-between'} alignItems={'center'} sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {post?.title}
        </Typography>
        <Typography variant="body2" sx={{}}>
          번호: {post?.id}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2} justifyContent={'space-between'} alignItems={'center'} sx={{ mb: 3 }}>
        <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
          <Typography>{post?.nickName}</Typography>
          <Typography>{formatDate(post?.updatedAt)}</Typography>
        </Stack>
        <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
          <Typography>조회</Typography>
          <Typography>댓글</Typography>
        </Stack>
      </Stack>
      <Divider sx={{ mb: 3 }} />
      <Box height={400}>
        <Typography>{post?.content}</Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <Stack direction="row" spacing={2} sx={{ mb: 3 }} justifyContent={'space-between'} alignItems={'center'}>
        <Stack direction={'row'} spacing={2}>
          <Button variant="contained" onClick={() => router.push(`/post/lists?category=${category}`)}>
            전체글
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => router.push(`/post/modify?category=${category}&no=${post?.id}`)}>
            수정
          </Button>
          <Button variant="contained" onClick={() => router.push(`/post/delete?category=${category}&no=${post?.id}`)}>
            삭제
          </Button>
          <WriteButton category={category} />
        </Stack>
      </Stack>
    </>
  )
}
