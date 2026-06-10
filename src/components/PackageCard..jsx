import { Card, Button } from '@heroui/react';
import { assets } from '../assets/assets';

export const PackageCard = () => {
    return (
        <>
            <div>
                <Card className="col-span-12 min-h-72 overflow-hidden rounded-3xl lg:col-span-6 shadow-none">
                    {/* Background image */}

                    <img
                        alt="NEO Home Robot"
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full object-cover grayscale-25"
                        src={assets.PackageTest}
                    />

                    <div className="bg-linear-to-br from-green-900/20 via-black/28 to-green-900/38 h-screen w-full absolute inset-0" />

                    {/* Header */}
                    <Card.Header className="z-10 text-white">
                        <Card.Title className="text-xs font-semibold tracking-wide text-white/70">
                            VERIFIED
                        </Card.Title>
                        <Card.Description className="text-sm leading-5 font-medium text-white/50">
                            Home Robot
                        </Card.Description>
                    </Card.Header>
                    {/* Footer */}
                    <Card.Footer className="z-10 mt-auto flex items-center justify-between">
                        <div>
                            <div className="text-sm font-medium text-white">Available soon</div>
                            <div className="text-xs text-white/60">Get notified</div>
                        </div>
                        <Button className="bg-white text-black" size="sm" variant="tertiary">
                            Book Now
                        </Button>
                    </Card.Footer>
                </Card>
            </div>
        </>
    );
};
