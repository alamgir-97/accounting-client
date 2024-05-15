import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Help from "../pages/Help/Help";
import CompanyLaw from "../pages/CompanyLaw/CompanyLaw";
import Update from "../pages/Update/Update";
import Requirements from "../pages/Requirements/Requirements";
import Users from "../pages/Users/Users";
import PrivateRoute from "./PrivateRoute";
import Logout from "../pages/Logout/Logout";
import Freelancing from "../pages/Freelancing/Freelancing";
import WebDevelopment from "../WebDevelopment/WebDevelopment";
import CompanyUpdate from "../pages/CompanyUpdate/CompanyUpdate";
import PHeroLayout from "../layouts/PHeroLayout";
import PHeroLevelTwo from "../pages/PHeroLevelTwo/PHeroLevelTwo/PHeroLevelTwo";
import TypeScript from "../pages/PHeroLevelTwo/TypeScript/TypeScript";
import CSSProperties from "../WebDevelopment/CSSProperties";
import CSSRelated from "../WebDevelopment/CSSRelated";
import AboutEstimating from './../pages/Estimating/AboutEstimating';
//
import AccountingLayout from "../layouts/AccountingLayout";
import AccountingTheoritical from "../pages/Accounting/AccountingTheoritical/AccountingTheoritical";
import Journal from "../pages/Accounting/Journal/Journal";
import Ledger from "../pages/Accounting/Ledger/Ledger";
//
import EstimatingLayout from "../layouts/EstimatingLayout";
import BasicItemRate from "../pages/Estimating/BasicItemRate";
import ItemRateSchedule from "../pages/Estimating/ItemRateSchedule";
import ItemRateAnalysis from "../pages/Estimating/ItemRateAnalysis";
//
import EngineeringLayout from "../layouts/EngineeringLayout";
import Architecture from "../pages/Engineering/Architecture/Architecture";
import StructuralEngineering from "../pages/Engineering/StructuralEngineering/StructuralEngineering";
import Blog from "../pages/Blog/Blog";
import CSSDesignSystem from "../WebDevelopment/CSSDesignSystem";


const Routes = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
            {
              path: "/",
              element: <Home></Home>,
            },
            {
              path: "/update/:id",
              element: <PrivateRoute><Update></Update></PrivateRoute>,
              loader: ({params}) => fetch(`https://accounting-server-dun.vercel.app/transactions/${params.id}`)
            },
            {
              path: "/blog",
              element: <Blog></Blog>,
            },   
            
          ],
          },  
            {
              path: "/accounting",
              element: <AccountingLayout></AccountingLayout>,
              children: 
              [            
                {
                  path: "accounting/accountingTheoritical",
                  element: <AccountingTheoritical></AccountingTheoritical>,
                },
                {
                  path: "accounting/journal",
                  element: <PrivateRoute><Journal></Journal></PrivateRoute>,
                  loader: () => fetch('https://accounting-server-dun.vercel.app/transactions')
                },
                {
                  path: "accounting/ledger",
                  element: <PrivateRoute><Ledger></Ledger></PrivateRoute>,
                },      
          ]
        },
        {
          path: "/engineering",
          element: <EngineeringLayout></EngineeringLayout>,
          children: 
          [            
            {
              path: "engineering/architecture",
              element: <Architecture></Architecture>,
            },
            {
              path: "engineering/structuralEngineering",
              element: <StructuralEngineering></StructuralEngineering>,
            },   
          ]
        },
    
            {
              path: "/companyLaw",
              element: <CompanyLaw></CompanyLaw>,
            },
            {
              path: "/companyUpdate",
              element: <PrivateRoute><CompanyUpdate></CompanyUpdate></PrivateRoute>,
            },
            {
              path: "/freelancing",
              element: <Freelancing></Freelancing>,
            },
            {
              path: "/webDev",
              element: <PrivateRoute><WebDevelopment></WebDevelopment></PrivateRoute>,
            },
            {
              path: "/requirements",
              element: <PrivateRoute><Requirements></Requirements></PrivateRoute>,
            },
            {
              path: "/register",
              element: <Register></Register>,
            },
            {
              path: "/login",
              element: <Login></Login>,
            },
            {
              path: "/logout",
              element: <Logout></Logout>,
            },
            {
              path: "/help",
              element: <Help></Help>,
            },            
         
            {
              path: "/pHero",
              element: <PHeroLayout></PHeroLayout>,
              children: [
            {
              path: "pHeroLevelTwo",
              element: <PrivateRoute><PHeroLevelTwo></PHeroLevelTwo></PrivateRoute>
            },
            {
              path: "typeScript",
              element: <PrivateRoute><TypeScript></TypeScript></PrivateRoute>
            },
            ]
            },
            {
              path: "/estimating",
              element: <EstimatingLayout></EstimatingLayout>,
              children: [
                {
                  path: "/estimating",
                  element: <AboutEstimating></AboutEstimating>,
                },
            {
              path: "estimating/basicItemRate",
              element: <BasicItemRate></BasicItemRate>,
            },
            {
              path: "estimating/itemRateSchedule",
              element: <ItemRateSchedule></ItemRateSchedule>,
            },
            {
              path: "estimating/itemRateAnalysis",
              element: <ItemRateAnalysis></ItemRateAnalysis>,
            },
            ]
            },
            {
              path: "webDev/cssProperties",
              element: <CSSProperties></CSSProperties>,
            },
            {
              path: "webDev/cssRelated",
              element: <CSSRelated></CSSRelated>,
            },
            {
              path: "webDev/cssDesignSystem",
              element: <CSSDesignSystem></CSSDesignSystem>,
            },
            {
              path: "/users",
              element: <PrivateRoute><Users></Users></PrivateRoute>,
              loader: () =>fetch('https://accounting-server-dun.vercel.app/users')
            },
 
       
          

      ]);



export default Routes;