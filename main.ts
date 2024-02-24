input.onButtonPressed(Button.A, function () {
    if (true) {
    	
    }
    if (true) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (state == 0) {
        if (pattern >= 1) {
            pattern += 1
        }
        if (pattern == 1) {
        	
        }
    }
    if (true) {
    	
    }
})
let state = 0
let pattern = 0
pattern = 0
state = 0
basic.showIcon(IconNames.Happy)
music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
basic.clearScreen()
pattern = 1
if (pattern == 1) {
    basic.showLeds(`
        . # # # .
        # . . # #
        # . # . #
        # . . . #
        . # # # .
        `)
}
if (pattern == 2) {
    basic.showIcon(IconNames.EighthNote)
}
