let t_or_d = 0
let Qwerty = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    t_or_d = randint(0, 1)
    if (t_or_d == 0) {
        basic.showString("dare")
    } else if (t_or_d == 1) {
        basic.showString("truth")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Qwerty = randint(0, 3)
    if (0 == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if ((0 as any) == (1 as any)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if ((0 as any) == (2 as any)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if ((0 as any) == (3 as any)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
