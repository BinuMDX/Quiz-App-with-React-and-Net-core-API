import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React from 'react'
import Center from './Center'
import { Margin } from '@mui/icons-material'
import useForm from '../hooks/useForm'

const getFreshModel = () => ({
    name: '',
    email: ''
})

export default function Login() {

    const { values,
        setValues,
        errors,
        setErrors,
        handleInputChange } = useForm(getFreshModel);

    const login = e => {
        e.preventDefault();
        if (validate())
            console.log(values);
    }

    const validate = () => {
        let temp = {};
        temp.name = values.name ? "" : "This field is required.";
        temp.email = (/$^|.+@.+..+/).test(values.email) && values.email? "" : "Email is not valid.";
        setErrors(temp)
        return Object.values(temp).every(x => x === "");
    }

    return (
        <Center>
            <Card sx={{ width: '75%' }}>
                <CardContent>
                    <Typography variant='h3' align='center' style={{ marginBottom: '15px' }}>Quiz App</Typography>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '90%'
                        }
                    }}>
                        <form onSubmit={login}>
                            <TextField label='Email' name='email' value={values.email} onChange={handleInputChange} variant='outlined' size='small' {...(errors.email && { error: true, helperText: errors.email })} />
                            <TextField label='Name' name='name' value={values.name} onChange={handleInputChange} variant='outlined' size='small' {...(errors.name && { error: true, helperText: errors.name })} />
                            <Button type='submit' variant='contained' size='Large' sx={{ m: 1, width: '50%' }}>Start</Button>
                        </form>
                    </Box>
                </CardContent>

            </Card>
        </Center>





    )
}
