import { PlayCircle } from "lucide-react";

const IIMM_VIDEOS = [
  {
    id: 1,
    title: "Campus Tour | IIMM Jaipur",
    videoId: "dGcsHMXbSOA",
    description: "Take a walkthrough of our vibrant IIMM Jaipur campus.",
    thumbnail: "/src/assets/institute-building.jpg",
    link: "https://www.youtube.com/watch?v=Jk3m5PPRJEE"
  },
  {
    id: 2,
    title: "Placement Highlights | IIMM Jaipur",
    videoId: "TlB_eWDSMt4",
    description: "Hear from our students about their successful placements.",
    thumbnail: "/src/assets/event-1.jpg",
    link: "https://www.youtube.com/watch?v=1l_DbKYlOFM"
  },
  {
    id: 3,
    title: "Faculty Insights | IIMM Jaipur",
    videoId: "NCwa_xi0Uuc",
    description: "Our faculty share their perspectives on education & innovation.",
    thumbnail: "/src/assets/event-2.jpg",
    link: "https://www.youtube.com/watch?v=RZSFUrxYtPs"
  },
  {
    id: 4,
    title: "Student Life & Activities | IIMM Jaipur",
    videoId: "BwuLxPH8IDs",
    description: "Discover the exciting events and clubs at IIMM Jaipur.",
    thumbnail: "/src/assets/event-3.jpg",
    link: "https://www.youtube.com/watch?v=NP8tBDRkJOQ"
  },
  {
    id: 5,
    title: "Industry Connect & Partnerships | IIMM Jaipur",
    videoId: "dQw4w9WgXcQ",
    description: "Explore how we collaborate with industry leaders.",
    thumbnail: "/src/assets/carousel-1.jpg",
    link: "https://www.youtube.com/watch?v=IXoC7mPnPiY"
  },
  {
    id: 6,
    title: "Alumni Success Stories | IIMM Jaipur",
    videoId: "9bZkp7q19f0",
    description: "Meet our successful alumni making an impact globally.",
    thumbnail: "/src/assets/carousel-2.jpg",
    link: "https://www.youtube.com/watch?v=thhqbI_qPBI"
  },
  {
    id: 7,
    title: "Campus Events & Celebrations | IIMM Jaipur",
    videoId: "JGwWNGJdvx8",
    description: "Catch glimpses from our vibrant events and fests.",
    thumbnail: "/src/assets/carousel-3.jpg",
    link: "https://www.youtube.com/watch?v=XeBq_dz6mwA"
  },
  {
    id: 8,
    title: "Admissions 2025 | IIMM Jaipur",
    videoId: "kJQP7kiw5Fk",
    description: "Get complete information about IIMM Jaipur admissions.",
    thumbnail: "/src/assets/hero-main.jpg",
    link: "https://www.youtube.com/watch?v=BF_o_4zviZA"
  }
];

const YoutubeSectionIIMM = () => {
  return (
    <section className="py-12 bg-white w-full px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          IIMM Jaipur Videos
        </h2>

        {/* Scrollable videos section */}
        <div className="relative">
          <div className="flex space-x-6 pb-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {IIMM_VIDEOS.map((video) => (
              <a
                key={video.id}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 block"
              >
                <div className="relative pt-[56.25%] bg-gray-200 group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/30 rounded-full p-2 group-hover:bg-black/50 transition-colors duration-300">
                      <PlayCircle className="h-16 w-16 text-white opacity-90 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <span className="sr-only">Play {video.title}</span>
                  </div>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />
        </div>

        {/* Channel link */}
        <div className="mt-6 flex justify-end">
          <a
            href="https://www.youtube.com/@iiimjaipur5534"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 transition"
          >
            View all videos 
            <svg
              className="ml-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSectionIIMM;
