import { Branch } from '@/types/branch';

export const branches: Branch[] = [
  {
    id: 1,
    slug: 'delhi',
    name: 'IIMM Delhi',
    address: 'C-9/7, Ramesh Nagar',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110015',
    phone: '+91-11-25442425',
    email: 'delhi@iimm.org',
    website: 'iimmdelhi.org',
    contactPerson: 'Mr. Rajesh Kumar',
    designation: 'Branch Secretary',
    about: 'IIMM Delhi is one of the most active branches, established in 1975. We organize regular workshops, seminars, and certification programs for materials management professionals.',
    services: [
      'Professional Certification',
      'Training Programs',
      'Workshops',
      'Industry Networking',
      'Placement Assistance'
    ],
    workingHours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    establishedYear: 1975,
    headOffice: true,
    imageUrl: '/images/branches/delhi.jpg',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.112647017584!2d77.2079!3d28.6289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20International%20Management%20Institute!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
    socialMedia: {
      facebook: 'iimmdelhi',
      twitter: 'iimm_delhi',
      linkedin: 'company/iimm-delhi'
    }
  },
  {
    id: 2,
    slug: 'mumbai',
    name: 'IIMM Mumbai',
    address: 'A-203, Kailash Industrial Complex',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400072',
    phone: '+91-22-25774240',
    email: 'mumbai@iimm.org',
    website: 'iimmmumbai.org',
    contactPerson: 'Ms. Priya Sharma',
    designation: 'Branch Secretary',
    about: 'IIMM Mumbai, established in 1980, is a premier institute for materials management professionals in Western India, offering various certification and training programs.',
    services: [
      'Certification Courses',
      'Executive Education',
      'Research & Development',
      'Consultancy Services',
      'Industry Interface'
    ],
    workingHours: 'Mon-Sat: 9:30 AM - 6:30 PM',
    establishedYear: 1980,
    imageUrl: '/images/branches/mumbai.jpg',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%20Branch!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
    socialMedia: {
      facebook: 'iimmmumbai',
      twitter: 'iimm_mumbai',
      linkedin: 'company/iimm-mumbai'
    }
  },
  {
    id: 3,
    slug: 'chennai',
    name: 'IIMM Chennai',
    address: 'No. 24, 1st Main Road',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600034',
    phone: '+91-44-24952536',
    email: 'chennai@iimm.org',
    website: 'iimmchennai.org',
    contactPerson: 'Mr. Suresh Iyer',
    designation: 'Branch Secretary',
    about: 'IIMM Chennai is a leading branch in South India, providing quality education and training in materials and supply chain management since 1978.',
    services: [
      'Diploma Programs',
      'Workshops',
      'Seminars',
      'Research Publications',
      'Career Counseling'
    ],
    workingHours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    establishedYear: 1978,
    imageUrl: '/images/branches/chennai.jpg',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d80.2315!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x3b3b3b3b3b3b3b3b!2sChennai%20Branch!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
    socialMedia: {
      facebook: 'iimmchennai',
      twitter: 'iimm_chennai',
      linkedin: 'company/iimm-chennai'
    }
  },
  {
    id: 4,
    slug: 'kolkata',
    name: 'IIMM Kolkata',
    address: 'P-43, Princep Street',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700072',
    phone: '+91-33-22274567',
    email: 'kolkata@iimm.org',
    website: 'iimmkolkata.org',
    contactPerson: 'Mr. Amit Banerjee',
    designation: 'Branch Secretary',
    about: 'IIMM Kolkata has been serving the eastern region of India since 1982, providing quality education and professional development in materials management.',
    services: [
      'Certificate Courses',
      'Management Development Programs',
      'Corporate Training',
      'Research Initiatives',
      'Alumni Network'
    ],
    workingHours: 'Mon-Sat: 9:30 AM - 6:00 PM',
    establishedYear: 1982,
    imageUrl: '/images/branches/kolkata.jpg',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0!2d88.3639!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771346ae015d%3A0xb540e4bce47463ff!2sKolkata%20Branch!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
    socialMedia: {
      facebook: 'iimmkolkata',
      twitter: 'iimm_kolkata',
      linkedin: 'company/iimm-kolkata'
    }
  },
  {
    id: 5,
    slug: 'bengaluru',
    name: 'IIMM Bengaluru',
    address: 'No. 48, 1st Cross',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560001',
    phone: '+91-80-22266889',
    email: 'bengaluru@iimm.org',
    website: 'iimmbengaluru.org',
    contactPerson: 'Ms. Ananya Reddy',
    designation: 'Branch Secretary',
    about: 'IIMM Bengaluru, established in 1985, is a premier institute for materials and supply chain management education in the IT capital of India.',
    services: [
      'Professional Certifications',
      'Corporate Training',
      'Industry Conclaves',
      'Research & Development',
      'Placement Support'
    ],
    workingHours: 'Mon-Sat: 9:00 AM - 6:30 PM',
    establishedYear: 1985,
    imageUrl: '/images/branches/bengaluru.jpg',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%20Branch!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
    socialMedia: {
      facebook: 'iimmbengaluru',
      twitter: 'iimm_bengaluru',
      linkedin: 'company/iimm-bengaluru'
    }
  },
  {
    id: 6,
    slug: 'hyderabad',
    name: 'IIMM Hyderabad',
    address: 'H.No. 1-8-333/1',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500001',
    phone: '+91-40-23456789',
    email: 'hyderabad@iimm.org',
    website: 'iimmhyderabad.org',
    contactPerson: 'Mr. Ramesh Gupta',
    designation: 'Branch Secretary',
    about: 'IIMM Hyderabad, established in 1983, is committed to excellence in materials management education and professional development in the Telangana region.',
    services: [
      'Diploma Programs',
      'Workshops & Seminars',
      'Industry Collaboration',
      'Research Publications',
      'Career Development'
    ],
    workingHours: 'Mon-Sat: 9:30 AM - 6:00 PM',
    establishedYear: 1983,
    imageUrl: '/images/branches/hyderabad.jpg',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93c783d4ae2aa6!2sHyderabad%20Branch!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
    socialMedia: {
      facebook: 'iimmhyderabad',
      twitter: 'iimm_hyderabad',
      linkedin: 'company/iimm-hyderabad'
    }
  }
]; 