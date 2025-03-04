import axios from "axios"

interface FetchPostPageProps {
  category: string
  page: number
}
export default function FetchPostPage({ category, page }: FetchPostPageProps) {
  if (!category) {
    alert('해당 카테고리는 존재하지 않습니다.') // 카테고리 빈 값일 때 오류 메시지 설정
    return Promise.reject('category가 없습니다.')
  }
  return axios.get(`http://localhost:8080/post/category?categoryTitle=${category}&page=${page}&size=10&sort=desc`).catch((error) => {
    console.error('fetchPost error: ', error)
    throw new Error('게시글을 불러오는 데 실패했습니다.')
  })
}