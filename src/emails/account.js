const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from: 'Tobias303@outlook.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.` // ``template string
    })
}

const sendCancelationEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'Tobias303@outlook.com',
        subject: 'We are sorry to see you go!',
        text: `Dear ${name}. We are sorry that you deleted your account. Please give us feedback on how we could have done better!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}