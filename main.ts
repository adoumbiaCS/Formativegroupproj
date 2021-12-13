controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (fire.vy == 0) {
        fire.vy = -180
    }
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    game.over(true)
})
let fire: Sprite = null
let Name = game.askForString("What is your name")
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
