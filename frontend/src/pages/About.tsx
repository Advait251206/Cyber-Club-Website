export default function About() {
    return (
        <div className="pt-24 pb-12 px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-green-300 mb-4">About Cyber Club</h1>
            </div>

            {/* ABOUT US SECTION  */}
            <div className="mb-16 bg-gray-900 p-8 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                <h2 className="text-3xl font-semibold text-green-300 mb-6 text-center">About Us</h2>
                <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                    <p>
                        The RBU Cyber Club is a student-driven initiative at Ramdeobaba University, dedicated to fostering awareness, innovation, and excellence in the field of cyber security. Established under the guidance of Dr. Rashmi Welekar (Faculty Coordinator), the club serves as a collaborative platform where students, educators, and law enforcement professionals unite to create a safer and more secure digital environment.
                    </p>
                    <p>
                        We aim to bridge the gap between academic knowledge and real-world cyber defense through practical learning, technical challenges, and community-driven initiatives. The club functions through dedicated teams — Technical, Graphics, Marketing, Social Media, and Logistics — each playing a vital role in ensuring the success of our missions and events.
                    </p>
                    <p>
                        A defining feature of the RBU Cyber Club is its official collaboration with the Police Department, making it the only club at Ramdeobaba University with a direct tie-up with law enforcement. This partnership enhances our mission by providing members with exposure to real-world cyber crime prevention, awareness drives, and investigative insights.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* OUR MISSION SECTION */}
                <div className="bg-gray-900 p-8 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                    <h2 className="text-2xl font-semibold text-green-300 mb-4">Our Mission</h2>
                    <p className="text-gray-300 mb-6">
                        To create a vibrant community of cybersecurity enthusiasts who learn, practice, and excel in the field of information security through collaborative projects, competitions, and knowledge sharing.
                    </p>
                    <p className="text-gray-200 font-semibold mb-3">We focus on:</p>
                    <ul className="text-gray-300 space-y-2 list-disc list-inside">
                        <li>Hands-on cybersecurity training</li>
                        <li>Ethical hacking workshops</li>
                        <li>Industry mentorship programs</li>
                        <li>Research and innovation projects</li>
                    </ul>
                </div>

                {/*  WHAT WE DO SECTION  */}
                <div className="bg-gray-900 p-8 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                    <h2 className="text-2xl font-semibold text-green-300 mb-4">What We Do</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-blue-300">Capture The Flag (CTF)</h3>
                            <p className="text-gray-300 text-sm">Engaging and competitive events covering cryptography, web security, reverse engineering, and digital forensics to sharpen technical skills and teamwork.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-blue-300">Workshops & Training</h3>
                            <p className="text-gray-300 text-sm">Weekly practical sessions on penetration testing, secure coding, and modern security tools, empowering members with industry-relevant expertise.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-blue-300">Industry Talks</h3>
                            <p className="text-gray-300 text-sm">Interactive guest lectures and webinars conducted by cybersecurity professionals, ethical hackers, and researchers, offering real-world insights and mentorship opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}