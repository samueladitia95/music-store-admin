import PageMeta from "../../global/PageMeta";
import RegisterModule from "../../modules/register";

const Login = () => {
  return (
    <>
      <PageMeta
        title="Register"
        description="Music equipment register page"
        keywords="dimas music, music, register"
        disableTitle
      />
      <RegisterModule />
    </>
  );
};

export default Login;
