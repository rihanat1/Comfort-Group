import LandingPage from "../Screens/LandingPage";
import LogInSignUpPage from "../Screens/LogInSignUpPage";
import AllPaths from "./AllPaths";

const AllRoutes = [
    {
        path: AllPaths.home,
        element:<LandingPage/>
    },
    {
        path: AllPaths.signUpLogin,
        element:<LogInSignUpPage/>
    }
]
export default AllRoutes