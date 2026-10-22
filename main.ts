namespace SpriteKind {
    export const kind = SpriteKind.create()
    export const Target = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (crosshair.overlapsWith(mySprite)) {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
        mySprite.setPosition(randint(10, 150), randint(10, 110))
    } else {
        music.play(music.melodyPlayable(music.jumpDown), music.PlaybackMode.UntilDone)
    }
})
let crosshair: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
game.splash("READY?")
game.splash("GO！")
mySprite = sprites.create(img`
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
    `, SpriteKind.Target)
crosshair = sprites.create(img`
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
    `, SpriteKind.Player)
controller.moveSprite(crosshair, 100, 100)
crosshair.setStayInScreen(true)
info.startCountdown(30)
mySprite.setPosition(randint(10, 150), randint(10, 110))
info.setScore(0)
