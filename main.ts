namespace SpriteKind {
    export const coingram = SpriteKind.create()
    export const GemsPoints = SpriteKind.create()
    export const HealthPoint = SpriteKind.create()
    export const winSpace = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const projectile2 = SpriteKind.create()
}
function enemyBlue (numEnemy: number, enemmyBlue: Image) {
    for (let index = 0; index < numEnemy; index++) {
        enemyblue = sprites.create(enemmyBlue, SpriteKind.Enemy)
        enemyblue.follow(Hero, 10)
        tiles.placeOnRandomTile(enemyblue, sprites.dungeon.doorClosedSouth)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.winSpace, function (sprite, otherSprite) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.boss, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbar.value += -10
    sprites.destroy(projectile)
    pause(1000)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
    north = true
    south = false
})
function MAnyENemy (EnmeyImage: Image, NUmenemy: number) {
    for (let index = 0; index < NUmenemy; index++) {
        commonenemy = sprites.create(EnmeyImage, SpriteKind.Enemy)
        commonenemy.follow(Hero, 10)
        tiles.placeOnRandomTile(commonenemy, sprites.dungeon.doorClosedNorth)
    }
}
info.onScore(1000, function () {
    exit = sprites.create(img`
        c b d d d d d d d d d d d d d d 
        c b d d d d d d d d d d d d d d 
        c b c c b c c b c c b c c b c c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c b c c b c c b c c b c c b c c 
        c b d d d d d d d d d d d d d d 
        c b d d d d d d d d d d d d d d 
        `, SpriteKind.winSpace)
    tiles.placeOnRandomTile(exit, sprites.dungeon.stairWest)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.GemsPoints, function (sprite, otherSprite) {
    info.changeScoreBy(200)
    sprites.destroy(otherSprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 . . . . . . . . c b . . . 
        . . f 1 e e e e e e e b b b . . 
        . . 1 . . . . . . . . b c . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Hero, xvelocity(), yvelocity2())
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.HealthPoint, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroy(otherSprite)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Hero)
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 50, function (status) {
    if (BossLevelUP == false) {
        exploton(projectile3, 20)
        statusbar.value += 100
        BossLevelUP = true
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Hero,
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
        . f e 2 2 2 2 2 e f f f f . . . 
        . f 2 2 f f f f 2 2 2 e f . . . 
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
    true
    )
    west = true
    east = false
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(projectile)
    sprites.destroy(sprite)
    info.changeScoreBy(50)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Hero)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coingram, function (sprite, otherSprite) {
    info.changeScoreBy(500)
    sprites.destroy(otherSprite)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Hero)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral2, function (sprite, location) {
    info.changeLifeBy(-1)
    pause(2000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthWest1, function (sprite, location) {
    if (spawned2 == false) {
        enemyBlue(40, img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff6666ff........
            .......f86666668f.......
            .......f66666666f.......
            ......fa66666666af......
            ......fa66666666af......
            ......faaa6666aaaf......
            ......f8a8faaf8a8f......
            ......fcacf66fcacf......
            .......f86666668f.......
            ......fffca868affff.....
            ....fc666c8f8fc666cf....
            ....f68686ffff68686f....
            ....f8f8ffffff8f8f8f....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `)
        spawned2 = true
    }
    if (gamepoint2 == false) {
        gamepoint2 = true
    }
})
function gems () {
    gemList = [
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . 9 3 1 9 . . . . . . 
        . . . . . . 9 3 3 9 . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.GemsPoints),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . 9 3 1 9 . . . . . . 
        . . . . . . 9 3 3 9 . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.GemsPoints),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . 9 3 1 9 . . . . . . 
        . . . . . . 9 3 3 9 . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.GemsPoints),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . 9 3 1 9 . . . . . . 
        . . . . . . 9 3 3 9 . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.GemsPoints),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . 9 3 1 9 . . . . . . 
        . . . . . . 9 3 3 9 . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.GemsPoints),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . 9 3 1 9 . . . . . . 
        . . . . . . 9 3 3 9 . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.GemsPoints),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . 9 3 1 9 . . . . . . 
        . . . . . . 9 3 3 9 . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.GemsPoints),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . 9 3 1 9 . . . . . . 
        . . . . . . 9 3 3 9 . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.GemsPoints),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . 9 3 1 9 . . . . . . 
        . . . . . . 9 3 3 9 . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.GemsPoints),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . 9 3 1 9 . . . . . . 
        . . . . . . 9 3 3 9 . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.GemsPoints)
    ]
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(BOSS, effects.confetti, 5000)
    exit = sprites.create(img`
        c b d d d d d d d d d d d d d d 
        c b d d d d d d d d d d d d d d 
        c b c c b c c b c c b c c b c c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c b c c b c c b c c b c c b c c 
        c b d d d d d d d d d d d d d d 
        c b d d d d d d d d d d d d d d 
        `, SpriteKind.winSpace)
    tiles.placeOnRandomTile(exit, sprites.dungeon.stairWest)
    sprites.destroyAllSpritesOfKind(SpriteKind.projectile2)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Hero,
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
    true
    )
    east = true
    west = false
})
function enemySnake (snakeimg: Image, numsnake: number) {
    for (let index = 0; index < numsnake; index++) {
        snake = sprites.create(snakeimg, SpriteKind.Enemy)
        snake.follow(Hero, 10)
        tiles.placeOnRandomTile(snake, sprites.dungeon.doorOpenWest)
    }
}
function Traps (enemyimg: Image, num: number) {
    for (let index = 0; index < num; index++) {
        enemmy = sprites.create(enemyimg, SpriteKind.Enemy)
        enemmy.follow(Hero, 10)
        tiles.placeOnRandomTile(enemmy, sprites.dungeon.doorLockedWest)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
    pause(2000)
})
function yvelocity2 () {
    if (north) {
        return 100
    } else {
        return 20
    }
    if (south) {
        return 100
    } else {
        return 20
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.projectile2, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundEast, function (sprite, location) {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.max = 150
    statusbar.setLabel("Boss")
    statusbar.positionDirection(CollisionDirection.Top)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouth0, function (sprite, location) {
    if (spawned == false) {
        spawned = true
        Traps(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, 50)
    }
    if (gamepoints == false) {
        gamepoints = true
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Hero)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
    south = true
    north = false
})
function StartingName () {
    playerName = game.askForString("what is your name", 8)
    game.splash("Hello " + playerName)
    game.splash("Collect the coins ans beat the boss")
    game.splash("Don't die, Good luck " + playerName)
}
function exploton (Explotionulti: Sprite, numOfExplotion: number) {
    for (let index = 0; index < numOfExplotion; index++) {
        projectile3 = sprites.createProjectileFromSide(img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `, randint(-30, 30), randint(-30, 30))
        projectile3.setKind(SpriteKind.projectile2)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundSouthEast1, function (sprite, location) {
    if (spawn3 == false) {
        enemySnake(img`
            . . . . . c c c c c c c . . . . 
            . . . . c 6 7 7 7 7 7 6 c . . . 
            . . . c 7 c 6 6 6 6 c 7 6 c . . 
            . . c 6 7 6 f 6 6 f 6 7 7 c . . 
            . . c 7 7 7 7 7 7 7 7 7 7 c . . 
            . . f 7 8 1 f f 1 6 7 7 7 f . . 
            . . f 6 f 1 f f 1 f 7 7 7 f . . 
            . . . f f 2 2 2 2 f 7 7 6 f . . 
            . . c c f 2 2 2 2 7 7 6 f c . . 
            . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
            c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
            f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
            f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . f 6 1 1 1 1 1 6 6 6 6 c . . . 
            . . f f c c c c c c c c . . . . 
            `, 30)
        spawn3 = true
    }
    if (gamePoint3 == false) {
        gamePoint3 = true
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterSouth1, function (sprite, location) {
    if (spawn3 == false) {
        MAnyENemy(img`
            . . f f f . . . . . . . . . . . 
            f f f c c . . . . . . . . f f f 
            f f c c c . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f c 3 b c 3 b c f b b c c c . 
            f c b b b b b b c f b c b c c . 
            c c 1 b b b 1 b c b b c b b c . 
            c b b b b b b b b b c c c b c . 
            c b 1 f f 1 c b b c c c c c . . 
            c f 1 f f 1 f b b b b f c . . . 
            f f f f f f f b b b b f c . . . 
            f f 2 2 2 2 f b b b b f c c . . 
            . f 2 2 2 2 2 b b b c f . . . . 
            . . f 2 2 2 b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 50)
        spawn4 = true
    }
    if (gamePoint4 == false) {
        gamePoint4 = true
    }
})
function Traps2 (enemyimg: Image, num: number) {
    for (let index = 0; index < num; index++) {
        enemmy = sprites.create(enemyimg, SpriteKind.Enemy)
        enemmy.follow(Hero, 10)
        tiles.placeOnRandomTile(enemmy, sprites.dungeon.doorLockedEast)
    }
}
function coins () {
    coinlist = [
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coingram),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coingram),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coingram),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coingram),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coingram)
    ]
}
function Health () {
    healthList = [
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . f f f f f . . 
        . . f f 2 2 2 f f f 2 2 2 f f . 
        . . f 2 2 2 2 2 f 2 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
        . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
        . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
        . . f f 2 2 2 2 2 2 2 2 2 f f . 
        . . . f f 2 2 2 2 2 2 2 f f . . 
        . . . . f f 2 2 2 2 2 f f . . . 
        . . . . . f f 2 2 2 f f . . . . 
        . . . . . . f f 2 f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.HealthPoint),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . f f f f f . . 
        . . f f 2 2 2 f f f 2 2 2 f f . 
        . . f 2 2 2 2 2 f 2 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
        . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
        . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
        . . f f 2 2 2 2 2 2 2 2 2 f f . 
        . . . f f 2 2 2 2 2 2 2 f f . . 
        . . . . f f 2 2 2 2 2 f f . . . 
        . . . . . f f 2 2 2 f f . . . . 
        . . . . . . f f 2 f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.HealthPoint),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . f f f f f . . 
        . . f f 2 2 2 f f f 2 2 2 f f . 
        . . f 2 2 2 2 2 f 2 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
        . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
        . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
        . . f f 2 2 2 2 2 2 2 2 2 f f . 
        . . . f f 2 2 2 2 2 2 2 f f . . 
        . . . . f f 2 2 2 2 2 f f . . . 
        . . . . . f f 2 2 2 f f . . . . 
        . . . . . . f f 2 f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.HealthPoint),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . f f f f f . . 
        . . f f 2 2 2 f f f 2 2 2 f f . 
        . . f 2 2 2 2 2 f 2 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
        . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
        . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
        . . f f 2 2 2 2 2 2 2 2 2 f f . 
        . . . f f 2 2 2 2 2 2 2 f f . . 
        . . . . f f 2 2 2 2 2 f f . . . 
        . . . . . f f 2 2 2 f f . . . . 
        . . . . . . f f 2 f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.HealthPoint),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . f f f f f . . 
        . . f f 2 2 2 f f f 2 2 2 f f . 
        . . f 2 2 2 2 2 f 2 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
        . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
        . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
        . . f f 2 2 2 2 2 2 2 2 2 f f . 
        . . . f f 2 2 2 2 2 2 2 f f . . 
        . . . . f f 2 2 2 2 2 f f . . . 
        . . . . . f f 2 2 2 f f . . . . 
        . . . . . . f f 2 f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.HealthPoint),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . f f f f f . . 
        . . f f 2 2 2 f f f 2 2 2 f f . 
        . . f 2 2 2 2 2 f 2 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
        . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
        . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
        . . f f 2 2 2 2 2 2 2 2 2 f f . 
        . . . f f 2 2 2 2 2 2 2 f f . . 
        . . . . f f 2 2 2 2 2 f f . . . 
        . . . . . f f 2 2 2 f f . . . . 
        . . . . . . f f 2 f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.HealthPoint),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . f f f f f . . 
        . . f f 2 2 2 f f f 2 2 2 f f . 
        . . f 2 2 2 2 2 f 2 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
        . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
        . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
        . . f f 2 2 2 2 2 2 2 2 2 f f . 
        . . . f f 2 2 2 2 2 2 2 f f . . 
        . . . . f f 2 2 2 2 2 f f . . . 
        . . . . . f f 2 2 2 f f . . . . 
        . . . . . . f f 2 f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.HealthPoint)
    ]
}
function xvelocity () {
    if (east) {
        return -100
    } else {
        return 40
    }
    if (west) {
        return -100
    } else {
        return 20
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (spawn3 == false) {
        enemySnake(img`
            . . . . . c c c c c c c . . . . 
            . . . . c 6 7 7 7 7 7 6 c . . . 
            . . . c 7 c 6 6 6 6 c 7 6 c . . 
            . . c 6 7 6 f 6 6 f 6 7 7 c . . 
            . . c 7 7 7 7 7 7 7 7 7 7 c . . 
            . . f 7 8 1 f f 1 6 7 7 7 f . . 
            . . f 6 f 1 f f 1 f 7 7 7 f . . 
            . . . f f 2 2 2 2 f 7 7 6 f . . 
            . . c c f 2 2 2 2 7 7 6 f c . . 
            . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
            c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
            f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
            f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . f 6 1 1 1 1 1 6 6 6 6 c . . . 
            . . f f c c c c c c c c . . . . 
            `, 45)
        spawn3 = true
    }
    if (gamePoint3 == false) {
        gamePoint3 = true
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (myEnemy == false) {
        myEnemy = true
        scene.cameraShake(4, 500)
        info.changeLifeBy(-1)
        pause(500)
        myEnemy = false
    }
})
let projectile2: Sprite = null
let playerName = ""
let enemmy: Sprite = null
let snake: Sprite = null
let east = false
let west = false
let projectile3: Sprite = null
let exit: Sprite = null
let commonenemy: Sprite = null
let south = false
let north = false
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let enemyblue: Sprite = null
let healthList: Sprite[] = []
let gemList: Sprite[] = []
let coinlist: Sprite[] = []
let BossLevelUP = false
let myEnemy = false
let gamePoint4 = false
let gamePoint3 = false
let gamepoint2 = false
let gamepoints = false
let spawn4 = false
let spawn3 = false
let spawned2 = false
let spawned = false
let BOSS: Sprite = null
let Hero: Sprite = null
StartingName()
gems()
coins()
Health()
info.setLife(5)
Hero = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
BOSS = sprites.create(img`
    ........bbaaaaaaabbb....bbbbbbbb
    ........baaaaaaaaaabb...3.......
    .......baaaaaaaaaaaaaa3f3.......
    ......baaaaaabaaaaaaaa33........
    ......caaccccaaaaa3ffaa3f3ff3...
    ......cabdccccfbaaaaaaaa3333....
    .......accccccfcbaaaabaaaff3....
    .......caccccccccbccbaaaaaf3....
    ........cad222c222caaaaaaaff333.
    .........cb22b2222aaaaaaaaa333..
    ..........d22b2f233aaaaaaaaff3..
    .....cac..a2222fa3aaaaaaaafff3..
    ...cafbffc.aaaabfaaaaacaccfff333
    ....bbfbaccbbbfffaaaaacbaabcff3.
    ...cfaaaafbffffffaaaabaaaaaaff..
    ..cabbaaabafffffaaaaaacffbaacf3.
    ....ccfffaaaaaa33aaaaaacbbaaaff3
    ......ffbaaaaaaa3a33aaacafaaaa33
    ......cffaaaaaaaaa3aaaafaaaaaaff
    .......cfaaaaaa3333aaaafaaaaaaf3
    ........faafaaaaaaaaffffffccccc.
    b......c3faaaaafaaaaffffffffffcc
    b.....cc33faffaaffffffffffffffc.
    ab..bbf3aaafffffaffffffffafffbc.
    aaffffaaaaafffffffffffffaaaaaaa.
    fffffcaaaaaffffffffffffffaaaaaac
    ffffccaaaaaffffffffffffffaaaaaac
    ffffccaaafafffffffffffffaaaaaaaa
    .cccfffffffffc....cccbffffffaaaf
    ...caaaafffc..........cfffffffff
    ..cfccffcfc............cffffaaaa
    ..cccfcccc...............cfffcdd
    `, SpriteKind.boss)
controller.moveSprite(Hero)
tiles.setCurrentTilemap(tilemap`level4`)
scene.cameraFollowSprite(Hero)
tiles.placeOnRandomTile(Hero, sprites.dungeon.doorOpenNorth)
tiles.placeOnRandomTile(BOSS, sprites.builtin.forestTiles10)
spawned = false
spawned2 = false
spawn3 = false
spawn4 = false
gamepoints = false
gamepoint2 = false
gamePoint3 = false
gamePoint4 = false
myEnemy = false
let winPoints = false
BossLevelUP = false
info.setScore(0)
for (let value of coinlist) {
    tiles.placeOnRandomTile(value, sprites.dungeon.chestOpen)
}
for (let value of gemList) {
    tiles.placeOnRandomTile(value, sprites.dungeon.stairLadder)
}
for (let value of healthList) {
    tiles.placeOnRandomTile(value, sprites.swamp.swampTile0)
}
game.onUpdateInterval(500, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, BOSS, randint(-30, 30), randint(-30, 30))
    projectile2.setKind(SpriteKind.projectile2)
    BOSS.setVelocity(randint(-30, 30), randint(-30, 30))
})
