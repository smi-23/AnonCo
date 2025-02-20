'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Pagination, List, ListItem, ListItemButton, Box, Divider, Typography } from '@mui/material'
import Link from 'next/link'

interface Post {
  id: number
  nickName: string
  title: string
  topic: string
  updatedAt: Date
}

export default function TopPosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState(1) // 현재 페이지 번호 (1부터 시작)

  // 페이지 전환 시 호출되는 함수
  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage)
  }

  useEffect(() => {
    axios.get('http://localhost:8080/post/').then((response) => {
      setPosts(response.data.data)
    })
  }, [])

  // 날짜를 읽기 좋은 형식으로 포맷하는 함수
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('ko-KR') // 한국 날짜 형식 (예: 2025. 2. 18.)
  }

  // 현재 페이지에 맞는 데이터만 슬라이싱
  const currentPosts = posts.slice((page - 1) * 10, page * 10)

  return (
    <>
      <List>
        {currentPosts.map((post) => (
          <Link
            key={post.id}
            href={`/post/${post.id}`} // 링크 경로는 각 포스트의 상세 페이지로 설정
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <ListItem disablePadding>
              <ListItemButton sx={{ py: 0 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '10px',
                    alignItems: 'center',
                  }}
                >
                  {/* 왼쪽: 토픽, 타이틀 */}
                  <Box gap={4} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Typography variant="body1">{post.topic}</Typography>
                    <Typography variant="h6">{post.title}</Typography>
                  </Box>

                  {/* 오른쪽: 닉네임, 날짜 */}
                  <Box gap={3} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      {post.nickName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {formatDate(post.updatedAt)}
                    </Typography>
                  </Box>
                </Box>
              </ListItemButton>
            </ListItem>
            <Divider />
          </Link>
        ))}
      </List>
      {/* 페이지네이션 추가 */}
      <Pagination
        count={Math.ceil(posts.length / 10)} // 전체 페이지 수 (전체 데이터 개수 / 한 페이지당 데이터 수)
        page={page} // 현재 페이지
        onChange={handleChangePage} // 페이지 전환 함수
        showFirstButton
        showLastButton
        sx={{ py: 2, justifyItems: 'flex-end' }}
      />
    </>
  )
}
