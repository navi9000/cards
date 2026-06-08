import { qs } from "../../utils/dom"
import { populate } from "../../utils/templates"
import { FILTER_TEMPLATE } from "./ui"
import "./styles.scss"

export function loadFilters(cardList) {
  const $container = qs(".controls__filters")
  const countedSubjects = cardList.reduce((prev, curr) => {
    const key = curr.subject
    const isNew = !Object.keys(prev).includes(key)
    return {
      ...prev,
      [key]: isNew ? 1 : prev[key] + 1,
    }
  }, {})

  $container.innerHTML = [
    populate(FILTER_TEMPLATE, {
      variant: "active",
      name: "All",
      count: cardList.length.toString(),
    }),
    ...Object.entries(countedSubjects).map(([name, count]) =>
      populate(FILTER_TEMPLATE, {
        variant: "default",
        name,
        count: count.toString(),
      }),
    ),
    ,
  ].join("")
}
