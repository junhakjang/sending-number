input.onButtonPressed(Button.A, function () {
    NUmber += 1
    basic.showString("" + (NUmber))
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(NUmber)
})
input.onButtonPressed(Button.B, function () {
    NUmber += -1
    basic.showString("" + (NUmber))
})
let NUmber = 0
radio.setGroup(23)
NUmber = 0
basic.forever(function () {
	
})
