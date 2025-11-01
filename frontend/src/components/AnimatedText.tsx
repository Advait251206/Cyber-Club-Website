interface AnimatedTextProps {
    text?: string
    children?: React.ReactNode
    className?: string
    delay?: number
    duration?: number
}

export default function AnimatedText({ text, children, className = "", delay = 0, duration = 1000 }: AnimatedTextProps) {
    return (
        <div 
            className={`inline-block ${className}`}
            style={{
                animation: `fadeInUp ${duration}ms ease-out ${delay}ms both`
            }}
        >
            {text || children}
        </div>
    )
}
