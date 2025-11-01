export default function LearningResources() {
    return (
        <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto text-gray-300">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-green-300 mb-4">Learning & Study Resources</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">Your starting point for diving into the world of cybersecurity, from beginner basics to advanced specializations.</p>
            </div>

            <div className="space-y-12">
                {/* Section A: Foundations */}
                <div className="bg-gray-900 p-8 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold text-blue-300 mb-6">🎯 A. Foundations (Absolute Beginners)</h2>
                    <p className="mb-6 text-lg">For those who just stepped into cybersecurity — learn terminology, mindset, and essential skills.</p>
                    
                    <h3 className="text-2xl font-bold text-green-300 mb-4">🌱 Courses & Tutorials</h3>
                    <ul className="list-disc list-inside space-y-3 mb-6">
                        <li><a href="https://www.coursera.org/professional-certificates/google-cybersecurity" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Google Cybersecurity Certificate (Coursera)</a> - 100% beginner-friendly, covers SOC operations, SIEM, and threat detection.</li>
                        <li><a href="https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">IBM Cybersecurity Analyst (Coursera)</a> - Introduces networking, endpoint protection, and analysis tools.</li>
                        <li><a href="https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Cisco Introduction to Cybersecurity (NetAcad)</a> - Free, highly visual, covers key threats and roles.</li>
                        <li><a href="https://tryhackme.com/path/outline/presecurity" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">TryHackMe “Pre Security Path”</a> - Walks you through networking, Linux, and basic hacking concepts.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-green-300 mb-4">YouTube Playlists:</h3>
                    <ul className="list-disc list-inside space-y-3 mb-6">
                        <li><a href="https://www.youtube.com/@NetworkChuck" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NetworkChuck</a> - Cyber basics, VPNs, hacking labs.</li>
                        <li><a href="https://www.youtube.com/@_JohnHammond" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">John Hammond</a> - Practical CTF-style explanations.</li>
                        <li><a href="https://www.youtube.com/@davidbombal" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">David Bombal</a> - Wireshark, packet sniffing, and ethical hacking demos.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-green-300 mb-4">💡 Topics to Learn</h3>
                    <ul className="list-disc list-inside space-y-3">
                        <li>What is Cybersecurity (CIA Triad: Confidentiality, Integrity, Availability)</li>
                        <li>Types of Threats: Malware, Phishing, Ransomware, DoS</li>
                        <li>Basics of Networking (OSI Model, TCP/IP)</li>
                        <li>Basic Linux Commands & File Permissions</li>
                        <li>How the Internet Works (DNS, HTTP, IP)</li>
                    </ul>
                </div>

                {/* Section B: Intermediate */}
                <div className="bg-gray-900 p-8 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold text-blue-300 mb-6">🧠 B. Intermediate Level (Hands-On Skills)</h2>
                    <p className="mb-6 text-lg">Start getting your hands dirty with controlled environments.</p>

                    <h3 className="text-2xl font-bold text-green-300 mb-4">🧩 Interactive Platforms</h3>
                    <ul className="list-disc list-inside space-y-3 mb-6">
                        <li><a href="https://tryhackme.com/path/outline/pentest" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">TryHackMe “CompTIA Pentest+ Path”</a> - Covers reconnaissance, exploitation, and report writing.</li>
                        <li><a href="https://app.hackthebox.com/starting-point" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Hack The Box “Starting Point”</a> - Beginner-friendly practical machines.</li>
                        <li><a href="https://portswigger.net/web-security" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PortSwigger Web Security Academy</a> - Browser-based labs for learning XSS, CSRF, SQLi, SSRF, etc.</li>
                        <li><a href="https://overthewire.org/wargames/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">OverTheWire Wargames</a> (Bandit, Narnia, Leviathan).</li>
                    </ul>
                    
                    <h3 className="text-2xl font-bold text-green-300 mb-4">🧠 Essential Skills to Learn</h3>
                    <ul className="list-disc list-inside space-y-3">
                        <li>Web Application Vulnerabilities (OWASP Top 10)</li>
                        <li>Networking Analysis (Wireshark, tcpdump)</li>
                        <li>Basic Scripting (Python for automation, Bash for operations)</li>
                        <li>Vulnerability Scanning (Nmap, Nikto)</li>
                        <li>Password Cracking (John the Ripper, Hashcat basics)</li>
                    </ul>
                </div>

                {/* Section C: Advanced */}
                <div className="bg-gray-900 p-8 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold text-blue-300 mb-6">⚙️ C. Advanced / Specialization</h2>
                    <p className="mb-6 text-lg">Once you're comfortable, explore different domains.</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-red-400 mb-4">🔴 Red Team (Offensive)</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Exploitation: Metasploit, payload crafting</li>
                                <li>Post-exploitation: Persistence, privilege escalation</li>
                                <li>Social Engineering: Phishing simulation</li>
                                <li>Tools: Empire, Cobalt Strike, Evilginx</li>
                                <li>Courses: Practical Ethical Hacking (TCM), OSCP Prep</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-sky-400 mb-4">🔵 Blue Team (Defensive)</h3>
                             <ul className="list-disc list-inside space-y-2">
                                <li>Log analysis, threat hunting, SIEM (Splunk, Wazuh)</li>
                                <li>Incident Response & Forensics (Autopsy, Volatility)</li>
                                <li>Malware Analysis (Ghidra, IDA Free, Cuckoo)</li>
                                <li>Courses: Blue Team Level 1 (BTL1), DFIR Diva</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-purple-400 mb-4">🟣 Purple Team (Research)</h3>
                             <ul className="list-disc list-inside space-y-2">
                                <li>Combine Red + Blue for detection engineering</li>
                                <li>MITRE ATT&CK Mapping</li>
                                <li>Adversary emulation tools (Atomic Red Team, Caldera)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}