import { AuthContextProvider } from "../login-page/_utils/auth-context";

const Layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Layout;
