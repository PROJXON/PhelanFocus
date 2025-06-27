'use client';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./coaching.css";
import ScrollToTopButton from "@/components/ScrollToTop";
export default function CoachingPage() {
  return (
    <div className="coaching-page">
      <Navbar isFooter={false} />

      {/* Hero Section */}
      <section className="coaching-hero" style={{ backgroundImage: "url('coaching.png')" }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Coaching</h1>
        </div>
      </section>

{/* Methodology Section */}
<section className="section methodology-section coaching-page">
  <div className="container">
    <h2 className="methodology-title">My Coaching Methodology</h2>

    <div className="methodology-intro">
      {/* Text left */}
      <div className="methodology-text">
        <p>
          This coaching program follows a proven 4 coaching step framework that has helped hundreds of clients create sustainable transformation. It's not just talk therapy – it's a strategic, action-oriented approach designed to deliver real, lasting results.
        </p>
      </div>

      {/* Image right */}
      <div className="methodology-image">
        <img
          src="coaching/KC_GroupTraining-4.jpg"
          alt="Coaching Methodology"
          className="methodology-img"
        />
      </div>
    </div>

    {/* Steps */}
    <div className="process-coaching-steps">
      <div className="coaching-step">
        <div className="coaching-step-number">1</div>
        <h3>Clarity & Vision</h3>
        <p>We uncover what you truly want and identify the limiting beliefs holding you back from achieving it.</p>
      </div>
      <div className="coaching-step">
        <div className="coaching-step-number">2</div>
        <h3>Strategic Planning</h3>
        <p>Create a personalized roadmap with clear milestones and actionable steps toward your goals.</p>
      </div>
      <div className="coaching-step">
        <div className="coaching-step-number">3</div>
        <h3>Implementation</h3>
        <p>Take consistent action with accountability and support to overcome obstacles as they arise.</p>
      </div>
      <div className="coaching-step">
        <div className="coaching-step-number">4</div>
        <h3>Integration</h3>
        <p>Lock in your new habits and mindset shifts to ensure lasting transformation beyond our work together.</p>
      </div>
    </div>
  </div>
</section>

      {/* Coaching Services */}
      <section className="section services-section">
        <div className="container">
          <h2>Coaching Services</h2>
          <p>Specialized coaching programs designed to meet you where you are and take you where you want to go. Each service is tailored to address specific challenges and goals.</p>
          <div className="coaching-services-grid">
            <div className="coaching-service-card">
              <div className="coaching-service-icon">⚡</div>
              <h3>Performance Coaching</h3>
              <p>Optimize your mental and physical performance to achieve peak results in all areas of life.</p>
              <ul className="coaching-service-features">
                <li>Mental performance optimization</li>
                <li>Peak state management</li>
                <li>Stress and pressure handling</li>
                <li>Flow state development</li>
                <li>Energy management systems</li>
              </ul>
              <a href="/sessions" className="btn-secondary">Learn More</a>
            </div>
            <div className="coaching-service-card">
              <div className="coaching-service-icon">🚀</div>
              <h3>Entrepreneur Coaching</h3>
              <p>Build and scale your business while maintaining balance and avoiding burnout.</p>
              <ul className="coaching-service-features">
                <li>Business strategy and planning</li>
                <li>Leadership development</li>
                <li>Scaling systems and processes</li>
                <li>Investor readiness</li>
                <li>Work-life integration</li>
              </ul>
              <a href="/sessions" className="btn-secondary">Learn More</a>
            </div>
            <div className="coaching-service-card">
              <div className="coaching-service-icon">🎯</div>
              <h3>Career Coaching</h3>
              <p>Navigate career transitions and create a path aligned with your values and ambitions.</p>
              <ul className="coaching-service-features">
                <li>Career transition planning</li>
                <li>Personal branding</li>
                <li>Interview and negotiation skills</li>
                <li>Networking strategies</li>
                <li>Purpose and passion discovery</li>
              </ul>
              <a href="/sessions" className="btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

{/* Expected Outcomes */}
<section className="section outcomes-section py-16 bg-white">
  <div className="container mx-auto px-4">
    {/* Centered Heading and Description */}
    <div className="text-center mb-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-neutral-dark mb-4">What You Can Expect</h2>
      <p className="text-neutral-medium">
        My clients typically see significant shifts within the first 30 days. Here's what's possible when you commit to the process:
      </p>
    </div>

    {/* Two Column Layout: Image Left, Outcomes Right */}
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Left side: Image */}
      <div className="w-full">
        <img
          src="coaching/KC_GroupTraining-221.jpg"
          alt="Expected Outcomes"
          className="rounded-xl shadow-lg w-full object-cover max-h-[600px]"
        />
      </div>

      {/* Right side: Outcomes List */}
      <div className="grid grid-cols-1 gap-6">
        <div className="outcome-item">
          <h3 className="text-xl font-medium text-neutral-dark">Clarity & Direction</h3>
          <p className="text-neutral-medium">
            Cut through the noise and get clear on your goals, values, and the steps to move forward.
          </p>
        </div>
        <div className="outcome-item">
          <h3 className="text-xl font-medium text-neutral-dark">Confidence in Action</h3>
          <p className="text-neutral-medium">
            Build self-belief and take bold, aligned action—even in the face of fear or uncertainty.
          </p>
        </div>
        <div className="outcome-item">
          <h3 className="text-xl font-medium text-neutral-dark">Sustainable Progress</h3>
          <p className="text-neutral-medium">
            Stay consistent, overcome perfectionism, and make steady progress toward meaningful results.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Ideal Clients */}
      <section className="section ideal-clients-section">
        <div className="container">
          <h2>Who We Serve</h2>
          <div className="ideal-clients-content">
            <div className="ideal-clients-text">
              <p>
                The coaching team specializes in supporting driven individuals ready to make meaningful changes in their lives. We work with professionals, entrepreneurs, and change-makers who are committed to personal growth, career advancement, and building a life aligned with their values.
              </p>
            </div>
            <div className="ideal-clients-image">
              <img src="coaching/KC_GroupTraining-13.jpg" alt="Ideal Clients" />
            </div>
          </div>

          <div className="client-profiles">
            <div className="profile-card">
              <div className="profile-icon">🚀</div>
              <h3>The Ambitious Professional</h3>
              <p>You're successful but feel stuck. You want to break through to the next level in your career or business but don’t know how.</p>
            </div>
            <div className="profile-card">
              <div className="profile-icon">🎯</div>
              <h3>The Goal-Oriented Achiever</h3>
              <p>You have big dreams but struggle with consistency. You want to finish strong.</p>
            </div>
            <div className="profile-card">
              <div className="profile-icon">💪</div>
              <h3>The Life Transformer</h3>
              <p>You're ready for a life overhaul—health, relationships, and purpose.</p>
            </div>
            <div className="profile-card">
              <div className="profile-icon">🌟</div>
              <h3>The High-Potential Individual</h3>
              <p>You know you’re capable of more and want to unlock that version of yourself.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Tools & Assessments */}
      <section className="section tools-section">
        <div className="container">
          <h2>Our Tools & Assessments</h2>
          <p>The team integrates evidence-based coaching practices with advanced assessment tools to deliver measurable, high-impact outcomes for every client.</p>
          <div className="tools-grid">
            <div className="tool-item"><h3>Values Discovery Workshop</h3><p>Identify core values and align goals with what truly matters to you.</p></div>
            <div className="tool-item"><h3>Limiting Beliefs Assessment</h3><p>Uncover the hidden thoughts sabotaging your progress.</p></div>
            <div className="tool-item"><h3>Energy Management Audit</h3><p>Optimize your energy for peak performance and focus.</p></div>
            <div className="tool-item"><h3>Goal Architecture Framework</h3><p>Break down goals into actionable steps with built-in accountability.</p></div>
            <div className="tool-item"><h3>Progress Tracking Dashboard</h3><p>Visual system to track results in real time.</p></div>
            <div className="tool-item"><h3>Mindset Shift Protocols</h3><p>Techniques to rewire thinking for long-term behavior change.</p></div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section success-stories-section">
        <div className="container">
          <h2>Client Success Stories</h2>
          <p>Here are just a few examples of the transformations my clients have achieved:</p>
          <div className="stories-container">
            <div className="story-card">
              <div className="story-header">
                <div className="client-avatar">C.H.</div>
                <div className="client-info">
                  <h3>Chase Heien</h3>
                  <p>Marketing Executive</p>
                </div>
              </div>
              <div className="story-content">
                <p>"I was burned out and considering quitting. I rediscovered my passion and got promoted to VP with a 40% income increase."</p>
                <div className="story-result"><strong>Result:</strong> Career breakthrough + 40% income increase</div>
              </div>
            </div>
            <div className="story-card">
              <div className="story-header">
                <div className="client-avatar">D.S.</div>
                <div className="client-info">
                  <h3>Drey Singer	</h3>
                  <p>Entrepreneur</p>
                </div>
              </div>
              <div className="story-content">
                <p>"My business was stuck at $50K. After 4 months, I scaled past $100K and continue to grow."</p>
                <div className="story-result"><strong>Result:</strong> Business scaled from $50K to $100K+</div>
              </div>
            </div>
            <div className="story-card">
              <div className="story-header">
                <div className="client-avatar">J.R.</div>
                <div className="client-info">
                  <h3>Jake Rappleye	</h3>
                  <p>Life Transition</p>
                </div>
              </div>
              <div className="story-content">
                <p>"After my divorce, I rebuilt my confidence and created a life I actually love living."</p>
                <div className="story-result"><strong>Result:</strong> Life transformation + confidence restored</div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Challenges */}
<section className="section challenges-section coaching-page">
  <div className="container">
    <h2>Common Challenges I Help Solve</h2>
    <p>These patterns hold many people back. If they sound familiar, coaching can help:</p>
    <div className="challenges-grid">
      <div className="challenge-item">
        <div className="challenge-icon">🔄</div>
        <h3>Stuck in Cycles</h3>
        <p>You keep getting the same results and need a fresh approach.</p>
      </div>
      <div className="challenge-item">
        <div className="challenge-icon">😰</div>
        <h3>Fear of Failure</h3>
        <p>You dream big but hesitate to take risks. We’ll build courage with a plan.</p>
      </div>
      <div className="challenge-item">
        <div className="challenge-icon">⏰</div>
        <h3>Time Management</h3>
        <p>Busy but not productive? Let’s create focus and eliminate distractions.</p>
      </div>
      <div className="challenge-item">
        <div className="challenge-icon">🎭</div>
        <h3>Imposter Syndrome</h3>
        <p>You doubt your success. We'll build real inner confidence.</p>
      </div>
      <div className="challenge-item">
        <div className="challenge-icon">⚖️</div>
        <h3>Work-Life Balance</h3>
        <p>You’re thriving professionally but burning out personally. Let’s align.</p>
      </div>
      <div className="challenge-item">
        <div className="challenge-icon">🧭</div>
        <h3>Lack of Direction</h3>
        <p>You feel lost. Coaching helps you reconnect with values and purpose.</p>
      </div>
      <div className="challenge-item">
        <div className="challenge-icon">🔒</div>
        <h3>Fear of Visibility</h3>
        <p>You’re holding back from putting yourself out there. We’ll build confidence to show up and lead.</p>
      </div>
      <div className="challenge-item">
        <div className="challenge-icon">🎯</div>
        <h3>Overwhelmed by Goals</h3>
        <p>You have big ambitions but don’t know where to start. Let’s break it down into achievable steps.</p>
      </div>
    </div>
  </div>
</section>


      {/* Timeline */}
      <section className="section how-it-works-section">
        <div className="container">
          <h2>How The Coaching Process Works</h2>
          <p>Here’s what to expect when you work with me, step by step:</p>
          <div className="process-timeline">
            <div className="timeline-item"><div className="timeline-number">01</div><div><h3>Discovery Call</h3><p>30-minute intro call to explore goals and fit. No pressure.</p></div></div>
            <div className="timeline-item"><div className="timeline-number">02</div><div><h3>Deep Dive Assessment</h3><p>Personalized intake to uncover patterns, blocks, and priorities.</p></div></div>
            <div className="timeline-item"><div className="timeline-number">03</div><div><h3>Goal Setting & Strategy</h3><p>We co-create a roadmap with measurable goals and milestones.</p></div></div>
            <div className="timeline-item"><div className="timeline-number">04</div><div><h3>Coaching Sessions</h3><p>We meet regularly to refine plans, overcome obstacles, and grow.</p></div></div>
            <div className="timeline-item"><div className="timeline-number">05</div><div><h3>Ongoing Support</h3><p>You’ll have check-ins and resources to keep momentum going.</p></div></div>
            <div className="timeline-item"><div className="timeline-number">06</div><div><h3>Integration</h3><p>We lock in the new mindset and systems to make results permanent.</p></div></div>
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="section philosophy-section">
        <div className="container">
          <h2>My Coaching Philosophy</h2>
          <p>The coaching philosophy centers around human potential and personalized empowerment.</p>
          <div className="philosophy-content">
            <div className="philosophy-item"><div className="philosophy-icon">🌱</div><h3>Growth is Inevitable</h3><p>With the right support and structure, you will grow. That’s a fact.</p></div>
            <div className="philosophy-item"><div className="philosophy-icon">🎯</div><h3>Action Creates Clarity</h3><p>We don’t wait for clarity; we act and let it emerge from progress.</p></div>
            <div className="philosophy-item"><div className="philosophy-icon">💎</div><h3>Authenticity Over Perfection</h3><p>Your best results come from being you—fully and unapologetically.</p></div>
            <div className="philosophy-item"><div className="philosophy-icon">🤝</div><h3>Partnership, Not Dependency</h3><p>I equip you to grow independently, long after coaching ends.</p></div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />

    </div>
  );
}
