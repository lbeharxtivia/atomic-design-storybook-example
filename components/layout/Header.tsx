import NavMenu from "./header/NavMenu";
import NextImage, { ImageProps as NextImageProps } from "next/image";


const Header = () => {
    return (
        <header
            className="z-20 bg-primary"
            id="myCITC-header"
        >
            <div className="grid items-center grid-cols-3 py-6 text-white myCITC-header-wrapper global-container">
                <div className="myCITC-header-nav-wrapper justify-self-start">
                    <NavMenu />
                </div>
                <div className="justify-self-center">
                    {/* <NextImage
                        src={src}
                        alt={"Logo"}
                        width={194}
                        height={120}
                        quality={100}
                    /> */}
                </div>
            </div>
        </header>
    );
};

export default Header;
