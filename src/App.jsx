import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import {
  ArrowRight, BriefcaseBusiness, CheckCircle2, Code2, FileText,
  GraduationCap, Mail, Menu, Rocket, Sparkles, Users, X
} from "lucide-react";
import { roles } from "./data";

const EMAIL = "dreamypixel1504@gmail.com";

function Layout({ children }) {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => setOpen(false), [location.pathname]);

  return (
    <div className="site">
      <header className="nav">
        <Link to="/" className="brand">
          <span className="brand-mark">DP</span>
          <span>Dreamy <b>Pixel</b><small>STUDIO</small></span>
        </Link>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          <Link to="/">Home</Link>
          <Link to="/internships">Internships</Link>
          <Link to="/about">About</Link>
          <Link className="nav-apply" to="/apply">Apply Now <ArrowRight size={16}/></Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">DP</span>
            <span>Dreamy <b>Pixel</b><small>STUDIO</small></span>
          </div>
          <p>Learn • Build • Create • Grow</p>
        </div>
        <div className="footer-links">
          <Link to="/internships">Internships</Link>
          <Link to="/apply">Apply</Link>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Dreamy Pixel Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={15}/> INTERNSHIP & PLACEMENT PROGRAM</span>
          <h1>Start building your <span>career</span> with real projects.</h1>
          <p>Join Dreamy Pixel Studio as an intern, work remotely with a supportive team, build practical skills, and create portfolio-ready work.</p>
          <div className="hero-actions">
            <Link className="btn primary" to="/apply">Apply for Internship <ArrowRight size={18}/></Link>
            <Link className="btn secondary" to="/internships">Explore Roles</Link>
          </div>
          <div className="trust-row">
            <span><CheckCircle2/> Remote</span>
            <span><CheckCircle2/> Real Projects</span>
            <span><CheckCircle2/> Mentorship</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="orb orb1"></div><div className="orb orb2"></div>
          <div className="code-card">
            <div className="dots">● ● ●</div>
            <div className="code-lines">
              <i>const</i> career = <b>"dream"</b>;<br/>
              <i>const</i> skills = [<b>"learn"</b>, <b>"build"</b>];<br/>
              <span>career</span>.<strong>grow</strong>();
            </div>
          </div>
          <div className="student-card">
            <div className="avatar">💻</div>
            <div><strong>Real Projects</strong><small>Real Skills • Real Growth</small></div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div><strong>12</strong><span>Career Roles</span></div>
        <div><strong>100%</strong><span>Remote Internship</span></div>
        <div><strong>5+</strong><span>Practical Tasks</span></div>
        <div><strong>1:1</strong><span>Learning Support</span></div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="eyebrow">CHOOSE YOUR PATH</span>
          <h2>Internship roles built for your next step.</h2>
          <p>Explore a dedicated page for each role, see the skills you need, and understand the practical tasks before applying.</p>
        </div>
        <div className="role-grid">
          {roles.map((role) => <RoleCard key={role.slug} role={role}/>)}
        </div>
      </section>

      <section className="cta">
        <div>
          <span className="eyebrow">READY TO START?</span>
          <h2>Your ideas matter here.</h2>
          <p>Submit your details and our team will review your application.</p>
        </div>
        <Link className="btn white" to="/apply">Apply Now <ArrowRight size={18}/></Link>
      </section>
    </>
  );
}

function RoleCard({ role }) {
  return (
    <Link to={`/internships/${role.slug}`} className={`role-card ${role.color}`}>
      <span className="role-icon">{role.icon}</span>
      <h3>{role.title}</h3>
      <p>{role.short}</p>
      <span className="learn-more">View role <ArrowRight size={16}/></span>
    </Link>
  );
}

function Internships() {
  return (
    <section className="section page-top">
      <div className="section-head">
        <span className="eyebrow">12 CAREER PATHS</span>
        <h1>Find the role that fits you.</h1>
        <p>Each role has its own page with required skills, practical internship tasks, learning outcomes, and an application button.</p>
      </div>
      <div className="role-grid large">
        {roles.map((role) => <RoleCard key={role.slug} role={role}/>)}
      </div>
    </section>
  );
}

function RolePage({ role }) {
  return (
    <section className="role-page page-top">
      <div className={`role-hero ${role.color}`}>
        <Link to="/internships" className="back">← All roles</Link>
        <span className="big-role-icon">{role.icon}</span>
        <span className="eyebrow">INTERNSHIP ROLE</span>
        <h1>{role.title}</h1>
        <p>{role.short}</p>
        <Link className="btn primary" to={`/apply?role=${role.slug}`}>Apply for this role <ArrowRight size={18}/></Link>
      </div>

      <div className="role-content">
        <div className="content-main">
          <section className="info-block">
            <span className="eyebrow">SKILLS NEEDED</span>
            <h2>What you should know</h2>
            <div className="skill-list">
              {role.skills.map(skill => <span key={skill}><CheckCircle2 size={17}/>{skill}</span>)}
            </div>
          </section>
          <section className="info-block">
            <span className="eyebrow">INTERNSHIP TASKS</span>
            <h2>What you will work on</h2>
            <div className="task-list">
              {role.tasks.map((task, i) => (
                <div className="task" key={task}><b>{String(i+1).padStart(2,"0")}</b><p>{task}</p></div>
              ))}
            </div>
          </section>
          <section className="info-block">
            <span className="eyebrow">YOU WILL LEARN</span>
            <h2>Practical outcomes</h2>
            <ul className="check-list">
              {role.learn.map(x => <li key={x}><CheckCircle2 size={18}/>{x}</li>)}
            </ul>
          </section>
        </div>
        <aside className="role-side">
          <div className="side-card">
            <BriefcaseBusiness/>
            <h3>Internship details</h3>
            <div className="detail"><span>Work mode</span><b>Remote</b></div>
            <div className="detail"><span>Experience</span><b>Students / Freshers</b></div>
            <div className="detail"><span>Duration</span><b>1 / 3 / 6 Months</b></div>
            <div className="detail"><span>Projects</span><b>Real-world</b></div>
            <Link className="btn primary full" to={`/apply?role=${role.slug}`}>Apply Now <ArrowRight size={17}/></Link>
          </div>
          <div className="side-card mini">
            <Rocket/>
            <h3>Best Performer</h3>
            <p>Eligible batches can have a <strong>₹1,000</strong> Best Performer recognition.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Apply() {
  const params = new URLSearchParams(window.location.search);
  const initialRole = roles.find(r => r.slug === params.get("role"))?.title || "";
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <section className="apply-page page-top">
      <div className="apply-intro">
        <span className="eyebrow"><FileText size={15}/> APPLICATION FORM</span>
        <h1>Take the first step.</h1>
        <p>Complete the form below. Your application will be sent directly to <strong>{EMAIL}</strong>. No applicant database is required.</p>
        <div className="apply-note">
          <CheckCircle2/> Remote internship
        </div>
        <div className="apply-note">
          <CheckCircle2/> Real-world projects
        </div>
        <div className="apply-note">
          <CheckCircle2/> Mentorship & guidance
        </div>
        <div className="apply-note">
          <CheckCircle2/> Certificate available for eligible interns; ₹200 processing fee applies when requested
        </div>
      </div>

      <div className="form-wrap">
        {submitted ? (
          <div className="success-box">
            <div className="success-icon">✓</div>
            <h2>Application submitted!</h2>
            <p>Thank you for applying to Dreamy Pixel Studio. Please check your email if we need any additional information.</p>
            <Link className="btn primary" to="/">Back to Home</Link>
          </div>
        ) : (
          <form
            action={`https://formsubmit.co/${EMAIL}`}
            method="POST"
            encType="multipart/form-data"
            onSubmit={() => setSubmitted(true)}
          >
            <input type="hidden" name="_subject" value="New Dreamy Pixel Studio Internship Application"/>
            <input type="hidden" name="_template" value="table"/>
            <input type="hidden" name="_captcha" value="true"/>
            <input type="hidden" name="_next" value={window.location.href}/>
            <input type="text" name="_honey" className="honeypot" tabIndex="-1" autoComplete="off"/>

            <div className="form-section">
              <h2>Personal details</h2>
              <div className="form-grid">
                <Field label="Full Name" name="full_name" required placeholder="Your full name"/>
                <Field label="Email Address" name="email" type="email" required placeholder="you@example.com"/>
                <Field label="Phone / WhatsApp" name="phone" type="tel" required placeholder="+91"/>
                <Field label="City & State" name="city_state" required placeholder="e.g. Chennai, Tamil Nadu"/>
                <Field label="LinkedIn Profile" name="linkedin" placeholder="https://linkedin.com/in/..."/>
                <Field label="GitHub Profile" name="github" placeholder="https://github.com/..."/>
                <Field label="Portfolio URL" name="portfolio" placeholder="https://..."/>
              </div>
            </div>

            <div className="form-section">
              <h2>Education</h2>
              <div className="form-grid">
                <Field label="College / University" name="college" required placeholder="College name"/>
                <Field label="Department / Branch" name="department" required placeholder="CSE / IT / BCA / etc."/>
                <Select label="Current Year" name="year" required options={["1st Year","2nd Year","3rd Year","Final Year","Graduate"]}/>
                <Field label="Graduation Year" name="graduation_year" placeholder="2027"/>
              </div>
            </div>

            <div className="form-section">
              <h2>Internship preferences</h2>
              <div className="form-grid">
                <Select label="Preferred Role" name="role" required value={initialRole} options={roles.map(r => r.title)}/>
                <Select label="Duration" name="duration" required options={["1 Month","2 Months","3 Months","6 Months"]}/>
                <Field label="Preferred Date of Joining" name="joining_date" type="date" required/>
                <Select label="Availability" name="availability" required options={["Full Time","Part Time","Flexible"]}/>
              </div>
            </div>

            <div className="form-section">
              <h2>Skills & projects</h2>
              <Field label="Technical Skills" name="technical_skills" type="textarea" required placeholder="List the technologies you know..."/>
              <Field label="Best Project" name="best_project" type="textarea" placeholder="Tell us about one project you have built..."/>
              <Field label="Why do you want to join Dreamy Pixel Studio?" name="motivation" type="textarea" required placeholder="A short answer is enough..."/>
              <Field label="Additional Details" name="additional_details" type="textarea" placeholder="Anything else you'd like us to know?"/>
              <label className="field">
                <span>Resume (PDF/DOC)</span>
                <input type="file" name="resume" accept=".pdf,.doc,.docx" required/>
              </label>
            </div>

            <label className="consent">
              <input type="checkbox" required/>
              <span>I confirm that the information provided is accurate and I agree to be contacted regarding this internship application.</span>
            </label>

            <button className="btn primary submit-btn" type="submit">Submit Application <ArrowRight size={18}/></button>
            <p className="form-footnote">Your form is submitted through FormSubmit and delivered to {EMAIL}; no applicant database is maintained by this website.</p>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({label, name, type="text", required=false, placeholder="", children}) {
  if (type === "textarea") return (
    <label className="field full-field">
      <span>{label}{required && " *"}</span>
      <textarea name={name} required={required} placeholder={placeholder} rows="4"></textarea>
    </label>
  );
  return (
    <label className="field">
      <span>{label}{required && " *"}</span>
      <input name={name} type={type} required={required} placeholder={placeholder}/>
    </label>
  );
}

function Select({label, name, options, required=false, value}) {
  return (
    <label className="field">
      <span>{label}{required && " *"}</span>
      <select name={name} defaultValue={value || ""} required={required}>
        <option value="" disabled>Select</option>
        {options.map(x => <option key={x} value={x}>{x}</option>)}
      </select>
    </label>
  );
}

function About() {
  return (
    <section className="section page-top about-page">
      <div className="section-head">
        <span className="eyebrow">ABOUT US</span>
        <h1>Learn, build, create and grow.</h1>
        <p>Dreamy Pixel Studio is a web development and digital solutions studio focused on modern, responsive and user-friendly digital experiences.</p>
      </div>
      <div className="about-grid">
        <div className="about-card"><Code2/><h3>Real Projects</h3><p>Interns learn by working through practical development, design, testing, analytics and cloud tasks.</p></div>
        <div className="about-card"><Users/><h3>Supportive Team</h3><p>Get guidance while you improve your technical and professional skills.</p></div>
        <div className="about-card"><GraduationCap/><h3>Career Growth</h3><p>Build portfolio-ready work and gain experience you can discuss in interviews.</p></div>
        <div className="about-card"><Mail/><h3>Remote</h3><p>Collaborate online from anywhere in India with a flexible internship setup.</p></div>
      </div>
      <div className="about-cta">
        <h2>Ready to build your future?</h2>
        <Link className="btn primary" to="/apply">Apply Now <ArrowRight size={18}/></Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/internships" element={<Internships/>}/>
        <Route path="/internships/:slug" element={<RoleRoute/>}/>
        <Route path="/apply" element={<Apply/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Layout>
  );
}

function RoleRoute() {
  const { pathname } = useLocation();
  const slug = pathname.split("/").filter(Boolean).pop();
  const role = roles.find(r => r.slug === slug);
  return role ? <RolePage role={role}/> : <section className="section page-top"><h1>Role not found</h1><Link className="btn primary" to="/internships">View roles</Link></section>;
}