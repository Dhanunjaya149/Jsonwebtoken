 import jwt from "jsonwebtoken";

 const secretKey = "12345";

 function encryptData(){
    const data={name:"Dhanu",Age:21,}
    const token=jwt.sign(data, secretKey, {expiresIn:"10m"});
    console.log("Encrypted token", token)
 }
 encryptData()

