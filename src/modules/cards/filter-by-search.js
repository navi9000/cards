import { getSP } from "../../utils/search-params"

export function filterBySearch(item) {
  const search = getSP("search")
  if (!search) {
    return true
  }

  return (
    item.name.toLowerCase().includes(search) ||
    item.author.toLowerCase().includes(search)
  )
}
