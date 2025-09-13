import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Trophy, Clock, Target, Star, Code, BookOpen, Zap } from "lucide-react";

const stats = [
  {
    title: "Problems Solved",
    value: "142",
    change: "+12 this week",
    icon: Target,
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    title: "Learning Streak",
    value: "15 days",
    change: "Personal best!",
    icon: Zap,
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  {
    title: "Code Score",
    value: "2,850",
    change: "+150 points",
    icon: Trophy,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    title: "Time Coding",
    value: "48h",
    change: "This month",
    icon: Clock,
    color: "text-info",
    bgColor: "bg-info/10"
  }
];

const recentActivity = [
  {
    type: "exercise",
    title: "Completed Array Manipulation Challenge",
    time: "2 hours ago",
    points: 25,
    difficulty: "Intermediate"
  },
  {
    type: "tutorial",
    title: "Finished React Hooks Tutorial",
    time: "1 day ago",
    points: 50,
    difficulty: "Intermediate"
  },
  {
    type: "exercise",
    title: "Solved Binary Tree Problem",
    time: "2 days ago",
    points: 75,
    difficulty: "Advanced"
  },
  {
    type: "tutorial",
    title: "Started Algorithm Design Patterns",
    time: "3 days ago",
    points: 0,
    difficulty: "Advanced"
  }
];

const skillProgress = [
  { name: "JavaScript", level: 85, color: "bg-warning" },
  { name: "React", level: 70, color: "bg-info" },
  { name: "Algorithms", level: 60, color: "bg-success" },
  { name: "Data Structures", level: 45, color: "bg-primary" },
  { name: "Python", level: 30, color: "bg-accent" }
];

export const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 bg-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Learning <span className="bg-gradient-primary bg-clip-text text-transparent">Dashboard</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your progress, monitor achievements, and see how you're advancing in your coding journey.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold mb-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1 text-success" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <Card className="lg:col-span-2 p-6 border-border/50 shadow-card">
              <h3 className="font-semibold mb-6 flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                Recent Activity
              </h3>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                    <div className={`p-2 rounded-lg ${activity.type === 'exercise' ? 'bg-accent/10' : 'bg-primary/10'}`}>
                      {activity.type === 'exercise' ? (
                        <Code className={`h-4 w-4 ${activity.type === 'exercise' ? 'text-accent' : 'text-primary'}`} />
                      ) : (
                        <BookOpen className={`h-4 w-4 text-primary`} />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.title}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                        <Badge variant="outline" className="text-xs">
                          {activity.difficulty}
                        </Badge>
                        {activity.points > 0 && (
                          <Badge variant="secondary" className="text-xs">
                            <Trophy className="h-3 w-3 mr-1" />
                            +{activity.points} pts
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Skill Progress */}
            <Card className="p-6 border-border/50 shadow-card">
              <h3 className="font-semibold mb-6 flex items-center">
                <Star className="h-5 w-5 text-accent mr-2" />
                Skill Progress
              </h3>
              
              <div className="space-y-6">
                {skillProgress.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-2" />
                      <div 
                        className={`absolute left-0 top-0 h-2 rounded-full ${skill.color} transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Overall Progress</p>
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Level 7
                  </div>
                  <p className="text-xs text-muted-foreground">
                    240 XP to next level
                  </p>
                  <Progress value={75} className="h-2 mt-2" />
                </div>
              </div>
            </Card>
          </div>

          {/* Achievement Showcase */}
          <Card className="p-6 border-border/50 shadow-card">
            <h3 className="font-semibold mb-6 flex items-center">
              <Trophy className="h-5 w-5 text-warning mr-2" />
              Recent Achievements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "First Steps", description: "Completed first exercise", icon: "🎯", unlocked: true },
                { name: "Problem Solver", description: "Solved 50 problems", icon: "🧩", unlocked: true },
                { name: "Streak Master", description: "15-day learning streak", icon: "🔥", unlocked: true },
                { name: "Speed Demon", description: "Solved problem in under 5 min", icon: "⚡", unlocked: false },
                { name: "Algorithm Master", description: "Complete all algorithm tutorials", icon: "🎓", unlocked: false }
              ].map((achievement, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg border text-center transition-all duration-300 ${
                    achievement.unlocked 
                      ? 'border-warning/50 bg-warning/5 hover:shadow-glow' 
                      : 'border-border/50 bg-muted/20 grayscale'
                  }`}
                >
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <h4 className="font-medium text-sm mb-1">{achievement.name}</h4>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};