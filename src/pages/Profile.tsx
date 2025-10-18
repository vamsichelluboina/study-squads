import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, Users, Briefcase, Mail, MapPin, Edit } from "lucide-react";
import SkillBadge from "@/components/SkillBadge";

const userProfile = {
  name: "Alex Thompson",
  university: "Stanford University",
  major: "Computer Science & Design",
  year: "Junior",
  email: "alex.thompson@stanford.edu",
  location: "Palo Alto, CA",
  score: 4.8,
  totalProjects: 14,
  completedProjects: 12,
  skills: ["Python", "React", "UI/UX Design", "Machine Learning", "JavaScript"],
  verifiedSkills: ["Python", "React", "UI/UX Design"],
  workStyle: {
    communication: "Video calls",
    teamSize: "4-5 people",
    deadlineStyle: "Early bird"
  },
  availability: {
    Monday: ["Morning (8-12)", "Afternoon (12-5)"],
    Wednesday: ["Afternoon (12-5)", "Evening (5-9)"],
    Friday: ["Morning (8-12)", "Afternoon (12-5)"],
    Saturday: ["Afternoon (12-5)"]
  },
  projects: [
    {
      id: 1,
      title: "AI Study Assistant",
      type: "Hackathon",
      role: "Full-Stack Developer",
      status: "Completed",
      date: "Fall 2024"
    },
    {
      id: 2,
      title: "Campus Sustainability Tracker",
      type: "Course Project",
      role: "UI/UX Lead",
      status: "Completed",
      date: "Spring 2024"
    },
    {
      id: 3,
      title: "EdTech Analytics Platform",
      type: "Startup",
      role: "Frontend Developer",
      status: "In Progress",
      date: "Ongoing"
    }
  ]
};

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
          <Card className="shadow-lg">
            <CardHeader className="p-4 md:p-6 pb-4">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-2xl md:text-3xl mb-2">{userProfile.name}</CardTitle>
                  <CardDescription className="text-sm md:text-base space-y-1">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                      <span className="text-xs md:text-sm">{userProfile.university} • {userProfile.major} • {userProfile.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3 w-3 md:h-4 md:w-4" />
                      <span className="text-xs md:text-sm">{userProfile.email}</span>
                    </div>
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  <Edit className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm">Edit Profile</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="flex items-center gap-3 p-3 md:p-4 bg-muted/50 rounded-lg">
                  <Star className="h-6 w-6 md:h-8 md:w-8 fill-accent text-accent" />
                  <div>
                    <p className="text-xl md:text-2xl font-bold">{userProfile.score}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">TeamSync Score</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 md:p-4 bg-muted/50 rounded-lg">
                  <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  <div>
                    <p className="text-xl md:text-2xl font-bold">{userProfile.totalProjects}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Total Projects</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 md:p-4 bg-muted/50 rounded-lg">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  <div>
                    <p className="text-xl md:text-2xl font-bold">{userProfile.completedProjects}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Completed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Verified Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {userProfile.verifiedSkills.map((skill) => (
                        <SkillBadge key={skill} skill={skill} verified />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Other Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {userProfile.skills
                        .filter(s => !userProfile.verifiedSkills.includes(s))
                        .map((skill) => (
                          <SkillBadge key={skill} skill={skill} />
                        ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Work Style</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Preferred Communication</h4>
                    <Badge variant="secondary">{userProfile.workStyle.communication}</Badge>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Ideal Team Size</h4>
                    <Badge variant="secondary">{userProfile.workStyle.teamSize}</Badge>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Deadline Approach</h4>
                    <Badge variant="secondary">{userProfile.workStyle.deadlineStyle}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Weekly Availability
              </CardTitle>
              <CardDescription>Times when I'm typically available to work</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(userProfile.availability).map(([day, times]) => (
                  <div key={day} className="flex items-start gap-3">
                    <span className="font-semibold w-24">{day}</span>
                    <div className="flex flex-wrap gap-2">
                      {times.map((time) => (
                        <Badge key={time} variant="outline">{time}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Project Portfolio</CardTitle>
              <CardDescription>Past and current projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userProfile.projects.map((project) => (
                  <div key={project.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.role}</p>
                      </div>
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant="outline">{project.type}</Badge>
                      <span>•</span>
                      <span>{project.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
