import { ArrowLeft, Award, Star, MapPin, Home, Target, LogOut } from 'lucide-react';

interface PassportScreenProps {
  onBack: () => void;
  onNavigate: (screen: string) => void;
  onLogout: () => void;
  childName: string;
}

export function PassportScreen({ onBack, onNavigate, onLogout, childName }: PassportScreenProps) {
  const visitedCountries = [
    { country: 'China', emoji: '🇨🇳', date: 'Nov 2024', color: '#F475A8', completed: true },
    { country: 'France', emoji: '🇫🇷', date: 'Nov 2024', color: '#4A90E2', completed: true },
    { country: 'India', emoji: '🇮🇳', date: 'Dec 2024', color: '#7BC67E', completed: true },
    { country: 'Egypt', emoji: '🇪🇬', date: 'Dec 2024', color: '#F7A34B', completed: true },
    { country: 'Japan', emoji: '🇯🇵', date: 'Dec 2024', color: '#F475A8', completed: true },
    { country: 'Brazil', emoji: '🇧🇷', date: 'Not visited', color: '#7BC67E', completed: false },
    { country: 'Mexico', emoji: '🇲🇽', date: 'Not visited', color: '#F8D93B', completed: false },
    { country: 'Kenya', emoji: '🇰🇪', date: 'Not visited', color: '#F7A34B', completed: false }
  ];

  const achievements = [
    { title: 'World Explorer', emoji: '🌍', description: 'Visited 5 countries', unlocked: true },
    { title: 'Story Master', emoji: '📚', description: 'Read 10 cultural stories', unlocked: true },
    { title: 'Quiz Champion', emoji: '🏆', description: 'Scored 100% on a quiz', unlocked: true },
    { title: 'Culture Expert', emoji: '🎓', description: 'Learn about 20 cultures', unlocked: false },
    { title: 'Music Maestro', emoji: '🎵', description: 'Explore 15 instruments', unlocked: false },
    { title: 'Food Explorer', emoji: '🍜', description: 'Discover 25 dishes', unlocked: false }
  ];

  const completedCount = visitedCountries.filter(c => c.completed).length;
  const totalCountries = visitedCountries.length;
  const progress = (completedCount / totalCountries) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#E3F2FD] pb-32">
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
              onClick={() => onNavigate('dashboard')}
              className="bg-[#4A90E2] text-white px-6 py-3 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all cursor-pointer border-none flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Home
            </button>
            <button className="bg-[#F475A8] text-white px-6 py-3 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all cursor-pointer border-none flex items-center gap-2">
              <Target className="w-5 h-5" />
              Destinations
            </button>
            <button className="bg-[#7BC67E] text-white px-6 py-3 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all cursor-pointer border-none flex items-center gap-2">
              <Award className="w-5 h-5" />
              Achievements
            </button>
            <button
              onClick={onLogout}
              className="bg-white text-[#333333] px-6 py-3 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-[#F475A8] hover:text-white transition-all cursor-pointer border-none flex items-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              Log Out
            </button>
          </div>
        </div>

        {/* Passport Header */}
        <div className="bg-gradient-to-br from-[#4A90E2] to-[#7BC67E] rounded-[32px] p-12 shadow-[0_8px_30px_rgba(0,0,0,0.12)] mb-12 text-white">
          <div className="flex items-center gap-8 mb-8">
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-[80px]">🌍</span>
            </div>
            <div className="flex-1">
              <h1 className="text-white m-0 mb-2">{childName}'s Passport</h1>
              <p className="m-0 text-[24px] opacity-90">
                Your journey around the world!
              </p>
            </div>
          </div>

          {/* Progress */}
          <div className="bg-white/20 rounded-[24px] p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[22px]">Travel Progress</span>
              <span className="text-[22px]">{completedCount} / {totalCountries} countries</span>
            </div>
            <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Country Stamps */}
        <div className="mb-12">
          <h2 className="text-[#333333] m-0 mb-6">Country Stamps</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {visitedCountries.map((country, index) => (
              <div
                key={index}
                className={`rounded-[32px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all hover:scale-105 cursor-pointer ${
                  country.completed
                    ? 'bg-white'
                    : 'bg-gray-100 opacity-60'
                }`}
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto ${
                    country.completed ? 'animate-pulse' : ''
                  }`}
                  style={{ backgroundColor: country.completed ? country.color : '#cccccc' }}
                >
                  <span className="text-[40px]">{country.emoji}</span>
                </div>
                <h4 className="text-[#333333] m-0 mb-1 text-center text-[22px]">
                  {country.country}
                </h4>
                <p className="text-[#333333] opacity-60 m-0 text-center text-[16px]">
                  {country.date}
                </p>
                {country.completed && (
                  <div className="mt-3 text-center">
                    <span className="inline-block bg-[#7BC67E] text-white px-4 py-1 rounded-[16px] text-[14px]">
                      ✓ Visited
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-[#333333] m-0 mb-6">Achievements & Badges</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all hover:scale-105 ${
                  achievement.unlocked
                    ? 'bg-gradient-to-br from-[#F8D93B] to-[#F7A34B]'
                    : 'bg-white'
                }`}
              >
                <div className={`text-[64px] mb-4 ${!achievement.unlocked && 'grayscale opacity-50'}`}>
                  {achievement.emoji}
                </div>
                <h4 className={`m-0 mb-2 text-[24px] ${achievement.unlocked ? 'text-white' : 'text-[#333333]'}`}>
                  {achievement.title}
                </h4>
                <p className={`m-0 text-[18px] ${achievement.unlocked ? 'text-white opacity-90' : 'text-[#333333] opacity-70'}`}>
                  {achievement.description}
                </p>
                {achievement.unlocked && (
                  <div className="mt-4 flex items-center gap-2 text-white">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-[16px]">Unlocked!</span>
                  </div>
                )}
                {!achievement.unlocked && (
                  <div className="mt-4 text-[#333333] opacity-50 text-[16px]">
                    🔒 Locked
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Card */}
        <div className="mt-12 bg-white rounded-[32px] p-10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <h3 className="text-[#333333] m-0 mb-8">Your Learning Stats</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Countries Visited', value: completedCount, emoji: '🌍', color: '#4A90E2' },
              { label: 'Stories Read', value: 12, emoji: '📚', color: '#F475A8' },
              { label: 'Games Played', value: 8, emoji: '🎮', color: '#7BC67E' },
              { label: 'Total Points', value: 450, emoji: '⭐', color: '#F8D93B' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: stat.color }}
                >
                  <span className="text-[40px]">{stat.emoji}</span>
                </div>
                <div className="text-[40px] mb-2" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <p className="text-[#333333] opacity-70 m-0 text-[18px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}