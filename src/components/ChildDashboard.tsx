import { Globe, Book, Lightbulb, Gamepad2, MapPin, LogOut } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ChildDashboardProps {
  childName: string;
  onNavigate: (screen: string) => void;
  onLogout: () => void;
  worldMapImage: string;
}

export function ChildDashboard({ childName, onNavigate, onLogout, worldMapImage }: ChildDashboardProps) {
  const landmarks = [
    { name: 'Great Wall', emoji: '🏯', country: 'China', top: '35%', left: '70%', color: '#F475A8' },
    { name: 'Pyramids', emoji: '🏜️', country: 'Egypt', top: '40%', left: '50%', color: '#F7A34B' },
    { name: 'Eiffel Tower', emoji: '🗼', country: 'France', top: '30%', left: '48%', color: '#4A90E2' },
    { name: 'Taj Mahal', emoji: '🕌', country: 'India', top: '45%', left: '65%', color: '#7BC67E' },
    { name: 'Statue of Liberty', emoji: '🗽', country: 'USA', top: '35%', left: '20%', color: '#F8D93B' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#E3F2FD] pb-32">
      <div className="max-w-[1440px] mx-auto px-12 py-12">
        {/* Welcome Message with Logout */}
        <div className="mb-12 flex items-start justify-between">
          <div>
            <h1 className="text-[#333333] m-0 mb-2">Welcome, {childName}! 👋</h1>
            <p className="text-[#333333] opacity-70 m-0 text-[24px]">
              Ready for another amazing adventure around the world?
            </p>
          </div>
          
          <button
            onClick={onLogout}
            className="flex items-center gap-3 bg-white text-[#333333] px-8 py-4 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-[#F475A8] hover:text-white transition-all cursor-pointer border-none"
          >
            <LogOut className="w-6 h-6" />
            <span>Log Out</span>
          </button>
        </div>

        {/* Interactive World Map */}
        <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#333333] m-0">Explore the World Map</h2>
            <span className="bg-[#F8D93B] px-6 py-2 rounded-[20px] text-[#333333]">
              Click on landmarks! 👆
            </span>
          </div>
          
          <div className="relative rounded-[24px] overflow-hidden">
            <ImageWithFallback 
              src={worldMapImage}
              alt="Interactive World Map"
              className="w-full h-[500px] object-cover"
            />
            
            {/* Tappable Landmarks */}
            {landmarks.map((landmark, index) => (
              <button
                key={index}
                onClick={() => onNavigate('storybook')}
                className="absolute w-16 h-16 rounded-full flex flex-col items-center justify-center transition-all hover:scale-125 cursor-pointer border-none shadow-[0_4px_20px_rgba(0,0,0,0.2)] group"
                style={{ 
                  top: landmark.top, 
                  left: landmark.left,
                  backgroundColor: landmark.color
                }}
              >
                <span className="text-[28px]">{landmark.emoji}</span>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                  <p className="m-0 text-[16px] text-[#333333]">{landmark.name}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Section Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Explore Cultures */}
          <button
            onClick={() => onNavigate('cultures')}
            className="bg-gradient-to-br from-[#4A90E2] to-[#7BC67E] rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all hover:scale-105 cursor-pointer border-none text-left"
          >
            <div className="w-16 h-16 bg-white/20 rounded-[24px] flex items-center justify-center mb-4">
              <Globe className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-white m-0 mb-2">Explore Cultures</h3>
            <p className="m-0 text-white opacity-90 text-[18px]">
              Discover amazing countries and their traditions!
            </p>
          </button>

          {/* Fun Facts */}
          <button
            className="bg-gradient-to-br from-[#F8D93B] to-[#F7A34B] rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all hover:scale-105 cursor-pointer border-none text-left"
          >
            <div className="w-16 h-16 bg-white/20 rounded-[24px] flex items-center justify-center mb-4">
              <Lightbulb className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-white m-0 mb-2">Fun Facts</h3>
            <p className="m-0 text-white opacity-90 text-[18px]">
              Learn cool facts about the world every day!
            </p>
          </button>

          {/* Storybook Library */}
          <button
            onClick={() => onNavigate('storybook')}
            className="bg-gradient-to-br from-[#F475A8] to-[#F7A34B] rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all hover:scale-105 cursor-pointer border-none text-left"
          >
            <div className="w-16 h-16 bg-white/20 rounded-[24px] flex items-center justify-center mb-4">
              <Book className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-white m-0 mb-2">Storybook Library</h3>
            <p className="m-0 text-white opacity-90 text-[18px]">
              Read magical stories from around the world!
            </p>
          </button>

          {/* Games */}
          <button
            onClick={() => onNavigate('games')}
            className="bg-gradient-to-br from-[#7BC67E] to-[#4A90E2] rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all hover:scale-105 cursor-pointer border-none text-left"
          >
            <div className="w-16 h-16 bg-white/20 rounded-[24px] flex items-center justify-center mb-4">
              <Gamepad2 className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-white m-0 mb-2">Games</h3>
            <p className="m-0 text-white opacity-90 text-[18px]">
              Play fun games and test your knowledge!
            </p>
          </button>
        </div>

        {/* Recent Activities */}
        <div className="mt-12 bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <h3 className="text-[#333333] m-0 mb-6">Continue Your Adventure</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Holi Festival Story', emoji: '🎨', color: '#F475A8', progress: 75 },
              { title: 'Match the Culture Game', emoji: '🎮', color: '#4A90E2', progress: 50 },
              { title: 'World Music Quiz', emoji: '🎵', color: '#7BC67E', progress: 30 }
            ].map((activity, index) => (
              <div key={index} className="bg-gray-50 rounded-[24px] p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: activity.color }}
                  >
                    <span className="text-[28px]">{activity.emoji}</span>
                  </div>
                  <h4 className="text-[#333333] m-0 flex-1 text-[20px]">{activity.title}</h4>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full transition-all"
                    style={{ 
                      width: `${activity.progress}%`,
                      backgroundColor: activity.color
                    }}
                  ></div>
                </div>
                <p className="m-0 text-[16px] text-[#333333] opacity-60 mt-2">
                  {activity.progress}% complete
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}