import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Skills from "./pages/onboarding/Skills";
import WorkStyle from "./pages/onboarding/WorkStyle";
import Availability from "./pages/onboarding/Availability";
import Dashboard from "./pages/Dashboard";
import PostProject from "./pages/PostProject";
import FindTeammates from "./pages/FindTeammates";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding/skills" element={<Skills />} />
          <Route path="/onboarding/work-style" element={<WorkStyle />} />
          <Route path="/onboarding/availability" element={<Availability />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/post-project" element={<PostProject />} />
          <Route path="/find-teammates" element={<FindTeammates />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
