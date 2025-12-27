import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  Coffee,
  EyeOff,
  Github,
  RefreshCw,
  Shield,
  Sparkles,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const links = {
  source: "https://github.com/elliottshort/sellout-shield",
  coffee: "https://buymeacoffee.com/Mbzur1U",
  // Add your Chrome Web Store listing URL once it exists (can be unlisted during early rollout).
  // Example: "https://chromewebstore.google.com/detail/<your-extension-id>"
  webstore: "",
}

export default function Home() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 ss-aurora opacity-80 blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0%,rgba(255,255,255,0.10)_0%,transparent_60%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/30 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="#top" className="flex items-center gap-3">
            <Image src="/img/icon.png" alt="SelloutShield" width={36} height={36} priority />
            <span className="hidden text-sm font-semibold tracking-tight sm:inline">
              SelloutShield
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a className="hover:text-foreground" href="#features">
              Features
            </a>
            <a className="hover:text-foreground" href="#install">
              Install
            </a>
            <a className="hover:text-foreground" href="#faq">
              FAQ
            </a>
            <a className="hover:text-foreground" href="#support">
              Support
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              href={links.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              Source
            </a>
            <a className={cn(buttonVariants({ size: "sm" }))} href="#install">
              Install
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="relative">
        <section className="mx-auto w-full max-w-6xl px-4 pt-14 pb-12 md:px-6 md:pt-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="animate-in fade-in slide-in-from-bottom-3 duration-700">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="gap-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  Free • Open source • No analytics
                </Badge>
                <Badge variant="outline" className="text-muted-foreground">
                  Runs only on youtube.com
                </Badge>
                <Badge variant="outline" className="text-muted-foreground">
                  Community blocklist
                </Badge>
              </div>

              <h1 className="mt-5 text-pretty text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Keep your YouTube feed{" "}
                <span className="bg-[linear-gradient(120deg,oklch(0.78_0.22_280),oklch(0.72_0.25_260),oklch(0.80_0.20_320))] bg-clip-text text-transparent">
                  human
                </span>
                .
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                Private equity rollups don’t win by making better videos. They win by turning
                creators into content farms—more volume, safer formats, more ads, less point of
                view. SelloutShield is a small opt-out: it uses a community-maintained list of
                rolled-up channels and keeps them from taking over your feed.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                {links.webstore ? (
                  <a
                    className={cn(buttonVariants({ size: "lg" }))}
                    href={links.webstore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chrome Web Store
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Button size="lg" disabled aria-disabled title="Chrome Web Store listing is pending review">
                    Chrome Web Store (Coming soon)
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
                <a className={cn(buttonVariants({ variant: "outline", size: "lg" }))} href="#install">
                  Install in developer mode
                </a>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Chrome Web Store listing: coming soon
                </span>
                <span className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Filters home, search, subscriptions, up next
                </span>
                <span className="inline-flex items-center gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Community list auto-updates daily
                </span>
                <span className="inline-flex items-center gap-2">
                  <EyeOff className="h-4 w-4" />
                  Full-screen “Blocked by SelloutShield” overlay
                </span>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-bottom-3 duration-700 md:delay-150">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-card/30 p-7 backdrop-blur">
                <div className="absolute inset-0 opacity-60">
                  <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[oklch(0.72_0.25_280/0.35)] blur-3xl motion-safe:animate-[ss-float_10s_ease-in-out_infinite]" />
                  <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[oklch(0.68_0.25_260/0.28)] blur-3xl motion-safe:animate-[ss-float_12s_ease-in-out_infinite]" />
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/img/icon.png"
                      alt="SelloutShield"
                      width={56}
                      height={56}
                      className="shrink-0"
                    />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        SelloutShield Chrome Extension
                      </p>
                      <p className="text-xl font-semibold tracking-tight">
                        Keep rollups out of the way.
                      </p>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    {[
                      "Hides videos from blocked channels across common surfaces",
                      "Blocks channel pages with a full-screen overlay",
                      "Pulls the community list every 24 hours (ETag / 304 friendly)",
                    ].map((text) => (
                      <div key={text} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <Check className="h-4 w-4" />
                        </span>
                        <p className="text-sm leading-relaxed text-foreground/90">{text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      className={cn(buttonVariants({ variant: "outline" }))}
                      href={links.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      Find the repo
                    </a>
                    <a
                      className={cn(buttonVariants({ variant: "secondary" }))}
                      href={links.coffee}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Coffee className="h-4 w-4" />
                      Buy me a coffee
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-pretty text-2xl font-semibold tracking-tight md:text-3xl">
                A small opt-out that compounds.
              </h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                Rollups crowd out the feed. SelloutShield removes that noise using a community
                blocklist, so you see more of the work that still has skin in the game.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Gets out of your feed fast",
                description:
                  "Hides videos from blocked channels across home, search, subscriptions, and “Up next”.",
              },
              {
                title: "Hard stops on channel pages",
                description:
                  "Shows a full-screen “Blocked by SelloutShield” overlay on blocked channel pages and detectable watch pages.",
              },
              {
                title: "Community list, kept fresh",
                description:
                  "Pulls `channels.json` on install and every 24 hours (plus manual checks) with ETag caching. Not a personal blocklist—contribute to the list instead.",
              },
            ].map((f) => (
              <Card key={f.title} className="animate-in fade-in slide-in-from-bottom-2 duration-700">
                <CardHeader>
                  <CardTitle>{f.title}</CardTitle>
                  <CardDescription>{f.description}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            ))}
          </div>
        </section>

        <section id="install" className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
          <Card>
            <CardHeader>
              <CardTitle>Install</CardTitle>
              <CardDescription>
                Chrome Web Store listing is coming soon. Until then, install in developer mode (no build step).
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-background/20 p-5">
                  <p className="text-sm font-semibold">Chrome Web Store (coming soon)</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    One-click install will live here once review clears.
                  </p>
                  <div className="mt-4">
                    {links.webstore ? (
                      <a
                        className={cn(buttonVariants({ size: "lg" }))}
                        href={links.webstore}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open listing
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <Button
                        size="lg"
                        disabled
                        aria-disabled
                        title="Chrome Web Store listing is pending review"
                      >
                        Coming soon
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background/20 p-5">
                  <p className="text-sm font-semibold">Install (developer mode)</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Load the extension folder (unpacked). This is the quickest path while the Web Store is reviewing.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-background/20 p-5">
                  <p className="text-sm font-semibold">1) Get the extension files</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You can clone the repo (recommended) or download a ZIP.
                  </p>

                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-sm font-medium text-foreground/90">Option A — Clone</p>
                      <div className="mt-2 rounded-2xl border border-border/60 bg-background/30 px-4 py-3 font-mono text-xs text-foreground/90">
                        <div>git clone {links.source}.git</div>
                        <div>cd sellout-shield</div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-foreground/90">Option B — Download ZIP</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Download the repo as a ZIP from GitHub, unzip it, and remember where the folder is.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <a
                          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                          href={links.source}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          Open repo
                        </a>
                        <a
                          className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
                          href={`${links.source}/archive/refs/heads/main.zip`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download ZIP
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background/20 p-5">
                  <p className="text-sm font-semibold">2) Load it in Chrome</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    In the next steps, you’ll pick the folder that contains <span className="font-mono">manifest.json</span>
                    (sometimes it’s the repo root, sometimes a subfolder).
                  </p>
                </div>
              </div>

              <ol className="grid gap-3 md:grid-cols-2">
                {[
                  "Open chrome://extensions",
                  "Enable Developer mode",
                  "Load unpacked → select the folder with manifest.json",
                  "Open YouTube (refresh any already-open tabs)",
                ].map((step, i) => (
                  <li
                    key={step}
                    className="flex gap-3 rounded-2xl border border-border/60 bg-background/20 p-4"
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground/90">{step}</span>
                  </li>
                ))}
              </ol>

              <Separator className="my-2" />

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-background/20 p-5">
                  <p className="text-sm font-semibold">Block list format</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    `channels.json` is community-maintained and supports channel IDs (preferred) and names (fallback).
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/20 p-5">
                  <p className="text-sm font-semibold">Updates</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Checks daily via Chrome alarms and on install; uses ETag/If-None-Match for
                    cheap 304s.
          </p>
        </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="faq" className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>FAQ</CardTitle>
                <CardDescription>What you’d ask before installing.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  {
                    q: "Does it collect any data?",
                    a: "No analytics. It runs only on https://www.youtube.com/* and stores the block list + metadata in chrome.storage.local.",
                  },
                  {
                    q: "Can I block my own channels?",
                    a: "Not right now. SelloutShield is powered by a community-maintained list of rolled-up channels. If something belongs on the list, open a PR with a source for the ownership claim.",
                  },
                  {
                    q: "What’s on the blocklist?",
                    a: "Channels that have been rolled up under private equity or similar consolidation. The list is conservative by design and stays transparent via `channels.json`.",
                  },
                  {
                    q: "How does blocking work?",
                    a: "It filters in-page renderer JSON (initial data + youtubei responses). It’s not a network-layer blocker.",
                  },
                  {
                    q: "Will YouTube changes break it?",
                    a: "Sometimes. YouTube renderer shapes change regularly, so filtering rules may need updates occasionally.",
                  },
                ].map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-2xl border border-border/60 bg-background/20 px-4 py-3"
                  >
                    <summary className="cursor-pointer list-none text-sm font-medium text-foreground/90">
                      {item.q}
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </details>
                ))}
              </CardContent>
            </Card>

            <Card id="support">
              <CardHeader>
                <CardTitle>Support</CardTitle>
                <CardDescription>
                  Every small bit counts, thanks in advance for your support!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-2xl border border-border/60 bg-background/20 p-5">
                  <p className="text-sm font-medium">Buy me a coffee</p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                    {links.coffee ? (
                      <a
                        className={cn(buttonVariants({ size: "lg" }))}
                        href={links.coffee}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Coffee className="h-4 w-4" />
                        Buy me a coffee
                      </a>
                    ) : (
                      <Button size="lg" disabled aria-disabled>
                        <Coffee className="h-4 w-4" />
                        Buy me a coffee
                      </Button>
                    )}
                    <a
                      className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                      href={links.source}
            target="_blank"
            rel="noopener noreferrer"
          >
                      <Github className="h-4 w-4" />
                      Contribute
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background/20 p-5">
                  <p className="text-sm font-medium">Contributions</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Most PRs are edits to `channels.json`. Keep it tight, include sources, and help
                    the list stay defensible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="mx-auto w-full max-w-6xl px-4 pb-14 md:px-6">
          <Separator className="mb-8" />
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Image src="/img/icon.png" alt="SelloutShield" width={28} height={28} />
              <p className="text-sm text-muted-foreground">
                SelloutShield
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
                href={links.source}
            target="_blank"
            rel="noopener noreferrer"
          >
                <Github className="h-4 w-4" />
                Source
              </a>
              <a className={cn(buttonVariants({ variant: "ghost", size: "sm" }))} href="#install">
                Install
              </a>
              <a className={cn(buttonVariants({ variant: "ghost", size: "sm" }))} href="#support">
                Support
          </a>
        </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
