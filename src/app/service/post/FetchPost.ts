import axios from "axios"

interface FetchPostProps {
  postId: number
}
export default function FetchPost({ postId }: FetchPostProps) {
  if (!postId) {
    alert('해당 게시글이 존재하지 않습니다.')
    return Promise.reject('postId가 없습니다.')
  }
  return axios.get(`http://localhost:8080/post/${postId}`).catch((error) => {
    console.error('fetchPost error: ', error)
    throw new Error('게시글을 불러오는 데 실패했습니다.')
  })
}