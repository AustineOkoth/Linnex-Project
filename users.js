const express = require('express');
db = require("./database");
const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs'); // added when encypting password
const app = express();

app.use(express.static('./views'));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/home", (req, res) => {
    res.status(200).render("index"); 

});
app.get("/register", (req, res) => {
    res.status(200).render("register");

});
app.get("/admin", (req, res) => {
    res.status(200).render("adminManual", { manualEntryError: "" }); 

});
app.get("/login", (req, res) => {
    res.status(200).render("login", { errorLogin: "" })

});
app.get("/blog", (req, res) => {
    res.status(200).render("blog");
});
app.get("/allcourses", (req, res) => {
    res.status(200).render("allcourses")
});
app.get("/hospitality", (req, res) => {
    res.status(200).render("hospitality")

});
app.get("/ict", (req, res) => {
    res.status(200).render("ict")

});
app.get("/cosmetology", (req, res) => {
    res.status(200).render("cosmetology")

});
app.get("/homeportal", (req, res) => {
    const importedRegNo = require("./users");

    db.query("SELECT * FROM studentFullPersonalInfo where admno = '" + importedRegNo + "' ", (err, result) => {
        if (err) throw err

        if (result.length === 0) {
            //Incase you enter an admno that is not in the full student database. The server does not keeps reloading for life.
            res.status(401).send("kindly Make sure that the login credentials are Correct")
        }

        if (result.length > 0) {

            Object.keys(result).forEach((key) => {
                let fullInformation = result[key];
                const varyName = (fullInformation.name);
                const varyRegNo = (fullInformation.admno);
                const varyEmail = (fullInformation.email);
                const varyCourse = (fullInformation.course);
                const varyDate = (fullInformation.dateOfBirth);
                const varyGender = (fullInformation.gender);
                const varyPhoneNumber = (fullInformation.phoneNumber);
                const varyCountry = (fullInformation.country);
                const varyhomeAddress = (fullInformation.homeaddress);
                const varyMarital = (fullInformation.marital);
                const varyReligion = (fullInformation.religion);
                const varyDisability = (fullInformation.disability);
                const varyOccupation = (fullInformation.occupation);
                const varyLanguage = (fullInformation.language);
                res.status(200).render("homeportal", { loginName: `${varyName}`, loginRegNo: `${varyRegNo}`, loginEmail: `${varyEmail}`, loginCourse: `${varyCourse}`, loginDate: `${varyDate}`, loginGender: `${varyGender}`, loginNumber: `${varyPhoneNumber}`, loginCountry: `${varyCountry}`, loginhomeAddress: `${varyhomeAddress}`, loginMarital: `${varyMarital}`, loginReligion: `${varyReligion}`, loginDisability: `${varyDisability}`, loginOccupation: `${varyOccupation}`, loginLanguage: `${varyLanguage}` });
            })

        }

    })
    // res.status(200).render('homeportal',{ loginName: ``, loginRegNo: ``, loginEmail: ``, loginCourse: ``, loginDate: ``, loginGender: ``, loginNumber: ``, loginCountry: ``, loginhomeAddress: ``, loginMarital: ``, loginReligion: ``, loginDisability: ``, loginOccupation: ``, loginLanguage: `` });

});
app.get("/changepassword", (req, res) => {
    const registrationNumber = require("./users");
    res.status(200).render("changePassword", { registrationNumber: `${registrationNumber}`, errorPassword: `` })

});
app.get("/changeprofile", (req, res) => {
    const registrationNumber = require("./users");

    db.query("SELECT name,admno,course FROM studentFullPersonalInfo where admno = '" + registrationNumber + "' ", (err, result) => {

        if (result.length == 0) {
            //This is for someone who has never ever printed out thier full details But there info is in the manual database entry.
            db.query("SELECT name,course  FROM studentsData where admno = '" + registrationNumber + "' ", (err, result) => {
                Object.keys(result).forEach((key) => {
                    let personalData = result[key];
                    const studentName = (personalData.name);
                    const studentCourse = (personalData.course);
                    db.query(`INSERT INTO studentFullPersonalInfo (name, admno, email, course,dateOfBirth,gender,phoneNumber,country,homeaddress,marital,religion,disability,occupation,language ) VALUES ("${studentName}","${registrationNumber}","","${studentCourse}","","","","","","","","","","")`, (err) => {
                        if (err) throw err
                        console.log("Users details has beeen successfuly added to the full details list");
                    });
                    res.status(200).render("changeProfile", { RegistrationNumber: `${registrationNumber}`, UserName: `${studentName}`, UserCourse: `${studentCourse}` })
                })
            })
        }

        if (result.length > 0) {

            //Data printed here will be extracted from the Full Students Data Table

            db.query("SELECT name,admno,course FROM studentFullPersonalInfo where admno = '" + registrationNumber + "' ", (err, result) => {
                Object.keys(result).forEach((key) => {
                    let personalData = result[key];
                    const studentName = (personalData.name);
                    const studentCourse = (personalData.course);
                    res.status(200).render("changeProfile", { RegistrationNumber: `${registrationNumber}`, UserName: `${studentName}`, UserCourse: `${studentCourse}` })
                    console.log("Data has been extracted from the full students data");
                })
            });
        }
    });

});
app.get('*', function (req, res) {
    res.json({"Error" :"The URL requested doesn't Exist"})
})
// app.get("/acknowledge", (req, res) => {
//     res.status(200).render("acknowledge",{suxChangePwd: "",suxChangeProfile:""});

// });

app.post("/admin", async (req, res)=>{
    const { studentName, admnoAdmin,course, password } = req.body
    const adminHashedPassword = await bcrypt.hash(password, 10);


    db.query(`INSERT INTO studentsdata (name,admno,course,password) VALUES ("${studentName}","${admnoAdmin}", "${course}", "${adminHashedPassword}" )`, (err)=>{
        if (err) throw err
        res.send("Data Inserted Successfully")
    })

})

app.post("/register", (req, res) => {
    const { fullName, phoneNumber, email, courses } = req.body
    const todaydate = new Date().toLocaleDateString();

    db.query(`INSERT INTO registrationWebData (name, phonenumber, email, course,date) VALUES ("${fullName}","${phoneNumber}","${email}","${courses}","${todaydate}")`, (err) => {
        if (err) {
            res.end("There was an Error that occured");
            throw err;

        }
        else {
            console.log("Data inserted Succesfully");
            res.status(200).send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="icon" href="./linnex-college-utawala.jpg">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
                <link rel="stylesheet" href="index2.css">
                <title>Thanks For Registering</title>
            </head>
            <style>
                #thanks-section {
            
                    background-color: #4854613b;
                    background-image: linear-gradient(315deg, #48546194 0%, #28313bee 74%);
                    width: max-content;
                    margin: auto;
                    padding: 50px;
                    margin-top: 50px;
                    font-weight: bolder;
                    font-size: larger;
                    border: 0;
                    box-shadow: 7px 7px 5px 7px #485461;
                    border-radius: 5px;
                    color: white;
                }
            </style>
            <body>
                <div id="top-nav"></div>
            
                <div id="thanks-section">
                    Thank you for choosing Linnex Training Institutue Utawala<br>
                    You have Successfuly Registered for the Course.<br>
                    We will call you as soon as possible<br>
            
                </div>
                <script src="index.js"></script>
            </body>
            
            </html>`)
        }
    });
});

app.post("/login", async (req, res) => {
    const { regNumber, password } = req.body
    module.exports = regNumber;
    try {
        db.query("SELECT admno,password FROM studentsData where admno = '" + regNumber + "' LIMIT 1", async (err, result) => {

            if (err) throw err
            if (result.length === 0) { 
                //Incase you enter an admno that is not in the database. The server does not keeps reloading for life.
                res.status(401).render("login", { errorLogin: "Incorrect Reg/Staff Number" })
            }
            Object.keys(result).forEach(async (key) => {
                let passwordRow = result[key];
                const hashedPassword = (passwordRow.password);
                const isValid = await bcrypt.compare(password, hashedPassword);

                if (isValid) {
                    db.query("SELECT * FROM studentFullPersonalInfo where admno = '" + regNumber + "' ", (err, result) => {
                        if (err) throw err

                        if (result.length === 0) {
                            //     //Incase you enter an admno that is not in the full student database. The server does not keeps reloading for life.
                            db.query("SELECT name,admno,course FROM studentsData where admno = '" + regNumber + "' ", (err, result) => {
                                if (err) throw err;
                                if (result.length === 0) {
                                    res.status(401).send("kindly Make sure that the login credentials are Correct")

                                } 
                                if (result.length > 0) {
                                    Object.keys(result).forEach((key) => {
                                        let personalData = result[key];
                                        const studentName = (personalData.name);
                                        const studentCourse = (personalData.course);
                                        // res.status(200).render("changeProfile", { RegistrationNumber: `${importedRegNo}`, UserName: `${studentName}`, UserCourse: `${studentCourse}` })
                                        res.status(200).render("homeportal", { loginName: `${studentName}`, loginRegNo: `${regNumber}`, loginEmail: ``, loginCourse: `${studentCourse}`, loginDate: ``, loginGender: ``, loginNumber: ``, loginCountry: ``, loginhomeAddress: ``, loginMarital: ``, loginReligion: ``, loginDisability: ``, loginOccupation: ``, loginLanguage: `` });
                                        console.log("Data gotten from the student manual fill up");
                                    })
                                }
                            });
                        }
                        if (result.length > 0) {

                            Object.keys(result).forEach((key) => {
                             
                                let fullInformation = result[key];
                                const varyName = (fullInformation.name);
                                const varyRegNo = (fullInformation.admno);
                                const varyEmail = (fullInformation.email);
                                const varyCourse = (fullInformation.course);
                                const varyDate = (fullInformation.dateOfBirth);
                                const varyGender = (fullInformation.gender);
                                const varyPhoneNumber = (fullInformation.phoneNumber);
                                const varyCountry = (fullInformation.country);
                                const varyhomeAddress = (fullInformation.homeaddress);
                                const varyMarital = (fullInformation.marital);
                                const varyReligion = (fullInformation.religion);
                                const varyDisability = (fullInformation.disability);
                                const varyOccupation = (fullInformation.occupation);
                                const varyLanguage = (fullInformation.language);
                                res.status(200).render("homeportal", { loginName: `${varyName}`, loginRegNo: `${varyRegNo}`, loginEmail: `${varyEmail}`, loginCourse: `${varyCourse}`, loginDate: `${varyDate}`, loginGender: `${varyGender}`, loginNumber: `${varyPhoneNumber}`, loginCountry: `${varyCountry}`, loginhomeAddress: `${varyhomeAddress}`, loginMarital: `${varyMarital}`, loginReligion: `${varyReligion}`, loginDisability: `${varyDisability}`, loginOccupation: `${varyOccupation}`, loginLanguage: `${varyLanguage}` });
                            })
                        }

                    })

                }

                else {
                    res.status(401).render("login", { errorLogin: "Incorrect Password" })

                }
            });
        });
    }
    catch (err) {
        throw err
    }
});

app.post("/homeportal", (req, res) => {
    res.status(200).render("homeportal")

});
 
app.post("/changeprofile", (req, res) => {
    const importedRegNo = require("./users");

    const { changeProfileInputsemail, changeProfileInputsdate, changeProfileInputsgender, changeProfileInputsphone, changeProfileInputscountry, changeProfileInputshome, changeProfileInputsmarital, changeProfileInputsreligion, changeProfileInputsdisability, changeProfileInputsoccupation, changeProfileInputslanguage } = req.body
    db.query("UPDATE studentFullPersonalInfo SET email = '" + changeProfileInputsemail + "', dateOfBirth = '" + changeProfileInputsdate + "',gender = '" + changeProfileInputsgender + "',phoneNumber = '" + changeProfileInputsphone + "',country = '" + changeProfileInputscountry + "' , homeaddress = '" + changeProfileInputshome + "',marital = '" + changeProfileInputsmarital + "',religion = '" + changeProfileInputsreligion + "' ,disability = '" + changeProfileInputsdisability + "',occupation = '" + changeProfileInputsoccupation + "',language = '" + changeProfileInputslanguage + "' where admno = '" + importedRegNo + "'", async (err, result) => {
        if (err) throw err
        console.log("The  data has been updated successfully");

        res.status(200).render("acknowledge",{suxChangePwd: `Your Profile has been Updated.`});

    });
})

app.post("/changepassword", (req, res) => {
    const registrationNumber = require("./users");
    const { passwordCurrent, password, confirmpassword } = req.body

    db.query("SELECT password FROM studentsData where admno = '" + registrationNumber + "' LIMIT 1", (err, result) => {
        if (err) throw err;

        else {

            Object.keys(result).forEach(async (key) => {
                let currentPassword = result[key];
                const hashedCurrentPassword = (currentPassword.password);
                const isValid = await bcrypt.compare(passwordCurrent, hashedCurrentPassword);

                if (isValid) {
                    const newHashedPassword = await bcrypt.hash(password, 10);
                    db.query("UPDATE studentsData SET password = '" + newHashedPassword + "' where admno = '" + registrationNumber + "'", async (err, result) => {
                        if (err) throw err
                        // res.send("You have successfully Changed your password");
                        res.render("acknowledge",{suxChangePwd: `You have Successfuly changed your Password.`})
                        console.log("Password changed Successfully");
                    });
                }
                else {
                    res.status(200).render("changePassword", { registrationNumber: `${registrationNumber}`, errorPassword: `Please enter the correct current password` })
                    console.log("Passsword Entered is Incorrect");
                    console.log(!isValid);
                }

            });
        }

    });

})






app.listen("4500", () => {
    console.log("Listening on port 4500");
})