# Placeholder content to replace before launch

Everything below was added so the preview looks like the mockups. None of it is real client content. Every item is editable in the theme editor unless noted.

## Home page
- Announcement bar: "Free UK delivery over £75 · Dispatched from the UK" (header group). Also set Theme settings > Cart > Free UK delivery threshold to 75, which switches on the basket progress message.
- Trust strip: "Rated 4.8 by 2,400 customers", "Supplying since 2009", "Call 01234 567890" and the delivery line. All invented.
- Collection grid: five tiles (Casting & mouldmaking, Worbla & thermoplastics, Glues & adhesives, Specialist tape, Tools) with invented product counts (48, 32, 27, 19, 41). Links go to store searches. Replace with real collections using the Collection field on each block.
- Project tiles: names are the recommended structure from client Question 1, not confirmed. Links are store searches.
- Start here: heading, text and button label are invented. It shows products from the existing `top-picks` collection.
- Right now at Makers Realm: tabs use `top-picks` for Popular and `all` for New in and Back in stock, so the last two are not really "new" or "back in stock". Point each tab at a real collection.
- Guides and tutorials: three invented titles with no links. There is no blog.
- Pictures: AI-generated images supplied by George, bundled in `assets/mr-hero-*` and `assets/mr-tile-*`.

## Footer
- Contact column: `hello@makersrealm.co.uk`, `01234 567890`, "Mon to Fri, 9am to 5pm". All invented.
- Newsletter band: heading "Project ideas and restock alerts" is invented, and it signs people up to the store's marketing list.

## Product page
- "4.8 rating · 126 reviews": invented, there is no reviews app.
- "In stock · Dispatched from the UK · Delivery from £3.95": invented. Stock status is not read from the product.
- Help box: link goes to `/pages/contact`, which may not exist.
- Product details section: the "Show placeholder text when a product has none" checkbox is on. Every product without metafield content shows generic text. Switch it off in the theme editor before launch, once real copy exists.

## Not placeholder, but still open
- Main menu and footer menus are store data. Edit them in Content > Menus.
- Logo is the text wordmark until a transparent logo file is uploaded in Theme settings.
- Search & Discovery filters, metafield definitions and product tagging are admin tasks (see `docs/collection-setup.md` and `docs/product-page.md`).

## Added in design round two
- Collection page: "What are you making?" tiles and the Material chips are placeholders. They filter by metafield `custom.project_type` and by product tag, so clicking one shows no products until those exist.
- Collection page: promo card "Need a hand choosing?" links to `/pages/contact`, which may not exist. "New to casting? Start here" strip links to `/`.
- Trust strip icons are chosen per item in the theme editor.
