import { MapPin, Phone, Mail, Clock, Users, Building2 } from "lucide-react";

interface BranchDetailsProps {
  name: string;
  address: string[];
  phone: string[];
  email: string;
  workingHours: string;
  contactPerson: string;
  description: string[];
  services: string[];
}

export default function BranchDetails({
  name,
  address,
  phone,
  email,
  workingHours,
  contactPerson,
  description,
  services,
}: BranchDetailsProps) {
  return (
    <div className="space-y-8">
      <div className="bg-card rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          {name} Branch
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground flex-shrink-0" />
            <div>
              <h3 className="font-medium">Address</h3>
              {address.map((line, index) => (
                <p key={index} className="text-sm text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                {phone.map((number, index) => (
                  <a
                    key={index}
                    href={`tel:${number.replace(/\D/g, '')}`}
                    className="text-sm text-muted-foreground hover:text-primary hover:underline"
                  >
                    {number}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <div>
              <h3 className="font-medium">Email</h3>
              <a
                href={`mailto:${email}`}
                className="text-sm text-muted-foreground hover:text-primary hover:underline"
              >
                {email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <div>
              <h3 className="font-medium">Working Hours</h3>
              <p className="text-sm text-muted-foreground">{workingHours}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Users className="h-5 w-5 mt-0.5 text-muted-foreground flex-shrink-0" />
            <div>
              <h3 className="font-medium">Contact Person</h3>
              <p className="text-sm text-muted-foreground">{contactPerson}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-3">About {name} Branch</h3>
        <div className="space-y-3 text-muted-foreground">
          {description.map((paragraph, index) => (
            <p key={index} className="text-sm">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-3">Our Services</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span className="text-sm text-muted-foreground">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
