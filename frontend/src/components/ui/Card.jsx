import * as React from "react"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`bento-card relative overflow-hidden ${className || ""}`.trim()}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 p-5 md:p-6 ${className || ""}`.trim()}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-xl md:text-2xl font-semibold leading-none tracking-tight text-slate-900 ${className || ""}`.trim()}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-slate-500 ${className || ""}`.trim()}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-5 md:p-6 pt-0 ${className || ""}`.trim()} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center p-5 md:p-6 pt-0 ${className || ""}`.trim()}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export default Card
export { CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
