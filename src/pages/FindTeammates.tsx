import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MessageCircle, UserPlus, Search } from "lucide-react";
import SkillBadge from "@/components/SkillBadge";

const availableSkills = [
  "Python", "JavaScript", "React", "UI/UX Design", "Marketing",
  "Data Science", "Machine Learning", "Backend Development"
];

const mockTeammates = [
  {
    id: 1,
    name: "Sarah Chen",
    university: "MIT",
    major: "Computer Science",
    year: "Junior",
    skills: ["Python", "Machine Learning", "Data Science"],
    workStyle: ["Video calls", "Early bird", "4-5 people"],
    score: 4.9,
    compatibility: 96,
    projects: 12
  },
  {
    id: 2,
    name: "Marcus Johnson",
    university: "Stanford",
    major: "Design",
    year: "Senior",
    skills: ["React", "UI/UX Design", "JavaScript"],
    workStyle: ["In-person meetings", "Steady pace", "2-3 people"],
    score: 4.8,
    compatibility: 94,
    projects: 15
  },
  {
    id: 3,
    name: "Emma Davis",
    university: "Berkeley",
    major: "Business",
    year: "Sophomore",
    skills: ["Marketing", "Business Strategy"],
    workStyle: ["Text messages", "Flexible", "4-5 people"],
    score: 4.7,
    compatibility: 91,
    projects: 8
  },
  {
    id: 4,
    name: "Alex Kumar",
    university: "CMU",
    major: "Software Engineering",
    year: "Senior",
    skills: ["Python", "Backend Development", "JavaScript"],
    workStyle: ["Video calls", "Last-minute rush", "2-3 people"],
    score: 4.9,
    compatibility: 89,
    projects: 18
  }
];

const FindTeammates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [skillFilter, setSkillFilter] = useState<string[]>([]);
  const [universityFilter, setUniversityFilter] = useState("");
  const [minScore, setMinScore] = useState("");

  const toggleSkillFilter = (skill: string) => {
    setSkillFilter(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Find Teammates</h1>
        <p className="text-muted-foreground mb-8">Discover talented students to collaborate with</p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card className="shadow-md sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="search">Search</Label>
                  <div className="relative mt-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Name or university..."
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label>Skills</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {availableSkills.map((skill) => (
                      <SkillBadge
                        key={skill}
                        skill={skill}
                        selected={skillFilter.includes(skill)}
                        onClick={() => toggleSkillFilter(skill)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="university">University</Label>
                  <Select value={universityFilter} onValueChange={setUniversityFilter}>
                    <SelectTrigger id="university">
                      <SelectValue placeholder="All universities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Universities</SelectItem>
                      <SelectItem value="mit">MIT</SelectItem>
                      <SelectItem value="stanford">Stanford</SelectItem>
                      <SelectItem value="berkeley">Berkeley</SelectItem>
                      <SelectItem value="cmu">CMU</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="minScore">Min. TeamSync Score</Label>
                  <Select value={minScore} onValueChange={setMinScore}>
                    <SelectTrigger id="minScore">
                      <SelectValue placeholder="Any score" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Score</SelectItem>
                      <SelectItem value="4.5">4.5+</SelectItem>
                      <SelectItem value="4.7">4.7+</SelectItem>
                      <SelectItem value="4.9">4.9+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSearchQuery("");
                    setSkillFilter([]);
                    setUniversityFilter("");
                    setMinScore("");
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">{mockTeammates.length} teammates found</p>
              <Select defaultValue="compatibility">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="compatibility">Best Match</SelectItem>
                  <SelectItem value="score">Highest Score</SelectItem>
                  <SelectItem value="projects">Most Projects</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {mockTeammates.map((teammate) => (
              <Card key={teammate.id} className="shadow-md hover:shadow-lg transition-all animate-fade-in">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-1">{teammate.name}</CardTitle>
                      <CardDescription className="text-base">
                        {teammate.major} • {teammate.year} • {teammate.university}
                      </CardDescription>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-5 w-5 fill-accent text-accent" />
                          <span className="font-semibold">{teammate.score}</span>
                          <span className="text-sm text-muted-foreground">
                            ({teammate.projects} projects)
                          </span>
                        </div>
                        <Badge variant="outline" className="text-accent border-accent">
                          {teammate.compatibility}% Compatible
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {teammate.skills.map((skill) => (
                          <SkillBadge key={skill} skill={skill} verified />
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2">Work Style</h4>
                      <div className="flex flex-wrap gap-2">
                        {teammate.workStyle.map((style) => (
                          <Badge key={style} variant="secondary">{style}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <Button variant="outline">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Message
                      </Button>
                      <Button>
                        <UserPlus className="mr-2 h-4 w-4" />
                        Invite to Team
                      </Button>
                    </div>
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

export default FindTeammates;
