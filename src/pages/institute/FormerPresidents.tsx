import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home.png";

const formerPresidents = [
  { name: "SHRI RAJESH KHANNA", period: "2020 – 2022" },
  { name: "SHRI AMIT SHARMA", period: "2018 – 2020" },
  { name: "SMT. PRIYA PATEL", period: "2016 – 2018" },
  { name: "SHRI RAVI VERMA", period: "2014 – 2016" },
  { name: "SHRI SANJAY KAPOOR", period: "2012 – 2014" },
  { name: "SMT. MEENA IYER", period: "2010 – 2012" },
  { name: "SHRI ARUN JOSHI", period: "2008 – 2010" },
  { name: "SHRI VIKRAM MALHOTRA", period: "2006 – 2008" },
  { name: "SMT. NEETA DESAI", period: "2004 – 2006" },
  { name: "SHRI PRAKASH MEHRA", period: "2002 – 2004" },
  { name: "SHRI RAMESHWAR LAL", period: "2000 – 2002" },
  { name: "SMT. SUNITA REDDY", period: "1998 – 2000" },
  { name: "SHRI MAHESH AGARWAL", period: "1996 – 1998" },
  { name: "SHRI NARESH GUPTA", period: "1994 – 1996" },
  { name: "SMT. ANJALI KAPOOR", period: "1992 – 1994" },
  { name: "SHRI RAJIV MEHTA", period: "1990 – 1992" },
  { name: "SHRI SURESH KUMAR", period: "1988 – 1990" },
  { name: "SHRI RAJEEV CHOPRA", period: "1986 – 1988" },
  { name: "SHRI VINOD KAPOOR", period: "1984 – 1986" },
  { name: "SHRI RAJAT SHARMA", period: "1982 – 1984" },
  { name: "SHRI AMITABH SINGH", period: "1980 – 1982" },
  { name: "SHRI RAJESH KHANNA", period: "1978 – 1980" },
  { name: "SHRI AMITABH BACHCHAN", period: "1976 – 1978" },
  { name: "SHRI DILIP KUMAR", period: "1974 – 1976" },
  { name: "SHRI RAJ KAPOOR", period: "1972 – 1974" },
  { name: "SHRI DEV ANAND", period: "1970 – 1972" },
  { name: "SHRI RAJENDRA KUMAR", period: "1968 – 1970" },
  { name: "SHRI SUNIL DUTT", period: "1966 – 1968" },
  { name: "SHRI RAJ KUMAR", period: "1964 – 1966" },
  { name: "SHRI DILIP KUMAR", period: "1962 – 1964" },
  { name: "SHRI RAJ KAPOOR", period: "1960 – 1962" },
  { name: "SHRI DEV ANAND", period: "1958 – 1960" },
  { name: "SHRI RAJENDRA KUMAR", period: "1956 – 1958" },
  { name: "SHRI SUNIL DUTT", period: "1954 – 1956" },
  { name: "SHRI RAJ KUMAR", period: "1952 – 1954" },
  { name: "SHRI DILIP KUMAR", period: "1950 – 1952" },
  { name: "SHRI RAJ KAPOOR", period: "1948 – 1950" },
  { name: "SHRI DEV ANAND", period: "1946 – 1948" },
  { name: "SHRI RAJENDRA KUMAR", period: "1944 – 1946" },
  { name: "SHRI SUNIL DUTT", period: "1942 – 1944" },
  { name: "SHRI RAJ KUMAR", period: "1940 – 1942" },
  { name: "SHRI DILIP KUMAR", period: "1938 – 1940" },
  { name: "SHRI RAJ KAPOOR", period: "1936 – 1938" },
  { name: "SHRI DEV ANAND", period: "1934 – 1936" },
  { name: "SHRI RAJENDRA KUMAR", period: "1932 – 1934" },
  { name: "SHRI SUNIL DUTT", period: "1930 – 1932" },
  { name: "SHRI RAJ KUMAR", period: "1928 – 1930" },
  { name: "SHRI DILIP KUMAR", period: "1926 – 1928" },
  { name: "SHRI RAJ KAPOOR", period: "1924 – 1926" },
  { name: "SHRI DEV ANAND", period: "1922 – 1924" },
  { name: "SHRI RAJENDRA KUMAR", period: "1920 – 1922" },
  { name: "SHRI SUNIL DUTT", period: "1918 – 1920" },
  { name: "SHRI RAJ KUMAR", period: "1916 – 1918" },
  { name: "SHRI DILIP KUMAR", period: "1914 – 1916" },
  { name: "SHRI RAJ KAPOOR", period: "1912 – 1914" },
  { name: "SHRI DEV ANAND", period: "1910 – 1912" },
  { name: "SHRI RAJENDRA KUMAR", period: "1908 – 1910" },
  { name: "SHRI SUNIL DUTT", period: "1906 – 1908" },
  { name: "SHRI RAJ KUMAR", period: "1904 – 1906" },
  { name: "SHRI DILIP KUMAR", period: "1902 – 1904" },
  { name: "SHRI RAJ KAPOOR", period: "1900 – 1902" },
];

const FormerPresidents = () => (
  <div className="w-full min-h-screen bg-gradient-to-b from-[#f7f3f3] to-[#ede6e6]">
    <InstituteHero
      title="Former Presidents"
      subtitle="Honoring Our Legacy of Leadership"
      image={heroImage}
    />
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {formerPresidents.map((president, idx) => (
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
                PRESIDENT
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
                {president.name}
              </span>
              <span
                style={{
                  color: "#686868",
                  fontSize: 14,
                  fontWeight: 500
                }}
              >
                {president.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default FormerPresidents;
