const NetworkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.7 18.3l-4.2-4.2a1 1 0 010-1.4l4.2-4.2m8.6 9.8l4.2-4.2a1 1 0 000-1.4l-4.2-4.2" /></svg>;
const WebIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const ExploitIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>;
const ForensicIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const PasswordIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 017.743-5.743z" /></svg>;
const PrivacyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
const LabIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const NoteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5V3a2 2 0 012-2h2a2 2 0 012 2v2" /></svg>;

const toolData = [
    { name: "Nmap", description: "Port scanning, OS detection", tags: ["Network", "Offensive"], icon: <NetworkIcon />, downloadUrl: "https://nmap.org/download.html", docsUrl: "https://nmap.org/book/man.html" },
    { name: "Angry IP Scanner", description: "Lightweight IP scanner", tags: ["Network", "Recon"], icon: <NetworkIcon />, downloadUrl: "https://angryip.org/download/", docsUrl: "https://angryip.org/documentation/" },
    { name: "Burp Suite CE", description: "Web proxy for intercepting traffic", tags: ["Web", "Offensive"], icon: <WebIcon />, downloadUrl: "https://portswigger.net/burp/communitydownload", docsUrl: "https://portswigger.net/burp/documentation" },
    { name: "OWASP ZAP", description: "Web app vulnerability scanner", tags: ["Web", "Offensive"], icon: <WebIcon />, downloadUrl: "https://www.zaproxy.org/download/", docsUrl: "https://www.zaproxy.org/docs/" },
    { name: "Metasploit Framework", description: "Exploit dev and testing", tags: ["Exploitation", "Offensive"], icon: <ExploitIcon />, downloadUrl: "https://www.metasploit.com/", docsUrl: "https://docs.rapid7.com/metasploit/" },
    { name: "Social Engineering Toolkit", description: "Phishing & payload simulation", tags: ["Social", "Offensive"], icon: <ExploitIcon />, downloadUrl: "https://github.com/trustedsec/social-engineer-toolkit", docsUrl: "https://github.com/trustedsec/social-engineer-toolkit/blob/master/README.md" },
    { name: "Wireshark", description: "Network traffic analysis", tags: ["Network", "Forensic", "Defensive"], icon: <ForensicIcon />, downloadUrl: "https://www.wireshark.org/download.html", docsUrl: "https://www.wireshark.org/docs/" },
    { name: "Autopsy", description: "Digital forensics GUI", tags: ["Forensic"], icon: <ForensicIcon />, downloadUrl: "https://www.autopsy.com/download/", docsUrl: "http://sleuthkit.org/autopsy/docs/user-docs/" },
    { name: "Volatility", description: "Memory forensics", tags: ["Forensic", "Defensive"], icon: <ForensicIcon />, downloadUrl: "https://www.volatilityfoundation.org/releases", docsUrl: "https://github.com/volatilityfoundation/volatility3/blob/develop/README.md" },
    { name: "John the Ripper", description: "Password cracking", tags: ["Password", "Offensive"], icon: <PasswordIcon />, downloadUrl: "https://www.openwall.com/john/", docsUrl: "https://www.openwall.com/john/doc/" },
    { name: "Hashcat", description: "GPU-based cracking", tags: ["Password", "Offensive"], icon: <PasswordIcon />, downloadUrl: "https://hashcat.net/hashcat/", docsUrl: "https://hashcat.net/wiki/" },
    { name: "CyberChef", description: "Encode, decode, hash data", tags: ["Utility", "Crypto"], icon: <PasswordIcon />, downloadUrl: "https://gchq.github.io/CyberChef/", docsUrl: "https://github.com/gchq/CyberChef/blob/master/README.md" },
    { name: "Tor Browser", description: "Anonymous browsing", tags: ["Privacy"], icon: <PrivacyIcon />, downloadUrl: "https://www.torproject.org/download/", docsUrl: "https://tb-manual.torproject.org/" },
    { name: "Docker", description: "Create safe hacking environments", tags: ["Lab"], icon: <LabIcon />, downloadUrl: "https://www.docker.com/products/docker-desktop/", docsUrl: "https://docs.docker.com/" },
    { name: "VirtualBox", description: "Run OS labs (Kali, Parrot, etc.)", tags: ["Lab"], icon: <LabIcon />, downloadUrl: "https://www.virtualbox.org/wiki/Downloads", docsUrl: "https://www.virtualbox.org/manual/" },
    { name: "Obsidian", description: "Markdown-based notes", tags: ["Utility", "Notes"], icon: <NoteIcon />, downloadUrl: "https://obsidian.md/download", docsUrl: "https://help.obsidian.md/" },
    { name: "CherryTree", description: "Tree-style notes for infosec", tags: ["Utility", "Notes"], icon: <NoteIcon />, downloadUrl: "https://www.giuspen.com/cherrytree/", docsUrl: "https://www.giuspen.com/cherrytree/#docs" },
];

const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
        case 'offensive': return 'bg-red-500/20 text-red-300 border-red-500/30';
        case 'defensive': return 'bg-sky-500/20 text-sky-300 border-sky-500/30';
        case 'forensic': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
        case 'network': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
        case 'web': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
        case 'lab': return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
        default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
}

export default function ToolsPlatforms() {
    return (
        <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto text-gray-300">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-green-300 mb-4">Tools & Platforms</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">A curated list of essential tools and platforms for every cybersecurity enthusiast.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {toolData.map(tool => (
                    <div key={tool.name} className="bg-gray-900 flex flex-col p-6 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-4">
                            {tool.icon}
                            <h3 className="text-2xl font-bold text-green-200">{tool.name}</h3>
                        </div>
                        <p className="text-gray-400 text-sm flex-grow">{tool.description}</p>
                        
                        <div className="flex flex-wrap gap-2 my-4">
                            {tool.tags.map(tag => (
                                <span key={tag} className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getTagColor(tag)}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-auto pt-4 border-t border-gray-700/50 flex gap-4">
                            <a href={tool.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-green-600/80 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                                Download
                            </a>
                            <a href={tool.docsUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-2 px-4 rounded-lg transition-colors">
                                Docs
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}