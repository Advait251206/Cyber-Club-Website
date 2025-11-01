import { useState } from 'react'

interface PhotoSliderProps {
    photos: Array<{
        id: number
        title: string
        description: string
        date: string
        image: string
        category: string
    }>
    autoPlay?: boolean
    interval?: number
}

export default function PhotoSlider({ photos, autoPlay = true, interval = 5000 }: PhotoSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    // Auto-play functionality
    useState(() => {
        if (autoPlay) {
            const timer = setInterval(nextSlide, interval)
            return () => clearInterval(timer)
        }
    })

    if (photos.length === 0) return null

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            {/* Main Image Container */}
            <div className="relative h-96 bg-gray-900 rounded-lg overflow-hidden border border-green-300">
                <div 
                    className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center transition-opacity duration-500"
                    style={{ backgroundImage: `url(${photos[currentIndex].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div className="relative z-10 text-center text-white p-6">
                        <h3 className="text-2xl font-bold mb-2">{photos[currentIndex].title}</h3>
                        <p className="text-lg mb-4">{photos[currentIndex].description}</p>
                        <div className="flex items-center justify-center space-x-4">
                            <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-semibold">
                                {photos[currentIndex].category}
                            </span>
                            <span className="text-gray-300">{photos[currentIndex].date}</span>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center space-x-2 mt-4">
                {photos.map((photo, index) => (
                    <button
                        key={photo.id}
                        onClick={() => goToSlide(index)}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                            index === currentIndex 
                                ? 'border-green-400 shadow-lg shadow-green-400' 
                                : 'border-gray-600 hover:border-green-300'
                        }`}
                    >
                        <div 
                            className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500"
                            style={{ backgroundImage: `url(${photo.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        ></div>
                    </button>
                ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
                {photos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentIndex 
                                ? 'bg-green-400' 
                                : 'bg-gray-600 hover:bg-green-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}
