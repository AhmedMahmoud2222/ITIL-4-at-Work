import { useState } from "react";

const courseData = [
  {
    week: 1,
    title: "ITIL 4 Big Picture",
    subtitle: "How it all connects",
    duration: "90 min",
    icon: "🗺️",
    color: "#E8A838",
    lessons: [
      {
        title: "From v3 to ITIL 4: What Changed?",
        type: "Concept",
        content: "ITIL 4 replaced the 5-stage Service Lifecycle (Strategy → Design → Transition → Operation → CSI) with a more flexible Service Value System (SVS). The key shift: ITIL 4 is outcome-oriented rather than process-oriented. 'Processes' became 'Practices' — 34 of them.",
        keyPoints: [
          "No more lifecycle stages — the Service Value Chain has 6 activities instead",
          "ITIL 4 is designed to coexist with DevOps, Agile, and Lean",
          "Focus shifts from process compliance to value delivery"
        ]
      },
      {
        title: "The Service Value System (SVS)",
        type: "Framework",
        content: "The SVS shows how all parts of an organization work together to enable value. Think of it as the 'engine' of ITIL 4.",
        keyPoints: [
          "Inputs: Opportunity & Demand",
          "5 components: Guiding Principles, Governance, Service Value Chain, Practices, Continual Improvement",
          "Output: Value for the organization and its customers"
        ]
      },
      {
        title: "The 7 Guiding Principles",
        type: "Reference",
        content: "These are universal rules of thumb that apply to every decision. Unlike practices, they never change based on context.",
        keyPoints: [
          "Focus on value — every action should trace back to stakeholder value",
          "Start where you are — don't reinvent what works",
          "Progress iteratively with feedback — small batches beat big-bang projects",
          "Collaborate and promote visibility — no silo work",
          "Think and work holistically — no component stands alone",
          "Keep it simple and practical — eliminate non-value-adding steps",
          "Optimize and automate — humans for judgment, automation for repetition"
        ]
      }
    ],
    practicalExercise: {
      title: "Map Your Current Reality",
      description: "Look at your team's current IT support or service workflow. Try to map one daily activity to the SVS. Which value chain activity does it belong to? (Plan / Improve / Engage / Design & Transition / Obtain-Build / Deliver & Support)"
    },
    quiz: [
      { q: "ITIL 4 replaced 'processes' with:", a: "Practices", options: ["Stages", "Practices", "Workflows", "Functions"] },
      { q: "How many guiding principles does ITIL 4 have?", a: "7", options: ["5", "6", "7", "10"] },
      { q: "Which guiding principle says 'don't discard what already works'?", a: "Start where you are", options: ["Focus on value", "Keep it simple", "Start where you are", "Optimize and automate"] }
    ]
  },
  {
    week: 2,
    title: "Incident Management",
    subtitle: "Restore service fast",
    duration: "90 min",
    icon: "🚨",
    color: "#E05252",
    lessons: [
      {
        title: "Incident vs Problem vs Service Request",
        type: "Concept",
        content: "This is the most common confusion in daily ITSM work. Getting this right determines how you log, route, and resolve tickets.",
        keyPoints: [
          "Incident: unplanned interruption or quality reduction — RESTORE service ASAP",
          "Problem: the underlying cause of one or more incidents — ELIMINATE the root cause",
          "Service Request: a standard, expected request for something (access, info, password reset) — FULFIL it",
          "Rule of thumb: Is it broken? → Incident. Why did it break? → Problem. Can I have X? → Service Request"
        ]
      },
      {
        title: "The Incident Lifecycle",
        type: "Workflow",
        content: "Every incident goes through the same 5 stages, regardless of tooling.",
        keyPoints: [
          "1. Identify & Log — unique ID, reporter, time, affected service, CI",
          "2. Categorize — multi-level (Service > Subcategory > Symptom) tied to CMDB",
          "3. Prioritize — Impact × Urgency matrix → P1 (Critical) through P4 (Low)",
          "4. Diagnose & Escalate — use KB, KEDB, runbooks; escalate functionally or hierarchically",
          "5. Resolve & Close — verify fix with user, document resolution, update KB"
        ]
      },
      {
        title: "Priority Matrix at Work",
        type: "Reference",
        content: "Priority = Impact × Urgency. Define this BEFORE incidents happen, or every incident becomes P1.",
        keyPoints: [
          "Impact: breadth of effect (how many users/services affected?)",
          "Urgency: speed at which damage escalates (will it get worse quickly?)",
          "P1 (Critical): High impact + High urgency → 15 min response / 4h resolution typical",
          "P2 (High): High impact + Low urgency OR Low impact + High urgency",
          "P3 (Medium) / P4 (Low): proportionally relaxed targets",
          "Tip: anchor P1 to a real-world threshold (e.g. 'all users in a site are down')"
        ]
      }
    ],
    practicalExercise: {
      title: "Classify 5 Real Tickets",
      description: "Pick 5 recent tickets from your team. Classify each as Incident, Problem, or Service Request. Then check: were they handled using the right workflow? If not, what would have changed if the correct classification was used?"
    },
    quiz: [
      { q: "A user can't log in due to a system outage. This is a:", a: "Incident", options: ["Service Request", "Problem", "Incident", "Change"] },
      { q: "Priority is determined by:", a: "Impact × Urgency", options: ["Severity only", "Impact × Urgency", "User seniority", "Resolution time"] },
      { q: "A Known Error is:", a: "A problem with a documented root cause/workaround", options: ["A recurring incident", "A problem with a documented root cause/workaround", "An unresolved incident", "A failed change"] }
    ]
  },
  {
    week: 3,
    title: "Service Desk & Requests",
    subtitle: "The face of IT to the business",
    duration: "75 min",
    icon: "🎧",
    color: "#4A90D9",
    lessons: [
      {
        title: "The Modern Service Desk",
        type: "Concept",
        content: "ITIL 4 repositions the Service Desk from a 'call centre' to a key engagement hub. It's the single point of contact (SPOC) between IT and users.",
        keyPoints: [
          "Service Desk handles incidents AND service requests (not problems — those go to Problem Management)",
          "Good service desks use a shift-left strategy: push resolution to lower tiers or self-service",
          "Key KPIs: First Contact Resolution (FCR) rate, CSAT, ticket volume, average handle time",
          "Target FCR: 60–80% depending on your support model"
        ]
      },
      {
        title: "Service Request Management",
        type: "Workflow",
        content: "Requests are expected, repeatable, and should be as automated as possible. They are NOT incidents.",
        keyPoints: [
          "Typical flow: Service Catalog → Request submission → Approval (if needed) → Automated or manual fulfilment → Notify user → Close + CSAT",
          "Service Catalog: the storefront — visible to users; lists all requestable services",
          "Service Portfolio: the full list including planned/retired services; visible to IT management",
          "Golden rule: if you're fulfilling the same request manually > 10x/month, automate it"
        ]
      },
      {
        title: "Writing a Good Service Catalog Entry",
        type: "Practical",
        content: "A Service Catalog entry is a contract between IT and the business. It must be clear enough that a user can self-serve.",
        keyPoints: [
          "Service name (user-friendly language, not IT jargon)",
          "What it provides and who can request it",
          "Fulfilment time (SLA target)",
          "Cost or chargeback (if applicable)",
          "How to request (portal, form, chat)",
          "Dependencies and prerequisites",
          "Owner and support contact"
        ]
      }
    ],
    practicalExercise: {
      title: "Draft One Catalog Entry",
      description: "Pick a service your team fulfils repeatedly (e.g. 'New user laptop setup', 'VPN access request', 'Software license request'). Draft a 1-page Service Catalog entry using the 7-field structure from Lesson 3. Share it with a colleague — can they understand it without asking you?"
    },
    quiz: [
      { q: "The Service Desk is the:", a: "Single Point of Contact (SPOC) between IT and users", options: ["Only place incidents can be resolved", "Single Point of Contact (SPOC) between IT and users", "Team responsible for problem management", "Department managing all IT changes"] },
      { q: "FCR stands for:", a: "First Contact Resolution", options: ["Full Closure Rate", "First Contact Resolution", "Fast Change Request", "Formal Complaint Record"] },
      { q: "A Service Catalog is:", a: "A storefront of available services visible to users", options: ["A list of all IT assets", "A storefront of available services visible to users", "A database of known errors", "The service portfolio visible to management"] }
    ]
  },
  {
    week: 4,
    title: "Problem Management",
    subtitle: "Fix root causes, not symptoms",
    duration: "90 min",
    icon: "🔬",
    color: "#7B68EE",
    lessons: [
      {
        title: "Reactive vs Proactive Problem Management",
        type: "Concept",
        content: "Most teams only do reactive Problem Management (after incidents). Proactive is where the real value is — preventing incidents before they happen.",
        keyPoints: [
          "Reactive: triggered by incident trends, major incidents, or recurring issues",
          "Proactive: triggered by monitoring data, capacity analysis, or risk assessments",
          "Problem record stays open until root cause is resolved (even if workaround exists)",
          "A Problem with a known workaround = Known Error → goes in the KEDB"
        ]
      },
      {
        title: "Root Cause Analysis Techniques",
        type: "Practical",
        content: "ITIL doesn't mandate a specific RCA technique, but these are the most commonly used in practice.",
        keyPoints: [
          "5 Whys: ask 'why?' 5 times starting from the symptom — simple and fast",
          "Ishikawa / Fishbone: visualises contributing causes across categories (People, Process, Technology, Environment)",
          "Kepner-Tregoe: structured decision-analysis; good for complex, high-stakes problems",
          "Fault Tree Analysis: top-down logic tree; common in infrastructure/availability problems",
          "Rule of thumb: 5 Whys for 80% of problems; Ishikawa when multiple departments are involved"
        ]
      },
      {
        title: "Post-Incident Review (PIR) in Practice",
        type: "Workflow",
        content: "A PIR (also called a post-mortem) is the structured review after a major incident. Done well, it drives systemic improvement. Done poorly, it becomes a blame session.",
        keyPoints: [
          "Hold within 24–48 hours of resolution while memory is fresh",
          "Blameless facilitation is non-negotiable — Kerth's Prime Directive",
          "Cover: complete timeline, root cause, what worked / didn't, detection gap, communication review",
          "Output must include: named owners, deadlines, and tracking in your normal work system",
          "Feed findings into Problem Management AND Change Enablement"
        ]
      }
    ],
    practicalExercise: {
      title: "Run a 5 Whys on a Recent Issue",
      description: "Pick a recent recurring incident from your team. Run a 5 Whys analysis on it now. Document: the symptom, each 'why' step, and the root cause you reached. Does your current ticket system have a problem record linked to these incidents? If not, create one."
    },
    quiz: [
      { q: "A Known Error is a problem that:", a: "Has a documented root cause and/or workaround", options: ["Has been fully resolved", "Has a documented root cause and/or workaround", "Has occurred more than 3 times", "Has no known fix"] },
      { q: "The KEDB stores:", a: "Known errors and their workarounds", options: ["All unresolved incidents", "Known errors and their workarounds", "KB articles for users", "Change records"] },
      { q: "A PIR should be held:", a: "Within 24–48 hours of resolution", options: ["One week after resolution", "Within 24–48 hours of resolution", "Only for P1 incidents", "Monthly in a team meeting"] }
    ]
  },
  {
    week: 5,
    title: "Change Enablement",
    subtitle: "Control risk without blocking progress",
    duration: "90 min",
    icon: "⚙️",
    color: "#2ECC71",
    lessons: [
      {
        title: "The 3 Types of Change",
        type: "Concept",
        content: "Not all changes are equal. Classifying correctly determines how much governance overhead applies.",
        keyPoints: [
          "Standard: pre-approved, low-risk, documented, repeatable → no CAB needed (e.g. password reset policy update, routine patching)",
          "Normal: risk-assessed, requires Change Authority approval → goes through CAB workflow",
          "Emergency: urgent fix for a major incident or critical security issue → ECAB (Emergency CAB) with expedited approval",
          "Key ITIL 4 shift: Change Authority replaces the monolithic CAB — it can be a peer, a manager, an automated gate, or the CAB depending on risk tier"
        ]
      },
      {
        title: "Writing an RFC That Gets Approved",
        type: "Practical",
        content: "An RFC (Request for Change) that's incomplete gets rejected or stalled. These are the fields that matter most.",
        keyPoints: [
          "Business justification: why now? What happens if we don't do it?",
          "Technical description: what exactly is changing?",
          "Impact & risk assessment: what could go wrong? Who is affected?",
          "Implementation plan: step-by-step with timing",
          "Rollback plan: how do we reverse it in under 30 minutes?",
          "Testing approach: how do we verify success?",
          "Communication plan: who needs to know, when, via what channel?"
        ]
      },
      {
        title: "Change & DevOps: Friends, Not Enemies",
        type: "Concept",
        content: "The common misconception is that ITIL Change Management slows down DevOps. ITIL 4 was specifically redesigned to eliminate this conflict.",
        keyPoints: [
          "Pre-approved standard changes can include automated CI/CD pipeline deployments",
          "Peer review in code can fulfill the 'Change Authority' requirement",
          "DORA metrics (deployment frequency, lead time, change failure rate, MTTR) overlap directly with ITIL KPIs",
          "Change failure rate target: <5% → align your CAB review criteria to this, not to volume of approvals"
        ]
      }
    ],
    practicalExercise: {
      title: "Classify Your Last 10 Changes",
      description: "List the last 10 changes your team implemented. Classify each as Standard, Normal, or Emergency. How many were classified correctly at the time? Were there any emergency changes that could have been planned (Normal)? This tells you a lot about your change maturity."
    },
    quiz: [
      { q: "An Emergency Change is used for:", a: "Urgent fixes for major incidents or critical security issues", options: ["All high-priority work", "Urgent fixes for major incidents or critical security issues", "Any change needed within 24 hours", "Changes that failed CAB approval"] },
      { q: "The Change Authority in ITIL 4:", a: "Can be a peer, manager, automated gate, or CAB", options: ["Must always be the CAB", "Can be a peer, manager, automated gate, or CAB", "Is always the IT Director", "Does not exist in ITIL 4"] },
      { q: "DORA's 'change failure rate' target is:", a: "Under 5%", options: ["Under 1%", "Under 5%", "Under 15%", "Under 25%"] }
    ]
  },
  {
    week: 6,
    title: "SLAs, OLAs & Reporting",
    subtitle: "Measure what matters",
    duration: "75 min",
    icon: "📊",
    color: "#1ABC9C",
    lessons: [
      {
        title: "SLA vs OLA vs UC: The Agreement Stack",
        type: "Concept",
        content: "These three agreement types form a chain. Each tier underpins the one above it.",
        keyPoints: [
          "SLA (Service Level Agreement): between the IT service provider and the customer/business — external or internal",
          "OLA (Operational Level Agreement): between IT service provider and another internal team that supports delivery of the SLA",
          "UC (Underpinning Contract): legally binding contract between the provider and an external supplier",
          "The chain: UC + OLA targets must be tighter than the SLA target to leave buffer for resolution",
          "XLA (Experience Level Agreement): emerging practice — measures actual user experience, not just technical metrics"
        ]
      },
      {
        title: "KPIs That Actually Drive Behaviour",
        type: "Practical",
        content: "Most teams track too many metrics. Focus on the 8–10 that drive decisions.",
        keyPoints: [
          "MTTA: Mean Time To Acknowledge — how fast do we spot it?",
          "MTTR: Mean Time To Resolve — how fast do we fix it?",
          "MTBF: Mean Time Between Failures — how reliable is it?",
          "FCR: First Contact Resolution — how often do we fix it first time?",
          "SLA compliance %: are we meeting our commitments?",
          "Change success rate (target >95%)",
          "CSAT / NPS: what do users actually think?",
          "Backlog age: are old tickets getting ignored?"
        ]
      },
      {
        title: "Building a Useful Service Review",
        type: "Workflow",
        content: "Monthly service reviews with the business should be data-driven and forward-looking, not just a recap of what broke.",
        keyPoints: [
          "Structure: KPI dashboard → trend analysis (not just this month) → top incidents/problems → upcoming changes → improvement items",
          "Always show trends, not just snapshots — month-on-month comparison is the minimum",
          "Map metrics to business outcomes (downtime cost, user productivity) when possible",
          "Service review is a Relationship Management and Service Level Management touchpoint"
        ]
      }
    ],
    practicalExercise: {
      title: "Audit One SLA",
      description: "Find an existing SLA (or draft one) for a service your team owns. Check: Are the targets measurable? Is there a matching OLA for each internal team involved? Are you currently meeting the targets? If not, is the target unrealistic or is there a process gap?"
    },
    quiz: [
      { q: "An OLA is between:", a: "IT provider and an internal supporting team", options: ["IT and the customer", "IT provider and an internal supporting team", "IT and an external supplier", "Two external vendors"] },
      { q: "MTBF measures:", a: "How reliable a service is", options: ["How fast we fix incidents", "How reliable a service is", "How many tickets are open", "How fast we acknowledge alerts"] },
      { q: "XLA focuses on:", a: "Actual user experience, not just technical metrics", options: ["Extended licensing agreements", "Actual user experience, not just technical metrics", "External supplier contracts", "Exact level of availability"] }
    ]
  },
  {
    week: 7,
    title: "CMDB & Configuration",
    subtitle: "Know what you have",
    duration: "75 min",
    icon: "🗄️",
    color: "#F39C12",
    lessons: [
      {
        title: "What the CMDB Actually Is",
        type: "Concept",
        content: "The CMDB is the most powerful — and most neglected — tool in ITSM. When it's accurate, it transforms incident diagnosis, change impact analysis, and problem investigation.",
        keyPoints: [
          "CI (Configuration Item): any component that must be managed to deliver a service — hardware, software, service, document, even people",
          "CMDB: stores CIs, their attributes, and their relationships to each other and to services",
          "CMS (Configuration Management System): the broader system — may federate multiple CMDBs and discovery tools",
          "CMDB accuracy is the single most common failure point in ITIL implementations — automated discovery is non-negotiable"
        ]
      },
      {
        title: "Why CMDB Accuracy Matters",
        type: "Practical",
        content: "A stale CMDB is worse than no CMDB — it creates false confidence. Here's where it directly impacts daily operations.",
        keyPoints: [
          "Incident: 'Which CIs are affected?' → wrong CMDB = wrong impact assessment = wrong priority",
          "Change: 'What else will this change affect?' → wrong CMDB = unplanned outages",
          "Problem: 'What CIs are common across these incidents?' → wrong CMDB = missed root cause",
          "SLA: 'Is availability tracking tied to the right service CI?' → wrong CMDB = wrong reporting",
          "Target: CMDB accuracy >95% for Tier 1 (business-critical) CIs, audited quarterly"
        ]
      },
      {
        title: "Keeping the CMDB Healthy",
        type: "Workflow",
        content: "CMDB rot is inevitable without governance. These are the habits that prevent it.",
        keyPoints: [
          "Use automated discovery tools (ServiceNow Discovery, AWS Config, Azure Resource Graph, etc.) for infrastructure CIs",
          "Enforce CI update as part of your Change Enablement workflow — the RFC closes only when the CMDB is updated",
          "Assign a CI owner to every Tier 1 CI — they're accountable for accuracy",
          "Run quarterly audits: sample 50–100 CIs, verify physical/logical state matches CMDB",
          "Integrate with your asset management process for hardware lifecycle events"
        ]
      }
    ],
    practicalExercise: {
      title: "CMDB Health Check",
      description: "Pick 10 CIs from your CMDB that are Tier 1 (business-critical). Verify: Is the owner correct? Is the version/patch level current? Are the relationships to dependent services accurate? Calculate your accuracy score. If it's below 80%, you've found your next improvement project."
    },
    quiz: [
      { q: "A CI is:", a: "Any component that must be managed to deliver a service", options: ["Only hardware assets", "Any component that must be managed to deliver a service", "A type of change request", "A customer impact report"] },
      { q: "The best way to maintain CMDB accuracy is:", a: "Automated discovery + governance in change process", options: ["Manual updates weekly", "Automated discovery + governance in change process", "Quarterly full audits only", "Asking each team to self-report"] },
      { q: "CMDB updates should be enforced in:", a: "The Change Enablement workflow", options: ["Monthly meetings", "The Change Enablement workflow", "Annual reviews", "Service review meetings only"] }
    ]
  },
  {
    week: 8,
    title: "Continual Improvement",
    subtitle: "Build a culture of getting better",
    duration: "90 min",
    icon: "🔄",
    color: "#9B59B6",
    lessons: [
      {
        title: "The Continual Improvement Model",
        type: "Framework",
        content: "ITIL 4's continual improvement model is a 7-step cycle that replaces ITIL v3's CSI (Continual Service Improvement). It applies to any improvement, at any scale.",
        keyPoints: [
          "Step 1: What is the vision? (business goal)",
          "Step 2: Where are we now? (baseline assessment)",
          "Step 3: Where do we want to be? (measurable target)",
          "Step 4: How do we get there? (plan)",
          "Step 5: Take action",
          "Step 6: Did we get there? (measure)",
          "Step 7: How do we keep the momentum going? (embed and re-baseline)"
        ]
      },
      {
        title: "The Improvement Register",
        type: "Practical",
        content: "An improvement register is the practice's equivalent of a product backlog. Without one, improvement ideas evaporate.",
        keyPoints: [
          "Log every improvement idea — from any team member, any meeting, any PIR",
          "Each item: description, originator, date, priority (impact/effort), status, owner",
          "Review the register monthly in your service review meeting",
          "Connect items to the metrics they'll improve — if an item can't be tied to a KPI, question its value",
          "Celebrate closed items — improvement culture requires visible wins"
        ]
      },
      {
        title: "Putting It All Together: Your ITIL Work Toolkit",
        type: "Summary",
        content: "You now have the core practices that drive 80% of real-world ITSM value. Here's how they interlock in daily operations.",
        keyPoints: [
          "Incident Management → resolves immediately; feeds Problem Management",
          "Problem Management → eliminates root causes; raises RFCs to Change Enablement",
          "Change Enablement → controls how fixes get deployed; updates CMDB",
          "CMDB → supports all practices with accurate CI data",
          "Service Level Management → measures outcomes via SLA/OLA/KPIs",
          "Continual Improvement → keeps everything getting better over time",
          "Service Desk → the human interface connecting all of the above to users"
        ]
      }
    ],
    practicalExercise: {
      title: "Build Your Team's Improvement Register",
      description: "Create a simple spreadsheet or board with 5 columns: Idea | Source (PIR/review/team) | Priority (H/M/L) | Owner | Status. Populate it with at least 5 real improvement ideas from the last month. Present it in your next team meeting and commit to reviewing it monthly."
    },
    quiz: [
      { q: "Step 1 of the Continual Improvement Model is:", a: "What is the vision?", options: ["Where are we now?", "What is the vision?", "How do we get there?", "Take action"] },
      { q: "An Improvement Register is:", a: "A backlog of improvement ideas with owners and status", options: ["A list of past incidents", "A backlog of improvement ideas with owners and status", "The service catalog", "A maturity assessment tool"] },
      { q: "Which practice raises RFCs to resolve root causes?", a: "Problem Management", options: ["Incident Management", "Problem Management", "Service Desk", "CMDB"] }
    ]
  }
];

const typeColors = {
  "Concept": "#4A90D9",
  "Framework": "#9B59B6",
  "Workflow": "#E05252",
  "Practical": "#2ECC71",
  "Reference": "#E8A838",
  "Summary": "#1ABC9C"
};

export default function ITILCourse() {
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);
  const [view, setView] = useState("lesson"); // lesson | quiz | exercise
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [completed, setCompleted] = useState({});
  const [expandedPoints, setExpandedPoints] = useState(true);

  const module = courseData[activeWeek];
  const lesson = module.lessons[activeLesson];
  const totalLessons = courseData.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedCount = Object.keys(completed).length;

  const markComplete = () => {
    const key = `${activeWeek}-${activeLesson}`;
    setCompleted(prev => ({ ...prev, [key]: true }));
  };

  const isLessonComplete = (w, l) => completed[`${w}-${l}`];

  const handleQuizAnswer = (qi, answer) => {
    setQuizAnswers(prev => ({ ...prev, [qi]: answer }));
  };

  const submitQuiz = () => setQuizSubmitted(true);

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const quizScore = module.quiz.filter((q, i) => quizAnswers[i] === q.a).length;

  const changeWeek = (idx) => {
    setActiveWeek(idx);
    setActiveLesson(0);
    setView("lesson");
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const progress = Math.round((completedCount / totalLessons) * 100);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0F1117",
      color: "#E8EAF0",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Top Bar */}
      <div style={{
        background: "#181C26",
        borderBottom: "1px solid #252A38",
        padding: "14px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: "linear-gradient(135deg, #E8A838, #E05252)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: "bold", color: "#fff"
          }}>I</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: "bold", color: "#E8EAF0", letterSpacing: "0.3px" }}>
              ITIL 4 at Work
            </div>
            <div style={{ fontSize: 11, color: "#6B7280", fontFamily: "monospace" }}>
              Applied ITSM · 8-Week Track
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ fontSize: 12, color: "#9CA3AF" }}>
            {completedCount}/{totalLessons} lessons
          </div>
          <div style={{ position: "relative", width: 120, height: 6, background: "#252A38", borderRadius: 3 }}>
            <div style={{
              position: "absolute", left: 0, top: 0, height: 6,
              width: `${progress}%`,
              background: "linear-gradient(90deg, #E8A838, #E05252)",
              borderRadius: 3,
              transition: "width 0.4s ease"
            }} />
          </div>
          <div style={{ fontSize: 12, color: "#E8A838", fontWeight: "bold" }}>{progress}%</div>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        {/* Sidebar */}
        <div style={{
          width: 240,
          background: "#13161F",
          borderRight: "1px solid #1E2230",
          overflowY: "auto",
          padding: "16px 0",
          flexShrink: 0
        }}>
          {courseData.map((mod, wi) => {
            const modComplete = mod.lessons.every((_, li) => isLessonComplete(wi, li));
            return (
              <div key={wi} style={{ marginBottom: 4 }}>
                <button
                  onClick={() => changeWeek(wi)}
                  style={{
                    width: "100%",
                    padding: "10px 16px",
                    background: activeWeek === wi ? "#1E2230" : "transparent",
                    border: "none",
                    borderLeft: activeWeek === wi ? `3px solid ${mod.color}` : "3px solid transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    textAlign: "left"
                  }}
                >
                  <span style={{ fontSize: 18 }}>{mod.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: 12,
                      color: activeWeek === wi ? "#E8EAF0" : "#9CA3AF",
                      fontWeight: activeWeek === wi ? "bold" : "normal",
                      fontFamily: "monospace"
                    }}>
                      Week {mod.week}
                    </div>
                    <div style={{
                      fontSize: 11,
                      color: activeWeek === wi ? mod.color : "#6B7280",
                      marginTop: 1
                    }}>
                      {mod.title}
                    </div>
                  </div>
                  {modComplete && (
                    <span style={{ color: "#2ECC71", fontSize: 14 }}>✓</span>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px" }}>
          {/* Module Header */}
          <div style={{
            background: "#181C26",
            borderRadius: 12,
            padding: "20px 24px",
            marginBottom: 24,
            border: `1px solid ${module.color}22`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 12,
                background: `${module.color}22`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26
              }}>{module.icon}</div>
              <div>
                <div style={{ fontSize: 11, color: module.color, fontFamily: "monospace", marginBottom: 4 }}>
                  WEEK {module.week} · {module.duration}
                </div>
                <div style={{ fontSize: 22, fontWeight: "bold", color: "#E8EAF0" }}>{module.title}</div>
                <div style={{ fontSize: 13, color: "#6B7280", marginTop: 2 }}>{module.subtitle}</div>
              </div>
            </div>
            {/* Tab buttons */}
            <div style={{ display: "flex", gap: 8 }}>
              {["lesson", "exercise", "quiz"].map(v => (
                <button key={v} onClick={() => { setView(v); if (v === "quiz") resetQuiz(); }}
                  style={{
                    padding: "7px 14px",
                    borderRadius: 20,
                    border: `1px solid ${view === v ? module.color : "#252A38"}`,
                    background: view === v ? `${module.color}22` : "transparent",
                    color: view === v ? module.color : "#6B7280",
                    cursor: "pointer",
                    fontSize: 12,
                    fontFamily: "monospace"
                  }}>
                  {v === "lesson" ? "📖 Lessons" : v === "exercise" ? "🛠 Exercise" : "🧩 Quiz"}
                </button>
              ))}
            </div>
          </div>

          {/* LESSONS VIEW */}
          {view === "lesson" && (
            <div style={{ display: "flex", gap: 20 }}>
              {/* Lesson List */}
              <div style={{ width: 180, flexShrink: 0 }}>
                {module.lessons.map((l, li) => (
                  <button key={li} onClick={() => setActiveLesson(li)}
                    style={{
                      width: "100%",
                      marginBottom: 8,
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: `1px solid ${activeLesson === li ? module.color + "66" : "#1E2230"}`,
                      background: activeLesson === li ? `${module.color}15` : "#13161F",
                      cursor: "pointer",
                      textAlign: "left"
                    }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                      <span style={{
                        fontSize: 9,
                        padding: "2px 6px",
                        borderRadius: 10,
                        background: `${typeColors[l.type] || "#4A90D9"}22`,
                        color: typeColors[l.type] || "#4A90D9",
                        fontFamily: "monospace"
                      }}>{l.type}</span>
                      {isLessonComplete(activeWeek, li) && <span style={{ color: "#2ECC71", fontSize: 12 }}>✓</span>}
                    </div>
                    <div style={{ fontSize: 11, color: activeLesson === li ? "#E8EAF0" : "#9CA3AF", lineHeight: 1.3 }}>
                      {li + 1}. {l.title}
                    </div>
                  </button>
                ))}
              </div>

              {/* Lesson Content */}
              <div style={{ flex: 1 }}>
                <div style={{
                  background: "#181C26",
                  borderRadius: 12,
                  padding: "24px",
                  border: "1px solid #1E2230"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <span style={{
                      fontSize: 10,
                      padding: "3px 10px",
                      borderRadius: 12,
                      background: `${typeColors[lesson.type] || "#4A90D9"}22`,
                      color: typeColors[lesson.type] || "#4A90D9",
                      fontFamily: "monospace",
                      letterSpacing: "0.5px"
                    }}>{lesson.type.toUpperCase()}</span>
                    <span style={{ fontSize: 11, color: "#4B5563", fontFamily: "monospace" }}>
                      Lesson {activeLesson + 1} of {module.lessons.length}
                    </span>
                  </div>

                  <h2 style={{ fontSize: 20, color: "#E8EAF0", marginBottom: 16, lineHeight: 1.3 }}>
                    {lesson.title}
                  </h2>

                  <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.7, marginBottom: 20, borderLeft: `3px solid ${module.color}`, paddingLeft: 14 }}>
                    {lesson.content}
                  </p>

                  <div>
                    <button
                      onClick={() => setExpandedPoints(!expandedPoints)}
                      style={{
                        background: "none", border: "none", cursor: "pointer",
                        color: "#6B7280", fontSize: 12, fontFamily: "monospace",
                        marginBottom: 12, display: "flex", alignItems: "center", gap: 6
                      }}>
                      {expandedPoints ? "▾" : "▸"} KEY POINTS ({lesson.keyPoints.length})
                    </button>
                    {expandedPoints && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {lesson.keyPoints.map((pt, pi) => (
                          <div key={pi} style={{
                            display: "flex", gap: 12, alignItems: "flex-start",
                            padding: "10px 14px",
                            background: "#13161F",
                            borderRadius: 8,
                            border: "1px solid #1E2230"
                          }}>
                            <span style={{ color: module.color, marginTop: 2, flexShrink: 0, fontSize: 14 }}>›</span>
                            <span style={{ fontSize: 13, color: "#C8CCD8", lineHeight: 1.6 }}>{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
                    {activeLesson > 0 && (
                      <button onClick={() => setActiveLesson(activeLesson - 1)}
                        style={{
                          padding: "9px 18px", borderRadius: 8,
                          border: "1px solid #252A38", background: "transparent",
                          color: "#9CA3AF", cursor: "pointer", fontSize: 13
                        }}>← Previous</button>
                    )}
                    <button onClick={() => {
                      markComplete();
                      if (activeLesson < module.lessons.length - 1) setActiveLesson(activeLesson + 1);
                    }}
                      style={{
                        padding: "9px 20px", borderRadius: 8,
                        background: isLessonComplete(activeWeek, activeLesson) ? "#1E2230" : module.color,
                        border: "none",
                        color: isLessonComplete(activeWeek, activeLesson) ? "#6B7280" : "#0F1117",
                        cursor: "pointer", fontSize: 13, fontWeight: "bold"
                      }}>
                      {isLessonComplete(activeWeek, activeLesson) ? "✓ Done" : activeLesson < module.lessons.length - 1 ? "Mark Done & Next →" : "Mark Complete ✓"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EXERCISE VIEW */}
          {view === "exercise" && (
            <div style={{
              background: "#181C26",
              borderRadius: 12,
              padding: "28px 32px",
              border: `1px solid ${module.color}33`
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #1E2230"
              }}>
                <span style={{ fontSize: 24 }}>🛠</span>
                <div>
                  <div style={{ fontSize: 11, color: module.color, fontFamily: "monospace", marginBottom: 3 }}>
                    PRACTICAL EXERCISE · WEEK {module.week}
                  </div>
                  <h2 style={{ fontSize: 18, color: "#E8EAF0" }}>{module.practicalExercise.title}</h2>
                </div>
              </div>
              <div style={{
                background: "#13161F",
                borderRadius: 10,
                padding: "20px 24px",
                borderLeft: `4px solid ${module.color}`
              }}>
                <p style={{ fontSize: 14, color: "#C8CCD8", lineHeight: 1.8, margin: 0 }}>
                  {module.practicalExercise.description}
                </p>
              </div>
              <div style={{
                marginTop: 20,
                background: `${module.color}11`,
                borderRadius: 10,
                padding: "16px 20px",
                border: `1px solid ${module.color}22`
              }}>
                <div style={{ fontSize: 12, color: module.color, fontFamily: "monospace", marginBottom: 8 }}>
                  💡 WHY THIS MATTERS
                </div>
                <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.7, margin: 0 }}>
                  Exercises are the difference between knowing ITIL and using ITIL. Each one is designed to be done in 20–30 minutes using real work artefacts from your own environment — not textbook scenarios.
                </p>
              </div>
            </div>
          )}

          {/* QUIZ VIEW */}
          {view === "quiz" && (
            <div style={{
              background: "#181C26",
              borderRadius: 12,
              padding: "28px 32px",
              border: "1px solid #1E2230"
            }}>
              <div style={{ marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #1E2230" }}>
                <div style={{ fontSize: 11, color: module.color, fontFamily: "monospace", marginBottom: 6 }}>
                  KNOWLEDGE CHECK · {module.quiz.length} QUESTIONS
                </div>
                <h2 style={{ fontSize: 18, color: "#E8EAF0" }}>Week {module.week} Quiz</h2>
              </div>

              {module.quiz.map((q, qi) => (
                <div key={qi} style={{
                  marginBottom: 24,
                  padding: "18px 20px",
                  background: "#13161F",
                  borderRadius: 10,
                  border: quizSubmitted
                    ? quizAnswers[qi] === q.a
                      ? "1px solid #2ECC7166"
                      : "1px solid #E0525266"
                    : "1px solid #1E2230"
                }}>
                  <p style={{ fontSize: 14, color: "#E8EAF0", marginBottom: 14, fontWeight: "bold" }}>
                    {qi + 1}. {q.q}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {q.options.map(opt => {
                      let bg = "#181C26";
                      let border = "#252A38";
                      let color = "#9CA3AF";
                      if (quizAnswers[qi] === opt && !quizSubmitted) { bg = `${module.color}22`; border = module.color; color = "#E8EAF0"; }
                      if (quizSubmitted && opt === q.a) { bg = "#2ECC7122"; border = "#2ECC71"; color = "#2ECC71"; }
                      if (quizSubmitted && quizAnswers[qi] === opt && opt !== q.a) { bg = "#E0525222"; border = "#E05252"; color = "#E05252"; }
                      return (
                        <button key={opt}
                          onClick={() => !quizSubmitted && handleQuizAnswer(qi, opt)}
                          style={{
                            padding: "10px 14px", borderRadius: 8,
                            border: `1px solid ${border}`, background: bg,
                            color, cursor: quizSubmitted ? "default" : "pointer",
                            textAlign: "left", fontSize: 13
                          }}>{opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {!quizSubmitted ? (
                <button
                  onClick={submitQuiz}
                  disabled={Object.keys(quizAnswers).length < module.quiz.length}
                  style={{
                    padding: "11px 28px", borderRadius: 8,
                    background: Object.keys(quizAnswers).length < module.quiz.length ? "#1E2230" : module.color,
                    border: "none",
                    color: Object.keys(quizAnswers).length < module.quiz.length ? "#4B5563" : "#0F1117",
                    cursor: Object.keys(quizAnswers).length < module.quiz.length ? "not-allowed" : "pointer",
                    fontSize: 14, fontWeight: "bold"
                  }}>
                  Submit Answers
                </button>
              ) : (
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{
                    padding: "12px 24px", borderRadius: 8,
                    background: quizScore === module.quiz.length ? "#2ECC7122" : quizScore >= 2 ? `${module.color}22` : "#E0525222",
                    border: `1px solid ${quizScore === module.quiz.length ? "#2ECC71" : quizScore >= 2 ? module.color : "#E05252"}`,
                    color: quizScore === module.quiz.length ? "#2ECC71" : quizScore >= 2 ? module.color : "#E05252",
                    fontSize: 15, fontWeight: "bold"
                  }}>
                    {quizScore}/{module.quiz.length} correct {quizScore === module.quiz.length ? "🎉" : quizScore >= 2 ? "👍" : "💪"}
                  </div>
                  <button onClick={resetQuiz}
                    style={{
                      padding: "11px 20px", borderRadius: 8,
                      border: "1px solid #252A38", background: "transparent",
                      color: "#9CA3AF", cursor: "pointer", fontSize: 13
                    }}>Try Again</button>
                </div>
              )}
            </div>
          )}

          {/* Week navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
            {activeWeek > 0 ? (
              <button onClick={() => changeWeek(activeWeek - 1)}
                style={{
                  padding: "9px 18px", borderRadius: 8,
                  border: "1px solid #252A38", background: "transparent",
                  color: "#9CA3AF", cursor: "pointer", fontSize: 13
                }}>← Week {activeWeek}</button>
            ) : <div />}
            {activeWeek < courseData.length - 1 && (
              <button onClick={() => changeWeek(activeWeek + 1)}
                style={{
                  padding: "9px 18px", borderRadius: 8,
                  border: `1px solid ${courseData[activeWeek + 1].color}44`,
                  background: `${courseData[activeWeek + 1].color}11`,
                  color: courseData[activeWeek + 1].color, cursor: "pointer", fontSize: 13
                }}>Week {activeWeek + 2}: {courseData[activeWeek + 1].title} →</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}