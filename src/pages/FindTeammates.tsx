import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
      <div className="container mx-auto px-4 py-6 md:py-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Find Teammates</h1>
        <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">Discover talented students to collaborate with</p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Mobile Filter Drawer */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Search className="mr-2 h-4 w-4" />
                  Filters & Search
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 overflow-y-auto">
                <div className="space-y-4 mt-6">
                  <div>
                    <Label htmlFor="mobile-search">Search</Label>
                    <div className="relative mt-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="mobile-search"
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
                    <Label htmlFor="mobile-university">University</Label>
                    <Select value={universityFilter} onValueChange={setUniversityFilter}>
                      <SelectTrigger id="mobile-university">
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
                    <Label htmlFor="mobile-minScore">Min. TeamSync Score</Label>
                    <Select value={minScore} onValueChange={setMinScore}>
                      <SelectTrigger id="mobile-minScore">
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
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:block lg:col-span-1">
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-sm md:text-base text-muted-foreground">{mockTeammates.length} teammates found</p>
              <Select defaultValue="compatibility">
                <SelectTrigger className="w-full sm:w-48">
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
                <CardHeader className="p-4 md:p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl mb-1">{teammate.name}</CardTitle>
                      <CardDescription className="text-sm md:text-base">
                        {teammate.major} • {teammate.year} • {teammate.university}
                      </CardDescription>
                      <div className="flex items-center gap-3 md:gap-4 mt-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 md:h-5 md:w-5 fill-accent text-accent" />
                          <span className="text-sm md:text-base font-semibold">{teammate.score}</span>
                          <span className="text-xs md:text-sm text-muted-foreground">
                            ({teammate.projects} projects)
                          </span>
                        </div>
                        <Badge variant="outline" className="text-accent border-accent text-xs md:text-sm">
                          {teammate.compatibility}% Compatible
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs md:text-sm font-semibold mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {teammate.skills.map((skill) => (
                          <SkillBadge key={skill} skill={skill} verified />
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs md:text-sm font-semibold mb-2">Work Style</h4>
                      <div className="flex flex-wrap gap-2">
                        {teammate.workStyle.map((style) => (
                          <Badge key={style} variant="secondary" className="text-xs">{style}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <Button variant="outline" size="sm" className="h-10 md:h-auto text-xs md:text-sm">
                        <MessageCircle className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                        Message
                      </Button>
                      <Button size="sm" className="h-10 md:h-auto text-xs md:text-sm">
                        <UserPlus className="mr-2 h-3 w-3 md:h-4 md:w-4" />
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
