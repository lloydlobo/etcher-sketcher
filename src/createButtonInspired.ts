import { styleAddClassBtn } from './main';

// endregion:   --- events ---
export function createButtonInspired() {
    const btnGetInspired = document.getElementById(
        'btnGetInspired',
    )! as HTMLButtonElement;
    btnGetInspired.classList.add(...styleAddClassBtn);
    return btnGetInspired;
}
