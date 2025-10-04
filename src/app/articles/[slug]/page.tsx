"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CTABar } from "@/components/cta-bar";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import Link from "next/link";

// Mock article data - in a real app, this would come from a CMS or API
const mockArticle = {
  id: 1,
  title: "The Abyssal Station Discovery",
  slug: "abyssal-station-discovery",
  excerpt:
    "A research facility at the bottom of the Mariana Trench discovers something that shouldn't exist...",
  content: `
    <p>Dr. Elena Vasquez reports strange readings from the deepest point on Earth. The pressure readings don't match any known geological formations, suggesting something unprecedented.</p>
    
    <p>The research team at the Hadal Research Station has been monitoring the Mariana Trench for over three years, but nothing could have prepared them for what they discovered last month.</p>
    
    <blockquote class="pull-quote">
      "The readings we're seeing don't correspond to any known geological phenomena. It's as if the ocean floor itself is... breathing."
      <cite>— Dr. Elena Vasquez, Lead Oceanographer</cite>
    </blockquote>
    
    <p>The discovery began with routine pressure monitoring equipment that had been deployed at a depth of 10,984 meters. The instruments were designed to track tectonic activity and water pressure variations, but they began registering patterns that defied explanation.</p>
    
    <h2>The Anomalous Readings</h2>
    
    <p>What makes this discovery particularly intriguing is the rhythmic nature of the pressure changes. Unlike typical geological activity, which tends to be irregular and chaotic, these readings show a consistent pattern that repeats every 47.3 hours.</p>
    
    <p>Dr. Sarah Kim, a marine geophysicist who has been analyzing the data, explains: "The precision of these cycles is unlike anything we've seen in deep-sea geology. It's almost as if there's some kind of... intelligence behind it."</p>
    
    <blockquote class="pull-quote">
      "We're not just dealing with geological phenomena here. We're witnessing something that challenges our fundamental understanding of the deep ocean."
      <cite>— Dr. Sarah Kim, Marine Geophysicist</cite>
    </blockquote>
    
    <h2>Implications for Deep-Sea Research</h2>
    
    <p>The discovery has profound implications for our understanding of the deep ocean. If these readings are indeed indicative of some form of biological or geological intelligence, it could revolutionize our approach to deep-sea exploration.</p>
    
    <p>The research team is now planning a more extensive investigation, including the deployment of specialized equipment designed to capture high-resolution data of these mysterious cycles.</p>
    
    <h2>Connections to Space Exploration</h2>
    
    <p>Interestingly, similar patterns have been observed by the International Space Station when monitoring Earth's oceans from orbit. Astronaut Marcus Chen, who has been tracking these observations, notes: "There's something almost cosmic about the way these patterns emerge and disappear."</p>
    
    <blockquote class="pull-quote">
      "The connection between what we're seeing in the deepest parts of our oceans and the patterns observed from space suggests a level of interconnectedness that we're only beginning to understand."
      <cite>— Marcus Chen, ISS Astronaut</cite>
    </blockquote>
    
    <p>This discovery opens up new possibilities for understanding the relationship between Earth's oceans and the cosmic environment. The rhythmic patterns observed in the Mariana Trench may be part of a larger, more complex system that connects our planet to the broader universe.</p>
    
    <h2>Future Research Directions</h2>
    
    <p>The research team is now collaborating with international space agencies to develop a comprehensive monitoring system that can track these patterns both from the ocean floor and from space. This unprecedented collaboration could lead to breakthrough discoveries about the fundamental nature of our planet.</p>
    
    <p>As Dr. Vasquez concludes: "We're standing at the threshold of a new understanding of our world. The deep ocean may hold secrets that will change everything we think we know about life, consciousness, and our place in the universe."</p>
  `,
  coverUrl: "/images/abyssal-station.jpg",
  author: "Dr. Elena Vasquez",
  publishedAt: "2024-01-15",
  readTime: "8 min read",
  tags: ["Deep Sea", "Research", "Mystery"],
  status: "published" as const,
};

export default function ArticlePage() {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", updateReadingProgress);
    return () => window.removeEventListener("scroll", updateReadingProgress);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-30 h-1 bg-background/20">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Back Button */}
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <Link href="/articles">
              <Button variant="outline" className="ripple-effect">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <ScrollReveal>
          <header className="mb-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {mockArticle.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-glow-primary mb-6 leading-tight">
              {mockArticle.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground font-body mb-8 leading-relaxed">
              {mockArticle.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-body mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {mockArticle.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(mockArticle.publishedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {mockArticle.readTime}
              </div>
              <Button variant="outline" size="sm" className="ripple-effect">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </header>
        </ScrollReveal>

        {/* Cover Image Placeholder */}
        <ScrollReveal delay={200}>
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl opacity-30">🌊</div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm opacity-80">Deep-sea research station at 10,984m depth</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Article Content */}
        <ScrollReveal delay={400}>
          <div
            className="prose prose-lg max-w-none font-body text-foreground"
            dangerouslySetInnerHTML={{ __html: mockArticle.content }}
            style={{
              lineHeight: "1.8",
            }}
          />
        </ScrollReveal>
      </article>

      {/* CTA Bar */}
      <CTABar
        title="Dive Deeper into the Mystery"
        description="Explore more stories that connect the cosmic void with the ocean's depths. Join our community of researchers, explorers, and storytellers."
        buttonText="Discover More Stories"
        buttonHref="/articles"
        variant="ai"
        icon="brain"
      />

      {/* Related Articles CTA */}
      <CTABar
        title="Continue Your Journey"
        description="The mysteries of the deep ocean are just beginning to unfold. Discover more groundbreaking research and cosmic connections."
        buttonText="Explore All Articles"
        buttonHref="/articles"
        variant="secondary"
        icon="arrow"
        className="border-t-0"
      />
    </div>
  );
}
