import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Zap, Target, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Perfect Project Teammates
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Connect with skilled students, discover exciting projects, and build amazing teams for hackathons, courses, and startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => navigate("/onboarding/skills")}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => navigate("/find-teammates")}
              >
                Explore Teammates
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How TeamSync Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Create Your Profile</h3>
                <p className="text-muted-foreground">
                  Share your skills, work style, and availability to get personalized matches
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Matching</h3>
                <p className="text-muted-foreground">
                  Our algorithm finds teammates with complementary skills and compatible work styles
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Build Together</h3>
                <p className="text-muted-foreground">
                  Connect with your matches, form teams, and bring your projects to life
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Briefcase className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Team?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students building amazing projects together
            </p>
            <Button
              size="lg"
              className="text-lg px-8 shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => navigate("/onboarding/skills")}
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
