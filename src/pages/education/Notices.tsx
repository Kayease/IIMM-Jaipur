import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Notices() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Notices</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Notice {item}</CardTitle>
              <p className="text-sm text-gray-500">October {20 + item}, 2025</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Important notice regarding upcoming events and activities for students...
              </p>
              <a 
                href="#" 
                className="mt-4 inline-block text-blue-600 hover:underline text-sm font-medium"
              >
                View Details →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
