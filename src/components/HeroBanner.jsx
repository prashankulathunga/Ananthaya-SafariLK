import { assets } from '../assets/assets';
import { Grip } from 'lucide-react';
import { Card, Link, Button } from '@heroui/react';

export const HeroBanner = () => {
    return (
        <div>
            <img
                src={assets.HeroIMG}
                alt="Hero_IMG"
                className="w-full absolute top-0 right-0 object-cover left-0 h-screen -z-22 grayscale-25"
            />
            <div className="bg-linear-to-br from-stone-900/38 via-stone-950/36 to-stone-700/38 h-screen w-full absolute top-0 left-0 right-0 -z-12" />

            {/* // TODO: Resolve button bug */}

            <div className="text-white max-w-7xl h-padding mx-auto relative h-screen">
                <div className="max-w-3xl md:float-end top-1/8 absolute right-4  h-full">
                    <div className="md:text-right">
                        <div className="flex justify-end gap-2 items-center">
                            <Grip size={20} className='text-default/68' />
                            <p className="text-default/68 text-right">
                                Experienced Drivers | Easy Online Reservation
                            </p>
                        </div>
                        <h1 className="font-normal"> Book Your Private Safari Today</h1>
                        <Button variant="primary" className="mt-8 px-5">
                            Book Now
                        </Button>

                        <div className="flex justify-start md:mt-28">
                            <Card className="max-w-lg px-4 lg:px-6 py-5 bg-default/16 backdrop-blur-2xl shadow-lg">
                                <Card.Header>
                                    <Card.Description className="text-default/72 text-left sm:text-sm text-xs">
                                        Book private safari jeep tours with experienced drivers,
                                        wildlife routes, sunrise trips, and easy online reservation.
                                    </Card.Description>
                                </Card.Header>
                                <Card.Footer className="text-sm sm:text-md text-default">
                                    <Link
                                        aria-label="Go to Acme Creator Hub (opens in new tab)"
                                        href="https://heroui.com"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="text-default"
                                    >
                                        Explore Our Exclusive Packages
                                        <Link.Icon aria-hidden="true" />
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </div>
                    </div>

                    {/* Booking Button */}
                </div>
            </div>
        </div>
    );
};
