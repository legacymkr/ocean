import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Brain } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-transparent backdrop-blur-sm border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Site Title */}
          <Link
            href="/"
            className="font-heading text-2xl text-glow-primary hover:brightness-125 transition-all duration-300"
          >
            Astroqua
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-3">
            <Link href="/articles">
              <Button variant="outline" size="sm" className="ripple-effect">
                <BookOpen className="mr-2 h-4 w-4" />
                Articles
              </Button>
            </Link>
            <Link href="/ai-generator">
              <Button
                variant="outline"
                size="sm"
                className="ripple-effect border-secondary/50 hover:border-secondary text-secondary hover:text-secondary"
              >
                <Brain className="mr-2 h-4 w-4" />
                AI Generator
              </Button>
            </Link>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground ripple-effect"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Begin Journey
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
