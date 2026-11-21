# Complementary product pairings (draft)

Used by "Frequently bought together" / "You will also need" on product pages and "You might also need" in the cart. Shopify reads them from the product's complementary products setting.

## How the draft was made
Each of the 315 products was sorted into a role (for example mould release, pigment, primer, cutting mat, adhesive) from its title. Each role has a list of roles that go with it, in order of importance (a casting material pairs with release agent, pigment, sealer, mixing). For each product I picked up to four from those roles, preferring the same brand and products with more photos, and never the same product twice. 311 products have pairings (303 with four, 8 with three). 4 have none (Regasheen Plus, Rubbers and Erasers, Miscellaneous Kit, Display Mount).

This is rule-based from product names, not from sales data. Someone who knows the products should check it. A few known soft spots: knives and blades pair with each other, "Casting Latex" and make-up latex are in the same role, and the Worbla pairings avoid a heat gun because none is stocked.

## Files
- `docs/complementary-pairings.csv`: readable list, product then four pairings with a reason each.
- `docs/complementary-pairings-import.csv`: product handle plus the comma-separated handles of its pairings, in the column format Shopify uses.
- The client approval workbook has a Pairings tab with a Decision dropdown.

## Applying them
1. Manually: Apps > Search & Discovery > Recommendations > Complementary products, per product.
2. Product CSV import with `complementary-pairings-import.csv`. Not tested. Try three rows first: Products > Import, tick "Overwrite existing products", then check those three products in Search & Discovery.
The CLI cannot write them because they live in a reserved Shopify area.
