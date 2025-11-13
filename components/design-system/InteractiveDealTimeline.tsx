'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AccentDivider } from './';

interface Milestone {
  title: string;
  description: string;
  duration: string;
  keyActivities: string[];
  deliverables: string[];
  criticalPath: boolean;
}

interface TimelinePhase {
  name: string;
  duration: string;
  icon: React.ReactNode;
  milestones: Milestone[];
  color: string;
  lightColor: string;
}

const TIMELINE_PHASES: TimelinePhase[] = [
  {
    name: 'Preparation',
    duration: '6-10 weeks',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
      </svg>
    ),
    color: '#22668d',
    lightColor: '#EFF6FF',
    milestones: [
      {
        title: 'Initial Due Diligence',
        description: 'Gather and organize all financial, legal, and operational documentation',
        duration: '2 weeks',
        keyActivities: ['Financial audit', 'Legal review', 'Customer data analysis', 'Tech stack audit'],
        deliverables: ['Clean financials', 'Cap table', 'Customer contracts', 'IP documentation'],
        criticalPath: true,
      },
      {
        title: 'CIM Development',
        description: 'Create compelling Confidential Information Memorandum',
        duration: '2-3 weeks',
        keyActivities: ['Market positioning', 'Competitive analysis', 'Growth story', 'Financial projections'],
        deliverables: ['Professional CIM', 'Executive summary', 'Management presentation'],
        criticalPath: true,
      },
      {
        title: 'Data Room Setup',
        description: 'Organize secure virtual data room for buyer due diligence',
        duration: '1-2 weeks',
        keyActivities: ['Document indexing', 'Access controls', 'Q&A preparation'],
        deliverables: ['Organized VDR', 'Document index', 'FAQ document'],
        criticalPath: false,
      },
      {
        title: 'Buyer Research & Universe Development',
        description: 'Identify and research strategic and financial buyers to create targeted acquisition list',
        duration: '2-3 weeks',
        keyActivities: ['Strategic buyer mapping', 'Financial buyer identification', 'Buyer profiling', 'Target list creation'],
        deliverables: ['Buyer universe list', 'Buyer profiles', 'Prioritization matrix'],
        criticalPath: true,
      },
    ],
  },
  {
    name: 'Marketing',
    duration: '8-10 weeks',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m3 11 18-5v12L3 13v-2zM11.6 16.8a3 3 0 1 1-5.8-1.6"/>
      </svg>
    ),
    color: '#1b1f2b',
    lightColor: '#F3F4F6',
    milestones: [
      {
        title: 'Buyer Outreach',
        description: 'Targeted outreach to qualified strategic and financial buyers',
        duration: '2 weeks',
        keyActivities: ['Buyer list finalization', 'NDA execution', 'Teaser distribution'],
        deliverables: ['Signed NDAs', 'Interest confirmations'],
        criticalPath: true,
      },
      {
        title: 'Buyer Vetting & Qualification',
        description: 'Evaluate buyer commitment, capabilities, and fit to narrow field to serious contenders',
        duration: '2 weeks',
        keyActivities: ['Financing capability assessment', 'Track record verification', 'Cultural fit evaluation', 'Competitive tension building'],
        deliverables: ['Evaluation scorecard', 'Finalist shortlist', 'Competitive strategy'],
        criticalPath: true,
      },
      {
        title: 'Management Presentations',
        description: 'Present to interested buyers',
        duration: '3-4 weeks',
        keyActivities: ['Virtual presentations', 'Site visits', 'Q&A sessions'],
        deliverables: ['Buyer feedback', 'Follow-up questions'],
        criticalPath: true,
      },
      {
        title: 'Initial Bids',
        description: 'Collect and evaluate preliminary offers',
        duration: '2 weeks',
        keyActivities: ['IOI collection', 'Bid analysis', 'Buyer selection'],
        deliverables: ['IOI summary', 'Shortlist recommendation'],
        criticalPath: true,
      },
    ],
  },
  {
    name: 'Due Diligence',
    duration: '8-12 weeks',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    color: '#10b981',
    lightColor: '#ECFDF5',
    milestones: [
      {
        title: 'LOI',
        description: 'Receive and negotiate binding offers',
        duration: '2 weeks',
        keyActivities: ['LOI negotiation', 'Term sheet review', 'Buyer selection'],
        deliverables: ['Signed LOI', 'Exclusivity agreement'],
        criticalPath: true,
      },
      {
        title: 'Buyer Due Diligence',
        description: 'Facilitate comprehensive buyer review',
        duration: '6-8 weeks',
        keyActivities: ['Financial DD', 'Legal DD', 'Tech DD', 'Commercial DD'],
        deliverables: ['DD responses', 'Additional materials', 'Expert calls'],
        criticalPath: true,
      },
      {
        title: 'Quality of Earnings',
        description: 'Third-party financial validation',
        duration: '3-4 weeks',
        keyActivities: ['QofE study', 'Working capital analysis', 'Adjusted EBITDA calculation'],
        deliverables: ['QofE report', 'Financial reconciliations'],
        criticalPath: true,
      },
    ],
  },
  {
    name: 'Negotiations',
    duration: '4-6 weeks',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zM16.7 13H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#f59e0b',
    lightColor: '#FEF3C7',
    milestones: [
      {
        title: 'Purchase Agreement',
        description: 'Negotiate definitive agreement terms',
        duration: '3-4 weeks',
        keyActivities: ['Legal drafting', 'Reps & warranties', 'Indemnification', 'Escrow terms'],
        deliverables: ['Draft SPA', 'Disclosure schedules'],
        criticalPath: true,
      },
      {
        title: 'Final Terms',
        description: 'Lock in all closing conditions',
        duration: '1-2 weeks',
        keyActivities: ['Working capital peg', 'Employment agreements', 'Escrow amount'],
        deliverables: ['Final SPA', 'Ancillary agreements'],
        criticalPath: true,
      },
    ],
  },
  {
    name: 'Closing',
    duration: '4-6 weeks',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    color: '#059669',
    lightColor: '#D1FAE5',
    milestones: [
      {
        title: 'Final Documentation',
        description: 'Execute all closing documents',
        duration: '1 week',
        keyActivities: ['Signature pages', 'Closing certificates', 'Legal opinions'],
        deliverables: ['Executed SPA', 'Closing binder'],
        criticalPath: true,
      },
      {
        title: 'Funds Transfer',
        description: 'Wire funds and close transaction',
        duration: '1 week',
        keyActivities: ['Closing call', 'Wire transfer', 'Announcements'],
        deliverables: ['Cleared funds', 'Press release'],
        criticalPath: true,
      },
      {
        title: 'Post-Closing Transition Plan',
        description: 'Execute integration and transition roadmap for seamless handover',
        duration: '2-4 weeks',
        keyActivities: ['Integration planning', 'Knowledge transfer', 'Stakeholder communication', 'Earnout tracking setup'],
        deliverables: ['Integration roadmap', 'Transition documentation', 'Communication materials', 'Earnout framework'],
        criticalPath: true,
      },
    ],
  },
];

export const InteractiveDealTimeline: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [hoveredMilestone, setHoveredMilestone] = useState<string | null>(null);
  
  const totalWeeks = TIMELINE_PHASES.reduce((acc, phase) => {
    const weeks = parseInt(phase.duration.split('-')[1]) || 0;
    return acc + weeks;
  }, 0);
  
  const currentPhase = TIMELINE_PHASES[selectedPhase];
  
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <AccentDivider variant="white" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b1f2b] mb-2 px-4">
          M&A Sale Process Overview
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#22668d] mb-3 sm:mb-4 px-4">
          Your Interactive Exit Journey
        </h3>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-4">
          Livmo structures a process specifically for your company to balance value maximization, speed, and certainty
        </p>
      </div>
      
      {/* Phase selector - horizontal tabs */}
      <div className="bg-white border border-gray-200 rounded-lg p-1.5 sm:p-2 flex gap-1.5 sm:gap-2 overflow-x-auto">
        {TIMELINE_PHASES.map((phase, index) => (
          <button
            key={phase.name}
            onClick={() => setSelectedPhase(index)}
            className={`flex-1 min-w-[110px] sm:min-w-[140px] px-3 sm:px-4 py-2.5 sm:py-3 rounded-md transition-all duration-300 cursor-pointer border touch-manipulation ${
              selectedPhase === index
                ? 'shadow-md border-transparent'
                : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md hover:scale-105'
            }`}
            style={{
              backgroundColor: selectedPhase === index ? phase.color : 'white',
              color: selectedPhase === index ? 'white' : '#1b1f2b',
            }}
          >
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1">
              <span
                className="w-4 h-4 sm:w-5 sm:h-5"
                style={{ color: selectedPhase === index ? 'white' : phase.color }}
              >
                {phase.icon}
              </span>
              <span className="font-bold text-xs sm:text-sm">{phase.name}</span>
            </div>
            <div className={`text-[10px] sm:text-xs ${selectedPhase === index ? 'text-white/90' : 'text-gray-600'}`}>
              {phase.duration}
            </div>
            <div className={`text-[10px] sm:text-xs font-semibold mt-1 ${selectedPhase === index ? 'text-white/80' : 'text-gray-500'}`}>
              {phase.milestones.length} Milestones
            </div>
          </button>
        ))}
      </div>
      
      {/* Progress indicator */}
      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: currentPhase.color }}
          initial={{ width: 0 }}
          animate={{ width: `${((selectedPhase + 1) / TIMELINE_PHASES.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      
      {/* Selected phase milestones */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPhase}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6"
          style={{ borderTopColor: currentPhase.color, borderTopWidth: 4 }}
        >
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex-1 pr-2">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1b1f2b] mb-1">
                Phase {selectedPhase + 1}: {currentPhase.name}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Duration: {currentPhase.duration} • {currentPhase.milestones.length} milestones
              </p>
            </div>
            <div className="flex gap-1 sm:gap-2 flex-shrink-0">
              {selectedPhase > 0 && (
                <button
                  onClick={() => setSelectedPhase(selectedPhase - 1)}
                  className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors touch-manipulation"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              {selectedPhase < TIMELINE_PHASES.length - 1 && (
                <button
                  onClick={() => setSelectedPhase(selectedPhase + 1)}
                  className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors touch-manipulation"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          
          {/* Milestones grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {currentPhase.milestones.map((milestone, mIndex) => (
              <motion.div
                key={milestone.title}
                className={`bg-gray-50 border-2 rounded-lg p-4 sm:p-5 transition-all duration-300 ${
                  hoveredMilestone === milestone.title
                    ? 'shadow-lg scale-105'
                    : 'hover:shadow-md'
                }`}
                style={{
                  borderColor: hoveredMilestone === milestone.title ? currentPhase.color : '#E5E7EB',
                  backgroundColor: hoveredMilestone === milestone.title ? currentPhase.lightColor : '#F9FAFB',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: mIndex * 0.1 }}
                onHoverStart={() => setHoveredMilestone(milestone.title)}
                onHoverEnd={() => setHoveredMilestone(null)}
              >
                {/* Milestone header */}
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <div className="w-full">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <div
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0"
                        style={{ backgroundColor: currentPhase.color }}
                      >
                        {mIndex + 1}
                      </div>
                      <h5 className="font-bold text-[#1b1f2b] text-xs sm:text-sm">{milestone.title}</h5>
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-600 mb-1.5 sm:mb-2">{milestone.description}</p>
                    <div className="inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white border border-gray-300 rounded text-[9px] sm:text-[10px] text-gray-700 font-medium">
                      {milestone.duration}
                    </div>
                  </div>
                </div>

                {/* Always visible details */}
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-300">
                  <div className="space-y-2 sm:space-y-3">
                    <div>
                      <h6 className="text-[9px] sm:text-[10px] font-bold text-gray-700 uppercase tracking-wide mb-1 sm:mb-1.5">
                        Key Activities
                      </h6>
                      <ul className="space-y-0.5 sm:space-y-1">
                        {milestone.keyActivities.map((activity, i) => (
                          <li key={i} className="text-[10px] sm:text-xs text-gray-600 flex items-start gap-1 sm:gap-1.5">
                            <span style={{ color: currentPhase.color }}>•</span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h6 className="text-[9px] sm:text-[10px] font-bold text-gray-700 uppercase tracking-wide mb-1 sm:mb-1.5">
                        Deliverables
                      </h6>
                      <ul className="space-y-0.5 sm:space-y-1">
                        {milestone.deliverables.map((deliverable, i) => (
                          <li key={i} className="text-[10px] sm:text-xs text-gray-600 flex items-start gap-1 sm:gap-1.5">
                            <span className="text-green-600">✓</span>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
