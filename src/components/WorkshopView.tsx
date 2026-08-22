import React, { useState } from 'react';
import { Wrench, Clock, BookOpen, ChevronRight, Sparkles, Check } from 'lucide-react';
import { WORKSHOP_LOGS } from '../data/products';

export const WorkshopView: React.FC = () => {
  const [activeLog, setActiveLog] = useState<number | null>(null);
  const [consultationBooked, setConsultationBooked] = useState(false);
  const [motorcycleModel, setMotorcycleModel] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleBookConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!motorcycleModel) return;
    setConsultationBooked(true);
    setTimeout(() => {
      setConsultationBooked(false);
      setMotorcycleModel('');
      setJobDescription('');
    }, 4000);
  };

  return (
    <div id="workshop-page" className="w-full flex flex-col gap-16 py-6 animate-fade-in">
      {/* Workshop Hero Section */}
      <section className="bg-[#F5F3EF] p-8 md:p-12 border border-[#1A1A1A]/20 flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDFCFB] border border-[#1A1A1A]/20 mb-4">
            <Wrench className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#1A1A1A]/70">
              The Foundry Restoration Lab
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A] leading-tight mb-4">
            Bench Notes &amp; Machining Journals
          </h1>
          <p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-sans">
            Every component in our collection undergoes ultrasonic cleaning, magnetic particle inspection, valve lap testing, and flow-bench optimization. Explore our archival rebuild documentation.
          </p>
        </div>

        {/* Quick stat cards */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
          <div className="bg-[#FDFCFB] p-5 border border-[#1A1A1A]/20 text-center min-w-[130px]">
            <span className="font-serif italic text-3xl text-[#1A1A1A] block">.0005"</span>
            <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#1A1A1A]/60 mt-1 block">
              Tolerance Standard
            </span>
          </div>
          <div className="bg-[#FDFCFB] p-5 border border-[#1A1A1A]/20 text-center min-w-[130px]">
            <span className="font-serif italic text-3xl text-[#1A1A1A] block">100%</span>
            <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#1A1A1A]/60 mt-1 block">
              Original Castings
            </span>
          </div>
        </div>
      </section>

      {/* Restoration Logs Grid */}
      <section>
        <div className="flex justify-between items-end mb-8 border-b border-[#1A1A1A] pb-4">
          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#D4AF37] block mb-1">
              Field Papers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">Master Restoration Logs</h2>
            <p className="text-xs text-[#1A1A1A]/60 mt-1 font-sans">
              Field notes, metallurgical audits, and assembly procedures.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WORKSHOP_LOGS.map((log, index) => (
            <article
              key={log.id}
              onClick={() => setActiveLog(activeLog === index ? null : index)}
              className="bg-[#FDFCFB] border border-[#1A1A1A]/15 hover:border-[#1A1A1A] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="h-48 overflow-hidden bg-[#EAE8E4]">
                  <img
                    src={log.image}
                    alt={log.title}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[10px] text-[#1A1A1A]/60 uppercase tracking-wider mb-3">
                    <span>{log.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#D4AF37]" /> {log.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] leading-snug mb-3 group-hover:underline transition-all">
                    {log.title}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed line-clamp-3 font-sans">
                    {log.snippet}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-[#1A1A1A]/15 mt-4 text-[10px] uppercase tracking-widest text-[#1A1A1A] font-semibold">
                <span>{log.author.split(',')[0]}</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Custom Restoration Consult Service */}
      <section className="bg-[#EAE8E4] p-8 md:p-12 border border-[#1A1A1A] flex flex-col lg:flex-row gap-10 items-start">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-bold text-[#D4AF37] mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Bespoke Machining &amp; Restoration
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] leading-tight mb-4">
            Commission a Foundry Specialist
          </h2>
          <p className="text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed mb-6 font-sans">
            Have a seized flathead crank, mismatched cases, or custom copper plumbing requirements? Our machinists preserve original patina while restoring mechanical tolerances to factory race specifications.
          </p>
          <ul className="space-y-2.5 text-[11px] uppercase tracking-wider text-[#1A1A1A]">
            <li className="flex items-center gap-2">✓ Magnetic Particle Non-Destructive Crack Testing</li>
            <li className="flex items-center gap-2">✓ Bronze-Bush Line Boring &amp; Honing</li>
            <li className="flex items-center gap-2">✓ Period-Correct Hand File &amp; Walnut Blast Finishing</li>
          </ul>
        </div>

        <div className="lg:w-1/2 w-full bg-[#FDFCFB] p-6 sm:p-8 border border-[#1A1A1A]/25 shadow-sm">
          {consultationBooked ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 border border-[#1A1A1A] bg-[#F5F3EF] text-[#1A1A1A] flex items-center justify-center mx-auto mb-3">
                <Check className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-1">
                Consultation Request Received
              </h3>
              <p className="text-xs text-[#1A1A1A]/60 font-sans">
                A master machinist will review your engine/chassis specs and respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleBookConsultation} className="space-y-4">
              <h3 className="font-serif text-xl text-[#1A1A1A] mb-2">
                Submit Machine Shop Inquiry
              </h3>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A]/70 mb-1">
                  Motorcycle Year &amp; Motor Type
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 1958 HD Duo-Glide 74ci Panhead"
                  value={motorcycleModel}
                  onChange={(e) => setMotorcycleModel(e.target.value)}
                  className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/30 px-3.5 py-2.5 text-xs text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:border-[#1A1A1A] outline-none rounded-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A]/70 mb-1">
                  Required Work / Restorations
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your carburetor, cylinder head, or frame restoration goals..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/30 px-3.5 py-2.5 text-xs text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:border-[#1A1A1A] outline-none rounded-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A1A1A] hover:bg-[#333] text-[#FDFCFB] text-[10px] uppercase tracking-widest py-3 border border-[#1A1A1A] transition-colors font-semibold cursor-pointer"
              >
                Inquire With Foundry Lab
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
