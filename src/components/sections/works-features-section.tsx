import { FolderSyncIcon, PencilIcon, WorkflowIcon } from 'lucide-react'
import WorksFeaturesSection from '@/components/blocks/works-features-section/works-features-section'

const WorksFeaturesData = [
  {
    id: 'describe-workflow',
    icon: <WorkflowIcon />,
    title: 'Describe your workflow',
    description:
      'Inform the agent about what you wish to automate, ranging from daily team summaries to lead follow-ups, ensuring clarity in your request.'
  },
  {
    id: 'connect-tools',
    icon: <FolderSyncIcon />,
    title: 'Connect your tools',
    description:
      'Link Gmail, Slack, Notion, or any app your team already uses. The agent syncs data between them and builds context automatically.'
  },
  {
    id: 'review-and-refine',
    icon: <PencilIcon />,
    title: 'Review and refine',
    description:
      'Every run is transparent. Approve, edit, or rerun workflows anytime — the agent learns from feedback to perform even better next time.'
  }
]

const WorksFeaturesSectionPage = () => {
  return <WorksFeaturesSection data={WorksFeaturesData} />
}

export default WorksFeaturesSectionPage
