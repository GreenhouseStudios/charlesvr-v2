import { writable } from 'svelte/store';

export const modalText = writable('Something something somethin');
export const modalState = writable(false);