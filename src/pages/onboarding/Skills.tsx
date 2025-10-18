import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "@/components/OnboardingLayout";
import SkillBadge from "@/components/SkillBadge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const availableSkills = [
  "Python", "JavaScript", "React", "UI/UX Design", "Marketing",
  "Data Science", "Machine Learning", "Backend Development",
  "Mobile Development", "Product Management", "Content Writing",
  "Video Editing", "Graphic Design", "Business Strategy", "SQL"
];

const Skills = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleContinue = () => {
    if (selectedSkills.length === 0) {
      toast({
        title: "Select at least one skill",
        description: "Choose the skills you're proficient in to help us match you better.",
        variant: "destructive"
      });
      return;
    }
    
    localStorage.setItem("teamsync_skills", JSON.stringify(selectedSkills));
    navigate("/onboarding/work-style");
  };

  return (
    <OnboardingLayout
      step={1}
      totalSteps={3}
      title="What are your skills?"
      description="Select all the skills you're comfortable working with. We'll use this to match you with relevant projects and teammates."
    >
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {availableSkills.map((skill) => (
            <SkillBadge
              key={skill}
              skill={skill}
              selected={selectedSkills.includes(skill)}
              onClick={() => toggleSkill(skill)}
            />
          ))}
        </div>

        <div className="flex justify-between pt-4">
          <p className="text-sm text-muted-foreground">
            {selectedSkills.length} skill{selectedSkills.length !== 1 ? "s" : ""} selected
          </p>
          <Button onClick={handleContinue} size="lg">
            Continue
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Skills;
