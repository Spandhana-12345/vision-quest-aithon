import { Button } from "@/components/ui/button";
import { Code2, Sparkles, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Code2 className="h-8 w-8 text-primary animate-pulse-glow" />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-accent animate-float" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CodeMentor AI
            </span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#tutorials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Tutorials
          </a>
          <a href="#exercises" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Exercises
          </a>
          <a href="#dashboard" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Dashboard
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button variant="default" size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};