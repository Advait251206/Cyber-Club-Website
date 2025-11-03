import AccentLine from './AccentLine';
import AnimatedText from './AnimatedText';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
        <div className="text-center mb-12">
            <AnimatedText>
                <h2 className="text-3xl lg:text-4xl font-bold text-green-300">{title}</h2>
            </AnimatedText>
            <AccentLine color="green" size="md" className="w-24 mx-auto mt-4 mb-6" />
            {subtitle && (
                <AnimatedText>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
                </AnimatedText>
            )}
        </div>
    );
}