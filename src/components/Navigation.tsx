import { Link, useLocation } from "react-router-dom";
import { Users, Briefcase, User, Home, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: Home },
    { path: "/find-teammates", label: "Find Teammates", icon: Users },
    { path: "/post-project", label: "Post Project", icon: PlusCircle },
    { path: "/profile", label: "Profile", icon: User },
  ];
  
  // Don't show navigation on onboarding pages
  if (location.pathname.startsWith("/onboarding")) {
    return null;
  }
  
  return (
    <header className="border-b bg-card sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">TeamSync</span>
          </Link>
          
          <div className="flex gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "transition-all",
                    isActive && "shadow-md"
                  )}
                >
                  <Link to={item.path}>
                    <Icon className="h-4 w-4 mr-2" />
                    <span className="hidden md:inline">{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
