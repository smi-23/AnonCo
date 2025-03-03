import { Post } from '@/types/Post'
import { Button, Divider, Paper, Stack, Typography } from '@mui/material'
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
    return new Date(date).toLocaleDateString('ko-KR') // 한국 날짜 형식 (예: 2025. 2. 18.)
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
      <Paper sx={{ p: 3, mb: 3, backgroundColor: '#f5f5f5', height: 400 }}>
        <Typography>{post?.content}</Typography>
      </Paper>
      <Stack direction="row" spacing={2} sx={{ mb: 3 }} justifyContent={'space-between'} alignItems={'center'}>
        <Stack direction={'row'} spacing={2}>
          <Button variant="contained">전체글</Button>
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
