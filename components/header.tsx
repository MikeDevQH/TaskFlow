import Link from "next/link"
import { Github } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className="flex h-14 sm:h-16 items-center px-3 sm:px-4 md:px-6">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="" className="w-8 h-8" />
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight gradient-text">SortlyTask</h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="https://github.com/MikeDevQH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-blue-400 transition-colors hover-scale px-3 py-2 rounded-md hover:bg-blue-500/10"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">MikeDevQH</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
