import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export const AlertMessage = ({ message }: { message: string | null }) => {
  if (!message) return null
  return ( 
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
 )
}
