"use client"

import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <main className="min-h-[100svh] flex items-center justify-center px-4 py-10 bg-gradient-to-br from-background to-muted/30">
      <Link href="/" className="fixed top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/70 backdrop-blur hover:bg-muted/60 transition text-sm">
        <span>←</span>
        <span>Back</span>
      </Link>
      <div className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:block rounded-3xl border border-border p-8 bg-card/40 backdrop-blur-md">
          <h2 className="text-3xl font-bold mb-4">Welcome back</h2>
          <p className="text-muted-foreground mb-8">Sign in to continue crafting content with AI assistance.</p>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
              Real-time suggestions and tone adjustments
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
              Templates for emails, essays, and more
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
              Save and manage drafts in the cloud
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card/60 backdrop-blur-md p-6 sm:p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold">Sign in</h1>
            <p className="text-sm text-muted-foreground mt-2">Start writing smarter in seconds.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button className="h-10 rounded-md border border-border hover:bg-muted/50 transition text-sm">
              Continue with Google
            </button>
            <button className="h-10 rounded-md border border-border hover:bg-muted/50 transition text-sm">
              Continue with GitHub
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">or continue with email</span>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border border-input" />
                Remember me
              </label>
              <Link href="#" className="text-primary hover:underline">Forgot password?</Link>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="text-sm text-muted-foreground mt-6 text-center">
            Don&apos;t have an account? {" "}
            <Link href="#" className="text-primary hover:underline">Create one</Link>
          </p>
        </div>
      </div>
    </main>
  )
}
