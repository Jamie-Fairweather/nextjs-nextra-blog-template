import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { ViewTransitions } from 'next-view-transitions'
import { getPageMap } from 'nextra/page-map'
import { ThemeProvider } from '@/components/theme-provider'
import '@/app/globals.css'
import { Layout } from 'nextra-theme-docs'
import { Navbar } from '@/components/navbar'

export const metadata: Metadata = {
    title: {
        default: 'John Doe',
        template: '%s | John Doe',
    },
    description: 'Personal portfolio and blog of John Doe',
    keywords: ['blog', 'portfolio', 'nextjs', 'nextra', 'web development'],
    authors: [{ name: 'John Doe' }],
    creator: 'John Doe',
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#000000' },
    ],
}

const CustomFooter = () => {
    return (
        <footer className="border-border bg-background border-t">
            <div className="text-muted-foreground container mx-auto px-4 py-8 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default async function RootLayout({ children }: { children: ReactNode }) {
    const pageMap = await getPageMap()

    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ViewTransitions>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        <Layout
                            pageMap={pageMap}
                            navbar={<Navbar key="navbar" />}
                            footer={<CustomFooter key="footer" />}
                            navigation={false}
                            editLink={false}
                            feedback={{ content: null }}
                            lastUpdated={undefined}
                        >
                            <div key="layout-children">{children}</div>
                        </Layout>
                    </ThemeProvider>
                </ViewTransitions>
            </body>
        </html>
    )
}
