"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

// Text + chalk definitions
const data = {
  name: chalk.white("              José Luis Lafuente"),
  handle: chalk.white("jlesquembre"),
  work: chalk.white("Lead Software Engineer at yelster digital"),
  // opensource: chalk.white('Node.js Community Committee ') + chalk.green('⬢'),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("jlesquembre"),
  // npm: chalk.gray('https://npmjs.com/') + chalk.red('~jlesquembre'),
  github: chalk.gray("https://github.com/") + chalk.green("jlesquembre"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("jllafuente"),
  web: chalk.cyan("https://lafuente.me"),
  npx: chalk.red("npx") + " " + chalk.white("jlesquembre"),
  labelWork: chalk.white.bold("       Work:"),
  labelOpenSource: chalk.white.bold("Open Source:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:")
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const opensourcing = data.opensource
  ? `${data.labelOpenSource}  ${data.opensource}`
  : null;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = data.npm ? `${data.labelnpm}  ${data.npm}` : null;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  (opensourcing != null ? opensourcing + newline : "") +
  newline + // data.labelOpenSource + data.opensource
  twittering +
  newline + // data.labelTwitter + data.twitter
  (npming ? npming + newline : "") + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  webing +
  newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(boxen(output, options))
);
