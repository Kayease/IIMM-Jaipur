import { MapPin, Phone, Mail, Clock, Users, Building2 } from "lucide-react";

interface BranchDetailsProps {
  name: string;
  region?: "North" | "South" | "East" | "West" | "Central";
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
  region = "Central", // Default if not passed
  address,
  phone,
  email,
  workingHours,
  contactPerson,
  description,
  services,
}: BranchDetailsProps) {
  // Define region-specific color themes
  const regionColors: Record<
    NonNullable<BranchDetailsProps["region"]>,
    { bg: string; accent: string; light: string }
  > = {
    North: {
      bg: "from-blue-50 via-blue-100 to-blue-200",
      accent: "text-blue-700",
      light: "text-blue-500",
    },
    South: {
      bg: "from-green-50 via-emerald-100 to-green-200",
      accent: "text-emerald-700",
      light: "text-emerald-500",
    },
    East: {
      bg: "from-yellow-50 via-amber-100 to-yellow-200",
      accent: "text-amber-700",
      light: "text-amber-500",
    },
    West: {
      bg: "from-orange-50 via-orange-100 to-orange-200",
      accent: "text-orange-700",
      light: "text-orange-500",
    },
    Central: {
      bg: "from-purple-50 via-violet-100 to-purple-200",
      accent: "text-violet-700",
      light: "text-violet-500",
    },
  };

  // Ensure region key matches (case-insensitive)
  const regionKey =
    (Object.keys(regionColors).find(
      (key) => key.toLowerCase() === region.toLowerCase()
    ) as keyof typeof regionColors) || "Central";

  const colors = regionColors[regionKey];

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${colors.bg} py-12 px-6 transition-all duration-500`}
    >
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className={`text-4xl font-bold ${colors.accent} mb-3`}>
            {name} Branch
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Region:{" "}
            <span className={`font-semibold ${colors.light}`}>
              {regionKey}
            </span>
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-white/90 backdrop-blur-sm border border-white/60 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
          <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${colors.accent}`}>
            <Building2 className={`h-6 w-6 ${colors.light}`} />
            Branch Information
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className={`h-5 w-5 mt-0.5 ${colors.light}`} />
              <div>
                <h3 className={`font-medium ${colors.accent}`}>Address</h3>
                {address.map((line, i) => (
                  <p key={i} className="text-sm text-gray-600">{line}</p>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className={`h-5 w-5 mt-0.5 ${colors.light}`} />
              <div>
                <h3 className={`font-medium ${colors.accent}`}>Phone</h3>
                {phone.map((num, i) => (
                  <a
                    key={i}
                    href={`tel:${num.replace(/\D/g, "")}`}
                    className="text-sm text-gray-600 hover:underline block"
                  >
                    {num}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className={`h-5 w-5 mt-0.5 ${colors.light}`} />
              <div>
                <h3 className={`font-medium ${colors.accent}`}>Email</h3>
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-gray-600 hover:underline"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className={`h-5 w-5 mt-0.5 ${colors.light}`} />
              <div>
                <h3 className={`font-medium ${colors.accent}`}>Working Hours</h3>
                <p className="text-sm text-gray-600">{workingHours}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className={`h-5 w-5 mt-0.5 ${colors.light}`} />
              <div>
                <h3 className={`font-medium ${colors.accent}`}>Contact Person</h3>
                <p className="text-sm text-gray-600">{contactPerson}</p>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-white/90 backdrop-blur-sm border border-white/60 rounded-2xl shadow-lg p-8">
          <h3 className={`text-2xl font-semibold mb-4 ${colors.accent}`}>
            About {name} Branch
          </h3>
          {description.map((p, i) => (
            <p key={i} className="text-sm text-gray-600 leading-relaxed mb-2">
              {p}
            </p>
          ))}
        </div>

        {/* Services */}
        <div className="bg-white/90 backdrop-blur-sm border border-white/60 rounded-2xl shadow-lg p-8">
          <h3 className={`text-2xl font-semibold mb-4 ${colors.accent}`}>
            Our Services
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((s, i) => (
              <li
                key={i}
                className={`flex items-start gap-2 text-gray-700 text-sm bg-white/80 border-l-4 rounded-lg px-3 py-2 ${colors.light}`}
              >
                <span>•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
