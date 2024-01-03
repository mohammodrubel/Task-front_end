import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import App from "../App";
import AddContacts from "../pages/AddContacts";
import AllContacts from "../pages/AllContacts";


const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Main/>,
            children:[
                {
                    path:'/',
                    element:<App/>
                },
                {
                    path:'/add-contact',
                    element:<AddContacts/>
                },
                {
                    path:'/all-contacts',
                    element:<AllContacts/>
                },
            ]
        }
    ]
)

export default router 