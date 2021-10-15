@namespace
class SpriteKind:
    Plant = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    otherSprite.start_effect(effects.fire)
    scene.camera_shake(4, 500)
    otherSprite.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

Fruit: Sprite = None
scene.set_background_color(3)
tiles.set_tilemap(tilemap("""
    level2
"""))
snake = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(snake)
scene.camera_follow_sprite(snake)
for index in range(11):
    tiles.set_tile_at(tiles.get_tile_location(randint(0, 16), randint(0, 16)),
        img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 7 . . . . . . . . . . 
                    . . . 7 . 5 5 7 . . . . . . . . 
                    . . . 7 . 5 5 5 . . . . 5 . . . 
                    . . . 7 5 5 5 5 . . . . 5 . . . 
                    . . . 7 5 5 . . . . . . 5 . . . 
                    . . . . 5 5 . . . . 5 5 7 7 . . 
                    . . . 5 5 5 . . 5 5 5 5 7 7 . . 
                    . . . . . . . 5 5 5 5 5 7 7 . . 
                    5 5 5 . . . . 5 5 5 5 7 7 7 . . 
                    5 . 5 5 . . . 5 5 5 5 5 7 7 . . 
                    5 . 5 5 . . . . . . . . . . . . 
                    5 5 5 5 5 5 . . . . . . . . . . 
                    . 5 5 5 5 . . . . . . . . 7 7 . 
                    . . . . . . . . . . . . . 7 . .
        """))
for index2 in range(9):
    Fruit = sprites.create(img("""
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
        """),
        SpriteKind.food)
    Fruit.set_position(randint(0, 256), randint(0, 256))

def on_forever():
    music.play_melody("E B C5 A B G A F ", 120)
forever(on_forever)
