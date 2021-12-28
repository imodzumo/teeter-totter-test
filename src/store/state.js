export default {
    objectsList: ['rectangle', 'triangle', 'circle'],
    constants: {
        minWeight: 1,
        maxWeight: 10,
        platformLength: 10, 
    },
    
    isPaused: true,
    gameOver: false,
    isRightObjectPosition: true,
    fallingItem: {},
    fallingItems: [],
    gameTimeout: '',
    gameAnimation: '',
    animationSpeed: 3000,
    score: 0,
    rotation: 0
}