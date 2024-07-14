import Image from "next/image";
import styles from "./page.module.css";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={`container-fluid ${styles.homeContainer}`}>
      <div className="row min-vh-100 justify-content-center align-items-center text-white">
        <div className="col-12 col-md-6 text-center">
          <h1 className="mb-4">Welcome to Emoji Riddle</h1>
          <p className="mb-5">Test your emoji guessing skills! Sign in to start playing or register if you're new here.</p>
          <div className="d-flex justify-content-center">
            <LoginLink className="btn btn-primary me-3">Sign In</LoginLink>
            <RegisterLink className="btn btn-secondary">Sign Up</RegisterLink>
          </div>
        </div>
      </div>
    </div>
  );
}
