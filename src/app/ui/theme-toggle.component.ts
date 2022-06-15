export class ThemeToggle {
  theme: string;

  constructor() {
    this.theme = 'dark';
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
  }
}

/// ///////////////////////////////////////////////////////////////////////////
///
/// region:      --- THEME TOGGLE ---
///
/// ///////////////////////////////////////////////////////////////////////////

export const toggleTheme = (): string => {
  if (localStorage.getItem('theme-preference')) {
    return localStorage.getItem('theme-preference') as string;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const theme: { value: string } = {
  value: toggleTheme(),
};

export const reflectPreference = () => {
  document.firstElementChild!.setAttribute('data-theme', theme.value);
  document
    .querySelector('#themeToggle')!
    .setAttribute('aria-live', theme.value);
  // document.querySelector('#theme-toggle')?.setAttribute('data-theme', theme.value); // const body = document.querySelector('body'); // body.classList.remove('light', 'dark'); // body.classList.add(theme);
};

export const setPreference = () => {
  localStorage.setItem('theme-preference', theme.value);
  reflectPreference();
};

// cspell:disable-next-line // immutable data structures --> mori, immutable.js for PERSISTANT DATA STRUCTURES ... other FP lib are underscore Lodash Ramda.... --> Context: JSUnconf Anana Vakil Learn Functional Programming WIt Javascript // https://crates.io/crates/persistence Rust lib does something similar?

/// ///////////////////////////////////////////////////////////////////////////
///
/// region:      --- END ---
///
/// ///////////////////////////////////////////////////////////////////////////
