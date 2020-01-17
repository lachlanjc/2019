export const padMonth = i => `2019-${i < 9 ? '0' : ''}${i + 1}`

export const getMonth = i => {
  let dt = new Date(padMonth(i))
  dt.setDate(dt.getDate() + 1)
  return dt.toLocaleString('default', { month: 'long' })
}
