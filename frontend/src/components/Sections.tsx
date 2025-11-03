import { Card } from "./Card"
import AccentLine from "./AccentLine"
import AnimatedText from "./AnimatedText"

export default function Sec() {
    const activities = [
        {
            id: 1,
            title: "CTF Competitions",
            description: "Participate in Capture The Flag challenges to test your skills in cryptography, web security, reverse engineering, and forensics.",
            icon: "cyber.png"
        },
        {
            id: 2,
            title: "Ethical Hacking",
            description: "Learn penetration testing techniques, vulnerability assessment, and ethical hacking methodologies in hands-on workshops.",
            icon: "cyber.png"
        },
        {
            id: 3,
            title: "Security Research",
            description: "Conduct cutting-edge research in cybersecurity, threat analysis, and develop innovative security solutions.",
            icon: "cyber.png"
        }
    ]

    // const achievements = [
    //     { score: "100+", description: "Vulnerabilities Found" },
    //     { score: "50+", description: "CTF Wins" },
    //     { score: "200+", description: "Members Trained" },
    //     { score: "15+", description: "Research Papers" }
    // ]

    return (
        <div className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <AnimatedText 
                        text="Our Activities" 
                        className="text-4xl font-bold text-green-300 mb-4"
                        delay={0}
                    />
                    <AccentLine color="green" size="lg" className="w-24 mx-auto mb-6" />
                    <AnimatedText 
                        text="From ethical hacking to cybersecurity research, explore our diverse range of activities designed to build tomorrow's cyber defenders."
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        delay={200}
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {activities.map((activity, index) => (
                        <AnimatedText key={activity.id} delay={400 + (index * 200)}>
                            <Card 
                                i={activity.icon} 
                                t={activity.title} 
                                d={activity.description}
                            />
                        </AnimatedText>
                    ))}
                </div>

                {/* {
                <div className="bg-gray-800 rounded-2xl p-8 border border-green-300">
                    <div className="text-center mb-8">
                        <AnimatedText 
                            text="Our Impact" 
                            className="text-3xl font-bold text-blue-300 mb-4"
                            delay={1000}
                        />
                        <AccentLine color="blue" size="md" className="w-32 mx-auto" />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {achievements.map((achievement, index) => (
                            <AnimatedText key={index} delay={1200 + (index * 100)}>
                                <Acheive 
                                    Score={achievement.score} 
                                    d={achievement.description}
                                />
                            </AnimatedText>
                        ))}
                    </div>
                </div>
                } */}
            </div>
        </div>
    )
}