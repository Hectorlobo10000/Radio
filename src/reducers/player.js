import { PLAY, STOP, RESET } from '../actions/types';

const player = (state = 0, action) => {
    switch(action.type) {
        case PLAY:
            return state + 1;
        case STOP:
            return state - 1;
        case RESET:
            return 0;
        default:
            return state;
    }
}

export default player;