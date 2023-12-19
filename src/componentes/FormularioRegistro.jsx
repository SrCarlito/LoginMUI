import { Box, Button, TextField } from "@mui/material"

const formstyle = {
    backgroundColor: "#ffffff00",
    color: "#ffffff",
    border: "solid 1px",
    borderRadius: "5px",
    paddingY: "20px",
    paddingX: "20px",
    rowGap: "2vh",

    boxShadow: "2px 2px 30px #00000088",
    display: "flex",
    flexDirection: "column",
}

export const FormularioRegistro = () => {
    return (
        <Box component={"form"} sx={formstyle}>
            <TextField variant="standard" label="Nombre de Usuario" />
            <TextField variant="standard" label="Correo Electrónico" />
            <TextField variant="standard" label="Numero telefónico" />
            <TextField variant="standard" label="Contraseña" type="password" />
            <Button variant="contained" color="primary" >Registrarme</Button>
        </Box>
    )
}