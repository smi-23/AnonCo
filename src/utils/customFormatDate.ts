export default function customFormatDate(value: Date) {
  const date = new Date(value)
  const now = new Date()
  const isToday = date.toDateString() == now.toDateString()

  if (isToday) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
  } else {
    // 날짜 형식을 'ko-KR'로 설정하고 출력
    const formattedDate = date.toLocaleDateString('ko-KR', {
      year: '2-digit', // 연도를 2자리로
      month: '2-digit',
      day: '2-digit',
    })

    // 맨 뒤에 있는 점을 제거
    return formattedDate.endsWith('.') ? formattedDate.slice(0, -1) : formattedDate
  }
}
