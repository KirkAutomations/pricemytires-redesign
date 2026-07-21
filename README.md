# Price My Tires Redesign

Production-quality static one-page redesign concept. No build step required.

Private review deployment: <https://kirkautomations.github.io/pricemytires-redesign/>

## Route inventory

- `/` (`index.html`): full one-page experience
- `#quote`: interactive SMS quote-request builder and request receipt
- `#promise`: three-step request and written-quote model
- `#inventory`: handoff to the existing TireConnect-backed catalog
- `#locations`: verified locations, phones, and current hours

## Source facts used

- Brand: Price My Tires
- Redford: 15150 Telegraph Rd, Redford, MI, 313-300-8403
- Detroit: 8001 Schaefer Highway, Detroit, MI, 313-584-0066
- Current source hours: Monday through Friday 8 AM to 6 PM, Saturday 8 AM to 3 PM, Sunday closed
- Current catalog handoff: <https://pricemytires.com/>
- Source wheel image is used once

## Handoffs

The quote builder creates a client-side request ID and opens an SMS draft to the selected location. It does not calculate, imply, store, or submit pricing. The receipt remains labeled as a request until a shop reply provides a real quote.

The inventory call to action opens the current Price My Tires website, where the existing TireConnect catalog is hosted.

## Publication flags

The following claims are strategy concepts or unverified source context. Confirm each one with the business before production publication:

- Sunday operating hours
- 24/7 quote response or availability
- Any five-minute response SLA
- “Detroit since 1995”
- “A Bazzi Tires & Wheels shop” or any Bazzi ownership wrapper

The page does not encode these as verified business facts or JSON-LD. The Sunday strategy section explicitly identifies the idea as not live, and the footer repeats the publication warning.

## Included interaction system

- Three persistent themes: Blacktop, Receipt, Night Shift
- Seven persistent copy voices: The Number, No Games, Neighbor, Roadside, Receipt, Utility, Motor City
- Ten persistent CSS backgrounds with desktop and mobile controls
- Branded animation power control
- Loading screen, scroll progress, cursor glow, magnetic buttons, blur navigation, mobile menu, and reveal fallback
- Accessible form labels, focus states, skip link, live status regions, reduced-motion handling, semantic landmarks, SEO metadata, and LocalBusiness JSON-LD
- Print stylesheet optimized around the request receipt
- One external dependency: a single Google Fonts stylesheet request

## Publication

The GitHub Pages workflow is adapted from the shared redesign template and deploys from `main`. The review build remains separate from the production domain.
