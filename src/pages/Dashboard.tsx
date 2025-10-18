import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Star, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const recommendedProjects = [
  {
    id: 1,
    title: "AI-Powered Study Buddy",
    type: "Hackathon",
    deadline: "2 weeks",
    skills: ["Python", "Machine Learning", "UI/UX Design"],
    teamSize: "3/5",
    match: 92
  },
  {
    id: 2,
    title: "Sustainable Campus App",
    type: "Course Project",
    deadline: "1 month",
    skills: ["React", "Mobile Development", "Marketing"],
    teamSize: "2/4",
    match: 88
  },
  {
    id: 3,
    title: "EdTech Startup MVP",
    type: "Startup",
    deadline: "3 months",
    skills: ["JavaScript", "Product Management", "Backend Development"],
    teamSize: "4/6",
    match: 85
  }
];

const suggestedTeammates = [
  {
    id: 1,
    name: "Sarah Chen",
    university: "MIT",
    skills: ["Python", "Data Science", "Machine Learning"],
    score: 4.8,
    compatibility: 94
  },
  {
    id: 2,
    name: "Marcus Johnson",
    university: "Stanford",
    skills: ["React", "UI/UX Design", "Product Management"],
    score: 4.9,
    compatibility: 91
  },
  {
    id: 3,
    name: "Emma Davis",
    university: "Berkeley",
    skills: ["Marketing", "Content Writing", "Business Strategy"],
    score: 4.7,
    compatibility: 89
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="mb-6 md:mb-8 animate-fade-in">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Welcome back! 👋</h1>
          <p className="text-sm md:text-base text-muted-foreground">Here's what's happening with your projects and teammates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-4 md:p-6">
              <Button asChild className="w-full h-12 md:h-auto" size="lg">
                <Link to="/post-project">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Post a New Project
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-4 md:p-6">
              <Button asChild variant="outline" className="w-full h-12 md:h-auto" size="lg">
                <Link to="/find-teammates">
                  <Users className="mr-2 h-5 w-5" />
                  Find Teammates
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-bold">Recommended Projects</h2>
              <Button variant="ghost" size="sm" className="text-xs md:text-sm">View All</Button>
            </div>

            {recommendedProjects.map((project) => (
              <Card key={project.id} className="shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer">
                <CardHeader className="p-4 md:p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg md:text-xl mb-2">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">{project.type}</Badge>
                        <Badge variant="outline" className="text-accent border-accent text-xs">
                          {project.match}% Match
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription>
                    <div className="flex items-center gap-3 md:gap-4 mt-2 text-xs md:text-sm">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 md:h-4 md:w-4" />
                        {project.deadline}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3 md:h-4 md:w-4" />
                        {project.teamSize} filled
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                  <Button className="w-full" size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-bold">Suggested Teammates</h2>
              <Button variant="ghost" size="sm" className="text-xs md:text-sm">View All</Button>
            </div>

            {suggestedTeammates.map((teammate) => (
              <Card key={teammate.id} className="shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer">
                <CardHeader className="p-4 md:p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg md:text-xl mb-1">{teammate.name}</CardTitle>
                      <CardDescription className="mb-2 text-xs md:text-sm">{teammate.university}</CardDescription>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 md:h-4 md:w-4 fill-accent text-accent" />
                          <span className="text-xs md:text-sm font-medium">{teammate.score}</span>
                        </div>
                        <Badge variant="outline" className="text-accent border-accent text-xs">
                          {teammate.compatibility}% Compatible
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {teammate.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="text-xs md:text-sm">Message</Button>
                    <Button size="sm" className="text-xs md:text-sm">Invite to Team</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
