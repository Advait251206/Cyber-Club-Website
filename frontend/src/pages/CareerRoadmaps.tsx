import { useState } from 'react';

const roadmaps = [
    {
        icon: "🧩",
        title: "Beginner to Professional Path",
        color: "text-white",
        description: "A general step-by-step guide to starting your cybersecurity journey from scratch.",
        skills: ["Computer & Network Fundamentals", "Core Security Concepts", "Hands-on Lab Practice", "Choosing a Specialization", "Building a Portfolio"],
        certs: ["Start with fundamentals like CompTIA A+ or Network+, then move to specialized certs."],
        path: ["Stage 1: Learn basics (OSI, TCP/IP, Linux)", "Stage 2: Understand cyber concepts (threats, encryption)", "Stage 3: Get hands-on with labs (TryHackMe, HTB)", "Stage 4: Choose a track to specialize in.", "Stage 5: Build a portfolio with projects and writeups."]
    },
    {
        icon: "💻",
        title: "Ethical Hacking / Pentesting Roadmap",
        color: "text-red-500",
        description: "The classic Red Team entry path — for those who love to exploit systems ethically.",
        skills: ["Network enumeration & scanning (Nmap, Netcat)", "Exploitation (Metasploit, manual payloads)", "Privilege escalation & post-exploitation", "Web app pentesting (Burp, SQLi, XSS)"],
        certs: ["CEH → eJPT → OSCP → OSEP"],
        path: ["Learn Linux, networking, Python scripting", "Study OWASP Top 10 + Burp Suite", "Practice TryHackMe / HackTheBox labs", "Build portfolio with writeups"]
    },
    {
        icon: "🧑‍💼",
        title: "SOC Analyst Roadmap",
        color: "text-blue-400",
        description: "Perfect for Blue Team beginners — focuses on monitoring, alerts, and incident response.",
        skills: ["Log analysis (Sysmon, ELK Stack, Splunk)", "SIEM configuration (Wazuh, Sentinel)", "Incident response workflow (Detection → Containment → Recovery)", "Windows Event IDs, MITRE ATT&CK mapping"],
        certs: ["CompTIA Security+", "Splunk Certified User", "Blue Team Level 1 (BTL1)"],
        path: ["Study networking and OS internals", "Learn how logs work (Windows + Linux)", "Practice SOC cases in Blue Team Labs Online", "Work on home lab SIEM setup"]
    },
     {
        icon: "🧩",
        title: "Incident Response & Digital Forensics Roadmap",
        color: "text-yellow-400",
        description: "Handling live cyberattacks, collecting evidence, and investigating breaches.",
        skills: ["Chain of custody, evidence handling", "Log & memory analysis", "Timeline creation of incidents", "Network packet analysis"],
        certs: ["GCFA (GIAC Certified Forensic Analyst)", "CHFI (Computer Hacking Forensic Investigator)"],
        path: ["Learn forensic data types (disk, memory, network)", "Study file systems & artifacts", "Analyze case samples using Volatility & Autopsy", "Write forensic reports"]
    },
    {
        icon: "🟢",
        title: "OSINT Roadmap",
        color: "text-emerald-400",
        description: "Focuses on gathering and analyzing publicly available information for intelligence purposes.",
        skills: ["Google Dorking, WHOIS, DNS Recon", "Using tools like Maltego, Shodan, SpiderFoot", "Profile correlation (social media tracing)"],
        certs: ["OSCP (includes OSINT)", "Certified OSINT Expert (various providers)"],
        path: ["Master advanced search techniques.", "Learn to use specialized OSINT tools.", "Practice tracing digital footprints.", "Understand ethical considerations and reporting."]
    },
    {
        icon: "🟤",
        title: "Cloud Security Roadmap",
        color: "text-yellow-600",
        description: "Securing cloud infrastructure (AWS, Azure, GCP) — one of the most in-demand domains.",
        skills: ["Cloud architecture basics (IAM, Networking, Storage)", "Cloud attack vectors (misconfigurations, privilege escalation)", "Cloud Security Tools: AWS GuardDuty, Azure Defender, Prisma Cloud", "DevSecOps integration (CI/CD pipeline security)"],
        certs: ["AWS Certified Security - Specialty", "Microsoft Azure Security Engineer (AZ-500)", "CompTIA Cloud+"],
        path: ["Learn cloud fundamentals (AWS/Azure free training)", "Study IAM & security policies", "Practice securing workloads (EC2, S3, IAM Roles)", "Try attack simulations on Flaws.Cloud or CloudGoat", "Learn compliance (CIS Benchmarks, NIST)"]
    },
    {
        icon: "🧬",
        title: "Malware Analysis & Reverse Engineering Roadmap",
        color: "text-green-400",
        description: "For those fascinated by viruses, trojans, and ransomware behavior.",
        skills: ["Assembly basics, debugging, disassembly", "Analyzing malware behavior in sandbox environments", "Memory forensics and static/dynamic analysis"],
        certs: ["Malware Analysis (TCM Security)", "FOR610 (SANS)"],
        path: ["Learn how executables work (PE structure)", "Study Assembly & debugging", "Practice analyzing malware samples in sandbox", "Learn report writing for malware cases"]
    },
    {
        icon: "⚙️",
        title: "DevSecOps Roadmap",
        color: "text-orange-400",
        description: "Integrating security into the software development lifecycle.",
        skills: ["CI/CD pipelines (GitHub Actions, Jenkins)", "Secure code analysis (SAST, DAST)", "Container security (Docker, Kubernetes)", "Infrastructure as Code (IaC) scanning"],
        certs: ["DevSecOps Professional (Practical DevSecOps)", "Certified Kubernetes Security Specialist (CKS)"],
        path: ["Learn DevOps tools (Git, CI/CD)", "Understand application security (OWASP Top 10)", "Implement scanners in pipelines", "Deploy secure containerized apps"]
    },
    {
        icon: "🧠",
        title: "Threat Intelligence Roadmap",
        color: "text-purple-400",
        description: "Analyzing global attack trends, hacker groups, and dark web intelligence.",
        skills: ["Threat actor profiling (APT groups)", "IOC (Indicators of Compromise) collection", "Threat data analysis & correlation", "Dark web monitoring"],
        certs: ["Certified Threat Intelligence Analyst (CTIA)", "Threat Hunter (TCM Security)"],
        path: ["Learn basics of cyber threat landscape", "Understand APT frameworks (MITRE ATT&CK)", "Practice collecting and correlating IOCs", "Write reports and intelligence summaries"]
    },
    {
        icon: "🌐",
        title: "Network Security Engineer Roadmap",
        color: "text-cyan-400",
        description: "Protecting and monitoring network infrastructure at a large scale.",
        skills: ["Firewalls, VPNs, IDS/IPS systems", "Secure network design", "VLANs, routing, packet filtering", "Network segmentation and encryption"],
        certs: ["CCNA Security", "CompTIA Network+", "Palo Alto Networks PCCET"],
        path: ["Learn networking from scratch", "Study common protocols (TCP/IP, DNS, DHCP)", "Practice configuring firewalls & routers", "Learn traffic analysis"]
    },
    {
        icon: "🧑‍💻",
        title: "Cybersecurity Research & Exploit Development Roadmap",
        color: "text-rose-400",
        description: "For those who love deep technical work — discovering new vulnerabilities and CVEs.",
        skills: ["Reverse engineering, fuzzing, memory corruption", "Exploit development for software vulnerabilities", "Binary patching and bypassing mitigations"],
        certs: ["OSED (Offensive Security Exploit Developer)", "EXP-301 (Advanced Windows Exploitation)"],
        path: ["Learn low-level programming (C, Assembly)", "Study buffer overflows and shellcoding", "Practice exploit writing on VulnHub or HackTheBox", "Participate in exploit dev communities"]
    },
    {
        icon: "🔐",
        title: "Governance, Risk, and Compliance (GRC) Roadmap",
        color: "text-indigo-400",
        description: "For those interested in policies, standards, and cyber law.",
        skills: ["Information Security Management (ISO 27001, NIST)", "Risk assessment and mitigation", "Data privacy regulations (GDPR, HIPAA)", "Policy writing and audits"],
        certs: ["CompTIA Security+", "CISA (Certified Information Systems Auditor)", "ISO 27001 Lead Implementer"],
        path: ["Understand governance frameworks", "Study risk management methods", "Learn compliance laws (India's DPDP, GDPR)", "Practice audit simulations"]
    }
];

const teamRoadmaps = [
    {
        icon: "🔴", title: "Red Team (Offensive)", color: "text-red-400",
        overview: "Offensive security: find, exploit, and document vulnerabilities ethically.",
        prereqs: "Comfortable with Linux, basic networking (TCP/IP), scripting (Python/Bash).",
        coreSkills: "Reconnaissance, scanning, web exploit techniques (XSS/SQLi), binary exploitation, post-exploitation, privilege escalation, social engineering, report writing.",
        commonTools: "Nmap, Netcat, Metasploit, Burp Suite, Empire, msfvenom, Ghidra (basic), pwntools.",
        path: "1. Foundations: Linux + Networking + Python scripting.\n2. Web basics: HTTP, HTML, JS, OWASP Top 10.\n3. Hands-on labs: TryHackMe “Offensive” paths, HTB Starting Point.\n4. Exploitation: Learn Nmap, Burp Suite, basic Metasploit workflows.\n5. Post-exploit & persistence: privilege escalation, lateral movement.\n6. Advanced: exploit development, CTF pwn challenges, social engineering simulations.\n7. Certification & portfolio: eJPT → OSCP prep; publish writeups and lab reports.",
        projects: "- Complete 5 HTB or TryHackMe machines and write walkthroughs.\n- Build a phishing simulation (safe lab) and document methodology & mitigations.\n- Publish a “pentest checklist” + sample pentest report.",
        levelup: "Contribute to open-source exploit tools, attempt OSCP/OSEP, join bug-bounty platforms."
    },
    {
        icon: "🔵", title: "Blue Team (Defensive)", color: "text-sky-400",
        overview: "Protect systems, detect intrusions, respond to incidents.",
        prereqs: "Familiarity with Windows & Linux internals, basic networking, log concepts.",
        coreSkills: "Log analysis, SIEM, threat hunting, incident response (IR), endpoint detection, forensics, baseline/tuning.",
        commonTools: "Splunk/ELK/Wazuh, OSQuery, Suricata/Snort, Velociraptor, Autopsy, Volatility.",
        path: "1. Foundations: OS internals (Windows Event IDs, Linux logging), networking.\n2. Logging & monitoring: set up ELK/Wazuh; ingest logs from hosts.\n3. Detection: learn to write SIEM rules and map to MITRE ATT&CK.\n4. Incident Response: triage, containment, evidence collection.\n5. Forensics: memory/disk analysis with Volatility/Autopsy.\n6. Red-Blue drills: run detection exercises against simulated attacks.\n7. Certs & portfolio: Splunk certs / GCIA / GCIH; maintain IR case studies.",
        projects: "- Build a home SIEM with ELK + sample detection rules.\n- Publish an IR timeline from a simulated breach.\n- Create a collection of Sigma rules mapped to ATT&CK techniques.",
        levelup: "Specialize in detection engineering, SOC automation, or threat hunting; contribute to open-source detection rules."
    },
    {
        icon: "🟣", title: "Purple Team (Research / Integration)", color: "text-purple-400",
        overview: "Bridge Red & Blue — run collaborative exercises to improve detection & response.",
        prereqs: "Working knowledge of both Red and Blue toolchains; MITRE ATT&CK familiarity.",
        coreSkills: "Adversary emulation, detection engineering, SIEM rule testing, metrics & reporting, exercise coordination.",
        commonTools: "Atomic Red Team, MITRE Caldera, ATT&CK Navigator, Sigma, Elastic/Splunk/Wazuh.",
        path: "1. Learn MITRE ATT&CK and mapping techniques.\n2. Run simple Red attacks (e.g., Atomic tests) and capture telemetry.\n3. Create & tune detections in SIEM; measure detection coverage & TTD/MTTR.\n4. Run iterative Purple exercises: red executes, blue responds, purple coordinates improvements.\n5. Document detections, false positive rates, and playbooks.",
        projects: "- Run an ATT&CK-mapped campaign and produce a detection maturity report.\n- Create a small “Purple Playbook” of detection rules + test harness.",
        levelup: "Move into detection engineering, automation of Purple exercises, or MAD (MITRE ATT&CK Defender) paths."
    },
    {
        icon: "⚪", title: "White Team (Administration & Governance)", color: "text-gray-300",
        overview: "Governance, ethics, rules, compliance, event coordination, club oversight.",
        prereqs: "Organizational skills; familiarity with basic security frameworks is helpful.",
        coreSkills: "Policy writing, risk assessment, compliance basics, event administration, code of conduct enforcement.",
        commonTools: "Notion/Confluence, GRC tools, Google Workspace, policy templates (ISO/NIST).",
        path: "1. Learn common frameworks: ISO 27001 basics, NIST CSF.\n2. Practice drafting club policies: acceptable use, lab safety, code of conduct.\n3. Risk & compliance: basic risk register and mitigation plans.\n4. Event ops: design CTF rules, scoring, and safety checks.",
        projects: "- Create a “Club Governance Kit” with policies and risk registers.\n- Run a mock audit of your club's lab and write findings.",
        levelup: "Learn formal GRC tools and pursue CISA/ISO lead implementer if interested in professional GRC."
    },
    {
        icon: "🟢", title: "Green Team (Infrastructure & DevSecOps)", color: "text-green-400",
        overview: "Secure the stack — infra, pipelines, cloud, and developer workflows.",
        prereqs: "Linux admin, basic cloud concepts, scripting.",
        coreSkills: "IaC security, container hardening, CI/CD security, configuration management, cloud IAM.",
        commonTools: "Docker, Kubernetes, Terraform, Jenkins/GitHub Actions, Trivy, Kube-Bench, AWS/Azure/GCP consoles.",
        path: "1. Learn system administration & shell scripting.\n2. Learn Docker and basic Kubernetes concepts.\n3. Study IaC: Terraform basics + secure patterns.\n4. Integrate security in CI/CD: run SAST/DAST, dependency checks.\n5. Cloud security: secure IAM, S3 buckets, VPCs.",
        projects: "- Build a CI pipeline that fails a PR if vulnerabilities are found.\n- Harden a simple Kubernetes deployment and document a checklist.",
        levelup: "Specialize in CloudSec/Platform Security, pursue CKS (Kubernetes) or cloud security certs."
    },
    {
        icon: "🟠", title: "Yellow Team (Awareness & Training)", color: "text-orange-400",
        overview: "Human-focused security — teach, onboard, and run awareness programs.",
        prereqs: "Communication skills; basic cybersecurity knowledge.",
        coreSkills: "Curriculum design, workshop delivery, content creation, empathy, metrics for behavior change.",
        commonTools: "Canva, Kahoot/Quizizz, LMS platforms, OBS for recordings.",
        path: "1. Create beginner-friendly lesson plans (phishing, passwords, 2FA).\n2. Run workshops & beginner CTFs for new members.\n3. Build assessment quizzes and feedback loops.\n4. Measure impact: phishing simulation success rates, quiz improvements.",
        projects: "- Run a campus phishing awareness month and report results.\n- Build a structured “New Member” cybersecurity bootcamp.",
        levelup: "Move into corporate security awareness, instructional design, or people-centered policy roles."
    },
    {
        icon: "⚫", title: "Black Team (CTF / Infrastructure Ops)", color: "text-white",
        overview: "Build, run, and secure the club's competition/CTF infrastructure.",
        prereqs: "Systems administration, networking, virtualization.",
        coreSkills: "VM deployment, sandboxing, network isolation, backup, monitoring, secure staging.",
        commonTools: "VirtualBox/VMware, Docker, Ansible, pfSense, Prometheus, Grafana.",
        path: "1. Learn virtualization & container orchestration basics.\n2. Build an isolated lab network; practice safe VM snapshots & restores.\n3. Automate challenge deployment with scripts/Ansible.\n4. Implement monitoring & alerting for competition infra.",
        projects: "- Release a “CTF infra repo” that automates contest setup.\n- Document SOPs for challenge validation and live incident handling.",
        levelup: "Run larger events, monetize via sponsorships, or consult on secure CTF builds."
    },
    {
        icon: "🟤", title: "Gold Team (Policy, Communication & Management)", color: "text-yellow-500",
        overview: "PR, partnerships, sponsorships, outreach, and cross-team coordination.",
        prereqs: "Communication, design basics, event planning.",
        coreSkills: "Sponsorship proposals, press releases, social media, budgeting, stakeholder management.",
        commonTools: "Canva, Mailchimp, Notion, Trello, LinkedIn.",
        path: "1. Build a club brand kit (logo, colors, templates).\n2. Create sponsor & event one-pagers; outreach scripts.\n3. Run marketing campaigns and track engagement metrics.\n4. Manage budget and event calendars; coordinate teams.",
        projects: "- Secure one small sponsor and publish a post-event report.\n- Build a club media kit and contact list.",
        levelup: "Lead partnerships with industry, grow club reputation, or manage larger student programs."
    },
    {
        icon: "⚙️", title: "Gray Team (Experimental / Advanced Hybrid)", color: "text-gray-400",
        overview: "Experimental, research-heavy group exploring unconventional or advanced techniques in a strictly ethical, documented manner.",
        prereqs: "Strong grounding in either red or blue disciplines; ethics training.",
        coreSkills: "Advanced exploit research, bypass techniques, hybrid red-blue operations, creative detection bypass & defensive countermeasures.",
        commonTools: "Advanced versions of Burp, custom fuzzers, pwntools, Binary Ninja/Ghidra, YARA, custom telemetry collectors.",
        path: "1. Master either offensive or defensive fundamentals.\n2. Study advanced topics: fuzzing, exploit mitigations, evasions.\n3. Run controlled experiments under signed approvals and strict safety.\n4. Publish responsibly disclosed research and defensive countermeasures.",
        projects: "- Build a small fuzzer for a simple C program and document findings.\n- Publish a responsible disclosure write-up and a detector that mitigates the issue.",
        levelup: "Move into academic research, CVE discovery, or advanced R&D roles; present at local meetups/conferences."
    }
];

export default function CareerRoadmaps() {
    const [openRoadmap, setOpenRoadmap] = useState<string | null>(null);

    return (
        <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto text-gray-300">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-green-300 mb-4">Career Roadmaps</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">Structured paths to guide you from a beginner to a specialized cybersecurity professional.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {roadmaps.map(roadmap => (
                    <div key={roadmap.title} className="bg-gray-900 p-8 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300">
                        <h2 className={`text-3xl font-bold mb-3 ${roadmap.color}`}>{roadmap.icon} {roadmap.title}</h2>
                        <p className="mb-6 text-lg italic text-gray-400">{roadmap.description}</p>
                        <div className="space-y-6">
                            <div><h3 className="text-xl font-semibold text-green-300 mb-3 border-b border-green-300/20 pb-2">Key Skills</h3><ul className="list-disc list-inside space-y-2">{roadmap.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>
                            <div><h3 className="text-xl font-semibold text-green-300 mb-3 border-b border-green-300/20 pb-2">Certifications</h3><ul className="list-disc list-inside space-y-2">{roadmap.certs.map(cert => <li key={cert}>{cert}</li>)}</ul></div>
                            <div><h3 className="text-xl font-semibold text-green-300 mb-3 border-b border-green-300/20 pb-2">Learning Path</h3><ol className="list-decimal list-inside space-y-2">{roadmap.path.map(step => <li key={step}>{step}</li>)}</ol></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="my-24">
                <h2 className="text-4xl font-bold text-blue-300 mb-8 text-center">Role-Based "Team Color" Roadmaps</h2>
                <div className="space-y-4">
                    {teamRoadmaps.map(roadmap => (
                        <div key={roadmap.title} className="bg-gray-900 rounded-lg border border-green-300 shadow-2xl hover:shadow-green-400 transition-shadow duration-300 overflow-hidden">
                            <button 
                                onClick={() => setOpenRoadmap(openRoadmap === roadmap.title ? null : roadmap.title)}
                                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                            >
                                <h3 className={`text-2xl font-bold ${roadmap.color}`}>{roadmap.icon} {roadmap.title}</h3>
                                <span className={`transform transition-transform duration-300 ${openRoadmap === roadmap.title ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                            <div className={`transition-all duration-500 ease-in-out ${openRoadmap === roadmap.title ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-6 border-t border-green-300/20 space-y-6">
                                    <p><span className="font-semibold text-green-200">Overview:</span> {roadmap.overview}</p>
                                    <p><span className="font-semibold text-green-200">Prerequisites:</span> {roadmap.prereqs}</p>
                                    <div><h4 className="font-semibold text-green-200 mb-2">Core Skills:</h4><p className="whitespace-pre-wrap text-sm text-gray-400">{roadmap.coreSkills}</p></div>
                                    <div><h4 className="font-semibold text-green-200 mb-2">Common Tools:</h4><p className="whitespace-pre-wrap text-sm text-gray-400">{roadmap.commonTools}</p></div>
                                    <div><h4 className="font-semibold text-green-200 mb-2">Step-by-step Path:</h4><p className="whitespace-pre-wrap text-sm text-gray-400">{roadmap.path}</p></div>
                                    <div><h4 className="font-semibold text-green-200 mb-2">Mini Projects / Portfolio:</h4><p className="whitespace-pre-wrap text-sm text-gray-400">{roadmap.projects}</p></div>
                                    <div><h4 className="font-semibold text-green-200 mb-2">Level Up:</h4><p className="whitespace-pre-wrap text-sm text-gray-400">{roadmap.levelup}</p></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}