'use client'
import { ListItemIcon } from '@mui/material'
import axios from 'axios'
import CloseIcon from '@mui/icons-material/Close'

interface CommentDeleteButtonProps {
  commentId: number
}

export default function CommentDeleteButton({ commentId }: CommentDeleteButtonProps) {
  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:8080/comment/${commentId}`)
      console.log(`Comment ${commentId} deleted successfully`)
    } catch (error) {
      console.error('Failed to delete comment:', error)
    }
  }

  return (
    <ListItemIcon sx={{ minWidth: 'unset', cursor: 'pointer' }} onClick={handleDelete}>
      <CloseIcon sx={{ fontSize: 'medium' }} />
    </ListItemIcon>
  )
}
