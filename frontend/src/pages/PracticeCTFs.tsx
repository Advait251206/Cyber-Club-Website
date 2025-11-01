export default function PracticeCTFs() {
    return (
        <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto text-gray-300">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-green-300 mb-4">Practice, CTFs & Challenges</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">Hone your skills and test your knowledge on these competitive platforms.</p>
            </div>

            <div className="space-y-12">
                <div className="bg-gray-900 p-8 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold text-blue-300 mb-6">🎯 CTF Platforms</h2>
                    <ul className="list-disc list-inside space-y-3 text-lg">
                        <li><a href="https://ctftime.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CTFtime.org</a> - All global CTF events with leaderboards.</li>
                        <li><a href="https://picoctf.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PicoCTF</a> - Best beginner platform (Carnegie Mellon University).</li>
                        <li><a href="https://www.hackthebox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">HackTheBox</a> - Realistic machines from beginner to insane difficulty.</li>
                        <li><a href="https://tryhackme.com/hacktivities" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">TryHackMe Challenges</a> - Beginner paths and events.</li>
                        <li><a href="https://www.root-me.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Root Me</a> - 500+ challenges in multiple categories.</li>
                        <li><a href="https://ctflearn.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CTFLearn</a> - Beginner CTF problems.</li>
                    </ul>
                </div>

                <div className="bg-gray-900 p-8 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold text-blue-300 mb-6">⚔️ Challenge Categories</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div><h3 className="text-xl font-bold text-green-300">Crypto</h3><p>Decrypting, encoding, and cryptographic challenges (Hashing, Caesar cipher, RSA basics).</p></div>
                        <div><h3 className="text-xl font-bold text-green-300">Web Exploitation</h3><p>Exploiting web apps (SQLi, XSS, IDOR) using Burp, Payloads, HTML.</p></div>
                        <div><h3 className="text-xl font-bold text-green-300">Binary Exploitation</h3><p>Hacking compiled programs with GDB, Assembly.</p></div>
                        <div><h3 className="text-xl font-bold text-green-300">Reverse Engineering</h3><p>Analyzing executables with Ghidra, IDA.</p></div>
                        <div><h3 className="text-xl font-bold text-green-300">Forensics</h3><p>File carving, packet tracing, metadata with Wireshark, strings.</p></div>
                        <div><h3 className="text-xl font-bold text-green-300">OSINT</h3><p>Finding hidden info online with Google Dorks, Maltego.</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}