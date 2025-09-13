import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, BookOpen, ChevronRight, CheckCircle, Code, Clock, Users } from "lucide-react";

const tutorials = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Master the basics of JavaScript programming with hands-on examples",
    duration: "2 hours",
    lessons: 12,
    difficulty: "Beginner",
    progress: 75,
    students: 1250,
    topics: ["Variables", "Functions", "Arrays", "Objects", "Loops"],
    color: "bg-gradient-to-r from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "React Components & Hooks",
    description: "Build modern React applications with functional components and hooks",
    duration: "3 hours",
    lessons: 18,
    difficulty: "Intermediate",
    progress: 30,
    students: 850,
    topics: ["useState", "useEffect", "Custom Hooks", "Props", "State Management"],
    color: "bg-gradient-to-r from-green-500 to-blue-500"
  },
  {
    id: 3,
    title: "Algorithm Design Patterns",
    description: "Learn essential algorithms and data structures for technical interviews",
    duration: "4 hours",
    lessons: 24,
    difficulty: "Advanced",
    progress: 0,
    students: 420,
    topics: ["Binary Search", "Dynamic Programming", "Graph Algorithms", "Sorting", "Recursion"],
    color: "bg-gradient-to-r from-purple-500 to-pink-500"
  }
];

const currentLesson = {
  title: "Understanding JavaScript Variables",
  step: 3,
  totalSteps: 8,
  content: `In JavaScript, variables are containers that store data values. You can declare variables using 'let', 'const', or 'var' keywords.

Let's practice with an interactive example:`,
  code: `// Declare variables with different keywords
let name = "Alice";
const age = 25;
var isStudent = true;

// Variables can be reassigned (except const)
name = "Bob";
// age = 26; // This would cause an error!

console.log(name, age, isStudent);`,
  instructions: [
    "Try changing the value of the 'name' variable",
    "Notice that 'const' variables cannot be reassigned",
    "Run the code to see the output",
    "Experiment with different data types"
  ]
};

export const InteractiveTutorials = () => {
  const [selectedTutorial, setSelectedTutorial] = useState<any>(null);
  const [isInLesson, setIsInLesson] = useState(false);

  const startTutorial = (tutorial: any) => {
    setSelectedTutorial(tutorial);
    setIsInLesson(true);
  };

  if (isInLesson && selectedTutorial) {
    return (
      <section id="tutorials" className="py-20 bg-background">
        <div className="container px-4">
          {/* Lesson Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-between mb-4">
              <Button 
                variant="ghost" 
                onClick={() => setIsInLesson(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ← Back to Tutorials
              </Button>
              <Badge variant="outline" className="border-primary text-primary">
                Step {currentLesson.step} of {currentLesson.totalSteps}
              </Badge>
            </div>
            
            <h1 className="text-2xl font-bold mb-2">{currentLesson.title}</h1>
            <Progress value={(currentLesson.step / currentLesson.totalSteps) * 100} className="h-2 mb-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Content */}
            <Card className="p-6 border-border/50 shadow-card">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <BookOpen className="h-5 w-5 text-primary mr-2" />
                    Lesson Content
                  </h3>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      {currentLesson.content}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">📝 Instructions</h4>
                  <ul className="space-y-2">
                    {currentLesson.instructions.map((instruction, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                        {instruction}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    Next Step
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    Previous
                  </Button>
                  <Button variant="ghost">
                    Reset Code
                  </Button>
                </div>
              </div>
            </Card>

            {/* Interactive Code Editor */}
            <Card className="p-6 bg-code-bg border-border/50 shadow-card">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-code-text flex items-center">
                    <Code className="h-5 w-5 text-primary mr-2" />
                    Interactive Code Editor
                  </h3>
                  <Button variant="secondary" size="sm">
                    Run Code
                  </Button>
                </div>
                
                <pre className="bg-code-bg text-code-text text-sm overflow-x-auto h-[300px] border border-border/50 rounded p-4">
                  <code>{currentLesson.code}</code>
                </pre>
                
                <div className="bg-secondary/50 rounded p-3">
                  <h4 className="text-sm font-medium mb-2">Output:</h4>
                  <code className="text-xs text-muted-foreground">
                    Bob 25 true
                  </code>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="tutorials" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interactive <span className="bg-gradient-primary bg-clip-text text-transparent">Learning Tutorials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Step-by-step guided tutorials with hands-on coding practice and real-time feedback.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.id} className="p-6 border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="space-y-4">
                {/* Tutorial Header */}
                <div className={`h-32 rounded-lg ${tutorial.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  <PlayCircle className="h-12 w-12 text-white" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {tutorial.difficulty}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {tutorial.progress}% Complete
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{tutorial.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tutorial.description}</p>
                </div>

                {/* Progress Bar */}
                <Progress value={tutorial.progress} className="h-2" />

                {/* Tutorial Stats */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-3 w-3" />
                    <span>{tutorial.lessons} lessons</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{tutorial.students}</span>
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-1">
                  {tutorial.topics.slice(0, 3).map((topic, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {tutorial.topics.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{tutorial.topics.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Action Button */}
                <Button 
                  onClick={() => startTutorial(tutorial)}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                >
                  {tutorial.progress > 0 ? (
                    <>
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Continue Learning
                    </>
                  ) : (
                    <>
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Start Tutorial
                    </>
                  )}
                  <ChevronRight className="ml-auto h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};