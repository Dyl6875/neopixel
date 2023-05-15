let strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
strip.setBrightness(5)
strip.setPixelColor(0, neopixel.rgb(0, 255, 255))
strip.show()
basic.forever(function () {
    basic.pause(100)
    strip.rotate(1)
    strip.show()
})
