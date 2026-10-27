# Phase 4: product page template

## What it does
- Breadcrumb: Home / collection / product (collection is the one the shopper came from, otherwise the product's first collection).
- Gallery: large image on the left with a thumbnail slider (shown on mobile too, swipeable).
- Info column: title, price, description, variant pills, quantity, **Add to basket** (button text changed from "Add to cart" everywhere), dynamic checkout buttons, optional help box, share.
- Dynamic checkout (Apple Pay, Google Pay, PayPal) shows only where enabled in Shopify payments and PayPal settings. Nothing is faked.
- Mobile sticky "Add to basket" bar appears once the main buttons scroll out of view. It submits the real product form. The bar is hidden for sold out products.
- Product details section below the fold: What it is, Why choose this one, Features, Perfect for, plus a Specifications card. Blocks are open on desktop and collapsible on mobile. Each block hides itself when empty, so products without content look clean.
- "Works well with": the theme's related products section (4 across). Complementary products can be set in Search & Discovery's recommendations.
- Removed: Trade's three placeholder collapsible rows (Product features, Materials and care, Merchandising tips) that pointed at pages that do not exist.

## Metafields the client fills in (George creates the definitions first)
Settings > Custom data > Products. All in namespace `custom`, storefront access on:

| Key | Type | Used for |
|---|---|---|
| `what_it_is` | Multi-line text | What it is |
| `why_choose` | Multi-line text | Why choose this one |
| `features` | List of single line text | Features |
| `perfect_for` | List of single line text | Perfect for |
| `specifications` | Multi-line text | Specifications card. One `Label: value` per line, for example `Material: Jesmonite AC100` |

No definitions have been created and no copy has been generated.

## Help box
In the theme editor, add the "Help box" block to the product info and fill in heading and link (chat or a guide). It stays hidden until both are set.

## Needs from the client
- Product copy in the metafields above (client writes it).
- Delivery line wording and any free delivery threshold.
- Chat app (or a guide link) for the help box.
- Confirmation of tax display: the price block shows "Tax included" only if the store is set to include tax in prices (Settings > Taxes and duties). Needs an admin check.

## Differences from the mockup
- No rating or review count: no reviews app installed.
- No "In stock / Dispatched from the UK / Delivery from £x" line yet. It needs real facts. The inventory block can be added in the editor for stock status.
- Sticky bar shows product name and button, not price (it does not follow variant changes).
- The existing "Quick order list" variant table still sits above Related products.
- Not previewed. Check at 390, 768 and 1440 before this goes live, particularly the sticky bar and the chat launcher not overlapping.
