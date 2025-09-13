import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Code, Zap, Brain } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-small-white/[0.02] bg-grid-pattern" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 container px-4 text-center">
        <div className="animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-border/50">
            <Zap className="h-4 w-4 text-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              AI-Powered Learning Assistant
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block">Master Coding with</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Intelligent AI
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Experience the future of programming education. Get instant code analysis, 
            automated debugging suggestions, and personalized learning paths powered by advanced AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 group"
            >
              Start Learning Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border/50 hover:bg-secondary/50 backdrop-blur-sm group"
            >
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 group-hover:shadow-glow group-hover:scale-105 transition-all duration-300">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">Smart Code Analysis</h3>
              <p className="text-sm text-muted-foreground text-center">
                AI-powered code explanation and optimization suggestions
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 group-hover:shadow-glow group-hover:scale-105 transition-all duration-300">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold">Auto Debug Detection</h3>
              <p className="text-sm text-muted-foreground text-center">
                Instant error detection with intelligent fixing recommendations
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 group-hover:shadow-glow group-hover:scale-105 transition-all duration-300">
                <Brain className="h-8 w-8 text-info" />
              </div>
              <h3 className="font-semibold">Adaptive Learning</h3>
              <p className="text-sm text-muted-foreground text-center">
                Personalized exercises that adapt to your skill level
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};