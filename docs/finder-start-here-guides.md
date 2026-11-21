# Product finder, Start here, guides, compatibility box and trade form

## Product finder (`sections/mr-product-finder.liquid`, `assets/mr-finder.js`)
Two questions (project, then stage) lead to a buy-together kit with a total and an add-all button.
Each "Stage result" block holds one project and stage plus up to six products. The 24 blocks on the
home page and Start here page are copied from the shop-by-project plan. Edit the product lists in the
theme editor. It uses the same kit card as the starter kits (`snippets/mr-kit-card.liquid`).

## Start here page
Template `page.start-here.json` (hero, finder, starter kits, guides, trade form). The page
`/pages/start-here` exists in the store and is in the main menu as the first item.

## Guides
Blog `Guides` (`/blogs/guides`) holds six draft articles (not published). Publish them in
Shopify admin (Online Store, Blog posts) once the client approves the wording, then add a "Guides"
item to the main menu pointing at the blog. Home and Start here link to them already.

## Compatibility box (`snippets/mr-compat.liquid`)
"Check before you buy" box on product pages showing the Works on value, with an Ask us link.
Added as a block to product, paint and casting templates. Hidden when a product has no works_on value.

## Trade and bulk form (`sections/mr-trade-cta.liquid`)
Uses the standard Shopify contact form, tagged "Trade and bulk quote", so enquiries arrive in the
store's customer email like the contact page. On the home page after guides, and on Start here.

## Placeholders / notes
- Guide wording is a draft for client approval.
- Trade points ("Quotes within one working day") need the client to confirm.
