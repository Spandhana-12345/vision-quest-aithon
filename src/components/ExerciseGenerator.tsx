import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Target, Trophy, Zap, Clock, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const difficulties = [
  { value: "beginner", label: "Beginner", color: "bg-success", icon: "🌱" },
  { value: "intermediate", label: "Intermediate", color: "bg-warning", icon: "🚀" },
  { value: "advanced", label: "Advanced", color: "bg-destructive", icon: "⚡" },
];

const topics = [
  "Arrays & Strings",
  "Loops & Conditions",
  "Functions",
  "Objects & Classes",
  "Algorithms",
  "Data Structures",
  "Recursion",
  "Async Programming"
];

const sampleExercises = {
  beginner: {
    title: "Sum of Two Numbers",
    description: "Write a function that takes two numbers as parameters and returns their sum.",
    difficulty: "Beginner",
    estimatedTime: "5 minutes",
    points: 10,
    template: `function sum(a, b) {
  // Your code here
  
}

// Test cases
console.log(sum(2, 3)); // Should return 5
console.log(sum(-1, 1)); // Should return 0`,
    hints: [
      "Use the + operator to add two numbers",
      "Don't forget to return the result",
      "Test with both positive and negative numbers"
    ]
  },
  intermediate: {
    title: "Find Duplicate Elements",
    description: "Write a function that finds all duplicate elements in an array and returns them in a new array.",
    difficulty: "Intermediate",
    estimatedTime: "15 minutes",
    points: 25,
    template: `function findDuplicates(arr) {
  // Your code here
  
}

// Test cases
console.log(findDuplicates([1, 2, 3, 2, 4, 1])); // Should return [1, 2]
console.log(findDuplicates([1, 2, 3])); // Should return []`,
    hints: [
      "Consider using an object or Map to track element frequencies",
      "You'll need to iterate through the array twice",
      "Filter elements that appear more than once"
    ]
  },
  advanced: {
    title: "Binary Tree Traversal",
    description: "Implement in-order traversal for a binary tree and return the values in an array.",
    difficulty: "Advanced",
    estimatedTime: "30 minutes",
    points: 50,
    template: `class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function inorderTraversal(root) {
  // Your code here
  
}

// Test case
const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(inorderTraversal(tree)); // Should return [1, 3, 2]`,
    hints: [
      "In-order traversal: left subtree → root → right subtree",
      "You can solve this recursively or iteratively with a stack",
      "Base case: if the node is null, return"
    ]
  }
};

export const ExerciseGenerator = () => {
  const { toast } = useToast();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [currentExercise, setCurrentExercise] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateExercise = () => {
    if (!selectedDifficulty) {
      toast({
        title: "Please select a difficulty level",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI exercise generation
    setTimeout(() => {
      const exercise = sampleExercises[selectedDifficulty as keyof typeof sampleExercises];
      setCurrentExercise(exercise);
      setIsGenerating(false);
      
      toast({
        title: "Exercise Generated!",
        description: `New ${selectedDifficulty} level challenge ready for you.`,
      });
    }, 1500);
  };

  return (
    <section id="exercises" className="py-20 bg-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">AI-Generated</span> Programming Exercises
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Challenge yourself with personalized coding exercises that adapt to your skill level and learning goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Exercise Generator */}
          <Card className="lg:col-span-1 p-6 border-border/50 shadow-card h-fit">
            <h3 className="font-semibold mb-6 flex items-center">
              <Target className="h-5 w-5 text-primary mr-2" />
              Generate Exercise
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Difficulty Level</label>
                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    {difficulties.map((diff) => (
                      <SelectItem key={diff.value} value={diff.value}>
                        <div className="flex items-center space-x-2">
                          <span>{diff.icon}</span>
                          <span>{diff.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Topic (Optional)</label>
                <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose topic" />
                  </SelectTrigger>
                  <SelectContent>
                    {topics.map((topic) => (
                      <SelectItem key={topic} value={topic}>
                        {topic}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={generateExercise}
                disabled={isGenerating}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4 mr-2" />
                    Generate Exercise
                  </>
                )}
              </Button>
            </div>

            {/* Difficulty Legend */}
            <div className="mt-6 pt-6 border-t border-border/50">
              <h4 className="text-sm font-medium mb-3">Difficulty Levels</h4>
              <div className="space-y-2">
                {difficulties.map((diff) => (
                  <div key={diff.value} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <span>{diff.icon}</span>
                      <span>{diff.label}</span>
                    </div>
                    <Badge variant="outline" className={`text-xs ${diff.color} text-white border-0`}>
                      {diff.value === 'beginner' ? '10pts' : diff.value === 'intermediate' ? '25pts' : '50pts'}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Exercise Display */}
          <Card className="lg:col-span-2 p-6 border-border/50 shadow-card">
            <h3 className="font-semibold mb-6 flex items-center">
              <BookOpen className="h-5 w-5 text-accent mr-2" />
              Current Exercise
            </h3>
            
            {!currentExercise ? (
              <div className="flex items-center justify-center h-[400px] text-muted-foreground">
                <div className="text-center">
                  <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Generate an exercise to start coding!</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-slide-up">
                {/* Exercise Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{currentExercise.title}</h4>
                    <p className="text-muted-foreground mb-3">{currentExercise.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="border-primary text-primary">
                      <Trophy className="h-3 w-3 mr-1" />
                      {currentExercise.points} pts
                    </Badge>
                  </div>
                </div>

                {/* Exercise Meta */}
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>{currentExercise.difficulty}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{currentExercise.estimatedTime}</span>
                  </div>
                </div>

                {/* Code Template */}
                <div>
                  <h5 className="font-medium mb-2">Code Template</h5>
                  <pre className="bg-code-bg text-code-text p-4 rounded-lg overflow-x-auto text-sm border border-border/50">
                    <code>{currentExercise.template}</code>
                  </pre>
                </div>

                {/* Hints */}
                <div>
                  <h5 className="font-medium mb-2">💡 Hints</h5>
                  <ul className="space-y-2">
                    {currentExercise.hints.map((hint: string, index: number) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                        {hint}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    Start Solving
                  </Button>
                  <Button variant="outline">
                    View Solution
                  </Button>
                  <Button variant="ghost">
                    Skip Exercise
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};