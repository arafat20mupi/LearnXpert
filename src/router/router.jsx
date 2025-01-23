import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../components/Home/Home";
import Result from "../Pages/Result/Result";
import Quiz from "../components/Quiz/Quiz";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import QuizClasses from "../components/Quiz-Classes/QuizClasses";
import AdmissionForm from "../components/AdmissionForm/AdmissionForm";
import AdmissionInfo from "../components/AdmissionInfo/AdmissionInfo";
import AdminHome from "../Dashboard/Home/AdminHome";
import AllStudents from "../Dashboard/AllStudents/AllStudents";
import Dashboard from "../Dashboard/Dashboard";
import UploadResult from "../Dashboard/UploadResult/UploadResult";
import AllParents from "../Dashboard/AllParents/AllParents";
import AllTeacher from "../Dashboard/AllTeacher/AllTeacher";
import UpdateHeadline from "../Dashboard/UpdateHeadline/UpdateHeadline";
import UploadAssignment from "../Dashboard/UploadAssignment/UploadAssignment";
import Syllabus from "../Dashboard/Syllabus/Syllabus";
import UploadClassReport from "../Dashboard/UploadClassReport/UploadClassReport";
import AttendanceTracking from "../Dashboard/AttendanceTracking/AttendanceTracking";
import ClassSchedule from "../Dashboard/ClassSchedule/ClassSchedule";
import ReciveAssignment from "../Dashboard/ReciveAssignmenr/ReciveAssignment";
import AllUsers from "../Dashboard/AllUsers/AllUsers";

import UploadResultDemo from "../Dashboard/UploadResult/UploadResultDemo";
import { ClassRoutine } from "../Dashboard/StudenPannel/ClassRoutine/ClassRoutine";
import UploadAssignmentForStudent from "../Dashboard/StudenPannel/UploadAssignment/UploadAssignmentForStudent";
import { OnlineClass } from "../Dashboard/StudenPannel/OnlineClass/OnlineClass";
// import ResultDemo from "../Pages/Result/ResultDemo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/quiz-classes",
        element: <QuizClasses />,
      },
      {
        path: "/admission",
        element: <AdmissionForm />,
      },
      {
        path: "/admissionInfo",
        element: <AdmissionInfo />,
      },

    ],

  },
  {
    path: "/deshboard",
    element: <Dashboard />,
    children: [
      {
        path: "admin",
        element: <AdminHome />
      },
      {
        path: "allUsers",
        element: <AllUsers />
      },
      {
        path: "all-student",
        element: <AllStudents />
      },
      {
        path: "all-parent",
        element: <AllParents />
      },
      {
        path: "all-teacher",
        element: <AllTeacher />
      },
      ///Teacher access
      {
        path: "upload-result",
        element: <UploadResult />
      },
      ///Teacher access
      {
        path: "upload-result",
        element: <UploadResult />
      },
      {
        path: "upload-assignment",
        element: <UploadAssignment />
      },
      {
        path: "recive-assignment",
        element: <ReciveAssignment />
      },
      {
        path: "upload-syllabus",
        element: <Syllabus />
      },
      {
        path: "upload-class-report",
        element: <UploadClassReport />
      },
      {
        path: "class-schedule",
        element: <ClassSchedule />
      },
      {
        path: "attendance-tracking",
        element: <AttendanceTracking />
      },
      {
        path: "update-headline",
        element: <UpdateHeadline />
      },
      
      {
        path: "upload-demo",
        element: <UploadResultDemo />
      },
      {
        path: "class-routine",
        element: <ClassRoutine />
      },
      {
        path: "upload-assignment-for-student",
        element: <UploadAssignmentForStudent />
      },
      {
        path: "online-class",
        element: <OnlineClass />
      },
    ]
  }
]);

export default router;
