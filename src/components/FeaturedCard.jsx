export const FeaturedCard = () => {
    return (
        <div>
            <div className="w-full border-ts flex items-center justify-start h-64">
                <div className='border-ts min-w-1/3 flex flex-col items-center justify-evenly h-full'>

                <div className='border-ts h-full w-full'>Side 01 up</div>
                <div className='border-ts h-full w-full'>Side 01 down</div>

                </div>
                <div className='border-ts min-w-2/3 h-full'>Side 02</div>
            </div>
        </div>
    );
};
