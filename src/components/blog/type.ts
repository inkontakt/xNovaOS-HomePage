export type BlogPost = {
  slug: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  pubDate: string
  author: string
  avatarUrl: string
  category: string
  readTime: number
  featured: boolean
  tags?: string[]
}

export interface BlogProps {
  blogData?: BlogPost[]
}

export type BlogContentProps = {
  metadata: BlogPost[]
  content: string
  previousPost: BlogProps | null
  nextPost: BlogProps | null
}
