import {Timer} from '@/modules/helpers.js';

export default {
    async startGame({ state, commit }){
        state.isPaused = false;
        await commit('CREATE_FALLING_ITEM');
        await commit('ANIMATE_FALLING_ITEM');

        state.gameTimeout = new Timer(async () => {
            state.score++;
            state.fallingItems.push(state.fallingItem);
            state.isRightObjectPosition = !state.isRightObjectPosition;
            await commit('CREATE_FALLING_ITEM');
            await commit('ANIMATE_FALLING_ITEM');
            await commit('MAKE_CALCULATIONS');
        }, state.animationSpeed);
    }
}