# Price My Tires Redesign

Production-quality static one-page redesign concept. No build step required.

Private review deployments:
- Version 1: <https://kirkautomations.github.io/pricemytires-redesign/>
- Version 2: <https://kirkautomations.github.io/pricemytires-redesign/v2.html>
- Version 3: <https://kirkautomations.github.io/pricemytires-redesign/v3.html>
- Version 4: <https://kirkautomations.github.io/pricemytires-redesign/v4.html>
- Version 5: <https://kirkautomations.github.io/pricemytires-redesign/v5.html>

## Route inventory

- `/` (`index.html`): Version 1 full one-page experience
- `/v2.html`: Version 2 porcelain, cobalt, and coral app-style redesign
- `/v3.html`: Version 3 Detroit sign-shop, transit-board, and carbon-copy service-order design
- `/v4.html`: Version 4 fluid editorial tire-ad design with curved road geometry and an open quote record
- `/v5.html`: Version 5 Detroit Performance design with night-freeway imagery, pit-lane quote flow, open telemetry, and the live TireConnect inventory widget
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

Version 5 embeds the live TireConnect catalog directly using the existing Bazzi account widget, themes it with V5 signal orange, IBM Plex Sans, squared controls, and gunmetal borders, and preserves the current Price My Tires website as a fallback. Earlier versions hand inventory traffic to the current site.

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
