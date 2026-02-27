/**
 * Neo-Brutalism with Soft Touch Design Philosophy
 * - Bold typography with asymmetric layouts
 * - Thick 3-4px borders on cards and buttons
 * - Navy (#1e3a5f), Gray (#6b7280), Muted Green (#10b981), Off-white (#f9fafb)
 * - Minimal, purposeful animations (150-200ms)
 * - Oversized section numbers as visual anchors
 */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Mail, Phone, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/2mZBRscMsl1GLpjlfyATLB/sandbox/mQx6y2NRXr0FmZjff3Fucx-img-2_1770247265000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMm1aQlJzY01zbDFHTHBqbGZ5QVRMQi9zYW5kYm94L21ReDZ5Mk5SWHIwRm1aamZmM0Z1Y3gtaW1nLTJfMTc3MDI0NzI2NTAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rkPg~GDDFFOq7KRs-mpW6yJkL21wnRCDE7fzEFcDYlz-tBI4C-WZ73lq2S64yKaxms5h8d2uzKK9ikg6LwVcbawpMo3XVEVL76xlUtX4rxkIEOfdF1wPP7YGwxXMZkbCH4CvxoFNjuimWHBlAwUrX8ea2y5n7jSZmBCbD5vuZp5wzAwloxjhr9rjzXTD8-QDNpnRcLk4NCztNXMgTLG~LReZfRgw41pgP~JhR-VJoRLbCA43hU~1yqn901fLME4BJnTDdHSn~jhmsCgNWCcqbLi4cB1yJJaDLi3IPEaIigtMCfqljPDyL24NnmTai6sHA4p3JUy9dXjTwAaOp6jCnA__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Complete Your Google Listing With a Simple Website
              </h1>
              <p className="text-xl md:text-2xl text-secondary-foreground mb-8 leading-relaxed">
                One-time setup. You own it. No contracts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="brutalist-border bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-150 text-lg px-8 py-6"
                >
                  See How It Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <a
                  href="https://flowrightplum-hdsn4bdf.manus.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="brutalist-border bg-transparent text-foreground hover:bg-muted transition-colors duration-150 text-lg px-8 py-6"
                  >
                    View Example Sites
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/2mZBRscMsl1GLpjlfyATLB/sandbox/mQx6y2NRXr0FmZjff3Fucx-img-1_1770247264000_na1fn_aGVyby1jb21wYXJpc29u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMm1aQlJzY01zbDFHTHBqbGZ5QVRMQi9zYW5kYm94L21ReDZ5Mk5SWHIwRm1aamZmM0Z1Y3gtaW1nLTEfMTc3MDI0NzI2NDAwMF9uYTFmbl9hR1Z5YnkxamIyMXdZWEpwYzI5dS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rRZSSwnRQ4lSsAB9-p~x6rDUPapnLtQgPnaJllD5dUILp5zmTs8HFkig2i33Cz9GDyCfRpazHQXxWbQuk4PE0fB7q6PwjTjY4FEQJ5yTiQHuqXx0S~-5m157o8LbG3j~~~zs45TEBQSlUEgxtNK9vIQSlx6dFGPTCY2tcaCVekdHIzWxakneK5viJNJJx2Ozbxmu5R8~9cHKkQYUR2bCupnNtZZPB1eTxqADiH1y2Os59QvoJoucwCjUDx-Erleao3VlGaJV0kR2JjtwrKLeJI0GnsbUC29~Oh0cvmqc~hOnN8jlSe16eOODbP7DRCq~le~fVDlmRU8z7Bxnu5cQzg__"
                alt="Before and after comparison of Google Business Profile with and without website"
                className="brutalist-border w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ... (The Gap Section, Social Proof Section, How It Works Section remain unchanged) ... */}

      {/* Pricing Section - Updated with FREE HOSTING */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute top-0 right-8 section-number">05</div>
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            No Hidden Fees. No Surprises.
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="brutalist-card p-12 bg-card text-card-foreground text-center">
              <div className="mb-8">
                <div className="text-6xl font-bold mb-2">$499</div>
                <div className="text-xl text-muted-foreground">one-time</div>
              </div>
              <div className="space-y-4 mb-8 text-left">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-lg">Domain registration</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-lg">Website build</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-lg">GBP optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-lg">Ownership transfer</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-lg">Free hosting included (small charge only if you need future updates)</span>
                </div>
              </div>
              <div className="border-t-2 border-border pt-6">
                <p className="text-sm text-muted-foreground mb-2">Ongoing:</p>
                <p className="text-lg">Free hosting – pay only ~$15/month if you choose premium hosting later or need paid updates/support</p>
              </div>
              <div className="mt-8 p-6 bg-accent/10 border-2 border-accent rounded-lg">
                <p className="text-lg font-medium">
                  You own your domain and website. If we disappeared tomorrow, you'd still have everything.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Examples Section - Added 3 more demo websites */}
      <section className="py-20 md:py-32 bg-muted relative">
        <div className="absolute top-0 left-8 section-number">06</div>
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            See What You're Getting
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { industry: "Plumbing", url: "https://example.com/demo/plumbing" },
              { industry: "Electrical", url: "https://example.com/demo/electrical" },
              { industry: "HVAC", url: "https://example.com/demo/hvac" },
              { industry: "General Plumbing Pro", url: "https://example.com/demo/plumbing-pro" }, // Extra 1
              { industry: "Local Electric Services", url: "https://example.com/demo/electric-services" }, // Extra 2
              { industry: "Home Comfort HVAC", url: "https://example.com/demo/home-hvac" }, // Extra 3
            ].map((example, index) => (
              <a
                key={index}
                href={example.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="brutalist-card p-6 bg-card text-card-foreground hover:shadow-lg transition-shadow duration-200">
                  <div className="aspect-video bg-muted mb-4 flex items-center justify-center">
                    <span className="text-4xl">🌐</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">{example.industry}</span>
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-150" />
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ... (FAQ Section remains unchanged) ... */}

      {/* Final CTA Section - Updated wording and added Calendly + mailto */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative">
        <div className="absolute top-0 left-8 section-number text-primary-foreground/20">08</div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Complete Your Online Presence?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="https://calendly.com/contacts-heartlandservicegroup/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="brutalist-border bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-150 text-lg px-8 py-6"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule a free video meeting
              </Button>
            </a>
            <a
              href="mailto:contacts@heartlandservicegroup.com"
              className="inline-block"
            >
              <Button
                size="lg"
                variant="outline"
                className="brutalist-border bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-150 text-lg px-8 py-6"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email me first
              </Button>
            </a>
          </div>
          <p className="text-lg opacity-90">
            No pressure. No sales pitch. Just a conversation about what makes sense for your business.
          </p>
        </div>
      </section>

      {/* Footer - Updated email link */}
      <footer className="py-12 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Built by Real People</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Not a corporation. Just experienced web professionals who understand local businesses.
              </p>
              <div className="flex gap-4">
                <a href="tel:555-123-4567" className="flex items-center gap-2 text-lg hover:text-accent transition-colors duration-150">
                  <Phone className="h-5 w-5" />
                  555-555-5555
                </a>
                <a href="mailto:contacts@heartlandservicegroup.com" className="flex items-center gap-2 text-lg hover:text-accent transition-colors duration-150">
                  <Mail className="h-5 w-5" />
                  contacts@heartlandservicegroup.com
                </a>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">
                © 2026 Durable.co. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
