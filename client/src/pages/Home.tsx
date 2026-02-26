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
import { Check, ArrowRight, Mail, Phone } from "lucide-react";

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
  className="inline-block"   // keeps button styling intact
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
                src="https://private-us-east-1.manuscdn.com/sessionFile/2mZBRscMsl1GLpjlfyATLB/sandbox/mQx6y2NRXr0FmZjff3Fucx-img-1_1770247264000_na1fn_aGVyby1jb21wYXJpc29u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMm1aQlJzY01zbDFHTHBqbGZ5QVRMQi9zYW5kYm94L21ReDZ5Mk5SWHIwRm1aamZmM0Z1Y3gtaW1nLTFfMTc3MDI0NzI2NDAwMF9uYTFmbl9hR1Z5YnkxamIyMXdZWEpwYzI5dS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rRZSSwnRQ4lSsAB9-p~x6rDUPapnLtQgPnaJllD5dUILp5zmTs8HFkig2i33Cz9GDyCfRpazHQXxWbQuk4PE0fB7q6PwjTjY4FEQJ5yTiQHuqXx0S~-5m157o8LbG3j~~~zs45TEBQSlUEgxtNK9vIQSlx6dFGPTCY2tcaCVekdHIzWxakneK5viJNJJx2Ozbxmu5R8~9cHKkQYUR2bCupnNtZZPB1eTxqADiH1y2Os59QvoJoucwCjUDx-Erleao3VlGaJV0kR2JjtwrKLeJI0GnsbUC29~Oh0cvmqc~hOnN8jlSe16eOODbP7DRCq~le~fVDlmRU8z7Bxnu5cQzg__"
                alt="Before and after comparison of Google Business Profile with and without website"
                className="brutalist-border w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Gap Section */}
      <section className="py-20 md:py-32 bg-muted relative">
        <div className="absolute top-0 left-8 section-number">02</div>
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            You're Already 80% There
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="brutalist-card p-8 bg-card text-card-foreground">
              <div className="mb-4">
                <Check className="h-12 w-12 text-accent" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold mb-4">What You've Done</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <span>GBP claimed</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <span>Photos added</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <span>Reviews earned</span>
                </li>
              </ul>
            </Card>

            <Card className="brutalist-card p-8 bg-accent/10 border-accent text-card-foreground">
              <div className="mb-4">
                <ArrowRight className="h-12 w-12 text-accent" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold mb-4">What's Missing</h3>
              <p className="text-lg">
                Website for researching customers who want to learn more before calling
              </p>
            </Card>

            <Card className="brutalist-card p-8 bg-card text-card-foreground">
              <div className="mb-4">
                <div className="h-12 w-12 rounded-full bg-destructive/20 flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">What Happens</h3>
              <p className="text-lg">
                Jobs go to competitors with complete online presence
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute top-0 right-8 section-number">03</div>
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Built for Plumbers, Electricians, and Local Service Pros
          </h2>
          <div className="flex justify-center gap-6 mb-16 flex-wrap">
            <img 
              src="https://private-us-east-1.manuscdn.com/sessionFile/2mZBRscMsl1GLpjlfyATLB/sandbox/mQx6y2NRXr0FmZjff3Fucx-img-3_1770247257000_na1fn_c2VydmljZXMtaWNvbi1wbHVtYmluZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMm1aQlJzY01zbDFHTHBqbGZ5QVRMQi9zYW5kYm94L21ReDZ5Mk5SWHIwRm1aamZmM0Z1Y3gtaW1nLTNfMTc3MDI0NzI1NzAwMF9uYTFmbl9jMlZ5ZG1salpYTXRhV052Ymkxd2JIVnRZbWx1WncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=c8s9mz6Ty53dYWz5OvSOGlu4lBPTSzvAfYVgEAEnVueEIsJXlx9tTQIzUJ4SGxlJ-tMKrCi3U2XyELrnFy7KCZJ0VgPSEI9jDh~aWh4rtx3YtwdxDIbgh--qWL4CrnCOOoDQs64WReyYMjlyKyFFmok8l7WR6M1Lvw7WdVxvUEBM-n6thf7lbAIIX-A6QC3T2wPSAP7uwflhD6q6cgI7J3MU1dRRNtMy1E8sMfMtYNVkMyRnuB5Su4htwVRBfMxjLf-aaHp0boE59zOvQX9NL9y-yv9~gdj2sZ038t4lvllT3gLYrbAOXOteIO18ORD-IdHQG40mfSrNViUawmph5g__"
              alt="Plumbing icon"
              className="h-16 w-16"
            />
            <img 
              src="https://private-us-east-1.manuscdn.com/sessionFile/2mZBRscMsl1GLpjlfyATLB/sandbox/mQx6y2NRXr0FmZjff3Fucx-img-4_1770247263000_na1fn_c2VydmljZXMtaWNvbi1lbGVjdHJpY2Fs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMm1aQlJzY01zbDFHTHBqbGZ5QVRMQi9zYW5kYm94L21ReDZ5Mk5SWHIwRm1aamZmM0Z1Y3gtaW1nLTRfMTc3MDI0NzI2MzAwMF9uYTFmbl9jMlZ5ZG1salpYTXRhV052YmkxbGJHVmpkSEpwWTJGcy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=po-0F4K60euBDHmWX4fmf~y69HdL3Xcl8Rdf4iTPFR4YqZ2UQw7-~UiOmC3c97zR5e6DId5fDpf7cAU1uLsa5kWEGIvSO~f~~ZZjND8wD~ZXsoia9vt1W4tA9yavBRn-Xjo4mUbABKyT5-22XjGOy5vt4R-hMCpoKqqJSYWv7cZdhjAWOEBiR0Re3FNPwDOE7ADBBZCpOSR9py9p4afJ2-9vEre0x3Ik5WvV62fl4EZ98r6S91cxoQ5hp9myc-u~~FxNQoDuH2QGVd37apbUG8NXPvnoiukuSmyNogQRvOYHoHy39dS7-ZRB7yrFlXJJNoP5fC~A2W9f93H7hXZYmA__"
              alt="Electrical icon"
              className="h-16 w-16"
            />
            <img 
              src="https://private-us-east-1.manuscdn.com/sessionFile/2mZBRscMsl1GLpjlfyATLB/sandbox/mQx6y2NRXr0FmZjff3Fucx-img-5_1770247259000_na1fn_c2VydmljZXMtaWNvbi1odmFj.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMm1aQlJzY01zbDFHTHBqbGZ5QVRMQi9zYW5kYm94L21ReDZ5Mk5SWHIwRm1aamZmM0Z1Y3gtaW1nLTVfMTc3MDI0NzI1OTAwMF9uYTFmbl9jMlZ5ZG1salpYTXRhV052Ymkxb2RtRmoucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aECZt87b8ZZozo9~J8kvvhO5MEKd4efz8yb4zRDxMsQ4CeIdjlUYWXM0r4HzEYCKreE9BZRlQLrruH6XlHUnmP-MYa8dO8CNGC13DkGQDttL~3pI8vbi1KB1i5BzCLDGl-VPljhJ8UoFLx3lsMBKDaFANIdB2f2OYHWiIAEb-rmBfOZP-c~jLHmNKZQnEuoRHkYT-UzdwhfZBosIaBWAAD70gWn8PSzfiXWuBjQfLuJvlJtNK5bRx-KHSMDtXQFqMtvCQTq0X4vc5XUeaDhrEM6NjdrE6O5TwMaRKjWoSbMXfqHeABXxRBe6zL4p~9H05HYRxUcXmetBVOW0ZqggrQ__"
              alt="HVAC icon"
              className="h-16 w-16"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Took 20 minutes on the phone, had my site a week later. Easiest business decision I've made.",
                name: "Mike",
                business: "Denver Plumbing",
                rotation: "rotate-1"
              },
              {
                quote: "No tech headaches. They handled everything. I just showed up to approve it.",
                name: "Sarah",
                business: "Bright Spark Electric",
                rotation: "-rotate-1"
              },
              {
                quote: "Finally have a website that looks professional. Customers mention it all the time now.",
                name: "Tom",
                business: "Cool Comfort HVAC",
                rotation: "rotate-2"
              }
            ].map((testimonial, index) => (
              <Card 
                key={index}
                className={`brutalist-card p-8 bg-card text-card-foreground ${testimonial.rotation} hover:rotate-0 transition-transform duration-200`}
              >
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t-2 border-border pt-4">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.business}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-muted relative">
        <div className="absolute top-0 left-8 section-number">04</div>
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Three Steps. One Week. Done.
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "15-minute call",
                  description: "We review your services and Google listing"
                },
                {
                  step: "02",
                  title: "Simple payment",
                  description: "One-time fee, domain included"
                },
                {
                  step: "03",
                  title: "5-7 business days",
                  description: "Site delivered, you own everything"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="brutalist-border bg-primary text-primary-foreground w-20 h-20 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold">{item.step}</span>
                  </div>
                  <div className="flex-1 brutalist-card p-6 bg-card text-card-foreground">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-lg text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              </div>
              <div className="border-t-2 border-border pt-6">
                <p className="text-sm text-muted-foreground mb-2">Ongoing:</p>
                <p className="text-lg">~$15/month for hosting (you manage directly)</p>
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

      {/* Examples Section */}
      <section className="py-20 md:py-32 bg-muted relative">
        <div className="absolute top-0 left-8 section-number">06</div>
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            See What You're Getting
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { industry: "Plumbing", url: "#" },
              { industry: "Electrical", url: "#" },
              { industry: "HVAC", url: "#" }
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

      {/* FAQ Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute top-0 right-8 section-number">07</div>
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Questions We Hear Most
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Do I own the website?",
                answer: "Yes, full ownership transfer. Domain, hosting, everything."
              },
              {
                question: "What if I want changes later?",
                answer: "You can do it yourself or hire anyone. No lock-in."
              },
              {
                question: "How long does this take?",
                answer: "5-7 business days after setup call."
              },
              {
                question: "What if I'm not tech-savvy?",
                answer: "That's the point—we handle everything."
              },
              {
                question: "What about SEO and Google rankings?",
                answer: "Basic on-page SEO included. Your site will be indexed and optimized for local search."
              }
            ].map((faq, index) => (
              <Card key={index} className="brutalist-card p-8 bg-card text-card-foreground">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-lg text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative">
        <div className="absolute top-0 left-8 section-number text-primary-foreground/20">08</div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Complete Your Online Presence?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              size="lg"
              className="brutalist-border bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-150 text-lg px-8 py-6"
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule Free Demo Call
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="brutalist-border bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-150 text-lg px-8 py-6"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Questions First
            </Button>
          </div>
          <p className="text-lg opacity-90">
            No pressure. No sales pitch. Just a conversation about what makes sense for your business.
          </p>
        </div>
      </section>

      {/* Footer */}
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
                <a href="mailto:hello@example.com" className="flex items-center gap-2 text-lg hover:text-accent transition-colors duration-150">
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
