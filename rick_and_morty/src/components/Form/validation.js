export default function validate (userData) {
    let errors = {};
        
    if(userData.email === '') {
        errors.email= 'Ingresa tu email';
    }
    
    if(userData.password === '') {
        errors.password = 'Password vacía';
    }

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)){
        errors.email = 'Email inválido';
    }

    if(userData.email.length > 35) {
        errors.email = 'Email demasiado largo';
    }

    if(userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    }

    if(!/\d/.test(userData.password)) {
        errors.password = 'La contraseña debe tener al menos un número';
    }

 return errors
}


