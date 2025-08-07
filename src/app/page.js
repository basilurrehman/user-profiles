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
          <ul className="space-y-2">
            {records.map((record) => (
              <li key={record.id}>
                <Link href={`/user/${record.id}`}>
                  <Button variant="outline" className="w-full justify-start">
                    {record.fields.Email || "No Name"}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}