input.onButtonPressed(Button.A, function () {
    radio.sendValue("" + node_id + ",acc_x", input.acceleration(Dimension.X))
})
radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
})
let node_id = 0
radio.setGroup(77)
node_id = 1
