import { useState, type ChangeEvent, type SyntheticEvent } from "react";

type FoodDeliveryFormType = {
    customerName: string;
    mobile: string;
}

type FoodDeliveryFormErrorType = {
    customerName: string;
    mobile: string;
}

export const FoodDeliveryForm = () => {
    
    const [values,setValues] = useState<FoodDeliveryFormType>({
        customerName: '',
        mobile: ''
    })

    const [errors, setErrors] = useState<FoodDeliveryFormErrorType>({
        customerName: '',
        mobile: ''
    })
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value})
    }

    const validateFormData = () => {
        let errors: FoodDeliveryFormErrorType = {
            customerName: '',
            mobile: ''
        };

        if (values.customerName == '') {
            errors.customerName = 'Customer name is required';
        }
        if (values.mobile === '') {
            errors.mobile = 'Mobile number is required';
        }

        setErrors(errors)
        return Object.values(errors).every(error => error == '');
    }

    const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(validateFormData()) {
            console.log('Form Data', values);
        }else{
            console.log('Form is invalid', errors);
        }
    }

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
        <div className="form-floating mb-3">
            <input 
                type="text" 
                name="customerName"
                className="form-control" 
                placeholder="Customer Name" 
                value={values.customerName}
                onChange={handleInputChange}
            />
            <label>Customer Name</label>
        </div>

        <div className="form-floating mb-3">
            <input 
                type="text" 
                name="mobile"
                className="form-control" 
                placeholder="Mobile" 
                value={values.mobile}
                onChange={handleInputChange}
            />
            <label>Mobile</label>
        </div>
        <button type="submit" className="btn btn-primary">
            Submit
        </button>
    </form>
  )
}
