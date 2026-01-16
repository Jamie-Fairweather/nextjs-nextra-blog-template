import { importPage } from 'nextra/pages'
import { readdir, stat } from 'fs/promises'
import { join } from 'path'
import { BlogListing } from './blog-listing'

interface BlogPost {
    title: string
    description?: string
    previewImage?: string
    date?: string
    route: string
}

async function getAllBlogPosts(): Promise<BlogPost[]> {
    const blogPosts: BlogPost[] = []
    const contentDir = join(process.cwd(), 'content', 'blog')

    // Recursively find all MDX files in the blog directory
    async function findMdxFiles(dir: string, basePath: string[] = []): Promise<string[][]> {
        const files: string[][] = []
        try {
            const entries = await readdir(dir)

            for (const entry of entries) {
                const fullPath = join(dir, entry)
                const stats = await stat(fullPath)

                if (stats.isDirectory()) {
                    // Recursively search subdirectories
                    const subFiles = await findMdxFiles(fullPath, [...basePath, entry])
                    files.push(...subFiles)
                } else if (entry.endsWith('.mdx') && entry !== 'index.mdx') {
                    // Found an MDX file, construct the route path
                    const fileName = entry.replace('.mdx', '')
                    files.push([...basePath, fileName])
                }
            }
        } catch (error) {
            // Directory doesn't exist or can't be read
            console.error(`Error reading directory ${dir}:`, error)
        }

        return files
    }

    const mdxFilePaths = await findMdxFiles(contentDir)

    // Load metadata for each blog post
    for (const pathSegments of mdxFilePaths) {
        try {
            // Construct route: /blog/theme-parks/example
            const route = '/blog/' + pathSegments.join('/')

            const { metadata: postMetadata } = await importPage(['blog', ...pathSegments])

            blogPosts.push({
                title: (postMetadata as { title?: string })?.title || 'Untitled',
                description: (postMetadata as { description?: string })?.description,
                previewImage:
                    (postMetadata as { previewImage?: string; image?: string })?.previewImage ||
                    (postMetadata as { previewImage?: string; image?: string })?.image,
                date: (postMetadata as { date?: string })?.date,
                route: route,
            })
        } catch (error) {
            console.error(`Error loading metadata for blog/${pathSegments.join('/')}:`, error)
        }
    }

    // Sort by date (newest first) if available, otherwise by title
    blogPosts.sort((a, b) => {
        if (a.date && b.date) {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        }
        return a.title.localeCompare(b.title)
    })

    return blogPosts
}

export async function BlogPage() {
    const blogPosts = await getAllBlogPosts()

    return <BlogListing posts={blogPosts} />
}
