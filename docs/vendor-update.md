# Vendor (brand) update, 20 Nov 2026

Set the Vendor field on 137 of 315 products from the brand named in the product title. Done through the Shopify CLI with the staff login for clients@discoverable.co.uk. The 178 products with no brand in the title keep the vendor "Makers Realm". Nothing else on the products was changed.

Every product had the vendor "Makers Realm" before. To undo, set the Vendor of the 137 branded products back to "Makers Realm" (Products > filter by vendor > Bulk edit).

| Brand | Products |
|---|---|
| Jesmonite | 22 |
| Olfa | 11 |
| PlastiKote | 11 |
| Hato | 9 |
| Stanley | 8 |
| Dirty Down | 7 |
| Polyvine | 6 |
| Evo-Stik | 4 |
| Kobra, Decoration, Plastidip, Liquid Leaf, Montana, Proxxon | 3 each |
| Bessey, Tesa, Bostik, Dalon, Rust-Oleum, Varaform, Worbla, Problood, Mixol, Araldite | 2 each |
| Mod Roc, Maston, Wonderflex, Zap A Gap, Kryolan, Berol, Sculpey, Cosmoslac, Red Devil, Liberon, Plastazote, Fosshape, Sharpie, Pentel, Milliput, E6000, Gorilla, Snazaroo, Rhenoflex, Pigs Might Fly, Liquitex | 1 each |

Read back from the store after the update: 137 matched the plan, none differed.

Brand pages work automatically at `/collections/vendors?q=<brand>`. The theme uses them for the brand link on product pages, brands on collection cards and the "Brands we stock" strip on the home page.

To add brand filtering to collection pages: Apps > Search & Discovery > Filters > Add filter > Product vendor.
