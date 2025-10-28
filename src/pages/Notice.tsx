import React from "react";

export default function Notice() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-sm uppercase tracking-wide text-blue-700 font-semibold">
            Notice Circulars
          </h2>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 relative inline-block">
            IIMM Jaipur Branch – Notice Circulars
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-200 rounded-full"></span>
          </h1>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white border border-gray-300 rounded-lg shadow-lg">
          <table className="w-full border-collapse text-left text-gray-800 text-[15px]">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-300 px-6 py-3 w-20 text-center font-semibold">
                  S.NO.
                </th>
                <th className="border border-gray-300 px-6 py-3 font-semibold">
                  NOTICE
                </th>
                <th className="border border-gray-300 px-6 py-3 font-semibold">
                  DATE
                </th>
                <th className="border border-gray-300 px-6 py-3 font-semibold">
                  VENUE
                </th>
                <th className="border border-gray-300 px-6 py-3 font-semibold">
                  REMARKS
                </th>
                <th className="border border-gray-300 px-6 py-3 font-semibold">
                  LETTER/CIRCULAR
                </th>
              </tr>
              {/* Blue Divider Line */}
              <tr className="bg-blue-300 h-[6px]">
                <td colSpan="6"></td>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {/* Row 1 */}
              <tr className="hover:bg-blue-50 transition">
                <td className="border border-gray-300 px-6 py-4 text-center font-medium">
                  1
                </td>
                <td className="border border-gray-300 px-6 py-4">
                  Annual General Body Meeting
                </td>
                <td className="border border-gray-300 px-6 py-4">
                  August 14, 2022
                </td>
                <td className="border border-gray-300 px-6 py-4">
                  <span className="font-semibold">IIMM Branch Office,</span> Shakarpur, Delhi.
                </td>
                <td className="border border-gray-300 px-6 py-4 text-center">
                  AGM
                </td>
                <td className="border border-gray-300 px-6 py-4 text-blue-700 font-semibold">
                  <a href="#" className="hover:underline">
                    Download Letter
                  </a>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-blue-50 transition">
                <td className="border border-gray-300 px-6 py-4 text-center font-medium">
                  2
                </td>
                <td className="border border-gray-300 px-6 py-4">
                  Annual General Body Meeting
                </td>
                <td className="border border-gray-300 px-6 py-4">
                  August 26, 2023
                </td>
                <td className="border border-gray-300 px-6 py-4">
                  <span className="font-semibold">
                    INSA Bahadur Shah Zafar Marg,
                  </span>{" "}
                  ITO Metro Station Gate No-3, New Delhi-110002.
                </td>
                <td className="border border-gray-300 px-6 py-4 text-center">
                  AGM
                </td>
                <td className="border border-gray-300 px-6 py-4 text-blue-700 font-semibold">
                  <a href="#" className="hover:underline">
                    Download Letter
                  </a>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-blue-50 transition">
                <td className="border border-gray-300 px-6 py-4 text-center font-medium">
                  3
                </td>
                <td className="border border-gray-300 px-6 py-4">
                  Annual General Body Meeting
                </td>
                <td className="border border-gray-300 px-6 py-4">
                  August 23, 2024
                </td>
                <td className="border border-gray-300 px-6 py-4">
                  <span className="font-semibold">
                    Indian Institute of Materials Management,
                  </span>{" "}
                  Branch Office, Shakarpur, Delhi.
                </td>
                <td className="border border-gray-300 px-6 py-4 text-center">
                  AGM
                </td>
                <td className="border border-gray-300 px-6 py-4">
                  <a
                    href="#"
                    className="text-blue-700 font-semibold hover:underline block"
                  >
                    Download Letter
                  </a>
                  <a
                    href="#"
                    className="text-green-700 font-semibold hover:underline"
                  >
                    Balance Sheet
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
