import React from "react";
import HeadPage from "../layout/headerPage";
import HEAD_TITLES from "@/utils/constants/titleConstants";

function Login() {
  return (
    <>
      <HeadPage title={HEAD_TITLES.login}>I am on login page</HeadPage>
    </>
  );
}

export default Login;
