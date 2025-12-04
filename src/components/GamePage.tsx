import { ArrowLeft, Trophy, HelpCircle, RefreshCw, LogOut } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface GameCard {
  id: number;
  name: string;
  country: string;
  image: string;
  emoji: string;
}

interface GamePageProps {
  onBack: () => void;
  onLogout: () => void;
  tacoImage: string;
  sitarImage: string;
  kimchiImage: string;
  fluteImage: string;
}

export function GamePage({ onBack, onLogout, tacoImage, sitarImage, kimchiImage, fluteImage }: GamePageProps) {
  const gameCards: GameCard[] = [
    { id: 1, name: 'Taco', country: 'Mexico', image: tacoImage, emoji: '🌮' },
    { id: 2, name: 'Sitar', country: 'India', image: sitarImage, emoji: '🎵' },
    { id: 3, name: 'Kimchi', country: 'Korea', image: kimchiImage, emoji: '🥬' },
    { id: 4, name: 'Japanese Flag', country: 'Japan', image: '', emoji: '🇯🇵' },
    { id: 5, name: 'Bamboo Flute', country: 'China', image: fluteImage, emoji: '🎋' },
    { id: 6, name: 'Croissant', country: 'France', image: '', emoji: '🥐' }
  ];

  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const handleCardClick = (cardId: number) => {
    if (flippedCards.includes(cardId) || matchedCards.includes(cardId)) return;
    
    const newFlipped = [...flippedCards, cardId];
    setFlippedCards(newFlipped);

    // Simple match logic (in real game, would check pairs)
    if (newFlipped.length === 2) {
      setTimeout(() => {
        // Simulate a match
        if (Math.random() > 0.3) {
          setMatchedCards([...matchedCards, ...newFlipped]);
          setScore(score + 10);
        }
        setFlippedCards([]);
      }, 1000);
    }
  };

  const handleRestart = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setScore(0);
    setShowHint(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] to-[#FFF8E7] pb-32">
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
            <div className="bg-[#F8D93B] px-8 py-4 rounded-[24px] flex items-center gap-3">
              <Trophy className="w-7 h-7 text-[#333333]" />
              <span className="text-[#333333]">Score: {score}</span>
            </div>

            <button
              onClick={onLogout}
              className="flex items-center gap-3 bg-white text-[#333333] px-6 py-3 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-[#F475A8] hover:text-white transition-all cursor-pointer border-none"
            >
              <LogOut className="w-6 h-6" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-[#333333] m-0 mb-4">Match the Culture! 🎯</h1>
          <p className="text-[#333333] opacity-70 m-0 text-[24px]">
            Click on cards to flip them and match items with their countries!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-3 bg-[#7BC67E] text-white px-8 py-4 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all hover:scale-105 cursor-pointer border-none"
          >
            <HelpCircle className="w-6 h-6" />
            <span>Hint</span>
          </button>

          <button
            onClick={handleRestart}
            className="flex items-center gap-3 bg-[#F475A8] text-white px-8 py-4 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all hover:scale-105 cursor-pointer border-none"
          >
            <RefreshCw className="w-6 h-6" />
            <span>Restart</span>
          </button>
        </div>

        {/* Hint Box */}
        {showHint && (
          <div className="bg-[#F8D93B] rounded-[32px] p-8 mb-12 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <h3 className="text-[#333333] m-0 mb-4">💡 Hint:</h3>
            <p className="text-[#333333] m-0 text-[22px]">
              Tacos are from Mexico, Sitar is from India, Kimchi is from Korea, and the Bamboo Flute is from China!
            </p>
          </div>
        )}

        {/* Game Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {gameCards.map((card) => {
            const isFlipped = flippedCards.includes(card.id) || matchedCards.includes(card.id);
            const isMatched = matchedCards.includes(card.id);

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className="relative h-[280px] cursor-pointer perspective-1000"
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Card Back */}
                  <div
                    className="absolute w-full h-full backface-hidden rounded-[32px] bg-gradient-to-br from-[#4A90E2] to-[#7BC67E] flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all hover:scale-105"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <span className="text-[80px]">❓</span>
                  </div>

                  {/* Card Front */}
                  <div
                    className={`absolute w-full h-full backface-hidden rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] ${
                      isMatched ? 'bg-[#7BC67E]' : 'bg-white'
                    }`}
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    {card.image ? (
                      <div className="relative w-full h-full">
                        <ImageWithFallback
                          src={card.image}
                          alt={card.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <h4 className="text-white m-0 text-[24px]">{card.name}</h4>
                          <p className="text-white opacity-90 m-0 text-[18px]">{card.country}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                        <span className="text-[80px] mb-4">{card.emoji}</span>
                        <h4 className={`m-0 mb-2 ${isMatched ? 'text-white' : 'text-[#333333]'}`}>
                          {card.name}
                        </h4>
                        <p className={`m-0 text-[18px] ${isMatched ? 'text-white opacity-90' : 'text-[#333333] opacity-70'}`}>
                          {card.country}
                        </p>
                      </div>
                    )}
                    
                    {isMatched && (
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <span className="text-[28px]">✓</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress */}
        {matchedCards.length > 0 && (
          <div className="mt-12 bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] text-center">
            <h3 className="text-[#333333] m-0 mb-4">Great Job! 🎉</h3>
            <p className="text-[#333333] opacity-70 m-0 text-[22px]">
              You've matched {matchedCards.length} cards so far!
            </p>
            <div className="w-full max-w-md mx-auto h-4 bg-gray-200 rounded-full overflow-hidden mt-6">
              <div
                className="h-full bg-gradient-to-r from-[#4A90E2] to-[#7BC67E] transition-all"
                style={{ width: `${(matchedCards.length / gameCards.length) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Win Message */}
        {matchedCards.length === gameCards.length && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
            <div className="bg-white rounded-[32px] p-12 max-w-lg text-center shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
              <span className="text-[100px] mb-6 block">🏆</span>
              <h2 className="text-[#333333] m-0 mb-4">You Won!</h2>
              <p className="text-[#333333] opacity-70 m-0 mb-8 text-[22px]">
                Amazing job matching all the cultures! You scored {score} points!
              </p>
              <button
                onClick={handleRestart}
                className="bg-gradient-to-r from-[#4A90E2] to-[#7BC67E] text-white px-12 py-5 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:scale-105 transition-all cursor-pointer border-none"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}