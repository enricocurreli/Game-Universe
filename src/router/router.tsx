import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import routes from "./routes";
import HomePage from "../pages/HomePage";
import PlatformsPage from "../pages/PlatformsPage";
import GenresPage from "../pages/GenresPage";
import DetailGamePage from "../pages/DetailGamePage";
import ThisYearsPage from "../pages/ThisYearsPage";
import NewReleasesPage from "../pages/NewReleasesPage";
import NextReleasesPage from "../pages/NextReleasesPage";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        children:[

            {
                path: routes.home, 
                element: <HomePage />, 
                
            },
            {
                path: routes.genres,
                element: <GenresPage />,
            },

            {
                path: routes.platform, 
                element: <PlatformsPage />,
            },
            {
                path: routes.thisYears, 
                element: <ThisYearsPage />,
            },
            {
                path: routes.newReleases, 
                element: <NewReleasesPage />,
            },
            {
                path: routes.nextReleases, 
                element: <NextReleasesPage />,
            },
            {
                path: routes.search, 
                element: <SearchPage />,
            },
            
        ]
    },
    {
        path:routes.detail,
        element: <DetailGamePage />,
        
    } 

])


export default router;