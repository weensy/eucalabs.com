export type Project = {
  name: string
  category: string
  year: string
  description: string
  outcome: string
  highlights: string[]
  status: 'live' | 'soon'
  url?: string
  accent: string
}

export const projects: Project[] = [
  {
    name: 'Remoji',
    category: 'Remote work platform',
    year: 'Live',
    description:
      'A remote job board for Japan designed to help people find thoughtful teams without the usual clutter and noise.',
    outcome: 'Clear browsing paths, editorial restraint, and a more trustworthy hiring surface.',
    highlights: ['Quiet job discovery', 'Editorial content hierarchy', 'Purposeful conversion flow'],
    status: 'live',
    url: 'https://remoji.jp',
    accent: '#9CD7BE',
  },
  {
    name: 'Daygram',
    category: 'Private photo journal',
    year: 'Live',
    description:
      'A private journaling app built around one photo and one line a day, making it easier to keep a record of everyday life without the pressure of long entries.',
    outcome: 'A lightweight daily ritual that turns photos and short notes into a personal calendar of memories.',
    highlights: ['One photo a day', 'One line journaling', 'On-device privacy'],
    status: 'live',
    url: 'https://daygram.app',
    accent: '#F5EDE2',
  },
]
