<!-- markdownlint-disable MD001 MD033 -->

# Etch A Sketch

A simple drawing application which merges Etch and Sketch into one.

## Table of Content

- [Etch A Sketch](#etch-a-sketch)
  - [Table of Content](#table-of-content)
  - [Brief](#brief)
  - [Scope](#scope)
  - [Credits](#credits)

## Brief

<details>
<summary>Toggle the brief</summary>

Source: <https://www.theodinproject.com/lessons/foundations-etch-a-sketch>

- Create a webpage with a 16x16 grid of square divs.

- Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
- It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).

- Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would. <!-- cspell: disable-line -->

- Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad

  - Set the limit for the user input to a maximum of 100
  - Set the limit for the user input to a maximum of 100

- (Optional): Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

</details>

<br/>

**Project Brief Source**: <https://www.theodinproject.com/lessons/foundations-etch-a-sketch>

## Scope

- Etch a Sketch uses JavaScript powered by Typerscript to create a grid of squares on the <abbr title="Document Object Model">DOM</abbr>.

## Built with

### Technologies

- HTML
- SCSS
- TypeScript

### Tools

- Visual Studio Code
- Svelte & Vite
- ESLint + Prettier
- Git and GitHub
- Netlify (hosting)
- Husky CI

### Third party code

- [Font Awesome](https://fontawesome.com) - Icons
- [modern-css-reset](https://piccalil.li/blog/a-modern-css-reset/) - Base CSS Reset using selective code snippets

## Outcome

- Used HTML5 **semantic elements** for better readability and structure.
- CSS Grid used for re-generating the massive sketch area.
- Project managed with Github and Git integration and quick previews with Netlify.
- Works on all device. (Bug while hovering/swiping divs (pixels) on mobile)
- Follows formating and linting enforced by strict prettier & eslint.

## Summary

### What I learned

- DOM manipulation and working only with scripting language to create & destroy elements
  - Somewhat similar to a CRUD app but for artists.
- Making the code readable.
- It takes few tries before one gets it right.
  - For example, event handling and the execution order of each function is critical.
- Learned and refined SCSS skills.
- Focus on UX while keeping DX in mind.
- Creating welcoming and beautiful visuals when the scope of the project is small.

## Credits

- The Odin Project
  - Source: <https://www.theodinproject.com/lessons/foundations-etch-a-sketch>
