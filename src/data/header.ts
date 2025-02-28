export interface Header {
  id: string
  title: string
  url: string
}

export const HEADERS: Header[] = [
  {
    id: '1',
    title: '일상',
    url: 'daily',
  },
  {
    id: '2',
    title: '이슈',
    url: 'issue',
  },
  {
    id: '3',
    title: '연예',
    url: 'enter',
  },
  {
    id: '4',
    title: '뷰티',
    url: 'beauty',
  },
  {
    id: '5',
    title: '게임',
    url: 'game',
  }
]
