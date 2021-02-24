controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 9 9 . . . . . 
        . . . . . 9 9 9 9 5 9 . . . . . 
        . 9 9 9 9 9 9 5 5 9 9 . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 500)
    otherSprite.destroy(effects.disintegrate, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
let enemyShip: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    4 4 4 . . . . . . . . . . . . . 
    6 6 6 . . . . . . . . . . . . . 
    . . 6 6 6 6 . . . . . . . . . . 
    . . 6 6 6 6 6 6 . . . . . . . . 
    . . . 6 6 6 6 6 6 6 6 . . . . . 
    . . . a 8 8 8 8 8 8 8 8 8 8 . . 
    . . a a a 6 6 6 6 6 6 6 6 9 6 6 
    . . a a a 6 6 6 6 6 6 6 6 6 6 . 
    . . . a 8 8 8 8 8 8 8 8 8 8 . . 
    . . 6 6 6 6 6 6 6 6 6 . . . . . 
    4 4 4 6 6 6 6 6 6 . . . . . . . 
    6 6 6 6 6 6 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    enemyShip = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 3 3 2 . . . . . . . 
        . . . . . . 3 3 2 . . . . . . . 
        . . . . . 3 3 2 2 . . . . . . . 
        . . . . 9 3 3 2 2 . . . . . . . 
        . . . 2 3 3 2 2 2 . . . . . . . 
        . 2 2 2 2 2 2 2 2 . . . . . . . 
        . . . 2 2 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemyShip.x = scene.screenWidth()
    enemyShip.vx = -20
    enemyShip.y = randint(10, scene.screenWidth() - 10)
})
