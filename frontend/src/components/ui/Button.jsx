import * as React from "react"
import { motion } from "framer-motion"

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-brand-orange text-white hover:bg-orange-600 shadow-md hover:shadow-lg",
    primary: "bg-brand-blue text-white hover:bg-blue-600 shadow-md hover:shadow-lg",
    secondary: "bg-brand-yellow text-slate-900 hover:bg-yellow-500 shadow-md hover:shadow-lg",
    outline: "border-2 border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 text-slate-700",
    ghost: "hover:bg-slate-100 hover:text-slate-900 text-slate-700",
  }
  
  const sizes = {
    default: "h-12 px-6 py-2",
    sm: "h-9 rounded-lg px-3",
    lg: "h-14 rounded-2xl px-8 text-base",
    icon: "h-12 w-12",
  }
  
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`.trim()

  const buttonContent = asChild && React.isValidElement(children) ? (
    React.cloneElement(children, {
      className: `${combinedClassName} ${children.props.className || ""}`.trim(),
      ref,
      ...props
    })
  ) : (
    <button
      className={combinedClassName}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );

  const wrapperClass = (className && className.includes('w-full')) ? "block w-full" : "inline-block";

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={wrapperClass}
    >
      {buttonContent}
    </motion.div>
  )
})
Button.displayName = "Button"

export default Button
