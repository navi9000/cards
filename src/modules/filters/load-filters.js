import { qs, qsa, delegate } from "../../utils/dom"
import { populate } from "../../utils/templates"
import { FILTER_TEMPLATE } from "./ui"
import { getSP, setSP } from "../../utils/search-params"
import "./styles.scss"

const ACTIVE_FILTER_CLASS_NAME = "filter_active"

export function loadFilters(cardList) {
  const subject = getSP("subject")
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
      variant: subject ? "" : ACTIVE_FILTER_CLASS_NAME,
      name: "All",
      count: cardList.length.toString(),
    }),
    ...Object.entries(countedSubjects).map(([name, count]) =>
      populate(FILTER_TEMPLATE, {
        variant: name === subject ? ACTIVE_FILTER_CLASS_NAME : "",
        name,
        count: count.toString(),
      }),
    ),
    ,
  ].join("")

  delegate($container, ".filter", "click", (e) => {
    const key =
      e.target.closest("[data-name]").attributes["data-name"].nodeValue

    setSP("subject", key === "All" ? null : key)

    qsa(".filter").forEach((filter) => {
      if (filter.attributes["data-name"].nodeValue === key) {
        filter.classList.add(ACTIVE_FILTER_CLASS_NAME)
      } else {
        filter.classList.remove(ACTIVE_FILTER_CLASS_NAME)
      }
    })
  })
}
