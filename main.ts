namespace SpriteKind {
    export const kind = SpriteKind.create()
    export const Target = SpriteKind.create()
}
// Detect when the player presses B to shoot.
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    // Check whether the crosshair overlaps the target.
    if (crosshair.overlapsWith(mySprite)) {
        // Reward a successful hit with a sound, one point and a new random target position.
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
        mySprite.setPosition(randint(10, 150), randint(10, 110))
    } else {
        // Play a different sound when the player misses.
        music.play(music.melodyPlayable(music.jumpDown), music.PlaybackMode.UntilDone)
    }
})
let crosshair: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
// Set the background and show the starting instructions.
game.splash("READY?")
game.splash("GO！")

// Create the target and crosshair sprites using pixel art.
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
// Create the crosshair sprite using pixel art.
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
// Enable crosshair movement, start the 30-second timer and initialise the game.
controller.moveSprite(crosshair, 100, 100)
crosshair.setStayInScreen(true)
info.startCountdown(30)
mySprite.setPosition(randint(10, 150), randint(10, 110))
info.setScore(0)
