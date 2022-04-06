var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function (game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1,
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                { "type": "reward", "x": 1000, "y": groundY - 60 },
                { "type": "custom", "x": 300, "y": groundY },
                { "type": "enemy", "x": 400, "y": groundY - 20 },
                { "type": "enemy", "x": 800, "y": groundY - 100 },
                { "type": "enemy", "x": 1200, "y": groundY - 50 },
                { "type": "reward2", "x": 500, "y": groundY - 50 },

            ]

        };
        for (var i = 0; i < levelData.gameItems.length; i++) {
            if (levelData.gameItems[i].type === "enemy") {
                createEnemy(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }

            else if (levelData.gameItems[i].type === "reward") {
                createReward(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }

            else if (levelData.gameItems[i].type === "reward2") {
                createReward2(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }

            else if (levelData.gameItems[i].type === "sawblade") {
                createSawBlade(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }

            else if (levelData.gameItems[i].type === "custom") {
                createMyObstacle(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }


        }

        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        var hitZoneSize = 25;
        var damageFromObstacle = 10;

        var hitZoneSize2 = 30;
        var damageFromObstacle2 = 20;

        function createSawBlade(a, b) {
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = a;
            sawBladeHitZone.y = b;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            sawBladeHitZone.addChild(obstacleImage);

            obstacleImage.x = -(hitZoneSize)
            obstacleImage.y = -(hitZoneSize)
        }
        function createMyObstacle(a, b) {
            var sawBladeHitZone = game.createObstacle(hitZoneSize2, damageFromObstacle2);
            sawBladeHitZone.x = a;
            sawBladeHitZone.y = b;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            sawBladeHitZone.addChild(obstacleImage);

            obstacleImage.x = -(hitZoneSize)
            obstacleImage.y = -(hitZoneSize)
        }


        function createEnemy(x, y) {
            // all code from TODO 11 and 12
            var enemy = game.createGameItem('enemy', 25);
            var redSquare = draw.rect(50, 50, 'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            enemy.velocityX = -1;
            enemy.rotationalVelocity = 100;
            game.addGameItem(enemy);
            enemy.onPlayerCollision = function () {
                game.changeIntegrity(-10);
                console.log('The enemy has hit Halle');
                enemy.fadeOut();
            };
            enemy.onProjectileCollision = function () {
                console.log('Halle has hit the enemy');
                game.increaseScore(100);
                enemy.flyTo(1000, 1000);

            }
        }
        function createReward(x, y) {
            var reward = game.createGameItem('reward', 25);
            var blueSquare = draw.rect(20, 50, 'blue');
            blueSquare.x = -10;
            blueSquare.y = -25;
            reward.addChild(blueSquare);
            reward.x = x;
            reward.y = y;
            reward.velocityX = -1;
            reward.rotationalVelocity = 0;
            game.addGameItem(reward);
            reward.onPlayerCollision = function () {
                game.changeIntegrity(10);
                console.log('Halle was rewarded');
                reward.fadeOut();
            };

        }

        function createReward2(x, y) {
            var reward2 = game.createGameItem('reward2', 25);
            var pinkSquare = draw.rect(50, 50, 'pink');
            pinkSquare.x = -25;
            pinkSquare.y = -25;
            reward2.addChild(pinkSquare);
            reward2.x = x;
            reward2.y = y;
            reward2.velocityX = -3;
            game.addGameItem(reward2);
            reward2.onPlayerCollision = function () {
                game.increaseScore(25);
                console.log('Halle was rewarded');
                reward2.fadeOut();
            };

        }




        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
