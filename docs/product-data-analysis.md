# Product data analysis (export of 29 Oct 2026)

Source: `products_export` CSV. 315 products, 1,270 rows (one per variant or image), all active, 314 published, vendor "Makers Realm" on every product.

The parsed content for each product is in `docs/product-content-proposed.csv`. It is a proposal only. Nothing has been written to the store.

## 1. The five main collections are already in the tags
313 of 315 products carry exactly one of five top-level tags, which line up with the five main collections the client was asked about (Question 1):

| Tag | Products | Common sub-tags |
|---|---|---|
| Paints Pigments and Special Finishes | 99 | Paint, Special Finishes, Special Effects, Spray Paint, SFX, Gilding, Metallic, Facepainting, Makeup, Sealer |
| Casting Mouldmaking and Sculpting Materials | 66 | Casting, Jesmonite, Hard Casting Materials, Mouldmaking, Plaster, Clay, Fibreglass Additives, Soft Casting |
| Tools Brushes and Sundries | 61 | Tools, Propmaking, Knives, Sculpting Materials, Sundries, Mixing, Measuring, Brushes |
| Tapes Adhesives and Fastenings | 46 | Tapes, Adhesive, Gaffer Tape, Fluorescent Tapes, Glue Gun, Spray Adhesive, Contact Adhesive |
| Materials and Thermoplastics | 44 | Materials, Propmaking, Thermoplastic Sheet Materials, Rope, Cords, Wooden Components, Wire |

Two products have none (Gilding Flakes, Brown Paper Tape) and three have two. Sub-tags give the second level of the mega menu and the material chips.

Product Type is unusable: it holds supplier codes such as `ae-2-1-2`. Vendor is "Makers Realm" for everything, so the brand filter in the mockup has nothing to filter on.

## 2. Content already in the descriptions that can become designed fields
Every description follows the same pattern: a one-sentence summary, a how-to paragraph, then labelled blocks. That makes it parseable.

| Block in the text | Products | Proposed use |
|---|---|---|
| One-sentence summary | 313 | "What it is" (`custom.what_it_is`) |
| How-to paragraph | 312 | "How to use" (new metafield `custom.how_to_use`) |
| "Also available:" lists | 277 | Pack and size selector card, plus a cross-check against the real variants |
| "Q&A:" (about 2 pairs each) | 313 | Accordion FAQ block, FAQ rich results in Google (`custom.faqs`, JSON) |
| Mix ratio sentence | 19 | Big-number "Mix ratio" card |
| Cure or dry time | 30 | "Dries in" fact chip |
| Coverage per can or litre | 45 | "Coverage" fact chip |
| Safety wording (gloves, ventilation, flammable) | 76 | Safety icon row |
| "Spec:" lines | 10 | Specifications table (already supported) |
| Kit contents | 18 | "In the box" list |

Metafields to define: `what_it_is`, `how_to_use`, `faqs`, `also_available`, `specifications`, `mix_ratio`, `dry_time`, `coverage`, `safety_note`, `in_the_box`, `project_types` (list), `difficulty` (beginner, intermediate, advanced).

Caution: descriptions look machine-written to a template. Phrases such as "ideal for set dressing, props, jewelry, model building" recur across unrelated products, so use-case words in the text are weak evidence. Use tags for use cases, and have the client check the facts before they go live (mix ratios and safety wording in particular).

## 3. Secondary and tertiary images
1,198 images across 304 products. 11 products have none, 104 have one, 122 have three or more. Zero images have alt text. Many of the larger sets are colour swatches (Hato acrylic 50, matt spray paint 48, Polyvine colourant 39), not extra product views.

Designed info cards can be generated from the parsed text: mix ratio, kit sizes, FAQ, dry time, safety, "also works with". Samples for Jesmonite AC100 are in `docs/samples/`. They use fallback fonts here. The real run would use the brand fonts. They can be rendered in bulk and uploaded as additional product images (needs API access to attach them).

## 4. Gaps
**Use cases the five project types miss**
- Special effects and make-up (liquid latex, bruise gel, fake blood, Dirty Down, face paint): about 33 products tagged SFX, Special Effects, Makeup or Facepainting. This is a real project type for theatre, film and Halloween.
- Weathering and ageing (Dirty Down, crackle varnish, patina, gilding): 5 tagged, about 50 mention it.
- Set dressing and theatre: 10 tagged.
- Spray painting and finishing: 35 products tagged spray paint.

**Project types the client wants that the catalogue barely supports**
- Millinery: 1 product (Black Felt NDFR). There are no hat blocks, millinery wire, stiffener, buckram, sinamay, feathers or ribbon. Either the range is missing from the export or the "Millinery" tile should not launch yet.
- Model making: filler, Milliput, balsa and polystyrene balls exist, but no scenery (flock, static grass, ballast), airbrush, plasticard or hobby tweezers.
- Home crafting: Jesmonite coaster and tea light kits, plaster and clay, but no candle or soap casting supplies.

**Product gaps a cosplay and prop shop would expect**
- No heat gun, no PPE (gloves, respirator, goggles), no airbrush, no LED or lighting, no sewing supplies. Safety wording appears in 76 descriptions but no safety kit is sold.
- Fastenings are in a collection called "Tapes Adhesives and Fastenings" but only hook and loop, wooden rivets and snap-off blades are fastenings.

**Data gaps**
- SEO title and description empty on all 315 products.
- No unit pricing (per 100 ml, per kg) on any product, although sizes such as "1 L", "400 ml" and "1 kg" are easy to parse.
- No complementary or related products set, so "Works well with" relies on Shopify's automatic suggestions.
- No sale prices (compare-at is empty), so the sale badge never shows.
- Barcodes on 1,129 of 1,270 rows and weights on 1,156, but no package dimensions.
- Brand is only in titles: Jesmonite 22, Olfa 11, PlastiKote 10, Hato 9, Dirty Down 7, Stanley 7, Polyvine 6, Evo-stik 4 (113 products with a recognisable brand).
- 11 products with no image: Glow Gaffer Tape, Kobra Replacement Spray Caps, Transparent Resin Pigments, RTV Silicone Rubber, Fine Polyester Glitter, Olfa 45 Degree Cutter, Wooden Balls, Maston Zero spray paint, Jesmonite Flex Metal, Kobra Spray Paints, Ambidextrous Scissors.

## 5. Recommendations
1. Use the five top-level tags as the five main collections (Question 1) and the sub-tags as menu level two and the material chips.
2. Change the project-type tiles to match what is stocked: Cosplay and props, Model making, Special effects and make-up, Casting and home crafting, Weathering and finishing. Hold Millinery until the range exists.
3. Create the metafield definitions in section 2 and load the parsed content from the proposed CSV, after the client has checked it.
4. Set Vendor properly (the brand list above) so brand filters and "Shop by brand" work.
5. Write SEO titles, descriptions and image alt text. This is an easy SEO win across the catalogue.
6. Turn on unit pricing for sized liquids and powders.
7. Fill complementary products from pairings in the data (for example Jesmonite with pigments, sealer and release agent).
