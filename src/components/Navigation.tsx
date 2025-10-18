import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Users, Briefcase, User, Home, PlusCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
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
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            <span className="text-lg md:text-xl font-bold text-foreground">TeamSync</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2">
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
                    <span>{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  TeamSync
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 mt-6">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <Button
                      key={item.path}
                      asChild
                      variant={isActive ? "default" : "ghost"}
                      className={cn(
                        "justify-start transition-all w-full",
                        isActive && "shadow-md"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to={item.path}>
                        <Icon className="h-4 w-4 mr-2" />
                        {item.label}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
