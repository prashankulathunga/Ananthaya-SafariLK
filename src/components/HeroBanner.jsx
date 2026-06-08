import { assets } from '../assets/assets';
import { Forward, Smartphone } from 'lucide-react';

export const HeroBanner = () => {
    return (
        <div>
            <img
                src={assets.HeroIMG}
                alt="Hero_IMG"
                className="w-full absolute top-0 right-0 object-cover left-0 h-screen -z-22 grayscale-25"
            />
            <div className="bg-linear-to-br from-stone-900/38 via-stone-950/40 to-stone-900/38 h-screen w-full absolute top-0 left-0 right-0 -z-12" />

            <div className="text-white max-w-7xl h-padding mx-auto relative h-[88dvh]">
                <div className="max-w-3xl md:float-end md:translate-y-20 translate-y-1/6 md:text-right text-center">
                    <h1 className="font-light">
                        {' '}
                        Your Private Elephant Safari in Udawalawe Starts Here
                    </h1>
                    {/* <p className="max-w-2xl text-white hero-p-txt mt-4 md:text-right text-center md:float-end font-light">
                        Book private safari jeep tours with experienced drivers, wildlife routes,
                        sunrise trips, and easy online reservation.
                    </p> */}

                    {/* Booking Button */}
                    <button className="btn md:btn-md btn-sm btn-wide bg-white mt-4 rounded-full">
                        Book Your Safari <Forward size={16} />
                    </button>
                </div>

                <div className="w-full text-center md:text-left absolute bottom-0  inset-s-0 h-auto">
                    <div className="h-padding m-4 flex md:items-center md:justify-between md:flex-row flex-col justify-between items-end">
                        <p className="text-white/80 text-xs leading-4 md:max-w-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ipsum
                            repellat natus nobis. Laboriosam quaerat ab reprehenderit minima
                            repudiandae voluptate impedit, maxime hic, adipisci, a rerum ipsam ipsum
                            nihil vel?
                        </p>
                    <Smartphone className='md:mt-0 mt-40'/>
                    </div>


                </div>
            </div>
        </div>
    );
};
