import {
  Feature,
  TeamType,
  FAQ,
  Integration,
  PainPoint,
  Pillar,
  Step,
  EnterpriseBenefit,
  VideoTab,
} from '../types/content';

export const features: Feature[] = [
  {
    id: 'auto-capture',
    title: 'Automatically capture AI meeting notes and action items',
    description:
      'Get the most accurate meeting transcription - automatically! Action.IT is the AI meeting notetaker that records, transcribes, and summarizes meetings across Zoom, Google Meet, and MS Teams, so you can focus on the discussion.',
  },
  {
    id: 'ask-actionit',
    title: 'Ask Action.IT',
    description:
      "Get insights across your meetings with your own AI meeting chatbot. Prompt 'Ask Action.IT' to catch you up on meetings you missed, answer questions about specific meetings, and even write follow-up emails after a meeting.",
  },
  {
    id: 'centralized-library',
    title: 'All your recordings and recaps in one place',
    description:
      "Action.IT's library keeps all your recordings in one place. Privacy and sharing controls mean you can keep everything centralized while controlling who has access.",
  },
  {
    id: 'workflow-automation',
    title: 'Automate workflow updates',
    description:
      'Keep your workflows updated, automatically. Action.IT syncs meeting insights directly to Notion, Slack, and your calendar, suggesting fields to update based on what was discussed so your pipeline always stays accurate.',
  },
  {
    id: 'meeting-prep',
    title: 'Always show up prepared',
    description:
      "Smart meeting preparation and pre-meeting briefs mean you're always prepared for an effective meeting — even when you're in back-to-back meetings.",
  },
];

export const teamTypes: TeamType[] = [
  {
    id: 'customer-success',
    name: 'Customer Success',
    description:
      'Actionable AI meeting notes, follow-ups, and workflows for CS teams',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'AI meeting notes for marketing teams that need to move fast',
  },
  {
    id: 'engineering',
    name: 'Engineering',
    description:
      'Accurate AI meeting notes to capture even the most technical discussions',
  },
  {
    id: 'leadership',
    name: 'Leadership',
    description:
      'Accurate and secure AI meeting notes for leadership teams',
  },
  {
    id: 'sales',
    name: 'Sales',
    description:
      'Automated AI meeting notes, follow-ups and workflows for Sales teams',
  },
  {
    id: 'product',
    name: 'Product',
    description:
      'AI meeting notes for engineering teams that want to ship great products',
  },
  {
    id: 'hr',
    name: 'HR',
    description:
      'Secure AI meeting notes, transcripts and recordings for HR teams',
  },
  {
    id: 'it',
    name: 'IT',
    description:
      'AI note taking security and privacy controls for org-wide bot governance',
  },
];

export const faqs: FAQ[] = [
  {
    id: 'ai-training',
    question: 'Does Action.IT train its AI models on my meeting data?',
    answer:
      'No. Unlike most AI meeting notetakers, Action.IT never trains on your data. We use enterprise-grade encryption, SOC 2–compliant infrastructure, and strict access controls to ensure your information stays protected. This means your team benefits from powerful AI assistance without your conversations ever being used to train third-party models.',
  },
  {
    id: 'project-management',
    question:
      'Does Action.IT integrate with project management tools like Monday, Asana, or Linear?',
    answer:
      "Yes. Action.IT connects with popular project management platforms such as Asana, Monday, Jira, Linear, and ClickUp. After each meeting, action items captured in Action.IT can be automatically synced to your task lists or assigned to teammates – so follow-ups don't fall through the cracks.",
  },
  {
    id: 'crm-integration',
    question:
      'Can Action.IT sync meeting notes and insights to CRMs like Salesforce and HubSpot?',
    answer:
      'Yes. Action.IT integrates natively with Salesforce and HubSpot. It identifies relevant details from your meeting – such as deal updates, contact notes, or next steps – and suggests CRM fields to update automatically, keeping your pipeline data accurate and current.',
  },
  {
    id: 'enterprise-security',
    question: 'Is Action.IT secure for Enterprise use?',
    answer:
      'Yes! Action.IT was built from the ground up with security, privacy and control first. We follow security best practices including end-to-end encryption and continuous monitoring. Action.IT is SOC2, HIPAA, and GDPR compliant.',
  },
  {
    id: 'getting-started',
    question: 'How can I get started?',
    answer:
      "You can get started with Action.IT for yourself, your team, or your whole organization for free! You'll have 14 days of free access to the Action.IT Pro plan which includes AI recording credits for you to test out. After 14 days, you'll be downgraded to the free plan (free forever).",
  },
  {
    id: 'access-control',
    question:
      'Who can access my recordings and AI meeting notes in Action.IT?',
    answer:
      "By default, your Action.IT meeting notes and recordings are only accessible to internal meeting attendees. That means sensitive meetings like one-on-ones and leadership meetings are kept private. You can choose to make meeting recordings accessible outside of attendees by sharing them to custom recording channels. These can be accessible to the entire workspace or a subset of users — totally up to you!",
  },
];

export const integrations: Integration[] = [
  { id: 'notion', name: 'Notion' },
  {   id: 'slack',
    name: 'Slack',
    logo: '/logos/slack-logo.svg' },
  { id: 'salesforce', name: 'Salesforce' },
  { id: 'hubspot', name: 'HubSpot' },
  { id: 'monday', name: 'Monday' },
  { id: 'asana', name: 'Asana' },
  { id: 'clickup', name: 'ClickUp' },
  { id: 'jira', name: 'Jira' },
  { id: 'linear', name: 'Linear' },
  { id: 'confluence', name: 'Confluence' },
  { id: 'zapier', name: 'Zapier' },
];

export const painPoints: PainPoint[] = [
  {
    id: 'data-risks',
    icon: 'Database',
    title: 'Data Risks',
    description: 'Meeting data stored on third-party servers',
  },
  {
    id: 'manual-work',
    icon: 'Workflow',
    title: 'Manual Work',
    description: 'Having to copy summaries to your systems yourself',
  },
  {
    id: 'shallow-notes',
    icon: 'FileText',
    title: 'Shallow Notes',
    description: 'Transcripts without context',
  },
];

export const pillars: Pillar[] = [
  {
    id: 'privacy',
    title: 'Privacy – Your Data Never Stays',
    description:
      "Action.IT deletes every recording and note right after it's synced to your systems. Nothing is stored on our servers – your meetings remain your data, period.",
  },
  {
    id: 'automation',
    title: 'Automation – Insights Where You Need Them',
    description:
      'No more copying notes between apps. Action.IT automatically posts summaries, tasks, and highlights directly into Salesforce, Notion, Freshservice, and more.',
  },
  {
    id: 'intelligence',
    title: 'Intelligence – More Than Transcripts',
    description:
      "Action.IT understands context, decisions, and action items – not just keywords. It summarizes the 'why' and 'what next', not just the 'what'.",
  },
];

export const steps: Step[] = [
  {
    id: 'joins',
    icon: 'Calendar',
    title: '1. Action.IT Joins',
    description: 'Securely and automatically, via a calendar invite',
  },
  {
    id: 'analyzes',
    icon: 'Brain',
    title: '2. AI Listens & Analyzes',
    description: 'Transcribes and identifies key moments during the meeting',
  },
  {
    id: 'delivery',
    icon: 'LinkIcon',
    title: '3. Instant Delivery',
    description: 'Posts summary to your chosen platforms in seconds',
  },
  {
    id: 'deleted',
    icon: 'Trash2',
    title: '4. Data Deleted',
    description:
      "All meeting data is wiped from Action.IT's memory once delivered",
  },
];

export const enterpriseBenefits: EnterpriseBenefit[] = [
  {
    id: 'privacy-control',
    title: 'Privacy and Control',
    description:
      'Control who can record, what can be recorded and who can access meeting recordings and transcripts.',
  },
  {
    id: 'centralization',
    title: 'Centralization',
    description:
      'Record everything from 1-1s to customer calls and town hall meetings in one tool.',
  },
  {
    id: 'analytics',
    title: 'Org-wide Analytics',
    description:
      'Track meetings across the organization with analytics on the organization and individual teams.',
  },
];

export const videoTabs: VideoTab[] = [
  {
    id: 'pre-meeting',
    label: 'Pre Meeting',
    icon: 'Calendar',
    videoUrl:
      'https://framerusercontent.com/assets/0aVJPiVEXyEeQvqHvAopLsDNnE.mp4',
  },
  {
    id: 'in-meeting',
    label: 'In Meeting',
    icon: 'MessageSquare',
    videoUrl:
      'https://framerusercontent.com/assets/Rd1NMl9rBgjsbkNhlcEURZCPX8.mp4',
  },
  {
    id: 'post-meeting',
    label: 'Post Meeting',
    icon: 'FileText',
    videoUrl:
      'https://framerusercontent.com/assets/b2bGsAa00ExBRCMQAvCs5WAxhzA.mp4',
  },
];

export const integrationPartners = [
  'Salesforce',
  'Notion',
  'Slack',
  'HubSpot',
  'Asana',
  'Jira',
];

