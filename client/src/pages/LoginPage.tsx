import LoginCard from "../components/loginCard";
import NavBar from "../components/navBar";
import PageWrapper from "../components/pageWrapper";

export default function LoginPage(){

    return (
        <>
            <NavBar />
            <PageWrapper >
                <LoginCard />
            </PageWrapper>
        </>
        
    );
}