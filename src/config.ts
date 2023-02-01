import type { NavItems } from './types'

export const SITE = {
    title: "Astro",
    name: "Astro Blog",
    description: "My place in the Web",
    author: "Łukasz Strzępek"
}

export const NAV_ITEMS: NavItems = {
    posts: {
        path: '/posts',
        title: 'posts'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    about: {
        path: '/about',
        title: 'about'
    }
}
export const SOCIALS = [
    {
        name: "Github",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: ` ${SITE.title} on Github`,
        active: true,
    },
    {
        name: "LinkedIn",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on LinkedIn`,
        active: true,
    },
    {
        name: "Mail",
        href: "mailto:yourmail@gmail.com",
        linkTitle: `Send an email to ${SITE.title}`,
        active: false,
    },
    {
        name: "Twitter",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Twitter`,
        active: true,
    },
    {
        name: "Instagram",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Instagram`,
        active: true,
    },
    {
        name: "Facebook",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Facebook`,
        active: false,
    }
];
// Ink - Theme configuration
export const PAGE_SIZE = 2
export const USE_POST_IMG_OVERLAY = false
