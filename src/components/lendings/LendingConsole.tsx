import { useLocation } from 'react-router';

const LendingConsole = () =>{
    const location = useLocation();
    const routeName = location.pathname.split("/").filter(Boolean).pop() || "Home";
    const formattedTitle = routeName.charAt(0).toUpperCase() + routeName.slice(1, -1) + " Console";
    return(
        <>   <h1>{formattedTitle}</h1>
             <h1>Hello Lending Componet</h1>
        </>
    );
}

export default LendingConsole;