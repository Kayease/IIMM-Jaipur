import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Results = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Examination Results</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Terminal Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">View results for terminal examinations.</p>
            <div className="space-y-2">
              <p><Link to="/education/results/terminal/2024" className="text-blue-600 hover:underline">2024 Results →</Link></p>
              <p><Link to="/education/results/terminal/2023" className="text-blue-600 hover:underline">2023 Results →</Link></p>
              <p><Link to="/education/results/terminal/2022" className="text-blue-600 hover:underline">2022 Results →</Link></p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Internal Assessments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">View internal assessment results.</p>
            <div className="space-y-2">
              <p><Link to="/education/results/internal/2024" className="text-blue-600 hover:underline">2024 Results →</Link></p>
              <p><Link to="/education/results/internal/2023" className="text-blue-600 hover:underline">2023 Results →</Link></p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Practical Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">View practical examination results.</p>
            <div className="space-y-2">
              <p><Link to="/education/results/practical/2024" className="text-blue-600 hover:underline">2024 Results →</Link></p>
              <p><Link to="/education/results/practical/2023" className="text-blue-600 hover:underline">2023 Results →</Link></p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Result Re-evaluation</h2>
        <p className="mb-4">If you wish to apply for re-evaluation of your answer scripts, please fill out the re-evaluation form.</p>
        <Link to="/education/forms/reevaluation" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Apply for Re-evaluation
        </Link>
      </div>
    </div>
  );
};

export default Results;
