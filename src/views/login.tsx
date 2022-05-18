import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";
import AuthLayout from "../components/Layout/AuthLayout";
import LoginForm from "../components/Forms/LoginForm";
import { RouteComponentProps } from "@reach/router";

const LoginPage: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <Container>
        <AuthLayout
          title="Log in"
          icon={
            <StaticImage
              src="../images/login-icon@3x.png"
              alt="Login"
              placeholder="none"
              width={37}
              height={37}
            />
          }
          description={
            <div>
              Welcome to The Mix, offering essential support for under 25s. Log
              in to submit your own content on our platform Your Voices.
            </div>
          }
          linkText="Don’t you have an account? Sign up here!"
          linkTo="signup"
          form={<LoginForm />}
        />
      </Container>
    </Layout>
  );
};

export default LoginPage;
