import { PLAY, STOP, RESET } from './types';

export const play = () => ({
    type: PLAY,
});

export const stop = () => ({
    type: STOP,
});

export const reset = () => ({
    type: RESET,
});