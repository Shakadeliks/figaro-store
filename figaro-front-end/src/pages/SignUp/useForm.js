// custom hook for form validation
import { register } from "../../Redux/userApiCalls";
import { useDispatch } from 'react-redux';

import { useState } from "react";

const useForm = (validate) => {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [ setIsSubmitting] = useState(false);


    const onChange = (e) => {

        const { name, value } = e.target;

        setValues({...values, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validate(values));
        console.log(errors)
        setIsSubmitting(true);

        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
            register(dispatch, values)
        }
    }

    return { onChange, values, handleSubmit, errors };

}

export default useForm;

