var txt, inform
txt = "What info do you want to know?(my_info, website_info)"
inform = prompt(txt)
if(inform == "my_info"){
    your_info()
}
else if(inform == "website_info"){
    website_info()
}
function your_info(){
    var information={a: "",b: "",c: ""}
    var txt
    txt = "Type your birthday date in following form dd-mm-yyyy"
    information.a = prompt(txt)
    information.a = information.a.replace(/-/g, " ")
    var txt1
    txt1 = "Type your Name in following form Surname-Name"
    information.b = prompt(txt1)
    information.b = information.b.replace(/-/g, " ")
    document.write("Here is your information: <br>")
    information.c = (information.b+", "+information.a)
    document.write(information.c)
}
function website_info(){
    let full_date = new Date('August 10, 2022 01:25:30')
    var b, txt
    txt = "What information about date do you whant to know?(Year|Month|Date|Hours|Minutes|Seconds)"
    b = prompt(txt)
    if (b == "Year") {
        let a = full_date.getFullYear()
        document.write(+a+" - Year of creating this webpage")
    }
    else if (b == "Month") {
        let a = full_date.getMonth()
        document.write(+a+" - Month of creating this webpage")
    }
    else if (b == "Date") {
        let a = full_date.getDate()
        document.write(+a+" - Date of creating this webpage")
    }
    else if (b == "Hours") {
        let a = full_date.getHours()
        document.write(+a+" - Hour of creating this webpage")
    }
    else if (b == "Minutes") {
        let a = full_date.getMinutes()
        document.write(+a+" - Minute of creating this webpage")
    }
    else if (b == "Seconds") {
        let a = full_date.getMinutes()
        document.write(+a+" - Second of creating this webpage")
    }
    else{
        document.write("I don't understand you")
    }
    
}