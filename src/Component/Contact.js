import React from 'react'
import "./Contact.css"
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[900],
    '&:hover': {
      backgroundColor: red[700],
    },
}));

export default function Contact() {
  return (
    <div className='contact' id='contact'>
        <h3>Contact Us</h3>
        <div className="contact_info" data-aos="fade-down">
            <div className="address">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                </div>
                <div className="address1"><h4>Our Office Address</h4></div>
                <div className="address2"><h6>Lal Kuan , New Delhi </h6></div>
            </div>

            <div className="email">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg>
                </div>
                <div className="email1"><h4>General Enquire</h4></div>
                <div className="email2"><h6>surajkumar705@gmail.com</h6></div>
            </div>

            <div className="call">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                </div>
                <div className="call1"><h4>Call Us</h4></div>
                <div className="call2"><h6>+91 8802404705</h6></div>
            </div>

            <div className="timing">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    </svg>
                </div>
                <div className="timing1"><h4>Our Timings</h4></div>
                <div className="timing2"><h6>Mon - Sun : 09:00 AM - 09:00 PM</h6></div>
            </div>
        </div>

        <div className="form" data-aos="fade-left">
            <div className="form_up">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '29%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField required id="outlined-basic" label="Name" variant="filled" />
                <TextField id="filled-basic" label="Email" variant="filled" type="email" />
                <TextField id="standard-basic" label="Phone number" variant="filled" type="number" />
            </Box>
            </div>
            <div className="form_down">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '81%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField required id="filled-helperText" label="Message" variant="filled" helperText="Some important text"/>
            </Box>
            </div>
            <div className="submit" data-aos="fade-right">
                <ColorButton variant="contained"><p>Submit</p></ColorButton>
            </div>
        </div>

    </div>
  )
}
