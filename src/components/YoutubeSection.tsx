import { PlayCircle } from "lucide-react";

const YoutubeSection = () => {
  const videos = [
    {
      id: 1,
      title: "IIMT Jaipur - Empowering Professionals",
      videoId: "dGcsHMXbSOA",
      description: "Learn about our mission and vision in materials management education."
    },
    {
      id: 2,
      title: "Annual Conference 2023",
      videoId: "BwuLxPH8IDs",
      description: "Highlights from our latest annual conference with industry leaders."
    },
    {
      id: 3,
      title: "Student Success Stories",
      videoId: "NCwa_xi0Uuc",
      description: "Hear from our successful alumni about their journey with IIMT Delhi."
    },
    {
      id: 4,
      title: "Campus Tour & Facilities",
      videoId: "TlB_eWDSMt4",
      description: "Take a virtual tour of our state-of-the-art campus and learning facilities."
    },
    {
      id: 5,
      title: "Expert Faculty Insights",
      videoId: "dGcsHMXbSOA",
      description: "Our distinguished faculty share their expertise and teaching methodologies."
    },
    {
      id: 6,
      videoId: "BwuLxPH8IDs",
      description: "Learn about our collaborations with leading industry partners."
    }
  ];

  return (
    <section className="py-8 bg-white w-full">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center"></h2>
        
        <div className="relative w-full">
          <div className="flex space-x-4 pb-6 overflow-x-auto scrollbar-hide w-full">
            {videos.map((video) => (
              <div key={video.id} className="flex-shrink-0 w-96 bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative pt-[56.25%] bg-gray-200">
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.videoId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <PlayCircle className="h-20 w-20 text-red-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                    <span className="sr-only">Play {video.title}</span>
                  </a>
                  <img 
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} 
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                    }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicators */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
        </div>

        <div className="mt-6 text-right">
          <a
            href="https://www.youtube.com/user/IIMMDELHI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all videos
            <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;
