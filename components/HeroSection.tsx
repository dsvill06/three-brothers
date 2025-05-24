import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-screen md:h-[40vh] overflow-hidden mt-18 md:mt-16">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-fallback.jpg"
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
        {/* Fallback image will show if video fails to load */}
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-4">Bienviendos a</h1>
          <h1 className="text-6xl font-bold mb-4">Interfood 3 Hermanos</h1>
          <p className="text-xl mb-8">Your one-stop shop for quality groceries and household essentials</p>
          <Link 
            href="/shop"
            className="bg-primary hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
} 