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
      <Box sx={{ background: '#f0f0f0', padding: '16px' }}>
        <Typography variant="h5" style={{ textAlign: 'center' }}>
          Chat with Assistant
        </Typography>
      </Box>
      <Paper elevation={3} style={{ flex: 1, overflowY: 'scroll' }}>
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
      <div style={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <IconButton color="primary" onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </div>
    </Container>
  );
};

export default ChatWindow;
