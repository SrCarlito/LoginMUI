import { Box, Button, Typography } from "@mui/material"

export const CajaDeTexto = ({ setVisible }) => {
    const toRegisterHandler = (ev) => {
        ev.preventDefault()
        setVisible(true)
        console.log("hola")

    }
    return (
        <Box p={"20px"} border={"solid 0px white"} sx={{ backgroundColor: "#00000066", borderRadius: "10px" }}>
            <Typography variant="body1" component="p" sx={{ color: "#ffffff", textAlign: "center" }} >
                Eres nuevo? <Button
                    sx={{ textTransform: "none" }}
                    onClick={toRegisterHandler}    
                >
                    Crea una cuenta
                </Button>
            </Typography>
        </Box>
    )
}