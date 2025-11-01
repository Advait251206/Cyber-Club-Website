import Typewriter from 'typewriter-effect';
import AccentLine from './AccentLine';
import AnimatedText from './AnimatedText';
import FloatingElement from './FloatingElement';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            
            {/* Background Effects */}
            {/* {
            <div className="absolute top-20 left-20 w-32 h-32 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
            }
            {
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
            }
            {
            <div className="absolute top-1/2 left-10 w-16 h-16 bg-purple-400 rounded-full opacity-25 animate-ping"></div>
            } */}

            <div className="relative z-10 p-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <AccentLine color="green" size="lg" className="w-24" />
                        
                        <div className="flex space-x-2">
                            <FloatingElement delay={0} className="w-3 h-3 bg-green-400 rounded-full"></FloatingElement>
                            <FloatingElement delay={200} className="w-3 h-3 bg-blue-400 rounded-full"></FloatingElement>
                            <FloatingElement delay={400} className="w-3 h-3 bg-purple-400 rounded-full"></FloatingElement>
                        </div>

                        <div className="space-y-4">
                            <div className="text-6xl lg:text-8xl font-extrabold drop-shadow-md">
                                <Typewriter
                                    options={{
                                        strings: ['Cyber Club'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 90,
                                    }}
                                />
                            </div>
                            
                            <AnimatedText 
                                text="RBU" 
                                className="text-4xl text-green-300 font-bold drop-shadow"
                                delay={500}
                            />
                            
                            <AccentLine color="blue" size="md" className="w-32" />
                        </div>

                        <AnimatedText 
                            text="Explore the realms of cybersecurity, ethical hacking, and cutting-edge technology. Join our community of digital innovators and security experts."
                            className="text-xl text-gray-300 leading-relaxed max-w-2xl drop-shadow"
                            delay={800}
                        />

                        <div className="flex items-center space-x-4 pt-4 -m-3">
                            <AnimatedText delay={1000}>
                                <a
                                  href="https://www.instagram.com/rbu_cyber_club/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block text-center font-semibold bg-green-500 p-4 w-40 m-3 rounded-2xl hover:bg-gradient-to-r from-lime-500 to-teal-300 transition-all duration-300 hover:scale-105"
                                >
                                    Follow Us
                                </a>
                            </AnimatedText>
                            <AnimatedText delay={1200}>
                                <Link
                                  to="/about"
                                  className="inline-block text-center font-semibold bg-green-500 p-4 w-40 m-3 rounded-2xl hover:bg-gradient-to-r from-lime-500 to-teal-300 transition-all duration-300 hover:scale-105"
                                >
                                    Learn More
                                </Link>
                            </AnimatedText>
                        </div>

                        {/* {
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center drop-shadow">
                                <div className="text-3xl font-bold text-green-400">100+</div>
                                <div className="text-sm text-gray-400">Members</div>
                            </div>
                            <div className="text-center drop-shadow">
                                <div className="text-3xl font-bold text-blue-400">50+</div>
                                <div className="text-sm text-gray-400">Events</div>
                            </div>
                            <div className="text-center drop-shadow">
                                <div className="text-3xl font-bold text-purple-400">25+</div>
                                <div className="text-sm text-gray-400">Awards</div>
                            </div>
                        </div>
                        } */}
                    </div>

                    <div className="relative">
                        <FloatingElement delay={300} duration={4000}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg opacity-20 blur-xl"></div>
                                <div className="relative bg-gray-900 p-4 rounded-lg border border-green-300">
                                    <img 
                                        src="cyber.png" 
                                        alt="Cyber Club" 
                                        className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </FloatingElement>

                        <FloatingElement delay={600} className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                            🔒
                        </FloatingElement>
                        <FloatingElement delay={800} className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                            🛡️
                        </FloatingElement>
                    </div>
                </div>
            </div>
        </div>
    );
}