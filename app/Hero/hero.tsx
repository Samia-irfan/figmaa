// import Image from "next/image"

export default function Hero() {
    return (
      <div className="relative w-full h-[704px]">
        {/* Background Image with Card */}
        <div
          className="bg-cover bg-center h-[704px] md:h-[639px] lg:h-[704px] relative"
          style={{
            backgroundImage: 'url(/hero.png)', // Path to your background image
          }}
        >
         
        </div>
      </div>
    );
  }