"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { List, X } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Sponsor", href: "/sponsor" },
  { label: "The Team", href: "/team" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleMobileNav = useCallback(
    (href: string) => {
      setMobileMenuOpen(false)
      router.push(href)
    },
    [router],
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image src="/ascendiq-logo.png" alt="AscendIQ" width={48} height={48} className="h-10 sm:h-12 w-auto" />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-foreground">AscendIQ</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-label="Open main menu"
          >
            <List className="size-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/enroll">Enroll Now</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu - always in DOM, toggled with CSS */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-visibility ${
          mobileMenuOpen ? "visible" : "invisible pointer-events-none"
        }`}
        aria-modal="true"
        role="dialog"
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Slide-in panel */}
        <div
          className={`fixed inset-y-0 right-0 w-full max-w-sm bg-background px-6 py-6 shadow-xl overflow-y-auto transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="p-1.5 flex items-center gap-2"
              onClick={() => handleMobileNav("/")}
            >
              <Image src="/ascendiq-logo.png" alt="AscendIQ" width={48} height={48} className="h-10 sm:h-12 w-auto" />
              <span className="font-bold text-lg sm:text-xl tracking-tight text-foreground">AscendIQ</span>
            </button>
            <button
              type="button"
              className="rounded-md p-2 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="size-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-1 py-6">
                {navLinks.map(({ label, href }) => (
                  <button
                    key={href}
                    type="button"
                    className="-mx-3 block w-full text-left rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary active:bg-secondary/80 transition-colors"
                    onClick={() => handleMobileNav(href)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="py-6">
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base"
                  onClick={() => handleMobileNav("/enroll")}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
