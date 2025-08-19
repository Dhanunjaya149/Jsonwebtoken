 import jwt from "jsonwebtoken"
 function descryptData(){
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGhhbnUiLCJBZ2UiOjIxLCJpYXQiOjE3NTU1OTY2MTgsImV4cCI6MTc1NTU5NzIxOH0.9gsocCYJLnK1h5Gfc7ASNzpC1hrMZHPFihdoxH8rdyk"
 let secretKey = "12345" 
    const decoded = jwt.verify(token, secretKey);
  console.log("Decrypted Data:", decoded);
 }

 descryptData();