# Metafield definitions created in the store (20 Nov 2026)

Created through the Shopify CLI (`shopify store execute`) with the staff login for clients@discoverable.co.uk. Namespace `custom`. Storefront access is read-only public, so the theme can read them. Admin access is the default. No values have been written to any product or collection.

## Product (16)
what_it_is, how_to_use, why_choose (multi-line text) · features, perfect_for, in_the_box (list of single line text) · specifications (multi-line text) · works_on (list, choices: Wood, Metal, Plastic, Fabric, Foam, Ceramic, Card and paper, Glass, Plaster and concrete, Leather) · mix_ratio, dry_time, coverage (single line text) · difficulty (single line text, choices: Beginner, Intermediate, Advanced) · safety_note (multi-line text) · safety_data_sheet (file, generic file) · faqs (JSON, a list of objects with q and a) · project_types (list, choices: Cosplay & props, Model making, Special effects & make-up, Casting & home crafting, Weathering & finishing)

works_on, difficulty and project_types are also set as filterable in the admin and usable as smart collection conditions.

## Collection (7)
promo_heading, promo_text, promo_button (single line text) · promo_link (URL) · promo_image (file, image) · promo_colour (single line text, choices: navy, red, sky, gold, cream) · promo_position (integer)

## Still to do in the admin
- Apps > Search & Discovery > Filters: add Project types, Skill level and Works on as storefront filters.

## Values written (20 Nov 2026)
Test values on three products only: jesmonite-ac100, worbla-thermoplastic, dirty-down-gore-and-snot (what_it_is, how_to_use, faqs, perfect_for, project_types, and mix_ratio for Jesmonite AC100). Text is from the existing descriptions, split into fields. US spellings are kept as in the source and still need a UK spelling pass.

Known problems in `docs/product-metafields-import.csv` (to fix before the full import): the "Best for" line is glued onto the last FAQ answer, works_on is unreliable, and project_types puts "Weathering & finishing" on too many products.
