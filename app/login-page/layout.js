import { AuthContextProvider } from "./_utils/auth-context.js";

const Layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Layout;
