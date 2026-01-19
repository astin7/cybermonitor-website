import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Combined Link here
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from "react-google-recaptcha";
import { 
  Shield, Cpu, Activity, Mail, Download, CheckCircle, 
  Zap, Layers, Crosshair, Menu, X 
} from 'lucide-react'; // Combined all icons here
import logo from './assets/cybermonitor-logo.ico';

// --- CONFIGURATION ---
const DOWNLOAD_LINK = "https://github.com/astin7/cybermonitor-project/releases/download/v1.0.0/CyberMonitor.zip";
const FORMSPREE_ID = "mbddozwn";

// --- COMPONENTS ---

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-[#1a1a1a]/95 backdrop-blur-md border-b border-cyber-blue shadow-[0_0_15px_rgba(0,168,255,0.2)] z-50">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold tracking-wider text-white">
            CYBER<span className="text-cyber-blue">MONITOR</span>
          </span>
        </Link>
      </div>
      <div className="flex items-center h-full">
        <div className="hidden md:block h-8 w-px bg-cyber-blue/40 mx-6 shadow-[0_0_10px_rgba(0,168,255,0.4)]"></div>
        <div className="hidden md:flex gap-8 font-medium text-sm">
          <Link to="/" className="text-gray-300 hover:text-cyber-blue transition uppercase tracking-widest hover:drop-shadow-[0_0_8px_rgba(0,168,255,0.6)]">Home</Link>
          <Link to="/contact" className="text-gray-300 hover:text-cyber-blue transition uppercase tracking-widest hover:drop-shadow-[0_0_8px_rgba(0,168,255,0.6)]">Support</Link>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <div className="pt-32 pb-24 px-6 text-center bg-[#222222] border-b border-white/5 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyber-blue/10 blur-[100px] rounded-full pointer-events-none"></div>
    <div className="max-w-4xl mx-auto relative z-10">
      <div className="inline-block px-4 py-1 rounded-full border border-cyber-blue/30 bg-cyber-blue/10 text-cyber-blue text-xs font-bold tracking-widest uppercase mb-8 animate-pulse">
        v1.0 Official Release
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
        System Monitoring.<br />
        <span className="text-cyber-blue drop-shadow-[0_0_20px_rgba(0,168,255,0.3)]">Built for performance.</span>
      </h1>
      <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        Real-time hardware tracking, tamper-proof security, and professional-grade diagnostics. 
      </p>
      <div className="flex justify-center gap-4">
        <a href={DOWNLOAD_LINK} className="bg-cyber-blue text-white font-bold py-4 px-10 rounded-full shadow-glow hover:shadow-glow-hover hover:scale-105 transition-all duration-300 flex items-center gap-3 text-lg">
          <Download size={22} />
          Download Now
        </a>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-[#151515] p-8 rounded-xl border border-white/5 hover:border-cyber-blue/40 transition duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-cyber-blue/10">
    <div className="bg-[#222222] w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-gray-400 group-hover:text-cyber-blue group-hover:bg-cyber-blue/10 transition duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyber-blue transition">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

const Home = () => (
  <>
    <Hero />
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Engineered for Performance</h2>
          <div className="w-20 h-1.5 bg-cyber-blue mx-auto rounded-full mb-6 shadow-glow"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to monitor, secure, and optimize your machine in one lightweight package.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon={Activity} title="Real-Time Analytics" desc="Monitor CPU, GPU, and RAM usage with millisecond precision using our low-latency engine." />
          <FeatureCard icon={Shield} title="Hardware Locked" desc="Advanced HWID security ensures your license is permanently tied to your specific motherboard." />
          <FeatureCard icon={Cpu} title="Tamper Protection" desc="Registry-based security with SHA-256 signatures prevents unauthorized trial modifications." />
          <FeatureCard icon={Zap} title="Zero Overhead" desc="Written in optimized Python & C# to ensure it uses less than 1% of your system resources." />
          <FeatureCard icon={Layers} title="Process Tracking" desc="Automatically detects and displays the top resource-hogging processes slowing down your PC." />
          <FeatureCard icon={Crosshair} title="Universal Support" desc="Fully compatible with all modern Intel, AMD, and NVIDIA hardware architectures." />
        </div>
      </div>
    </section>
  </>
);

const Contact = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [captchaToken, setCaptchaToken] = useState("");

  if (state.succeeded) {
    return (
      <div className="pt-32 px-6 text-center flex-grow flex flex-col justify-center items-center bg-[#0a0a0a]">
        <div className="bg-blue-500/10 p-6 rounded-full text-cyber-blue mb-6 animate-pulse">
          <CheckCircle size={60} />
        </div>
        <h2 className="text-4xl font-bold mb-4 text-white">Message Sent!</h2>
        <p className="text-gray-400 text-lg">We'll get back to you via email shortly.</p>
        <Link to="/" className="mt-10 px-8 py-3 bg-cyber-blue/10 text-cyber-blue rounded-lg hover:bg-cyber-blue/20 transition font-bold shadow-glow hover:shadow-glow-hover">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">License & Support</h1>
        <p className="text-gray-400 text-center mb-4">
          Looking to purchase? Technical issue? Partnership inquiry? Let us know.
        </p>
        <p className="text-center mb-12">
          <span className="text-cyber-blue font-mono text-sm px-3 py-1 bg-cyber-blue/5 border border-cyber-blue/20 rounded-full">
            FREE TRIAL: CYBER-DEMO-20
          </span>
        </p>

        <form onSubmit={handleSubmit} className="bg-[#1a1a1a] p-10 rounded-2xl border border-white/5 shadow-2xl">
          <input type="hidden" name="g-recaptcha-response" value={captchaToken} />

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide mb-2 text-gray-500">
                First Name<span className="text-cyber-blue ml-1">*</span>
              </label>
              <input id="firstName" type="text" name="firstName" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition placeholder-gray-700" placeholder="John" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide mb-2 text-gray-500">
                Last Name<span className="text-cyber-blue ml-1">*</span>
              </label>
              <input id="lastName" type="text" name="lastName" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition placeholder-gray-700" placeholder="Doe" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold uppercase tracking-wide mb-2 text-gray-500">
              Email Address<span className="text-cyber-blue ml-1">*</span>
            </label>
            <input id="email" type="email" name="email" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition placeholder-gray-700" placeholder="you@example.com" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold uppercase tracking-wide mb-2 text-gray-500">
              Hardware ID (HWID)
            </label>
            <input id="hwid" type="text" name="hwid" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition border-dashed placeholder-gray-700" placeholder="Found in App Settings (Required for License)" />
            <p className="text-[10px] text-gray-600 mt-2 uppercase tracking-tighter">Only provide this if you are requesting a permanent license activation</p>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold uppercase tracking-wide mb-2 text-gray-500">
              Subject<span className="text-cyber-blue ml-1">*</span>
            </label>
            <input id="subject" type="text" name="subject" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition placeholder-gray-700" placeholder="e.g. License Activation Issue" />
          </div>

          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-wide mb-2 text-gray-500">
              Message<span className="text-cyber-blue ml-1">*</span>
            </label>
            <textarea id="message" name="message" required rows="5" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition placeholder-gray-700" placeholder="Describe your request..." />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <div className="mb-8 flex justify-center">
            <ReCAPTCHA
              sitekey="6LcVSE8sAAAAAK4nMXZoPPuzbDBhqsRSMLxMwEOI" 
              theme="dark"
              onChange={(token) => setCaptchaToken(token)}
            />
          </div>

          <button 
            type="submit" 
            disabled={state.submitting || !captchaToken}
            className="w-full bg-cyber-blue text-white font-bold py-5 rounded-lg hover:bg-cyber-blue-dim transition flex justify-center items-center gap-2 shadow-glow hover:shadow-glow-hover text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
            <Mail size={20} />
          </button>
          
          {state.errors && <p className="text-red-500 text-center mt-4 font-mono text-xs">Error detected. Check connection and try again.</p>}
        </form>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-[#151515] border-t border-white/5 py-12 text-center text-gray-500 text-sm">
    <div className="flex justify-center gap-6 mb-8"></div>
    <p>&copy; {new Date().getFullYear()} CyberMonitor. All rights reserved.</p>
  </footer>
);

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      {/* Updated Navbar with Original Glow & Colors */}
      <nav className="fixed top-0 w-full bg-[#1a1a1a]/95 backdrop-blur-md border-b border-cyber-blue shadow-[0_0_15px_rgba(0,168,255,0.2)] z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold tracking-wider text-white">
              CYBER<span className="text-cyber-blue">MONITOR</span>
            </span>
          </Link>

          {/* Desktop Menu - Restored vertical line and uppercase tracking */}
          <div className="hidden md:flex items-center h-full">
            <div className="h-8 w-px bg-cyber-blue/40 mx-6 shadow-[0_0_10px_rgba(0,168,255,0.4)]"></div>
            <div className="flex gap-8 font-medium text-sm">
              <Link to="/" className="text-gray-300 hover:text-cyber-blue transition uppercase tracking-widest hover:drop-shadow-[0_0_8px_rgba(0,168,255,0.6)]">Home</Link>
              <Link to="/contact" className="text-gray-300 hover:text-cyber-blue transition uppercase tracking-widest hover:drop-shadow-[0_0_8px_rgba(0,168,255,0.6)]">Support</Link>
            </div>
          </div>

          {/* Mobile Menu Button - Styled for the theme */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-cyber-blue hover:text-white transition-colors focus:outline-none">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown - Matching the dark theme and cyber-blue accents */}
        {isOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-b border-cyber-blue/30 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-gray-300 hover:text-cyber-blue transition uppercase tracking-widest"
            >
              HOME
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-gray-300 hover:text-cyber-blue transition uppercase tracking-widest"
            >
              SUPPORT
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}