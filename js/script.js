var information={a: "",b: "",c: ""}
var txt
txt = "Type your birthday date in following form dd/mm/yyyy"
information.a = prompt(txt)
var txt1
txt1 = "Type your Name in following form Surname-Name"
information.b = prompt(txt1)
document.write("Here is your information: <br>")
information.c = (information.a+", "+information.b)
document.write(information.c)

let date = new Date('12 25, 1995 23:15:30')
let day = date.getDate()
let month = date.getMonth()

document.write(day)
document.write(month)
