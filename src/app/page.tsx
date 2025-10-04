import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Sparkles, Waves } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Layered Background */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-4 py-20 pt-32 overflow-hidden">
        {/* Layered Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Deep ocean gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

          {/* Bioluminescent glow spots */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse" />
          <div
            className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-secondary/15 blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full bg-primary/8 blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-glow-primary animate-float-up">
            ASTROQUA
          </h1>
          <p
            className="text-lg md:text-xl text-foreground font-body max-w-2xl mx-auto animate-float-up text-glow-subtle"
            style={{ animationDelay: "0.2s" }}
          >
            Where the infinite depths of space meet the mysterious abyss of the ocean. Explore
            stories that blur the boundaries between cosmic wonder and aquatic horror.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-float-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground ripple-effect shadow-lg shadow-primary/25"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Begin Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground ripple-effect shadow-lg shadow-primary/10"
            >
              <Waves className="mr-2 h-5 w-5" />
              Explore Stories
            </Button>
          </div>
        </div>

        {/* Enhanced Bounce Arrow */}
        <div className="relative z-10 mt-16 animate-float-up" style={{ animationDelay: "0.6s" }}>
          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 text-primary mx-auto drop-shadow-lg" />
          </div>
          <div className="mt-2 text-sm text-muted-foreground font-body">Dive Deeper</div>
        </div>
      </section>

      {/* Preview Cards Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-glow-subtle">
            Featured Mysteries
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
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
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="glass-card group hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="font-heading text-glow-secondary">
                    Cosmic Currents
                  </CardTitle>
                  <CardDescription className="font-body">
                    When the International Space Station detects ocean-like patterns in deep
                    space...
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-body">
                    Astronaut Marcus Chen watches as the Earth&apos;s oceans seem to mirror
                    movements in the cosmic void beyond our solar system.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
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
                    The machine&apos;s neural networks start creating patterns that resemble ancient
                    star charts found in underwater ruins.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-heading font-bold text-center mb-16 text-glow-subtle">
              The Journey Through Time
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Central Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

            {/* Timeline Cards */}
            <div className="space-y-16">
              {/* Card 1 - Left */}
              <ScrollReveal delay={0}>
                <div className="flex items-center">
                  <div className="w-1/2 pr-8">
                    <Card className="glass-card group hover:scale-105 transition-all duration-300 hover:border-primary/50">
                      <CardHeader>
                        <CardTitle className="font-heading text-glow-secondary">
                          The Discovery
                        </CardTitle>
                        <CardDescription className="font-body text-sm">
                          2024 • Deep Sea Research Station
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground font-body">
                          Dr. Elena Vasquez&apos;s team discovers anomalous readings at the deepest
                          point of the Mariana Trench. The pressure readings don&apos;t match any
                          known geological formations, suggesting something unprecedented.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center mx-auto">
                        <div className="w-8 h-8 rounded-full bg-primary animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 2 - Right */}
              <ScrollReveal delay={200}>
                <div className="flex items-center">
                  <div className="w-1/2 pr-8">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-secondary/20 border-2 border-secondary/50 flex items-center justify-center mx-auto">
                        <div className="w-8 h-8 rounded-full bg-secondary animate-pulse" />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 pl-8">
                    <Card className="glass-card group hover:scale-105 transition-all duration-300 hover:border-secondary/50">
                      <CardHeader>
                        <CardTitle className="font-heading text-glow-secondary">
                          The Connection
                        </CardTitle>
                        <CardDescription className="font-body text-sm">
                          2024 • International Space Station
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground font-body">
                          Astronaut Marcus Chen observes the Earth&apos;s oceans mirroring movements
                          in the cosmic void beyond our solar system. The patterns are too precise
                          to be coincidence.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 3 - Left */}
              <ScrollReveal delay={400}>
                <div className="flex items-center">
                  <div className="w-1/2 pr-8">
                    <Card className="glass-card group hover:scale-105 transition-all duration-300 hover:border-primary/50">
                      <CardHeader>
                        <CardTitle className="font-heading text-glow-secondary">
                          The Protocol
                        </CardTitle>
                        <CardDescription className="font-body text-sm">
                          2025 • AI Research Facility
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground font-body">
                          The Leviathan AI begins creating patterns that resemble ancient star
                          charts found in underwater ruins. The machine&apos;s neural networks
                          suggest a consciousness beyond human understanding.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center mx-auto">
                        <div className="w-8 h-8 rounded-full bg-primary animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6 text-glow-primary">
              Ready to Dive Deeper?
            </h2>
            <p className="text-xl text-muted-foreground font-body mb-8">
              Join our community of explorers, scientists, and storytellers as we uncover the
              mysteries that connect our world to the cosmos.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 ripple-effect">
              Start Your Journey
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
