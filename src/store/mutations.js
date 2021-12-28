import { generateRandomObject, generateRandomNumber} from '@/modules/helpers.js';


export default {
    CREATE_FALLING_ITEM(state) {
        state.fallingItem = {
            id: new Date().getTime(),
            type: generateRandomObject(state.objectsList),
            weight: generateRandomNumber(state.constants.minWeight, state.constants.maxWeight),
            place: (state.isRightObjectPosition) ? 'right' : 'left',
            leftPosition: (state.isRightObjectPosition) ? generateRandomNumber(50, 100) : generateRandomNumber(0, 49) 
        }
    },

    ANIMATE_FALLING_ITEM(state){
        function increaseSpeed(){
            if(state.animationSpeed < 1000) return;
            state.animationSpeed -= 100;
        }

        let fallingWrapper = document.querySelector('.falling-wrapper');
        state.gameAnimation = fallingWrapper.animate([
          { top: 0 },
          { top: '100%' }
        ], {
          duration: state.animationSpeed
        });
        increaseSpeed();
    },

    MAKE_CALCULATIONS(state){
        let summaryLeft = 0;
        let weightLeft = 0;
        let summaryRight = 0;
        let weightRight = 0;

        state.fallingItems.forEach(item => {
            /*  F1*l1= F2*l2
                l1, l2 = half-platform length * coefficient from object to the center of scales 
            */
            if(item.place === 'left') {
                summaryLeft += (state.constants.platformLength / 2 * (1 - parseInt(item.leftPosition) / 50)) * item.weight;
                weightLeft += item.weight;
            }
            if(item.place === 'right') {
                summaryRight += (state.constants.platformLength / 2 * ((parseInt(item.leftPosition) - 50) / 50)) * item.weight;
                 weightRight += item.weight;
            }
        });

        if(state.isRightObjectPosition) {
            if(summaryLeft/summaryRight > 1.3 || summaryLeft/summaryRight < 0.7){
                state.gameOver = true;
            }
            if(weightLeft - weightRight > 20 || weightLeft - weightRight < -20) {
                state.gameOver = true;
            }
        }

        let currRotation = (summaryLeft/summaryRight - 1).toFixed(2) * 50;

        if(currRotation > 15) {
            state.rotation = 15;
        } else if (currRotation < -15) {
            state.rotation = -15;
        } else {
            state.rotation = (summaryLeft/summaryRight - 1).toFixed(2) * 50 
        }
    },

    PAUSE_GAME(state){
        state.isPaused = true;
        state.gameTimeout.pause();
        state.gameAnimation.pause();
    },

    CONTINUE_GAME(state){
        state.isPaused = false;
        state.gameAnimation.play();
        state.gameTimeout.play();
    },

    RESET_GAME(state){
        state.isPaused = true;
        state.gameOver = false;
        state.gameTimeout.pause();
        state.gameAnimation.pause();
        state.fallingItems = [];
        state.fallingItem = {};
        state.score = 0;
        state.isRightObjectPosition = true;
        state.animationSpeed = 3000;
        state.rotation = 0;
    },
}