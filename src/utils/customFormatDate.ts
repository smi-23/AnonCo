export default function customFormatDate(value: Date) {
  const date = new Date(value)
  const now = new Date()
  const isToday = date.toDateString() == now.toDateString()

  if (isToday) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
  } else {
    return date.toLocaleDateString()
  }
}