import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function TimeTable() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'];
  
  const courses = [
    'Business Management',
    'Financial Accounting',
    'Marketing Principles',
    'Organizational Behavior',
    'Business Communication'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Time Table</h1>
        <div className="w-48">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Batch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023-24</SelectItem>
              <SelectItem value="2024">2024-25</SelectItem>
              <SelectItem value="2025">2025-26</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 bg-gray-100">Time</th>
              {days.map(day => (
                <th key={day} className="border p-2 bg-gray-100">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time, timeIndex) => (
              <tr key={time}>
                <td className="border p-2 font-medium">{time}</td>
                {days.map((day, dayIndex) => (
                  <td key={`${day}-${time}`} className="border p-2">
                    {timeIndex % 2 === 0 && dayIndex % 2 === 0 ? (
                      <div className="bg-blue-50 p-2 rounded">
                        <p className="font-medium">{courses[(timeIndex + dayIndex) % courses.length]}</p>
                        <p className="text-sm text-gray-600">Room: {`${String.fromCharCode(65 + dayIndex)}${timeIndex + 1}`}</p>
                      </div>
                    ) : (
                      <div className="p-2">
                        {timeIndex % 3 === 0 && dayIndex % 3 === 0 ? (
                          <div className="bg-green-50 p-2 rounded">
                            <p className="font-medium">{courses[(timeIndex + dayIndex) % courses.length]}</p>
                            <p className="text-sm text-gray-600">Room: {`${String.fromCharCode(65 + dayIndex)}${timeIndex + 1}`}</p>
                          </div>
                        ) : '—'}
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
