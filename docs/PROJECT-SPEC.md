# Learn.Livmo.com - Interactive Learning Platform
## Project Specification Document

**Version:** 1.0  
**Date:** November 13, 2025  
**Project:** Interactive Learning Site for Business Owners Preparing for Exit  
**Domain:** learn.livmo.com  
**Repository:** GitHub (to be created)  
**Hosting:** Vercel

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Site Architecture](#site-architecture)
4. [Content Sections](#content-sections)
5. [Design System](#design-system)
6. [Features & Interactions](#features--interactions)
7. [User Journey](#user-journey)
8. [Technical Requirements](#technical-requirements)
9. [Development Phases](#development-phases)
10. [Success Metrics](#success-metrics)

---

## Project Overview

### Mission
Create an interactive, comprehensive learning platform that empowers business owners who want to exit NOW or LATER. For those planning to exit later, provide education on how to build value and prepare for a successful exit. Centralize all tools, guides, checklists, and best practices in one accessible location.

### Target Audience
- **Exit Now:** Founders actively preparing for exit (6-24 months timeline)
- **Exit Later:** Business owners looking to build value and increase exit potential (2-5 years timeline)
- Business owners with $1M-$50M in Revenue or ARR
- Finance/operations teams supporting M&A readiness
- Entrepreneurs seeking exit valuation insights and value-building strategies

### Key Objectives
1. Centralize all Livmo learning resources in one platform
2. Provide interactive tools and calculators
3. Guide users through exit preparation AND value-building journey
4. Educate "exit later" audience on how to systematically increase company value
5. Generate qualified leads for Livmo M&A services
6. Establish Livmo as thought leader in exits and value creation

---

## Technology Stack

### Framework & Core
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Animations:** Framer Motion

### Additional Libraries
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation (for calculators/assessments)
- **Charts:** Recharts (for data visualizations)
- **Local Storage:** Browser localStorage for progress tracking (no database)
- **SEO:** next-seo

### Backend & Data
- **Database:** None (MVP uses localStorage only)
- **Authentication:** None (fully open platform)
- **API Routes:** Next.js API routes (minimal, for calculators if needed)
- **Email:** None (Phase 1 - no email capture)

### Deployment
- **Hosting:** Vercel
- **Domain:** learn.livmo.com
- **SSL:** Automatic via Vercel
- **CDN:** Vercel Edge Network

---

## Site Architecture

### Navigation Structure

```
learn.livmo.com/
├── Home (Dashboard/Hub)
├── Tools
│   ├── SaaS Valuation Calculator (link to saasvaluation.livmo.com)
│   ├── Sellability Score Quiz
│   └── Financial Health Check
├── Guides
│   ├── SaaS Metrics Guide
│   ├── Financial Reporting Best Practices
│   ├── Legal Due Diligence Audit Kit
│   └── M&A Process Roadmap
├── Checklists
│   ├── Sellability Checklist
│   ├── Financial Reporting Checklist
│   └── Due Diligence Preparation
├── Playbooks
│   ├── Hiring & Operational Maturity Roadmap
│   ├── Buyer Profile & Pros/Cons Guide
│   └── Cash Cow to Sellable Asset
├── Resources
│   ├── Templates & Downloads
│   ├── Video Tutorials
│   └── Case Studies
└── Get Help
    ├── Book Consultation
    └── Contact Livmo
```

---

## Content Sections

### 1. Home / Learning Hub

**Purpose:** Central hub providing quick access to all learning resources with clear descriptions

**Components:**
- **Hero Section**
  - Value proposition headline: "Your Complete Exit Readiness Academy"
  - Subheadline: "Whether you're exiting now or building value for later, everything you need is here."
  - Primary CTA: Link to saasvaluation.livmo.com
  - Secondary CTA: Book consultation (Calendly)
  
- **Resource Cards Grid** (organized by category)
  - **Tools** (3 cards)
    - SaaS Valuation Calculator → External link
    - Sellability Score Quiz → Interactive assessment
    - Financial Health Check → Quick analyzer
  - **Guides** (4 cards)
    - SaaS Metrics Guide
    - Financial Reporting Best Practices
    - Legal Due Diligence Audit Kit
    - M&A Process Roadmap
  - **Checklists** (3 cards)
    - Sellability Checklist
    - Financial Reporting Checklist
    - Due Diligence Preparation
  - **Playbooks** (3 cards)
    - Hiring & Operational Maturity Roadmap
    - Buyer Profile & Pros-Cons Guide
    - Cash Cow to Sellable Asset
  - **Resources** (1 card)
    - Templates & Downloads Hub

- **Call-to-Action Section**
  - Gold background with pattern
  - "Ready to Start Your Exit Journey?" headline
  - Book consultation button
  - Contact information

**Design:**
- Clean, simple layout - no complex dashboard features
- Navy hero section with arrow pattern
- White background for resource grid
- Each card: Image/icon, title, 2-3 sentence description, "Learn More" button
- Card Style 1 (Standard Content) for resource cards
- Gold CTA section at bottom
- No progress tracking widgets (data stored in localStorage per page)

---

### 2. SaaS Valuation Calculator

**Type:** External Link  
**URL:** https://saasvaluation.livmo.com/

**Integration:**
- Prominent card on homepage
- "Calculate Your Valuation" CTA button
- Brief description: "Interactive calculator to assess your SaaS business exit readiness and valuation"
- Opens in new tab
- Track click-through in analytics

**Design:**
- Featured card with gold accent border
- Calculator icon (Lucide: Calculator)
- Screenshot preview of tool

---

### 3. SaaS Metrics Guide

**Type:** Interactive Multi-Page Guide  
**Source Material:** PDF - The_SaaS_Exit_Valuation_Guide-Fundamentals_Metrics_and_Drivers.pdf

**Structure:**
```
3.1 Introduction to SaaS Metrics
3.2 Growth Metrics
    - ARR Growth Rate
    - MRR/ARR Fundamentals
    - Customer Acquisition Rate
3.3 Retention Metrics
    - GRR (Gross Revenue Retention)
    - NRR (Net Revenue Retention)
    - Logo Retention
    - Churn Analysis
3.4 Efficiency Metrics
    - LTV:CAC Ratio
    - CAC Payback Period
    - Magic Number
    - S&M % of Revenue
3.5 Profitability Metrics
    - Gross Margin
    - EBITDA Margin
    - Rule of 40
3.6 Advanced Metrics
    - ARR per Employee
    - Expansion ARR %
    - Customer Concentration
3.7 Benchmarking Your Metrics
    - Industry standards by ARR bracket
    - Top quartile vs. median performance
3.8 Interactive Calculators
    - Calculate your LTV:CAC
    - Calculate your Rule of 40
    - CAC Payback Period calculator
```

**Features:**
- Interactive calculators embedded within guide
- Visual charts showing benchmarks
- Real-time calculations as users input data
- Downloadable PDF version
- Bookmarking capability
- Progress tracking
- Share specific sections

**Design:**
- Left sidebar navigation (sticky)
- Main content area with generous padding
- Interactive calculation cards with gold borders
- Chart visualizations in gray-50 containers
- "Quick Reference" callout boxes (Card Style 8 - Alert/Callout)
- Bookmark icons for saving sections

---

### 4. Sellability Checklist

**Type:** Interactive Checklist  
**Source Material:** Business_Owner_Sellability_Checklist_-_Regular_Business.pdf

**Structure:**
```
4.1 Financial Preparedness ✓
    □ Clean financial statements (3 years)
    □ GAAP-compliant accounting
    □ Reconciled books
    □ Clear add-backs documented
    □ Financial projections prepared

4.2 Business Documentation ✓
    □ Updated corporate documents
    □ Shareholder agreements current
    □ IP properly assigned
    □ Key contracts documented
    □ Compliance records organized

4.3 Operations ✓
    □ SOPs documented
    □ Processes systematized
    □ Team not owner-dependent
    □ Customer relationships transferred
    □ Technology platform modern

4.4 Revenue Quality ✓
    □ Recurring revenue >80%
    □ Customer concentration <20% per customer
    □ Predictable cash flow
    □ Low churn rate
    □ Expansion revenue growing

4.5 Growth Potential ✓
    □ TAM clearly defined
    □ Market position defensible
    □ Product differentiation clear
    □ Growth trajectory positive
    □ Competitive moat established

4.6 Team & Leadership ✓
    □ Management team in place
    □ Key person risk mitigated
    □ Compensation at market rates
    □ Employment agreements signed
    □ Retention incentives planned
```

**Features:**
- Interactive checkboxes with local storage persistence
- Progress bar showing completion %
- Category scores (Financial: 80%, Operations: 60%, etc.)
- Expandable sections with detailed guidance
- "Why this matters" explanations for each item
- "How to fix" action steps for unchecked items
- Download PDF summary of your results
- Email results to yourself
- Share with advisors

**Design:**
- Card Style 3 (Left Accent) for each category
- Progress rings showing category completion
- Green checkmarks for completed items
- Yellow warning icons for critical unchecked items
- Expandable accordion style for guidance
- Gold CTA section at bottom: "Get Expert Help"

---

### 5. Financial Reporting Best Practices

**Type:** Comprehensive Interactive Toolkit  
**Source Material:** Multiple sources including Maxio content and custom templates

**Structure:**

#### 5.1 Introduction
- Purpose of the Toolkit
- Why Financial Accuracy = Higher Valuation
- How Clean Books Accelerate Due Diligence

#### 5.2 Fundamental Accounting Concepts
- P&L vs. Balance Sheet
- Cash vs. Accrual Accounting
- Revenue Recognition (GAAP)
- Add-Backs Explained
- SDE vs. Adjusted EBITDA

#### 5.3 Income Statement Deep-Dive
- Revenue Segmentation
  - Recurring vs. Non-Recurring
  - GAAP Compliance Checklist
- Cost of Goods Sold (COGS)
  - What should be in COGS
  - What shouldn't (common mistakes)
  - Interactive COGS classifier tool
- Gross Margin Analysis
  - Calculator: Input revenue & COGS → Get margin %
  - Benchmark comparisons
- Operating Expenses (OpEx)
  - S&M, R&D, G&A breakdown
  - One-off expense identification
  - Owner expense categorization
- Net Profit & Flow-Through

#### 5.4 Reconciliation Checklist
- Bank-to-Book Reconciliation
- ARR/MRR vs. Deposits
- Prepaids & Deferrals Roll-forwards
- AR vs. Revenue Booked
- Interactive reconciliation tracker

#### 5.5 Chart of Accounts Template
- Downloadable Excel template
- Sample Chart of Accounts for SaaS
- Instructions for customization
- Best practices for account structure

#### 5.6 Revenue Recognition Policy Template
- Downloadable template
- Sample policy for SaaS
- How to implement
- Common pitfalls to avoid

#### 5.7 SaaS Metrics Template
- Downloadable Excel template
- All key metrics in one place
- Formulas pre-built
- Instructions for use

#### 5.8 Variance Analysis
- Template for budget vs. actual
- Revenue variance analysis
- Expense variance analysis
- Root-cause investigation workflow
- Interactive variance calculator

#### 5.9 Month-End Close Calendar
- Pre-close tasks checklist
- Close week schedule (RACI matrix)
- Post-close follow-up
- Downloadable calendar template

#### 5.10 Data Integrity Audit Plan
- Spot-check sampling methodology
- Journal-entry review process
- Segregation-of-duties audit
- Issue tracking & remediation
- Downloadable audit tracker

#### 5.11 Common Mistakes & Hot Tips
- "Consulting" Catch-All Traps
- Owner-Expense Categorization Best Practices
- Quick-Win Blind-Spot Closures
- Red Flags Buyers Look For
- Real examples from M&A deals

#### 5.12 Templates & Downloads
- Bank reconciliation spreadsheet
- AR aging template
- Deferrals roll-forward template
- Variance analysis workbook
- Month-end checklist
- Audit plan tracker
- Sample automation scripts (QuickBooks/Xero)

#### 5.13 Next Steps
- Continuous improvement cadence
- Training resources for teams
- Prepare for buyer Q&A
- Mock diligence sessions
- CTA: Join monthly office hours

**Features:**
- Interactive calculators for each concept
- Step-by-step guided workflows
- Downloadable templates (Excel, PDF)
- Video explanations for complex topics
- Real-world examples from deals
- "Red Flag Detector" tool (input P&L → get issues flagged)
- Progress tracking through sections
- Printable summary reports
- Links to Google Drive folder with templates

**Design:**
- Long-form content with sticky sidebar TOC
- Card Style 1 (Standard Content) for text sections
- Card Style 2 (Top Accent) for "Important" callouts
- Card Style 8 (Alert) for red flags and warnings
- Card Style 7 (Chart Container) for calculators
- Interactive elements with gold accent colors
- Downloadable resources as cards with download icons
- Navy background sections for major topic breaks

---

### 6. Legal Due Diligence Audit Kit

**Type:** Checklist & Document Tracker  
**Purpose:** Help owners organize corporate docs, IP filings, contracts for buyer diligence

**Structure:**
```
6.1 Introduction to Legal Due Diligence
    - What buyers will request
    - Common gaps and how to fix them
    - Timeline for preparation

6.2 Corporate Documents Checklist
    □ Articles of Incorporation
    □ Bylaws
    □ Shareholder Agreements
    □ Board Meeting Minutes (3 years)
    □ Capitalization Table
    □ Stock Ledger
    □ Subsidiary Documentation

6.3 Intellectual Property
    □ Patent filings & status
    □ Trademark registrations
    □ Copyright registrations
    □ Domain name ownership
    □ IP assignment agreements (employees/contractors)
    □ License agreements (inbound/outbound)

6.4 Key Contracts
    □ Customer contracts (top 20)
    □ Vendor/supplier agreements
    □ NDAs (mutual and one-way)
    □ Partnership agreements
    □ Lease agreements
    □ Employment agreements (key employees)
    □ Consulting agreements

6.5 Assignment & Change-of-Control Clauses
    - How to review contracts for deal-breakers
    - Interactive clause scanner
    - Sample language for amendments

6.6 Compliance & Regulatory
    □ Business licenses & permits
    □ Industry-specific certifications
    □ Privacy policy (GDPR, CCPA)
    □ Data security certifications (SOC 2, ISO)
    □ Insurance policies

6.7 Clean-Up Workflows
    - Priority 1: Must-fix before LOI
    - Priority 2: Fix during diligence
    - Priority 3: Disclose and explain
    - Action plan templates

6.8 Document Organization System
    - Folder structure for data room
    - Naming conventions
    - Version control best practices
    - Virtual data room setup guide

6.9 Tools & Templates
    - Contract summary spreadsheet
    - IP audit tracker
    - Document checklist tracker
    - Clean-up action plan template
```

**Features:**
- Interactive checklists with document upload tracking
- Status indicators (Complete, In Progress, Missing, Not Applicable)
- Priority tagging system
- Document version tracking
- Collaboration features (share with legal counsel)
- Automated reminders for incomplete items
- Export to PDF for data room index
- Integration suggestion: DocSend or Dropbox for actual file storage

**Design:**
- Dashboard view with completion statistics
- Card Style 3 (Left Accent) for each category
- Color-coded status badges (green/yellow/red)
- Expandable sections for detailed guidance
- Document upload indicators (not actual file storage)
- Progress bars for each section
- Gold CTA: "Need Legal Help? Connect with Our Network"

---

### 7. Hiring & Operational Maturity Roadmap

**Type:** Assessment + Action Plan  
**Purpose:** Gap-analysis and improvement roadmap for operations and team

**Structure:**
```
7.1 Operational Maturity Assessment
    - Self-assessment quiz (20 questions)
    - Scoring: Ad Hoc → Repeatable → Defined → Managed → Optimized
    - Compare to benchmark for your stage

7.2 Core Process Documentation
    □ Sales process SOP
    □ Customer onboarding SOP
    □ Customer support SOP
    □ Product development process
    □ Financial close process
    □ HR/recruiting process
    - SOP template library (downloadable)

7.3 RACI Charts for Key Functions
    - What is a RACI chart?
    - Interactive RACI builder
    - Templates for each department
    - Examples from successful exits

7.4 Organizational Structure
    - Current vs. required org chart for exit
    - Key roles to hire before exit
    - Hiring timeline calculator
    - Job description templates

7.5 Talent Retention Strategy
    □ Retention bonuses planned
    □ Equity incentives structured
    □ Stay bonus agreements drafted
    □ Key person insurance in place
    □ Communication plan for announcement
    - Template: Stay Bonus Agreement
    - Calculator: Retention bonus modeling

7.6 Compliance Checklist
    □ HR policies documented
    □ Employee handbook current
    □ I-9 forms complete
    □ Background checks on file
    □ Non-compete agreements (where legal)
    □ Data security training completed
    - Compliance calendar
    - State-by-state employment law guide

7.7 Buyer-Ready Operations Criteria
    - What buyers evaluate
    - Scoring rubric
    - Gap analysis tool
    - 90-day action plan generator

7.8 Templates & Resources
    - SOP template library (Word/Google Docs)
    - RACI chart templates (Excel)
    - Org chart templates (PowerPoint)
    - Job description library
    - Stay bonus agreement template
    - HR policy templates
```

**Features:**
- Interactive maturity assessment with instant scoring
- Personalized gap analysis report
- Automated 90-day action plan generation
- Progress tracking against action plan
- Downloadable templates for all documents
- Video walkthroughs for complex topics
- Benchmarking against similar companies
- Share results with team/board

**Design:**
- Assessment: Quiz-style interface with progress bar
- Results: Score visualization (gauge chart)
- Gap analysis: Side-by-side comparison chart
- Action plan: Gantt-style timeline visualization
- Templates: Card grid with download buttons
- Card Style 4 (Stat/Metric) for scoring displays
- Card Style 1 (Standard) for content sections

---

### 8. Buyer Profile & Pros-Cons Guide

**Type:** Educational Guide + Interactive Matcher  
**Purpose:** Help owners understand different buyer types and find best fit

**Structure:**
```
8.1 Introduction
    - Why buyer type matters
    - How buyer type affects deal terms, timeline, culture
    - Aligning your goals with buyer motivations

8.2 Strategic Buyers (Corporations)
    - Who they are
    - What they value most
    - Typical deal structure
    - Timeline expectations
    - Pros and Cons
    - Red flags to watch for
    - Real deal examples

8.3 Financial Buyers (Private Equity)
    - Who they are
    - What they value most
    - Typical deal structure (platform vs. add-on)
    - Timeline expectations
    - Pros and Cons
    - Roll-over equity expectations
    - Management expectations post-close
    - Real deal examples

8.4 Individual/Search Fund Buyers
    - Who they are
    - What they value most
    - Typical deal structure
    - Timeline expectations
    - Pros and Cons
    - Financing considerations
    - Real deal examples

8.5 Competitive/Acqui-Hire Buyers
    - When this makes sense
    - What they value most
    - Typical deal structure
    - Pros and Cons

8.6 Interactive Buyer Matcher
    - Answer questions about priorities:
      - Maximum purchase price importance
      - Timeline urgency
      - Desire to stay involved
      - Team retention importance
      - Culture preservation importance
      - Growth capital needs
    - Algorithm recommends best buyer type fit
    - Detailed reasoning for recommendation

8.7 Deal Terms by Buyer Type
    - Comparison table:
      - Typical multiples
      - Cash vs. stock
      - Earnouts frequency
      - Employment requirements
      - Timeline to close
      - Due diligence intensity

8.8 Case Studies
    - Strategic acquisition success story
    - PE platform deal walkthrough
    - Individual buyer smooth exit
    - Warning tale: Wrong buyer fit

8.9 Preparing for Each Buyer Type
    - What to emphasize in CIM
    - Questions to ask buyers
    - Red flags in LOI
    - Negotiation leverage points
```

**Features:**
- Interactive buyer matcher quiz
- Side-by-side comparison tool (compare 2-3 buyer types)
- Filter deal examples by your criteria
- Downloadable buyer evaluation scorecard
- Questions to ask each buyer type (printable)
- Red flag checklist for each type
- Share results with advisors
- CTA: "Ready to explore buyers? Book a consultation"

**Design:**
- Quiz interface for buyer matcher
- Comparison table with highlight on hover
- Card grid for buyer type overviews (Card Style 5 - Compact Info)
- Pros/cons displayed in two columns (green checkmarks/red x's)
- Case studies in Card Style 1 (Standard Content)
- Interactive element: Toggle between buyer types
- Navy background for major sections
- Gold background for matcher results

---

### 9. M&A Process Roadmap

**Type:** Visual Timeline + Stage-by-Stage Guide  
**Purpose:** Demystify the M&A process from prep to close

**Structure:**
```
9.1 The Complete M&A Journey
    - Visual timeline (12-24 months)
    - Phases overview
    - Time investment by phase
    - Key stakeholders involved

9.2 Phase 0: Preparation (3-12 months before going to market)
    - Clean up financials
    - Organize documents
    - Build management team
    - Develop growth story
    - Complete readiness checklists
    - Checklist: Are you ready?

9.3 Phase 1: Preparation for Market (1-2 months)
    - Select M&A advisor
    - Prepare CIM (Confidential Information Memorandum)
    - Build data room
    - Develop buyer list
    - Set timeline and process
    - Milestone checklist

9.4 Phase 2: Marketing & Outreach (2-4 weeks)
    - Teaser distribution
    - NDA execution
    - CIM distribution
    - Initial buyer calls
    - What to expect: call volume, questions, feedback
    - Tips for managing confidentiality

9.5 Phase 3: Initial Offers & IOIs (2-3 weeks)
    - IOI evaluation criteria
    - Comparing non-binding offers
    - Deciding who advances to next stage
    - Red flags in IOIs
    - Sample IOI annotated
    - How to negotiate at this stage

9.6 Phase 4: Management Meetings (2-4 weeks)
    - Preparing your presentation
    - What buyers will ask
    - Site visits and due diligence kickoff
    - Building rapport
    - Dos and don'ts
    - Presentation template

9.7 Phase 5: LOI Negotiation (1-2 weeks)
    - Key LOI terms explained
      - Purchase price and structure
      - Earnout provisions
      - Exclusivity period
      - Due diligence scope
      - Conditions to close
    - Negotiation strategies
    - Red flags in LOIs
    - Sample LOI annotated
    - When to walk away

9.8 Phase 6: Due Diligence (4-8 weeks)
    - What buyers will review (checklist)
    - Financial diligence deep-dive
    - Legal diligence deep-dive
    - Technical diligence deep-dive
    - Commercial diligence
    - Management interviews
    - Responding to diligence requests
    - Common issues and how to address
    - How to keep business running during diligence

9.9 Phase 7: Definitive Agreement (2-4 weeks)
    - Purchase Agreement negotiation
    - Key terms:
      - Reps & warranties
      - Indemnification
      - Escrow provisions
      - Non-compete
      - Employment agreement
    - Working with legal counsel
    - Red lines and negotiation
    - Sample purchase agreement overview

9.10 Phase 8: Closing (1-2 weeks)
    - Final tasks before closing
    - Closing checklist
    - Wire transfer day
    - Transition planning
    - Employee communication
    - Customer communication
    - Celebration!

9.11 Phase 9: Post-Close Integration (3-6 months)
    - Transition services agreement
    - Knowledge transfer
    - Working with new owners
    - Earnout period management
    - When and how to exit

9.12 Common Deal-Killer Traps
    - Issues that blow up deals
    - How to prevent them
    - How to recover if they occur
    - Real examples

9.13 Tips to Keep Momentum
    - Managing timeline pressure
    - Keeping team motivated
    - Maintaining business performance
    - Communication strategies

9.14 Tools & Templates
    - Process timeline (Gantt chart)
    - Data room index template
    - IOI comparison spreadsheet
    - LOI term sheet template
    - Due diligence response tracker
    - Closing checklist
```

**Features:**
- Interactive timeline (click stages for details)
- Progress tracker (if user is in active deal)
- Checklists for each phase
- Document templates for each stage
- Time estimator tool (input your specifics → get custom timeline)
- Video walkthroughs for complex stages
- Glossary of M&A terms (inline definitions)
- FAQ section for each phase
- Printable one-page roadmap summary
- CTA: "Get expert guidance through your deal"

**Design:**
- Visual timeline with milestone markers
- Click to expand each phase
- Card Style 3 (Left Accent) for each phase detail
- Progress indicators for checklist completion
- Timeline visualization using Recharts or custom SVG
- Phase cards with icon representing each stage
- Navy background for timeline section
- Gold accents for milestone achievements
- Download buttons for templates (gold buttons)

---

### 10. Hacks to Turn Your Cash Cow into a Sellable Asset

**Type:** Action-Oriented Guide  
**Purpose:** Practical steps to transform lifestyle business into exit-ready company

**Structure:**
```
10.1 Introduction
    - Cash cow vs. sellable asset: What's the difference?
    - Why buyers discount lifestyle businesses
    - The transformation roadmap

10.2 Financial Clean-Up Hacks
    - Separate personal from business expenses
      - Common personal expenses hidden in business:
        * Personal vehicle expenses
        * Family cell phones
        * Home office (excessive)
        * Travel (personal mixed with business)
        * Entertainment
      - How to properly reclassify
      - Creating add-back documentation
    - Clean up "Other Expenses" category
      - What's hiding in there?
      - Proper account classification
      - Before/after examples
    - Owner pay structure optimization
      - W-2 vs. contractor payments
      - Market-rate compensation documentation
      - How buyers view owner compensation
      - Adjusting for add-backs
    - Interactive tool: Personal expense identifier
      - Upload P&L → identifies likely personal expenses
      - Generates add-back documentation
      - Calculates adjusted EBITDA

10.3 De-Risking Owner Dependence
    - Assess your owner-dependence score
    - Hire or empower a general manager
    - Document what's in your head
    - Transfer customer relationships
    - Build a sales team (if you're the rainmaker)
    - Action plan: 6-month de-risking roadmap

10.4 Systematize Operations
    - Document your processes (SOP templates)
    - Implement project management tools
    - Create training materials
    - Build repeatable sales process
    - Automate wherever possible
    - Quick wins for systematization

10.5 Improve Revenue Quality
    - Shift from project to recurring revenue
      - Strategies for your industry
      - Pricing model transitions
      - Case studies
    - Reduce customer concentration
      - When one customer is >20% of revenue
      - Diversification strategies
      - Timeline to rebalance
    - Implement contracts for all customers
      - Why contracts matter to buyers
      - Template library
      - How to retrofit existing customers

10.6 Growth Story Development
    - Why buyers need to see growth potential
    - Building your 3-year projection
    - Identifying growth levers
    - Market opportunity quantification
    - Competitive differentiation
    - Growth story template

10.7 Clean Up Cap Table & Legal
    - Entity structure optimization
    - Shareholder agreement updates
    - IP assignment from owner to company
    - Outstanding equity grants/options
    - Legal entity clean-up checklist

10.8 Technology & Product Modernization
    - Assess technical debt
    - Prioritize updates that impact valuation
    - Security & compliance investments
    - Documentation improvements
    - Quick wins vs. long-term investments

10.9 Before/After Transformations
    - Real case studies:
      - Case 1: Owner-dependent service business → sellable platform
      - Case 2: Cash cow with messy books → clean acquisition target
      - Case 3: Stagnant SMB → growth story that sold for premium
    - Lessons learned
    - Timeline and investment required

10.10 90-Day Quick-Start Plan
    - Weeks 1-4: Financial clean-up
    - Weeks 5-8: Documentation & systems
    - Weeks 9-12: Team & de-risking
    - Downloadable action plan
    - Progress tracker

10.11 Tools & Resources
    - Personal expense classifier tool
    - Owner-dependence assessment
    - SOP template library
    - Cap table review checklist
    - Growth projection template
    - Before/after valuation estimator
```

**Features:**
- Interactive assessment quizzes
- Personalized transformation roadmap
- Before/after valuation calculator
  - Input current state → see discounts applied
  - Input improved state → see valuation uplift
  - Quantify ROI of improvements
- Progress tracker for action items
- Downloadable templates
- Video tutorials for complex transformations
- Expert tips and real stories
- CTA: "Get help transforming your business"

**Design:**
- Assessment: Quiz interface
- Before/after: Side-by-side comparison cards
- Action items: Checklist interface (Card Style 3 - Left Accent)
- Case studies: Card Style 1 (Standard Content)
- Interactive calculators: Card Style 7 (Chart Container)
- Transformation examples: Before/after slider component
- Progress tracking: Visual roadmap with checkpoints
- Navy background for major sections
- Gold CTAs for action items

---

## Design System

### Brand Colors (from BRAND-GUIDE.md)

#### Primary Colors
- **Primary Blue:** `#22668d` - CTAs, links, headers
- **Navy:** `#1b1f2b` - Headlines, dark text
- **Border Blue:** `#8ecddd` - Borders, dividers, accents

#### Secondary Colors
- **Gold:** `#ffcc70` - Tagline, CTAs, highlights
- **Light Gold:** `#fceaca` - Light backgrounds, subtle highlights

#### Neutrals
- **Body Gray:** `#79777c` - Body copy, secondary text
- **Light Neutral:** `#fffbf4` - Page backgrounds, card backgrounds

### Typography

#### Fonts
- **Headlines:** Roboto (Regular 400, Medium 500, Bold 700)
- **Body:** Poppins (Regular 400, Medium 500, Semi-Bold 600)

#### Type Scale
- **Display:** 48px desktop / 32px mobile
- **H1:** 36px desktop / 28px mobile
- **H2:** 24px desktop / 20px mobile
- **Body:** 16px desktop / 14px mobile

### Layout Patterns

#### Section Backgrounds
Alternate between:
1. **Navy background** (#1b1f2b) with arrow pattern → white floating cards
2. **White background** → colored cards or elements
3. **Gold background** (#ffcc70) with swirl pattern → white floating cards
4. Repeat

#### Background Patterns
- **Arrow pattern:** Navy sections (opacity: 0.08)
- **Swirl pattern:** Gold sections (opacity: 0.12)
- **Dots pattern:** Subtle backgrounds (opacity: 0.05-0.08)

#### Card Styles
1. **Standard Content Card:** White, rounded-lg, shadow-lg, border-gray-200
2. **Top Accent Card:** border-t-4 border-primary (important info)
3. **Left Accent Card:** border-l-4 border-primary (list items)
4. **Stat/Metric Card:** Centered, hover effects (statistics)
5. **Compact Info Card:** Smaller, for grids
6. **Hero/Emphasis Card:** shadow-2xl on colored backgrounds
7. **Chart Container:** bg-gray-50 for data visualizations
8. **Alert/Callout Card:** Colored backgrounds for notices

### Components

#### Buttons
```jsx
// Primary Button
className="bg-[#22668d] text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90"

// Secondary Button
className="border-2 border-[#22668d] text-[#22668d] px-6 py-3 rounded-lg font-medium hover:bg-[#22668d] hover:text-white"

// Gold Accent Button
className="bg-[#ffcc70] text-[#1b1f2b] px-6 py-3 rounded-lg font-semibold hover:bg-[#f5c05f]"
```

#### Decorative Elements
- Accent Divider: Two horizontal lines with centered gold dot
```jsx
<div className="flex items-center justify-center gap-4 mb-6">
  <div className="h-px w-12 bg-[#8ecddd]"></div>
  <div className="w-2 h-2 rounded-full bg-[#ffcc70]"></div>
  <div className="h-px w-12 bg-[#8ecddd]"></div>
</div>
```

### Spacing
- **Section padding:** 64px desktop / 32px mobile
- **Card padding:** 24px-32px standard / 32px-48px floating cards
- **Grid gap:** 24px-32px
- **Max container width:** 1200px

---

## Features & Interactions

### Core Features

#### 1. Progress Tracking System (localStorage)
- Track completion of guides, checklists, assessments using browser localStorage
- Progress saved per-page (e.g., checklist completion stored locally)
- No central dashboard - progress shown within each tool/section
- Visual progress indicators on individual pages (rings, bars, percentages)
- No PDF export in Phase 1 (can add later)

#### 2. Interactive Calculators
- **Valuation Impact Calculator:** Show how improvements increase valuation
- **LTV:CAC Calculator:** Real-time calculation with benchmarking
- **Rule of 40 Calculator:** Input growth + margin → see score
- **CAC Payback Calculator:** Months to payback calculation
- **Retention Bonus Modeler:** Plan retention costs
- **Timeline Estimator:** Custom M&A timeline based on inputs
- **Add-Back Documentation Generator:** Identify and document adjustments
- All calculators save results, exportable to PDF

#### 3. Assessment Tools
- **Sellability Score:** Comprehensive assessment → numerical score + grade
- **Operational Maturity Assessment:** 5-level maturity model scoring
- **Owner-Dependence Score:** Identify dependencies and risks
- **Financial Health Check:** Quick analysis of financial readiness
- **Buyer Type Matcher:** Recommend best buyer profile
- All assessments generate PDF reports with recommendations

#### 4. Checklists & Trackers
- Interactive checkboxes with persistence
- Status indicators (Complete, In Progress, Not Started)
- Priority tagging (Critical, Important, Nice-to-Have)
- Due date setting and reminders
- Notes field for each item
- Export to Excel or PDF
- Share with team members

#### 5. Templates & Downloads
- Organized template library on dedicated page
- Direct download links (no preview in Phase 1)
- Multiple formats (Excel, Word, PDF, or external links)
- Usage instructions for each template
- Example/sample data included where applicable
- No download tracking in Phase 1

#### 6. Video Tutorials
- **Not included in Phase 1**
- May be added in future phases

#### 7. Bookmarking & Favorites
- Simple localStorage-based bookmarking
- Store favorite pages/sections locally
- Quick access list (client-side only)
- No sharing features in Phase 1

#### 8. Search Functionality
- **Phase 2 feature**
- Phase 1: Clear navigation and organized homepage is sufficient

#### 9. Sharing & Collaboration
- **Phase 2 feature**
- Phase 1: Standard URL sharing (all pages are public)

#### 10. Personalization
- **Phase 2 feature** (requires authentication)
- Phase 1: Universal content for all users

#### 11. Analytics & Insights (Internal)
- Basic Vercel Analytics (if available on free tier)
- Track page views and navigation
- Monitor consultation link clicks
- Advanced analytics deferred to Phase 2

#### 12. Lead Generation
- Strategic CTA placement throughout site
- "Book a Consultation" buttons linking to Calendly
- Calendly Link: https://go.livmo.com/meetings/go-livmo/
- No email capture in Phase 1
- No newsletter signup in Phase 1
- No content gating - fully open platform

### Technical Features

#### Responsive Design
- Mobile-first approach
- Tablet-optimized layouts
- Desktop experience with full feature set
- Touch-friendly interactions
- Optimized for all screen sizes

#### Performance
- Fast page loads (<2s)
- Image optimization (Next.js Image component)
- Code splitting
- Lazy loading for heavy components
- CDN delivery via Vercel Edge

#### SEO Optimization
- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data (JSON-LD)
- Semantic HTML
- XML sitemap
- robots.txt
- Internal linking strategy

#### Accessibility
- WCAG AA compliance
- Keyboard navigation
- Screen reader support
- Sufficient color contrast
- Alt text for images
- ARIA labels where appropriate

#### Security
- HTTPS only
- Input validation
- XSS protection
- CSRF protection
- Rate limiting on API endpoints
- Secure authentication (if implemented)

---

## User Journey

### Journey Map

#### New Visitor
1. **Land on homepage** via Google search, social media, or livmo.com referral
2. **See value proposition** and overview of resources
3. **Browse content sections** or take assessment quiz
4. **Engage with interactive tool** (calculator, checklist, etc.)
5. **See personalized recommendations** based on interactions
6. **Download template or save progress** (email capture)
7. **Continue learning** through multiple sessions
8. **Book consultation** when ready for expert help

#### Returning User
1. **Return to dashboard** showing saved progress
2. **Continue where left off** in guide or checklist
3. **Complete assessment** or calculator
4. **Download additional resources**
5. **Share content** with advisor or team member
6. **Reach completion milestone** → celebrate + CTA
7. **Book consultation** or **re-engage** with new content

### Conversion Funnels

#### Primary Funnel: Assessment → Consultation
1. Take Sellability Score assessment
2. Receive score + detailed report
3. See gaps and recommendations
4. Engage with specific guides to address gaps
5. See "Get Expert Help" CTA
6. Book consultation

#### Secondary Funnel: Tool Usage → Consultation
1. Use Valuation Impact Calculator
2. See potential valuation increase with improvements
3. Explore guides for how to make improvements
4. See timeline estimator → realize complexity
5. CTA: "Get expert guidance to accelerate your exit"
6. Book consultation

#### Tertiary Funnel: Content Consumption → Newsletter
1. Read multiple guides
2. See newsletter signup CTA
3. Subscribe for ongoing tips
4. Receive email nurture sequence
5. Return to site from email links
6. Eventually book consultation

---

## Technical Requirements

### Phase 1: MVP (Launch)

#### Homepage/Hub
- Hero section with value proposition
  - "Exit Now or Build Value for Later"
  - Clear messaging for both audiences
- Resource cards grid (organized by category: Tools, Guides, Checklists, Playbooks)
- Each card: icon/image, title, description, "Learn More" link
- CTA section: Book consultation (Calendly link)
- Simple navigation - no dashboard features

#### Navigation
- Top navbar with logo, main menu, CTA button
- Mobile hamburger menu
- Footer with links and contact info

#### Content Pages
- 3 priority sections fully built:
  1. SaaS Metrics Guide (interactive)
  2. Sellability Checklist (interactive)
  3. Financial Reporting Best Practices
- Static content for other sections (v1)
- Responsive layout
- Print-friendly styling

#### Interactive Features (MVP)
- Basic calculators (3-5 key ones: LTV:CAC, Rule of 40, CAC Payback)
- Interactive checklists with localStorage persistence
- Progress tracking per-page using localStorage (no central dashboard)
- Template downloads (direct links or embedded files)

#### Technical
- Next.js 14 app (App Router)
- TypeScript
- Tailwind CSS styling (Livmo brand colors)
- Shadcn/ui components
- Framer Motion (subtle, professional animations)
- localStorage for all data persistence (no database)
- Responsive design (mobile-first)
- SEO basics (meta tags, sitemap, structured data)
- Basic analytics (if available on Vercel free tier)
- Fast performance (<2s load time)
- Deployed to Vercel
- Custom domain (learn.livmo.com)

### Phase 2: Enhanced Features (Future - If Needed)

#### Potential Additions (TBD based on user feedback)
- User authentication (if requested)
- Progress dashboard (if needed)
- Video tutorials (if we produce them)
- Advanced calculators with PDF export
- Email capture and newsletter
- Global search functionality
- Analytics and tracking improvements
- Template library expansion

### Phase 3: Advanced Platform (Not Planned)

**Note:** Advanced features (AI, community, premium content, integrations) are not currently planned. Focus is on delivering high-quality, free, open learning resources.

---

## Development Phases

### Phase 1: Foundation (Weeks 1-2)
**Goal:** Project setup, design system, basic navigation, extract assets

**Tasks:**
- [ ] **Extract assets from `/livmo_proposals`:**
  - [ ] Livmo logo files (all variations)
  - [ ] Arrow icon (blue transparent background)
  - [ ] Any universal accent graphics
  - [ ] Review M&A process content in proposal for reuse
  - [ ] Document extracted assets in README
  - [ ] **DELETE entire `/livmo_proposals` folder**
- [ ] Create GitHub repository (learn-livmo)
- [ ] Initialize Next.js 14 project with TypeScript
- [ ] Set up Tailwind CSS with custom Livmo theme (colors from BRAND-GUIDE.md)
- [ ] Implement Shadcn/ui base components
- [ ] Create design system components (Section, Card, Button, AccentDivider)
- [ ] Build layout components (Navbar, Footer, Container)
- [ ] Implement background patterns (arrow, swirl, dots) as SVG
- [ ] Create homepage structure with resource cards grid
- [ ] Set up Vercel project and deployment pipeline
- [ ] Configure custom domain (learn.livmo.com)

**Deliverable:** Deployed site with homepage, navigation, design system, and extracted Livmo assets

---

### Phase 2: Homepage & Core Content (Weeks 3-4)
**Goal:** Build homepage and first 2 content sections

**Tasks:**
- [ ] Build homepage/dashboard
  - [ ] Hero section with value proposition
  - [ ] Section overview cards (grid)
  - [ ] Stats showcase
  - [ ] CTA sections
- [ ] Build SaaS Metrics Guide
  - [ ] Content structure and navigation
  - [ ] All metric definitions and explanations
  - [ ] Benchmark data display
  - [ ] Basic calculators (LTV:CAC, Rule of 40, CAC Payback)
- [ ] Build Sellability Checklist
  - [ ] Interactive checklist component
  - [ ] All checklist items and categories
  - [ ] Progress tracking (local storage)
  - [ ] Expandable guidance for each item
- [ ] SEO optimization (meta tags, sitemap)
- [ ] Analytics integration (Vercel + GA4)

**Deliverable:** Functional site with homepage and 2 complete sections

---

### Phase 3: Financial Reporting & Additional Content (Weeks 5-6)
**Goal:** Complete Financial Reporting toolkit and 3 more sections

**Tasks:**
- [ ] Build Financial Reporting Best Practices
  - [ ] Multi-page guide structure
  - [ ] All content sections (5.1 through 5.13)
  - [ ] Interactive calculators and tools
  - [ ] Template download links
  - [ ] Red Flag Detector tool
- [ ] Build M&A Process Roadmap
  - [ ] Interactive timeline component
  - [ ] All 9 phases with detailed content
  - [ ] Phase checklists
  - [ ] Template downloads
- [ ] Build Buyer Profile Guide
  - [ ] Buyer type comparison
  - [ ] Interactive buyer matcher quiz
  - [ ] Case studies
- [ ] Polish and testing
  - [ ] Cross-browser testing
  - [ ] Mobile responsiveness check
  - [ ] Performance optimization
  - [ ] Bug fixes

**Deliverable:** 5 major sections complete and polished

---

### Phase 4: Remaining Content & Launch Prep (Weeks 7-8)
**Goal:** Complete all content sections and prepare for launch

**Tasks:**
- [ ] Build remaining sections:
  - [ ] Legal Due Diligence Audit Kit
  - [ ] Hiring & Operational Maturity Roadmap
  - [ ] Cash Cow to Sellable Asset guide
- [ ] Build Templates & Resources hub
  - [ ] Template library organization
  - [ ] Download tracking
  - [ ] Instructions for each template
- [ ] Add search functionality (basic)
- [ ] Add bookmarking feature
- [ ] Implement email capture for downloads
- [ ] Create consultation booking flow (Calendly integration)
- [ ] Add newsletter signup
- [ ] Final QA and bug fixes
- [ ] Load testing
- [ ] Security review

**Deliverable:** Complete site ready for launch

---

### Phase 5: Launch & Iteration (Week 9+)
**Goal:** Launch site, monitor, and iterate based on feedback

**Tasks:**
- [ ] Soft launch to internal team
- [ ] Gather feedback and make adjustments
- [ ] Public launch
  - [ ] Announce on livmo.com
  - [ ] Social media announcement
  - [ ] Email announcement to Livmo list
  - [ ] SEO submission (Google Search Console)
- [ ] Monitor analytics
  - [ ] User behavior
  - [ ] Popular content
  - [ ] Conversion rates
  - [ ] Performance metrics
- [ ] Iterate based on data
  - [ ] A/B test CTAs
  - [ ] Improve low-performing content
  - [ ] Add requested features
  - [ ] Bug fixes

**Deliverable:** Live, optimized site with ongoing improvements

---

### Phase 6: Future Enhancements (If Needed)
**Goal:** TBD based on user feedback and business needs

**Potential additions:**
- User authentication if requested
- Email capture and nurture
- Video content if produced
- Advanced analytics
- Additional content sections
- Template library expansion

**Note:** Currently not planned - focusing on core free platform first

---

## Success Metrics

### Primary Metrics

#### Traffic
- **Unique visitors per month:** Target 1,000+ in first 3 months
- **Page views per month:** Target 5,000+ in first 3 months
- **Bounce rate:** <50%
- **Average session duration:** >3 minutes
- **Pages per session:** >3

#### Engagement
- **Interactive tool usage:** 40% of visitors use at least one calculator/checklist
- **Content completion rate:** 30% complete at least one guide section
- **Return visitor rate:** 25% return within 30 days
- **Template downloads:** 500+ in first 3 months
- **Assessment completions:** 200+ in first 3 months

#### Conversion
- **Consultation bookings (Calendly clicks):** 20+ in first 3 months
- **Referrals to saasvaluation.livmo.com:** 1,000+ clicks in first 3 months
- (No email capture or newsletter in Phase 1)

### Secondary Metrics

#### SEO
- **Organic search traffic:** 50%+ of total traffic by month 6
- **Keyword rankings:** Top 10 for 20+ relevant keywords by month 6
- **Backlinks:** 50+ quality backlinks by month 12
- **Domain authority:** Increase from baseline

#### Content Performance
- **Most popular sections:** Identify top 3 by traffic
- **Highest conversion sections:** Identify top 3 by consultation bookings
- **Content gaps:** Identify requested topics not covered
- **User feedback:** Collect qualitative feedback on content quality

#### Technical
- **Page load time:** <2 seconds (desktop), <3 seconds (mobile)
- **Lighthouse score:** 90+ on all metrics
- **Uptime:** 99.9%+
- **Error rate:** <0.1%

---

## Open Questions & Decisions Needed

### Content Questions
1. ✅ **Video Production:** No videos in Phase 1
2. ✅ **PDF Sources:** PDFs will be provided one-by-one as we build each section
3. ✅ **Templates:** Some exist, some will be researched/created as needed
4. ✅ **Case Studies:** None - removed from spec
5. ✅ **Expert Contributors:** All Livmo-created content only

### Technical Questions
1. ✅ **Authentication:** No authentication - fully open platform
2. ✅ **Database:** No database - localStorage only for progress tracking
3. ✅ **Email Service:** None in Phase 1
4. ✅ **Video Hosting:** None in Phase 1
5. ✅ **Analytics:** Basic only - will add if needed later
6. ✅ **Template Storage:** TBD - will link externally or embed as needed per section

### Design Questions
1. ✅ **Animations:** Subtle, professional animations using Framer Motion (not cheap-looking)
2. ✅ **Illustrations:** None - use icons and simple graphics only
3. ✅ **Photography:** None - keep design clean and minimal
4. ✅ **Logo/Branding:** Extract from `/livmo_proposals` folder, then remove folder
5. ⬜ **Dark Mode:** Light mode only for Phase 1

### Business Questions
1. ✅ **Lead Capture:** None in Phase 1 - fully open content
2. ✅ **Gating:** No gating - all content free and open
3. ✅ **Newsletter:** None in Phase 1
4. ✅ **Consultation Booking:** https://go.livmo.com/meetings/go-livmo/
5. ✅ **Premium Features:** No paid tiers planned

---

## Next Steps

### Immediate Actions
1. ✅ Review and approve this spec document
2. ⬜ **Extract assets from `/livmo_proposals` folder:**
   - Livmo logo variations (positive/negative)
   - Arrow icon asset (blue transparent)
   - Background patterns/accent graphics if available
   - Review M&A process content for reuse
   - Document what was extracted
   - **DELETE `/livmo_proposals` folder after extraction**
3. ⬜ Create GitHub repository (learn-livmo)
4. ⬜ Set up Vercel project
5. ⬜ Configure learn.livmo.com DNS
6. ⬜ Begin Phase 1 development

### Content Preparation (Iterative)
- Content will be added section-by-section as PDFs are provided
- Templates will be researched/created as each section is built
- No case studies or videos in Phase 1
- No newsletter preparation needed

---

## Appendix

### File Structure (Proposed)
```
learn-livmo/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx                 # Homepage
│   │   ├── layout.tsx               # Root layout
│   │   ├── saas-metrics/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx     # Individual metric pages
│   │   ├── sellability-checklist/
│   │   │   └── page.tsx
│   │   ├── financial-reporting/
│   │   │   ├── page.tsx
│   │   │   └── [section]/page.tsx
│   │   ├── legal-diligence/
│   │   │   └── page.tsx
│   │   ├── operational-maturity/
│   │   │   └── page.tsx
│   │   ├── buyer-guide/
│   │   │   └── page.tsx
│   │   ├── ma-process/
│   │   │   └── page.tsx
│   │   ├── cash-cow-to-sellable/
│   │   │   └── page.tsx
│   │   ├── templates/
│   │   │   └── page.tsx
│   │   └── resources/
│   │       └── page.tsx
│   └── api/
│       ├── calculator/
│       ├── assessment/
│       └── contact/
├── components/
│   ├── ui/                          # Shadcn components
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── design-system/
│   │   ├── Section.tsx
│   │   ├── Card.tsx
│   │   ├── Button.tsx
│   │   ├── BackgroundPatterns.tsx
│   │   └── AccentDivider.tsx
│   ├── interactive/
│   │   ├── Calculator.tsx
│   │   ├── Checklist.tsx
│   │   ├── Quiz.tsx
│   │   ├── ProgressTracker.tsx
│   │   └── Timeline.tsx
│   └── content/
│       ├── MetricCard.tsx
│       ├── BenchmarkChart.tsx
│       ├── ComparisonTable.tsx
│       └── DownloadButton.tsx
├── lib/
│   ├── calculators/                 # Calculator logic
│   ├── assessments/                 # Assessment scoring
│   └── utils/
├── public/
│   ├── universal-assets/
│   │   ├── images/
│   │   ├── accents/
│   │   └── icons/
│   └── templates/                   # Downloadable templates
├── styles/
│   └── globals.css
├── types/
│   └── index.ts
└── content/
    ├── metrics.json                 # Metric definitions
    ├── checklists.json
    └── assessments.json
```

### Technology Alternatives Considered

#### Framework
- ✅ **Next.js 14:** Best for SEO, performance, and developer experience
- ❌ React SPA: Worse SEO
- ❌ Gatsby: Less flexible, overkill for this use case

#### Styling
- ✅ **Tailwind CSS:** Rapid development, consistent design system
- ❌ Styled Components: More verbose
- ❌ CSS Modules: Less convenient

#### UI Components
- ✅ **Shadcn/ui:** Flexible, customizable, great DX
- ❌ Material UI: Heavier, harder to customize to Livmo brand
- ❌ Chakra UI: Similar to Shadcn but less flexible


---

## Conclusion

This specification outlines a comprehensive, interactive learning platform for business owners preparing for exit. The platform will:

1. **Centralize Resources:** All Livmo learning materials in one place
2. **Provide Value:** Interactive tools, assessments, calculators
3. **Generate Leads:** Strategic CTAs and consultation booking
4. **Build Authority:** Position Livmo as the exit readiness expert
5. **Scale Gracefully:** MVP launches quickly, enhanced features added over time

The phased approach allows for rapid MVP launch while planning for sophisticated future features. The design system ensures brand consistency and professional appearance. The content structure provides clear learning paths for different user needs.

**Ready to build!** 🚀

---

**Document Status:** ✅ APPROVED - Updated November 13, 2025  
**Next Action:** Extract assets from `/livmo_proposals` and begin Phase 1 development

**Key Decisions:**
- No authentication/database (localStorage only)
- Fully open platform (no gating)
- "Exit Now or Build Value Later" positioning
- Minimal tech stack for low cost
- Calendly integration for lead generation only

