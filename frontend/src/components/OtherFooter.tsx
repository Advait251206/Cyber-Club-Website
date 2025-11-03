import { Link as RouterLink } from "react-router-dom";

type FooterLink = {
    label: string;
    href: string;
};

interface OtherProps {
    title: string;
    links: FooterLink[];
}

export function Other({ title, links }: OtherProps) 
{
    return (
        <div className="p-4">
            <h3 className="text-xl font-semibold text-green-300 mb-4">{title}</h3>
            <ul className="space-y-2">
                {links.map((link, index) => (
                    <li key={index}>
                        <RouterLink
                            to={link.href}
                            className="hover:text-green-400 transition-colors"
                        >
                            {link.label}
                        </RouterLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}