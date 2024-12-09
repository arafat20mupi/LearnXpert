import { createBrowserRouter} from "react-router-dom"
import App from "../App"
import Gallery from "../Pages/Gallery/Gallery";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/gallery',
                element: <Gallery />
            }
        ]
    }
]);

export default router;