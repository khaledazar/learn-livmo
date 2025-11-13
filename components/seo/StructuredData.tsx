import React from 'react';

interface StructuredDataProps {
  data: object;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Livmo",
  "url": "https://learn.livmo.com",
  "logo": "https://learn.livmo.com/universal-assets/images/livmo-logo-light-bg.png",
  "description": "Complete exit readiness academy for business owners preparing for M&A transactions and business exits",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-619-639-1414",
    "contactType": "Customer Service",
    "email": "go@livmo.com",
    "areaServed": "US"
  },
  "sameAs": [
    "https://livmo.com"
  ]
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Learn Livmo",
  "url": "https://learn.livmo.com",
  "description": "Interactive learning platform for business owners preparing for exit - whether you're exiting now or building value for later",
  "publisher": {
    "@type": "Organization",
    "name": "Livmo"
  }
};

// Educational Course Schema
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Business Exit Readiness Academy",
  "description": "Comprehensive training on business valuation, M&A process, financial reporting, legal due diligence, and operational maturity",
  "provider": {
    "@type": "Organization",
    "name": "Livmo",
    "url": "https://learn.livmo.com"
  },
  "courseCode": "EXIT-101",
  "educationalLevel": "Professional Development",
  "teaches": [
    "SaaS Business Valuation",
    "M&A Process Navigation",
    "Financial Reporting Best Practices",
    "Legal Due Diligence",
    "Operational Maturity",
    "Buyer Profile Analysis"
  ]
};

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// FAQ Schema Generator
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Learning Resource Schema
export const generateLearningResourceSchema = (resource: {
  name: string;
  description: string;
  url: string;
  keywords: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "LearningResource",
  "name": resource.name,
  "description": resource.description,
  "url": resource.url,
  "keywords": resource.keywords.join(", "),
  "educationalLevel": "Professional",
  "inLanguage": "en-US",
  "isAccessibleForFree": true,
  "provider": {
    "@type": "Organization",
    "name": "Livmo"
  }
});

