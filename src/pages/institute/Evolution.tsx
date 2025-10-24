import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home.png";

export default function EvolutionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <InstituteHero
        title="Evolution of IIMM"
        subtitle="A Journey of Excellence in Materials Management"
        image={heroImage}
      />
      
      <div className="max-w-5xl mx-auto mt-12">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">Our Journey</h2>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              The Indian Institute of Materials Management (IIMM) was established with a vision to 
              professionalize and promote the field of materials management in India. Over the years, 
              IIMM has grown to become the apex body for materials management professionals in the country.
            </p>
            
            <div className="border-l-4 border-primary pl-6 mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Our Foundation</h3>
              <p className="text-gray-700">
                IIMM was established on 19th September 1971, marking the beginning of a new era in 
                professional materials management education and practice in India. The institute was 
                founded with the mission to "Promote Professional Excellence in Materials Management 
                towards National Prosperity through Sustainable Development."
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Key Milestones</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1971</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Establishment</h4>
                  <p className="text-gray-700">
                    Foundation of IIMM with the inauguration of the Delhi Branch on 19th September 1971
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1980s</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Expansion</h4>
                  <p className="text-gray-700">
                    Establishment of 56 branches and 16 chapters across India, creating a pan-India presence
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2000s</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Global Recognition</h4>
                  <p className="text-gray-700">
                    Accreditation by the International Federation of Purchasing and Supply Management (IFPSM), 
                    making IIMM's Graduate Diploma in Materials Management (GDMM) globally recognized
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2010s</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Academic Excellence</h4>
                  <p className="text-gray-700">
                    Introduction of specialized programs including Post Graduate Diploma in Logistics & 
                    Supply Chain Management (PGDL&SCM) and establishment of a Research Centre in 
                    association with IISWBM, Kolkata
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2020s</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Digital Transformation</h4>
                  <p className="text-gray-700">
                    Implementation of digital learning platforms, virtual training programs, and 
                    expansion of online certification courses to reach a global audience
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">Our Impact</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-gray-700">Years of Excellence</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">72+</div>
                  <p className="text-gray-700">Branches & Chapters</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1L+</div>
                  <p className="text-gray-700">Professionals Trained</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Our Vision for the Future</h3>
              <p className="text-gray-700 mb-6">
                As we move forward, IIMM remains committed to its mission of promoting excellence in 
                materials management. We continue to evolve our programs, expand our global footprint, 
                and adapt to the changing needs of the industry and our members.
              </p>
              <p className="text-gray-700">
                Our focus remains on fostering innovation, embracing technology, and developing 
                future-ready professionals who can lead the way in sustainable materials management 
                practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
