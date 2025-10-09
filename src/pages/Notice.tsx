import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Download, FileText, Calendar, Clock, ChevronDown, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function Notice() {
  const categories = ["All", "Academic", "Examination", "Events", "Holidays"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const notices = [
    {
      id: 1,
      title: "Notice for Students - Change in Exam Schedule",
      date: "15-02-2024",
      time: "10:00 AM",
      file: "exam-schedule.pdf",
      size: "2.5 MB",
      category: "Examination",
      priority: "High"
    },
    {
      id: 2,
      title: "Workshop on Advanced Materials Management - Registration Open",
      date: "10-02-2024",
      time: "11:30 AM",
      file: "workshop-notice.pdf",
      size: "1.8 MB",
      category: "Events",
      priority: "Medium"
    },
    {
      id: 3,
      title: "Holiday Notice - Maha Shivratri",
      date: "08-03-2024",
      time: "09:00 AM",
      file: "holiday-notice.pdf",
      size: "1.2 MB",
      category: "Holidays",
      priority: "High"
    },
    {
      id: 4,
      title: "Result Declaration - Winter Semester 2023",
      date: "01-03-2024",
      time: "02:00 PM",
      file: "result-notice.pdf",
      size: "3.1 MB",
      category: "Examination",
      priority: "High"
    },
    {
      id: 5,
      title: "Campus Recruitment Drive - TATA Steel",
      date: "25-02-2024",
      time: "10:30 AM",
      file: "placement-notice.pdf",
      size: "2.7 MB",
      category: "Events",
      priority: "High"
    },
    {
      id: 6,
      title: "Alumni Meet 2024 - Save the Date",
      date: "20-02-2024",
      time: "11:00 AM",
      file: "alumni-meet-notice.pdf",
      size: "1.9 MB",
      category: "Events",
      priority: "Medium"
    },
    {
      id: 7,
      title: "Library Timings Update",
      date: "18-02-2024",
      time: "03:45 PM",
      file: "library-notice.pdf",
      size: "0.8 MB",
      category: "Academic",
      priority: "Low"
    },
    {
      id: 8,
      title: "Faculty Development Program - Registration Open",
      date: "12-02-2024",
      time: "10:15 AM",
      file: "fdp-notice.pdf",
      size: "2.3 MB",
      category: "Academic",
      priority: "Medium"
    },
    {
      id: 9,
      title: "Cultural Fest 2024 - Volunteers Required",
      date: "05-02-2024",
      time: "01:00 PM",
      file: "cultural-fest-notice.pdf",
      size: "1.5 MB",
      category: "Events",
      priority: "Medium"
    },
    {
      id: 10,
      title: "Change in Academic Calendar - Odd Semester 2024",
      date: "28-01-2024",
      time: "10:00 AM",
      file: "academic-calendar-notice.pdf",
      size: "2.9 MB",
      category: "Academic",
      priority: "High"
    }
  ];

  const filteredNotices = notices.filter(notice => {
    const matchesCategory = activeCategory === "All" || notice.category === activeCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         notice.file.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Notice Board
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Stay updated with the latest announcements and important notices
          </p>
        </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search notices..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className="whitespace-nowrap"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {filteredNotices.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNotices.map((notice, index) => (
              <motion.div
                key={notice.id}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={index % 6}
                className="h-full"
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden">
                  <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-4">
                        <Badge className={`mb-2 text-xs ${getPriorityColor(notice.priority)}`}>
                          {notice.priority} Priority
                        </Badge>
                        <CardTitle className="text-lg font-semibold text-gray-800 line-clamp-2">
                          {notice.title}
                        </CardTitle>
                        <CardDescription className="mt-1 text-sm">
                          {notice.category}
                        </CardDescription>
                      </div>
                      <div className="bg-blue-50 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Calendar className="h-4 w-4 mr-1.5 text-blue-500" />
                      <span className="mr-4">{notice.date}</span>
                      <Clock className="h-4 w-4 mr-1.5 text-blue-500" />
                      <span>{notice.time}</span>
                    </div>
                    <div className="mt-auto">
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                        <span className="truncate max-w-[180px]" title={notice.file}>
                          {notice.file}
                        </span>
                        <span className="font-medium">{notice.size}</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full flex items-center justify-center gap-2 border-blue-100 hover:bg-blue-50 text-blue-600"
                      >
                        <Download className="h-4 w-4" />
                        Download Notice
                        <ChevronRight className="h-3.5 w-3.5 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg border border-dashed border-gray-200">
            <FileText className="h-12 w-12 mx-auto text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No notices found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchQuery 
                ? 'Try adjusting your search or filter to find what you\'re looking for.'
                : 'There are currently no notices in this category.'}
            </p>
          </div>
        )}
      </div>

      {filteredNotices.length > 0 && (
        <div className="mt-10 flex justify-center">
          <nav className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
              <span className="sr-only">Previous</span>
              <ChevronDown className="h-4 w-4 -rotate-90" />
            </Button>
            {[1, 2, 3].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? "default" : "outline"}
                size="sm"
                className={`rounded-full w-10 h-10 p-0 ${page === 1 ? 'bg-blue-600' : ''}`}
              >
                {page}
              </Button>
            ))}
            <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
              <span className="sr-only">Next</span>
              <ChevronDown className="h-4 w-4 rotate-90" />
            </Button>
          </nav>
        </div>
      )}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Need Help?</h3>
            <p className="text-gray-600 max-w-2xl">
              For any queries regarding the notices, please contact our support team during working hours.
              We're here to help you with any questions or concerns.
            </p>
          </div>
          <Button className="mt-4 md:mt-0" size="lg">
            <a href="mailto:notices@iimm.org" className="flex items-center gap-2">
              Contact Support
              <ChevronRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </motion.div>
      </motion.div>
    </div>
  );
}
