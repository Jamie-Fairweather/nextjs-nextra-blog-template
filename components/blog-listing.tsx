'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BlogPost {
    title: string
    description?: string
    previewImage?: string
    date?: string
    route: string
}

interface BlogListingProps {
    posts: BlogPost[]
}

const POSTS_PER_PAGE = 6

export function BlogListing({ posts }: BlogListingProps) {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE
    const currentPosts = posts.slice(startIndex, endIndex)

    const formatDate = (dateString?: string) => {
        if (!dateString) return null
        try {
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })
        } catch {
            return null
        }
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mx-auto max-w-6xl">
                {/* <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">All Blogs</h1>

                </div> */}

                {posts.length === 0 ? (
                    <div className="text-muted-foreground py-12 text-center">
                        <p>No blog posts yet. Check back soon!</p>
                    </div>
                ) : (
                    <>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {currentPosts.map((post) => (
                                <Link
                                    key={post.route}
                                    href={post.route}
                                    className="group border-border bg-card hover:border-primary/50 rounded-lg border shadow-sm transition-all hover:shadow-md"
                                >
                                    <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                                        {post.previewImage ? (
                                            <Image
                                                src={post.previewImage}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        ) : (
                                            <div className="bg-muted flex h-full w-full items-center justify-center">
                                                <span className="text-muted-foreground text-sm">No preview image</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h2 className="group-hover:text-primary mb-2 text-xl font-semibold transition-colors">{post.title}</h2>
                                        {post.description && <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">{post.description}</p>}
                                        {post.date && (
                                            <div className="text-muted-foreground flex items-center gap-2 text-xs">
                                                <Calendar className="h-3 w-3" />
                                                <span>{formatDate(post.date)}</span>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className="mt-12 flex items-center justify-center gap-4">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                                    disabled={currentPage === 1}
                                >
                                    <ChevronLeft className="mr-2 h-4 w-4" />
                                    Previous
                                </Button>
                                <span className="text-muted-foreground text-sm">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
