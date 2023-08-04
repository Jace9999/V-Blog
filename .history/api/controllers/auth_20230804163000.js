import {db} from "../db.js"
import bcrypt from "bcryptjs"

export const register = (req,res)=>{
    const query = "SELECT * FROM users WHERE email =? or username = ?"

    db.query(query,[req.body.email, req.body.username], (err,data)=>{
        if(err){
            return res.json(err)
        }
        if(data.length){
            return res.status(409).json("User already exists!")
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const query2 = "INSERT INTO users(`username`.`email`,`password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.eamil,
            hash
        ]

        db.query(query2, values, (err,data)=>{
            if(err){
                return res.json(err)
            }
            return res.status(200).json("User has been created.")
        })
    })
}

export const login = (req,res)=>{

}

export const logout = (req,res)=>{

}

router.get("/",(req,res)=>{
    res.json("it")
})
