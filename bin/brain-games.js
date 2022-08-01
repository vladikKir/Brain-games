#!/usr/bin/env node
import nameRequest from '../src/cli.js';

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  nameRequest();
};

export default brainGames;
