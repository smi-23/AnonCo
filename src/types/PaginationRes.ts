import { Post } from "./Post"

export interface PaginationRes {
  categoryTitle: string
  postList: Post[]
  totalPages: number
  totalElements: number
  currentPage: number
  size: number
}