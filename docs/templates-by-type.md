# Templates by product and collection type

## Product templates
- `product` (default): tools, tapes, sundries and anything not tagged below.
- `product.casting`: products tagged "Casting Mouldmaking and Sculpting Materials" (66). Key facts and a safety callout sit in the buy box, and the related block reads "You will also need".
- `product.paint`: products tagged "Paints Pigments and Special Finishes" (99, minus any also tagged casting). Colour choice first, key facts under it, "Use with these".

Assigned in the store on 20 Nov 2026 through the product "Theme template" field (`templateSuffix`: casting or paint). To change one product: Products > the product > Theme template.

## Collection templates
- `collection` (default): sub-collections, brand pages, everything else.
- `collection.main`: the five main collections. Banner artwork, sub-category tiles (built automatically from that collection's sub-items in the main menu), brands in the collection, then the grid with filters and promo card.

Assigned on the five collections: tapes-adhesives-and-fastenings, paints-pigments-and-special-finishes, tools-brushes-and-sundries, casting-mouldmaking-and-sculpting-materials, materials-and-thermoplastics.

The sub-category tiles only show once the main menu has the five collections at the top level with their sub-collections underneath (see `docs/menu-proposal.md`). Until then that part of the page is simply empty.

## Notes
- The 'Casting Mouldmaking and Sculpting Materials' collection has 73 products, not 66, because the collection also pulls in products tagged Dispenser, Mixing, Resin Pigment or Universal Pigment. Those 7 products use the default product template.
- There is a duplicate empty collection, `tapes-adhesives-and-fastenings-1`.

## Shop-by-project pages (20 Nov 2026)
Five pages created in the store, each with its own template and a hero plus a shopping list grouped into stages (for example Shape it, Join and fill, Prime and paint). Products in the lists are real products picked by me from the catalogue, so the client should approve the picks.

| Page | Template |
|---|---|
| /pages/cosplay-and-props | page.project-cosplay |
| /pages/model-making | page.project-model-making |
| /pages/special-effects-and-make-up | page.project-special-effects |
| /pages/casting-and-home-crafting | page.project-casting |
| /pages/weathering-and-finishing | page.project-weathering |

The pages are published (the store is still password protected). To change a list: theme editor > Pages > the page > Project stages > pick a stage > Products. The home page "What are you making?" tiles link to these pages.
