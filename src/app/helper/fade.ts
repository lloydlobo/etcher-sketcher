/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
import { sleep } from '..';

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- HELPER FUNCTIONS ---
///
/// ////////////////////////////////////////////////////////////////////////////
/**
 * Fades in the element by setting the opacity to 0 and then to 1.
 *
 * @param element - the element to fade in
 * @param duration - (in ms) the duration of the fade in animation per frame
 * @param delay - the delay before the fade in animation starts
 * @param frames - the count or number of times the fade in animation will be repeated
 * @example - fade(element, 0.1, 0, 10);
 * @example - fade(element, 0.1, 0, 10);
 * @param speed - speed of fade in
 * @param opacity - opacity of fade in
 * @param frames - number of frames to fade in
 * @param delay - delay before fade in
 *
 * @returns - void - the element that was faded in
 */
export async function fade(
  element: HTMLElement,
  speed = 0.1,
  opacity = 0,
  frames = 10,
  delay = 100,
) {
  // Function declared in a loop contains unsafe references to variable(s) 'opacity'
  for (let i = 0; i < frames; i += 1) {
    sleep(i * delay).then(() => {
      element.style.opacity = opacity.toString();
      opacity += speed;
    });
  }
}
// eslint-disable-next-line no-loop-func

// (() => {
//   /* ... */
// })();
