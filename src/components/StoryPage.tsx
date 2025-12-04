import { ArrowLeft, ArrowRight, Volume2, Lightbulb, LogOut } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface StoryPageProps {
  onBack: () => void;
  onLogout: () => void;
  holiImage: string;
  childrenHoliImage: string;
  sweetsImage: string;
}

export function StoryPage({ onBack, onLogout, holiImage, childrenHoliImage, sweetsImage }: StoryPageProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayNarration = () => {
    setIsPlaying(!isPlaying);
    // In a real app, this would trigger audio playback
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE8F5] pb-32">
      <div className="max-w-[1200px] mx-auto px-12 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-3 bg-white px-6 py-3 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all cursor-pointer border-none text-[#333333]"
          >
            <ArrowLeft className="w-6 h-6" />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={handlePlayNarration}
              className={`flex items-center gap-3 px-8 py-4 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all cursor-pointer border-none ${
                isPlaying 
                  ? 'bg-[#F475A8] text-white animate-pulse' 
                  : 'bg-[#4A90E2] text-white hover:bg-[#3A7BC8]'
              }`}
            >
              <Volume2 className="w-6 h-6" />
              <span>{isPlaying ? 'Playing...' : 'Play Narration'}</span>
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-3 bg-white text-[#333333] px-6 py-3 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-[#F475A8] hover:text-white transition-all cursor-pointer border-none"
            >
              <LogOut className="w-6 h-6" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Main Illustration and Title */}
        <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] mb-12">
          <div className="relative h-[400px]">
            <ImageWithFallback 
              src={holiImage}
              alt="Holi Festival"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-10">
              <h1 className="text-white m-0">Explore the Festival of Colors 🎨</h1>
              <p className="text-white opacity-90 m-0 text-[24px] mt-2">
                A celebration from India
              </p>
            </div>
          </div>
        </div>

        {/* Story Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <div className="bg-white rounded-[32px] p-10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <h2 className="text-[#333333] m-0 mb-6">What is Holi?</h2>
            <p className="text-[#333333] leading-relaxed m-0 mb-6">
              Holi is one of the most colorful and joyful festivals celebrated in India! It's called the "Festival of Colors" because people throw bright, colorful powders at each other while laughing and dancing. Can you imagine a whole day of playing with colors? 🌈
            </p>
            <p className="text-[#333333] leading-relaxed m-0">
              Holi usually happens in March when spring begins. It celebrates the victory of good over evil and the arrival of spring. Families and friends gather together, forget all their worries, and celebrate with music, dancing, and lots and lots of colors!
            </p>
          </div>

          {/* Image Section: Children Celebrating */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <ImageWithFallback 
                src={childrenHoliImage}
                alt="Children celebrating Holi"
                className="w-full h-[350px] object-cover"
              />
            </div>
            <div className="bg-gradient-to-br from-[#F475A8] to-[#F7A34B] rounded-[32px] p-8 flex flex-col justify-center text-white">
              <h3 className="text-white m-0 mb-4">How do people celebrate?</h3>
              <p className="m-0 text-[22px] opacity-90 leading-relaxed">
                Children and adults go outside and throw colorful powders called "gulal" at each other. They use water guns filled with colored water and everyone gets beautifully messy! The colors represent joy, love, and the vibrant energy of spring. 💕
              </p>
            </div>
          </div>

          {/* Sweets and Traditions */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#7BC67E] to-[#4A90E2] rounded-[32px] p-8 flex flex-col justify-center text-white">
              <h3 className="text-white m-0 mb-4">Special Foods</h3>
              <p className="m-0 text-[22px] opacity-90 leading-relaxed">
                Families prepare delicious sweets like "gujiya" (sweet pastries), "ladoo" (round sweets), and "thandai" (a special cool drink with milk and nuts). These treats make the celebration even more special! 🍬
              </p>
            </div>
            <div className="rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <ImageWithFallback 
                src={sweetsImage}
                alt="Indian sweets"
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Did You Know Box */}
          <div className="bg-[#F8D93B] rounded-[32px] p-10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-8 h-8 text-[#F8D93B]" />
              </div>
              <div>
                <h3 className="text-[#333333] m-0 mb-4">Did You Know?</h3>
                <ul className="space-y-3 m-0 pl-6">
                  <li className="text-[#333333] text-[22px]">
                    The colors used in Holi were traditionally made from natural flowers and plants! 🌺
                  </li>
                  <li className="text-[#333333] text-[22px]">
                    People say "Happy Holi!" to greet each other during the festival.
                  </li>
                  <li className="text-[#333333] text-[22px]">
                    The festival also celebrates the love story of Lord Krishna and Radha from ancient tales.
                  </li>
                  <li className="text-[#333333] text-[22px]">
                    In some places, they light big bonfires the night before Holi to celebrate! 🔥
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-8">
            <button
              onClick={onBack}
              className="flex items-center gap-3 bg-white text-[#333333] px-10 py-4 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all hover:scale-105 cursor-pointer border-none"
            >
              <ArrowLeft className="w-6 h-6" />
              <span>Previous Story</span>
            </button>

            <button className="flex items-center gap-3 bg-[#4A90E2] text-white px-10 py-4 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all hover:scale-105 cursor-pointer border-none">
              <span>Next Story</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}