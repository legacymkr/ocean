import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Sparkles, Waves } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-glow-primary animate-float-up">
            ASTROQUA
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-body max-w-2xl mx-auto animate-float-up" style={{ animationDelay: '0.2s' }}>
            Where the infinite depths of space meet the mysterious abyss of the ocean. Explore
            stories that blur the boundaries between cosmic wonder and aquatic horror.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-float-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground ripple-effect"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Begin Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground ripple-effect"
            >
              <Waves className="mr-2 h-5 w-5" />
              Explore Stories
            </Button>
          </div>
        </div>

        {/* Bounce Arrow */}
        <div className="mt-16 animate-bounce animate-float-up" style={{ animationDelay: '0.6s' }}>
          <ArrowDown className="h-8 w-8 text-primary mx-auto" />
        </div>
      </section>

      {/* Preview Cards Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-glow-subtle">
            Featured Mysteries
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-glow-secondary">
                  The Abyssal Station
                </CardTitle>
                <CardDescription className="font-body">
                  A research facility at the bottom of the Mariana Trench discovers something that
                  shouldn&apos;t exist...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-body">
                  Dr. Elena Vasquez reports strange readings from the deepest point on Earth. The
                  pressure readings don&apos;t match any known geological formations.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-glow-secondary">Cosmic Currents</CardTitle>
                <CardDescription className="font-body">
                  When the International Space Station detects ocean-like patterns in deep space...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-body">
                  Astronaut Marcus Chen watches as the Earth&apos;s oceans seem to mirror movements in
                  the cosmic void beyond our solar system.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-glow-secondary">
                  The Leviathan Protocol
                </CardTitle>
                <CardDescription className="font-body">
                  An AI designed to map the ocean floor begins exhibiting behaviors that suggest
                  consciousness...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-body">
                  The machine&apos;s neural networks start creating patterns that resemble ancient star
                  charts found in underwater ruins.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 text-glow-primary">
            Ready to Dive Deeper?
          </h2>
          <p className="text-xl text-muted-foreground font-body mb-8">
            Join our community of explorers, scientists, and storytellers as we uncover the
            mysteries that connect our world to the cosmos.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Start Your Journey
          </Button>
        </div>
      </section>
    </div>
  );
}
