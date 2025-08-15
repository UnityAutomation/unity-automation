import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Clock3, Rocket, Bot, Mail, Phone, ShieldCheck, Sparkles, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const CONTACT = {
  brandName: 'Unity Automation',
  phone: '574-369-0868',
  email: 'automationmotives@gmail.com',
  domain: 'unityautomation.com',
  calendarLink: '#book',
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
}

export default function App() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900'>
      <Navbar />
      <Hero />
      <TrustBar />
      <Offer />
      <Benefits />
      <Process />
      <Pricing />
      <LeadForm />
      <FAQ />
      <Footer />
    </div>
  )
}

function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 md:px-6 ${className}`}>{children}</div>
}

function Navbar() {
  return (
    <header className='sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-100'>
      <Container className='flex items-center justify-between h-16'>
        <div className='flex items-center gap-2'>
          <div className='h-8 w-8 rounded-2xl bg-slate-900 text-white grid place-items-center'><Bot className='h-5 w-5'/></div>
          <span className='font-semibold tracking-tight'>{CONTACT.brandName}</span>
        </div>
        <nav className='hidden md:flex items-center gap-6 text-sm'>
          <a href='#offer' className='hover:text-slate-700'>What you get</a>
          <a href='#benefits' className='hover:text-slate-700'>Benefits</a>
          <a href='#pricing' className='hover:text-slate-700'>Pricing</a>
          <a href='#book' className='hover:text-slate-700'>Book Audit</a>
        </nav>
        <a href='#book' className='hidden md:inline'>
          <Button className='rounded-2xl'>Free 15‑min Audit</Button>
        </a>
      </Container>
    </header>
  )
}

function Hero() {
  return (
    <section className='pt-14 pb-10 md:pt-20 md:pb-16'>
      <Container>
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          <motion.div {...fadeUp}>
            <div className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm'>
              <Sparkles className='h-4 w-4'/> AI Automation Starter Pack
            </div>
            <h1 className='mt-4 text-4xl md:text-5xl font-bold tracking-tight'>
              Save Time, Cut Costs, <span className='text-slate-500'>Grow Sales</span>
            </h1>
            <p className='mt-4 text-slate-600 md:text-lg'>
              In just 1 week, we set up <span className='font-medium'>3 powerful AI systems</span> in your business so you can work less and earn more — without hiring extra staff.
            </p>
            <div className='mt-6 flex flex-wrap items-center gap-3'>
              <a href='#book'><Button size='lg' className='rounded-2xl'>Book Free 15‑min Audit</Button></a>
              <a href='#pricing' className='text-slate-700 inline-flex items-center gap-1'>See Pricing <ArrowRight className='h-4 w-4'/></a>
            </div>
            <div className='mt-6 flex flex-wrap gap-4 text-sm text-slate-600'>
              <span className='inline-flex items-center gap-2'><Clock3 className='h-4 w-4'/> Launch in ~7 days</span>
              <span className='inline-flex items-center gap-2'><ShieldCheck className='h-4 w-4'/> 14‑day support included</span>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className='md:justify-self-end'>
            <Card className='rounded-3xl shadow-xl'>
              <CardHeader>
                <CardTitle className='text-xl'>What we automate</CardTitle>
              </CardHeader>
              <CardContent className='grid gap-3'>
                {[
                  'Customer follow‑up emails & SMS',
                  'AI website/chat FAQ assistant',
                  'Review requests & feedback loops',
                  'Social content creation & scheduling',
                  'Invoice creation & payment reminders',
                ].map((item) => (
                  <div key={item} className='flex items-start gap-3 text-slate-700'>
                    <CheckCircle2 className='mt-0.5 h-5 w-5'/>
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function TrustBar() {
  return (
    <section className='py-6 bg-white border-y border-slate-100'>
      <Container>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-slate-600'>
          {[
            'Save 10+ hrs/week',
            'Done‑for‑you setup',
            'No new hires',
            'Keep what works',
          ].map((t) => (
            <div key={t} className='flex items-center gap-2 justify-center md:justify-start'>
              <CheckCircle2 className='h-4 w-4'/> {t}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Offer() {
  return (
    <section id='offer' className='py-16'>
      <Container>
        <motion.div {...fadeUp}>
          <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>What You Get</h2>
          <p className='mt-2 text-slate-600 max-w-2xl'>A focused, premium service: we install three automations that immediately remove busywork and improve revenue touchpoints.</p>
        </motion.div>
        <div className='mt-8 grid md:grid-cols-3 gap-6'>
          {[
            { title: '3 Custom Automations', desc: 'Tailored to your workflow: chatbots, follow‑ups, social scheduling, reviews, invoicing, and more.' },
            { title: '1‑Hour Strategy Call', desc: 'We map ROI‑positive processes and choose the right automations for quick wins.' },
            { title: 'Guide & 14‑Day Support', desc: 'Clear instructions plus two weeks of support to ensure everything sticks.' },
          ].map((f) => (
            <Card key={f.title} className='rounded-2xl'>
              <CardHeader className='flex flex-row items-center gap-3'>
                <div className='h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center'><Bot className='h-5 w-5'/></div>
                <CardTitle className='text-base'>{f.title}</CardTitle>
              </CardHeader>
              <CardContent className='text-slate-600 text-sm'>{f.desc}</CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Benefits() {
  return (
    <section id='benefits' className='py-16 bg-slate-50'>
      <Container>
        <motion.div {...fadeUp}>
          <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>Benefits</h2>
        </motion.div>
        <div className='mt-8 grid md:grid-cols-2 gap-6'>
          {[
            'Save 10+ hours per week on repetitive tasks',
            'Improve customer response times & satisfaction',
            'Increase repeat sales with automated follow‑ups',
            'Avoid the cost and complexity of extra hires',
          ].map((b) => (
            <div key={b} className='flex items-start gap-3 text-slate-700'>
              <CheckCircle2 className='mt-0.5 h-5 w-5'/>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Process() {
  return (
    <section className='py-16'>
      <Container>
        <motion.div {...fadeUp}>
          <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>How It Works</h2>
        </motion.div>
        <div className='mt-8 grid md:grid-cols-3 gap-6'>
          {[
            { n: 1, t: 'Free Audit', d: '15‑minute call to spot quick wins and confirm fit.' },
            { n: 2, t: 'Setup Week', d: 'We install and test three automations end‑to‑end.' },
            { n: 3, t: 'Go Live', d: 'You get a simple guide and 14 days of support.' },
          ].map((s) => (
            <Card key={s.n} className='rounded-2xl'>
              <CardHeader>
                <CardTitle className='text-base'>{s.n}. {s.t}</CardTitle>
              </CardHeader>
              <CardContent className='text-slate-600 text-sm'>{s.d}</CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Pricing() {
  return (
    <section id='pricing' className='py-16 bg-slate-50'>
      <Container>
        <motion.div {...fadeUp}>
          <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>Simple Pricing</h2>
          <p className='mt-2 text-slate-600'>Launch price — limited slots each month.</p>
        </motion.div>
        <div className='mt-8 grid md:grid-cols-2 gap-6'>
          <Card className='rounded-3xl border-slate-200 shadow-lg'>
            <CardHeader>
              <CardTitle className='text-xl'>AI Automation Starter Pack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-4xl font-bold tracking-tight'>$1,250 <span className='text-base font-medium text-slate-500 line-through ml-2'>$1,800</span></div>
              <ul className='mt-4 space-y-2 text-slate-700 text-sm'>
                {[
                  '3 custom automations set up for you',
                  '1‑hour strategy call',
                  'Step‑by‑step usage guide',
                  '14‑day support after launch',
                ].map((i) => (
                  <li key={i} className='flex gap-2'><CheckCircle2 className='h-5 w-5'/> {i}</li>
                ))}
              </ul>
              <a href='#book'><Button size='lg' className='mt-6 w-full rounded-2xl'>Book Free Audit</Button></a>
              <p className='mt-2 text-xs text-slate-500'>Need a lower entry? Ask about the $997 pilot.</p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl'>
            <CardHeader>
              <CardTitle className='text-xl'>What We Can Automate</CardTitle>
            </CardHeader>
            <CardContent className='grid gap-2 text-slate-700 text-sm'>
              {[
                'Lead capture & qualification',
                'Customer support FAQ chatbot',
                'Appointment reminders & no‑show reduction',
                'Review requests and reputation flow',
                'Social content generation & scheduling',
                'Invoice generation & payment nudges',
              ].map((x) => (
                <div key={x} className='flex gap-2 items-start'><CheckCircle2 className='h-5 w-5'/> {x}</div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}

function LeadForm() {
  return (
    <section id='book' className='py-16'>
      <Container>
        <motion.div {...fadeUp}>
          <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>Book Your Free 15‑Minute Audit</h2>
          <p className='mt-2 text-slate-600'>Tell us a bit about your business. We’ll reply quickly to confirm a time.</p>
        </motion.div>
        <div className='mt-8 grid md:grid-cols-2 gap-8'>
          <Card className='rounded-2xl'>
            <CardContent className='pt-6'>
              <form action={`mailto:${CONTACT.email}`} method='post' encType='text/plain' className='grid gap-4'>
                <Input required placeholder='Your name' name='name'/>
                <Input required placeholder='Business name' name='business'/>
                <Input required type='email' placeholder='Email' name='email'/>
                <Input placeholder='Phone (optional)' name='phone'/>
                <Textarea placeholder='What do you want to automate first?' name='message'/>
                <Button type='submit' className='rounded-2xl'>Request Audit</Button>
              </form>
              <p className='mt-3 text-xs text-slate-500'>Prefer a calendar? <a href={CONTACT.calendarLink} className='underline'>Book here</a>.</p>
            </CardContent>
          </Card>
          <Card className='rounded-2xl'>
            <CardHeader>
              <CardTitle className='text-lg'>Contact</CardTitle>
            </CardHeader>
            <CardContent className='text-slate-700 grid gap-3'>
              <div className='flex items-center gap-2'><Mail className='h-4 w-4'/> {CONTACT.email}</div>
              <div className='flex items-center gap-2'><Phone className='h-4 w-4'/> {CONTACT.phone}</div>
              <div className='flex items-center gap-2'><Rocket className='h-4 w-4'/> {CONTACT.domain}</div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}

function FAQ() {
  const faqs = [
    { q: 'How fast can we start?', a: 'Most projects start within a few days. Typical setup completes in ~1 week.' },
    { q: 'Do I need any special software?', a: 'We work with tools you likely already use (email, website, socials). If anything new is needed, we suggest low‑cost options.' },
    { q: 'What if I need more than 3 automations?', a: 'We can add more after the starter pack or scope a custom plan.' },
    { q: 'Is training included?', a: 'Yes. You receive a concise guide and two weeks of support.' },
  ]
  return (
    <section className='py-16 bg-slate-50'>
      <Container>
        <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>FAQ</h2>
        <div className='mt-8 grid md:grid-cols-2 gap-6'>
          {faqs.map((f) => (
            <Card key={f.q} className='rounded-2xl'>
              <CardHeader>
                <CardTitle className='text-base'>{f.q}</CardTitle>
              </CardHeader>
              <CardContent className='text-slate-700 text-sm'>{f.a}</CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer className='py-10 border-t border-slate-100 bg-white'>
      <Container>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600'>
          <div className='flex items-center gap-2'>
            <div className='h-7 w-7 rounded-2xl bg-slate-900 text-white grid place-items-center'><Bot className='h-4 w-4'/></div>
            <span>{CONTACT.brandName}</span>
          </div>
          <div className='flex items-center gap-4'>
            <a href={`mailto:${CONTACT.email}`} className='inline-flex items-center gap-1'><Mail className='h-4 w-4'/> Email</a>
            <a href='tel:+15743690868' className='inline-flex items-center gap-1'><Phone className='h-4 w-4'/> Call</a>
            <a href='#book' className='inline-flex items-center gap-1'><Calendar className='h-4 w-4'/> Book Audit</a>
          </div>
          <span className='text-xs'>© {new Date().getFullYear()} {CONTACT.brandName}. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  )
}
