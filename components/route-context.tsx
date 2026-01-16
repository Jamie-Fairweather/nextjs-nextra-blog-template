'use client'

import { createContext, useContext, type ReactNode } from 'react'

const RouteContext = createContext<{ isLandingPage: boolean } | null>(null)

export function RouteContextProvider({ children, isLandingPage }: { children: ReactNode; isLandingPage: boolean }) {
    return <RouteContext.Provider value={{ isLandingPage }}>{children}</RouteContext.Provider>
}

export function useRouteContext() {
    const context = useContext(RouteContext)
    return context
}
