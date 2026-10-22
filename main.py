@namespace
class SpriteKind:
    kind = SpriteKind.create()
    Target = SpriteKind.create()

def on_b_pressed():
    if crosshair.overlaps_with(mySprite):
        music.play(music.melody_playable(music.ba_ding),
            music.PlaybackMode.UNTIL_DONE)
        info.change_score_by(1)
        mySprite.set_position(randint(10, 150), randint(10, 110))
    else:
        music.play(music.melody_playable(music.jump_down),
            music.PlaybackMode.UNTIL_DONE)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

crosshair: Sprite = None
mySprite: Sprite = None
scene.set_background_color(8)
game.splash("READY?")
game.splash("GO！")
mySprite = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 2 2 2 2 2 . . . . . . .
        . . . . 2 2 2 2 2 . . . . . . .
        . . . . 2 2 2 2 2 . . . . . . .
        . . . . 2 2 2 2 2 . . . . . . .
        . . . . 2 2 2 2 2 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.Target)
crosshair = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . 1 1 1 1 1 . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.player)
controller.move_sprite(crosshair, 100, 100)
crosshair.set_stay_in_screen(True)
info.start_countdown(30)
mySprite.set_position(randint(10, 150), randint(10, 110))
info.set_score(0)