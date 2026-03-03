import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../images/logo.png';
import CtaSection from '../ctaSection/ctaSection';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/xqedrkna', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                setSubmitted(true);
                setEmail('');
            } else {
                alert('There was an error submitting your email.');
            }
        } catch (err) {
            console.error(err);
            alert('Network error.');
        }
    };

    return (
        <footer className="relative bg-[#191919] z-10">
            <CtaSection />

            <div className="pt-[170px] pb-[90px] md:py-[90px] md:pb-[20px] overflow-hidden relative -z-10">
                <div className="wraper">
                    <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
                        {/* Logo & Description */}
                        <div className="w-[420px] xl:w-[355px] lg:w-[297px] pr-[75px] md:mb-[40px] lg:pr-0 relative text-left after:absolute after:content[''] after:bg-[#ffffff0d] after:w-[1px] after:h-full after:right-[30px] after:top-0 after:lg:hidden">
                            <div className="mb-7">
                                <Link className="text-[45px] font-bold flex items-center text-white" to="/">
                                    <img className="rounded-[50%] mr-[10px]" src={Logo} alt="Clinton Logo" />
                                    Clinton.
                                </Link>
                            </div>
                            <p className="text-white text-[16px] mb-[10px]">
                                Experienced in building web and mobile solutions while delivering clean design, strong performance, and real business value.
                            </p>
                            <ul className="overflow-hidden pt-[15px]">
                                <li className="text-white float-left group"><Link className="text-white transition-all group-hover:text-[#FFE600]" to="/"><i className="ti-facebook"></i></Link></li>
                                <li className="text-white float-left group ml-[15px]"><Link className="text-white transition-all group-hover:text-[#FFE600]" to="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li className="text-white float-left group ml-[15px]"><Link className="text-white transition-all group-hover:text-[#FFE600]" to="/"><i className="ti-linkedin"></i></Link></li>
                                <li className="text-white float-left group ml-[15px]"><Link className="text-white transition-all group-hover:text-[#FFE600]" to="/"><i className="ti-pinterest"></i></Link></li>
                                <li className="text-white float-left group ml-[15px]"><Link className="text-white transition-all group-hover:text-[#FFE600]" to="/"><i className="ti-vimeo-alt"></i></Link></li>
                            </ul>
                        </div>

                        {/* Navigation */}
                        <div className="w-[200px] md:w-full ml-auto md:mb-[40px] lg:pr-0 relative text-left">
                            <div className="mb-7">
                                <h3 className="text-[24px] font-bold font-base-font text-white capitalize">Navigation</h3>
                            </div>
                            <ul>
                                <li className="relative mb-[8px] block"><Link className="pl-[15px] text-white hover:text-[#59C378]" to="about" spy={true} smooth={true} duration={500}>About us</Link></li>
                                <li className="relative mb-[8px] block"><Link className="pl-[15px] text-white hover:text-[#59C378]" to="contact" spy={true} smooth={true} duration={500}>Contact us</Link></li>
                                <li className="relative mb-[8px] block"><Link className="pl-[15px] text-white hover:text-[#59C378]" to="portfolio" spy={true} smooth={true} duration={500}>Video Guide</Link></li>
                                <li className="relative mb-[8px] block"><Link className="pl-[15px] text-white hover:text-[#59C378]" to="blog" spy={true} smooth={true} duration={500}>Recent Post</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="pl-[15px] md:pl-[0px] md:mb-[40px] lg:pr-0 relative text-left">
                            <div className="mb-7">
                                <h3 className="text-[24px] font-bold font-base-font text-white capitalize">All Services</h3>
                            </div>
                            <ul>
                                <li className="relative mb-[8px] block"><Link className="pl-[15px] text-white hover:text-[#59C378]" to="service" spy={true} smooth={true} duration={500}>Web Design</Link></li>
                                <li className="relative mb-[8px] block"><Link className="pl-[15px] text-white hover:text-[#59C378]" to="service" spy={true} smooth={true} duration={500}>Web Development</Link></li>
                                <li className="relative mb-[8px] block"><Link className="pl-[15px] text-white hover:text-[#59C378]" to="service" spy={true} smooth={true} duration={500}>Brand Identity</Link></li>
                                <li className="relative mb-[8px] block"><Link className="pl-[15px] text-white hover:text-[#59C378]" to="service" spy={true} smooth={true} duration={500}>Digital Marketing</Link></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="md:mb-[40px] lg:pr-0 relative text-left">
                            <div className="mb-7">
                                <h3 className="text-[24px] font-bold font-base-font text-white capitalize">Newsletter</h3>
                            </div>
                            <p className="text-white text-[16px] mb-[10px]">Subscribe to get updates directly to your inbox.</p>
                            {submitted ? (
                                <p className="text-green-400 mt-2">Thank you for subscribing!</p>
                            ) : (
                                <form className="mt-[25px] relative" onSubmit={handleSubmit}>
                                    <div className="input-1">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="focus:outline-0 w-full bg-[#232925] h-[50px] text-white py-[6px] px-[15px] border border-[#222623]"
                                            placeholder="Email Address *"
                                            required
                                        />
                                    </div>
                                    <div className="absolute right-[20px] top-[50%] -translate-y-1/2">
                                        <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-[#59C378] text-white rounded" aria-label="Send email">
                                            Subscribe <i className="ti-email"></i>
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Background SVG */}
                <div className="absolute top-[-140%] right-[0] -z-10">
                    <svg className="fill-[#59C378]" width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
                        <g filter="url(#filter0_f_39_3833)">
                            <circle cx="803" cy="803" r="303" fillOpacity="0.5" />
                        </g>
                        <defs>
                            <filter id="filter0_f_39_3833" x="0" y="0" width="1606" height="1606" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="wraper">
                <div className="border-t-1 border-[#ffffff0d] relative">
                    <div className="h-[1px] absolute left-[15px] top-0 bg-[#ffffff0d] w-[calc(100%+30px)]"></div>
                    <p className="text-center text-white text-[14px] py-[20px]">
                        Copyright &copy; 2023 Clinton. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;