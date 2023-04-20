import React from 'react'
import { Link } from 'react-router-dom'
import { styled, Paper, TextField, Button, Divider, Typography } from '@mui/material'

const HomeCardContainer = styled(Paper)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  width: "25vw",
  padding: "5vh",
  margin: "5vw",
  borderRadius: "10px",
  gap: "15px",
}));

const HomeCard = () => {

  function handleDownload() {
    const a = document.createElement("a");
    a.href = "/src/JavaIDE.txt";
    a.download = "JavaIDE.txt";

    a.click();
  }

  return (
    <HomeCardContainer>  
      <Typography
        variant="h5"
        fontWeight="bold"
      >
        Download Here!
      </Typography>

      <Button 
        onClick={handleDownload}
        variant='contained'
      >
        Download!
      </Button>

      {/* need to put flexItem to indicate that it is a flexItem. this way, it will calculate late accordingly
      instead of being small */}
      <Divider flexItem />
      <Button variant='contained' color="success">About</Button>
    </HomeCardContainer>
  )

}

export default HomeCard