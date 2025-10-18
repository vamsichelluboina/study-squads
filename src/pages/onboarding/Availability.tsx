import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "@/components/OnboardingLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const timeBlocks = ["Morning (8-12)", "Afternoon (12-5)", "Evening (5-9)", "Night (9-12)"];

const Availability = () => {
  const [availability, setAvailability] = useState<Record<string, string[]>>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const toggleTimeBlock = (day: string, timeBlock: string) => {
    setAvailability(prev => {
      const dayBlocks = prev[day] || [];
      const newBlocks = dayBlocks.includes(timeBlock)
        ? dayBlocks.filter(b => b !== timeBlock)
        : [...dayBlocks, timeBlock];
      
      return { ...prev, [day]: newBlocks };
    });
  };

  const handleComplete = () => {
    const totalBlocks = Object.values(availability).reduce((sum, blocks) => sum + blocks.length, 0);
    
    if (totalBlocks === 0) {
      toast({
        title: "Select your availability",
        description: "Please select at least one time block when you're available to work.",
        variant: "destructive"
      });
      return;
    }
    
    localStorage.setItem("teamsync_availability", JSON.stringify(availability));
    toast({
      title: "Profile created!",
      description: "Welcome to TeamSync. Let's find your perfect teammates.",
    });
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate("/onboarding/work-style");
  };

  return (
    <OnboardingLayout
      step={3}
      totalSteps={3}
      title="When are you available?"
      description="Select the times you're typically available to work on projects each week."
    >
      <div className="space-y-4">
        <div className="overflow-x-auto">
          <div className="min-w-max">
            <div className="grid grid-cols-5 gap-2 mb-2">
              <div className="font-semibold text-sm">Day</div>
              {timeBlocks.map(block => (
                <div key={block} className="font-semibold text-sm text-center">
                  {block}
                </div>
              ))}
            </div>
            
            {daysOfWeek.map(day => (
              <div key={day} className="grid grid-cols-5 gap-2 mb-2">
                <div className="flex items-center text-sm font-medium">{day}</div>
                {timeBlocks.map(block => {
                  const isSelected = availability[day]?.includes(block);
                  return (
                    <Card
                      key={block}
                      className={cn(
                        "p-3 cursor-pointer transition-all hover:shadow-md",
                        isSelected && "border-primary bg-primary/10"
                      )}
                      onClick={() => toggleTimeBlock(day, block)}
                    >
                      <div className="h-4" />
                    </Card>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <Button onClick={handleBack} variant="outline">
            Back
          </Button>
          <Button onClick={handleComplete} size="lg">
            Complete Setup
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Availability;
