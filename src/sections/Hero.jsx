import {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import PropTypes from 'prop-types'; // Import PropTypes for validation

const Hero = ({ isLightMode }) => { // Receive isLightMode as a prop
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className={`min-h-screen w-full flex flex-col relative ${isLightMode ? 'bg-white' : 'bg-black'}`} id={"home"}>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className={`hero_tag ${isLightMode ? 'text-neutral-400' : 'text-gray_gradient'}`}>
                    Software Engineer
                </p>
                <p className={`sm:text-xl text-lg font-medium ${isLightMode ? 'text-black' : 'text-white'} text-center font-generalsans`}>
                    I'm a passionate Software Engineer creating applications in all fields
                </p>
            </div>

            <div className="w-full h-full absolute inset-0 md:mt-8">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom position={sizes.deskPosition} rotation={[0, -Math.PI, 0]} scale={sizes.deskScale} />
                        </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition} />
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    );
}

// Adding PropTypes validation for the prop
Hero.propTypes = {
    isLightMode: PropTypes.bool.isRequired, // Ensuring that isLightMode is passed and is a boolean
};

export default Hero;

