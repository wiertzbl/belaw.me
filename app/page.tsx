import React from 'react';

const Introduction: React.FC = () => (
  <section className="introduction">
    <h2>About Me</h2>
    <p>
      I'm Bela Wiertz, a technologist based in Berlin.{"\n"} 
      I'm passionate about europe, startups, progress.{"\n"}
      Right now I play football, padel and beach volleyball.
    </p>
    <p>
      I invested in software infra startups for 3 years.{"\n"} 
      I would describe myself as a technical business person.{"\n"} 
      I'm always excited to take on new challenges and usually have several side projects at a time.
    </p>
  </section>
);

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Personal Website</h1>
      <p>This is where I'll share my thoughts and projects.</p>
      <Introduction />
    </main>
  );
}