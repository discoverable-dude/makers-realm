# Promo cards and mega menu

## Promo cards in collection grids
A picture card that sits inside the product grid, like the ones on the Vivid and Indicator sites.

**Default card (same on every collection):** theme editor > any collection page > Product grid > "Promo card". Switch it on, choose the position (after how many products), one or two columns wide, then set the heading, text, button label, link and picture.

**Different card on each collection:** create these collection metafields in Settings > Custom data > Collections (namespace `custom`, storefront access on), then fill them in on each collection:

| Key | Type | What it does |
|---|---|---|
| `promo_heading` | Single line text | Heading. If a collection has this, it replaces the default card's heading. |
| `promo_text` | Single line text | Short line under the heading |
| `promo_button` | Single line text | Button label |
| `promo_link` | URL | Where the card goes |
| `promo_image` | File (image) | Picture |
| `promo_position` | Integer | After how many products the card appears |

Any field left empty falls back to the default card. If the default card is switched on and has a heading, every collection shows it. The card shows on page one only.

## Mega menu
The theme's mega menu is on. It opens when the main menu has a second level, so the menu has to be built first (menus are store data, edit them in Content > Menus).

Suggested main menu:
- Casting & mouldmaking: Jesmonite, Silicone and moulds, Release agents, Mixing and measuring
- Worbla & thermoplastics: Sheets, Foam, Heat tools
- Glues & adhesives: Contact adhesive, Polyurethane, Epoxy
- Specialist tape
- Tools
- Start here
- Guides

(Names are placeholders, replace with the real five collections once Question 1 is answered.)

Second-level items show as headings in the hand font. To add a picture card on the right of a menu item: theme editor > Header > Add block > "Mega menu promo". Type the top-level menu item exactly as it appears (for example `Casting & mouldmaking`), choose a picture, heading, line and link. One block per menu item.
