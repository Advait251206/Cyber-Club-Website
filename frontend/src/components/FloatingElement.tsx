interface FloatingElementProps {
    children?: React.ReactNode
    delay?: number
    duration?: number
    className?: string
}

export default function FloatingElement({ children, delay = 0, duration = 3000, className = "" }: FloatingElementProps) {
    return (
        <div 
            className={`${className}`}
            style={{
                animation: `float ${duration}ms ease-in-out ${delay}ms infinite`
            }}
        >
            {children}
        </div>
    )
}
