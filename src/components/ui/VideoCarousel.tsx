import React, { useState } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player/youtube";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { X } from "lucide-react";

interface Video {
  id: string;
  title: string;
  url: string;
}

const videos: Video[] = [
  { 
    id: "1", 
    title: "IIMM - Introduction to Materials Management", 
    url: "https://www.youtube.com/watch?v=FDVMhwDa4VE"
  },
  { 
    id: "2", 
    title: "IIMM - Career in Materials Management", 
    url: "https://www.youtube.com/watch?v=mUuNkCoHlbY"
  },
  { 
    id: "3", 
    title: "IIMM - Supply Chain Management Program", 
    url:"https://www.youtube.com/watch?v=mUuNkCoHlbY"
  },
  { 
    id: "4", 
    title: "IIMM - Importance of Materials Management", 
    url: "https://www.youtube.com/watch?v=FDVMhwDa4VE"
  },
  { 
    id: "5", 
    title: "IIMM - Student Testimonials", 
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

const VideoCarousel: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideo = (url: string) => {
    setSelectedVideo(url);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0',
    variableWidth: false,
    easing: 'ease-in-out', // Smoother easing function
    cssEase: 'ease-in-out', // CSS easing for smoother transitions
    swipeToSlide: true, // Allows for partial slides to be scrolled
    touchThreshold: 10, // More precise touch control
    swipe: true,
    arrows: false, // Remove default arrows for cleaner look
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] py-8 bg-gray-50">
      <div className="w-full max-w-full mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">IIMM Video Gallery</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Explore our collection of videos about Materials Management and IIMM programs</p>
      </div>
      <div className="w-screen">
        <Slider {...settings} className="!w-[100vw] !-ml-[1px]">
          {videos.map((video) => (
            <div key={video.id} className="px-0">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-1" style={{ width: 'calc(100% - 8px)' }}>
                <div className="relative aspect-video w-full overflow-hidden">
                  <img 
                    src={`https://img.youtube.com/vi/${video.url.split('v=')[1]}/maxresdefault.jpg`} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0 bg-black/20 flex items-center justify-center hover:bg-black/30 transition-colors cursor-pointer"
                    onClick={() => openVideo(video.url)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && openVideo(video.url)}
                  >
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-red-600 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold line-clamp-2">{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeVideo}>
          <div className="relative w-full max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video w-full">
              <ReactPlayer
                url={selectedVideo}
                width="100%"
                height="100%"
                controls
                playing
                config={{
                  youtube: {
                    playerVars: {
                      showinfo: 1,
                      rel: 0,
                      modestbranding: 1,
                      origin: window.location.origin
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;
