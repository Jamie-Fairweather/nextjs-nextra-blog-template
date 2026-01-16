'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

interface CustomWrapperProps {
    children: ReactNode
    toc?: ReactNode
    metadata?: {
        title?: string
        [key: string]: unknown
    }
    sourceCode?: string
    // This will be set by mdx-components.js
    DefaultWrapper?: React.ComponentType<CustomWrapperProps>
}

export function CustomWrapper({ children, toc, metadata, sourceCode, DefaultWrapper }: CustomWrapperProps) {
    const pathname = usePathname()
    const isLandingPage = pathname === '/'

    // For landing page, render without the default wrapper (which includes title)
    if (isLandingPage) {
        return <>{children}</>
    }

    // For other pages, use the default Nextra wrapper
    if (DefaultWrapper) {
        return (
            <DefaultWrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
                {children}
            </DefaultWrapper>
        )
    }

    // Fallback if no default wrapper
    return <>{children}</>
}
