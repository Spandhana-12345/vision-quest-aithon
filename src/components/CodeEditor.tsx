import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, RotateCcw, Lightbulb, AlertTriangle, CheckCircle, Code2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const CodeEditor = () => {
  const { toast } = useToast();
  const [code, setCode] = useState(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`);
  
  const [analysis, setAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeCode = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis({
        explanation: "This is a recursive implementation of the Fibonacci sequence. The function calculates the nth Fibonacci number by recursively calling itself.",
        suggestions: [
          "Consider using memoization to improve performance for large values of n",
          "Add input validation to handle negative numbers",
          "The current implementation has exponential time complexity O(2^n)"
        ],
        errors: [],
        complexity: "O(2^n) time, O(n) space",
        optimized: `function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}`
      });
      setIsAnalyzing(false);
      toast({
        title: "Code Analysis Complete",
        description: "AI has analyzed your code and provided insights!",
      });
    }, 2000);
  };

  const runCode = () => {
    toast({
      title: "Code Executed",
      description: "Your code is running in the virtual environment",
    });
  };

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try Our <span className="bg-gradient-primary bg-clip-text text-transparent">AI Code Assistant</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Write or paste your code below and get instant AI-powered analysis, suggestions, and optimizations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Code Editor */}
          <Card className="p-6 bg-code-bg border-border/50 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Code2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-code-text">Code Editor</h3>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setCode("")}
                  className="border-border/50"
                >
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Clear
                </Button>
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={runCode}
                >
                  <Play className="h-4 w-4 mr-1" />
                  Run
                </Button>
              </div>
            </div>
            
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Write your code here..."
              className="min-h-[300px] font-mono text-sm bg-code-bg text-code-text border-border/50 resize-none"
            />
            
            <div className="mt-4">
              <Button 
                onClick={analyzeCode}
                disabled={isAnalyzing || !code.trim()}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                    Analyzing Code...
                  </>
                ) : (
                  <>
                    <Lightbulb className="h-4 w-4 mr-2" />
                    Analyze with AI
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Analysis Results */}
          <Card className="p-6 border-border/50 shadow-card">
            <h3 className="font-semibold mb-4 flex items-center">
              <Lightbulb className="h-5 w-5 text-accent mr-2" />
              AI Analysis Results
            </h3>
            
            {!analysis ? (
              <div className="flex items-center justify-center h-[300px] text-muted-foreground">
                <div className="text-center">
                  <Code2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Click "Analyze with AI" to get intelligent insights about your code</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-slide-up">
                {/* Code Explanation */}
                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Code Explanation
                  </h4>
                  <p className="text-sm text-muted-foreground bg-secondary/50 rounded-lg p-3">
                    {analysis.explanation}
                  </p>
                </div>

                {/* Complexity Analysis */}
                <div>
                  <h4 className="font-medium mb-2">Time & Space Complexity</h4>
                  <Badge variant="outline" className="border-info text-info">
                    {analysis.complexity}
                  </Badge>
                </div>

                {/* Suggestions */}
                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <Lightbulb className="h-4 w-4 text-warning mr-2" />
                    Optimization Suggestions
                  </h4>
                  <ul className="space-y-2">
                    {analysis.suggestions.map((suggestion: string, index: number) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optimized Code */}
                <div>
                  <h4 className="font-medium mb-2">Optimized Version</h4>
                  <pre className="text-xs bg-code-bg text-code-text p-3 rounded-lg overflow-x-auto border border-border/50">
                    <code>{analysis.optimized}</code>
                  </pre>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};