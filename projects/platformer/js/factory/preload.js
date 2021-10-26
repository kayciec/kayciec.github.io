(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    
    // TODO : Load config for url //
    opspark.preload = function (game) {
        game.load.image('cannon', './asset/cannon.png');
        game.load.image('projectile', './asset/asteroid.png');
        game.load.image('platform', './asset/moon.png');
        game.load.image('db', './asset/collectable/neptune.png');
        game.load.image('steve', './asset/collectable/saturn.png');
        game.load.image('grace', './asset/collectable/venus.png');
        game.load.image('kennedi', './asset/collectable/mars.png');
        game.load.image('max', './asset/collectable/jupiter.png');
        game.load.atlas('halle', './asset/halle/phaser-json-array/halle.png', './asset/halle/phaser-json-array/halle.json');
    };
})(window);
