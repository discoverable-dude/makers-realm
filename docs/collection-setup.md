# Collection template: admin steps and decisions

## What the template now does (`templates/collection.json`)
- Breadcrumb (Home / collection) above the collection title. Description only shows when the collection has one.
- "What are you making?" chip row (`mr-filter-chips`). Renders nothing until chips are added.
- Native storefront filters as a left sidebar on desktop (filter drawer on mobile), sort, 3 columns on desktop, 2 on mobile, square images, quick add button on cards.
- Mobile only: a "Load more products" button replaces page numbers. It is a normal link to the next page, so it still works without JavaScript.
- "Start here" strip (`mr-start-here`). Hidden until a heading and a link are filled in.

## Decision: how the "What are you making?" row filters
Recommended: a product metafield, `custom.project_type`, type "List of single line text". Chips link to `?filter.p.m.custom.project_type=<value>`. The second option is product tags, in which case set the chip section's filter parameter to `filter.p.tag`. Either way the **client** populates the products. Nothing has been tagged or bulk-edited. Waiting on client Question 1 before choosing for good.

## Steps for George in the Shopify admin
1. Settings > Custom data > Products > Add definition: name "Project type", namespace and key `custom.project_type`, type List of single line text. Tick "Storefronts" access so it can be used as a filter. (Skip if using tags.)
2. Apps > Search & Discovery > Filters > Add filter: Availability, Price, Product type or Brand (whichever the catalogue uses), plus Project type (metafield) or Tag. Add Size or Pack size only if that data exists as a variant option or metafield.
3. Customise the collection template: in "Filter chips", add a chip per project type. Label is what shoppers see, value must match the metafield value exactly. For material chips (Jesmonite, Mouldmaking and so on), add a second Filter chips section with the matching filter parameter.
4. Fill in the "Start here strip" once the client supplies the beginner guide link and copy.

## Needs from the client
- Final project types and the five main collection names (Question 1).
- Tagging or metafield values on products.
- Collection descriptions for the intro area.
- Beginner guide link and copy.

## Differences from the mockup
- Filter drawer on mobile is Trade's own drawer, not a separate Filter and Sort button pair.
- Chips are links that apply a filter. Combined filters work, but chips and the sidebar show the same underlying filter state.
- Stock state is shown through Trade's sold out badge, not a separate label.
- Not tested against live data. A preview theme with real products is needed to check layout at 390, 768 and 1440 before this goes further.
