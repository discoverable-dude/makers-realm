# Product and collection metafields: what to create and how

Everything below uses the namespace `custom`. The theme already reads these keys, so a product page fills in as soon as a product has a value. Blocks with no value stay hidden.

## 1. Product fields

| Name (as shown in admin) | Key | Type | Filled from | Where it shows |
|---|---|---|---|---|
| What it is | `what_it_is` | Multi-line text | First sentence of the description (313 products) | "What it is" block |
| How to use it | `how_to_use` | Multi-line text | Second paragraph (312) | "How to use it" block |
| Why choose this one | `why_choose` | Multi-line text | Client writes | "Why choose this one" block |
| Features | `features` | List of single line text | Client writes | "Features" block |
| Perfect for | `perfect_for` | List of single line text | Client writes | "Perfect for" block |
| In the box | `in_the_box` | List of single line text | "Kit contains" lists (2 products) | "In the box" block |
| Specifications | `specifications` | Multi-line text, one `Label: value` per line | "Spec:" lines (10) | Specifications card |
| Works on | `works_on` | List of single line text. Add a choice list: Wood, Metal, Plastic, Fabric, Foam, Ceramic, Card and paper, Glass, Plaster and concrete, Leather | Surface words in the text (255, needs checking) | Chips in the specifications card, and a filter |
| Mix ratio | `mix_ratio` | Single line text | Clear ratios only (3, for example "2.5 : 1 by weight") | Key facts row |
| Dries or cures in | `dry_time` | Single line text | Times in the text (12) | Key facts row |
| Coverage | `coverage` | Single line text | m² figures (18) | Key facts row |
| Skill level | `difficulty` | Single line text. Choice list: Beginner, Intermediate, Advanced | Client decides | Key facts row, and a filter |
| Safety note | `safety_note` | Multi-line text | Safety wording (75, needs checking) | "Safety" block |
| Safety data sheet | `safety_data_sheet` | File (PDF) | Client uploads | Link in the specifications card |
| FAQs | `faqs` | JSON, a list of `{"q": "...", "a": "..."}` | The Q&A in each description (313, about two each) | "Questions people ask" accordion, plus FAQ markup for Google |
| Project types | `project_types` | List of single line text. Choice list: Cosplay & props, Model making, Special effects & make-up, Casting & home crafting, Weathering & finishing | Product tags (251, needs checking) | "What are you making?" filter chips |

Ideas that are not wired in yet, worth adding later: `guide_link` (URL to the relevant guide), `video_url` (a how-to video), `compatible_with` (product list for "Frequently bought together", though Search & Discovery's recommendations may be enough).

## 2. Collection fields
Same place, Settings > Custom data > Collections. Storefront access on for each.

| Name | Key | Type | Used for |
|---|---|---|---|
| Promo heading | `promo_heading` | Single line text | Promo card in that collection's grid |
| Promo text | `promo_text` | Single line text | |
| Promo button | `promo_button` | Single line text | |
| Promo link | `promo_link` | URL | |
| Promo image | `promo_image` | File (image) | Leave empty for a text-on-colour card |
| Promo colour | `promo_colour` | Single line text, choice list: navy, red, sky, gold, cream | |
| Promo position | `promo_position` | Integer | Card appears after this many products |

## 3. Step by step

**Before you start**
1. Products > Export > All products > CSV. Keep the file as a backup.

**Create the product definitions (about 30 minutes)**
2. Settings > Custom data > Products > Add definition.
3. Type the Name from the table. Click to edit the namespace and key and set it to exactly `custom.` plus the Key (for example `custom.what_it_is`). The theme will not find a product value if the key is spelled differently.
4. Choose the Type from the table. For choice lists, open the validation options and add the allowed values listed.
5. Under access, tick "Storefronts" so the theme can read it. For Works on, Skill level and Project types, also tick the option to use the field as a filter.
6. Click Save, then repeat for each field. Do the collection definitions the same way under Settings > Custom data > Collections.

**Fill the products**
7. Test first. Make a copy of `docs/product-metafields-import.csv` containing the header row and three products.
8. Products > Import > upload it. Tick "Overwrite existing products with matching handles". Check the three products afterwards, including titles, prices and variants, to confirm nothing else changed.
9. If those look right, import the full file. Blank cells are left alone.
10. The import is a draft built from the existing descriptions. Skim at least the mix ratios, dry times, coverage and safety notes before it goes live. They are extracted from templated text and may be wrong, or may repeat advice that is not appropriate for that product.

**Turn it on in the storefront**
11. In the theme editor, product template > Product details, untick "Show placeholder text when a product has none".
12. Apps > Search & Discovery > Filters > Add filter. Add Project types, Skill level and Works on, plus Availability and Price.
13. In the same app, set Vendor for brand filtering: first bulk edit the Vendor column on products (Products > select all > Bulk edit), using the brand column in `docs/product-content-proposed.csv`.
14. Same app > Recommendations > complementary products. Pair products by hand or in bulk, for example Jesmonite with pigments, sealer and release agent.

**Client to write (the data cannot supply these)**
- Why choose this one, Features, Perfect for, Skill level, and Safety data sheets for the casting and spray products.
