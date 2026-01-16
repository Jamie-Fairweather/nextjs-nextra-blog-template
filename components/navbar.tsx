'use client'

import Link from 'next/link'
import { ThemeSwitch } from 'nextra-theme-blog'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Search } from 'nextra/components'

export function Navbar() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/blogs', label: 'Blog' },
    ]

    return (
        <nav className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
            <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <Link href="/" className="text-lg font-bold">
                        <span>John Doe</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden items-center space-x-6 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`hover:text-primary text-sm font-medium transition-colors ${
                                pathname === item.href ? 'text-foreground' : 'text-muted-foreground'
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Search placeholder="Search" />
                    <ThemeSwitch />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeSwitch />
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-muted-foreground hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md p-2"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="border-border/40 bg-background border-t md:hidden">
                    <div className="container space-y-2 px-4 py-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                    pathname === item.href
                                        ? 'bg-accent text-accent-foreground'
                                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
