import { Post } from "./Post"

export interface PaginationRes {
  postList: Post[]
  totalPages: number
  totalElements: number
  currentPage: number
  size: number
}