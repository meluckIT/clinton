import React from 'react'
import logo1 from '../../images/work/1.png'
import logo2 from '../../images/work/2.png'

const Expriences = [
    {
        date: '2020 - Present',
        logo: logo1,
        position: 'Creative Lead',
        companyName: 'Aspire Climate Vanguard',
        workFrom: '(Remote)',
        website: 'https://aspireclimatevanguard.com/'
    },
    {
        date: '2022 - Present',
        logo: logo2,
        position: 'UI/UX Designer',
        companyName: 'MeluckIT, United Kingdom',
        workFrom: '(Remote)',
        website: 'https://meluckit.com/'
    },
]

const Exprience = () => {
    return (
        <section className="section-wrap bg-[#191919] overflow-hidden z-50">
            <div className="wraper">
                <div className="max-w-[640px] mx-auto text-center text-white mb-[60px] md:mb-[40px]">
                    <h2 className="heading-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">
                        My Work Experience
                    </h2>
                    <p className="base-font text-lg font-normal">
                        With experience across web development, app development,
                        design, and digital marketing, I build solutions that are
                        efficient, scalable, and user-focused.
                    </p>
                </div>

                <div className="grid grid-rows-1">
                    {Expriences.map((exprience, exp) => (
                        <ul
                            key={exp}
                            className="flex items-center justify-between sm:flex-wrap col:block mb-8
                            bg-[#282828] px-[70px] md:px-[30px] py-[20px] rounded-lg 
                            border transition border-transparent hover:border-[#494949]"
                        >
                            <li className="base-font text-white font-bold text-3xl sm:w-1/2 sm:text-[16px] col:w-full col:text-center col:mb-[10px]">
                                {exprience.date}
                            </li>

                            <li>
                                <img
                                    src={exprience.logo}
                                    alt="company logo"
                                    className="sm:w-1/2 col:w-full col:text-center max-w-[100px] col:mx-auto"
                                />
                            </li>

                            <li className="sm:w-1/2 col:w-full col:text-center col:mt-[20px]">
                                <h2 className="base-font text-white font-bold text-2xl sm:text-[16px]">
                                    {exprience.position}
                                </h2>
                                <p className="base-font text-[#DD584F] font-normal text-[15px] sm:text-[14px]">
                                    {exprience.companyName}, {exprience.workFrom}
                                </p>
                            </li>

                            <li className="col:text-center col:mt-[10px]">
                                {exprience.website && (
                                    <a
                                        href={exprience.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-[16px] font-bold transition hover:text-[#FFE600] sm:w-1/2 sm:text-[14px] col:w-full col:text-center"
                                    >
                                        <i className="ti-arrow-right transition mr-7 text-[16px] col:mr-[5px]"></i>
                                        Go to website
                                    </a>
                                )}
                            </li>
                        </ul>
                    ))}
                </div>
            </div>

            <div className="absolute top-1/2 col:top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
                <svg className="fill-[#E34E44]" width="1500" height="1500" fill="none">
                    <g filter="url(#a)" opacity=".45">
                        <circle cx="750" cy="750" r="200" />
                    </g>
                    <defs>
                        <filter
                            id="a"
                            width="1500"
                            height="1500"
                            x="0"
                            y="0"
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur
                                result="effect1_foregroundBlur_39_4212"
                                stdDeviation="275"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default Exprience