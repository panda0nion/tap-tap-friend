export default function AnimatedJelly() {
  return (
    <>
      <div className="relative w-12 h-12 animate-bounce-slow">
        <div className="absolute w-full h-full bg-yellow-300 rounded-full shadow-lg flex items-center justify-center text-white text-xl font-bold">
          🫧
        </div>
      </div>
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }
      `}</style>
    </>
  )
}
