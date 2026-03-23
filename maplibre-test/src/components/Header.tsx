export default function Header() {
  return (
    <header className="w-full h-28 bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200 flex flex-col items-center justify-center text-center shadow-xl">
      
      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-lg">
          Beverages of Asia
      </h1>

      <p className="text-sm md:text-base text-white/90 mt-1">
        Discover traditional drinks across Asia 🌏
      </p>

    </header>
  );
}