import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, BookOpen, FileSpreadsheet, FileVideo } from "lucide-react";

const materials = [
  {
    id: 1,
    title: "Business Management Fundamentals",
    type: "pdf",
    size: "2.4 MB",
    date: "Oct 15, 2025",
    course: "Business Management 101"
  },
  {
    id: 2,
    title: "Financial Accounting Workbook",
    type: "doc",
    size: "1.8 MB",
    date: "Oct 10, 2025",
    course: "Financial Accounting"
  },
  {
    id: 3,
    title: "Marketing Case Studies",
    type: "pdf",
    size: "3.2 MB",
    date: "Oct 5, 2025",
    course: "Marketing Principles"
  },
  {
    id: 4,
    title: "Organizational Behavior Slides",
    type: "ppt",
    size: "4.1 MB",
    date: "Sep 28, 2025",
    course: "Organizational Behavior"
  },
  {
    id: 5,
    title: "Business Communication Guide",
    type: "pdf",
    size: "2.1 MB",
    date: "Sep 20, 2025",
    course: "Business Communication"
  },
  {
    id: 6,
    title: "Financial Analysis Video Lecture",
    type: "video",
    size: "45.7 MB",
    date: "Sep 15, 2025",
    course: "Financial Management"
  }
];

const getFileIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return <FileText className="h-5 w-5 text-red-500" />;
    case 'doc':
      return <FileText className="h-5 w-5 text-blue-500" />;
    case 'ppt':
      return <FileSpreadsheet className="h-5 w-5 text-orange-500" />;
    case 'video':
      return <FileVideo className="h-5 w-5 text-purple-500" />;
    default:
      return <FileText className="h-5 w-5 text-gray-500" />;
  }
};

export default function StudyMaterials() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Study Materials</h1>
        <div className="flex space-x-4">
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by Course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              <SelectItem value="bm">Business Management</SelectItem>
              <SelectItem value="fa">Financial Accounting</SelectItem>
              <SelectItem value="mp">Marketing Principles</SelectItem>
              <SelectItem value="ob">Organizational Behavior</SelectItem>
              <SelectItem value="bc">Business Communication</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="size">File Size</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        {materials.map((material) => (
          <Card key={material.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {getFileIcon(material.type)}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{material.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1 space-x-4">
                      <span>{material.course}</span>
                      <span>•</span>
                      <span className="capitalize">{material.type.toUpperCase()}</span>
                      <span>•</span>
                      <span>{material.size}</span>
                      <span>•</span>
                      <span>Uploaded {material.date}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="ml-4">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="px-6">
          Load More
        </Button>
      </div>
    </div>
  );
}
