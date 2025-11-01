import React, { useState } from 'react';

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);
const InstagramIcon = () => (
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z" clipRule="evenodd" />
    </svg>
);
const LinkedInIcon = () => (
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const faqs = [
    { q: "What is the RBU Cyber Club and what does it do?", a: "The RBU Cyber Club is a student-led community at Ramdeobaba University dedicated to promoting awareness and practical knowledge in cybersecurity, ethical hacking, digital forensics, and information protection. The club bridges the gap between theoretical learning and real-world application by organizing hands-on workshops, Capture the Flag (CTF) competitions, awareness drives, and expert talks.\n\nIts mission is to nurture a culture of cyber awareness among students and help them understand how to stay safe online while exploring the fascinating world of cybersecurity as a career and as a passion." },
    { q: "Who can join the Cyber Club and what are the eligibility criteria?", a: "The Cyber Club is open to students from all branches and years who have an interest in cybersecurity, ethical hacking, or technology in general. There are no strict prerequisites — curiosity, willingness to learn, and enthusiasm for cyber topics are enough to get started.\n\nRecruitment typically involves a screening process, which may include an online form, a short interview, and sometimes a small test or task to understand your skills and interests. The club values diversity — whether you’re technical, creative, or managerial, there’s always a place for you to contribute." },
    { q: "What kind of activities and events does the Cyber Club organize?", a: "The Cyber Club conducts a wide range of activities throughout the academic year, designed to educate, challenge, and engage students. These include:\n\n- Workshops and training sessions on ethical hacking, network security, and digital hygiene.\n- Competitions like ByteBreak: A Real-World Cyber Challenge, CTF events, and cyber quizzes.\n- Awareness campaigns about cybercrime prevention and responsible digital behavior.\n- Guest lectures and panel discussions featuring cybersecurity experts and professionals.\n\nThrough these initiatives, students gain both technical exposure and problem-solving experience that prepare them for real-world cybersecurity scenarios." },
    { q: "How does joining the Cyber Club benefit students?", a: "Joining the Cyber Club offers both personal and professional growth opportunities. Members get hands-on exposure to cyber tools, real-time challenges, and guidance from seniors and experts in the field. It helps build a strong foundation in cybersecurity concepts, which can later aid in achieving professional certifications like CEH, OSCP, or CompTIA Security+.\n\nApart from technical learning, members also develop teamwork, communication, and leadership skills by organizing and participating in events. Most importantly, being part of the Cyber Club connects you to a network of like-minded peers, making learning collaborative and fun." }
];

export default function Contact() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', subject: 'General Inquiry', message: '', otherSubject: '', });
    const [status, setStatus] = useState('');

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> ) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value, }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        const submissionData = { ...formData, subject: formData.subject === 'Other' ? formData.otherSubject : formData.subject, };
        delete (submissionData as any).otherSubject;
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(submissionData),
            });
            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ firstName: '', lastName: '', email: '', subject: 'General Inquiry', message: '', otherSubject: '', });
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('An error occurred. Please try again.');
        }
    };

    return (
        <div className="pt-24 pb-12 px-6 max-w-6xl mx-auto">
             <style>{`@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`}</style>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-green-300 mb-4">Contact Us</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">Get in touch with our team! We're here to help with questions, collaborations, or just to chat about cybersecurity.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <div className="bg-gray-900 p-8 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                    <h2 className="text-2xl font-semibold text-green-300 mb-6">Send us a Message</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div><label className="block text-gray-300 text-sm font-semibold mb-2">First Name</label><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-green-400 focus:outline-none" placeholder="Your first name" required /></div>
                            <div><label className="block text-gray-300 text-sm font-semibold mb-2">Last Name</label><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-green-400 focus:outline-none" placeholder="Your last name" required /></div>
                        </div>
                        <div><label className="block text-gray-300 text-sm font-semibold mb-2">Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-green-400 focus:outline-none" placeholder="your.email@example.com" required /></div>
                        <div><label className="block text-gray-300 text-sm font-semibold mb-2">Subject</label><select name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-green-400 focus:outline-none" required><option>General Inquiry</option><option>Join the Club</option><option>Workshop Registration</option><option>Partnership Opportunity</option><option>Technical Support</option><option>Other</option></select></div>
                        {formData.subject === 'Other' && (<div style={{ animation: `fadeInUp 0.3s ease-out` }}><label className="block text-gray-300 text-sm font-semibold mb-2">Please specify</label><input type="text" name="otherSubject" value={formData.otherSubject} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-green-400 focus:outline-none" placeholder="Your subject" required /></div>)}
                        <div><label className="block text-gray-300 text-sm font-semibold mb-2">Message</label><textarea rows={4} name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-green-400 focus:outline-none resize-none" placeholder="Tell us how we can help you..." required></textarea></div>
                        <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">Send Message</button>
                        {status && <p className="text-center text-green-400 mt-4">{status}</p>}
                    </form>
                </div>

                <div className="space-y-8">
                    <div className="bg-gray-900 p-6 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-green-300 mb-4">Get in Touch</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <a href="mailto:cyberclub.rbu@gmail.com" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4"><EmailIcon /></div>
                                <div><p className="text-white font-semibold">Email</p><p className="text-gray-400 text-sm">cyberclub.rbu@gmail.com</p></div>
                            </a>
                             <a href="tel:+917083168754" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4"><PhoneIcon /></div>
                                <div><p className="text-white font-semibold">Phone</p><p className="text-gray-400 text-sm">+91 70831 68754</p></div>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-green-300 mb-4">Follow Us</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <a href="https://www.instagram.com/rbu_cyber_club/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3"><InstagramIcon /></div>
                                <div><p className="text-white font-semibold">Instagram</p><p className="text-gray-400 text-sm">@rbu_cyber_club</p></div>
                            </a>
                            <a href="https://www.linkedin.com/company/rbucyberclub/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3"><LinkedInIcon /></div>
                                <div><p className="text-white font-semibold">LinkedIn</p><p className="text-gray-400 text-sm">RBU Cyber Club</p></div>
                            </a>
                        </div>
                    </div>

                     <div className="bg-gray-900 p-8 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300 text-center">
                        <h3 className="text-xl font-semibold text-green-300 mb-4">Our Motto</h3>
                         <p className="text-gray-300 italic text-lg leading-relaxed">“Outsmart Cybercrime with Awareness!”</p>
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-300 mb-8 text-center">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-gray-900 p-8 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-green-300 mb-4">{faq.q}</h3>
                            <p className="text-gray-300 text-base leading-relaxed whitespace-pre-wrap">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}