import { MenuBar } from './MenuBar';

export const NavBar = () => {
    return (
        <div>
            <header className="max-w-7xl mx-auto h-24 py-4 w-full text-white relative z-40">
                <nav className="h-full h-padding">
                    <div className="flex justify-between items-center w-full h-full">
                        {/* need to have to sides brand, navigation menu, contact */}

                        <div className="left">
                            <p className='text-white font-medium'>Safari with Ananthaya</p>
                        </div>
                        <div className="middle lg:block hidden">
                            <MenuBar/>
                        </div>
                        <div className="right lg:block hidden">
                            <button className="btn btn-active btn-secondary rounded-full">Contact Us</button>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};
