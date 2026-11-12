
"use client";

import { useState } from "react";

const suspects = [
  {
    name: "Sam",
    age: 19,
    occupation: "Bassist",
    alibi: "Why would you think it's me?",
    initials: "S",
    image: "images/sam.jpg",
  },
  {
    name: "Anelka",
    age: 19,
    occupation: "Drummer",
    alibi: "I ain't got nothing to do with this.",
    initials: "A",
    image: "images/anelka.jpeg",
  },
  {
    name: "Xuan",
    age: 19,
    occupation: "Drummer",
    alibi: "I'm too cute to be a murderer.",
    initials: "X",
    image: "images/xuan.jpg",
  },
  {
    name: "Oudam",
    age: 19,
    occupation: "Rhythm guitarist",
    alibi: "Not me.",
    initials: "O",
    image: "images/oudam.jpg",
  },
];


export default function Home() {
  const [active, setActive] = useState(0);

  const suspect = suspects[active];

  return (
    <main className="case-page">
      <header className="police-header">
        <div className="department-name">
          <strong>Singapore University of Technology and Design</strong>
          <span>OFFICE OF MAJOR CRIMES</span>
        </div>
        <div className="header-case">
          <span>CASE NO.</span>
          <strong>067-A</strong>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <h1>
            LOOKING FOR
            <br />
            <span>DETECTIVES.</span>
          </h1>
          <div className="red-rule" />
          <p className="hero-description">
            A murder has been committed at SUTD, and we, the office of major crimes, are recruiting detectives to solve this mystery once and for all.
          </p>
          <p className="recruitment-note">
            DO YOU HAVE THE WITS TO SOLVE THIS MYSTERY?
          </p>
          <a className="case-link" href="#briefing">
            CHECK EVENT DETAILS ↓
          </a>
        </div>

        <div className="evidence-photo">
          <div className="photo-topline">
            <span>EVIDENCE PHOTO 001</span>
            <span>DO NOT REMOVE</span>
          </div>
          <div className="crime-scene">
            <img
              src="/images/crime-scene.jpg"
              alt="Crime scene evidence photograph"
            />
            <span className="scene-label">
              SCENE UNDER INVESTIGATION
            </span>
          </div>
          <div className="photo-caption">
            <span>FIG. A — LOCATION OF VICTIM</span>
            <span>TIME: 23:47 HRS</span>
          </div>
        </div>
      </section>

      <section className="suspects" id="suspects">
        <div className="section-heading">
          <div>
            <h2>THE SUSPECTS</h2>
          </div>
        </div>

        <p className="section-intro">
          Everyone has a story. Not everyone is telling the truth.
          Examine the files and decide who deserves closer scrutiny.
        </p>

        <div className="suspect-file">
          <div className="mugshot">
            <div className="mugshot-backdrop">
              <img src={suspect.image} alt={`Mugshot of ${suspect.name}`} />
            </div>

            <span className="mugshot-number">
              SUSPECT NO. {String(active + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="suspect-details">
            <p className="eyebrow">SUBJECT PROFILE</p>
            <h3>{suspect.name}</h3>

            <div className="suspect-meta">
              <div>
                <span className="field-label">AGE</span>
                <strong>{suspect.age} YEARS</strong>
              </div>
              <div>
                <span className="field-label">OCCUPATION</span>
                <strong>{suspect.occupation}</strong>
              </div>
            </div>

            <div className="alibi">
              <span className="field-label">RECORDED STATEMENT / ALIBI</span>
              <p>"{suspect.alibi}"</p>
            </div>
          </div>
        </div>

        <div className="carousel-controls">
          <button
            onClick={() =>
              setActive((active - 1 + suspects.length) % suspects.length)
            }
            aria-label="Previous suspect"
          >
            ← PREVIOUS
          </button>
          <div className="carousel-dots">
            {suspects.map((item, index) => (
              <button
                key={item.name}
                className={active === index ? "dot active-dot" : "dot"}
                onClick={() => setActive(index)}
                aria-label={`View suspect ${index + 1}`}
                aria-current={active === index ? "true" : undefined}
              />
            ))}
          </div>
          <span className="carousel-count">
            {String(active + 1).padStart(2, "0")} / 02
          </span>
          <button
            onClick={() =>
              setActive((active + 1) % suspects.length)
            }
          >
            NEXT →
          </button>
        </div>
      </section>

      <section className="briefing" id="briefing">
        <h2>EVENT DETAILS</h2>
        <p className="briefing-intro">
          The department requires your presence ASAP. Report to the
          following location at the designated time.
        </p>

        <div className="briefing-grid">
          <div>
            <span className="field-label">DATE</span>
            <strong>18 / 11 / 2026</strong>
          </div>
          <div>
            <span className="field-label">TIME</span>
            <strong>14:00 - 17:00</strong>
          </div>
          <div>
            <span className="field-label">LOCATION</span>
            <strong>DANCE ROOM 3, 4, 5</strong>
          </div>
          <div>
            <span className="field-label">NUMBER OF DETECTIVES</span>
            <strong>ANY</strong>
          </div>
        </div>

        <p className="final-warning">
          NO CASE IS CLOSED UNTIL THE TRUTH IS KNOWN.
        </p>
      </section>

      <footer className="footer">
        <span>FICTIONAL POLICE DEPARTMENT</span>
        <span>ALL PERSONS AND CASE DETAILS ARE FICTITIOUS</span>
        <span>END OF FILE ■</span>
      </footer>
    </main>
  );
}
