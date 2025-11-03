import { useState } from 'react';

// --- Helper Icons & Data (No changes in this section) ---
// const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>;
// const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>;
const aarhaantDays = [
    { day: 'Day 1', date: '29th Oct (Wednesday)', events: 'Opening Ceremony | Imposter Hunt | Seminar', icon: '🕵️‍♂️' },
    { day: 'Day 2', date: '30th Oct (Thursday)', events: 'Art Odyssey | Workshop | Open Mic Night', icon: '🎨' },
    { day: 'Day 3', date: '31st Oct (Friday)', events: 'Scammer Zombie | Treasure Hunt | Firewall Fortress (ER)', icon: '🧟‍♀️' },
    { day: 'Day 4', date: '1st Nov (Saturday)', events: 'E-Sports | Catch the Flag | Closing Ceremony', icon: '🎮' },
];
const pastEvents = [
    { 
        id: 11, 
        title: "Session on Penetration Testing", 
        date: "Sep 4, 2025", 
        participants: "N/A", 
        summary: "An insightful session led by Mr. Amol Rangari, a Cyber Security Consultant at Cognizant. The event delved into the core principles of penetration testing, covering methodologies for exposing weaknesses in digital infrastructures and strategies for building robust defenses. Attendees learned about the lifecycle of a pen test, from reconnaissance to reporting, and were introduced to common tools and techniques used by ethical hackers in the industry. The session provided a valuable real-world perspective on offensive security." 
    },
    { 
        id: 4, 
        title: "RBU Cyber Club Interviews", 
        date: "Sep 16, 2025", 
        participants: "N/A", 
        summary: "As part of the club's ongoing expansion initiative, the RBU Cyber Club conducted a mid-year round of interviews to onboard passionate second-year students. The session aimed to identify individuals with a genuine interest in cybersecurity, ethical hacking, and digital innovation. Candidates were evaluated on their enthusiasm, technical knowledge, and collaborative potential through both individual and situational interviews. The recruitment targeted several key domains for second-year members, including Technical, Graphics, Social Media, Marketing, Events, and Logistics — ensuring balanced representation across both technical and creative teams. The expansion helped the club prepare strategically for upcoming events such as the AARHANT fest while fostering a multidisciplinary and motivated core team ready to contribute effectively throughout the academic year." 
    },
    { 
        id: 10, 
        title: "Financial & Social Media Fraud Awareness Seminar", 
        date: "Jan 8, 2025", 
        participants: "N/A", 
        summary: "The RBU Cyber Club organized an informative seminar on Financial & Social Media Fraud Awareness on January 8, 2025, aiming to educate students about the growing concerns of cyber fraud in the digital era. The session covered various types of fraud, including phishing links disguised as legitimate websites, social engineering attacks targeting user trust, and high-return investment scams that lead to financial loss. Participants learned to identify warning signs such as inconsistencies in account information, unsolicited urgent requests, and unusual transaction prompts.\n\nThe seminar emphasized the psychological tactics fraudsters use, including manipulating greed, fear, and urgency, to influence hasty financial decisions. Government resources and helplines were shared to enable attendees to report fraud incidents efficiently and responsibly. Distinguished speakers, including Shraddha Dhomne (Cyber Technical & Awareness Team) and Shankar Pandhare (Assistant Police Inspector, Cyber Cell, Nagpur City Police), highlighted practical strategies to prevent social media scams and the importance of awareness in combating financial fraud.\n\nParticipants were encouraged to share experiences, actively use government reporting portals, and stay informed about evolving cyber threats. The seminar concluded with a call to action for proactive engagement in cyber safety and an invitation to the upcoming 'Cyber Awareness Marathon' on January 25, 2025. This initiative reinforced the RBU Cyber Club’s commitment to promoting cybersecurity knowledge, fostering collaboration, and encouraging both proactive and reactive approaches to tackling cyber threats." 
    },
    { 
        id: 7, 
        title: "Recruitment Drive 2025", 
        date: "Jan 10, 2025", 
        participants: "N/A", 
        summary: "The club kicked off the new year with an ambitious and well-structured recruitment drive aimed exclusively at second-year students. The event saw an enthusiastic response from participants eager to explore the world of cybersecurity and technology innovation. Candidates underwent a detailed screening process involving interviews, group discussions, and problem-solving tasks to evaluate both technical aptitude and creative thinking. Through this initiative, fresh talent was inducted into domains such as Technical, Systems, Marketing, Social Media, and Logistics, ensuring that each vertical of the club was equipped with skilled and passionate individuals. This recruitment drive not only strengthened the foundation of the club but also paved the way for a more energetic and collaborative environment for upcoming projects and competitions throughout 2025." 
    },
    { 
        id: 5, 
        title: "Group Discussion", 
        date: "Jan 31, 2025", 
        participants: "N/A", 
        summary: "Centered around the empowering theme 'Your Voice, Your Power,' this group discussion provided an open forum for students to express opinions on trending topics in technology, cybersecurity, and digital ethics. Participants engaged in thoughtful debates about the role of artificial intelligence in security, data privacy laws, and the importance of cyber awareness among youth. The interactive nature of the session encouraged critical thinking, persuasive communication, and teamwork as each student contributed unique perspectives. By the end of the event, attendees walked away with a greater appreciation for constructive dialogue and the role of informed discussion in shaping digital responsibility and leadership." 
    },
    { 
        id: 8, 
        title: "Cyber Awareness Seminar", 
        date: "Oct 25, 2024", 
        participants: "N/A", 
        summary: "The Cyber Awareness Seminar, held on October 25, 2024, at Ramdeobaba University, was organized by the Department of IT and Security with the goal of building awareness about cyber threats and digital safety among students and faculty. The session was conducted by Mr. Maruti Shelke, Assistant Police Inspector at the Cyber Police Station, Nagpur, who shared real-life insights from local cybercrime cases. His talk covered crucial topics such as privacy settings on messaging platforms like WhatsApp (including video call attack prevention), steps to take after losing a mobile device, and ways to handle sensitive threats involving personal data or unauthorized images. \n\nParticipants also learned about responsible social media usage, particularly on Instagram, with guidance on enabling two-factor authentication, maintaining account privacy, and understanding the risks associated with online dating or matrimonial platforms. The seminar introduced important government resources such as Sanchar Saathi and Chakshu for reporting fraud, empowering attendees with tools to act against cybercrime. The session included interactive discussions and Q&A, which encouraged students to actively participate and share personal experiences. Overall, the seminar successfully raised awareness of online safety practices and emphasized the importance of continued education in combating modern cyber threats, leaving attendees more informed, alert, and digitally responsible." 
    },
    { 
        id: 9, 
        title: "Cyber Club Installation Ceremony", 
        date: "Aug 8, 2024", 
        participants: "N/A", 
        summary: "The Cyber Club Installation Ceremony, held on August 8, 2024, at Ramdeobaba University, marked the formal establishment of the RBU Cyber Club. The event celebrated the vision of creating a community dedicated to cyber literacy, awareness, and defense. Dr. Rashmi Welekar, Faculty Coordinator of the club, introduced the mission and structure of the RBU Cyber Club, emphasizing its goal of fostering a proactive and reactive approach to cybersecurity through collaboration, learning, and community engagement. \n\nThe ceremony featured the introduction of several core teams that form the backbone of the club — including Logistics, Social Media, Marketing, Graphics, and Technical teams. Each team plays a unique role: the Logistics Team ensures smooth execution of events, the Social Media Team manages promotions and documentation, the Marketing Team strategizes outreach, the Graphics Team handles creative design, and the Technical Team plans CTFs, develops applications, and aids in cybercrime awareness and prevention. \n\nDistinguished guests graced the ceremony, including Dr. Rajesh Pande (Vice Chancellor, RBU), who emphasized the importance of vigilance against cyber threats; DCP Nimit Goyal, who discussed real-world fraud statistics and highlighted a 42% reduction in OTP frauds due to government initiatives; and Dr. Suresh Balpande (HOD, IT & Security), who introduced the chief guest, Shri Rajendra Purohit, detailing his numerous honors and contributions. Shri Purohit spoke about the urgent need for early cyber education, proposing certifications and training programs to make Nagpur the first ‘Cyber Powerful City.’ Commissioner Ravinder Singal extended full support to the club, proposing collaboration with law enforcement and encouraging awareness programs across schools and colleges. \n\nThe ceremony concluded with a heartfelt vote of thanks, acknowledging the dignitaries, faculty, and new members. It set a strong foundation for the club’s journey, uniting academia, law enforcement, and students toward a common goal — creating a safer and more informed digital society." 
    },
    { 
        id: 6, 
        title: "Bytebreak: A Real World Cyber Challenge", 
        date: "Apr 4, 2025", 
        participants: "N/A", 
        summary: "Bytebreak was a thrilling, competition-style cyber challenge designed to simulate realistic cyberattack and defense environments. Teams of students worked collaboratively to solve a variety of technical problems spanning cryptography, web exploitation, digital forensics, and reverse engineering. The event tested participants’ analytical thinking, problem-solving under pressure, and ability to apply theoretical concepts in real-world contexts. Throughout the challenge, participants gained exposure to professional-grade cybersecurity tools and techniques while developing teamwork and leadership skills. Bytebreak concluded with an awards ceremony recognizing the top-performing teams, whose strategic problem-solving and innovative approaches stood out. The competition reinforced the importance of continuous learning, adaptability, and ethical responsibility in the evolving cybersecurity landscape." 
    },
    {
        id: 12, 
        title: "Seminar on Modern Technologies Used by Cyber Criminals",
        date: "Oct 29, 2025",
        participants: "N/A",
        summary: "The RBU Cyber Club organized an enlightening seminar titled 'Modern Technologies Used by Cyber Criminals' on October 29, 2024, at DT 701 (Digital Tower, 7th Floor, RBU). The session was graced by the esteemed guest of honour, Mr. Nityanand Jha, Deputy Commissioner of Police (DCP), who shared valuable insights into how evolving technologies are being leveraged for cybercrime in today's digital era.\n\nMr. Jha discussed the growing misuse of artificial intelligence, deepfakes, and automation tools in phishing, identity theft, and misinformation campaigns. He highlighted how cybercriminals exploit modern communication platforms, dark web marketplaces, and emerging IoT vulnerabilities to execute sophisticated attacks. The session also explored the risks associated with cryptocurrency-based transactions, data breaches, and advanced social engineering tactics.\n\nAttendees gained a comprehensive understanding of both the offensive and defensive sides of cybersecurity. The seminar emphasized the importance of continuous learning, vigilance, and responsible digital behavior. By bridging real-world law enforcement experience with academic awareness, the event successfully inspired students to pursue ethical hacking, research, and innovation to combat modern cyber threats."
    },
];
const newCalendarEvents = [
    { id: 301, title: "Recruitment Drive 2025", description: "Interviews for 2nd-year students for Systems, Marketing, and Social Media domains.", date: new Date("Jan 10, 2025"), category: "Recruitment", location: "DT 7th Floor" },
    { id: 302, title: "Group Discussion", description: "'Your Voice, Your Power - Join the Group Discussion!!'", date: new Date("Jan 31, 2024"), category: "Workshop", location: "DT-701" },
    { id: 303, title: "Bytebreak Cyber Challenge", description: "A real-world cyber challenge with exciting prizes.", date: new Date("Apr 4, 2025"), category: "Competition", location: "DT 701" },
    { id: 304, title: "Session on Penetration Testing", description: "A session by Amol Rangari, Cyber Security Consultant at Cognizant.", date: new Date("Sep 4, 2025"), category: "Seminar", location: "LAB-809" },
    { id: 305, title: "Cyber Awareness Seminar", description: "A seminar by Mr. Maruti Shelke (Asst. Police Inspector, Cyber Police) on digital safety.", date: new Date("Oct 25, 2024"), category: "Seminar", location: "RCOEM" },
    { id: 306, title: "Cyber Club Installation Ceremony", description: "The formal establishment of the RBU Cyber Club, celebrating its vision and introducing the core teams.", date: new Date("Aug 8, 2024"), category: "Ceremony", location: "RCOEM" },
    { id: 307, title: "Financial & Social Media Fraud Awareness Seminar", description: "A seminar on identifying and preventing cyber fraud.", date: new Date("Jan 8, 2025"), category: "Seminar", location: "RCOEM" },
    { id: 308, title: "Seminar on Modern Cyber Crime Tech", description: "A seminar by DCP Mr. Nityanand Jha on technologies used by cybercriminals.", date: new Date("Oct 29, 2025"), category: "Seminar", location: "DT 701" },
];
const interviewEventForCalendar = {
    id: 201, title: 'RBU Cyber Club Interviews', description: 'Interviews for new 2nd-year members.', date: new Date("Sep 16, 2025"), category: "Recruitment", location: "To be announced" 
};
const aarhaantCalendarEvents = [
    { id: 101, title: 'AARHANT 2025 - Day 1', description: 'Opening Ceremony | Imposter Hunt | Seminar', date: new Date("Oct 29, 2025"), category: "Fest", location: "RBU Campus" },
    { id: 102, title: 'AARHANT 2025 - Day 2', description: 'Art Odyssey | Workshop | Open Mic Night', date: new Date("Oct 30, 2025"), category: "Fest", location: "RBU Campus" },
    { id: 103, title: 'AARHANT 2025 - Day 3', description: 'Scammer Zombie | Treasure Hunt | Firewall Fortress', date: new Date("Oct 31, 2025"), category: "Fest", location: "RBU Campus" },
    { id: 104, title: 'AARHANT 2025 - Day 4', description: 'E-Sports | Catch the Flag | Closing Ceremony', date: new Date("Nov 1, 2025"), category: "Fest", location: "RBU Campus" },
];
const allCalendarEvents = [...aarhaantCalendarEvents, interviewEventForCalendar, ...newCalendarEvents];

export default function Events() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
    
    const [clickedEvent, setClickedEvent] = useState<any>(null);
    const [isDetailViewActive, setIsDetailViewActive] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);
    const [calendarView, setCalendarView] = useState<'days' | 'months' | 'years'>('days');
    const [yearRangeStart, setYearRangeStart] = useState(new Date().getFullYear() - 5);

    const isSameDay = (dateA: Date, dateB: Date) => dateA.toISOString().slice(0, 10) === dateB.toISOString().slice(0, 10);

    const generateCalendarDays = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDayOfWeek = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const days = [];
        for (let i = 0; i < firstDayOfWeek; i++) { days.push({ key: `pad-start-${i}`, day: null }); }
        for (let i = 1; i <= daysInMonth; i++) {
            const dayDate = new Date(year, month, i);
            const event = allCalendarEvents.find(e => isSameDay(e.date, dayDate));
            days.push({ key: `day-${i}`, day: i, event: event });
        }
        return days;
    };

    const handleDayClick = (event: any) => {
        if (event) {
            setClickedEvent(event);
            setIsDetailViewActive(true);
        }
    };

    const closeDetails = () => {
        setIsDetailViewActive(false);
        setTimeout(() => setClickedEvent(null), 300);
    };

    const calendarDays = generateCalendarDays(currentDate);
    const monthName = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();
    const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const handlePrev = () => {
        if (calendarView === 'days') setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1));
        else if (calendarView === 'months') setCurrentDate(new Date(year - 1, currentDate.getMonth(), 1));
        else if (calendarView === 'years') setYearRangeStart(yearRangeStart - 12);
    };

    const handleNext = () => {
        if (calendarView === 'days') setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1));
        else if (calendarView === 'months') setCurrentDate(new Date(year + 1, currentDate.getMonth(), 1));
        else if (calendarView === 'years') setYearRangeStart(yearRangeStart + 12);
    };

    const handleHeaderClick = () => {
        if (calendarView === 'days') setCalendarView('months');
        else if (calendarView === 'months') setCalendarView('years');
    };
    
    const headerText =
        calendarView === 'days' ? `${monthName} ${year}` :
        calendarView === 'months' ? year :
        `${yearRangeStart} - ${yearRangeStart + 11}`;

    const getEventColor = (event: any) => {
        if (!event) return 'bg-gray-800';
        if (event.date < today) return 'bg-blue-800/80 text-blue-200 font-bold cursor-pointer hover:bg-blue-700';
        if (event.category === 'Fest') return 'bg-purple-500/80 text-white font-bold cursor-pointer hover:bg-purple-400';
        if (event.category === 'Seminar') return 'bg-teal-500/80 text-white font-bold cursor-pointer hover:bg-teal-400';
        return 'bg-green-500/80 text-white font-bold cursor-pointer hover:bg-green-400';
    };

    const getCategoryTagStyle = (isPast: boolean, category: string) => {
        if (isPast) return 'bg-blue-700 text-blue-100';
        switch (category) {
            case 'Fest': return 'bg-purple-500 text-white';
            case 'Seminar': return 'bg-teal-500 text-white';
            default: return 'bg-green-500 text-white';
        }
    };

    return (
        <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto text-gray-300">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-green-300 mb-4">Events & Activities</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    A look at our workshops, competitions, and networking events.
                </p>
            </div>

            <div className="mb-20 bg-gray-900 border-2 border-purple-500 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500 transition-shadow duration-300">
                <h2 className="text-4xl font-bold text-purple-300 text-center mb-2">⚡ AARHANT 2025 IS HERE!! ⚡</h2>
                <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mt-4">
                    Gear up for the most engaging and electrifying ride of events this season!
                    Aarhant 2025 is where creativity meets competition, and this time… the zombies are taking over! 🧟‍♂️
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {aarhaantDays.map(item => (
                        <div key={item.day} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-400 transition-all duration-300">
                            <h3 className="text-lg font-bold text-purple-300">{item.day} – {item.date} {item.icon}</h3>
                            <p className="text-gray-400 mt-2 text-sm">{item.events}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center text-lg font-semibold text-gray-300 mt-10">
                    Participate, perform, and survive the most exciting fest of the year!
                </p>
                <div className="text-center mt-6">
                    <a 
                        href="https://forms.gle/wonvfv9cJf5x3Bec6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg px-10 py-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        Register Now!
                    </a>
                </div>
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 transition-all duration-500 ease-in-out`}>
                <div className={`bg-gray-900 p-8 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-all duration-500 ease-in-out ${
                    isDetailViewActive ? 'lg:col-span-2' : 'lg:col-span-3'
                }`}>
                    <h2 className="text-2xl font-semibold text-green-300 mb-6 text-center">Event Calendar</h2>
                    
                    <div className="flex items-center justify-between mb-4">
                        <button onClick={handlePrev} className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">‹</button>
                        <button onClick={handleHeaderClick} className="flex items-center justify-center px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                            <span className="text-xl font-bold text-blue-300">{headerText}</span>
                            <span className="ml-2 text-blue-300 text-xs">▼</span>
                        </button>
                        <button onClick={handleNext} className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">›</button>
                    </div>

                    {calendarView === 'days' && (
                        <>
                            <div className="grid grid-cols-7 gap-2 text-center font-semibold">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="text-gray-400">{day}</div>)}
                            </div>
                            <div className="grid grid-cols-7 gap-2 text-center mt-2">
                                {calendarDays.map(d => ( 
                                    <div 
                                        key={d.key} 
                                        onClick={() => handleDayClick(d.event)} 
                                        className={`p-2 h-12 flex items-center justify-center rounded-lg transition-colors ${d.event ? getEventColor(d.event) : d.day ? 'bg-gray-800' : 'bg-transparent'}`}
                                    >
                                        {d.day}
                                    </div> 
                                ))}
                            </div>
                        </>
                    )}
                    {calendarView === 'months' && (
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-4">
                            {monthsShort.map((month, index) => (
                                <button 
                                    key={month} 
                                    onClick={() => { setCurrentDate(new Date(year, index, 1)); setCalendarView('days'); }} 
                                    className="p-4 bg-gray-800 rounded-lg hover:bg-blue-700 text-white font-semibold transition-colors"
                                >
                                    {month}
                                </button>
                            ))}
                        </div>
                    )}
                    {calendarView === 'years' && (
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-4">
                            {Array.from({ length: 12 }, (_, i) => yearRangeStart + i).map(y => (
                                <button 
                                    key={y} 
                                    onClick={() => { setCurrentDate(new Date(y, currentDate.getMonth(), 1)); setCalendarView('months'); }} 
                                    className={`p-4 rounded-lg font-semibold transition-colors ${y === year ? 'bg-blue-600 text-white' : 'bg-gray-800 hover:bg-blue-700 text-white'}`}
                                >
                                    {y}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className={`transition-all duration-500 ease-in-out ${
                    isDetailViewActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 h-0 lg:h-auto pointer-events-none'
                }`}>
                    {clickedEvent && (
                        <div className="relative bg-slate-900/70 backdrop-blur-sm p-8 rounded-xl border border-slate-500/30 h-full flex flex-col justify-start">
                            <button onClick={closeDetails} className="absolute top-4 right-4 text-gray-400 hover:text-white z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                            
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold self-start ${getCategoryTagStyle(clickedEvent.date < today, clickedEvent.category)}`}>
                                {clickedEvent.date < today ? 'Past Event' : clickedEvent.category}
                            </span>
                            
                            <h4 className="text-xl font-bold text-green-300 mt-4">{clickedEvent.title}</h4>
                            <p className="text-base text-gray-400 mt-2">{clickedEvent.date.toLocaleDateString()}</p>
                            <p className="text-base mt-4 leading-relaxed">{clickedEvent.description}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-300 mb-8 text-center">Archive of Past Events</h2>
                <div className="space-y-4 max-w-4xl mx-auto">
                    {pastEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(event => (
                        <div key={event.id} className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
                            <button onClick={() => setOpenAccordion(openAccordion === event.id ? null : event.id)} className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-800">
                                <h3 className="text-lg font-semibold text-green-300">{event.title}</h3>
                                <span className="text-gray-400 text-sm">{event.date}</span>
                            </button>
                            <div className={`transition-all duration-300 ease-in-out ${openAccordion === event.id ? 'max-h-[40rem]' : 'max-h-0'}`}>
                                <div className="p-4 border-t border-gray-700">
                                    <p className="text-gray-300 whitespace-pre-wrap">{event.summary}</p>
                                    <p className="text-sm text-blue-300 mt-2">{event.participants} participants</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}