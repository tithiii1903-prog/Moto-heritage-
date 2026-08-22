import React from 'react';
import { X, ShieldCheck, Truck, Mail, FileText, Check } from 'lucide-react';

export type LegalModalType = 'TERMS' | 'PRIVACY' | 'SHIPPING' | 'CONTACT' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const [contactSent, setContactSent] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');

  if (!type) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setName('');
      setEmail('');
      setMsg('');
      onClose();
    }, 2000);
  };

  const getTitle = () => {
    switch (type) {
      case 'TERMS':
        return 'Terms of Service & Salvage Authenticity';
      case 'PRIVACY':
        return 'Privacy & Archive Data Protection';
      case 'SHIPPING':
        return 'Insured Shipping, Customs & Returns';
      case 'CONTACT':
        return 'Contact Foundry Dispatch & Technical Support';
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#1A1A1A]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FDFCFB] w-full max-w-2xl p-6 sm:p-8 border border-[#1A1A1A] shadow-2xl overflow-y-auto max-h-[85vh]"
      >
        <div className="flex justify-between items-center pb-4 border-b border-[#1A1A1A] mb-6">
          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#D4AF37] block">
              Foundry Legal Microfiche
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A]">
              {getTitle()}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-[#1A1A1A]/60 hover:text-[#1A1A1A] p-1.5 hover:bg-[#EAE8E4] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {type === 'TERMS' && (
          <div className="space-y-4 text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-sans">
            <p>
              <strong className="text-[#1A1A1A]">1. Salvage &amp; Restoration Standards:</strong> Every item listed on Moto Heritage is either authentic New Old Stock (NOS), precision rebuilt OEM equipment, or artisan recreated to original blueprint tolerances.
            </p>
            <p>
              <strong className="text-[#1A1A1A]">2. Pre-installation Inspection:</strong> Vintage internal combustion components must be inspected by a qualified motorcycle mechanic prior to road operation.
            </p>
            <p>
              <strong className="text-[#1A1A1A]">3. Warranty &amp; Guarantee:</strong> We provide a 90-day mechanical guarantee on all rebuilt carburetors, rocker boxes, and plumbing manifolds.
            </p>
          </div>
        )}

        {type === 'PRIVACY' && (
          <div className="space-y-4 text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-sans">
            <p>
              Moto Heritage is dedicated to the privacy of our global builder and collector registry. We do not sell your personal, garage, or payment records to any third-party marketing entities.
            </p>
            <p>
              All transaction records are encrypted using 256-bit SSL protocols. Requisition details are securely archived for provenance documentation.
            </p>
          </div>
        )}

        {type === 'SHIPPING' && (
          <div className="space-y-4 text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-sans">
            <div className="flex items-center gap-2 text-[#1A1A1A] font-semibold text-[10px] uppercase tracking-widest">
              <Truck className="w-3.5 h-3.5 text-[#D4AF37]" /> Worldwide Tracked &amp; Insured Dispatch
            </div>
            <p>
              • <strong className="text-[#1A1A1A]">Domestic Orders ($200+):</strong> Complimentary 2-Day Air Freight with full value insurance and signature confirmation.
            </p>
            <p>
              • <strong className="text-[#1A1A1A]">Protective Packaging:</strong> All cast brass, copper, and aluminum parts are vacuum sealed in paraffin wax paper with custom high-density foam framing.
            </p>
            <p>
              • <strong className="text-[#1A1A1A]">Hassle-Free Returns:</strong> 30-day return policy for uninstalled components in original foundry packaging.
            </p>
          </div>
        )}

        {type === 'CONTACT' && (
          <div>
            {contactSent ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 border border-[#1A1A1A] bg-[#F5F3EF] text-[#1A1A1A] flex items-center justify-center mx-auto mb-3">
                  <Check className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-2xl text-[#1A1A1A]">Dispatch Received</h3>
                <p className="text-xs text-[#1A1A1A]/60 mt-1 font-sans">
                  Our foundry parts specialist will reply to your email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A]/70 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Wyatt Walker"
                      className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/30 px-3 py-2 text-xs text-[#1A1A1A] outline-none focus:border-[#1A1A1A] rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A]/70 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rider@vintagefoundry.com"
                      className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/30 px-3 py-2 text-xs text-[#1A1A1A] outline-none focus:border-[#1A1A1A] rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A]/70 mb-1">
                    Technical Inquiry / Part Request
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Provide engine casing numbers, casting stamps, or restoration requirements..."
                    className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/30 px-3 py-2 text-xs text-[#1A1A1A] outline-none focus:border-[#1A1A1A] rounded-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#1A1A1A] hover:bg-[#333] text-[#FDFCFB] text-[10px] uppercase tracking-widest px-8 py-3 border border-[#1A1A1A] transition-colors font-semibold cursor-pointer"
                  >
                    Send to Foundry Dispatch
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
