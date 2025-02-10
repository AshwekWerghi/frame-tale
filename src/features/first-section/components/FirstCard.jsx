const FirstCard = () => {
    return (
        <div className="flex flex-col md:flex-row rounded-[32px] bg-gradient-to-r from-[#2ABBAD] to-[#0777AE] w-full max-w-[765px] h-auto md:h-[200px] mx-auto">
            {/* Image Section */}
            <div className="w-full md:w-[200px] rounded-t-[32px] md:rounded-l-[32px] md:rounded-tr-none overflow-hidden">
                <img
                    src="/frame-tale/assets/photo-books-all-sizes.svg"
                    alt="Image"
                    className="w-full h-[160px] sm:h-[180px] md:h-full md:w-[200px] object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between p-4 text-center md:text-left">
                <h2 className="text-[13px] sm:text-[14px] md:text-[15px] font-[600] text-[#FFFFFF]">New to FRAMETALE?</h2>
                <p className="mt-2 text-[20px] sm:text-[22px] md:text-[24px] font-[800] text-[#FFFFFF]">Save 30% on your first order</p>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] font-[600] text-[#FFFFFF]">by signing up for our newsletter</p>

                {/* Input and Button Section */}
                <div className="mt-4 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-2">
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="px-4 py-2 font-[600] text-[12px] text-[#CDCDCD] bg-[#FFFFFF] rounded-[25px] w-full sm:w-[220px] md:w-[241px]"
                    />
                    <button className="border border-[#FFFFFF] text-[12px] font-[600] text-[#FFFFFF] px-4 py-2 rounded-[22px] w-full sm:w-auto">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FirstCard;