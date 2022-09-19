input.onButtonPressed(Button.A, function () {
    NUmber += 1
    basic.showString("" + (NUmber))
})
input.onButtonPressed(Button.B, function () {
    NUmber += -1
    basic.showString("" + (NUmber))
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("" + (NUmber))
})
let NUmber = 0
radio.setGroup(69)
NUmber = 0
basic.forever(function () {
	
})
