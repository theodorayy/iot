radio.onReceivedString(function (receivedString) {
    list = receivedString.split(",")
    if (parseFloat(list[0]) == node_id) {
        if (list[1] == "set") {
            x = parseFloat(list[2])
        } else if (list[1] == "inc") {
            x = x + 1
        } else if (list[1] == "dec") {
            x = x - 1
        }
    }
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    radio.sendString(serial.readUntil(serial.delimiters(Delimiters.NewLine)))
})
let x = 0
let list: string[] = []
let node_id = 0
radio.setGroup(1)
node_id = 2
basic.forever(function () {
    basic.showNumber(x)
})
