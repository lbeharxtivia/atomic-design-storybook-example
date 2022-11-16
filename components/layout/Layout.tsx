import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";

import MainContainer from "@components/layout/MainContainer";

const Layout = ({ children }: any) => (
    <>
        <div className="flex flex-col justify-between h-screen prose max-w-none">
            <Header />
            <MainContainer>{children}</MainContainer>
            <Footer />
        </div>
    </>
);

export default Layout;
