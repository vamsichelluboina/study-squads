import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "@/components/OnboardingLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const workStyleQuestions = [
  {
    question: "How do you prefer to communicate?",
    options: ["Video calls", "Text messages", "In-person meetings", "Email"],
  },
  {
    question: "What's your ideal team size?",
    options: ["2-3 people", "4-5 people", "6+ people", "Solo with advisors"],
  },
  {
    question: "How do you approach deadlines?",
    options: ["Early bird", "Steady pace", "Last-minute rush", "Flexible"],
  },
];

const WorkStyle = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: answer }));
  };

  const handleContinue = () => {
    if (Object.keys(answers).length < workStyleQuestions.length) {
      toast({
        title: "Answer all questions",
        description: "Please answer all questions to help us understand your work style.",
        variant: "destructive"
      });
      return;
    }
    
    localStorage.setItem("teamsync_workstyle", JSON.stringify(answers));
    navigate("/onboarding/availability");
  };

  const handleBack = () => {
    navigate("/onboarding/skills");
  };

  return (
    <OnboardingLayout
      step={2}
      totalSteps={3}
      title="Tell us about your work style"
      description="Answer these quick questions to help us match you with compatible teammates."
    >
      <div className="space-y-6">
        {workStyleQuestions.map((q, qIndex) => (
          <div key={qIndex} className="space-y-3">
            <h3 className="font-semibold">{q.question}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {q.options.map((option) => (
                <Card
                  key={option}
                  className={cn(
                    "p-4 cursor-pointer transition-all hover:shadow-md",
                    answers[qIndex] === option && "border-primary bg-primary/5"
                  )}
                  onClick={() => handleAnswerSelect(qIndex, option)}
                >
                  <p className="text-sm font-medium">{option}</p>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-between pt-4">
          <Button onClick={handleBack} variant="outline">
            Back
          </Button>
          <Button onClick={handleContinue} size="lg">
            Continue
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default WorkStyle;
