# Phase 0 audit

Read from the theme files in `main` ("Import live theme" commit, pulled from the live theme on 26 Oct 2026). Nothing here has been checked against the running store, because the Shopify connection was not available. Items marked "needs admin check" must be confirmed by George.

## Theme
- Trade 16.1.0 by Shopify (`config/settings_schema.json`). Matches the brief, so "Tinker" was wrong.
- 49 sections, 39 snippets, 191 assets. Online Store 2.0 JSON templates throughout.
- Repo hygiene: the theme export `.zip` had been committed to the repo root. It is removed on this branch.

## Current theme settings (`config/settings_data.json`)
- Fonts: heading Caveat 400, body Alegreya Sans 400. Heading scale 105, body scale 100. Already matches the brief, no font work needed.
- Page width 1200px. Section spacing 0, grid gaps 12px.
- Buttons: 1px border, 100% opacity, radius 6, no shadow. Inputs radius 6. Variant pills radius 40.
- Cards: style "card", image padding 12, radius 8, left aligned, scheme-2. Collection cards: style "card", radius 8.
- Badges: bottom left, radius 40. Sale badge scheme-5, sold out badge scheme-3.
- Cart type: notification (not drawer). Cart note off. Vendor off. Predictive search on, with vendor and price hidden. Currency code shown.
- Social links: all empty. Brand headline and description: empty.
- Logo width 70. Favicon comes from the shop brand square logo.

### Colour schemes
| Scheme | Background | Text | Button | Notes |
|---|---|---|---|---|
| scheme-1 | #f4f4f4 | #2b2c2d | shop brand primary | light grey |
| scheme-2 | #ffffff | brand secondary foreground | shop brand primary | cards |
| scheme-3 | #88caec | #007bb9 | #fdfdfd | sky blue, used for sold out |
| scheme-4 | shop brand secondary | #ffffff | shop brand primary | header and footer |
| scheme-5 | #102441 | #ffffff | shop brand secondary | navy, announcement bar |
| scheme-ba9f... | #f4f4f4 | #2b2c2d | #b7aca2 | unused duplicate of scheme-1 |

Several values reference the shop's brand colours (`shop.brand.colors.*`), which are set in Settings > Brand and are not in the repo. Needs admin check: what those brand colours are. The page background is grey/white, not the cream (#f6f0e2) in the mockups, so Phase 1 needs a cream scheme.

## Templates and live section order
- Home (`index.json`): image_banner, multicolumn (5), rich_text, featured_collection1, collection_list (10 collections), multicolumn1 (4), featured_collection2, multicolumn2 (4).
- Collection: main-collection-banner, main-collection-product-grid.
- Product: main-product, disclosures, quick-order-list, related-products.
- Cart: main-cart-items, main-cart-footer, featured-collection ("More industry favorites", no collection set).
- Others: 404, article, blog, list-collections, page, page.contact, password, search, gift_card.
- Header group: announcement bar (single slide, text "Welcome to our store", the theme default) and header (mega menu, menu `main-menu`, sticky "reduce logo size", scheme-4). Footer group: footer (scheme-4, newsletter off, one link list "Quick links" from menu `footer`, payment icons on).
- Needs admin check: the actual menu structure and handles (`main-menu`, `footer`). Menus are store data, not in the theme files.

## Collection and product features already available
Collection grid (`main-collection-product-grid`):
- Native storefront filtering is on, filter layout currently "drawer". The theme also offers "vertical" (left sidebar) and "horizontal". The desktop mockup needs **vertical**; mobile keeps the filter button.
- Sorting on, 20 products per page, 5 columns desktop, 2 mobile, quick add "bulk", image ratio adapt, ratings off.
- Pagination is page based. The mockup's mobile "Load more" button is not built in and would need a small custom addition.
- No breadcrumbs anywhere in the theme. Needs a small `mr-breadcrumbs` snippet.
- No built-in "chips" row. The "What are you making?" and material chips need a custom section or snippet.

Product (`main-product`):
- Blocks available: title, price, description, variant picker, quantity selector, buy buttons, inventory, sku, rating, complementary products, collapsible tab, share, popup, custom liquid, rich text. Currently used: title, price, description, 3 collapsible tabs, share.
- Gallery: thumbnail slider, media on the right, lightbox zoom, mobile thumbnails hidden, sticky info column on desktop.
- No sticky Add to basket bar for mobile. Would need custom work.
- Related products section exists. Complementary products block exists (needs Search & Discovery recommendations).

## Scripts and apps
- Theme loads only its own deferred scripts (`global.js`, `animations.js`, etc.). No app embeds or third-party scripts appear in the theme files.
- Needs admin check: App embeds (Online Store > Themes > Customise > App embeds) and installed apps. Anything injected via app embeds or the ScriptTag API will not show in the repo.
- Needs admin check: tax settings (prices inc VAT or not) and whether Search & Discovery is installed.

## Live site against mockups
- Fonts, header bar, navy announcement colour and the Banner.jpg hero are already live. Home already has a banner, trust-style multicolumn rows and collection list.
- Gaps: cream page background, red/navy/sky/gold token set as schemes, bunting strip, stitch borders, wavy underline, breadcrumbs, vertical filters, chips, mobile Load more, sticky mobile add to basket, real announcement text.
- Open decisions that block later phases: Question 1 (shop structure, "What are you making?" mechanism, collection names), chat app choice, cart configuration, whether Phase 4 is in scope.

## Recommendations for Phase 1
1. Add a cream colour scheme plus navy and red schemes from `tokens.css`. Keep existing schemes so nothing live changes.
2. Header: keep scheme-4 if brand secondary is the red, otherwise set explicitly. Search stays prominent with predictive search on.
3. Replace the placeholder announcement text only once there is a real message.
4. Add `mr-bunting` snippet and `mr-*.css` for decoration, kept small.
5. CTA colour is only a suggestion (#146f9c) until the client confirms. Make it a single setting or CSS variable so it changes in one place.
