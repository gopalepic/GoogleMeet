
import React, { useState } from 'react'
import { Card , TextField ,Button } from '@mui/material'

export function ChatCard(sendMessage,chatHistory){
   
    const [message,setMessage] = useState('')
    
     
    const handleSendMessage = () => { 
        if(message.trim() !== ''){
            sendMessage(message);
            setMessage('');
        }
    };

    
    return (
      <div>
        <Card style={{maxHeight:"300px"}}>
              <h3>Card</h3>
              {/* <div style={{maxHeight:'200px',overflowY:'auto',marginBottom:'16px' }}>
             {chatHistory.map((msg,index) => (
                <div key={index}>{msg} </div>

               ))}
               </div> */}

               <div>
                <TextField type='text' value={message}
                onChange={(e) =>{
                   setMessage(e.target.value)
                }}
                style={{flex:'1',marginRight:'8px'}}
                >

                </TextField>

                <Button onClick={handleSendMessage} style={{minWidth:"80px"}}>
                    Send
                </Button>
               </div>
        </Card>
      </div>
    )
  }

