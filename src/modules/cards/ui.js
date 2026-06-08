export const CARD_TEMPLATE = `
<article class="card">
    <img src="{{img}}" alt="card" class="card__img" />
    <div class="card__content">
        <div class="card__tag card__tag_{{slug}}">{{subject}}</div>
        <h3 class="card__name">{{name}}</h3>
        <div class="card__bottom"><span class="card__price">\${{price}}</span><span>|</span><span>by {{author}}</span></div>
    </div>
</article>
`

export const NO_MATCHES_TEMPLATE = `<div>No matches</div>`
