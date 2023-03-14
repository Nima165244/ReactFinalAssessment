const Validation = (values) => {
    let errors ={}

    if(!values.name){
        errors.name = "Name Required"
    }

    if(!values.password){
        errors.password= "Password Required"
    }


    return errors;
   
}

export default Validation;
