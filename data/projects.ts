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
  {
    name: 'EstateX',
    category: 'Real estate market interface',
    year: 'Soon',
    description:
      'A real estate app that lets people read property markets with the speed and clarity of a trading interface, closer to TradingView or Binance than a traditional listing portal.',
    outcome: 'A market-first way to browse real estate through charts, signals, and live-looking price movement.',
    highlights: ['Chart-driven property view', 'Trading-style market cues', 'Faster market scanning'],
    status: 'soon',
    accent: '#C6D7E6',
  },
  {
    name: 'Spools',
    category: 'Offline reading utility',
    year: 'Soon',
    description:
      'An app for saving Threads posts into a private offline archive, so interesting writing does not disappear into the feed.',
    outcome: 'A calmer way to collect and revisit Threads posts without depending on the timeline.',
    highlights: ['Offline post archive', 'Threads-focused capture', 'Private personal library'],
    status: 'soon',
    accent: '#E8D8C7',
  },
  {
    name: 'Hokaope',
    category: 'Hokatsu support service',
    year: 'Soon',
    description:
      'A service that helps families navigate hokatsu with clearer information, practical guidance, and less administrative stress.',
    outcome: 'A more organized way to prepare for childcare applications and make decisions with confidence.',
    highlights: ['Hokatsu guidance', 'Family decision support', 'Lower application stress'],
    status: 'soon',
    accent: '#D8E6D5',
  },
  {
    name: 'Moodroom',
    category: 'Film camera filter app',
    year: 'Soon',
    description:
      'A camera app built around film-inspired filters, giving everyday photos a softer analog mood without a heavy editing workflow.',
    outcome: 'A lightweight way to shoot and style photos with the texture and tone of film.',
    highlights: ['Film-inspired filters', 'Analog photo mood', 'Lightweight editing flow'],
    status: 'soon',
    accent: '#E6D7D1',
  },
]
