interface AccentLineProps {
    color?: 'green' | 'blue' | 'purple' | 'yellow'
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

export default function AccentLine({ color = 'green', size = 'md', className = "" }: AccentLineProps) {
    const colorClasses = {
        green: 'from-green-400 to-green-600',
        blue: 'from-blue-400 to-blue-600',
        purple: 'from-purple-400 to-purple-600',
        yellow: 'from-yellow-400 to-yellow-600'
    }

    const sizeClasses = {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-3'
    }

    return (
        <div className={`w-full ${sizeClasses[size]} bg-gradient-to-r ${colorClasses[color]} rounded-full ${className}`}></div>
    )
}
