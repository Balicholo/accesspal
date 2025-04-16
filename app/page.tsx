"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ChevronDown, 
  Cable, 
  DollarSign,
  MousePointerClick,
  MonitorCog,
  Speech, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  Zap,
  Globe,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-[url('https://i.ibb.co/HpdjJJZD/blind-man-reading-braille.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex-1 flex flex-col items-center justify-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white">AccessPal</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
              Empowering the visually impaired and the tech illitarate navigate the digital world through accessible technology.
            </p>
            <a href="#features">
            <Button size="lg" variant="secondary" className="text-primary hover:text-primary/90">
              Get Started
            </Button>
            </a>
            
          </div>
        </div>
        <div className="relative z-10 mb-8">
          <ChevronDown className="w-6 sm:w-8 h-6 sm:h-8 text-white animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-muted/50" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-teal-900">About Us</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
            AccessPal is an inclusive tech platform designed to empower the visually impaired, tech-illiterate, and other underserved individuals across Africa. Built for accessibility, affordability, and real-life usability, AccessPal offers voice-powered navigation, local language support, and offline capabilities—making it easier for everyone to connect, communicate, and thrive in the digital world. Our mission is simple: leave no one behind in the tech revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-background" id="features">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-teal-900">Our Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Speech className="w-10 sm:w-12 h-10 sm:h-12 mb-4 text-primary" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-teal-900">Local Language</h3>
              <p className="text-muted-foreground">
              AccessPal offers local language support to ensure users can interact with the app in the language they understand best
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Cable className="w-10 sm:w-12 h-10 sm:h-12 mb-4 text-primary" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-teal-900">Offline functionalities</h3>
              <p className="text-muted-foreground">
              AccessPal works offline, enabling voice commands and key features without internet—ideal for rural and low-connectivity areas.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MousePointerClick className="w-10 sm:w-12 h-10 sm:h-12 mb-4 text-primary" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-teal-900">Device Navigation</h3>
              <p className="text-muted-foreground">
              AccessPal enables easy device navigation through voice commands for visually impaired and tech-illiterate users.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <DollarSign className="w-10 sm:w-12 h-10 sm:h-12 mb-4 text-primary" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-teal-900">Affordability</h3>
              <p className="text-muted-foreground">
              AccessPal is built with affordability at its core—offering essential features for free and premium services at just $5/month to ensure accessibility for all.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MonitorCog className="w-10 sm:w-12 h-10 sm:h-12 mb-4 text-primary" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-teal-900">Compatability and scalability</h3>
              <p className="text-muted-foreground">
              AccessPal is designed for compatibility across a wide range of Android devices and optimized for both online and offline use. Its scalable architecture ensures smooth expansion across regions, starting from Zimbabwe to the rest of Africa.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <DollarSign className="w-10 sm:w-12 h-10 sm:h-12 mb-4 text-primary" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-teal-900">Financial Transactions</h3>
              <p className="text-muted-foreground">
              AccessPal enables secure, voice-guided financial transactions—including money transfers, airtime purchases, and balance inquiries—through seamless integration with popular mobile money platforms like EcoCash, M-Pesa, and PayPal
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Screenshots Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-teal-900">Powerful Tools Intergrated</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://i.ibb.co/bMsvVzB4/person-reading-cell-phone-messages.jpg"
                  alt="phone"
                  className="w-full h-auto object-cover max-w-full"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2 text-teal-900">Smart Environment Recognition</h3>
              <p className="text-muted-foreground">Smart Environment Recognition in AccessPal uses your device's camera and AI to describe surroundings, identify objects, and read signs or text aloud—helping users safely navigate real-world environments with confidence and independence</p>
            </div>
            <div className="relative overflow-hidden">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://i.ibb.co/Cp4gt2vP/closeup-shot-aman-wearing-turtleneck-hat-holding-his-phone.jpg"
                  alt="Sales Analytics"
                  className="w-full h-auto object-cover max-w-full"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2 text-teal-900">Multisensory Feedback</h3>
              <p className="text-muted-foreground">Multisensory Feedback in AccessPal enhances user interaction by combining voice, vibration, and sound cues—ensuring tech-illiterate and visually impaired users receive clear, intuitive guidance through every action on their device.</p>
            </div>
            <div className="relative overflow-hidden">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070"
                  alt="Financial Management"
                  className="w-full h-auto object-cover max-w-full"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2 text-teal-900">Financial Transactions</h3>
              <p className="text-muted-foreground">AccessPal enables secure, voice-guided financial transactions—allowing users to send money, check balances, and pay bills effortlessly, even without prior tech experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-900">Impactful testimonials for AccessPal</h2>
          <Carousel className="w-full max-w-full mx-auto overflow-hidden">
            <CarouselContent>
              <CarouselItem>
                <div className="text-center px-8">
                  <img
                    src="https://i.ibb.co/XkvJDv5p/sided-view-woman-wearing-sunglasses.jpg"
                    alt="Tendai M."
                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                  />
                  <p className="text-xl italic mb-6">"AccessPal gave me back my independence. I can now navigate my phone and send money to my family without anyone's help. It speaks my local language, and that's a game-changer!"</p>
                  <h4 className="font-semibold text-teal-900">Tendai M</h4>
                  <p className="text-muted-foreground">Zimbabwe council of the Blind</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="text-center px-8">
                  <img
                    src="https://i.ibb.co/KpFGqYZ5/medium-shot-senior-black-woman-posing.jpg"
                    alt="Mrs. Eunice D."
                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                  />
                  <p className="text-xl italic mb-6">"In our rural community, many people struggle with smartphones. AccessPal has been a bridge—especially for elders and the visually impaired. It's inclusive, affordable, and built for us"</p>
                  <h4 className="font-semibold text-teal-900">Mrs. Eunice D.</h4>
                  <p className="text-muted-foreground">Community Health Worker, Mutare</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="text-center px-8">
                  <img
                    src="https://i.ibb.co/wZjpKByN/shallow-focus-shot-young-black-male-grey-wall.jpg"
                    alt="Emma Rodriguez"
                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                  />
                  <p className="text-xl italic mb-6">"My father couldn't use a phone before AccessPal. Now, with just his voice, he's sending voice messages, checking news, and even paying bills. It's made life easier for our whole family"</p>
                  <h4 className="font-semibold text-teal-900">Brighton S</h4>
                  <p className="text-muted-foreground">Chitungwiza</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-900">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Free</h3>
              <p className="text-muted-foreground mb-6">For everyone, everyday accessibility</p>
              <div className="text-4xl font-bold mb-6 text-teal-900">$0<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Basic Voice Navigation</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Offline Mode</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Simple Financial Transactions</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Multisensory Feedback</li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </Card>
            <Card className="p-8 border-2 border-teal-900">
              <h3 className="text-2xl font-semibold mb-2">Premium</h3>
              <p className="text-muted-foreground mb-6">For enhanced experience & localization</p>
              <div className="text-4xl font-bold mb-6 text-teal-900">$5<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-4 mb-8">
              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> All Free Features</li>
              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Smart Environment Recognition</li>
              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Local Language Support</li>
              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Personalized Assistance</li>
              </ul>
              <Button className="w-full">Go Premium</Button>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-6">Custom solutions for organizations</p>
              <div className="text-4xl font-bold mb-6 text-teal-900">Custom</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> All Premium Features</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Custom Integrations & Reporting</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Dedicated Support & Training</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> icensing for NGOs, Banks & Schools</li>
              </ul>
              <a href="mailto:wisdombalicholo@gmail.com"><Button variant="outline" className="w-full">Contact Sales</Button></a>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-900">Why Choose AccessPal</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary text-teal-900" />
              <h3 className="text-xl font-semibold mb-2 text-teal-900">Financial Empowerment</h3>
              <p className="text-muted-foreground">Perform simple transactions without stress</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary text-teal-900" />
              <h3 className="text-xl font-semibold mb-2 text-teal-900">Secure</h3>
              <p className="text-muted-foreground">We prioritize user privacy and ensure that transactions are encrypted</p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-primary text-teal-900" />
              <h3 className="text-xl font-semibold mb-2 text-teal-900">Offline Functionality</h3>
              <p className="text-muted-foreground">Full control without needing constant internet access.</p>
            </Card>
            <Card className="p-6 text-center">
              <Speech className="w-12 h-12 mx-auto mb-4 text-primary text-teal-900" />
              <h3 className="text-xl font-semibold mb-2 text-teal-900">Local Language Support</h3>
              <p className="text-muted-foreground">Navigate confidently in your native tongue.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-900">Trusted Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg" alt="Mailchimp" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg" alt="QuickBooks" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg" alt="PayPal" className="h-8" />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-primary-foreground bg-teal-900">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8">Get the latest updates and exclusive tips directly in your inbox.</p>
            <div className="flex flex-wrap gap-4 max-w-md mx-auto">
              <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-foreground"
              />
                <a href="mailto:wisdombalicholo@gmail.com"><Button variant="secondary" className="w-full sm:w-auto bg-teal-700 hover:bg-teal-800 text-white">Subscribe</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-teal-900">Be Part of the Change — Try AccessPal Now</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Simple. Local. Powerful. Start your journey to digital independence
            </p>
            <Button size="lg" className="px-8">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-20 bg-muted/50 bg-[url('https://i.ibb.co/LXZpgy06/close-up-blind-man-holding-smartphone.jpg')] bg-cover bg-center relative"
        id="mission"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Our Mission</h2>
        <p className="text-lg text-white/90 mb-6">
        To empower visually impaired, tech-illiterate, and differently-abled individuals across Africa by providing accessible, affordable, and inclusive digital tools that break down barriers and promote independence.
        </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-900">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground"><a href="mailto:wisdombalicholo@gmail.com">wisdombalicholo@gmail.com</a></p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground"><a href="tel:+263781651411">+263781651411</a></p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground">Harare, Zimbabwe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 bg-teal-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">AccessPal</h3>
              <p className="text-primary-foreground/80">
                Empowering businesses with integrated solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li>Voice-commands</li>
                <li>Local Languge</li>
                <li>Accounting</li>
                <li>Accounting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/terms">Terms of Use</Link></li>
                <li><Link href="/cookies">Cookies Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
            <p>&copy; {new Date().getFullYear()} AccessPal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}