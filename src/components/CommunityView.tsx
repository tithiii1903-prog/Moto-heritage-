import React, { useState } from 'react';
import { Heart, MessageSquare, Share2, Award, Camera, Check } from 'lucide-react';

interface BuildPost {
  id: string;
  builder: string;
  location: string;
  bike: string;
  year: string;
  image: string;
  caption: string;
  featuredParts: string[];
  likes: number;
  liked?: boolean;
}

const INITIAL_BUILDS: BuildPost[] = [
  {
    id: 'b-1',
    builder: 'Julian Hayes',
    location: 'Moab, Utah',
    bike: 'Harley-Davidson WR Desert Flathead',
    year: '1947',
    image:
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
    caption:
      'Fitted with Moto Heritage copper oil feeds and the Bates solo saddle. Survived 400 miles of high-desert washboard trails without a missed beat.',
    featuredParts: ['Bates Style Tuck & Roll Seat', 'Solid Copper Fuel Line Kit 5/16"'],
    likes: 142
  },
  {
    id: 'b-2',
    builder: 'Soren Lindqvist',
    location: 'Gothenburg, Sweden',
    bike: 'Shovelhead Hardtail Survivor',
    year: '1972',
    image:
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80',
    caption:
      'Equipped the restored Mikuni VM36 round slide and finned rocker covers. Throttle response is crisp and idle is rock-steady even in freezing Northern mornings.',
    featuredParts: ['Mikuni VM36 Round Slide', 'Finned Aluminum Rocker Boxes'],
    likes: 98
  },
  {
    id: 'b-3',
    builder: 'Mateo Rossi',
    location: 'Bologna, Italy',
    bike: 'Custom Dunstall Triton Cafe',
    year: '1964',
    image:
      'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1000&q=80',
    caption:
      'Raw alloy tank hand-beaten to match Moto Heritage ribbed case textures. Pure mechanical honesty with zero modern electronics.',
    featuredParts: ['Hand-Forged Brass Kickstart Pedal', 'Cerakoted High-Pipe Heat Shield'],
    likes: 215
  }
];

export const CommunityView: React.FC = () => {
  const [builds, setBuilds] = useState<BuildPost[]>(INITIAL_BUILDS);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [newBike, setNewBike] = useState('');
  const [newBuilder, setNewBuilder] = useState('');
  const [newCaption, setNewCaption] = useState('');

  const handleLike = (id: string) => {
    setBuilds((prev) =>
      prev.map((b) => {
        if (b.id === id) {
          const liked = !b.liked;
          return {
            ...b,
            liked,
            likes: liked ? b.likes + 1 : b.likes - 1,
          };
        }
        return b;
      })
    );
  };

  const handlePostBuild = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBike || !newBuilder) return;
    const newEntry: BuildPost = {
      id: `b-${Date.now()}`,
      builder: newBuilder,
      location: 'Foundry Collective',
      bike: newBike,
      year: 'Custom Heritage',
      image:
        'https://images.unsplash.com/photo-1571646034647-529a0b4c1ae8?auto=format&fit=crop&w=1000&q=80',
      caption: newCaption || 'Recently completed heritage restoration using Moto Heritage salvaged parts.',
      featuredParts: ['Mikuni VM36 Round Slide'],
      likes: 1,
      liked: true,
    };
    setBuilds([newEntry, ...builds]);
    setSubmissionSuccess(true);
    setTimeout(() => {
      setSubmissionSuccess(false);
      setShowSubmitModal(false);
      setNewBike('');
      setNewBuilder('');
      setNewCaption('');
    }, 1800);
  };

  return (
    <div id="community-page" className="w-full flex flex-col gap-12 py-6 animate-fade-in">
      {/* Header section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#1A1A1A] pb-6 gap-4">
        <div>
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#D4AF37] block mb-1">
            The Moto Heritage Registry
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A]">
            Community Builds &amp; Road Dispatches
          </h1>
          <p className="text-xs sm:text-sm text-[#1A1A1A]/60 mt-2 max-w-xl font-sans">
            Custom choppers, bobbers, and cafe racers powered by components salvaged and restored through our foundry workshop.
          </p>
        </div>

        <button
          onClick={() => setShowSubmitModal(true)}
          className="bg-[#1A1A1A] text-[#FDFCFB] text-[10px] uppercase tracking-widest px-6 py-3 border border-[#1A1A1A] hover:bg-[#333] transition-colors flex items-center gap-2 cursor-pointer font-semibold"
        >
          <Camera className="w-3.5 h-3.5" />
          Submit Machine
        </button>
      </div>

      {/* Build Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {builds.map((build) => (
          <article
            key={build.id}
            className="bg-[#FDFCFB] border border-[#1A1A1A]/15 hover:border-[#1A1A1A] flex flex-col justify-between transition-all duration-300 group"
          >
            <div>
              <div className="h-64 overflow-hidden relative bg-[#EAE8E4]">
                <img
                  src={build.image}
                  alt={build.bike}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#1A1A1A] text-[#FDFCFB] px-3 py-1 text-[10px] font-mono uppercase tracking-widest">
                  {build.year} • {build.location}
                </div>
              </div>

              <div className="p-6">
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] block mb-1">
                  Builder: {build.builder}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] leading-tight mb-3 group-hover:underline">
                  {build.bike}
                </h3>

                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed mb-4 font-sans italic">
                  "{build.caption}"
                </p>

                {/* Featured parts tags */}
                <div className="space-y-1.5">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#1A1A1A]/50 block font-semibold">
                    Equipped Archive Components:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {build.featuredParts.map((part) => (
                      <span
                        key={part}
                        className="bg-[#F5F3EF] text-[#1A1A1A] text-[10px] uppercase tracking-wider px-2.5 py-1 border border-[#1A1A1A]/15 font-sans"
                      >
                        {part}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social footer */}
            <div className="px-6 py-3.5 border-t border-[#1A1A1A]/15 bg-[#F5F3EF] flex justify-between items-center text-xs">
              <button
                onClick={() => handleLike(build.id)}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  build.liked ? 'text-[#1A1A1A] font-bold' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${build.liked ? 'fill-[#1A1A1A] text-[#1A1A1A]' : ''}`} />
                <span className="text-[10px] uppercase tracking-wider">{build.likes} Endorsements</span>
              </button>

              <span className="text-[#1A1A1A]/60 uppercase tracking-widest text-[9px] flex items-center gap-1 font-semibold">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" /> Verified Builder
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Submission Modal */}
      {showSubmitModal && (
        <div
          onClick={() => setShowSubmitModal(false)}
          className="fixed inset-0 z-50 bg-[#1A1A1A]/75 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FDFCFB] max-w-md w-full p-8 border border-[#1A1A1A] shadow-2xl"
          >
            {submissionSuccess ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-[#F5F3EF] border border-[#1A1A1A] text-[#1A1A1A] flex items-center justify-center mx-auto mb-3">
                  <Check className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-1">
                  Machine Registered
                </h3>
                <p className="text-xs text-[#1A1A1A]/60 font-sans">
                  Your build monograph is now published in the community archive.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePostBuild} className="space-y-4">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#D4AF37] block">
                  Registry Dispatch
                </span>
                <h3 className="font-serif text-2xl text-[#1A1A1A]">
                  Register Your Machine
                </h3>
                <p className="text-xs text-[#1A1A1A]/60 font-sans">
                  Share your vintage motorcycle restoration with collectors and foundry fabricators.
                </p>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A]/70 mb-1">
                    Builder Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Garrett Reed"
                    value={newBuilder}
                    onChange={(e) => setNewBuilder(e.target.value)}
                    className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/30 px-3 py-2 text-xs text-[#1A1A1A] outline-none focus:border-[#1A1A1A] rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A]/70 mb-1">
                    Motorcycle Make, Model &amp; Year
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 1969 Triumph Bonneville T120R"
                    value={newBike}
                    onChange={(e) => setNewBike(e.target.value)}
                    className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/30 px-3 py-2 text-xs text-[#1A1A1A] outline-none focus:border-[#1A1A1A] rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A]/70 mb-1">
                    Build Story / Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe the parts installed, frame modifications, or desert test runs..."
                    value={newCaption}
                    onChange={(e) => setNewCaption(e.target.value)}
                    className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/30 px-3 py-2 text-xs text-[#1A1A1A] outline-none focus:border-[#1A1A1A] rounded-none"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="w-1/2 py-2.5 border border-[#1A1A1A]/30 text-[10px] uppercase tracking-widest text-[#1A1A1A]/70 hover:bg-[#EAE8E4] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-2.5 bg-[#1A1A1A] text-[#FDFCFB] text-[10px] uppercase tracking-widest font-semibold hover:bg-[#333] border border-[#1A1A1A] transition-colors cursor-pointer"
                  >
                    Publish
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
