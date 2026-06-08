import { assets } from '../assets/assets';
import { Caravan } from 'lucide-react';

export const HeroBanner = () => {
    return (
        <div>
            <img
                src={assets.HeroIMG}
                alt="Hero_IMG"
                className="w-full absolute top-0 right-0 object-cover left-0 h-screen -z-22 grayscale-10"
            />
            <div className="bg-black/32 h-screen w-full absolute top-0 left-0 right-0 -z-12" />

            <div className="text-white max-w-7xl h-padding mx-auto relative h-[88dvh]">
                <div className="max-w-3xl md:float-end translate-y-12 md:text-right text-center">
                    <h1> Your Private Elephant Safari in Udawalawe Starts Here</h1>
                    <p className="max-w-2xl text-white hero-p-txt mt-4 md:text-right text-center md:float-end">
                        Book private safari jeep tours with experienced drivers, wildlife routes,
                        sunrise trips, and easy online reservation.
                    </p>

                    {/* Booking Button */}
                    <button className="btn btn-wide bg-white mt-2 rounded-full">
                        Book Your Safari
                    </button>
                </div>

                <div className="w-full text-center md:text-left absolute bottom-0 inset-s-0">
                    <div className="rounded-2xl bg-white/12 backdrop-blur-xs h-padding py-4 backdrop-brightness-88 h-96 max-w-3xl mx-4">
                        {/* <p className="text-white/80 underline underline-offset-4">
                            Our Featured Package
                        </p> */}

                            {/* Featured Package Section */}

                    </div>
                </div>
            </div>
        </div>
    );
};
