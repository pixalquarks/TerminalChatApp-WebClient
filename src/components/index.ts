import {lazy} from 'react';

// import Header from "./Header";
// import UserList from "./UserList";
// import Chat from "./Chat";
// import Footer from "./Footer";
// import Login from "./Login";
// import Error from "./Error";

const Header = lazy(() => import("./Header"));
const UserList = lazy(() => import("./UserList"));
const Chat = lazy(() => import("./Chat"));
const Footer = lazy(() => import("./Footer"));
const Login = lazy(() => import("./Login"));
const Error = lazy(() => import("./Error"));

export default { Header, UserList, Chat, Footer, Login, Error };