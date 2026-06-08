import { getSP } from "../../utils/search-params"

export function filterBySubject(item) {
  const subject = getSP("subject")
  if (!subject) {
    return true
  }
  return item.subject === subject
}
