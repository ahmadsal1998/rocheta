import React from 'react';

const ScheduleSection: React.FC = () => {
    return (
<section className="schedule bg-white m-0 p-0 border-b border-gray-200 h-auto pt-[50px] xs:border-b sm:h-auto sm:py-0 sm:border-b-0 md:h-auto md:py-[70px] md:border-b md:border-gray-200">
<div className="container mx-auto px-4 flex items-center max-w-full xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px]">
                <div className="schedule-inner sm:py-[70px] sm:h-auto lg:relative lg:transform md:translate-y-[-50%] lg:z-[9]">
                <div className="flex flex-wrap -mx-4">
                <div className="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full px-4 mb-8 sm:mb-0">
                    {/* single-schedule */}
                            <div className="single-schedule relative text-left z-[3] rounded-md bg-[#1A76D1] transition-all ease-out duration-300 sm:my-4">
                                <div className="custom-inner  md:mb-5">
                                    <div className="icon relative h-full">
                                        <i className="fa fa-ambulance absolute text-[110px] text-white transition-all ease-out duration-300 z-[-1] opacity-20 right-0 bottom-0"></i>
                                    </div>
                                    <div className="single-content">
                                        <span className="text-title-span">Lorem Amet</span>
                                        <h4 className="text-title-h4">Emergency Cases</h4>
                                        <p className="text-title-p">
                                            Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.
                                        </p>
                                        <a href="#" className="link-custom">
                                            LEARN MORE <i className="fa fa-long-arrow-right icon-custom"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full px-4 mb-8 sm:mb-0">
                        {/* single-schedule */}
                            <div className="single-schedule relative text-left z-[3] rounded-md bg-[#1A76D1] transition-all ease-out duration-300 sm:my-4">
                                <div className="custom-inner  md:mb-5">
                                    <div className="icon text-blue-500 text-3xl mb-4">
                                        <i className="icofont-prescription"></i>
                                    </div>
                                    <div className="single-content">
                                        <span className="text-title-span">Fusce Porttitor</span>
                                        <h4 className="text-title-h4">Doctors Timetable</h4>
                                        <p className="text-title-p">
                                            Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.
                                        </p>
                                        <a href="#" className="link-custom">
                                            LEARN MORE <i className="fa fa-long-arrow-right icon-custom"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3 w-full px-4 mb-8">
                            {/* single-schedule */}
                            <div className="single-schedule relative text-left z-[3] rounded-md bg-[#1A76D1] transition-all ease-out duration-300 sm:my-4">
                                <div className="custom-inner  md:mb-5">
                                    <div className="icon text-blue-500 text-3xl mb-4">
                                        <i className="icofont-ui-clock"></i>
                                    </div>
                                    <div className="single-content">
                                        <span className="text-title-span">Donec luctus</span>
                                        <h4 className="text-title-h4">Opening Hours</h4>
                                        <ul className="time-sidual mt-[17px]">
                                            <li className="block text-white w-full text-sm mb-[3px]">
                                                Monday - Friday <span className="inline-block float-right text-sm">8.00-20.00</span>
                                            </li>
                                            <li className="block text-white w-full text-sm mb-[3px]">
                                                Saturday <span className="inline-block float-right text-sm">9.00-18.30</span>
                                            </li>
                                            <li className="block text-white text-sm w-full">
                                                Sunday <span className="inline-block float-right text-sm">Closed</span>
                                            </li>
                                        </ul>

                                        <a href="#" className="link-custom">
                                            LEARN MORE <i className="fa fa-long-arrow-right icon-custom"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
/*

<div className="schedule-inner sm:py-[50px] sm:h-auto lg:relative lg:transform lg:translate-y-[-50%] lg:z-[9]">


.row {
 
}

*/