export type NavItems = {
    [key: string]: NavItem
}

export type NavItem = {
    path: string
    title: string
}

export interface Frontmatter {
    title: string,
    ogImage?: string,
    description: string,
    author: string,
    pubDate: string,
    slug: string,
    featured: boolean,
    draft: boolean,
    tags: string[],
}
