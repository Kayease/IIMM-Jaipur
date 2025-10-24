import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
        setOpenSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => window.location.pathname === path;

  const menuItems = [
    {
      title: "Alumni",
      items: [
        { name: "Alumni Home", path: "/alumni" },
        { name: "Success Stories", path: "/alumni/success-stories" },
        { name: "Events", path: "/alumni/events" },
        { name: "Mentorship Program", path: "/alumni/mentorship" },
        { name: "Alumni Network", path: "/alumni/network" },
      ],
    },
    {
      title: "The Institute",
      items: [
        { name: "About IIMM", path: "/institute/about" },
        { name: "Our Mission", path: "/institute/mission" },
        { name: "Evolution of IIMM", path: "/institute/evolution" },
        { name: "IIMM Values", path: "/institute/values" },
        { name: "Administration", path: "/institute/administration" },
        { name: "Board of Studies", path: "/institute/board-of-studies" },
        { name: "Network of IIMM", path: "/institute/network" },
        { name: "IIMM House", path: "/institute/iimm-house" },
        { name: "IIMM Guest House", path: "/institute/guest-house" },
        { name: "Chairmen Message", path: "/institute/chairman-message" },
        { name: "Former Chairmen", path: "/institute/former-chairmen" },
        { name: "Former Presidents", path: "/institute/former-presidents" },
      ],
    },
    {
      title: "Education",
      items: [
        { name: "Academic Courses", path: "/education/courses" },
        { name: "Prospectus", path: "/education/prospectus" },
        { name: "Fees Details", path: "/education/fees" },
        { name: "Application Forms", path: "/education/forms" },
        { name: "Faculty", path: "/education/faculty" },
        { name: "Exam Schedule", path: "/education/exam-schedule" },
        { name: "Results", path: "/education/results" },
        { name: "Mandatory Disclosures", path: "/education/mandatory-disclosures" },
        { 
          name: "Student Zone", 
          path: "/education/student-zone",
          subItems: [
            { 
              name: "Student Login", 
              path: "/education/student-zone/portal",
              className: "bg-blue-50 text-blue-700 font-medium hover:bg-blue-100"
            },
            { name: "Academic Calendar", path: "/education/student-zone/academic-calendar" },
            { name: "Course Materials", path: "/education/student-zone/course-materials" },
            { name: "Exam Schedule", path: "/education/student-zone/exam-schedule" },
            { name: "Assignments", path: "/education/student-zone/assignments" },
            { name: "Books & Resources", path: "/education/student-zone/books" },
            { name: "Exam Timetable", path: "/education/student-zone/exam-timetable" },
            { name: "Certification Forms", path: "/education/student-zone/certification" },
            { name: "Previous Papers", path: "/education/student-zone/question-papers" },
            { 
              name: "Contact Student Support", 
              path: "/education/student-zone/contact",
              className: "bg-gray-50 text-gray-700 mt-2 pt-2 border-t border-gray-200"
            }
          ]
        }
      ],
    },
    {
      title: "Membership",
      items: [
        { name: "Why Join IIMM", path: "/membership/why-join" },
        { name: "Types of Membership", path: "/membership/types" },
        { 
          name: "Application Forms",
          path: "/membership/forms",
          subItems: [
            { name: "Ordinary/Life Membership", path: "/membership/forms/ordinary" },
            { name: "Institutional Membership", path: "/membership/forms/institutional" },
          ]
        },
        { 
          name: "IIMM Branches",
          path: "/membership/branches",
          subItems: [
            { name: "North", path: "/membership/branches/north" },
            { name: "East", path: "/membership/branches/east" },
            { name: "West", path: "/membership/branches/west" },
            { name: "South", path: "/membership/branches/south" },
            { name: "Central", path: "/membership/branches/central" },
          ]
        },
      ],
    }
  ];

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="bg-blue-900 text-white py-2 w-full">
        <div className="max-w-[1800px] mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="mb-2 sm:mb-0">
              <span className="font-medium text-sm sm:text-base">Established 19th September 1971</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <a href="tel:011-41354969" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors text-sm sm:text-base">
                <Phone size={16} />
                <span>011-41354969</span>
              </a>
              <a href="mailto:admin@iimmdelhi.org" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors text-sm sm:text-base">
                <Mail size={16} />
                <span>admin@iimmdelhi.org</span>
              </a>
              <a href="mailto:edu@iimmdelhi.org" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors text-sm sm:text-base">
                <Mail size={16} />
                <span>edu@iimmdelhi.org</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-4">
          {/* Logo and Title Section */}
          <div className="flex flex-col items-center py-3 sm:py-4 border-b border-gray-200">
            <div className="flex flex-col items-center">
              <div className="h-15 w-14 sm:h-16 sm:w-16 bg-blue-100 rounded-full flex items-center justify-center mb-1 sm:mb-2">
                <span className="text-xl sm:text-2xl font-bold text-blue-900">IIMM</span>
              </div>
              <div className="text-center">
                <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-blue-900">
                  भारतीय सामग्री प्रबंधन संस्थान जयपुर
                </h1>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                  Indian Institute of Materials Management Jaipur
                </h2>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-0.5 sm:mt-1">
                  (A Recognized Professional Body -ISTE (MHRD) Govt. of India)
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center py-2">
            <div className="flex items-center gap-0.5">
              {/* Home Link */}
              <a
                href="/"
                className={`px-4 py-2.5 text-sm sm:text-base font-medium transition-colors hover:text-blue-900 hover:bg-blue-50/50 rounded-md ${
                  isActive("/") ? "text-blue-900 bg-blue-50/30 font-semibold" : "text-gray-700"
                }`}
              >
                Home
              </a>

              {/* Dropdown Menu Items */}
              {menuItems.map((menu, menuIndex) => (
                <div
                  key={menu.title}
                  className="dropdown-container relative" // CRITICAL: relative positioning creates context for absolute children
                  onMouseEnter={() => setOpenDropdown(menuIndex)}
                  onMouseLeave={() => {
                    setOpenDropdown(null);
                    setOpenSubmenu(null);
                  }}
                >
                  {/* Dropdown Trigger */}
                  <button
                    className={`px-4 py-2.5 text-sm sm:text-base font-medium transition-colors hover:text-blue-900 hover:bg-blue-50/50 rounded-md flex items-center gap-1 ${
                      openDropdown === menuIndex ? "text-blue-900 bg-blue-50/30" : "text-gray-700"
                    }`}
                  >
                    {menu.title}
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-200 ${
                        openDropdown === menuIndex ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* First Level Dropdown - positioned absolutely relative to parent */}
                  {openDropdown === menuIndex && (
                    <div 
                      className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50"
                      // top-full: positions dropdown directly below the trigger button
                      // left-0: aligns left edge with parent's left edge
                      // absolute: positions relative to nearest relative parent (dropdown-container)
                      // z-50: ensures dropdown appears above other content
                    >
                      {menu.items.map((item, itemIndex) => (
                        <div key={item.name} className="relative">
                          {item.subItems ? (
                            // Item with submenu
                            <div
                              className="relative" // Creates positioning context for nested submenu
                              onMouseEnter={() => setOpenSubmenu(`${menuIndex}-${itemIndex}`)}
                              onMouseLeave={() => setOpenSubmenu(null)}
                            >
                              <div className="flex items-center justify-between px-4 py-2 text-sm sm:text-[15px] text-gray-700 hover:bg-blue-50 cursor-pointer">
                                <span>{item.name}</span>
                                <ChevronDown 
                                  size={14} 
                                  className="-rotate-90" // Rotates to point right, indicating submenu
                                />
                              </div>

                              {/* Second Level Submenu - positioned to the right of parent item */}
                              {openSubmenu === `${menuIndex}-${itemIndex}` && (
                                <div 
                                  className="absolute left-full top-0 ml-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50"
                                  // left-full: positions submenu to the right of parent item
                                  // top-0: aligns top edge with parent item's top
                                  // ml-1: adds small margin for visual separation
                                >
                                  {item.subItems.map((subItem) => (
                                    <a
                                      key={subItem.name}
                                      href={subItem.path}
                                      className={`block px-4 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-blue-50 ${
                                        subItem.className || ''
                                      } ${
                                        isActive(subItem.path) ? "bg-blue-50/50 font-medium" : ""
                                      }`}
                                    >
                                      {subItem.name}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            // Regular item without submenu
                            <a
                              href={item.path}
                              className={`block px-4 py-2 text-sm sm:text-[15px] text-gray-700 hover:bg-blue-50 transition-colors rounded-sm ${
                                isActive(item.path) ? "bg-blue-50/50 font-medium" : ""
                              }`}
                            >
                              {item.name}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Additional Menu Items */}
              <a
                href="/programmes"
                className={`px-3 py-2.5 text-sm font-medium transition-colors hover:text-blue-900 hover:bg-blue-50/50 rounded-md ${
                  isActive("/programmes") ? "text-blue-900 bg-blue-50/30" : "text-gray-700"
                }`}
              >
                Programmes/Meetings
              </a>

              <a
                href="/notice"
                className={`px-3 py-2.5 text-sm font-medium transition-colors hover:text-blue-900 hover:bg-blue-50/50 rounded-md ${
                  isActive("/notice") ? "text-blue-900 bg-blue-50/30" : "text-gray-700"
                }`}
              >
                Notice
              </a>

              {/* Events Dropdown */}
              <div
                className="dropdown-container relative"
                onMouseEnter={() => setOpenDropdown('events')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`px-3 py-2.5 text-sm font-medium transition-colors hover:text-blue-900 hover:bg-blue-50/50 rounded-md flex items-center gap-1 ${
                    openDropdown === 'events' ? "text-blue-900 bg-blue-50/30" : "text-gray-700"
                  }`}
                >
                  Events
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${
                      openDropdown === 'events' ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === 'events' && (
                  <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
                    <a
                      href="/events"
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors ${
                        isActive("/events") ? "bg-blue-50/50 font-medium" : ""
                      }`}
                    >
                      All Events
                    </a>
                    <a
                      href="/events/upcoming"
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors ${
                        isActive("/events/upcoming") ? "bg-blue-50/50 font-medium" : ""
                      }`}
                    >
                      Upcoming Events
                    </a>
                    <a
                      href="/events/recent"
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors ${
                        isActive("/events/recent") ? "bg-blue-50/50 font-medium" : ""
                      }`}
                    >
                      Recent Events
                    </a>
                    <a
                      href="/events/past"
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors ${
                        isActive("/events/past") ? "bg-blue-50/50 font-medium" : ""
                      }`}
                    >
                      Past Events
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/gallery"
                className={`px-3 py-2.5 text-sm font-medium transition-colors hover:text-blue-900 hover:bg-blue-50/50 rounded-md ${
                  isActive("/gallery") ? "text-blue-900 bg-blue-50/30" : "text-gray-700"
                }`}
              >
                Gallery
              </a>

              <a
                href="/contact"
                className={`px-3 py-2.5 text-sm font-medium transition-colors hover:text-blue-900 hover:bg-blue-50/50 rounded-md ${
                  isActive("/contact") ? "text-blue-900 bg-blue-50/30" : "text-gray-700"
                }`}
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden absolute top-6 right-4 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 bg-white border-t border-gray-200">
            <div className="px-4">
              <div className="flex flex-col space-y-2">
                <a
                  href="/"
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    isActive("/") ? "bg-blue-900 text-white" : "text-gray-700"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>

                {menuItems.map((menu) => (
                  <div key={menu.title} className="space-y-1">
                    <div className="px-4 py-2 text-sm font-semibold text-blue-900">
                      {menu.title}
                    </div>
                    {menu.items.map((item) => (
                      <div key={item.name}>
                        <a
                          href={item.path}
                          className={`px-6 py-2 text-sm block rounded-md ${
                            isActive(item.path) ? "bg-blue-900 text-white" : "text-gray-700"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                        {item.subItems && (
                          <div className="ml-4">
                            {item.subItems.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.path}
                                className={`px-6 py-2 text-xs block rounded-md ${
                                  isActive(subItem.path) ? "bg-blue-900 text-white" : "text-gray-600"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}

                <a
                  href="/programmes"
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    isActive("/programmes") ? "bg-blue-900 text-white" : "text-gray-700"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Programmes/Meetings
                </a>

                <a
                  href="/notice"
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    isActive("/notice") ? "bg-blue-900 text-white" : "text-gray-700"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Notice
                </a>

                <a
                  href="/alumni"
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    isActive("/alumni") ? "bg-blue-900 text-white" : "text-gray-700"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Alumni
                </a>

                <a
                  href="/training"
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    isActive("/training") ? "bg-blue-900 text-white" : "text-gray-700"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Training
                </a>

                <a
                  href="/gallery"
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    isActive("/gallery") ? "bg-blue-900 text-white" : "text-gray-700"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </a>

                <a
                  href="/contact"
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    isActive("/contact") ? "bg-blue-900 text-white" : "text-gray-700"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Demo Content */}

    </>
  );
};

export default Navbar;