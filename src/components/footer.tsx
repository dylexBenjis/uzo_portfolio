import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full flex justify-center border-t bg-background">
      <div className="flex-col flex max-w-[1200px] justify-center px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className=" grid gap-8 sm:grid-cols-2 md:grid-cols-[40%,30%,30%]">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Dr. Sarah Johnson</h3>
            <p className="text-sm text-muted-foreground">
              Cardiologist & Medical Researcher <br/>dedicated to advancing cardiovascular health through innovative research
              and compassionate patient care.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              {/* <li>
                <Link href="/publications" className="text-muted-foreground hover:text-foreground">
                  Publications
                </Link>
              </li> */}
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              {/* <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          {/* <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to receive updates on my latest research and articles.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Email address" type="email" className="max-w-[220px]" />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </div>
          </div> */}
        </div>
        <div className="mt-12 w-full border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Dr. Sarah Johnson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

