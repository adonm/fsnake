namespace SpriteKind {
    export const Plant = SpriteKind.create()
}
info.onCountdownEnd(function () {
    effects.clearParticles(snake)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    otherSprite.startEffect(effects.trail)
    sprite.sayText("Sorry")
    info.startCountdown(2)
    sprite.setVelocity(300, 300)
    effects.clearParticles(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Cakes += -1
    otherSprite.startEffect(effects.fire)
    scene.cameraShake(4, 500)
    otherSprite.destroy()
})
let myEnemy: Sprite = null
let Fruit: Sprite = null
let snake: Sprite = null
scene.setBackgroundColor(2)
tiles.setTilemap(tilemap`level2`)
snake = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    8 8 8 8 8 . . . . . . . . . . . 
    8 2 8 2 8 8 8 . . . . . . . . . 
    8 8 8 8 8 8 8 8 8 8 8 . . . . . 
    8 8 8 8 8 8 8 8 8 8 8 . . . . . 
    . 8 a 8 8 8 8 8 8 8 8 8 8 8 . 8 
    . 8 a 8 8 . . 8 8 8 8 8 8 8 8 8 
    . . a . . . . . . . 8 8 8 8 8 8 
    . a a . . . . . . . 8 8 8 8 8 8 
    . a . . . . . . . . . . . . 8 8 
    . a . . . . . . . . . . . . . . 
    a . a . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(snake)
scene.cameraFollowSprite(snake)
game.splash("hi snake you like some cakes?")
let Cakes = 9
for (let index = 0; index < Cakes; index++) {
    tiles.setTileAt(tiles.getTileLocation(randint(0, 16), randint(0, 16)), img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 . . . . . . . . . . 
        . . . 6 . 4 4 6 . . . . . . . . 
        . . . 6 . 4 4 4 . . . . 4 . . . 
        . . . 6 4 4 4 4 . . . . 4 . . . 
        . . . 6 4 4 . . . . . . 4 . . . 
        . . . . 4 4 . . . . 4 4 6 6 . . 
        . . . 4 4 4 . . 4 4 4 4 6 6 . . 
        . . . . . . . 4 4 4 4 4 6 6 . . 
        4 4 4 . . . . 4 4 4 4 6 6 6 . . 
        4 . 4 4 . . . 4 4 4 4 4 6 6 . . 
        4 . 4 4 . . . . . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        . 4 4 4 4 . . . . . . . . 6 6 . 
        . . . . . . . . . . . . . 6 . . 
        `)
    Fruit = sprites.create(img`
        . . . . . . . . . . b b b . . . 
        . . . . . . . . b e e 3 3 b . . 
        . . . . . . b b e 3 2 e 3 a . . 
        . . . . b b 3 3 e 2 2 e 3 3 a . 
        . . b b 3 3 3 3 3 e e 3 3 3 a . 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
        b 3 3 3 d d d d 3 3 3 3 3 d d a 
        b b b b b b b 3 d d d d d d 3 a 
        b d 5 5 5 5 d b b b a a a a a a 
        b 3 d d 5 5 5 5 5 5 5 d d d d a 
        b 3 3 3 3 3 3 d 5 5 5 d d d d a 
        b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
        b b b 3 d 5 5 5 5 5 5 5 d d b a 
        . . . b b b 3 d 5 5 5 5 d d 3 a 
        . . . . . . b b b b 3 d d d b a 
        . . . . . . . . . . b b b a a . 
        `, SpriteKind.Food)
    Fruit.setPosition(randint(0, 256), randint(0, 256))
}
let Level = 0
forever(function () {
    music.playMelody("E D G F B A C5 B ", 200)
})
game.onUpdateInterval(500, function () {
    if (Cakes == 0 && Level == 0) {
        Cakes = 10
        effects.confetti.startScreenEffect()
        scene.setBackgroundColor(10)
        tiles.setTilemap(tilemap`level2`)
        for (let index = 0; index < Cakes; index++) {
            tiles.setTileAt(tiles.getTileLocation(randint(0, 16), randint(0, 16)), img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 6 . . . . . . . . . . 
                . . . 6 . c c 6 . . . . . . . . 
                . . . 6 . c c c . . . . c . . . 
                . . . 6 c c c c . . . . c . . . 
                . . . 6 c c . . . . . . c . . . 
                . . . . c c . . . . c c 6 6 . . 
                . . . c c c . . c c c c 6 6 . . 
                . . . . . . . c c c c c 6 6 . . 
                c c c . . . . c c c c 6 6 6 . . 
                c . c c . . . c c c c c 6 6 . . 
                c . c c . . . . . . . . . . . . 
                c c c c c c . . . . . . . . . . 
                . c c c c . . . . . . . . 6 6 . 
                . . . . . . . . . . . . . 6 . . 
                `)
            Fruit = sprites.create(img`
                . . . . . . . . . . b b b . . . 
                . . . . . . . . b e e 3 3 b . . 
                . . . . . . b b e 3 2 e 3 a . . 
                . . . . b b 3 3 e 2 2 e 3 3 a . 
                . . b b 3 3 3 3 3 e e 3 3 3 a . 
                b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
                b 3 3 3 d d d d 3 3 3 3 3 d d a 
                b b b b b b b 3 d d d d d d 3 a 
                b d 5 5 5 5 d b b b a a a a a a 
                b 3 d d 5 5 5 5 5 5 5 d d d d a 
                b 3 3 3 3 3 3 d 5 5 5 d d d d a 
                b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
                b b b 3 d 5 5 5 5 5 5 5 d d b a 
                . . . b b b 3 d 5 5 5 5 d d 3 a 
                . . . . . . b b b b 3 d d d b a 
                . . . . . . . . . . b b b a a . 
                `, SpriteKind.Food)
            Fruit.setPosition(randint(0, 256), randint(0, 256))
        }
        myEnemy = sprites.create(assets.image`Apider`, SpriteKind.Enemy)
        myEnemy.follow(snake, 20)
        Level = 1
    } else if (Cakes == 0 && Level == 1) {
        effects.confetti.startScreenEffect()
        game.splash("dear mara I made this game.", "I hope you like my game")
        game.over(true, effects.confetti)
    }
})
