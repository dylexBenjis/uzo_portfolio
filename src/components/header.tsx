import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import ThemeSwitch from "./ui/theme_switch"

export function Header() {
  return (
    <header className="flex sticky top-0 z-50 justify-center w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex relative h-16 max-w-[1200px] items-center justify-between w-full p-2">
        <Link href="/" className="font-bold text-xl mr-6">
          Bridget Chukwudile
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
          {/* <Link
            href="/publications"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Publications
          </Link> */}
          <Link href="/blog" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Blog
          </Link>
          <div className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">          
            <ThemeSwitch/>
          </div>
        </nav>
        <div className="flex items-center space-x-4 flex-1 md:hidden justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about">About</Link>
              </DropdownMenuItem>
              {/* <DropdownMenuItem asChild>
                <Link href="/publications">Publications</Link>
              </DropdownMenuItem> */}
              <DropdownMenuItem asChild>
                <Link href="/blog">Blog</Link>
              </DropdownMenuItem>
              {/* <DropdownMenuItem asChild>
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

