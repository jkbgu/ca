let _0 = 0
let _2 = 0
basic.forever(function () {
    led.plotBrightness(randint(0, 4), randint(0, 4), randint(0, 225))
    _0 = led.pointBrightness(0, 0)
    music.setVolume(input.lightLevel())
    music.playMelody("F D A C B C C5 E ", 180)
    _2 = input.magneticForce(Dimension.X)
})
