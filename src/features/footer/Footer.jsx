const Footer = () => {
    // Constants
    const socialIcons = ["twitter", "facebook", "linkedin", "instagram"];
    const paymentIcons = ["Visa", "PayPal", "Mastercard", "ApplePay"];
    const aboutItems = ["About Us", "Blog", "Team", "Career", "Contact"];
    const companyItems = ["Privacy", "Support", "Help Desk", "All Products", "For Investors"];
    const socialLinks = {
        linkedin: "https://www.linkedin.com/company/frametaleprinting/",
        twitter: "https://x.com/frametale?s=21&t=OoUEq6Pclnd2kyk0iLePqg",
        facebook: "https://www.facebook.com/share/15wngqkWrK/?mibextid=wwXIfr",
        instagram: "https://www.instagram.com/frametale_ai?igsh=MnZ4NHpyeWN2bzNo&utm_source=qr"
    };

    // Helper Function
    const renderList = (title, items) => (
        <div>
            <h3 className="font-bold mb-2 text-[18px]">{title}</h3>
            <ul className="space-y-1 text-[16px]">
                {items.map((item, index) => (
                    <li key={index}>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <footer className="text-[#4E4E4E] py-8 px-6">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 text-center md:text-left">
                {/* Section 1: Logo */}
                <div className="flex flex-col items-center md:items-start gap-6">
                    <img src="/frame-tale/assets/logo.svg" alt="Frametale Logo" className="mb-1 w-[157px] h-[29px]" />
                    <p className="text-[16px] text-[#B5B5B5]">
                        Be sure to take a look at <br /> our Terms of Use and <br /> Privacy Policy
                    </p>
                </div>

                {/* Section 2: About */}
                {renderList("About", aboutItems)}

                {/* Section 3: Company */}
                {renderList("Company", companyItems)}

                {/* Section 4: Subscribe */}
                <div className="space-y-6 w-full">
                    <h3 className="font-bold text-[18px] text-center md:text-left">Subscribe to our Newsletter</h3>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-2 w-full md:w-auto">
                        {/* Email Input - Wider than the subscribe button */}
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-3 py-1.5 text-black border-2 border-[#EBEAED] rounded-full w-full md:w-[calc(100%-1rem)]"
                        />
                        {/* Subscribe Button */}
                        <button className="bg-[#2ABBAD] text-white text-[16px] font-[500] px-4 py-1.5 rounded-full w-full md:w-[calc(50%-1rem)]">
                            Subscribe
                        </button>
                    </div>

                    <div className="flex space-x-10 justify-center md:justify-start">
                        {socialIcons.map((icon, index) => (
                            <a key={index} href={socialLinks[icon]} target="_blank" rel="noopener noreferrer">
                                <img src={`/frame-tale/assets/icon-${icon}.svg`} alt={icon} className="w-[18px] h-[18px]" />
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-wrap space-x-3 justify-center md:justify-start">
                        {paymentIcons.map((icon, index) => (
                            <img
                                key={index}
                                src={`/frame-tale/assets/${icon}.svg`}
                                alt={icon}
                                className="w-[54px] h-[37px] mb-3 md:mb-0"
                            />
                        ))}
                    </div>

                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-[#B5B5B5] mt-6 pt-3">
                <p className="text-right text-[#B5B5B5] text-[16px]">© 2025 Frametale. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
