// A helper component for the LinkedIn SVG icon
const LinkedInIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const leadershipTeam = [
    {
        name: 'Bhushan Madankar',
        role: 'President',
        imageUrl: '/Team/Bhushan_Madankar.png',
        linkedin: 'https://in.linkedin.com/in/bhushan-madankar/',
        description: 'The visionary leader driving innovation, strategy, and cybersecurity excellence.'
    },
    {
        name: 'Veersingh Bisen',
        role: 'Vice President',
        imageUrl: '/Team/Veer_Bisen.jpg',
        linkedin: 'https://www.linkedin.com/in/veersingh-bisen-170b10257',
        description: 'A strategic co-leader, supporting the president and guiding the club’s operational initiatives.'
    },
];

const coreTeam = [
    {
        name: 'Arnav Varhade',
        role: 'Secretary',
        imageUrl: '/Team/Arnav_Varhade.png',
        linkedin: 'https://www.linkedin.com/in/arnav-dinesh-varhade-18ba73258',
        description: 'The organized strategist, ensuring seamless coordination, communication, and execution of plans.'
    },
    {
        name: 'Mahak Arora',
        role: 'Graphics Lead',
        imageUrl: '/Team/Mahak_Arora.png',
        linkedin: 'https://www.linkedin.com/in/mahak-arora16',
        description: 'A creative visionary, transforming ideas into impactful designs that captivate and inspire.'
    },
    {
        name: '(Om Gatlewar)',
        role: 'Web Dev Lead',
        imageUrl: '/Team/Om_Gatlewar.png',
        linkedin: '#',
        description: 'The architect behind seamless digital experiences, driving innovation in web development.'
    },
    {
        name: 'Harshika Rathod',
        role: 'Documentation Lead',
        imageUrl: '/Team/Harshika_Rathod.png',
        linkedin: 'https://www.linkedin.com/in/harshika-rathod',
        description: 'The meticulous record-keeper, managing accurate paperwork and data flow.'
    },
    {
        name: 'Vanshika Sarda',
        role: 'Management Lead',
        imageUrl: '/Team/Vanshika_Sarda.jpg',
        linkedin: 'https://www.linkedin.com/in/vanshika-sarda-b66022261/',
        description: 'The strategic genius behind seamless logistics, blending innovation and passion.'
    },
    {
        name: 'Abhineet Kumar',
        role: 'Social Media Lead',
        imageUrl: '/Team/Abhineet_Kumar.jpg',
        linkedin: 'https://www.linkedin.com/in/abhineet-kumar-39a778261/',
        description: 'The digital storyteller, crafting engaging content and strategies to grow the online community.'
    },
    {
        name: '(Kritank Singh)',
        role: 'PR Lead',
        imageUrl: '/Team/Kritank_Singh.jpg',
        linkedin: '#', 
        description: 'The voice of the brand, shaping perception and building a positive public image.'
    },
    {
        name: '(Nandani Sanghi)',
        role: 'Marketing Lead',
        imageUrl: '/Team/Nandani_Sanghi.png',
        linkedin: '#',
        description: 'The connector who builds strong relationships, spreading awareness, and fostering engagement.'
    },
    {
        name: 'Akshay Thakur',
        role: 'Core Member',
        imageUrl: '/Team/Akshay_Thakur.png',
        linkedin: 'https://www.linkedin.com/in/akshay-thakur-55ba3b2a0',
        description: 'A dedicated member contributing to the club\'s technical and strategic initiatives.'
    },
    {
        name: 'Kaustubh Sharma',
        role: 'Core Member',
        imageUrl: '/Team/Kaustubh_Sharma.png',
        linkedin: 'https://www.linkedin.com/in/kaustubh-sharma214',
        description: 'An enthusiastic learner passionate about exploring new dimensions in cybersecurity.'
    },
    {
        name: 'Hitesh Chandak',
        role: 'Core Member',
        imageUrl: '/Team/Hitesh_Chandak.jpg',
        linkedin: 'https://www.linkedin.com/in/hitesh-chandak-750a18258',
        description: 'A proactive team player focused on driving innovation and collaborative projects.'
    },
    {
        name: 'Vansh Bisen',
        role: 'Core Member',
        imageUrl: '/Team/Vansh_Bisen.png',
        linkedin: 'https://www.linkedin.com/in/vansh-bisen-80914b287/',
        description: 'A versatile member bringing fresh perspectives to the club\'s creative and technical tasks.'
    },
    {
        name: 'Ishaan Khanchandani',
        role: 'Core Member',
        imageUrl: '/Team/Ishaan_Khanchandani.jpg',
        linkedin: 'https://www.linkedin.com/in/ishaan-khanchandani-a0056732a',
        description: 'A detail-oriented individual with a keen interest in digital forensics and security analysis.'
    },
    {
        name: 'Kreeshna Gahlod',
        role: 'Core Member',
        imageUrl: '/Team/Kreeshna_Gahlod.jpeg',
        linkedin: 'https://www.linkedin.com/in/kreeshna-g-b05960298/',
        description: 'A creative problem-solver contributing to the club\'s marketing and outreach efforts.'
    },
    {
        name: 'Niraj Bhakte',
        role: 'Core Member',
        imageUrl: '/Team/Niraj_Bhakte.jpg',
        linkedin: 'https://www.linkedin.com/in/nirajbhakte23505',
        description: 'A passionate technologist focused on web security and application development.'
    },
    {
        name: 'Siddhesh Kherde',
        role: 'Core Member',
        imageUrl: '/Team/Siddhesh_Kherde.png',
        linkedin: 'https://www.linkedin.com/in/siddhesh-kherde-5360032a9',
        description: 'A forward-thinking member with a strong interest in network and infrastructure security.'
    },
];

export default function Team() {
    return (
        <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-green-300 mb-4">Meet Our Team</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    The passionate and dedicated committee for the 2024-2025 session.
                </p>
            </div>

            <div className="mb-16">
                <h2 className="text-3xl font-semibold text-blue-300 mb-8 text-center">Leadership Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {leadershipTeam.map((member) => (
                        <div key={member.name} className="bg-gray-900 p-6 rounded-lg border border-green-300 text-center shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                            <img
                                src={member.imageUrl}
                                alt={`Photo of ${member.name}`}
                                className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 object-cover border-4 border-gray-700"
                            />
                            <h3 className="text-2xl font-semibold text-green-300 mb-1">{member.name}</h3>
                            <p className="text-blue-300 font-medium mb-3">{member.role}</p>
                            <p className="text-gray-300 text-sm mb-4 h-20">
                                {member.description}
                            </p>
                            {member.linkedin && (
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2">
                                    <LinkedInIcon />
                                    <span>LinkedIn</span>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-20">
                <h2 className="text-3xl font-semibold text-blue-300 mb-8 text-center">Core Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {coreTeam.sort((a,b) => a.name.localeCompare(b.name)).map((member) => (
                         <div key={member.name} className="bg-gray-900 p-6 rounded-lg border border-green-300 text-center shadow-2xl hover:shadow-green-400 transition-shadow duration-300 transform hover:-translate-y-1">
                            <img
                                src={member.imageUrl}
                                alt={`Photo of ${member.name}`}
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold text-green-300 mb-1">{member.name}</h3>
                            <p className="text-blue-300 text-sm font-medium mb-3">{member.role}</p>
                            <p className="text-gray-400 text-xs mb-4 h-16">
                                {member.description}
                            </p>
                            {member.linkedin && (
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm hover:text-blue-300 transition-colors inline-flex items-center gap-2">
                                    <LinkedInIcon />
                                    <span>LinkedIn</span>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-semibold text-white mb-4">Want to Join Our Community?</h2>
                <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                    We're always looking for passionate individuals to join our events and workshops. 
                    Follow us on social media to stay updated on the next recruitment cycle!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://www.instagram.com/rbu_cyber_club/" target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Follow on Instagram
                    </a>
                    <a href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
}