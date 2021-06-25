const valid = ({fullname, username, email, password, cf_password}) => {
    const err = {}

    if(!fullname) {
        err.fullname = "Hãy nhập đầy đủ tên của bạn."
    }else if(fullname.length > 25){
        err.fullname = "Tên tối đa 25 ký tự."
    }

    if(!username) {
        err.username = "Hãy nhập tên người dùng."
    }else if(username.replace(/ /g, '').length > 25){
        err.username = "Tên tối đa 25 ký tự."
    }

    if(!email) {
        err.email = "Hãy nhập email của bạn."
    }else if(!validateEmail(email)){
        err.email = "Định dạng email không chính xác."
    }

    if(!password) {
        err.password = "Hãy nhập mật khẩu."
    }else if(password.length < 6){
        err.password = "Mật khẩu phải trên 6 ký tự."
    }

    if(password !== cf_password) {
        err.cf_password = "Xác nhận lại mật khẩu không chính xác"
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}



function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  
export default valid