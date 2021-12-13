function congrats (text: string) {
    return "congrats" + text
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (fire.vy == 0) {
        fire.vy = -180
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.setCharacterState(fire, characterAnimations.rule(Predicate.MovingLeft))
    characterAnimations.loopFrames(
    fire,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    characterAnimations.setCharacterState(fire, characterAnimations.rule(Predicate.NotMoving))
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    characterAnimations.setCharacterState(fire, characterAnimations.rule(Predicate.NotMoving))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.setCharacterState(fire, characterAnimations.rule(Predicate.MovingRight))
    characterAnimations.loopFrames(
    fire,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    congrat = congrats(Name)
    game.splash(congrat)
    game.over(true)
})
let congrat = ""
let fire: Sprite = null
let Name = ""
Name = game.askForString("What is your name")
game.splash("This is an obstacle course! ")
game.splash("You have to get to the end")
game.splash("While not falling off!")
game.splash("Then you win!")
scene.setBackgroundColor(9)
fire = sprites.create(img`
    ........................
    .......fff..............
    ....fffff2f.............
    ..ffeeeee22ff...........
    .ffeeeeee222ff..........
    .feeeefffeeeef..........
    .fffffeee2222ef.........
    fffe222fffffe2f.........
    fffffffffeeefff.....cc..
    fefe44ebbf44eef...ccdc..
    .fee4d4bbfddef..ccddcc..
    ..feee4dddddfeecdddc....
    ...f2222222eeddcdcc.....
    ...f444445e44ddccc......
    ...ffffffffeeee.........
    ...fff...ff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(fire, 100, 0)
scene.setTileMap(img`
    . . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
    . . . . . . . 5 5 5 5 5 . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 5 . . . . . . . . 5 . . . . . . . . . 
    . . . . . . 5 . . . . . . . . . . . 5 5 . . . . . . . . . . . . 
    . . . . . . . . . . . . . 5 . . . . . . . . . . . 5 . . . . . 2 
    5 5 5 5 5 . . . . . . . 5 . . 5 . . . . . . . . 5 . . . . 5 5 5 
    . . . . . . . . . . . . . . . . 5 5 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
scene.setTile(5, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 
    7 7 7 e e 7 7 7 e e e 7 7 7 7 7 
    e e e e e 7 7 7 e e e e 7 7 7 e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e . e e e e e e e e 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, true)
scene.setTile(2, img`
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . 7 7 3 3 3 7 . . . . . 
    . . . . 7 3 3 5 e 3 7 . . . . . 
    . . . . 7 3 9 5 e e 3 7 . . . . 
    . . . 7 3 e 9 8 8 e 3 7 . . . . 
    . . . 7 3 e 8 8 8 e 3 7 . . . . 
    . . 7 3 3 8 8 f 8 e 3 7 . . . . 
    . . 7 3 e 8 f f 8 e 3 7 . . . . 
    . . 7 3 e 8 8 f 8 8 3 7 . . . . 
    . . 7 3 e e 8 f f 8 3 7 . . . . 
    . . 7 3 3 e 8 8 8 8 3 7 . . . . 
    . . 7 3 3 e e 8 8 e 3 7 . . . . 
    . . 7 7 3 e e 8 e e 3 7 . . . . 
    . . . 7 3 3 e e e e 3 7 . . . . 
    . . . 7 7 3 3 3 3 3 7 . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    `, true)
fire.ay = 350
scene.cameraFollowSprite(fire)
game.onUpdate(function () {
    if (fire.y >= scene.screenHeight()) {
        game.over(false)
    }
})
