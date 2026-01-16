import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react'

export function LandingPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 md:py-32">
                <div className="mx-auto max-w-4xl space-y-8 text-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                            Hi, I&apos;m <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent">John Doe</span>
                        </h1>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-xl md:text-2xl">Software Developer & Rollercoaster Enthusiast</p>
                    </div>

                    <p className="text-muted-foreground mx-auto max-w-xl text-lg">
                        Welcome to my personal space where I share thoughts, projects, and insights about software development, technology, and my
                        adventures exploring rollercoasters around the world.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                        <Link
                            href="/blogs"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-8 py-3 text-sm font-medium shadow transition-colors"
                        >
                            Read My Blogs
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        {/* <Link
                            href="/about"
                            className="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md border px-8 py-3 text-sm font-medium shadow-sm transition-colors"
                        >
                            Learn More About Me
                        </Link> */}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="border-border container mx-auto px-4 py-20">
                <div className="mx-auto max-w-3xl space-y-8">
                    <h2 className="text-center text-3xl font-bold md:text-4xl">About Me</h2>
                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                        <p className="text-muted-foreground text-center text-lg">
                            I&apos;m a passionate software developer who loves building beautiful, functional applications. When I&apos;m not coding,
                            you can find me traveling to theme parks around the world, riding rollercoasters, and documenting my adventures. I combine
                            my love for technology with my enthusiasm for rollercoasters, often planning trips specifically to experience the latest
                            and greatest rides.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="border-border container mx-auto px-4 py-20">
                <div className="mx-auto max-w-2xl space-y-8 text-center">
                    <h2 className="text-3xl font-bold md:text-4xl">Get In Touch</h2>
                    <p className="text-muted-foreground text-lg">Have a project in mind or just want to chat? I&apos;d love to hear from you!</p>
                    <div className="flex justify-center gap-6 pt-4">
                        <a
                            href="mailto:contact@example.com"
                            className="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-full border p-3 shadow-sm transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-full border p-3 shadow-sm transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-full border p-3 shadow-sm transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-full border p-3 shadow-sm transition-colors"
                            aria-label="Twitter"
                        >
                            <Twitter className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
