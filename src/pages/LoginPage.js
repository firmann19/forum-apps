import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginImage from '../assets/login-image.jpg';
import Logo from '../assets/forumApp.png';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function LoginPage() {
  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to populate threads and users data
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password })); // @TODO: dispatch async action to login
  };

  return (
    <section className="login-page">
      <header className="login-page__hero">
        <img
          className="rounded-4"
          src={LoginImage}
          height="400"
          width="500"
          alt="First slide"
        />
      </header>
      <article className="login-page__main">
        <div className="row">
          <div className="col">
            <img
              className="logo rounded-4"
              src={Logo}
              height="80"
              width="80"
              alt="Logo"
            />
            <h4 className="myApp mt-2">
              <strong>Welcome to</strong>
              <br />
              <strong className="text-center text-primary">QuoTalk</strong>
            </h4>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col">
            <h5 className="intro-login mb-3">
              <strong>Login to your account</strong>
            </h5>
            <LoginInput login={onLogin} />
            <p className="move-register mt-3">
              Don&apos;t have an account?
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default LoginPage;
