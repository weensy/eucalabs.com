export type Project = {
  name: string
  description: string
  status: 'live' | 'soon'
  url?: string
  accent: string
}

export const projects: Project[] = [
  {
    name: 'Remoji',
    description: 'Remote job board for Japan—calm work, meaningful teams.',
    status: 'live',
    url: 'https://remoji.jp',
    accent: '#9CD7BE',
  },
  {
    name: 'Daygram',
    description: 'One-photo-a-day diary—quiet fragments, lasting clarity.',
    status: 'soon',
    accent: '#F5EDE2',
  },
]
