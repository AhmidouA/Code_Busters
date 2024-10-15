import NavBar from "../components/navBar";
import PageWrapper from "../components/pageWrapper";


export default function ErrorPage({message = 'Navigation Error'} : {message?: string}){
    return(
        <>
        <NavBar />
            <PageWrapper title="An Error Occured">
                <h2>{message}</h2>
            </PageWrapper>
        </>
        
        
    )
}