import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import SkillBadge from "@/components/SkillBadge";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Plus, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const availableSkills = [
  "Python", "JavaScript", "React", "UI/UX Design", "Marketing",
  "Data Science", "Machine Learning", "Backend Development",
  "Mobile Development", "Product Management", "Content Writing"
];

interface Role {
  id: string;
  title: string;
  skills: string[];
}

const PostProject = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [projectType, setProjectType] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState([10]);
  const [deadline, setDeadline] = useState<Date>();
  const [roles, setRoles] = useState<Role[]>([]);
  const [newRoleTitle, setNewRoleTitle] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const { toast } = useToast();

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const addRole = () => {
    if (!newRoleTitle || selectedSkills.length === 0) {
      toast({
        title: "Missing information",
        description: "Please add a role title and select skills",
        variant: "destructive"
      });
      return;
    }

    setRoles(prev => [...prev, {
      id: Date.now().toString(),
      title: newRoleTitle,
      skills: [...selectedSkills]
    }]);
    setNewRoleTitle("");
    setSelectedSkills([]);
  };

  const removeRole = (roleId: string) => {
    setRoles(prev => prev.filter(r => r.id !== roleId));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!projectName || !description || !projectType || roles.length === 0) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields and add at least one role",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Project posted!",
      description: "Your project has been posted successfully. Start inviting teammates!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Post a New Project</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">Share your project idea and find the perfect teammates</p>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>Tell us about your project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="projectName">Project Name *</Label>
                  <Input
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="AI-Powered Study Buddy"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your project, goals, and what you hope to achieve..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select value={projectType} onValueChange={setProjectType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hackathon">Hackathon</SelectItem>
                      <SelectItem value="course">Course Project</SelectItem>
                      <SelectItem value="startup">Startup Idea</SelectItem>
                      <SelectItem value="research">Research Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Time Commitment: {hoursPerWeek[0]} hours/week</Label>
                  <Slider
                    value={hoursPerWeek}
                    onValueChange={setHoursPerWeek}
                    max={40}
                    min={1}
                    step={1}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Deadline</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal mt-1",
                          !deadline && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {deadline ? format(deadline, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={deadline}
                        onSelect={setDeadline}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Team Roles *</CardTitle>
                <CardDescription>Add roles and required skills for your team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
                  <div>
                    <Label htmlFor="roleTitle">Role Title</Label>
                    <Input
                      id="roleTitle"
                      value={newRoleTitle}
                      onChange={(e) => setNewRoleTitle(e.target.value)}
                      placeholder="Frontend Developer"
                    />
                  </div>

                  <div>
                    <Label>Required Skills</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {availableSkills.map((skill) => (
                        <SkillBadge
                          key={skill}
                          skill={skill}
                          selected={selectedSkills.includes(skill)}
                          onClick={() => toggleSkill(skill)}
                        />
                      ))}
                    </div>
                  </div>

                  <Button type="button" onClick={addRole} className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Role
                  </Button>
                </div>

                {roles.length > 0 && (
                  <div className="space-y-3">
                    <Label>Added Roles ({roles.length})</Label>
                    {roles.map((role) => (
                      <div key={role.id} className="p-4 border rounded-lg bg-card">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold">{role.title}</h4>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeRole(role.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill) => (
                            <SkillBadge key={skill} skill={skill} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <Button type="submit" size="lg" className="w-full">
              Post Project
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostProject;
