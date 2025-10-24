import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExamSchedule = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Exam Schedule</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Terminal Examinations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">View the schedule for upcoming terminal examinations.</p>
            <Link to="/education/exam-schedule/terminal" className="text-blue-600 hover:underline">
              View Schedule →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Internal Assessments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Check dates for internal assessments and quizzes.</p>
            <Link to="/education/exam-schedule/internal" className="text-blue-600 hover:underline">
              View Schedule →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Practical Examinations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Schedule for practical examinations and viva voce.</p>
            <Link to="/education/exam-schedule/practical" className="text-blue-600 hover:underline">
              View Schedule →
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExamSchedule;
