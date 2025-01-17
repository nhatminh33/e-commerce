
const adminModel = require('../models/adminModel')
const { responseReture } = require('../utiles/response')

const bcrpty = require('bcrypt')
const { createToken } = require('../utiles/tokenCreate')

class authControllers{
    admin_login = async(req,res) => {
        const {email,password} = req.body
        try {
            const admin = await adminModel.findOne({email}).select('+password')
            // console.log(admin)
            if (admin) {
                const match = await bcrpty.compare(password, admin.password)
                // console.log(match)
                if (match) {
                    const token = await createToken({
                        id : admin.id,
                        role : admin.role
                    })
                    res.cookie('accessToken',token,{
                        expires : new Date(Date.now() + 7*24*60*60*1000 )
                    })
                    responseReture(res,200,{token,message: "Login Success"})
                } else {
                    responseReture(res,404,{error: "Password Wrong"})
                }

            } else {
                responseReture(res,404,{error: "Email not Found"})
            }
        } catch (error) {
            responseReture(res,500,{error: error.message})
        }
    }
    // End Method 
    getUser = async (req, res) => {
        const {id, role} = req;
        try {
            if (role === 'admin') {
                const user = await adminModel.findById(id)
                responseReturn(res, 200, {userInfo : user})
            }else {
                console.log('Seller Info')
            }
            
        } catch (error) {
            console.log(error.message)
        }
    } // End getUser Method 

    
}
module.exports = new authControllers()