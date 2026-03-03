import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from '../../api/project'
import simg1 from '../../images/project/line-1.png'
import simg2 from '../../images/project/line-2.png'

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true,
                slidesToScroll: 1
            }
        }
    ]
};

const ProjectSection = () => {

    return (
        <section className="wpo-project-area relative bg-[#191919] pt-[120px] pb-[190px] md:pb-[80px] overflow-hidden z-20" id='portfolio'>
            <div className="wraper wpo-project-wrap">

                <div className="flex md:block grid-cols-2 items-center mb-[60px] md:mb-[40px]">
                    <div className="max-w-[540px] md:text-center text-left md:m-auto md:mb-[40px] text-white">
                        <h2 className="heading-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">
                            Recent Work
                        </h2>

                        <p className="base-font text-lg font-normal pr-[80px] md:pr-0">
                            A selection of my latest projects showcasing creative design, modern development, 
                            and strategic digital solutions.
                        </p>
                    </div>
                </div>


                <div className="wpo-project-slide pb-[90px] md:pb[60px]">

                    <Slider {...settings}>
                        {Projects.map((project, pro) => (

                            <div className="project-item group" key={pro}>

                                <div className="overflow-hidden">
                                    <img
                                        className="w-full transition ease-in-out scale-100 group-hover:scale-110"
                                        src={project.pImg}
                                        alt={project.title}
                                    />
                                </div>

                                <div className="pt-[30px]">

                                    <h2 className="leading-[35px] font-semibold text-[25px] xl:text-[22px] md:text-[20px] text-white">
                                        {project.title}
                                    </h2>

                                    <span className="block font-normal text-[14px] text-[#D8D8D8] mb-2">
                                        {project.subTitle}
                                    </span>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#FFE600] font-semibold hover:underline"
                                    >
                                        View Project →
                                    </a>

                                </div>

                            </div>

                        ))}
                    </Slider>

                </div>

            </div>

            <div className="absolute bottom-0 left-0 -z-10">
                <img src={simg1} alt="" />
            </div>

            <div className="absolute right-0 top-0 -z-10">
                <img src={simg2} alt="" />
            </div>

        </section>
    );
}

export default ProjectSection;
