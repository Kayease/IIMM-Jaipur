import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import instituteBuilding from "@/assets/institute-building.jpg";

const programs = [
  {
    id: 1,
    image: event1,
    title: "Undergraduate Programs",
  },
  {
    id: 2,
    image: event2,
    title: "Postgraduate Programs",
  },
  {
    id: 3,
    image:  event3,
    title: "Executive Learning",
  },
  {
    id: 4,
    image: carousel1,
    title: "Distance Learning",
  },
  {
    id: 5,
    image: carousel2,
    title: "Professional Certifications",
  },
];

export default function HomeCarousel() {
  const duplicatedPrograms = [...programs, ...programs];

  const [translateX, setTranslateX] = useState(0);
  const cardWidth = 400; // Increased card width
  const gap = 32; // Gap between cards
  const visibleCards = 3;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setTranslateX((prev) => {
        // When we reach half (original array length), reset instantly
        if (Math.abs(prev) >= cardWidth * programs.length) {
          return 0;
        }
        return prev - cardWidth;
      });
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  const handlePrev = () => {
    setTranslateX((prev) => {
      const maxScroll = (cardWidth + gap) * (programs.length - 1);
      return Math.abs(prev) === 0 ? -maxScroll : prev + (cardWidth + gap);
    });
  };

  const handleNext = () => {
    setTranslateX((prev) => {
      const maxScroll = (cardWidth + gap) * (programs.length - 1);
      return Math.abs(prev) >= maxScroll ? 0 : prev - (cardWidth + gap);
    });
  };

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: 'url(  instituteBuilding)',
            backgroundAttachment: 'fixed',
            filter: 'blur(4px)'
          }}
        >
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 text-center backdrop-blur-[2px]">
        {/* Title Section */}
        <div className="mb-14">
          <h4 className="uppercase text-sm tracking-widest font-semibold mb-2 text-white/80">
            A UNIQUE FEATURES OF OUR PROGRAMS
          </h4>
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-20 h-[2px] bg-white"></span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              WHAT DO YOU WANT TO STUDY?
            </h2>
            <span className="w-20 h-[2px] bg-white"></span>
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative flex items-center justify-center overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-8 bg-white/20 hover:bg-white/40 p-2 rounded-full transition duration-300 z-10 backdrop-blur-sm"
          >
            <ChevronLeft size={28} className="text-white" />
          </button>

          {/* Sliding Track */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                gap: `${gap}px`,
                transform: `translateX(${translateX}px)`,
                width: `${duplicatedPrograms.length * (cardWidth + gap)}px`,
              }}
            >
              {duplicatedPrograms.map((program, index) => (
                <div
                  key={`${program.id}-${index}`}
                  className="flex-shrink-0" style={{ width: `${cardWidth}px` }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 border border-white/20 w-full" style={{ minWidth: `${cardWidth}px` }}>
                    <div className="overflow-hidden relative group h-60">
                      <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 bg-white/95 backdrop-blur-sm text-center">
                      <h3 className="text-xl font-bold text-gray-800">{program.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-8 bg-white/20 hover:bg-white/40 p-2 rounded-full transition duration-300 z-10 backdrop-blur-sm"
          >
            <ChevronRight size={28} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
