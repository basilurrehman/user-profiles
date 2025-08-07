"use client";

// ATS-Style Candidate Profile with Top Manager Rating Placement
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CalendarIcon, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function CandidateProfileFull() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] items-start gap-6 max-w-7xl mx-auto p-6">
      {/* Sidebar with candidate summary and highlights */}
      <Card className="h-fit">
        <CardHeader className="flex flex-col items-center space-y-3">
          <Avatar className="w-20 h-20">
            <AvatarImage src="/candidate.jpg" alt="Candidate" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center w-full">
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-sm text-muted-foreground">Sales Executive</p>
            <p className="text-sm">New York, NY</p>
            <div className="mt-3 text-left">
              <label htmlFor="managerRating" className="block text-sm font-semibold mb-1">Manager Rating</label>
              <select
                id="managerRating"
                className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
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
            <p>5+ years in freight/logistics sales</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Preferred Role</h4>
            <p>Account Executive, Sales Manager</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Availability</h4>
            <p>Immediate • Full-time, Remote, Hybrid</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Skills</h4>
            <p>Lead Generation, Account Management, CRM (Salesforce, HubSpot), Cold Outreach</p>
          </div>
          <details className="text-sm">
            <summary className="cursor-pointer font-semibold">More Details</summary>
            <div className="mt-2 space-y-4">
              <div>
                <h4 className="font-semibold mb-1">Key Strengths</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Strong communicator</li>
                  <li>Consistently exceeds quota (120%+ YOY)</li>
                  <li>Deep understanding of transpacific trade lanes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Key Achievements</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Closed $1.5M+ in new business in 12 months</li>
                  <li>Grew market share by 30%</li>
                  <li>"Top Performer" 2 years in a row</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Certifications</h4>
                <p>Certified Logistics Sales Professional (CLSP)</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Languages</h4>
                <p>English (Fluent), Mandarin (Business Proficient)</p>
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
                      <p className="text-sm font-semibold">Senior Sales Executive – OceanGate Logistics</p>
                      <p className="text-sm text-muted-foreground">Jan 2021 – Present | New York, NY</p>
                      <ul className="list-disc ml-5 text-sm mt-1 space-y-1">
                        <li>Led $1.5M+ in annual revenue generation</li>
                        <li>Built strategic partnerships across Asia-US lanes</li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-gray-300 pl-4">
                      <p className="text-sm font-semibold">Sales Associate – TransPacific Forwarders</p>
                      <p className="text-sm text-muted-foreground">Aug 2018 – Dec 2020 | Los Angeles, CA</p>
                      <ul className="list-disc ml-5 text-sm mt-1 space-y-1">
                        <li>Managed 60+ accounts on West Coast</li>
                        <li>Trained junior reps on CRM best practices</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xl mt-6 mb-4">Education</h4>
                  <div className="border-l-2 border-gray-300 pl-4">
                    <p className="text-sm font-semibold">B.A. in International Business</p>
                    <p className="text-sm text-muted-foreground">University of Southern California (USC), 2018</p>
                  </div>
                </div>
              </section>
            </TabsContent>

            <TabsContent value="video">
              <iframe
                className="w-full h-80 rounded-xl"
                src="https://www.youtube.com/embed/sample-video"
                title="Candidate Intro Video"
                allowFullScreen
              ></iframe>
            </TabsContent>

            <TabsContent value="calendar">
              <iframe
                src="https://calendly.com/johndoe/intro"
                className="w-full h-96 rounded-xl"
              ></iframe>
            </TabsContent>

            <TabsContent value="feedback">
              <Textarea
                placeholder="Write your feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <Button className="mt-2" onClick={() => alert("Feedback submitted")}>Submit</Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
