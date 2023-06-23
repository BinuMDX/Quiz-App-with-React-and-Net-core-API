import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React from 'react'
import Center from './Center'

export default function Login() {
    return (
        <Center>
             <Card sx={{width: '200'}}>
            <CardContent>
                <Typography variant='h3' align='center' sx={{my:"5"}}>Quiz App</Typography>
                <Box sx={{
                    '& .MuiTextField-root': {
                        m: 1,
                        width: '90%'
                    }
                }}>
                    <form>
                        <TextField label='Email' name='email' variant='outlined' />
                        <TextField label='Name' name='name' variant='outlined'/>
                        <Button type='submit' variant='contained' size='Large' sx={{m:1, width: '50%' }}>Login</Button>
                    </form>
                </Box>
            </CardContent>

        </Card>
        </Center>
       




    )
}
