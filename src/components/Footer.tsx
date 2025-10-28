import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">IIMM Jaipur</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Premier educational institution offering quality management and marketing education
              with industry-expert mentorship and global recognition.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-accent transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-accent transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/publications" className="hover:text-accent transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-accent transition-colors">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/academics" className="hover:text-accent transition-colors">
                  Management Courses
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-accent transition-colors">
                  Marketing Courses
                </Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-accent transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link to="/training/certification" className="hover:text-accent transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/training/online" className="hover:text-accent transition-colors">
                  Online Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Education Street, Jaipur, Rajasthan 302001, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <span>+91 11 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@iimmjaipur.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} IIMM Jaipur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
