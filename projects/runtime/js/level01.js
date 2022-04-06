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
                { "type": "sawblade", "x": 50, "y": groundY- 125 },
                { "type": "sawblade", "x": 100, "y": groundY- 125 },
                { "type": "sawblade", "x": 150, "y": groundY- 125 },
                { "type": "sawblade", "x": 200, "y": groundY- 125 },
                { "type": "sawblade", "x": 250, "y": groundY- 125 },
                { "type": "sawblade", "x": 300, "y": groundY- 125 },
                { "type": "sawblade", "x": 350, "y": groundY- 125 },
                { "type": "sawblade", "x": 400, "y": groundY- 125 },
                { "type": "sawblade", "x": 450, "y": groundY- 125 },
                { "type": "reward2", "x": 300, "y": groundY - 10 },
                { "type": "reward", "x": 100, "y": groundY - 10 },
                { "type": "reward", "x": 2500, "y": groundY - 10 },
                { "type": "reward2", "x": 1000, "y": groundY - 10 },
                { "type": "reward2", "x": 2000, "y": groundY - 10 },


                { "type": "sawblade", "x": 500, "y": groundY- 125 },
                { "type": "sawblade", "x": 550, "y": groundY- 125 },
                { "type": "sawblade", "x": 600, "y": groundY- 125 },

                { "type": "sawblade", "x": 1500, "y": groundY- 35 },
                { "type": "sawblade", "x": 1950, "y": groundY- 35 },
                { "type": "sawblade", "x": 1600, "y": groundY- 35 },
                { "type": "sawblade", "x": 1200, "y": groundY- 35 },
                { "type": "sawblade", "x": 990, "y": groundY- 35 },
                { "type": "sawblade", "x": 1428, "y": groundY- 35 },
                { "type": "sawblade", "x": 1155, "y": groundY- 35 },
                { "type": "sawblade", "x": 1620, "y": groundY- 35 },


               
                { "type": "custom", "x": 2000, "y": groundY-150 },
                { "type": "enemy", "x": 170, "y": groundY - 20 },
                { "type": "enemy", "x": 2050, "y": groundY - 70 },
                { "type": "enemy", "x": 1070, "y": groundY - 50 },
                { "type": "enemy", "x": 1500, "y": groundY - 20 },
                { "type": "enemy", "x": 1300, "y": groundY - 70 },
                { "type": "enemy", "x": 900, "y": groundY - 50 }, { "type": "enemy", "x": 1500, "y": groundY - 20 },
                { "type": "enemy", "x": 844, "y": groundY - 70 },
                { "type": "enemy", "x": 570, "y": groundY - 50 }, { "type": "enemy", "x": 1500, "y": groundY - 20 },
                { "type": "enemy", "x": 938, "y": groundY - 70 },
                { "type": "enemy", "x": 1103, "y": groundY - 50 }, { "type": "enemy", "x": 1500, "y": groundY - 20 },
                { "type": "enemy", "x": 686, "y": groundY - 70 },
                { "type": "enemy", "x": 690, "y": groundY - 50 },
                { "type": "reward2", "x": 721, "y": groundY - 10 },

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
        game.setDebugMode(true);

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
`           `
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
            var obstacleImage = draw.bitmap('img/custom.png');
            sawBladeHitZone.addChild(obstacleImage);

            obstacleImage.x = -(hitZoneSize)
            obstacleImage.y = -(hitZoneSize)
        }


        function createEnemy(x, y) {
            // all code from TODO 11 and 12
            var enemy = game.createGameItem('enemy', 25);
            var redSquare = draw.bitmap('img/doge.png');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            enemy.velocityX = -1;
            enemy.rotationalVelocity = 1;
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
            var blueSquare = draw.bitmap('img/reward.png');
            blueSquare.x = -10;
            blueSquare.y = -25;
            reward.addChild(blueSquare);
            reward.x = x;
            reward.y = y;
            reward.velocityX = -0.5;
            reward.rotationalVelocity = 0;
            game.addGameItem(reward);
            reward.onPlayerCollision = function () {
                game.changeIntegrity(10);
                console.log('Halle was rewarded');
                reward.fadeOut();
            };

            reward.onProjectileCollision = function () {
            
                reward.fadeOut();
            };

        }

        function createReward2(x, y) {
            var reward2 = game.createGameItem('reward2', 25);
            var pinkSquare = draw.bitmap('img/reward.png');
            pinkSquare.x = -25;
            pinkSquare.y = -25;
            reward2.addChild(pinkSquare);
            reward2.x = x;
            reward2.y = y;
            reward2.velocityX = -0.5;
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
