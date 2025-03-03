import { Box, Button, Grid2, TextField } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

interface PostModifyFormProps {
  category: string
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function PostModifyForm({ category, handleSubmit }: PostModifyFormProps) {
  const router = useRouter()
  const handleCancle = () => {
    alert('글 수정을 취소하시겠습니까?') //  모달로 변경해야 함
    router.push(`/post/lists?category=${category}`)
  }

  return (
    <Box component={'form'} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid2 container direction={'column'} sx={{}} alignItems={'center'}>
        <Grid2>
          <TextField id="outlined-basic" name="nickName" label="닉네임" variant="outlined" />
          <TextField id="outlined-basic" name="password" label="비밀번호" variant="outlined" />
        </Grid2>
        <Grid2>
          <TextField id="outlined-basic" name="title" label="제목" variant="outlined" />
        </Grid2>
        <Grid2>
          <TextField id="outlined-basic" name="content" label="내용" variant="outlined" />
        </Grid2>
        <Grid2>
          <Button variant="contained" onClick={handleCancle}>
            취소
          </Button>
          <Button variant="contained" type="submit">
            등록
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  )
}
