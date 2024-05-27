import mysql2 from "mysql2";

export const db=mysql2.createConnection({
    host:"bm5cn65rleggg500ov1p-mysql.services.clever-cloud.com",
    port:"3306",
    user:"bm5cn65rleggg500ov1p",
    password:"PTMSeLGbCfSy6hMPK42A",
    database:"fbm5cn65rleggg500ov1p",
})