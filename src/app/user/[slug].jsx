import Airtable from "airtable";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CalendarIcon, MessageSquare } from "lucide-react";
import { notFound } from "next/navigation";

export default async function CandidateProfilePage({ params }) {
  const { id } = params;

  // Fetch candidate by ID
  const base = new Airtable({ apiKey: 'patxXaUUP8Gq7p4d1.e5686590bdaefa8f09a99c4b0ab197b65561f1f3243fff28c2fdafc527692712' }).base("app8Pvtc8HMJZpuw0");
  let record = null;
  try {
    record = await base("Candidates").find(id);
  } catch (err) {
    return notFound();
  }
  if (!record) return notFound();

  // Example fallback avatar initials
  const initials = (record.fields["Candidate Name"] || "NA")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] items-start gap-8 max-w-5xl mx-auto p-6">
      {/* Sidebar */}
      <Card className="h-fit">
        <CardHeader className="flex flex-col items-center space-y-3">
          <Avatar className="w-24 h-24">
            <AvatarImage src={record.fields.Photo?.[0]?.url || "/candidate.jpg"} alt="Candidate" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="text-center w-full">
            <h2 className="text-2xl font-bold">{record.fields["Candidate Name"] || "No Name"}</h2>
            <p className="text-sm text-muted-foreground">{record.fields["Current Role"] || "Role not specified"}</p>
            <p className="text-sm">{record.fields.Location || "Location not specified"}</p>
            <div className="mt-3 text-left">
              <label htmlFor="managerRating" className="block text-sm font-semibold mb-1">Manager Rating</label>
              <select
                id="managerRating"
                className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                defaultValue=""
                // You can implement saving this rating to Airtable if needed
              >
                <option value="">Select a rating</option>
                <option value="strong">⭐ Strong Fit</option>
                <option value="good">✅ Good Fit</option>
                <option value="neutral">🟡 Neutral</option>
                <option value="weak">🔻 Weak Fit</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full mt-4">
            <Button variant="outline" className="w-full">
              <MessageSquare className="w-4 h-4 mr-1" /> Message
            </Button>
            <Button className="w-full">
              <CalendarIcon className="w-4 h-4 mr-1" /> Schedule Interview
            </Button>
          </div>
        </CardHeader>
        <CardContent className="text-sm space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Experience</h4>
            <p>{record.fields.Experience || "Not specified"}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Preferred Role</h4>
            <p>{record.fields["Preferred Role"] || "Not specified"}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Availability</h4>
            <p>{record.fields.Availability || "Not specified"}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Skills</h4>
            <p>{record.fields.Skills || "Not specified"}</p>
          </div>
          <details className="text-sm">
            <summary className="cursor-pointer font-semibold">More Details</summary>
            <div className="mt-2 space-y-4">
              <div>
                <h4 className="font-semibold mb-1">Key Strengths</h4>
                <ul className="list-disc ml-5 space-y-1">
                  {(record.fields["Key Strengths"] || "No strengths listed").split("\n").map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Key Achievements</h4>
                <ul className="list-disc ml-5 space-y-1">
                  {(record.fields["Key Achievements"] || "No achievements listed").split("\n").map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Certifications</h4>
                <p>{record.fields.Certifications || "None"}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Languages</h4>
                <p>{record.fields.Languages || "Not specified"}</p>
              </div>
            </div>
          </details>
        </CardContent>
      </Card>

      {/* Main profile content */}
      <Card>
        <CardContent className="pt-6">
          <Tabs defaultValue="about">
            <TabsList className="mb-4">
              <TabsTrigger value="about">Profile</TabsTrigger>
              <TabsTrigger value="video">Intro Video</TabsTrigger>
              <TabsTrigger value="calendar">Availability</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
            </TabsList>

            <TabsContent value="about">
              <section className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xl mb-4">Work Experience</h4>
                  <div className="space-y-4">
                    <div className="border-l-2 border-gray-300 pl-4">
                      <p className="text-sm font-semibold">{record.fields["Current Role"] || "Role not specified"} – {record.fields["Current Company"] || "Company not specified"}</p>
                      <p className="text-sm text-muted-foreground">{record.fields["Current Dates"] || ""} | {record.fields.Location || ""}</p>
                      <ul className="list-disc ml-5 text-sm mt-1 space-y-1">
                        {(record.fields["Current Highlights"] || "").split("\n").map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </div>
                    <div className="border-l-2 border-gray-300 pl-4">
                      <p className="text-sm font-semibold">{record.fields["Previous Role"] || ""} – {record.fields["Previous Company"] || ""}</p>
                      <p className="text-sm text-muted-foreground">{record.fields["Previous Dates"] || ""} | {record.fields["Previous Location"] || ""}</p>
                      <ul className="list-disc ml-5 text-sm mt-1 space-y-1">
                        {(record.fields["Previous Highlights"] || "").split("\n").map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-xl mt-6 mb-4">Education</h4>
                  <div className="border-l-2 border-gray-300 pl-4">
                    <p className="text-sm font-semibold">{record.fields.Education || "Not specified"}</p>
                    <p className="text-sm text-muted-foreground">{record.fields["Education Details"] || ""}</p>
                  </div>
                </div>
              </section>
            </TabsContent>

            <TabsContent value="video">
              {record.fields["Intro Video"] ? (
                <iframe
                  className="w-full h-80 rounded-xl"
                  src={record.fields["Intro Video"]}
                  title="Candidate Intro Video"
                  allowFullScreen
                ></iframe>
              ) : (
                <p>No intro video available.</p>
              )}
            </TabsContent>

            <TabsContent value="calendar">
              {record.fields["Calendly Link"] ? (
                <iframe
                  src={record.fields["Calendly Link"]}
                  className="w-full h-96 rounded-xl"
                ></iframe>
              ) : (
                <p>No calendar link available.</p>
              )}
            </TabsContent>

            <TabsContent value="feedback">
              <Textarea
                placeholder="Write your feedback here..."
                // You can implement feedback saving here
              />
              <Button className="mt-2" onClick={() => alert("Feedback submitted")}>Submit</Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}