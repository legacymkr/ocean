import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

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

          {/* Primary Action Button */}
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground ripple-effect"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Begin Journey
          </Button>
        </div>
      </div>
    </nav>
  );
}
