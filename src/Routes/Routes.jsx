import { createBrowserRouter } from "react-router-dom";
//
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Logout from "../pages/Logout/Logout";
//
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import CompanyLaw from "../pages/CompanyLaw/CompanyLaw";
import Update from "../pages/Update/Update";
import Users from "../pages/Users/Users";
import Freelancing from "../pages/Freelancing/Freelancing";
import WebDevelopment from "../WebDevelopment/WebDevelopment";
import CompanyUpdate from "../pages/CompanyUpdate/CompanyUpdate";
import PHeroLayout from "../layouts/PHeroLayout";
import PHeroLevelTwo from "../pages/PHeroLevelTwo/PHeroLevelTwo/PHeroLevelTwo";
import TypeScript from "../pages/PHeroLevelTwo/TypeScript/TypeScript";
import CSSProperties from "../WebDevelopment/CSSProperties";
import CSSRelated from "../WebDevelopment/CSSRelated";
import Requirements from "../pages/Requirements/Requirements";
import Help from "../pages/Help/Help";
//
import AccountingLayout from "../layouts/AccountingLayout";
import AccountingTheoritical from "../pages/Accounting/AccountingTheoritical/AccountingTheoritical";
import Journal from "../pages/Accounting/Journal/Journal";
import Ledger from "../pages/Accounting/Ledger/Ledger";
//
import AboutEstimating from './../pages/Estimating/AboutEstimating';
import EstimatingLayout from "../layouts/EstimatingLayout";
import BasicItemRate from "../pages/Estimating/BasicItemRate";
import ItemRateSchedule from "../pages/Estimating/ItemRateSchedule";
import ItemRateAnalysis from "../pages/Estimating/ItemRateAnalysis";
//
import EngineeringLayout from "../layouts/EngineeringLayout";
import Architecture from "../pages/Engineering/Architecture/Architecture";
import StructuralEngineering from "../pages/Engineering/StructuralEngineering/StructuralEngineering";
import Electronics from "../pages/Engineering/Electronics/Electronics";
import Blog from "../pages/Blog/Blog";
import CSSDesignSystem from "../WebDevelopment/CSSDesignSystem";
import CSSColors from "../WebDevelopment/CSSColors";
import CSSFonts from "../WebDevelopment/CSSFonts";
import CSSButtons from "../WebDevelopment/CSSButtons";
import BackendDeployment from "../WebDevelopment/BackendDeployment";
import App2 from "../pages/redux/App2";
import Tasks from "../pages/redux/pages/Tasks";
import Chat from "../pages/redux/pages/Chat";
import Settings from "../pages/redux/pages/Settings";
import Profile from "../pages/redux/pages/Profile";
import Archive from "../pages/redux/pages/Archive";
import PrivateRoute3 from "../pages/redux/components/layouts/PrivateRoute3";
import Login2 from "../pages/redux/pages/Login2";
import Signup from "../pages/redux/pages/SignUp";
import Quiz from "../pages/Quiz/Quiz";
import Quiz3 from "../pages/Quiz/Quiz3";
import Draggable from "../pages/Draggable/Draggable";
// import LessonsVBangla from "../education/LessonsVBangla/LessonsVBangla";
// import SignUp from "../pages/redux/pages/SignUp";
import AutoCAD from './../education/AutoCAD/AutoCAD';
// import ClassV from './../education/Class/ClassV/ClassV';
// import ClassVNew from "../education/educationNew/Class/ClassV/ClassVNew";
import BusinessModelCavas from "../business/BusinessModelCanvas/BusinessModelCavas";
import Business from "../business/BusinessModelCanvas/Business";


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
              path: "/businessModelCanvas",
              element: <BusinessModelCavas></BusinessModelCavas>,
            },
            {
              path: "/business",
              element: <Business></Business>,
            },
            // {
            //   path: "/classFive",
            //   element: <ClassV></ClassV>,
            // },
            // {
            //   path: "/classFiveNew",
            //   element: <ClassVNew></ClassVNew>,
            // },
            {
              path: "/autoCAD",
              element: <AutoCAD></AutoCAD>,
            },
            {
              path: "/quiz",
              element: <Quiz></Quiz>,
            },
            {
              path: "/draggable",
              element: <Draggable></Draggable>,
            },
            {
              path: "/quiz3",
              element: <Quiz3></Quiz3>,
            },
            {
              path: "/update/:id",
              element: <Update></Update>,
              loader: ({params}) => fetch(`https://accounting-server-dun.vercel.app/transactions/${params.id}`)
            },
            {
              path: "/blog",
              element: <Blog></Blog>,
            },   
            
          ],
          }, 

          {
            path: '/redux',            
            element:(
            <PrivateRoute3> 
              <App2 />
            </PrivateRoute3>),
            children: [
              {
                index: true,
                element: <Tasks />,
              },
              {
                path: 'redux/archive',
                element: <Archive />,
              },
              {
                path: 'redux/chat',
                element: <Chat />,
              },
              {
                path: 'redux/settings',
                element: <Settings />,
              },
              {
                path: 'redux/profile',
                element: <Profile />,
              },
            ],
          }, 
          {
            path: 'redux/login2',
            element: <Login2/>
          },
          {
            path: 'redux/signup',
            element: <Signup/>
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
                  element: <Journal></Journal>,
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
              {
                path: "engineering/electronics",
                element: <Electronics></Electronics>,
              }
            ]
        },
    
            {
              path: "/companyLaw",
              element: <CompanyLaw></CompanyLaw>,
            },
            {
              path: "/companyUpdate",
              element: <CompanyUpdate></CompanyUpdate>,
            },
            {
              path: "/freelancing",
              element: <Freelancing></Freelancing>,
            },
            {
              path: "/webDev",
              element: <WebDevelopment></WebDevelopment>,
            },
            {
              path: "/requirements",
              element: <Requirements></Requirements>,
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
              element: <PHeroLevelTwo></PHeroLevelTwo>
            },
            {
              path: "typeScript",
              element: <TypeScript></TypeScript>
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
              path: "webDev/BackendDeployment",
              element: <BackendDeployment></BackendDeployment>,
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
              path: "webDev/cssColors",
              element: <CSSColors></CSSColors>,
            },
            {
              path: "webDev/cssFonts",
              element: <CSSFonts></CSSFonts>,
            },
            {
              path: "webDev/cssButtons",
              element: <CSSButtons></CSSButtons>,
            },
            {
              path: "/users",
              element: <Users></Users>,
              loader: () =>fetch('https://accounting-server-dun.vercel.app/users')
            },
            
 
       
          

      ]);



export default Routes;