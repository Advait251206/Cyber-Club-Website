import { useState, useEffect } from 'react';

function generateInaugurationImagePaths() {
    const paths = [];
    for (let i = 1082; i <= 1266; i++) {
        const imageNumber = i.toString().padStart(5, '0');
        paths.push(`/CYBER_CLUB_INAUGURATION/DSC${imageNumber}.JPG`);
    }
    return paths;
}

function generateSeminarImagePaths() {
    const paths = [];
    for (let i = 1; i <= 64; i++) {
        paths.push(`/Seminar_Oct_2025/${i}.jpg`);
    }
    return paths;
}

const inaugurationImages = generateInaugurationImagePaths();
const seminarImages = generateSeminarImagePaths();

const galleryItems = [
    { 
        id: 9, 
        title: 'Installation Ceremony 2025', 
        category: 'Ceremonies', 
        date: 'Sep 22, 2025', 
        imageUrl: '/Installation_Ceremony_2025/install-02.jpg',
        description: 'Key moments from the official Installation Ceremony for the 2025 committee, celebrating the new leadership.',
        images: [
            '/Installation_Ceremony_2025/install-01.jpg', '/Installation_Ceremony_2025/install-02.jpg',
            '/Installation_Ceremony_2025/install-03.jpg', '/Installation_Ceremony_2025/install-04.jpg',
            '/Installation_Ceremony_2025/install-05.jpg', '/Installation_Ceremony_2025/install-06.jpg',
            '/Installation_Ceremony_2025/install-07.jpg', '/Installation_Ceremony_2025/install-08.jpg',
            '/Installation_Ceremony_2025/install-09.jpg', '/Installation_Ceremony_2025/install-10.jpg',
            '/Installation_Ceremony_2025/install-11.jpg', '/Installation_Ceremony_2025/install-12.jpg'
        ]
    },
    { 
        id: 10, 
        title: 'Cyber Club Inauguration', 
        category: 'Ceremonies', 
        date: 'Sep 15, 2025', 
        imageUrl: '/CYBER_CLUB_INAUGURATION/DSC01125.JPG', 
        description: 'A collection of photos capturing the official inauguration of the RBU Cyber Club.',
        images: inaugurationImages
    },
    { 
        id: 17,
        title: 'Seminar on Modern Cyber Crime Tech', 
        category: 'Seminars', 
        date: 'Oct 29, 2025', 
        imageUrl: '/Seminar_Oct_2025/1.jpg',
        description: 'An enlightening seminar by DCP Mr. Nityanand Jha on how cybercriminals leverage modern technologies.',
        images: seminarImages
    },
    { 
        id: 11, 
        title: 'RBU Cyber Club Interviews', 
        category: 'Recruitment', 
        date: 'Sep 16, 2025', 
        imageUrl: 'https://picsum.photos/seed/interviews2025/1200/800', 
        description: 'Mid-year interviews to onboard passionate second-year students into the club’s core technical and creative teams.',
        images: ['https://picsum.photos/seed/interviews2025/1200/800'] 
    },
    { 
        id: 12, 
        title: 'ByteBreak: A Real World Cyber Challenge', 
        category: 'CTF Events', 
        date: 'Apr 4, 2025', 
        imageUrl: 'https://picsum.photos/seed/bytebreak2025/1200/800', 
        description: 'A large-scale cybersecurity challenge targeting first-year students to raise awareness and strengthen problem-solving skills.',
        images: ['https://picsum.photos/seed/bytebreak2025/1200/800'] 
    },
    { 
        id: 13, 
        title: 'Group Discussion', 
        category: 'Workshops', 
        date: 'Jan 31, 2024', 
        imageUrl: 'https://picsum.photos/seed/gd2024/1200/800', 
        description: 'An open forum for students to enhance communication skills, creativity, and problem-solving abilities on topics in cybersecurity and tech.',
        images: ['https://picsum.photos/seed/gd2024/1200/800'] 
    },
    { 
        id: 14, 
        title: 'Recruitment Drive 2025', 
        category: 'Recruitment', 
        date: 'Jan 10, 2025', 
        imageUrl: 'https://picsum.photos/seed/recruit2025/1200/800', 
        description: 'An ambitious recruitment drive to induct fresh talent into the club’s Technical, Systems, Marketing, Social Media, and Logistics domains.',
        images: ['https://picsum.photos/seed/recruit2025/1200/800'] 
    },
    { 
        id: 15, 
        title: 'Financial & Social Media Fraud Awareness Seminar', 
        category: 'Seminars', 
        date: 'Jan 8, 2025', 
        imageUrl: 'https://picsum.photos/seed/seminar2025/1200/800', 
        description: 'An informative seminar to educate students about the growing concerns of cyber fraud, phishing, and social engineering.',
        images: ['https://picsum.photos/seed/seminar2025/1200/800'] 
    },
    { 
        id: 16, 
        title: 'Cyber Awareness Seminar', 
        category: 'Seminars', 
        date: 'Oct 25, 2024', 
        imageUrl: 'https://picsum.photos/seed/seminar2024/1200/800', 
        description: 'A session aimed at building awareness about cyber threats and digital safety, conducted by the Cyber Police Station, Nagpur.',
        images: ['https://picsum.photos/seed/seminar2024/1200/800'] 
    },
];

const filterCategories = ['All', 'Ceremonies', 'Recruitment', 'Seminars', 'Workshops', 'CTF Events'];

export default function Gallery() 
{
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedAlbum, setSelectedAlbum] = useState<(typeof galleryItems)[0] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const filteredItems = activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    const openLightbox = (album: (typeof galleryItems)[0], index: number) => {
        setSelectedAlbum(album);
        setCurrentImageIndex(index);
    };

    const closeLightbox = () => {
        setSelectedAlbum(null);
    };

    const goToNextImage = () => {
        if (selectedAlbum) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedAlbum.images.length);
        }
    };

    const goToPrevImage = () => {
        if (selectedAlbum) {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedAlbum.images.length) % selectedAlbum.images.length);
        }
    };
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedAlbum) return;
            if (e.key === 'ArrowRight') goToNextImage();
            if (e.key === 'ArrowLeft') goToPrevImage();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedAlbum, goToNextImage, goToPrevImage]);

    return (
        <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto text-white">
            <style>{`@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`}</style>

            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-green-300 mb-4">Gallery</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">Capturing the energy, learning, and achievements of our cybersecurity community.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {filterCategories.map(category => ( <button key={category} onClick={() => setActiveFilter(category)} className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${activeFilter === category ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>{category}</button>))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {filteredItems.map(item => (
                    <div 
                        key={item.id} 
                        className="group relative h-60 rounded-2xl overflow-hidden bg-black border border-green-400/50 shadow-lg hover:shadow-green-400 cursor-pointer transform hover:scale-105 transition-all duration-300 flex items-center justify-center p-4 text-center" 
                        onClick={() => openLightbox(item, 0)} 
                        style={{ animation: `fadeInUp 0.5s ease-out` }}
                    >
                        <div>
                            <h3 className="text-xl font-bold text-white drop-shadow-md">{item.title}</h3>
                            <p className="text-sm text-gray-400 mt-1">{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedAlbum && (
                <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center" onClick={closeLightbox}>
                    <div className="relative w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
                        
                        <img src={selectedAlbum.images[currentImageIndex]} alt={`${selectedAlbum.title} - ${currentImageIndex + 1}`} className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg" style={{ animation: `fadeInUp 0.3s ease-out` }}/>
                        
                        <button onClick={closeLightbox} className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-red-500 transition-colors">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        
                        {selectedAlbum.images.length > 1 && (
                            <>
                                <button onClick={goToPrevImage} className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-white/20 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <button onClick={goToNextImage} className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-white/20 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </>
                        )}
                        
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-4 py-2 rounded-full">
                            <h3 className="font-bold">{selectedAlbum.title}</h3>
                            <p>Image {currentImageIndex + 1} of {selectedAlbum.images.length}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}