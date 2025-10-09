import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home.png";

const formerChairmen = [
  { name: "SH. O P GUPTA", period: "1979 – 1980" },
  { name: "SH. H S GREWAL", period: "1981 – 1982" },
  { name: "SH. R K CHUGH", period: "1982 – 1983" },
  { name: "SH. NAND KISHORE", period: "1983 – 1984" },
  { name: "SH. NAND KISHORE", period: "1984 – 1985" },
  { name: "SH. S NATRAJAN", period: "1985 – 1986" },
  { name: "SH. S NATRAJAN", period: "1986 – 1987" },
  { name: "SH. SC CHATURVEDI", period: "1987 – 1988" },
  { name: "SH. SALIM RIAZ", period: "1988 – 1989" },
  { name: "SH. SC CHATURVEDI", period: "1989 – 1990" },
  { name: "SH. V K JAIN", period: "1990 – 1991" },
  { name: "SH. V K JAIN", period: "1991 – 1992" },
  { name: "SH. M K BHARDWAJ", period: "1992 – 1993" },
  { name: "SH. M K BHARDWAJ", period: "1993 – 1994" },
  { name: "SH. R P VERMA", period: "1994 – 1995" },
  { name: "SH. R P VERMA", period: "1995 – 1996" },
  { name: "SH. M K BHARDWAJ", period: "1996 – 1997" },
  { name: "SH. SURESH KUMAR", period: "1997 – 1998" },
  { name: "SH. SURESH KUMAR", period: "1998 – 1999" },
  { name: "SH. SURESH KUMAR", period: "1999 – 2001" },
  { name: "SH. R P DURGA", period: "2001 – 2003" },
  { name: "SH. T G NANDAKUMAR", period: "2003 – 2005" },
  { name: "SH. R K TANDON", period: "2005 – 2007" },
  { name: "COL. GOPAL PURDHANI", period: "2007 – 2009" },
  { name: "SH. H K SHARMA", period: "2009 – 2011" },
  { name: "SH. SANJAY SHUKLA", period: "2011 – 2013" },
  { name: "SH. P N PANDEY", period: "2013 – 2015" },
  { name: "SH. M K MITTAL", period: "2015 – 2017" },
  { name: "SH. R K TANDON", period: "2017 – 2019" },
  { name: "SH. H K MITTAL", period: "2021 – 2023" }
  // Extend as needed for other names/periods
];

const FormerChairmen = () => (
  <div className="w-full min-h-screen bg-gradient-to-b from-[#f7f3f3] to-[#ede6e6]">
    <InstituteHero
      title="Former Chairmen"
      subtitle="Honoring Our Legacy of Leadership"
      image={heroImage}
    />
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {formerChairmen.map((chairman, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center"
              style={{
                background: "#ede6e6", // soft beige-pink
                borderRadius: 8,
                border: "1px solid #ded6d6",
                boxShadow: "0 2px 5px rgba(0,0,0,0.04)",
                minHeight: 120,
                padding: "18px 4px"
              }}
            >
              <span
                style={{
                  background: "#14386b", // deep blue
                  color: "#fff",
                  borderRadius: 4,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1,
                  padding: "3px 18px",
                  marginBottom: 10
                }}
              >
                CHAIRMAN
              </span>
              <span
                style={{
                  color: "#d6332d", // vibrant red
                  fontWeight: 700,
                  fontSize: 17,
                  marginBottom: 4,
                  textTransform: "uppercase",
                  letterSpacing: 1
                }}
              >
                {chairman.name}
              </span>
              <span
                style={{
                  color: "#686868",
                  fontSize: 14,
                  fontWeight: 500
                }}
              >
                {chairman.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default FormerChairmen;
