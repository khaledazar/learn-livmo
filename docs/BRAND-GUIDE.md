# LIVMO Brand & Design Guide

**Modern-Day M&A**
Version 2024

---

## Table of Contents

1. [Brand Overview](#brand-overview)
2. [Logo & Icon Usage](#logo--icon-usage)
3. [Color Palette](#color-palette)
4. [Typography](#typography)
5. [Photography Styling](#photography-styling)
6. [Design System](#design-system)
7. [Component Usage](#component-usage)

---

## Brand Overview

### Mission
Livmo empowers visionary founders and leadership teams to achieve deals that honor their life's work. We blend big-picture perspective with meticulous execution to deliver smooth and maximally profitable M&A outcomes.

### Tagline
**"Modern-Day M&A"**

### Brand Personality
- **Entrepreneurial** - We've built and exited companies ourselves
- **Expert** - Institutional-grade M&A execution
- **Transparent** - Clear communication, no surprises
- **Founder-First** - We understand the emotional journey of selling your life's work

### Contact Information
- **Website:** livmo.com
- **Email:** go@livmo.com
- **Phone:** (619) 639-1414
- **Location:** San Diego, CA, USA

---

## Logo & Icon Usage

### Primary Logo
The Livmo logo consists of:
- **Icon:** Dot pattern forming an arrow (representing forward momentum and growth)
- **Wordmark:** "LIVMO" in bold, modern sans-serif
- **Tagline:** "MODERN-DAY M&A" in gold

### Logo Variations

#### Positive (Light Backgrounds)
- Icon: Blue gradient dots (#22668d)
- Wordmark: Dark navy (#1b1f2b)
- Tagline: Gold (#ffcc70)

#### Negative (Dark Backgrounds)
- Icon: Light blue dots (#8ecddd)
- Wordmark: White (#ffffff)
- Tagline: Gold (#ffcc70)

### Clear Space
Minimum clear space around the logo must be equal to the size of the **largest dot** in the icon.

### Minimum Size
- Digital: 120px width minimum
- Print: 1.5 inches width minimum

### Don'ts
- ❌ Don't stretch or distort the logo
- ❌ Don't change the logo colors
- ❌ Don't add effects (shadows, glows, etc.)
- ❌ Don't separate the icon from the wordmark
- ❌ Don't place on busy backgrounds without sufficient contrast

---

## Color Palette

### Primary Colors

#### Primary Blue
- **Hex:** `#22668d`
- **RGB:** 34, 102, 141
- **Usage:** Primary brand color, CTAs, links, headers in services

#### Headline/Navy
- **Hex:** `#1b1f2b`
- **RGB:** 27, 31, 43
- **Usage:** Headlines, dark text, logo wordmark

#### Border/Light Blue
- **Hex:** `#8ecddd`
- **RGB:** 142, 205, 221
- **Usage:** Borders, dividers, accent backgrounds, icon variations

### Secondary Colors

#### Gold
- **Hex:** `#ffcc70`
- **RGB:** 255, 204, 112
- **Usage:** Tagline, CTAs, highlights, accents

#### Light Gold
- **Hex:** `#fceaca`
- **RGB:** 252, 234, 202
- **Usage:** Light backgrounds, subtle highlights

### Neutrals

#### Body Text Gray
- **Hex:** `#79777c`
- **RGB:** 121, 119, 124
- **Usage:** Body copy, secondary text

#### Light Neutral
- **Hex:** `#fffbf4`
- **RGB:** 255, 251, 244
- **Usage:** Page backgrounds, card backgrounds

### Color Usage Guidelines

**Do:**
- ✅ Use primary blue (#22668d) for main CTAs
- ✅ Use navy (#1b1f2b) for headlines
- ✅ Use gold (#ffcc70) for accents and highlights
- ✅ Use body gray (#79777c) for paragraph text
- ✅ Maintain sufficient contrast ratios (WCAG AA minimum)

**Don't:**
- ❌ Don't use gold as a background color
- ❌ Don't mix primary blue with border blue in same element
- ❌ Don't use more than 3 colors in a single component

---

## Typography

### Headline Font: Roboto
- **Weights:** Regular (400), Medium (500), Bold (700)
- **Usage:** Headlines, section titles, navigation
- **Fallback:** system-ui, sans-serif

```css
font-family: 'Roboto', system-ui, sans-serif;
```

### Body Font: Poppins
- **Weights:** Regular (400), Medium (500), Semi-Bold (600)
- **Usage:** Body text, descriptions, labels
- **Fallback:** system-ui, sans-serif

```css
font-family: 'Poppins', system-ui, sans-serif;
```

### Type Scale

#### Display
- **Desktop:** 48px / 1.2 line-height / 700 weight
- **Mobile:** 32px / 1.2 line-height / 700 weight
- **Usage:** Hero headlines, major section titles

#### H1
- **Desktop:** 36px / 1.3 line-height / 600 weight
- **Mobile:** 28px / 1.3 line-height / 600 weight
- **Usage:** Page titles, section headers

#### H2
- **Desktop:** 24px / 1.4 line-height / 600 weight
- **Mobile:** 20px / 1.4 line-height / 600 weight
- **Usage:** Subsection titles, card headers

#### Body
- **Desktop:** 16px / 1.6 line-height / 400 weight
- **Mobile:** 14px / 1.6 line-height / 400 weight
- **Usage:** Paragraph text, descriptions

### Typography Best Practices
- Use Roboto for headlines to create visual hierarchy
- Use Poppins for all body text for readability
- Maintain consistent line-height for better readability
- Avoid ALL CAPS except for small labels or tags
- Use appropriate weights to create emphasis

---

## Photography Styling

### Style Guidelines
- **Professional & Approachable:** Business casual settings
- **Authentic Diversity:** Show real people in real work scenarios
- **Action-Oriented:** People collaborating, working, strategizing
- **Well-Lit:** Natural light preferred, modern office environments
- **Composition:** Use circular/rounded crops for variety

### Subject Matter
- ✅ Founders/entrepreneurs working
- ✅ Team collaboration and brainstorming
- ✅ Modern office environments
- ✅ Exit/success moments (metaphorical)
- ✅ Technology in use (laptops, devices)

### Avoid
- ❌ Overly staged corporate stock photos
- ❌ Dated office aesthetics
- ❌ Cluttered backgrounds
- ❌ Harsh artificial lighting
- ❌ Generic handshake photos

### Image Treatment
- Use circular crops for profile photos
- Apply subtle overlays for text placement
- Ensure images don't compete with text for attention
- Maintain consistent quality across all images

---

## Design System

### Layout Patterns

#### Alternating Section Backgrounds
Create visual rhythm and hierarchy by alternating section backgrounds throughout your pages:

**Pattern Sequence:**
1. **Navy Background** → White floating cards
2. **White Background** → Colored cards or elements
3. **Gold Accent Background** → White floating cards
4. Repeat

**Implementation:**
```jsx
// Navy section with white cards
<Section background="navy" pattern="arrow" patternOpacity={0.08}>
  <Card className="bg-white shadow-2xl">
    {/* Content */}
  </Card>
</Section>

// White section with colored elements
<Section background="white">
  {/* Content with colored cards */}
</Section>

// Gold accent section with white cards
<Section background="gold" pattern="swirl" patternOpacity={0.12}>
  <Card className="bg-white shadow-2xl">
    {/* Content */}
  </Card>
</Section>
```

**Design Principles:**
- Use navy backgrounds for major informational sections
- Use gold backgrounds for CTAs and key highlights
- White floating cards create depth and focus on colored backgrounds
- Maintain consistent card shadows (shadow-2xl) on floating cards

#### Floating Card Layout
Cards that "float" above colored backgrounds create visual hierarchy and draw attention:

```jsx
<Section background="navy">
  <Card className="p-8 md:p-12 bg-white shadow-2xl" hover={false}>
    {/* White card content stands out against navy */}
  </Card>
</Section>
```

**Best Practices:**
- Use generous padding (p-8 to p-12) on floating cards
- Apply shadow-2xl for prominent elevation
- Set hover={false} on decorative cards to prevent unnecessary interaction
- Ensure text contrast meets WCAG AA standards

### Background Patterns

Livmo uses subtle decorative patterns to add visual interest without overwhelming content. All patterns are created with SVG for crisp rendering at any size.

#### Available Patterns

**1. Circle Arrow Pattern**
- **Usage:** Navy backgrounds, major sections
- **Style:** Dot pattern forming arrow shape (references Livmo logo)
- **Opacity:** 0.08 - 0.1
- **Location:** `components/design-system/BackgroundPatterns.tsx`
- **Implementation:** `pattern="arrow"`

**2. Circle Swirl Pattern**
- **Usage:** Gold backgrounds, CTA sections
- **Style:** Circular swirl made of dots
- **Opacity:** 0.08 - 0.12
- **Implementation:** `pattern="swirl"`

**3. Scattered Dots Pattern**
- **Usage:** Subtle backgrounds, light sections
- **Style:** Random but consistent dot placement
- **Opacity:** 0.05 - 0.08
- **Implementation:** `pattern="dots"`

**4. Grid Dots Pattern**
- **Usage:** Structured sections, data displays
- **Style:** Uniform grid of dots
- **Opacity:** 0.06 - 0.08
- **Implementation:** `pattern="grid"`

**5. Wave Pattern**
- **Usage:** Flow sections, transitions
- **Style:** Sinusoidal wave made of dots
- **Opacity:** 0.1
- **Implementation:** `pattern="wave"`

#### Pattern Usage Guidelines

```jsx
// Navy section with arrow pattern
<Section background="navy" pattern="arrow" patternOpacity={0.08}>
  {/* Content */}
</Section>

// Gold section with swirl pattern
<Section background="gold" pattern="swirl" patternOpacity={0.12}>
  {/* Content */}
</Section>

// White section with subtle dots
<Section background="white" pattern="dots" patternOpacity={0.05}>
  {/* Content */}
</Section>
```

**Do:**
- ✅ Keep patterns subtle (opacity 0.05 - 0.12)
- ✅ Use arrow pattern on navy backgrounds for brand consistency
- ✅ Use swirl pattern on gold CTA sections
- ✅ Match pattern color to section theme

**Don't:**
- ❌ Don't use high opacity (>0.15) - patterns compete with content
- ❌ Don't mix multiple patterns in one section
- ❌ Don't use complex patterns on busy content areas

### Decorative Elements

#### Accent Divider
**Purpose:** Elegant separator above headlines to add visual interest and frame important sections

**Design Elements:**
- Two horizontal lines with centered gold dot
- Lines: `h-px w-12 bg-livmo-border` (light blue, 1px × 12px)
- Center dot: `w-2 h-2 rounded-full bg-livmo-gold` (2px gold circle)
- Spacing: `gap-4` between elements

**Implementation:**
```jsx
<div className="flex items-center justify-center gap-4 mb-6">
  <div className="h-px w-12 bg-livmo-border"></div>
  <div className="w-2 h-2 rounded-full bg-livmo-gold"></div>
  <div className="h-px w-12 bg-livmo-border"></div>
</div>
```

**Use Cases:**
- Above major section headlines
- Before important announcements
- Section title separators on colored backgrounds
- Hero section headline accents

**Variations:**
```jsx
// Longer lines
<div className="flex items-center justify-center gap-4 mb-6">
  <div className="h-px w-20 bg-livmo-border"></div>
  <div className="w-2 h-2 rounded-full bg-livmo-gold"></div>
  <div className="h-px w-20 bg-livmo-border"></div>
</div>

// Multiple dots
<div className="flex items-center justify-center gap-3 mb-6">
  <div className="h-px w-12 bg-livmo-border"></div>
  <div className="w-1.5 h-1.5 rounded-full bg-livmo-gold"></div>
  <div className="w-1.5 h-1.5 rounded-full bg-livmo-primary"></div>
  <div className="w-1.5 h-1.5 rounded-full bg-livmo-gold"></div>
  <div className="h-px w-12 bg-livmo-border"></div>
</div>

// On white backgrounds (use darker lines)
<div className="flex items-center justify-center gap-4 mb-6">
  <div className="h-px w-12 bg-livmo-primary"></div>
  <div className="w-2 h-2 rounded-full bg-livmo-gold"></div>
  <div className="h-px w-12 bg-livmo-primary"></div>
</div>
```

**Best Practices:**
- Use above h1/h2 headlines for emphasis
- Pair with navy or white backgrounds
- Keep spacing consistent (mb-6 below divider)
- Don't overuse - reserve for major sections only

---

### Card Accent Graphics
**Purpose:** Subtle watermark-style graphics to add sophistication to card backgrounds

**Available Accent Graphics:**
- `/universal-assets/accents/3.png` - Flowing waves
- `/universal-assets/accents/4.png` - Wave pattern variation
- `/universal-assets/accents/19.png` - Geometric spiral grid
- `/universal-assets/accents/20.png` - Circular spiral
- `/universal-assets/accents/32.png` - Abstract swirl
- `/universal-assets/accents/35.png` - Additional pattern
- `/universal-assets/accents/36.png` - Additional pattern
- `/universal-assets/accents/46.png` - Additional pattern

**Implementation:**
```jsx
<div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-gray-200 relative overflow-hidden">
  {/* Decorative Accent Background */}
  <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
    <Image
      src="/universal-assets/accents/20.png"
      alt=""
      width={256}
      height={256}
      className="object-contain"
    />
  </div>

  {/* Content - must have relative z-10 */}
  <div className="relative z-10">
    {/* Card content */}
  </div>
</div>
```

**Positioning Options:**
- **Top-right:** `absolute top-0 right-0` - Most common
- **Bottom-left:** `absolute bottom-0 left-0` - Creates balance
- **Top-left:** `absolute top-0 left-0` - Alternative position
- **Center:** `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2` - Centered watermark

**Best Practices:**
- **Opacity:** 3-5% for subtle effect (opacity-[0.03] to opacity-5)
- **Size:** 256px-320px (w-64 to w-80) depending on card size
- **Always include:** `overflow-hidden` on card, `pointer-events-none` on accent
- **Z-index:** Content must be `relative z-10`, accent stays in background
- **Selection:** Choose accents that complement card content
  - Circular/spiral (19, 20, 32) - general purpose
  - Waves (3, 4) - flow/process sections
  - Geometric (19) - data/technical content

**When to Use:**
- Important content cards (advisor info, company story)
- Featured cards on colored backgrounds
- Hero cards with significant content
- Cards needing extra visual sophistication

**Don't Use:**
- On small cards (compact info, stat cards)
- When card already has busy content
- On cards with photos/images that might conflict
- More than one accent per card

**Layout Pattern for Two-Column Cards:**
When cards contain both images and text in a two-column layout:

```jsx
<div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-gray-200 relative overflow-hidden">
  <div className="flex gap-8">
    {/* Image Column - NO accent behind it */}
    <div className="flex-shrink-0 relative z-10">
      <Image src={photo} alt="" />
    </div>

    {/* Text Column - Accent positioned here */}
    <div className="flex-1 relative">
      {/* Accent behind text only */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-5 pointer-events-none">
        <Image src="/universal-assets/accents/32.png" alt="" />
      </div>

      {/* All text content with relative z-10 */}
      <h3 className="relative z-10">Name</h3>
      <p className="relative z-10">Bio text...</p>
    </div>
  </div>
</div>
```

**Key Principle:** Accents should be positioned behind text content, NOT behind images. Images already provide visual interest and don't need additional decoration. Text benefits from subtle background accents that add depth without competing for attention.

**Positioning Strategy:**
- **Single column (all text):** Position accent anywhere (top-right, bottom-left most common)
- **Two columns (image + text):** Position accent in text column only
- **Multiple text blocks:** Position accent behind the primary text area
- **Photo-heavy cards:** Skip accents entirely - let photos be the focus

---

### Arrow Asset

#### PNG Arrow File
**Location:** `/public/universal-assets/images/arrow-only-blue-transparent.png`

**Description:**
Official Livmo arrow icon asset featuring the signature dot pattern in blue on transparent background.

**Usage:**
- Hero sections as decorative element
- Corner accents in key sections
- Large-scale background elements
- Can be used alongside or instead of SVG arrow pattern

**Implementation Example:**
```jsx
<div className="absolute top-10 right-10 w-64 h-64 opacity-10">
  <Image
    src="/universal-assets/images/arrow-only-blue-transparent.png"
    alt=""
    width={256}
    height={256}
    className="object-contain"
  />
</div>
```

**When to Use PNG vs SVG Pattern:**
- **PNG Arrow:** Large single arrow placement, hero sections, focal points
- **SVG Pattern:** Repeated patterns, scalable decorative backgrounds, performance-critical areas

### Section Background Options

The Section component supports six background variants:

| Background | Hex Color | Text Color | Best For |
|------------|-----------|------------|----------|
| `white` | #ffffff | Navy/Gray | Default content sections |
| `gray` | #f9fafb | Navy/Gray | Alternate content sections |
| `light` | #fffbf4 | Navy/Gray | Warm neutral sections |
| `navy` | #1b1f2b | White/Border Blue | Major sections, floating cards |
| `gold` | #ffcc70 | Navy | CTA sections, highlights |
| `blue` | #22668d | White | Primary action sections |

**Typography on Colored Backgrounds:**
- **Navy background:** Use white text for headlines, border blue (#8ecddd) for subheadlines
- **Gold background:** Use navy text (#1b1f2b) for all text
- **Blue background:** Use white text for all text

### Spacing
- **Section Padding:** 64px (desktop) / 32px (mobile)
- **Card Padding:** 24px - 32px
- **Floating Card Padding:** 32px - 48px (more generous for emphasis)
- **Grid Gap:** 24px - 32px
- **Element Spacing:** 16px - 24px
- **Section Vertical Spacing:** 80px - 120px between major sections

### Card Container Standards

All content cards across the application should follow these 5 standardized card styles. Choose the appropriate style based on content type and context.

---

#### Card Style 1: Standard Content Card
**Purpose:** Default card for general content, letters, sections with rich content

**Design Elements:**
- White background
- Rounded corners: `rounded-lg` (8px)
- Large shadow: `shadow-lg`
- Subtle border: `border border-gray-200`
- Generous padding: `p-8 md:p-12`

**Implementation:**
```jsx
<div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-gray-200">
  {/* Rich content: paragraphs, images, mixed content */}
</div>
```

**Use Cases:**
- Advisor letters/notes
- Story sections
- About sections
- Major content blocks on colored backgrounds

---

#### Card Style 2: Top Accent Card (Important Info)
**Purpose:** Highlight important information, callouts, key messages

**Design Elements:**
- White background
- **Top accent border:** `border-t-4 border-livmo-primary`
- Rounded corners: `rounded-lg`
- Large shadow: `shadow-lg`
- Side/bottom borders: `border-x border-b border-gray-200`
- Padding: `p-6 md:p-8`

**Implementation:**
```jsx
<div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-t-4 border-livmo-primary border-x border-b border-gray-200">
  {/* Important callout or key information */}
</div>
```

**Use Cases:**
- Key takeaways
- Important notices
- Highlighted quotes
- Special announcements
- Executive summaries

---

#### Card Style 3: Left Accent Card (List Items)
**Purpose:** List items, stacked content, vertical navigation elements

**Design Elements:**
- White or subtle gradient background
- **Left accent border:** `border-l-4 border-livmo-primary`
- Rounded corners: `rounded-lg`
- Large shadow: `shadow-lg`
- Side/bottom borders: `border-r border-t border-b border-gray-200`
- Padding: `p-6 md:p-8`

**Implementation:**
```jsx
<div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-livmo-primary border-r border-t border-b border-gray-200">
  {/* List item content */}
</div>
```

**Use Cases:**
- Timeline items
- Process steps (vertical list)
- Feature lists
- FAQ items
- Stacked benefit cards

---

#### Card Style 4: Stat/Metric Card
**Purpose:** Display statistics, metrics, numbers, achievements

**Design Elements:**
- White background
- Rounded corners: `rounded-lg`
- Light border: `border border-gray-200`
- Center-aligned content
- Interactive hover: `hover:border-livmo-primary hover:shadow-md`
- Compact padding: `p-5 md:p-6`

**Implementation:**
```jsx
<div className="bg-white rounded-lg p-5 md:p-6 text-center border border-gray-200 hover:border-livmo-primary hover:shadow-md transition-all">
  <div className="text-3xl font-bold text-livmo-primary mb-2">{number}</div>
  <div className="text-sm font-semibold text-livmo-navy mb-1">{label}</div>
  <div className="text-xs text-livmo-body">{description}</div>
</div>
```

**Use Cases:**
- Statistics grids
- Metric displays
- Achievement showcases
- Network access stats
- Performance indicators

---

#### Card Style 5: Compact Info Card
**Purpose:** Compact information blocks, role descriptions, feature lists in grids

**Design Elements:**
- White background
- **Square corners:** `rounded-sm` (2px) or `rounded` (4px)
- Thicker border: `border-2 border-gray-200`
- Interactive hover: `hover:border-livmo-primary hover:shadow-md`
- Compact padding: `p-4 md:p-5`

**Implementation:**
```jsx
<div className="bg-white border-2 border-gray-200 p-4 md:p-5 rounded-sm hover:border-livmo-primary hover:shadow-md transition-all">
  <div className="inline-block px-3 py-1.5 bg-livmo-navy text-white font-bold text-xs mb-3 rounded">
    {title}
  </div>
  <p className="text-sm text-livmo-body leading-relaxed">
    {description}
  </p>
</div>
```

**Use Cases:**
- Role descriptions
- Team member cards
- Service feature grids
- Compact info blocks
- Technical specifications

---

#### Card Style 6: Data Table Container
**Purpose:** Container for data tables, financial comparables, transaction tables

**Design Elements:**
- White background
- **Square corners:** `rounded-sm`
- Light border: `border border-gray-300`
- Subtle shadow: `shadow-sm`
- Minimal padding: Let table control internal spacing

**Implementation:**
```jsx
<div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
  <table className="w-full">
    {/* Table content */}
  </table>
</div>
```

**Use Cases:**
- Comparables tables
- Transaction history tables
- Competitor analysis grids
- Financial data displays
- Any structured data table

---

#### Card Style 7: Chart Container
**Purpose:** Background container for charts and data visualizations

**Design Elements:**
- Light gray background: `bg-gray-50`
- Rounded corners: `rounded-lg`
- Light border: `border border-gray-200`
- Medium padding: `p-6 md:p-8`
- No shadow (subtle background element)

**Implementation:**
```jsx
<div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200">
  <h3 className="text-xl font-semibold text-livmo-navy mb-4">{chartTitle}</h3>
  <ResponsiveContainer>
    {/* Chart component */}
  </ResponsiveContainer>
</div>
```

**Use Cases:**
- Chart backgrounds
- Graph containers
- Data visualization frames
- Analytics displays
- Dashboard widgets

---

#### Card Style 8: Alert/Callout Card
**Purpose:** Important notices, warnings, information callouts

**Design Elements:**
- Colored background (subtle): `bg-[color]-50`
- **Left accent:** `border-l-4 border-[color]-400`
- Square corners: `rounded-sm`
- Compact padding: `p-4`
- No shadow (inline with content)

**Color Variants:**
- Info: `bg-blue-50 border-blue-400`
- Warning: `bg-yellow-50 border-yellow-400`
- Success: `bg-green-50 border-green-400`
- Error: `bg-red-50 border-red-400`

**Implementation:**
```jsx
// Info callout
<div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-sm">
  <div className="flex items-start gap-3">
    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
      {/* Icon */}
    </svg>
    <p className="text-sm text-blue-900">
      {message}
    </p>
  </div>
</div>
```

**Use Cases:**
- Important notices
- Warnings or cautions
- Success messages
- Inline alerts
- Contextual information

---

#### Card Style 9: Hero/Emphasis Card (on colored backgrounds)
**Purpose:** High-emphasis cards floating on colored section backgrounds

**Design Elements:**
- White background
- Rounded corners: `rounded-lg`
- **Heavy shadow:** `shadow-2xl`
- Generous padding: `p-8 md:p-12`
- **NO border on dark backgrounds** (navy, blue)
- Optional border on light backgrounds: `border border-gray-200`

**Implementation:**
```jsx
// On navy/dark backgrounds - NO BORDER
<Section background="navy">
  <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
    {/* High-emphasis content */}
  </div>
</Section>

// On gold/light backgrounds - WITH BORDER
<Section background="gold">
  <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 border border-gray-200">
    {/* High-emphasis content */}
  </div>
</Section>
```

**Use Cases:**
- CTA cards on colored backgrounds
- Featured content on navy sections
- Gold section emphasis cards
- Story cards on dark backgrounds
- Major content blocks needing extra emphasis

**Critical Design Rule - Cards on Dark Backgrounds:**

**✅ DO:**
- Use `shadow-2xl` for strong contrast
- Omit borders entirely on navy/dark blue backgrounds
- Use heavier shadows on hover: `hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]`
- Rely on shadow alone to separate card from background

**❌ DON'T:**
- Use `border border-gray-200` on dark backgrounds (becomes invisible)
- Use `shadow-lg` or lighter shadows (insufficient contrast)
- Mix borders and shadows on dark backgrounds

**Why:** Subtle gray borders that provide definition on white backgrounds become nearly invisible against navy or dark blue backgrounds. Heavy shadows (`shadow-2xl`) are essential for creating visual separation and making white cards "pop" off dark backgrounds.

**Example Patterns:**
```jsx
// Standard card on white section
<div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">

// Same card on navy section - remove border, increase shadow
<div className="bg-white rounded-lg shadow-2xl p-8">

// Interactive card on navy with enhanced hover
<div className="bg-white rounded-lg shadow-2xl p-8 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] transition-all">
```

---

#### Card Selection Guide

| Card Style | Best For | Visual Weight | Corners | Shadow |
|------------|----------|---------------|---------|--------|
| 1. Standard Content | Rich content, paragraphs | Heavy | rounded-lg | shadow-lg |
| 2. Top Accent | Important callouts, key info | Medium-Heavy | rounded-lg | shadow-lg |
| 3. Left Accent | Vertical lists, timelines | Medium | rounded-lg | shadow-lg |
| 4. Stat/Metric | Numbers, achievements | Light | rounded-lg | hover:shadow-md |
| 5. Compact Info | Grids, feature lists | Light | rounded-sm | hover:shadow-md |
| 6. Data Table | Tables, financial data | Light | rounded-sm | shadow-sm |
| 7. Chart Container | Visualizations, graphs | Subtle (bg) | rounded-lg | none |
| 8. Alert/Callout | Notices, warnings | Inline | rounded-sm | none |
| 9. Hero/Emphasis | Cards on colored backgrounds | Heavy | rounded-lg | shadow-2xl |

#### Universal Card Rules

**Always Include:**
- ✅ Appropriate border radius for card type
- ✅ Consistent shadow (shadow-lg or shadow-md)
- ✅ Border for definition (1px or 2px)
- ✅ Proper padding based on content density

**Best Practices:**
- Use `hover:shadow-xl` for interactive cards
- Add `transition-all` for smooth hover effects
- Maintain consistent spacing within card grids
- Use accent colors (livmo-primary) for borders when emphasizing

**Don't:**
- ❌ Don't mix card styles within the same section/grid
- ❌ Don't omit shadows (cards need depth)
- ❌ Don't use custom border widths (stick to 1px, 2px, or 4px)
- ❌ Don't use tight padding on large content blocks

### Border Radius
- **Cards (Standard):** 8px (`rounded-lg`)
- **Buttons:** 8px
- **Images:** 8px - 12px
- **Circular Elements:** 50% (full circle)

### Shadows
- **Card Standard:** `shadow-lg` - Large shadow for all content cards
- **Card Hover:** `shadow-xl` - Extra large shadow on hover
- **Floating Cards (Colored BG):** `shadow-lg` or `shadow-2xl` for primary cards
- **Elevated Elements:** `0 25px 50px -12px rgba(0, 0, 0, 0.25)`

### Responsive Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px
- **Max Container Width:** 1200px

---

## Component Usage

### Buttons

#### Primary Button
```css
background: #22668d (primary blue)
text: #ffffff (white)
padding: 12px 24px
border-radius: 8px
font-weight: 500
```

**Hover State:** Darken background by 10%

#### Secondary Button
```css
background: transparent
border: 2px solid #22668d
text: #22668d
padding: 12px 24px
border-radius: 8px
font-weight: 500
```

**Hover State:** Fill background with primary blue, text to white

#### Accent Button (Gold)
```css
background: #ffcc70 (gold)
text: #1b1f2b (navy)
padding: 12px 24px
border-radius: 8px
font-weight: 600
```

**Hover State:** Darken to #f5c05f

### Cards

#### Default Card
```css
background: #ffffff
border: 1px solid #e5e7eb
border-radius: 12px
padding: 24px
box-shadow: card
```

**Hover State:** Apply `card-hover` shadow, lift by 2px

#### Service Card
```css
background: #ffffff
border: 1px solid #8ecddd (border blue)
border-radius: 12px
padding: 32px
icon: monochrome gray (#79777c)
```

### Icons
- **Style:** Outlined/stroke-based (2px stroke width)
- **Size:** 24px x 24px (standard), 20px (small), 32px (large)
- **Color:** Monochrome (#79777c) or primary blue (#22668d)
- **Usage:** Use consistently across all sections

### Navigation
- **Style:** Clean, minimal
- **Active State:** Primary blue underline or highlight
- **Mobile:** Hamburger menu with slide-in drawer

---

## Tailwind CSS Implementation

### Using Brand Colors

```jsx
// Primary
className="bg-livmo-primary text-white"

// Headline
className="text-livmo-navy"

// Border
className="border-livmo-border"

// Gold accent
className="text-livmo-gold"

// Body text
className="text-livmo-body"

// Light backgrounds
className="bg-livmo-light-neutral"
```

### Typography Classes

```jsx
// Display
className="text-display md:text-display-mobile font-headline"

// H1
className="text-h1 md:text-h1-mobile font-headline"

// H2
className="text-h2 md:text-h2-mobile font-headline"

// Body
className="text-body font-sans"
```

### Component Classes

```jsx
// Standard Card
className="bg-white rounded-card shadow-card p-6 hover:shadow-card-hover"

// Floating Card (on colored backgrounds)
className="bg-white rounded-card shadow-2xl p-8 md:p-12"

// Section with Pattern
<Section background="navy" pattern="arrow" patternOpacity={0.08}>

// Button Primary
className="btn btn-primary" // or custom:
className="bg-livmo-primary text-white px-6 py-3 rounded-button font-medium hover:bg-opacity-90"

// Section Spacing
className="py-section md:py-section-mobile"
```

---

## Brand Applications

### Email Signatures
- Use navy (#1b1f2b) for name
- Use primary blue (#22668d) for title
- Use body gray (#79777c) for contact details
- Include small logo with gold tagline

### Presentations
- Use light neutral (#fffbf4) backgrounds
- Navy (#1b1f2b) headlines with Roboto Bold
- Body text in gray (#79777c) with Poppins Regular
- Gold (#ffcc70) for key highlights and stats

### Social Media
- Profile images: Navy background with icon in light blue
- Posts: Maintain 60% primary blue, 30% neutral, 10% gold ratio
- Headers: Use photography with logo overlay

### Print Materials
- Business Cards: Navy background, white/gold text
- Letterhead: Minimal header with logo, gold accent line
- Documents: Clean white pages with blue/gold accents

---

## Quick Reference

### Color Codes
| Name | Hex | Usage |
|------|-----|-------|
| Primary Blue | #22668d | CTAs, links, primary actions |
| Navy | #1b1f2b | Headlines, dark text |
| Border Blue | #8ecddd | Borders, light accents |
| Gold | #ffcc70 | Secondary accents, highlights |
| Body Gray | #79777c | Paragraph text |
| Light Neutral | #fffbf4 | Backgrounds |

### Font Pairings
- **Headlines:** Roboto (Bold/Medium)
- **Body:** Poppins (Regular/Medium)

### Design Tokens
```css
--color-primary: #22668d;
--color-navy: #1b1f2b;
--color-gold: #ffcc70;
--color-border: #8ecddd;
--color-body: #79777c;
--spacing-section: 64px;
--border-radius-card: 12px;
--border-radius-button: 8px;
```

---

## Implementation Examples

### Example: Navy Section with Floating Cards

```jsx
import { Section } from '@/components/design-system/Section';
import { Card } from '@/components/design-system/Card';

export const ExampleSection = () => {
  return (
    <Section id="about-livmo" background="navy" pattern="arrow" patternOpacity={0.08}>
      <div className="py-16 md:py-24">
        {/* White text on navy */}
        <h2 className="text-display md:text-display-mobile font-headline text-white mb-6 text-center">
          M&A Expertise for Tech Entrepreneurs
        </h2>
        <p className="text-xl text-livmo-border font-medium text-center mb-12">
          We combine founder empathy with institutional execution
        </p>

        {/* Floating white card */}
        <Card className="p-8 md:p-12 bg-white shadow-2xl" hover={false}>
          <p className="text-lg text-livmo-body">
            Story content goes here...
          </p>
        </Card>
      </div>
    </Section>
  );
};
```

### Example: Gold CTA Section

```jsx
export const NextStepsSection = () => {
  return (
    <Section id="next-steps" background="gold" pattern="swirl" patternOpacity={0.12}>
      <div className="py-16 md:py-20">
        {/* Navy text on gold */}
        <h2 className="text-display font-headline text-livmo-navy mb-6 text-center">
          Ready to Start Your Exit Journey?
        </h2>

        {/* White card on gold background */}
        <div className="bg-white rounded-card p-8 md:p-12 shadow-2xl">
          <Button variant="primary" href={calendlyLink} size="lg">
            Schedule Your Value Assessment
          </Button>
        </div>
      </div>
    </Section>
  );
};
```

### Example: Using Arrow PNG Asset

```jsx
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <Section background="white">
      {/* Arrow as decorative element */}
      <div className="absolute top-10 right-10 w-64 h-64 opacity-10 pointer-events-none">
        <Image
          src="/universal-assets/images/arrow-only-blue-transparent.png"
          alt=""
          width={256}
          height={256}
          className="object-contain"
        />
      </div>

      <div className="relative z-10">
        <h1>Your Hero Content</h1>
      </div>
    </Section>
  );
};
```

---

## Design System Summary

### Key Principles

1. **Alternating Rhythm**: Alternate between navy, white, and gold backgrounds to create visual flow
2. **Floating Cards**: Use white cards on colored backgrounds for emphasis and hierarchy
3. **Subtle Patterns**: Background patterns add interest without competing with content (0.05-0.12 opacity)
4. **Typography Contrast**: White/border blue on navy, navy on gold, ensure WCAG AA compliance
5. **Consistent Spacing**: Generous padding on floating cards (p-8 to p-12), consistent section spacing

### Component Inventory

**Layout Components:**
- `Section` - Main section wrapper with background and pattern support
- `Card` - Content card with optional hover effects
- `BackgroundPatterns` - Five SVG pattern variations

**Pattern Types:**
- Arrow (navy sections, brand consistency)
- Swirl (gold sections, CTAs)
- Dots (subtle backgrounds)
- Grid (structured content)
- Wave (flow sections)

**Background Options:**
- Navy (#1b1f2b) - Major sections
- Gold (#ffcc70) - CTAs, highlights
- Blue (#22668d) - Primary actions
- White - Default content
- Gray/Light - Neutral variations

**Assets:**
- Arrow PNG: `/public/universal-assets/images/arrow-only-blue-transparent.png`
- SVG Patterns: `components/design-system/BackgroundPatterns.tsx`

---

**Last Updated:** January 2025
**Maintained By:** Livmo Design Team

For questions or clarifications, contact: **go@livmo.com**
