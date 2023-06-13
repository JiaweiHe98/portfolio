import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, ListItemButton, Link } from '@mui/material';
import Subtitle from '../Subtitle';
import Content from '../../data/Content';
import MyCard from '../card/MyCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Subtext from '../Subtext';
import axios from 'axios';
import Params from '../../data/Params';

const Contact = () => {
  const [fullName, setFullName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [fullNameError, setFullNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (fullName !== null && fullName.trim() === '') {
      setFullNameError(true);
    } else {
      setFullNameError(false);
    }
  }, [fullName]);

  useEffect(() => {
    if (email !== null && email.trim() === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }, [email]);

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    if (emailError || fullNameError) {
      console.log('Incalid info');
      return;
    }

    try {
      const response = await axios.post(Params.web3link, {
        access_key: Params.acssessToken,
        name: fullName,
        email,
        message: subject + '---' + message,
      });

      if (response.status == 200) {
        setFullName(null);
        setEmail(null);
        setSubject('');
        setMessage('');

        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Sorry, there was an error. Please try again later.');
    }
  };

  const isFormValid =
    fullName !== null &&
    fullName.trim() !== '' &&
    email !== null &&
    email.trim() !== '';

  return (
    <Box>
      <Subtitle>Contact me</Subtitle>
      <Subtext>
        Feel free to reach out to me at any time. I'm always open to connecting
        and would be delighted to hear from you.
      </Subtext>
      <MyCard className="grid grid-cols-1 md:grid-cols-2 p-5">
        <Box className="flex flex-col p-5">
          <List
            sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}
          >
            <Link href="mailto:jiaweihe98@gmail.com">
              <ListItemButton sx={{ borderRadius: '1rem' }}>
                <ListItemAvatar>
                  <Avatar>
                    <EmailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Email" secondary={Content.email} />
              </ListItemButton>
            </Link>

            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Phone" secondary={Content.phone} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <HomeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Address" secondary={Content.address} />
            </ListItem>
          </List>
          <Box className="grow" />
          <Box sx={{ pl: '0.5rem' }}>
            <IconButton
              size="large"
              onClick={() => {
                window.open('https://www.linkedin.com/in/jiaweihe98');
              }}
            >
              <LinkedInIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              size="large"
              onClick={() => {
                window.open('https://github.com/JiaweiHe98');
              }}
            >
              <GitHubIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
        <MyCard className="grid grid-cols-1 gap-5 p-5">
          <Box>
            <TextField
              required
              fullWidth
              label="Your Full Name"
              value={fullName === null ? '' : fullName}
              error={fullNameError}
              onChange={handleFullNameChange}
            />
          </Box>
          <Box>
            <TextField
              required
              fullWidth
              label="Your Email"
              value={email === null ? '' : email}
              error={emailError}
              onChange={handleEmailChange}
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              label="Your Subject"
              value={subject}
              onChange={handleSubjectChange}
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Your Message"
              value={message}
              onChange={handleMessageChange}
            />
          </Box>
          <Button
            disabled={!isFormValid}
            onClick={handleSubmit}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </MyCard>
      </MyCard>
    </Box>
  );
};

export default Contact;
