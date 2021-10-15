namespace SpriteKind {
    export const Plant = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.startEffect(effects.fire)
    scene.cameraShake(4, 500)
    otherSprite.destroy()
})
let Fruit: Sprite = null
scene.setBackgroundColor(2)
tiles.setTilemap(tilemap`level2`)
let snake = sprites.create(img`
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
for (let index = 0; index < 11; index++) {
    tiles.setTileAt(tiles.getTileLocation(randint(0, 16), randint(0, 16)), img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 . . . . . . . . . . 
        . . . 6 . a a 6 . . . . . . . . 
        . . . 6 . a a a . . . . a . . . 
        . . . 6 a a a a . . . . a . . . 
        . . . 6 a a . . . . . . a . . . 
        . . . . a a . . . . a a 6 6 . . 
        . . . a a a . . a a a a 6 6 . . 
        . . . . . . . a a a a a 6 6 . . 
        a a a . . . . a a a a 6 6 6 . . 
        a . a a . . . a a a a a 6 6 . . 
        a . a a . . . . . . . . . . . . 
        a a a a a a . . . . . . . . . . 
        . a a a a . . . . . . . . 6 6 . 
        . . . . . . . . . . . . . 6 . . 
        `)
}
game.splash("hi snake you like some cakes?")
for (let index = 0; index < 9; index++) {
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
game.onUpdate(function () {
    if (info.score() > 8) {
        game.splash("dear mara I made this game.", "I hope you like my game")
        game.over(true)
    }
})
forever(function () {
    music.playMelody("E D G F B A C5 B ", 200)
})
