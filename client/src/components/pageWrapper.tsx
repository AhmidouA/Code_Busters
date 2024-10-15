import { Container } from "@mui/material";

interface IPageWrapper {
    title: string,
    children: React.ReactNode;
}

export default function PageWrapper({title, children}: IPageWrapper){

    return (
        <Container maxWidth='lg' sx={{display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center", marginTop: "6rem"}}>
            <h1 style={{alignSelf: 'start'}}>{title}</h1>
            {children}
        </Container>
    );
}