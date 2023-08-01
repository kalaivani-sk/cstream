export const signup = [
    {
        label: 'First Name',
        required: true,
        type: 'text',
        name: 'firstName',
        size: 'large'
    },
    {
        label: 'Date Of Birth',
        required: true,
        type: 'date',
        name: 'dateOfBirth',
        size: 'large'
    },
    {
        label: 'E-mail',
        required: true,
        type: 'email',
        name: 'email',
        size: 'large',
        errorMsg: 'Please Enter Valid Email'
    },
    {
        label: 'Password',
        required: true,
        type: 'password',
        name: 'password',
        size: 'large',
        errorMsg: 'Password must be uppercase,number,special char and char length 8'
    },
    {
        label: 'Confirm Password',
        required: true,
        type: 'password',
        name: 'confirmPassword',
        size: 'large',
        errorMsg: "Password Doesn't Match",
        verify: {
            name: 'password',
            check: 'match'
        }
    },
]

export const signin = [
    {
        label: 'E-mail',
        required: true,
        type: 'email',
        name: 'email',
        size: 'large',
        errorMsg: 'Please Enter Valid Email',
        placeholder:'Enter E-mail'
    },
    {
        label: 'Password',
        required: true,
        type: 'password',
        name: 'password',
        size: 'large',
        placeholder:'Enter Password',
        errorMsg: 'Please Enter Valid Password',
    },
]