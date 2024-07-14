"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchTsrw8zQlYc4iDO45b1pL4R-QkkqouV-iA&s',
    'https://i.ytimg.com/vi/qDGysZFFTFA/mqdefault.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZUD_tqh5tiwFRDGhwe8rzY4xlGDAz53dVg&s',
    'https://i.ytimg.com/vi/-GKrcIF8jXk/maxresdefault.jpg',
    'https://i.ytimg.com/vi/L32TtsCWjGk/maxresdefault.jpg'
];

const correctAnswers = [
    'cat',
    'dog',
    'mouse',
    'facebook',
    'abc'
];

export default function DashboardPage({ user }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [guesses, setGuesses] = useState(Array(images.length).fill(''));


  const router = useRouter();
  localStorage.clear();
  const handleGuessSubmit = () => {
    const isCorrect = guess.trim().toLowerCase() === correctAnswers[currentIndex].toLowerCase();
    setFeedback(isCorrect ? 'Correct!' : 'Incorrect, try again.');

    const newGuesses = [...guesses];
    newGuesses[currentIndex] = guess;
    setGuesses(newGuesses);

    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setGuess(guesses[currentIndex + 1] || '');
      setFeedback('');
    } else {
      localStorage.setItem('correctCount', correctCount);
      localStorage.setItem('totalCount', images.length);
      router.push(`/dashboard/score`);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setGuess(guesses[currentIndex - 1] || '');
      setFeedback('');
    }
  };

  return (
    <>
      <div className="container mt-3">
      <nav className="navbar navbar-expand-lg bg-primary-subtle">
        <div className="container-fluid">
          <a className="navbar-brand fw-semibold ms-5" href="#">Emoji Riddle</a>
          <LogoutLink className="btn btn-danger">Log Out</LogoutLink>
        </div>
      </nav>
      </div>
      <div className="container mt-3 ">
        <div className="text-center rounded">
          <div className="bg-secondary-subtle">
            <h2>{currentIndex + 1}</h2>
            <img id="emojiImage" src={images[currentIndex]} className="rounded mx-auto d-block" alt="Guess the emoji" />
          </div>
          <div className="input-group my-4">
            <input type="text" className="form-control" placeholder="Enter your guess here" value={guess} onChange={(e) => setGuess(e.target.value)} />
            <button className="btn btn-success" type="button" id="button-addon2" onClick={handleGuessSubmit}>Submit</button>
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <button className="btn btn-primary me-2" onClick={handlePrevious} disabled={currentIndex === 0}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill me-2" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
            Previous
          </button>
          <button className="btn btn-primary" onClick={handleNext}>
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill ms-2" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
