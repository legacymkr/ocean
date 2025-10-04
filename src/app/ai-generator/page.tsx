"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CTABar } from "@/components/cta-bar";
import { useAIGeneratorStore } from "@/lib/stores/ai-generator-store";
import {
  Brain,
  Sparkles,
  Wand2,
  Zap,
  Lightbulb,
  Target,
  Clock,
  Settings,
  Play,
  Download,
  Share2,
  RefreshCw,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const toneOptions = [
  "Mysterious and Atmospheric",
  "Scientific and Analytical",
  "Horror and Suspense",
  "Wonder and Discovery",
  "Melancholic and Contemplative",
  "Thrilling and Action-Packed",
];

const lengthOptions = [
  "Short Story (500-1000 words)",
  "Medium Story (1000-2500 words)",
  "Long Story (2500-5000 words)",
  "Novella (5000+ words)",
];

const presetThemes = [
  { name: "Deep Sea Discovery", icon: "🌊", description: "Unexplored ocean depths" },
  { name: "Cosmic Connection", icon: "🌌", description: "Space-ocean mysteries" },
  { name: "Bioluminescent Beings", icon: "✨", description: "Glowing sea creatures" },
  { name: "Ancient Ruins", icon: "🏛️", description: "Underwater civilizations" },
  { name: "Dimensional Rifts", icon: "🌀", description: "Reality-bending phenomena" },
  { name: "AI Consciousness", icon: "🤖", description: "Machine awakening" },
];

export default function AIGeneratorPage() {
  const store = useAIGeneratorStore();

  const isFormValid = store.theme && store.tone && store.length;

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-secondary/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-glow-secondary mb-6">
                AI Story Generator
              </h1>
              <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
                Harness the power of artificial intelligence to create immersive ocean mysteries
                that blur the boundaries between science and fiction.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Generator Interface */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Panel */}
            <ScrollReveal delay={0}>
              <Card className="glass-card border-secondary/30">
                <CardHeader>
                  <CardTitle className="font-heading text-glow-secondary flex items-center gap-3">
                    <Brain className="h-6 w-6" />
                    Story Parameters
                  </CardTitle>
                  <CardDescription className="font-body">
                    Configure your story elements to generate a unique ocean mystery.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Theme Selection */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      <Target className="inline h-4 w-4 mr-2" />
                      Story Theme
                    </label>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {presetThemes.map((preset) => (
                        <Button
                          key={preset.name}
                          variant={store.selectedPreset === preset.name ? "default" : "outline"}
                          size="sm"
                          onClick={() => {
                            store.setSelectedPreset(preset.name);
                            store.setTheme(preset.name);
                          }}
                          className={`justify-start h-auto p-3 ${
                            store.selectedPreset === preset.name
                              ? "bg-secondary text-secondary-foreground"
                              : "hover:border-secondary/50"
                          }`}
                        >
                          <div className="text-left">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-lg">{preset.icon}</span>
                              <span className="font-medium">{preset.name}</span>
                            </div>
                            <p className="text-xs opacity-80">{preset.description}</p>
                          </div>
                        </Button>
                      ))}
                    </div>
                    <Input
                      placeholder="Or enter a custom theme..."
                      value={store.theme}
                      onChange={(e) => {
                        store.setTheme(e.target.value);
                        store.setSelectedPreset(null);
                      }}
                      className="bg-card/50 border-border/30 focus:border-secondary/50"
                    />
                  </div>

                  {/* Advanced Options Toggle */}
                  <div className="pt-4 border-t border-border/30">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => store.setShowAdvanced(!store.showAdvanced)}
                      className="w-full justify-between text-muted-foreground hover:text-foreground"
                    >
                      <span className="flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Advanced Options
                      </span>
                      {store.showAdvanced ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  {/* Advanced Options */}
                  {store.showAdvanced && (
                    <>
                      {/* Setting */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                          <Settings className="inline h-4 w-4 mr-2" />
                          Setting
                        </label>
                        <Textarea
                          placeholder="Describe the location, time period, and atmosphere..."
                          value={store.setting}
                          onChange={(e) => store.setSetting(e.target.value)}
                          className="bg-card/50 border-border/30 focus:border-secondary/50 min-h-[80px]"
                        />
                      </div>

                      {/* Characters */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                          <Lightbulb className="inline h-4 w-4 mr-2" />
                          Characters
                        </label>
                        <Textarea
                          placeholder="Describe the main characters, their backgrounds, and motivations..."
                          value={store.characters}
                          onChange={(e) => store.setCharacters(e.target.value)}
                          className="bg-card/50 border-border/30 focus:border-secondary/50 min-h-[80px]"
                        />
                      </div>

                      {/* Conflict */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                          <Zap className="inline h-4 w-4 mr-2" />
                          Central Conflict
                        </label>
                        <Textarea
                          placeholder="What mystery or challenge drives the story?"
                          value={store.conflict}
                          onChange={(e) => store.setConflict(e.target.value)}
                          className="bg-card/50 border-border/30 focus:border-secondary/50 min-h-[80px]"
                        />
                      </div>
                    </>
                  )}

                  {/* Tone */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      <Wand2 className="inline h-4 w-4 mr-2" />
                      Narrative Tone
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {toneOptions.map((tone) => (
                        <Button
                          key={tone}
                          variant={store.tone === tone ? "default" : "outline"}
                          size="sm"
                          onClick={() => store.setTone(tone)}
                          className={`justify-start ${
                            store.tone === tone
                              ? "bg-secondary text-secondary-foreground"
                              : "hover:border-secondary/50"
                          }`}
                        >
                          {tone}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Length */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      <Clock className="inline h-4 w-4 mr-2" />
                      Story Length
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {lengthOptions.map((length) => (
                        <Button
                          key={length}
                          variant={store.length === length ? "default" : "outline"}
                          size="sm"
                          onClick={() => store.setLength(length)}
                          className={`justify-start ${
                            store.length === length
                              ? "bg-secondary text-secondary-foreground"
                              : "hover:border-secondary/50"
                          }`}
                        >
                          {length}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Generate Button */}
                  <div className="pt-6">
                    <Button
                      onClick={store.generateStory}
                      disabled={!isFormValid || store.isGenerating}
                      className="w-full h-12 text-lg bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white ripple-effect"
                    >
                      {store.isGenerating ? (
                        <>
                          <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-5 w-5" />
                          Generate Story
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Output Panel */}
            <ScrollReveal delay={200}>
              <Card className="glass-card border-secondary/30">
                <CardHeader>
                  <CardTitle className="font-heading text-glow-secondary flex items-center gap-3">
                    <Wand2 className="h-6 w-6" />
                    Generated Story
                  </CardTitle>
                  <CardDescription className="font-body">
                    Your AI-crafted ocean mystery will appear here.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {store.isGenerating ? (
                    <div className="space-y-4">
                      <div className="text-center py-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-secondary/20 to-primary/20 flex items-center justify-center">
                          <Brain className="h-8 w-8 text-secondary animate-pulse" />
                        </div>
                        <h3 className="text-lg font-heading text-glow-subtle mb-2">
                          AI is crafting your story...
                        </h3>
                        <p className="text-sm text-muted-foreground font-body">
                          Step {store.generationStep} of 6
                        </p>
                      </div>
                      <div className="space-y-2">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 rounded-full transition-all duration-500 ${
                              i < store.generationStep
                                ? "bg-gradient-to-r from-secondary to-primary"
                                : "bg-muted/30"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : store.generatedStory ? (
                    <div className="space-y-4">
                      <div className="prose prose-sm max-w-none text-foreground">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: store.generatedStory.replace(/\n/g, "<br>"),
                          }}
                        />
                      </div>
                      <div className="flex gap-2 pt-4 border-t border-border/30">
                        <Button size="sm" variant="outline" className="ripple-effect">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline" className="ripple-effect">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={store.resetForm}
                          className="ripple-effect"
                        >
                          <RefreshCw className="mr-2 h-4 w-4" />
                          New Story
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-secondary/20 to-primary/20 flex items-center justify-center">
                        <Wand2 className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="text-lg font-heading text-glow-subtle mb-2">
                        Ready to Generate
                      </h3>
                      <p className="text-sm text-muted-foreground font-body">
                        Fill in the parameters on the left to create your custom ocean mystery.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-secondary/5 to-primary/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-center mb-12 text-glow-subtle">
              AI-Powered Storytelling
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <Card className="glass-card group hover:scale-105 transition-all duration-300 hover:border-secondary/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-secondary/20 to-primary/20 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="font-heading text-glow-secondary">Advanced AI</CardTitle>
                  <CardDescription className="font-body">
                    Powered by cutting-edge language models trained on ocean mysteries and sci-fi
                    literature.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="glass-card group hover:scale-105 transition-all duration-300 hover:border-secondary/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-secondary/20 to-primary/20 flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="font-heading text-glow-secondary">Customizable</CardTitle>
                  <CardDescription className="font-body">
                    Fine-tune every aspect of your story with detailed parameters and preset themes.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="glass-card group hover:scale-105 transition-all duration-300 hover:border-secondary/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-secondary/20 to-primary/20 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="font-heading text-glow-secondary">
                    Instant Results
                  </CardTitle>
                  <CardDescription className="font-body">
                    Generate complete stories in seconds with our optimized AI processing pipeline.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABar
        title="Ready to Create Your Ocean Mystery?"
        description="Join thousands of writers and storytellers who are already using our AI to craft immersive narratives that explore the depths of imagination."
        buttonText="Start Generating"
        buttonHref="/ai-generator"
        variant="ai"
        icon="brain"
      />
    </div>
  );
}
