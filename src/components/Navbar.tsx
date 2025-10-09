import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import iimmLogo from "@/assets/iimm-logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setOpenSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

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
        { name: "Code of Ethics", path: "/institute/ethics" },
        { name: "Chairmen Message", path: "/institute/chairman-message" },
        { name: "Jaipur EC 2023-2025", path: "/institute/ec-2023-2025" },
        { name: "Jaipur EC 2025-2027", path: "/institute/ec-2025-2027" },
        { name: "Former Chairmen", path: "/institute/former-chairmen" },
        { name: "Former Presidents", path: "/institute/former-presidents" },
      ],
    },
    {
      title: "Education",
      items: [
        { name: "Academic Course", path: "/education/courses" },
        { name: "Prospectus", path: "/education/prospectus" },
        { name: "Fees Details", path: "/education/fees" },
        { name: "Application Forms", path: "/education/forms" },
        { name: "Faculty", path: "/education/faculty" },
        { 
          name: "Student Zone", 
          path: "/education/student-zone",
          subItems: [
            { name: "Assignments", path: "/education/student-zone/assignments" },
            { name: "Books", path: "/education/student-zone/books" },
            { name: "Exam Time Table", path: "/education/student-zone/exam-timetable" },
            { name: "Certification Forms", path: "/education/student-zone/certification" },
            { name: "Previous Question Paper", path: "/education/student-zone/question-papers" },
          ]
        },
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
            { name: "Ordinary/Life Membership", path: "/membership/forms/ordinary-life" },
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
    },
    {
      title: "Online Payment Mode",
      items: [
        { 
          name: "Jaipur Branch",
          path: "/payment/jaipur",
          subItems: [
            { name: "Bank of Baroda", path: "/payment/jaipur/bob" },
          ]
        },
        { 
          name: "NHQ Membership",
          path: "/payment/nhq-membership",
          subItems: [
            { name: "Bank of India", path: "/payment/nhq-membership/boi" },
          ]
        },
        { 
          name: "NHQ Education Wing",
          path: "/payment/nhq-education",
          subItems: [
            { name: "ICICI", path: "/payment/nhq-education/icici" },
          ]
        },
        { name: "GST Nos", path: "/payment/gst" },
      ],
    },
  ];

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="bg-primary text-primary-foreground py-2 w-full">
        <div className="max-w-[1800px] mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="mb-2 sm:mb-0">
              <span className="font-medium text-sm sm:text-base">Established 19th September 1971</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <a href="tel:011-41354969" className="flex items-center gap-1.5 hover:text-accent transition-colors text-sm sm:text-base">
                <Phone size={16} />
                <span>011-41354969</span>
              </a>
              <a href="mailto:admin@iimmdelhi.org" className="flex items-center gap-1.5 hover:text-accent transition-colors text-sm sm:text-base">
                <Mail size={16} />
                <span>admin@iimmdelhi.org</span>
              </a>
              <a href="mailto:edu@iimmdelhi.org" className="flex items-center gap-1.5 hover:text-accent transition-colors text-sm sm:text-base">
                <Mail size={16} />
                <span>edu@iimmdelhi.org</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm">
        <div className="max-w-[1800px] mx-auto px-4">
          {/* Logo and Title Section */}
          <div className="flex flex-col items-center py-3 sm:py-4 border-b border-border">
            <Link to="/" className="flex flex-col items-center">
              <img src={iimmLogo} alt="IIMM Logo" className="h-15 w-14 sm:h-16 sm:w-16 mb-1 sm:mb-2" />
              <div className="text-center">
                <h1 className="text-lg sm:text-xl md:text-3xl font-heading font-bold text-primary">
                  भारतीय सामग्री प्रबंधन संस्थान जयपुर
                </h1>
                <h2 className="text-base sm:text-lg md:text-xl font-heading font-semibold text-foreground">
                  Indian Institute of Materials Management Jaipur
                </h2>
                <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                  (A Recognized Professional Body -ISTE (MHRD) Govt. of India)
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center py-2">
            <NavigationMenu>
              <NavigationMenuList className="flex-wrap justify-center gap-0.5">
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={`px-4 py-2.5 text-sm sm:text-base font-medium transition-colors hover:text-primary hover:bg-muted/50 rounded-md ${
                        isActive("/") ? "text-primary bg-muted/30 font-semibold" : "text-foreground"
                      }`}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {menuItems.map((menu) => (
                  <NavigationMenuItem key={menu.title}>
                    <NavigationMenuTrigger className="text-sm sm:text-base font-medium px-4 py-2.5">
                      {menu.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[240px] gap-1.5 p-3 bg-popover">
                        {menu.items.map((item) => (
                          <li key={item.name}>
                            {item.subItems ? (
                              <div 
                                className="relative group" 
                                ref={submenuRef}
                                onMouseEnter={() => setOpenSubmenu(item.name)}
                                onMouseLeave={() => setOpenSubmenu(null)}
                              >
                                <div 
                                  className="flex items-center justify-between cursor-pointer"
                                  onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                                >
                                  <Link 
                                    to={item.path}
                                    className="flex-1"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <NavigationMenuLink
                                      className={`flex items-center justify-between rounded-md p-2.5 text-sm sm:text-[15px] leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground ${
                                        isActive(item.path) ? "bg-accent/50 font-medium" : ""
                                      }`}
                                    >
                                      <span>{item.name}</span>
                                    </NavigationMenuLink>
                                  </Link>
                                  <button 
                                    className="p-2 -mr-2 focus:outline-none"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setOpenSubmenu(openSubmenu === item.name ? null : item.name);
                                    }}
                                  >
                                    <ChevronDown 
                                      size={14} 
                                      className={`transition-transform ${openSubmenu === item.name ? 'rotate-0' : '-rotate-90'}`} 
                                    />
                                  </button>
                                </div>
                                <div 
                                  className={`absolute left-full top-0 ml-1 z-50 transition-all duration-200 ${openSubmenu === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                                  style={{
                                    pointerEvents: openSubmenu === item.name ? 'auto' : 'none',
                                    minWidth: '220px',
                                    transform: openSubmenu === item.name ? 'translateX(0)' : 'translateX(-10px)'
                                  }}
                                >
                                  <ul className="w-[220px] rounded-md border bg-popover p-2.5 shadow-lg">
                                    {item.subItems.map((subItem) => (
                                      <li key={subItem.name}>
                                        <Link to={subItem.path}>
                                          <NavigationMenuLink
                                            className={`block rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground ${
                                              isActive(subItem.path) ? "bg-accent/50" : ""
                                            }`}
                                          >
                                            {subItem.name}
                                          </NavigationMenuLink>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ) : (
                              <Link to={item.path}>
                                <NavigationMenuLink
                                  className={`block rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground ${
                                    isActive(item.path) ? "bg-accent/50" : ""
                                  }`}
                                >
                                  {item.name}
                                </NavigationMenuLink>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <Link to="/programmes">
                    <NavigationMenuLink
                      className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-muted rounded-md ${
                        isActive("/programmes") ? "text-primary bg-muted" : "text-foreground"
                      }`}
                    >
                      Programmes/Meetings
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/notice">
                    <NavigationMenuLink
                      className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-muted rounded-md ${
                        isActive("/notice") ? "text-primary bg-muted" : "text-foreground"
                      }`}
                    >
                      Notice
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/alumni">
                    <NavigationMenuLink
                      className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-muted rounded-md ${
                        isActive("/alumni") ? "text-primary bg-muted" : "text-foreground"
                      }`}
                    >
                      Alumni
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/training">
                    <NavigationMenuLink
                      className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-muted rounded-md ${
                        isActive("/training") ? "text-primary bg-muted" : "text-foreground"
                      }`}
                    >
                      Training
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/gallery">
                    <NavigationMenuLink
                      className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-muted rounded-md ${
                        isActive("/gallery") ? "text-primary bg-muted" : "text-foreground"
                      }`}
                    >
                      Gallery
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink
                      className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-muted rounded-md ${
                        isActive("/contact") ? "text-primary bg-muted" : "text-foreground"
                      }`}
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
          <div className="lg:hidden py-4 animate-slide-in bg-background border-t">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-2">
                <Link
                  to="/"
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    isActive("/") ? "bg-primary text-primary-foreground" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {menuItems.map((menu) => (
                  <div key={menu.title} className="space-y-1">
                    <div className="px-4 py-2 text-sm font-semibold text-primary">
                      {menu.title}
                    </div>
                    {menu.items.map((item) => (
                      <div key={item.name}>
                        <Link
                          to={item.path}
                          className={`px-6 py-2 text-sm block rounded-md ${
                            isActive(item.path) ? "bg-primary text-primary-foreground" : ""
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.subItems && (
                          <div className="ml-4">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className={`px-6 py-2 text-xs block rounded-md ${
                                  isActive(subItem.path) ? "bg-primary text-primary-foreground" : ""
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}

                <Link
                  to="/programmes"
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    isActive("/programmes") ? "bg-primary text-primary-foreground" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Programmes/Meetings
                </Link>

                <Link
                  to="/notice"
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    isActive("/notice") ? "bg-primary text-primary-foreground" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Notice
                </Link>

                <Link
                  to="/alumni"
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    isActive("/alumni") ? "bg-primary text-primary-foreground" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Alumni
                </Link>

                <Link
                  to="/training"
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    isActive("/training") ? "bg-primary text-primary-foreground" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Training
                </Link>

                <Link
                  to="/gallery"
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    isActive("/gallery") ? "bg-primary text-primary-foreground" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>

                <Link
                  to="/contact"
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    isActive("/contact") ? "bg-primary text-primary-foreground" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
