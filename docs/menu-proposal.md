# Main menu proposal

Built from the tags and titles in the 29 Oct 2026 products export. Counts are approximate, because sub-groups were worked out from tags and a few products fall in a neighbouring group. Menu item names are suggestions.

## Top level (what shoppers see in the white bar)
1. Casting, mouldmaking & sculpting (66)
2. Paints, pigments & special finishes (99)
3. Materials & thermoplastics (44)
4. Tapes, adhesives & fastenings (46)
5. Tools, brushes & sundries (61)
6. Shop by project (project types, see below)
7. Shop by brand
8. Start here
9. Guides

## Second level (the mega menu columns)
**Casting, mouldmaking & sculpting**: Jesmonite (20), Silicone, latex & mouldmaking (14), Plaster & hard casting (12), Foam casting (6), Clay, wax & sculpting (5)

**Paints, pigments & special finishes**: Special effects & make-up (29), Acrylics, pigments & other paint (21), Spray paint (20), Gilding & metallic (13), Primers, sealers & varnish (9), Fabric paint (6)

**Materials & thermoplastics**: Thermoplastic sheet (12), Wire, rope & cord (13), Fillers & repair (3), Fabric & felt (3), Wood, foam & components (13)

**Tapes, adhesives & fastenings**: Tapes (22), Glues & adhesives (22), Fastenings (2)

**Tools, brushes & sundries**: Knives, blades & cutters (34), Mixing & measuring (8), Brushes & rollers (7), Sculpting & drawing (5), Sundries (7)

**Shop by project**: Cosplay & props, Model making, Special effects & make-up, Casting & home crafting, Weathering & finishing

## Brands worth a menu entry (3 or more products)
Jesmonite 22, Olfa 11, PlastiKote 11, Hato 9 (HatoTex, HatoSilk, Hatocel and others), Dirty Down 8, Stanley 8, Polyvine 6, Evo-Stik 4, Liquid Leaf 3, Problood 3, Proxxon 3, Decoration 3, Kobra 3, Montana 3, Plastidip 3.

Brands with two products or fewer: Worbla, Araldite, Tesa, Mixol, Varaform, Rust-Oleum, Dalon, Bostik, Bessey, plus single products from Liquitex, Rhenoflex, Wonderflex, Fosshape, Plastazote, Milliput, Sculpey, Snazaroo, Gorilla, E6000, JB Weld and Kryolan.

About 137 of the 315 products have a brand at the start of the title. The rest are generic or unbranded lines. The Vendor field is "Makers Realm" on all of them, so a brand menu only works once Vendor is set. See `docs/metafields-setup.md`, step 13.

## Where to build it
Content > Menus > Main menu. Add each item above, then drag the second-level items under their parent. Link each one to a collection. For the sub-groups, use a filtered collection URL such as `/collections/casting?filter.p.tag=Jesmonite`, or make smart collections from the tags. After that, the "Mega menu promo" block in the Header section adds a picture card to any top-level item.
