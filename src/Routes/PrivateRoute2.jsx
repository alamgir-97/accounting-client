import { Navigate, useLocation } from "react-router";
import Loading2 from "./Loading2";


const PrivateRoute2 = ({children}) => {
        const { pathName } = useLocation();
        const isLoading = false

        const email = '';
        // const email = 'test@gamil.com';

        if(isLoading) {
            return <Loading2/>   

        }

        if(!isLoading && !email) {
            return <Navigate to="/login}" state={{path: pathName}}></Navigate>
        }
 
    return children;
};

export default PrivateRoute2;