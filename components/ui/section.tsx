import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionVariants = cva("w-full max-w-4xl mx-auto px-4 md:px-6 py-4 sm:py-8")

interface SectionProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {
  title: string
}

const Section = React.forwardRef<HTMLElement, SectionProps>(({ title, className, children, ...props }, ref) => (
  <section id={title.toLowerCase().replace(/\s+/g, "")} ref={ref} className={cn(sectionVariants(), className)} {...props}>
    <h2 className="text-lg font-bold text-center mb-4 uppercase tracking-widest">{title}</h2>
    <div>{children}</div>
  </section>
))
Section.displayName = "Section"

export { Section }
