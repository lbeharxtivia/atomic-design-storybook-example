import { useRouter } from "next/router";
import cn from "classnames";

const MainContainer = ({ children }: any) => {
    const router = useRouter();
    
    

    return (
        <main
            className={cn("flex-1", {
                
            })}>
            {children}
        </main>
    );
};

export default MainContainer;
