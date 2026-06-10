import { assets } from '../assets/assets';
import { Grip } from 'lucide-react';
import { Card, Link, Button } from '@heroui/react';

export const HeroBanner = () => {
    return (
        <div className='h-auto'>
            <img
                src={assets.HeroIMG}
                alt="Hero_IMG"
                className="w-full absolute top-0 right-0 object-cover left-0 h-screen -z-22 grayscale-25"
            />
            <div className="bg-linear-to-br from-stone-900/38 via-stone-950/36 to-stone-700/38 h-screen w-full absolute top-0 left-0 right-0 -z-12" />

            {/* // TODO: button bug */}

            <div className="max-w-7xl h-padding mx-auto relative h-screen ">
                <div className="max-w-4xl md:float-end top-1/4 absolute right-4 h-full">
                    <div className="md:text-right">
                        <div className="flex justify-end gap-2 items-center">
                            <Grip size={20} className="text-default/72" />
                            <p className="text-default/72 text-right">
                                Experienced Drivers | Easy Online Reservation
                            </p>
                        </div>
                        <h1 className="font-normal text-default"> Book Your Private Safari Today</h1>
                        <Button variant="primary" className="mt-8 px-5 bg-emerald-950">
                            Book Your Safari
                        </Button>

                        <div className="flex justify-end md:mt-40">
                            <Card className="max-w-lg px-4 lg:px-6 py-5 bg-emerald-950/40 backdrop-blur-sm backdrop-brightness-72 shadow-none">
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
