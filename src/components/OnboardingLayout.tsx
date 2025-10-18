import { ReactNode } from "react";
import { Progress } from "@/components/ui/progress";

interface OnboardingLayoutProps {
  children: ReactNode;
  step: number;
  totalSteps: number;
  title: string;
  description?: string;
}

const OnboardingLayout = ({ children, step, totalSteps, title, description }: OnboardingLayoutProps) => {
  const progress = (step / totalSteps) * 100;
  
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">Step {step} of {totalSteps}</span>
              <span className="text-sm font-medium text-primary">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          <div className="bg-card rounded-lg shadow-lg p-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            {description && <p className="text-muted-foreground mb-6">{description}</p>}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingLayout;
