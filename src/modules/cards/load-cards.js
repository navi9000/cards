import { qs, on } from "../../utils/dom"
import { populate } from "../../utils/templates"
import { CARD_TEMPLATE, NO_MATCHES_TEMPLATE } from "./ui"
import { filterBySearch } from "./filter-by-search"
import { filterBySubject } from "./filter-by-subject"
import observer from "../../features/observer/observer"
import "./styles.scss"

function getCardList(cardList) {
  const list = cardList
    .filter(filterBySubject)
    .filter(filterBySearch)
    .map(({ price, ...rest }) =>
      populate(CARD_TEMPLATE, { price: price.toString(), ...rest }),
    )

  if (!list.length) {
    return NO_MATCHES_TEMPLATE
  }
  return list.join("")
}

export function loadCards(cardList) {
  const $container = qs(".course-list")

  $container.innerHTML = getCardList(cardList)

  observer.add(({ type }) => {
    if (type !== "update-search-params") {
      return
    }
    $container.innerHTML = getCardList(cardList)
  })
}
