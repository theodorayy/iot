let list: string[] = []
let x = 0
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
   list = serial.readUntil(serial.delimiters(Delimiters.NewLine)).split(",")
   if (list[0] == "set") {
       x = parseFloat(list[1])
   } else if (list[0] == "inc") {
       x = x + 1
   } else if (list[0] == "dec") {
       x = x - 1
   }
})
basic.forever(function () {
   basic.showNumber(x)
})
 
