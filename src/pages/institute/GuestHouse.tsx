import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home.png";

const roomTypes = [
  {
    type: "Deluxe Room",
    description: "Spacious room with modern amenities and city view",
    capacity: "2 Persons",
    amenities: ["AC", "TV", "WiFi", "Attached Bathroom", "24/7 Room Service"],
    rate: "₹2,500 per night"
  },
  {
    type: "Executive Suite",
    description: "Luxurious suite with separate living area and work desk",
    capacity: "2 Persons",
    amenities: ["AC", "TV", "WiFi", "Mini Fridge", "Tea/Coffee Maker", "24/7 Room Service"],
    rate: "₹3,500 per night"
  },
  {
    type: "Family Room",
    description: "Comfortable accommodation for families or small groups",
    capacity: "4 Persons",
    amenities: ["AC", "TV", "WiFi", "Attached Bathroom", "Sofa Bed", "24/7 Room Service"],
    rate: "₹4,500 per night"
  }
];

const facilities = [
  "24/7 Reception",
  "Laundry Service",
  "Complimentary Breakfast",
  "Conference Room Access (on request)",
  "Car Parking",
  "Doctor on Call",
  "Travel Desk"
];

export default function GuestHousePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <InstituteHero
        title="IIMM Guest House"
        subtitle="Comfortable Stay for Members and Guests"
        image={heroImage}
      />
      
      <div className="max-w-5xl mx-auto mt-12">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">Welcome to IIMM Guest House</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              The IIMM Guest House offers comfortable and affordable accommodation for members, 
              students, and guests visiting for institute-related activities. Our well-appointed 
              rooms and warm hospitality ensure a pleasant stay in the heart of the city.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Accommodation</h3>
            <p className="text-gray-700 mb-6">
              We offer a range of accommodation options to suit different needs and preferences. 
              All our rooms are designed for comfort and equipped with modern amenities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {roomTypes.map((room, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-primary text-white p-4">
                    <h4 className="text-lg font-semibold">{room.type}</h4>
                    <p className="text-sm opacity-90">{room.capacity}</p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">{room.description}</p>
                    <p className="font-semibold text-primary mb-3">{room.rate}</p>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium mb-1">Amenities:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {room.amenities.map((amenity, idx) => (
                          <li key={idx}>{amenity}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Facilities & Services</h3>
                <ul className="space-y-2 text-gray-700">
                  {facilities.map((facility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">IIMM Guest House</p>
                  <p>Adjacent to IIMM House,</p>
                  <p>Plot No. 102, Sector 15,</p>
                  <p>CBD Belapur, Navi Mumbai - 400 614</p>
                  <p>Maharashtra, India</p>
                  <p className="mt-2">
                    <span className="font-medium">Phone:</span> +91-22-2756 5743
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> guesthouse@iimm.org
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Booking Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Check-in/Check-out Times</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Check-in: 12:00 PM</li>
                    <li>• Check-out: 10:00 AM</li>
                    <li>• Early check-in/Late check-out subject to availability</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Booking Policy</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Priority given to IIMM members and students</li>
                    <li>• Valid ID proof required at check-in</li>
                    <li>• Advance booking recommended</li>
                    <li>• Special rates for long-term stays</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href="/contact" 
                  className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Book Now
                </a>
                <span className="ml-4 text-sm text-gray-600">
                  or call us at +91-22-2756 5743
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
