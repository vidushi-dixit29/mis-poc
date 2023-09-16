import React, { useState, useEffect } from 'react';
import { Container, Paper, TextField, IconButton, Divider, Typography, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatWindow  = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [assistantMessage, setAssistantMessage] = useState('');

  useEffect(() => {
    setAssistantMessage("Hello! How can I assist you today?");
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, sender: 'You' }]);
      setMessage('');
    }
  };

  return (
    <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', height: '80vh' }}>
      <Box sx={{ border: '1px solid #D3D3D3', padding: '16px' }}>
        <Typography style={{ textAlign: 'left', color:'purple' }}>
          Ask me anything
        </Typography>
      </Box>
      <Paper elevation={3} sx={{ border: '1px solid #D3D3D3', flex: 1, overflowY: 'scroll', boxShadow: 0, borderRadius:0 }}>
        <div style={{ padding: '16px' }}>
          {assistantMessage && (
            <div style={{ marginBottom: '8px', textAlign: 'center' }}>
              <strong>Assistant:</strong> {assistantMessage}
            </div>
          )}
          {messages.map((msg, index) => (
            <div key={index} style={{ marginBottom: '8px', textAlign: msg.sender === 'You' ? 'right' : 'left' }}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>
      </Paper>
      <Divider />
      <div style={{ display: 'flex', alignItems: 'center', paddingTop: '8px' }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ flexGrow: 1 }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <IconButton color="primary" onClick={handleSendMessage} style={{ marginLeft: '-40px', zIndex: '1' }}>
          <SendIcon />
        </IconButton>
      </div>
    </Container>
  );
};

export default ChatWindow;
