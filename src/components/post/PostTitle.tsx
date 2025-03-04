'use client'
import { Box, Divider, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface PostTitleProps {
  category: string
}

export default function PostTitle({ category }: PostTitleProps) {
  const [categoryTitle, setCategoryTitle] = useState<string | ''>('')

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/category/${category}`)
        setCategoryTitle(response.data.data.title)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCategory()
  }, [category])

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        {categoryTitle}
      </Typography>
      <Divider sx={{ my: 3 }} />
    </Box>
  )
}
