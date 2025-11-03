interface SplashScreenProps {
    onVideoEnd: () => void;
    isVisible: boolean;
}

export default function SplashScreen({ onVideoEnd, isVisible }: SplashScreenProps) {
    return (
        <div 
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-700 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            <video
                src="/Opening2.mp4" 
                
                autoPlay
                muted
                
                playsInline
                
                onEnded={onVideoEnd}
                
                className="w-full h-full object-cover"
            />
        </div>
    );
}