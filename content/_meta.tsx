import type { MetaRecord } from 'nextra'

const meta: MetaRecord = {
    index: {
        title: 'Home',
        type: 'page',
        theme: {
            layout: 'full',
        },
        display: 'hidden',
    },
    blog: {
        title: 'Blog',
        type: 'page',
        theme: {
            layout: 'full',
        },
    },
    blogs: {
        display: 'hidden',
    },
} satisfies MetaRecord

export default meta
