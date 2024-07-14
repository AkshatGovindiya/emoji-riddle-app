"use client"
import { useSearchParams } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

export default function ScorePage() {
  const searchParams = useSearchParams();
  const correctCount = localStorage.getItem('correctCount');
  const totalCount = localStorage.getItem('totalCount');

  return (
    <div className="container mt-3">
      <nav className="navbar navbar-expand-lg bg-primary-subtle">
        <div className="container-fluid">
          <a className="navbar-brand fw-semibold ms-5" href="#">Emoji Riddle</a>
          <LogoutLink className="btn btn-danger">Log Out</LogoutLink>
        </div>
      </nav>
      <div className="text-center mt-5 text-white">
        <h1>Congratulations !!</h1>
        <p className="fs-3">You got {correctCount} out of {totalCount} correct!</p>
      </div>
    </div>
  );
}
