import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Services from '../../api/service';
import classnames from 'classnames';

const ServiceSection = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    // Function to render services dynamically
    const renderServices = (start, end) => {
        return Services.slice(start, end).map((service, index) => (
            <div
                key={index}
                className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 
                inline-block bg-[#232221] border-2 border-[#373737] 
                rounded-[12px] text-center px-[40px] lg:px-[20px] 
                py-[50px] md:mb-[30px] group"
            >
                <div className="max-w-[120px] max-h-[120px] bg-[#373737]
                    group-hover:bg-[#59C378] mx-auto leading-[140px] 
                    mb-[30px] rounded-[50%] transition-all">
                    <i className={`fi ${service.icon} transition-all text-[50px] text-[#FFE600] group-hover:text-white`}></i>
                </div>

                <h2 className="font-bold text-[26px] lg:text-[20px] 
                    leading-[31px] text-white mb-[20px]">
                    {service.sTitle}
                </h2>

                <p className="text-[16px] md:text-[14px] text-[#D8D8D8] my-6 md:my-4">
                    {service.description}
                </p>
            </div>
        ));
    };

    return (
        <section className="section-wrap bg-[#191919] overflow-hidden z-50" id="service">
            <div className="wraper sm:max-w-[540px] col:max-w[100%]">

                {/* Section Title */}
                <div className="max-w-[640px] mx-auto text-center text-white mb-[60px] md:mb-[40px]">
                    <h2 className="font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">
                        Popular Services
                    </h2>
                    <p className="text-lg font-normal">
                        I provide creative design, web and app development, and digital marketing services—including graphic design, 
                        UI/UX prototyping, web and mobile development, SEO, branding, and social media marketing—to help businesses build, grow, and stand out online.
                    </p>
                </div>

                {/* Tabs */}
                <Nav tabs className="flex col:flex-col-reverse items-center justify-center list-none">
                    {[
                        { id: '1', label: 'Design' },
                        { id: '2', label: 'Development' },
                        { id: '3', label: 'Marketing' }
                    ].map((tab) => (
                        <NavItem key={tab.id}>
                            <NavLink
                                className={`${classnames({ active: activeTab === tab.id })} 
                                nav-link inline-block border-tab
                                w-[250px] md:w-[180px] sm:w-[120px] col:w-[150px] 
                                h-[65px] md:h-[55px] sm:h-[45px] 
                                bg-[#373737] text-center mr-7 md:mr-5 sm:mr-[10px] 
                                col:mb-[10px] col:mr-0 rounded-[38px] 
                                font-bold text-[22px] md:text-[16px] sm:text-[14px] 
                                leading-[65px] md:leading-[55px] sm:leading-[35px] 
                                p-0 border-2 border-transparent text-white 
                                active:text-[#FFE600]`}
                                onClick={() => toggle(tab.id)}
                            >
                                {tab.label}
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav>

                {/* Tab Content */}
                <div className="mt-[65px] sm:mt-[45px]">
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div className="row align-items-center">
                                {renderServices(0, 3)}
                            </div>
                        </TabPane>

                        <TabPane tabId="2">
                            <div className="row align-items-center">
                                {renderServices(3, 6)}
                            </div>
                        </TabPane>

                        <TabPane tabId="3">
                            <div className="row align-items-center">
                                {renderServices(6, 9)}
                            </div>
                        </TabPane>
                    </TabContent>
                </div>

            </div>
        </section>
    );
};

export default ServiceSection;