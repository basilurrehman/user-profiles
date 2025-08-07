import Airtable from "airtable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const base = new Airtable({ apiKey: "patxXaUUP8Gq7p4d1.e5686590bdaefa8f09a99c4b0ab197b65561f1f3243fff28c2fdafc527692712" }).base("app8Pvtc8HMJZpuw0");
  let records = [];
  try {
    records = await base("Candidates").select().firstPage();
    console.log(records);
  } catch (err) {
    console.error("Airtable fetch error:", err);
  }

  return (
    <div className="max-w-2xl mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Candidate Name</th>
                <th className="px-4 py-2 border-b">Location</th>
                <th className="px-4 py-2 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td className="px-4 py-2 border-b">{record.fields.Email || "No Email"}</td>
                  <td className="px-4 py-2 border-b">{record.fields["Candidate Name"] || "No Name"}</td>
                  <td className="px-4 py-2 border-b">{record.fields.Location || "No Location"}</td>
                  <td className="px-4 py-2 border-b">
                    <Link href={`/user/${record.id}`}>
                      <Button variant="outline" className="w-full justify-start">
                        View
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}