import AnimatedText from './AnimatedText'

interface StatsCardProps {
    score: string
    description: string
    icon?: string
    color?: 'green' | 'blue' | 'purple' | 'yellow'
    delay?: number
    className?: string
}

export default function StatsCard({ 
    score, 
    description, 
    icon, 
    color = 'green', 
    delay = 0,
    className = ""
}: StatsCardProps) {
    const colorClasses = {
        green: 'text-green-400',
        blue: 'text-blue-400',
        purple: 'text-purple-400',
        yellow: 'text-yellow-400'
    }

    return (
        <AnimatedText delay={delay}>
            <div className={`text-center p-4 ${className}`}>
                {icon && (
                    <div className="text-4xl mb-3">{icon}</div>
                )}
                <div className={`text-3xl font-bold ${colorClasses[color]} mb-2`}>
                    {score}
                </div>
                <div className="text-sm text-gray-400">
                    {description}
                </div>
            </div>
        </AnimatedText>
    )
}
