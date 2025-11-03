import { Sidefooter } from "./Sidefooter"
import { Other } from "./OtherFooter"

export default function Footer() {
    const quickLinks = [
        { label: "About Us", href: "/about" },
        { label: "Events", href: "/events" },
        { label: "Our Team", href: "/team" },
        { label: "Gallery", href: "/gallery" },
        { label: "Contact", href: "/contact" },
    ];

    const resources = [
        { label: "Learning & Study", href: "/resources/learning" },
        { label: "Tools & Platforms", href: "/resources/tools" },
        { label: "Practice & CTFs", href: "/resources/practice" },
        { label: "Reading & Research", href: "/resources/reading" },
        { label: "Career Roadmaps", href: "/resources/roadmaps" },
    ];

    return (
        <div className="bg-gray-900 text-gray-300 p-8 border-t border-green-300/20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                    <Sidefooter />
                </div>

                <Other title="Quick Links" links={quickLinks} />
                <Other title="Resources" links={resources} />
            </div>
        </div>
    );
}