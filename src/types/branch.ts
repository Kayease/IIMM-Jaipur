export interface Branch {
  id: number;
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  website: string;
  contactPerson: string;
  designation: string;
  about?: string;
  services?: string[];
  workingHours?: string;
  establishedYear: number;
  headOffice?: boolean;
  imageUrl?: string;
  mapEmbedUrl?: string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}
