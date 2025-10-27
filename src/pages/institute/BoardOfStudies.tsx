import React from "react";

const BoardOfStudies = () => {
  const tableData = [
    { sNo: "", name: <b className="text-blue-900">IIMM NEC</b>, institute: "" },
    { sNo: 1, name: "MR. LALIT RAJ MEENA", institute: "NP, IIMM" },
    { sNo: 2, name: "MR. P M BIDDAPPA", institute: "Sr. VP, IIMM" },
    { sNo: 3, name: "MR. RAKESH KUMAR RASTOGI", institute: "NS&T, IIMM" },
    { sNo: 4, name: "MR. GOPI KRISHNA AGNIHOTRI", institute: "VP, North, IIMM" },
    { sNo: 5, name: "MR. RANA DAS", institute: "VP, East, IIMM" },
    { sNo: 6, name: "MR. PANKAJ PANCHBHAI", institute: "VP, West, IIMM" },
    { sNo: 7, name: "MR. ROBY T A", institute: "VP, South, IIMM" },
    { sNo: 8, name: "MR. SUKUMAR ADHIKARI", institute: "VP, Central, IIMM" },
    { sNo: 9, name: "Dr SURESH KUMAR SHARMA", institute: "Co-chairman BOS" },
    { sNo: "", name: <b className="text-blue-900">Academicians</b>, institute: "" },
    { sNo: 10, name: "Prof. Madhulika Kaushik", institute: "VC, Usha Martin University, Former Prof. IGNOU" },
    { sNo: 11, name: "Prof. Vinay K Nangia", institute: "IIT Roorkee" },
    { sNo: 12, name: "Dr. T A S Vijayaraghavan", institute: "XLRI" },
    { sNo: 13, name: "Prof. (Dr.) Ravi Shanker", institute: "IIFT" },
    { sNo: 14, name: "Dr. Vijay Kumar Gupta", institute: "IMT Ghaziabad" },
    { sNo: 15, name: "Prof. (Dr.) Madhukar Gupta", institute: "FORE School of Management" },
    { sNo: 16, name: "Dr. K.N. Subramanya", institute: "RV College of Engineering, Bangalore" },
    { sNo: 17, name: "Prof D.K. Banwet", institute: "Prof Emeritus Dr D K Banwet ( IIT Delhi)" },
    { sNo: 18, name: "Dr Bharat Singh", institute: "Prince Institute of Innovative Technology" },
    { sNo: 19, name: "Prof. (Dr.) B Metri", institute: "Director - IIM Nagpur" },
    { sNo: 20, name: "Prof. S G Deshmukh", institute: "IIT Delhi" },
    { sNo: "", name: <b className="text-blue-900">Industries</b>, institute: "" },
    { sNo: 21, name: "Mr. Prasanta Gupta", institute: "Chief Procurement officer, Aarti Industries, Vadodara" },
    { sNo: 22, name: "Dr. Kamakshi Raman", institute: "Executive Director IICM" },
    { sNo: "", name: <b className="text-blue-900">Govt. Reps</b>, institute: "" },
    { sNo: 23, name: "Ms. Prachi Pandey", institute: "Jt. Secy. Ministry of Education, GOI Joint Secretary (Institutions & Training)" },
    { sNo: "", name: <b className="text-blue-900">International Bodies</b>, institute: "" },
    { sNo: 24, name: "World Bank Rep", institute: "World Bank" },
    { sNo: 25, name: "Mr. Markku Henttinen", institute: "CEO, IFPSM" },
    { sNo: "", name: <b className="text-blue-900">IIMM and Other Reps</b>, institute: "" },
    { sNo: 26, name: "Mr. Ashok Sharma", institute: "FNP, IIMM" },
    { sNo: 27, name: "Mr. O P Longia", institute: "FNP, IIMM" },
    { sNo: 28, name: "Mr. Surinder Kumar Sharma", institute: "FNP, IIMM" },
    { sNo: 29, name: "Mr. Balakrishnan Iyer", institute: "FNP, IIMM" },
    { sNo: 30, name: "Mr. V.K. Jain", institute: "FNP, IIMM" },
    { sNo: 31, name: "Dr. (Mrs) Bharti Trivedi", institute: "IIMM" },
    { sNo: 32, name: "Mr. L P Patel", institute: "IIMM" },
    { sNo: 33, name: "Dr. S. Roychoudhary", institute: "IIMM" },
    { sNo: 34, name: "Mr. Ketan Ramanlal Patel", institute: "IIMM" },
    { sNo: 35, name: "Dr. Goutam Sengupta", institute: "TIU" },
    { sNo: 36, name: "Dr. Koshy George", institute: "IIMM" },
    { sNo: 37, name: "Dr. Sandeep Tare", institute: "IIMM" },
    { sNo: 38, name: "Mr. Malay Mazumdar", institute: "Former President" },
    { sNo: 39, name: "Dr. Narendra Joshi", institute: "IIMM" },
    { sNo: 40, name: "Mr. Nitin Oza", institute: "IIMM" },
    { sNo: 41, name: "Dr. Manisha Agarwal", institute: "IIMM" },
    { sNo: 42, name: "Mr. Debasis Mallick", institute: "IIMM" },
  ];

  return (
    <div className="max-w-5xl mx-auto my-12">
      <h2 className="text-center text-blue-900 font-bold text-xl mb-1">
        Members - Board of Studies, IIMM
      </h2>
      <h3 className="text-center text-blue-900 font-bold text-lg mb-4">
        2024-2025
      </h3>

      <table className="w-full border border-black border-collapse text-sm">
        <thead>
          <tr className="bg-gray-200 font-semibold">
            <th className="border border-black px-3 py-1 w-[60px]">S.no</th>
            <th className="border border-black px-3 py-1 text-left">Name</th>
            <th className="border border-black px-3 py-1 text-left">Institute</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              } border border-black`}
            >
              <td className="border border-black px-3 py-1 text-center">
                {row.sNo}
              </td>
              <td className="border border-black px-3 py-1">{row.name}</td>
              <td className="border border-black px-3 py-1">{row.institute}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardOfStudies;
