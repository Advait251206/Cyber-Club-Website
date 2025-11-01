export default function ReadingResearch() {
    return (
        <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto text-gray-300">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-green-300 mb-4">Reading, News & Research</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">Stay updated with the latest in the cybersecurity world from these trusted sources.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-900 p-8 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold text-blue-300 mb-6">📰 Cyber News Portals</h2>
                    <ul className="list-disc list-inside space-y-3 text-lg">
                        <li><a href="https://thehackernews.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">The Hacker News</a></li>
                        <li><a href="https://krebsonsecurity.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Krebs on Security</a></li>
                        <li><a href="https://www.darkreading.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">DarkReading</a></li>
                        <li><a href="https://www.bleepingcomputer.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">BleepingComputer</a></li>
                        <li><a href="https://www.securityweek.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">SecurityWeek</a></li>
                        <li><a href="https://www.infosecinstitute.com/resources/?Type=Article" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Infosec Institute Blog</a></li>
                    </ul>
                </div>
                <div className="bg-gray-900 p-8 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold text-blue-300 mb-6">📚 Security Research & Whitepapers</h2>
                    <ul className="list-disc list-inside space-y-3 text-lg">
                        <li><a href="https://attack.mitre.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">MITRE ATT&CK</a></li>
                        <li><a href="https://www.cisa.gov/uscert/ncas/alerts" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CISA Alerts & Advisories</a></li>
                        <li><a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NIST Cybersecurity Framework</a></li>
                        <li><a href="https://www.sans.org/reading-room/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">SANS Reading Room</a></li>
                        <li><a href="https://googleprojectzero.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Google Project Zero Blog</a></li>
                    </ul>
                </div>
                 <div className="md:col-span-2 bg-gray-900 p-8 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold text-blue-300 mb-6">🧑‍💻 Blogs by Professionals</h2>
                    <ul className="list-disc list-inside space-y-3 text-lg">
                        <li><a href="https://www.troyhunt.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Troy Hunt (Have I Been Pwned creator)</a></li>
                        <li><a href="https://danielmiessler.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Daniel Miessler (InfoSec theory and weekly newsletter)</a></li>
                        <li><a href="https://www.malwaretech.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">MalwareTech Blog</a></li>
                        <li><a href="https://portswigger.net/research" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PortSwigger Research (Burp creators)</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}