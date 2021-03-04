input.onButtonPressed(Button.A, function () {
    music.setTempo(120)
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    led.enable(true)
    for (let index = 0; index < 2; index++) {
        images.createImage(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `).scrollImage(1, 200)
        images.createImage(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `).scrollImage(1, 200)
        images.createImage(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `).scrollImage(1, 200)
        basic.pause(200)
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0, 500)
        basic.pause(200)
    }
    led.enable(false)
})
input.onGesture(Gesture.LogoUp, function () {
    led.enable(true)
    music.stopMelody(MelodyStopOptions.All)
    edubitRgbBit.clear()
    edubitTrafficLightBit.setLed(LedColor.All, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    basic.showString("Thank you")
})
input.onButtonPressed(Button.AB, function () {
    edubitRgbBit.setPixelColor(0, edubitRgbBit.rgb(150, 60, 160))
    edubitRgbBit.setPixelColor(1, edubitRgbBit.rgb(35, 160, 70))
    edubitRgbBit.setPixelColor(2, edubitRgbBit.rgb(35, 35, 200))
    edubitRgbBit.setPixelColor(3, edubitRgbBit.rgb(150, 200, 80))
})
input.onButtonPressed(Button.B, function () {
    edubitTrafficLightBit.toggleLed(LedColor.All)
})
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.showString("Hello," + "NG" + "ZHU" + "HUNG")
edubitRgbBit.showRainbow()
