import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import AuthLayout from "../components/Layout/AuthLayout";
import { RouteComponentProps } from "@reach/router";

// markup
const SignUpPage: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <Container>
        <AuthLayout
          title="Sign Up"
          icon={
            <StaticImage
              src="../images/signup-icon.svg"
              alt="Signup"
              placeholder="none"
            />
          }
          description={
            <div>
              <p className="pb-[30px]">
                Welcome to The Mix, the online guide to life for young people in
                the UK.
              </p>
              <p className="pb-[30px]">
                Your Voices is a community-focused section of The Mix where you
                can share stories about your experiences on a specific issue.
                Upload your own videos, images, blog posts, and playlists to
                Your Voices and share them with your friends.
              </p>
              <p>Sign up here to submit your own content!</p>
            </div>
          }
          linkText="Do you already have an account? Log in here!"
          linkTo="login"
        />
      </Container>
    </Layout>
  );
};

export default SignUpPage;
