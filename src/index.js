import "./reset.scss"
import "./setup.scss"
import "./styles.scss"

import { loadFilters } from "./modules/filters/load-filters"
import { loadCards } from "./modules/cards/load-cards"

async function run() {
  const { courseList } = await import("./features/courses/data")

  loadFilters(courseList)
  loadCards(courseList)
}

run()
