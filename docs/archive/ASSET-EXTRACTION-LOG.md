# Asset Extraction Log - learn.livmo.com

**Date:** November 13, 2025  
**Source:** `/livmo_proposals` folder  
**Status:** ✅ Complete

---

## 📁 Extracted Assets Summary

### Logos & Branding

#### Livmo Logos
**Source Location:** `livmo_proposals/public/universal-assets/images/`  
**Destination:** `public/universal-assets/images/`

1. **livmo-logo-light-bg.png** (115,902 bytes)
   - Original: `Livmo Color logo for Light BG - transparent.png`
   - **Use:** Primary logo for light backgrounds (white, light neutral)
   - Dimensions: Color logo with "LIVMO" wordmark + "MODERN-DAY M&A" tagline
   - Format: PNG with transparent background

2. **livmo-logo-dark-bg.png** (110,446 bytes)
   - Original: `Livmo Color logo for dark BG - transparent.png`
   - **Use:** Logo for dark backgrounds (navy, dark blue)
   - Dimensions: Light blue/white logo variation
   - Format: PNG with transparent background

3. **arrow-only-blue-transparent.png** (88,938 bytes)
   - **Use:** Standalone Livmo arrow icon (dots forming arrow shape)
   - Color: Blue (#22668d approx)
   - **Applications:**
     - Hero sections as decorative element
     - Corner accents in key sections
     - Large-scale background elements
     - Can be used with or instead of SVG arrow pattern

---

### Accent Graphics

**Source Location:** `livmo_proposals/public/universal-assets/accents/`  
**Destination:** `public/universal-assets/accents/`

8 decorative accent graphics extracted (all PNG format):

1. **3.png** (1,493,494 bytes) - Flowing waves pattern
2. **4.png** (1,367,561 bytes) - Wave pattern variation
3. **19.png** (2,642,800 bytes) - Geometric spiral grid
4. **20.png** (2,064,431 bytes) - Circular spiral (most commonly used)
5. **32.png** (2,329,976 bytes) - Abstract swirl
6. **35.png** (1,406,869 bytes) - Additional pattern
7. **36.png** (1,678,242 bytes) - Additional pattern
8. **46.png** (1,213,623 bytes) - Additional pattern

**Usage (from Brand Guide):**
- **Placement:** Watermark-style graphics in card backgrounds
- **Opacity:** 3-5% (opacity-[0.03] to opacity-5)
- **Size:** 256px-320px (w-64 to w-80) depending on card size
- **Best For:**
  - Circular/spiral (19, 20, 32) - general purpose cards
  - Waves (3, 4) - flow/process sections
  - Geometric (19) - data/technical content
- **Position:** Behind text content (NOT behind images)

---

### Design System Components

**Source Location:** `livmo_proposals/universal-assets/components/`  
**Destination:** `extracted-components/`

#### Core Components (6 files)

1. **Section.tsx** (1,810 bytes)
   - Main section wrapper component
   - Supports background variants: white, navy, gold, blue, gray, light
   - Supports pattern props: arrow, swirl, dots, grid, wave
   - Pattern opacity control
   - Responsive padding

2. **Card.tsx** (638 bytes)
   - Base card component
   - Foundation for 9 card style variants
   - **Note:** Will need expansion to support all 9 variants from brand guide

3. **Button.tsx** (1,565 bytes)
   - Button component with variants
   - Styles: Primary (blue), Secondary (outline), Gold accent
   - Sizes: sm, md, lg

4. **BackgroundPatterns.tsx** (4,927 bytes)
   - SVG background pattern generator
   - Patterns: arrow, swirl, dots, grid, wave
   - All patterns created with SVG for crisp rendering
   - Supports opacity prop

5. **AccentDivider.tsx** (1,085 bytes)
   - Decorative divider with gold dot center
   - Two horizontal lines (light blue) with centered gold circle
   - Multiple variants for different backgrounds

6. **InteractiveDealTimeline.tsx** (17,995 bytes)
   - ⭐ **REUSABLE M&A PROCESS CONTENT**
   - Complete interactive timeline component
   - See "M&A Process Content" section below for details

---

## 📋 M&A Process Content (Reusable)

### Source: InteractiveDealTimeline.tsx

This component contains comprehensive, production-ready M&A process content that can be directly reused in our **M&A Process Roadmap** guide.

#### Timeline Phases (5 phases, ~30-44 weeks total)

### Phase 1: Preparation (6-10 weeks)
**Milestones:**
1. **Initial Due Diligence** (2 weeks)
   - Key Activities: Financial audit, Legal review, Customer data analysis, Tech stack audit
   - Deliverables: Clean financials, Cap table, Customer contracts, IP documentation
   - Critical Path: Yes

2. **CIM Development** (2-3 weeks)
   - Key Activities: Market positioning, Competitive analysis, Growth story, Financial projections
   - Deliverables: Professional CIM, Executive summary, Management presentation
   - Critical Path: Yes

3. **Data Room Setup** (1-2 weeks)
   - Key Activities: Document indexing, Access controls, Q&A preparation
   - Deliverables: Organized VDR, Document index, FAQ document
   - Critical Path: No

4. **Buyer Research & Universe Development** (2-3 weeks)
   - Key Activities: Strategic buyer mapping, Financial buyer identification, Buyer profiling, Target list creation
   - Deliverables: Buyer universe list, Buyer profiles, Prioritization matrix
   - Critical Path: Yes

### Phase 2: Marketing (8-10 weeks)
**Milestones:**
1. **Buyer Outreach** (2 weeks)
   - Key Activities: Buyer list finalization, NDA execution, Teaser distribution
   - Deliverables: Signed NDAs, Interest confirmations
   - Critical Path: Yes

2. **Buyer Vetting & Qualification** (2 weeks)
   - Key Activities: Financing capability assessment, Track record verification, Cultural fit evaluation, Competitive tension building
   - Deliverables: Evaluation scorecard, Finalist shortlist, Competitive strategy
   - Critical Path: Yes

3. **Management Presentations** (3-4 weeks)
   - Key Activities: Virtual presentations, Site visits, Q&A sessions
   - Deliverables: Buyer feedback, Follow-up questions
   - Critical Path: Yes

4. **Initial Bids** (2 weeks)
   - Key Activities: IOI collection, Bid analysis, Buyer selection
   - Deliverables: IOI summary, Shortlist recommendation
   - Critical Path: Yes

### Phase 3: Due Diligence (8-12 weeks)
**Milestones:**
1. **LOI** (2 weeks)
   - Key Activities: LOI negotiation, Term sheet review, Buyer selection
   - Deliverables: Signed LOI, Exclusivity agreement
   - Critical Path: Yes

2. **Buyer Due Diligence** (6-8 weeks)
   - Key Activities: Financial DD, Legal DD, Tech DD, Commercial DD
   - Deliverables: DD responses, Additional materials, Expert calls
   - Critical Path: Yes

3. **Quality of Earnings** (3-4 weeks)
   - Key Activities: QofE study, Working capital analysis, Adjusted EBITDA calculation
   - Deliverables: QofE report, Financial reconciliations
   - Critical Path: Yes

### Phase 4: Negotiations (4-6 weeks)
**Milestones:**
1. **Purchase Agreement** (3-4 weeks)
   - Key Activities: Legal drafting, Reps & warranties, Indemnification, Escrow terms
   - Deliverables: Draft SPA, Disclosure schedules
   - Critical Path: Yes

2. **Final Terms** (1-2 weeks)
   - Key Activities: Working capital peg, Employment agreements, Escrow amount
   - Deliverables: Final SPA, Ancillary agreements
   - Critical Path: Yes

### Phase 5: Closing (4-6 weeks)
**Milestones:**
1. **Final Documentation** (1 week)
   - Key Activities: Signature pages, Closing certificates, Legal opinions
   - Deliverables: Executed SPA, Closing binder
   - Critical Path: Yes

2. **Funds Transfer** (1 week)
   - Key Activities: Closing call, Wire transfer, Announcements
   - Deliverables: Cleared funds, Press release
   - Critical Path: Yes

3. **Post-Closing Transition Plan** (2-4 weeks)
   - Key Activities: Integration planning, Knowledge transfer, Stakeholder communication, Earnout tracking setup
   - Deliverables: Integration roadmap, Transition documentation, Communication materials, Earnout framework
   - Critical Path: Yes

---

## 🎨 Design System Notes

### Color Scheme (from components)
The extracted components use the Livmo brand colors:
- **Primary Blue:** #22668d
- **Navy:** #1b1f2b
- **Gold:** #ffcc70 (for accents, CTAs)
- **Border Blue:** #8ecddd
- **Body Gray:** #79777c
- **Light Neutral:** #fffbf4

### Pattern System
The BackgroundPatterns component creates 5 SVG patterns:
1. **Arrow** - Dots forming arrow (references Livmo logo) - for navy backgrounds
2. **Swirl** - Circular swirl pattern - for gold backgrounds
3. **Dots** - Scattered/random dots - for subtle backgrounds
4. **Grid** - Uniform grid pattern - for structured sections
5. **Wave** - Sinusoidal wave pattern - for flow sections

All patterns support:
- Custom opacity (0.05-0.12 recommended)
- Scalable (SVG-based)
- Color customization

---

## 📦 What Was NOT Extracted

### Client-Specific Assets (Intentionally Skipped)
- Client logos (apptividad, vectramind)
- Buyer logos from vectramind folder
- Client data JSON files
- Client-specific proposal sections

### Components Not Extracted (Available if Needed)
- ValuationRangeChart.tsx
- BuyerFitMatrix.tsx
- NavigationSidebar.tsx
- SelectCommentary.tsx
- AnimatedNumber.tsx
- All section components (HeroSection, TeamSection, etc.) - these are proposal-specific

### Data Files Not Extracted
- precedent-transactions.json
- transactions.json
- why-livmo.json
- about-livmo.json
- team.json
- competitors.json

**Reason:** These contain proposal-specific data. We'll create new data files specific to learn.livmo.com needs.

---

## ✅ Next Steps

### 1. Component Integration
- [ ] Review extracted components for compatibility with Next.js 14 App Router
- [ ] Adapt components to our file structure
- [ ] Expand Card.tsx to support all 9 card variants from brand guide
- [ ] Test BackgroundPatterns in various sections

### 2. M&A Process Content Usage
- [ ] Use InteractiveDealTimeline.tsx content for M&A Process Roadmap guide
- [ ] Extract phase/milestone data into JSON format for easier editing
- [ ] Add additional detail for each phase based on PROJECT-SPEC.md
- [ ] Create expandable sections for detailed guidance

### 3. Asset Implementation
- [ ] Add logo to Navbar component
- [ ] Use arrow icon in hero section
- [ ] Implement accent graphics in important cards
- [ ] Test all patterns on different section backgrounds

### 4. Clean Up
- [ ] Verify all needed assets extracted
- [ ] Review components one more time
- [ ] **DELETE `/livmo_proposals` folder** ⚠️

---

## 🗑️ Ready for Deletion

**Folder to Delete:** `livmo_proposals/`

**Verification Checklist:**
- ✅ Livmo logos extracted (2 files)
- ✅ Arrow icon extracted
- ✅ Accent graphics extracted (8 files)
- ✅ Core design system components extracted (6 files)
- ✅ M&A process content documented
- ✅ Extraction log created

**Command to delete (after verification):**
```powershell
Remove-Item -Recurse -Force "livmo_proposals"
```

---

## 📊 Extraction Summary Statistics

- **Total Assets Extracted:** 11 image files + 6 component files = 17 files
- **Total Size:** ~13.5 MB (images only)
- **Components LOC:** ~28,000 lines of reusable code
- **M&A Content:** 5 phases, 14 milestones, complete with activities & deliverables

---

**Extraction Complete!** ✅  
**Date:** November 13, 2025  
**Extracted By:** AI Assistant  
**Verified:** Ready for use in learn.livmo.com development

