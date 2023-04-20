import React from "react"
import { Stack, Typography } from "@mui/material"
import HomeCard from "../components/HomeCard"

const Home = () => {

  return (
    <>
      <Stack>
        <Stack
        minHeight="60%"
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        >
          <Stack>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                width: "max-content",
                backgroundClip: "text",
                backgroundImage:
                  "linear-gradient(225deg, #F2A900 50%, #f7931a 70%)",
                WebkitTextFillColor: "transparent",
              }}
            >
              JavaIDE
            </Typography>
            <Typography
            sx={{
              fontSize: "1.5rem",
            }}
            >
              Best Java IDE for ALL developeers
            </Typography>
          </Stack>
          <HomeCard />
        </Stack>
      </Stack>
    </>
  )
}

export default Home