# Phase 3: cart configuration and chat

## Cart (done)
- Cart type: slide-out drawer (was notification popup).
- Order notes: on.
- Free delivery message: added as `mr-free-delivery`, shown in the drawer and on the cart page. Hidden until a threshold is entered in Theme settings > Cart > "Free UK delivery threshold". No number has been invented, so it is off for now.
- Payment icons in the footer: already on, they show whichever payment methods are enabled in Shopify.
- Recommended products: the cart page's "More industry favorites" block had no collection set, so it is switched off. To use it, pick a collection and re-enable it. The drawer's own recommendations use Theme settings > Cart > Cart drawer collection, also empty and waiting on the client to curate.

## Chat (not started)
Decision deferred by George. When an app is chosen: install it, set brand colours (navy `#102441` and the CTA colour), and make sure the launcher does not cover the sticky Add to basket bar on mobile (Phase 4 product page).

## Needs from client
- Free delivery threshold, or confirmation there is none.
- A curated collection for cart recommendations.

## Cart upsell (21 Nov 2026)
"You might also need" row in the cart drawer (3 products) and on the cart page (4). For each product in the cart it asks Shopify for complementary products, falls back to related products, and skips anything already in the cart or out of stock. Single-variant products get an Add button that adds in place and refreshes the drawer. Products with options show "Choose options". Nothing shows for an empty cart or if no recommendations exist.

The quality depends on the pairings. Set complementary products per product in Apps > Search & Discovery > Recommendations, for example Jesmonite with pigment, sealer and release agent. Until then Shopify's automatic "related" suggestions are used.
