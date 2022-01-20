input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.House)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        # # # . .
        . # . . .
        # . # . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        . # . # .
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Sword)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.TShirt)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . # .
        . . . # .
        . . # # #
        . . . # .
        . . # . #
        `)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    music.playMelody("C - D F - D F C5 ", 120)
})
