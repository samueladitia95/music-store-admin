import PageMeta from "../../global/PageMeta";
import LoginModule from "../../modules/Login";

const Login = () => {
  return (
    <>
      <PageMeta
        title="Login"
        description="Music equipment login page"
        keywords="dimas music, music, login"
        disableTitle
      />
      <LoginModule />
    </>
  );
};

export default Login;
