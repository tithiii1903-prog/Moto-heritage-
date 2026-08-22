import React, { useState } from 'react';
import { FileText, Download, Search, Layers, CheckCircle2, Bookmark } from 'lucide-react';
import { ARCHIVE_BLUEPRINTS } from '../data/products';

export const ArchiveView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [downloadedDoc, setDownloadedDoc] = useState<string | null>(null);

  const filtered = ARCHIVE_BLUEPRINTS.filter(
    (bp) =>
      bp.name.toLowerCase().includes(search.toLowerCase()) ||
      bp.code.toLowerCase().includes(search.toLowerCase()) ||
      bp.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleDownload = (code: string) => {
    setDownloadedDoc(code);
    setTimeout(() => setDownloadedDoc(null), 3000);
  };

  return (
    <div id="archive-page" className="w-full flex flex-col gap-12 py-6 animate-fade-in">
      {/* Archive Header */}
      <div className="bg-[#F5F3EF] p-8 md:p-12 border border-[#1A1A1A]/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#D4AF37] block mb-1">
            Historical Blueprint Repository
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A]">
            Factory Technical Microfiche &amp; Schematics
          </h1>
          <p className="text-xs sm:text-sm text-[#1A1A1A]/60 mt-2 max-w-xl font-sans">
            Digitized high-resolution assembly drawings, timing tolerances, oiling line routings, and OEM casting codes dating from 1936 to 1984.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search document archives..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/30 px-4 py-2.5 pl-10 text-xs text-[#1A1A1A] outline-none focus:border-[#1A1A1A] rounded-none placeholder-[#1A1A1A]/40"
          />
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1A1A1A]/50" />
        </div>
      </div>

      {/* Blueprint list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((doc) => (
          <div
            key={doc.id}
            className="bg-[#FDFCFB] p-6 border border-[#1A1A1A]/15 hover:border-[#1A1A1A] transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono text-xs text-[#1A1A1A] bg-[#EAE8E4] px-2.5 py-1 font-medium">
                  {doc.code}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 font-semibold">
                  {doc.year}
                </span>
              </div>
              <h3 className="font-serif text-xl text-[#1A1A1A] leading-tight mb-2 group-hover:underline transition-colors">
                {doc.name}
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mb-4">
                {doc.category}
              </p>
              <div className="flex items-center gap-2 text-xs text-[#1A1A1A]/60">
                <Layers className="w-3.5 h-3.5 text-[#1A1A1A]" />
                <span className="font-sans text-xs">{doc.pages}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1A1A1A]/15 flex justify-between items-center">
              <button
                onClick={() => handleDownload(doc.code)}
                className="text-[10px] uppercase tracking-widest text-[#1A1A1A] hover:text-[#D4AF37] flex items-center gap-1.5 cursor-pointer font-semibold"
              >
                {downloadedDoc === doc.code ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Archived PDF Ready</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Schematic</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
