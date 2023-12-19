import { Box, Button, TextField } from "@mui/material"

const styles = {
    form: {
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
}

export const FormularioLogin = ({setVisible}) => { 

    const toRegisterHandler = (ev) => { 
        ev.preventDefault()
        setVisible("hide")
    }
    return (
        <Box component={"form"} sx={styles.form}>
            <TextField  variant="standard" label="Nombre de Usuario" />
            <TextField variant="standard" label="Contraseña" type="password" />
            <Button variant="outlined" color="primary" >olvidé mi contraseña</Button>
            <Button variant="contained" color="primary" >Ingresar</Button>
        </Box>
    )
}