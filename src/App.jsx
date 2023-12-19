import { Box, Button, Divider, Grid, Typography } from "@mui/material"
import { FormularioLogin } from "./componentes/formularioLogin/FormularioLogin"

import fondo from "./assets/images/backgroundimage.jpg"
import logo from "./assets/AstroLogoWhiteRounded.svg"
import { CajaDeTexto } from "./componentes/CajaDeTexto"
import { useEffect, useState } from "react"

import "./App.css"
import { FormularioRegistro } from "./componentes/FormularioRegistro"

const styles = {
    container: {
        backgroundImage: `url(${fondo})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        fontSize: "2vh",
        justifyContent: "center",
        display: "flex",


    },
    loginSide: {
        backgroundColor: "#00000055",
        paddingY: "2vh",
        paddingX:"50px",
        width: "400px",
        minHeight: "100vh",
        overflow:"hidden",
    }
    ,
    title: {
        color: "#ffffff",
        textShadow: " black 4px 4px 8px ",
        fontWeight: "lighter",
        textAlign: "center",
        padding: "1vh"
    },

}

export const App = () => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {

    }, [])
    console.log(visible)
    const onClickHandler = (ev) => {
        ev.preventDefault()
        setVisible(!visible)
    }

    return (
        <Box container
            element="main"
            maxWidth="xxl"
            sx={styles.container}>
            <Box
                sx={styles.loginSide}
                className={String(!visible)}
                id="loginSide"
            >
                <Box sx={{ display: "grid", justifyContent: "center" }} mb={3}>
                    <img src={logo} width={"80px"} />
                </Box>
                <Typography variant="h4" component="h1" sx={styles.title}>
                    Bienvenido
                </Typography>
                <FormularioLogin setVisible={setVisible} />
                <Divider variant="fullWidth" sx={{ marginY:"10px" }}/>
                <CajaDeTexto setVisible={setVisible} />
            </Box>
            <Box
                className={String(visible)}
                sx={styles.loginSide}
            >
                <Box sx={{ display: "grid", justifyContent: "center" }} mb={3}>
                    <img src={logo} width={"80px"} />
                </Box>

                <Typography variant="h4" component="h1" sx={styles.title}>
                    Regístrate
                </Typography>
                <FormularioRegistro />
                <Divider variant="fullWidth" sx={{ marginY:"10px" }}/>
                
                <Box p={"10px"} border={"solid 0px white"} sx={{ backgroundColor: "#00000066", borderRadius: "10px", textAlign: "center" }}>
                    <Button sx={{ textTransform: "none" }} onClick={onClickHandler}>Volver al login</Button>
                </Box>
            </Box>
        </Box>
    )
}