"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Search, Filter, Calendar, User, Tag } from "lucide-react";

// Mock data for articles
const mockArticles = [
  {
    id: 1,
    title: "The Abyssal Station Discovery",
    slug: "abyssal-station-discovery",
    excerpt:
      "A research facility at the bottom of the Mariana Trench discovers something that shouldn't exist...",
    content: "Dr. Elena Vasquez reports strange readings from the deepest point on Earth...",
    coverUrl: "/images/abyssal-station.jpg",
    author: "Dr. Elena Vasquez",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["Deep Sea", "Research", "Mystery"],
    status: "published" as const,
  },
  {
    id: 2,
    title: "Cosmic Currents in Deep Space",
    slug: "cosmic-currents-deep-space",
    excerpt: "When the International Space Station detects ocean-like patterns in deep space...",
    content: "Astronaut Marcus Chen watches as the Earth's oceans seem to mirror movements...",
    coverUrl: "/images/cosmic-currents.jpg",
    author: "Marcus Chen",
    publishedAt: "2024-01-22",
    readTime: "12 min read",
    tags: ["Space", "Ocean", "Patterns"],
    status: "published" as const,
  },
  {
    id: 3,
    title: "The Leviathan Protocol",
    slug: "leviathan-protocol",
    excerpt:
      "An AI designed to map the ocean floor begins exhibiting behaviors that suggest consciousness...",
    content:
      "The machine's neural networks start creating patterns that resemble ancient star charts...",
    coverUrl: "/images/leviathan-ai.jpg",
    author: "Dr. Sarah Kim",
    publishedAt: "2024-02-01",
    readTime: "15 min read",
    tags: ["AI", "Consciousness", "Ocean Floor"],
    status: "published" as const,
  },
  {
    id: 4,
    title: "Bioluminescent Communication",
    slug: "bioluminescent-communication",
    excerpt:
      "Deep-sea creatures may be communicating through light patterns that mirror cosmic signals...",
    content: "Marine biologists discover that certain species of deep-sea fish...",
    coverUrl: "/images/bioluminescent-fish.jpg",
    author: "Dr. Maria Rodriguez",
    publishedAt: "2024-02-08",
    readTime: "10 min read",
    tags: ["Marine Biology", "Communication", "Bioluminescence"],
    status: "published" as const,
  },
  {
    id: 5,
    title: "The Pressure Paradox",
    slug: "pressure-paradox",
    excerpt:
      "New research suggests that extreme pressure environments might create dimensional anomalies...",
    content: "Scientists at the Hadal Research Station have observed phenomena...",
    coverUrl: "/images/pressure-chamber.jpg",
    author: "Dr. James Wilson",
    publishedAt: "2024-02-15",
    readTime: "7 min read",
    tags: ["Physics", "Pressure", "Anomalies"],
    status: "published" as const,
  },
  {
    id: 6,
    title: "Stellar Tides and Ocean Currents",
    slug: "stellar-tides-ocean-currents",
    excerpt: "The gravitational pull of distant stars may be influencing Earth's ocean currents...",
    content: "Astrophysicists and oceanographers collaborate to study the connection...",
    coverUrl: "/images/stellar-tides.jpg",
    author: "Dr. Alex Chen",
    publishedAt: "2024-02-22",
    readTime: "11 min read",
    tags: ["Astrophysics", "Oceanography", "Gravity"],
    status: "published" as const,
  },
];

const allTags = Array.from(new Set(mockArticles.flatMap((article) => article.tags)));

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "readTime">("newest");

  const filteredArticles = useMemo(() => {
    const filtered = mockArticles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTags =
        selectedTags.length === 0 || selectedTags.every((tag) => article.tags.includes(tag));

      return matchesSearch && matchesTags;
    });

    // Sort articles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case "oldest":
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        case "readTime":
          return parseInt(a.readTime) - parseInt(b.readTime);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedTags, sortBy]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-glow-primary mb-6">
                Ocean Mysteries
              </h1>
              <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
                Dive deep into the stories that connect the infinite depths of space with the
                mysterious abyss of our oceans.
              </p>
            </div>
          </ScrollReveal>

          {/* Search and Filters */}
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search articles, tags, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-lg bg-card/50 border-border/30 focus:border-primary/50"
                />
              </div>

              {/* Tag Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  variant={selectedTags.length === 0 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTags([])}
                  className="ripple-effect"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  All Articles
                </Button>
                {allTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleTag(tag)}
                    className="ripple-effect"
                  >
                    <Tag className="mr-2 h-4 w-4" />
                    {tag}
                  </Button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex justify-center gap-2">
                <Button
                  variant={sortBy === "newest" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("newest")}
                  className="ripple-effect"
                >
                  Newest
                </Button>
                <Button
                  variant={sortBy === "oldest" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("oldest")}
                  className="ripple-effect"
                >
                  Oldest
                </Button>
                <Button
                  variant={sortBy === "readTime" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("readTime")}
                  className="ripple-effect"
                >
                  Quick Reads
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-muted-foreground font-body text-center">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <ScrollReveal key={article.id} delay={index * 100}>
                <Card className="glass-card group hover:scale-105 transition-all duration-300 hover:border-primary/50 overflow-hidden">
                  {/* Cover Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl opacity-30">🌊</div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        {article.readTime}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="font-heading text-glow-secondary group-hover:text-glow-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="font-body line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground font-body">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(article.publishedAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <ScrollReveal>
              <div className="text-center py-16">
                <div className="text-6xl mb-4 opacity-50">🔍</div>
                <h3 className="text-2xl font-heading text-glow-subtle mb-4">No articles found</h3>
                <p className="text-muted-foreground font-body mb-6">
                  Try adjusting your search terms or filters to find what you&apos;re looking for.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTags([]);
                  }}
                  className="ripple-effect"
                >
                  Clear Filters
                </Button>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </div>
  );
}
