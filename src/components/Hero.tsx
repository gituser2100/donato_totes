import {ShieldIcon, SmileIcon, BubblesIcon} from 'lucide-react'
import coverPhoto from '../images/tote_bags/toteBagCoverPhoto.jpg';
// --- FEATURE DATA (MOCKED IMPORT) ---
const toteBagFeatures = [
  {
    icon: <ShieldIcon />,
    title: "Built To Last",
    description: "Forget flimsy bags! We use **heavy-duty canvas** and seriously strong stitching, so your tote can handle a full week's groceries or your heaviest laptop without a worry."
  },
  {
    icon: <SmileIcon />,
    title: "Comfortable Carry",
    description: "Those skinny, painful straps? Not here. Our handles are wide and soft, designed to feel comfy on your shoulder even when you’ve loaded the bag up."
  },
  {
    icon: <BubblesIcon />,
    title: "Simple To Clean",
    description: "Accidents are no big deal. We chose materials that are super easy to spot-clean and maintain. Keep your tote looking fresh and stylish with minimal effort, day after day."
  }
];

const Hero = () => {
    return (
        <section className="relative bg-gray-100 font-inter">
            {/* --- Hero Section with Background and Headline --- */}
            <div className="relative pt-24 pb-48 flex content-center items-center justify-center min-h-[75vh]">
                {/* Background Image */}
                <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{backgroundImage: `url(${coverPhoto})`}}>
                    {/* Light Overlay */}
                    <span className="w-full h-full absolute opacity-20 bg-white"></span>
                </div>
                
                <div className="container relative mx-auto z-10">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:w-8/12 px-4 mx-auto text-center">
                            <div className="py-6 sm:py-12 md:py-16">
                                
                                {/* --- NEW DONATO BRAND NAME --- */}
                                <h2 className="text-3xl font-black mb-2 tracking-widest uppercase">
                                    <span className="text-gray-900">D</span>
                                    <span className="text-pink-600">O</span>
                                    <span className="text-gray-900">N</span>
                                    <span className="text-pink-600">A</span>
                                    <span className="text-gray-900">T</span>
                                    <span className="text-pink-600">O</span>
                                </h2>
                                {/* --- END BRAND NAME --- */}

                                <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                                    Style that goes where you go!
                                </h1>
                                <p className="mt-4 text-xl text-gray-700 opacity-90 max-w-xl mx-auto">
                                    Your everyday adventure starts here. The perfect blend of **durable function** and **effortless style.** Find your new essential carry-all.
                                </p>
                                {/* Primary Accent: Hot Pink CTA Button (No Change) */}
                                <a 
                                  href="#features" 
                                  className="mt-8 inline-block bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-pink-700 transition duration-300 transform hover:scale-105 uppercase text-sm tracking-wider"
                                >
                                    Shop The Collection
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Bottom Wave Separator (Stays Gray-100 to match section below) --- */}
                <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-32" style={{ transform: "translateZ(0)" }}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-gray-100 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </div>

            {/* --- Features Section (Dynamic Cards) --- */}
            <section id="features" className="pb-24 bg-gray-100 -mt-24 sm:-mt-32 md:-mt-48">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        {toteBagFeatures.map((feature, index) => (
                            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full rounded-xl shadow-xl transition duration-500 hover:shadow-2xl h-full p-6 text-center border-b-4 border-pink-500">
                                    <div className="px-4 py-5 flex-auto">
                                        {/* Icon Ring Background: White background, Pink icon text */}
                                        <div className={`text-pink-600 p-4 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full 
                                            bg-white border-2 border-pink-500`}
                                        >
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="mt-2 text-base text-gray-600">
                                            {feature.description.split('**').map((part, i) => 
                                                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Hero;
