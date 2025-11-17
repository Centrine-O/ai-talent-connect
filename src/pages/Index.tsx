import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  CheckCircle2, 
  Users, 
  Zap, 
  Target, 
  TrendingUp, 
  Award,
  Database,
  MessageSquare,
  Globe,
  FileText,
  Shield,
  Briefcase,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your interest! We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">ModelReady Workforce</div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">About</a>
            <a href="#clients" className="text-foreground hover:text-accent transition-colors">Clients</a>
            <Button variant="hero" size="default" asChild>
              <a href="#contact">Partner With Us</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="AI Workforce Network" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Skilled AI talent. Delivered fast.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              We train and deploy high-quality specialists for AI data, annotation, and model development tasks.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  Partner With Us <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to bridge the gap between AI companies and reliable, well-trained human talent. 
              We exist to prepare individuals with the skills needed for modern AI tasks and to provide businesses 
              with scalable, efficient, and high-quality workforce solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">About Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-border bg-card hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Specialized Training</h3>
                <p className="text-muted-foreground">
                  We are a workforce development and outsourcing company specializing in AI data tasks. 
                  We train individuals in annotation, transcription, translation, evaluation, content moderation, 
                  and other essential AI model-training activities.
                </p>
              </Card>
              
              <Card className="p-8 border-border bg-card hover:shadow-lg transition-shadow">
                <Award className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Quality Standards</h3>
                <p className="text-muted-foreground">
                  Our team is made up of skilled, carefully assessed workers who meet global AI quality standards. 
                  Each specialist undergoes rigorous evaluation to ensure excellence in their domain.
                </p>
              </Card>
              
              <Card className="p-8 border-border bg-card hover:shadow-lg transition-shadow">
                <Zap className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Ready-to-Deploy</h3>
                <p className="text-muted-foreground">
                  Instead of companies spending time and resources hiring and training new teams, we provide a ready, 
                  reliable workforce that can scale on demand.
                </p>
              </Card>
              
              <Card className="p-8 border-border bg-card hover:shadow-lg transition-shadow">
                <Target className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Industry Focus</h3>
                <p className="text-muted-foreground">
                  We serve companies across AI, machine learning, and digital operations by supplying trained human 
                  intelligence to power smarter, more efficient models.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors">
                <Database className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">AI Data Labeling</h3>
                <p className="text-sm text-muted-foreground">Precise annotation and classification for machine learning datasets</p>
              </div>
              
              <div className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors">
                <MessageSquare className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Transcription & Translation</h3>
                <p className="text-sm text-muted-foreground">Accurate audio-to-text and multilingual translation services</p>
              </div>
              
              <div className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors">
                <Shield className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Content Moderation</h3>
                <p className="text-sm text-muted-foreground">Ensuring platform safety through expert content review</p>
              </div>
              
              <div className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors">
                <FileText className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Multi-Modal Annotation</h3>
                <p className="text-sm text-muted-foreground">Expert labeling for image, text, and audio data</p>
              </div>
              
              <div className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors">
                <CheckCircle2 className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Evaluation & QA</h3>
                <p className="text-sm text-muted-foreground">Comprehensive quality review and performance assessment</p>
              </div>
              
              <div className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors">
                <Briefcase className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Workforce Outsourcing</h3>
                <p className="text-sm text-muted-foreground">Scalable task teams for long-term AI projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Partner With Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Fast Access to Talent</h3>
                <p className="text-muted-foreground">Pre-trained specialists ready to deploy immediately</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">High Accuracy</h3>
                <p className="text-muted-foreground">Meet global quality standards with expert workers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Cost Efficient</h3>
                <p className="text-muted-foreground">Save time and resources on hiring and training</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Scalable Workforce</h3>
                <p className="text-muted-foreground">Expand your team on demand without overhead</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Reliable Performance</h3>
                <p className="text-muted-foreground">Consistent delivery with proven track record</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Flexible Deployment</h3>
                <p className="text-muted-foreground">Adapt quickly to changing project requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workforce Pipeline Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Ready-to-Deploy Talent Pool</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We maintain a continuously updated pool of pre-trained, assessed individuals ready to deploy immediately. 
              Our comprehensive training programs ensure each specialist is equipped with the latest tools and methodologies 
              in AI data work, allowing you to start projects without delay.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">500+ Active Specialists</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">24/7 Availability</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">Global Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Clients Section */}
      <section id="clients" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Trusted by Industry Leaders</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              We work with leading AI companies and data platforms worldwide
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['RWS', 'Scale AI', 'Appen', 'TELUS AI', 'Surge AI', 'Remotasks'].map((client) => (
                <div key={client} className="flex items-center justify-center p-6 bg-background rounded-lg border border-border">
                  <span className="text-xl font-semibold text-muted-foreground">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Get Started Today</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Ready to access skilled AI talent? Let's discuss your project needs.
            </p>
            
            <Card className="p-8 border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-32"
                    placeholder="Tell us about your project needs..."
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ModelReady Workforce</h3>
              <p className="text-white/80">
                Bridging the gap between AI companies and skilled human talent.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#clients" className="text-white/80 hover:text-white transition-colors">Clients</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-white/80">
                <li>Email: contact@modelready.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
            <p>&copy; 2024 ModelReady Workforce. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
