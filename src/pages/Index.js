import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description={"Anthony Buncio's personal website"}>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">My Portfolio</Link>
          </h2>
          <p>Welcome to the jungle 🦍🦧🐒</p>
        </div>
      </header>
      <p>
        {' '}
        Please feel free to read more <Link to="/about">about me</Link>, or you
        can check out my <Link to="/resume">resume</Link>, view my{' '}
        <Link to="/projects">projects</Link>, or{' '}
        <Link to="/contact">contact</Link> ya boy.
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/AnthonyBuncio/personal-site">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
