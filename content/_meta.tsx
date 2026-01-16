import type { MetaRecord } from 'nextra'

const meta: MetaRecord = {
    index: {
        title: 'Home',
        type: 'page',
        theme: {
            layout: 'full',
            timestamp: false,
        },
        display: 'hidden',
    },
    blog: {
        title: 'Blog',
        type: 'page',
        theme: {
            layout: 'full',
            timestamp: false,
        },
    },
    blogs: {
        display: 'hidden',
        theme: {
            timestamp: false,
        },
    },
} satisfies MetaRecord

export default meta
