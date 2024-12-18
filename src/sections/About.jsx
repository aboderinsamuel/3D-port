import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes for validation

const About = ({ isLightMode }) => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('aboderinseun01@gmail.com');
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className={`c-space my-20 ${isLightMode ? 'bg-white text-black' : 'bg-black text-white'}`} id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                {/* Grid item 1 */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/profile_linkedIn.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hi, I'm Samuel</p>
                            <p className="grid-subtext">
                                With 3 years of experience, I have honed my skills in frontend and backend development, with a focus on creativity.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid item 2 */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Work</p>
                            <p className="grid-subtext">
                                I specialize in developing and maintaining Software applications. From sleek designs to complex backend services, I ensure high performance, AI integration, and 3D development to enhance user experience.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Globe section */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I work remotely across most timezones.</p>
                            <p className="grid-subtext">I'm based in Nigeria, with remote work available.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                {/* Grid item 4 */}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/cv_preview.png" alt="grid-3" className=" sm:h-[360px] h-fit rounded-lg " />
                        <div>
                            <p className="grid-headtext">My Resume</p>
                            <p className="grid-subtext">
                                You can download my resume&nbsp;
                                <a 
                                    href="/myResume.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 font-semibold hover:cursor-pointer hover:underline">
                                    here
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copy email section */}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[200px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-subtext2 text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img 
                                    src={hasCopied ? "/assets/tick.svg" : (isLightMode ? "/assets/copydm.svg" : "/assets/copy.svg")} 
                                    alt="copy" 
                                    className={`cursor-pointer ${isLightMode ? 'text-black' : 'text-white'}`} 
                                />
                                <p className={`lg:text-2xl md:text-xl font-medium cursor-pointer ${isLightMode ? 'text-black' : 'text-white'}`}>
                                    aboderinseun01@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Adding PropTypes validation for the prop
About.propTypes = {
    isLightMode: PropTypes.bool.isRequired, // Ensuring that isLightMode is passed and is a boolean
};

export default About;
