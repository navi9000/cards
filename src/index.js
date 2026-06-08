import "./reset.scss"
import "./setup.scss"
import "./styles.scss"

import { loadFilters } from "./modules/filters/load-filters"
import { loadCards } from "./modules/cards/load-cards"
import { getSP } from "./utils/search-params"
import { loadSearch } from "./modules/search/load-search"

async function run() {
  const { courseList } = await import("./features/courses/data")
  const subject = getSP("subject")
  const search = getSP("search")

  loadFilters(courseList, { subject })
  loadSearch()
  loadCards(courseList)
}

run()
