import { Button, makeStyles, Paper, Radio, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'

const Contacto = ({title, dark, id}) => {

  const styles = useStyles();
  const [value, setValue] = useState("Sr.");

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className={`${styles.section} ${dark && styles.sectiondark}`}>
      <div className={styles.sectionContent} id={id}>
        <Typography variant='h3'>{title}</Typography>
        <Paper className={styles.root}>
          <div className={styles.titleandchoices}>
            <Typography variant='h4'>contáctame</Typography>
            <div className={styles.choices}>

              <span> Hola, Sr.</span>
              <Radio value="Sr." 
                    checked={value === "Sr."}
                    color="primary"
                    onChange={handleChange}
              />
              <span> Hola, Sra.</span>
              <Radio value="Hola, Sra." 
                    checked={value === "Hola, Sra."}
                    color="primary"
                    onChange={handleChange}
              />
            </div>
          </div>
          <form className={styles.form} noValidate autoComplete="off">
            <TextField label="Nombre"/>
            <TextField label="Correo Electronico"/>
            <TextField label="Celular"/>
            <TextField label="Escribir un mensaje"/>
          </form>
          <Button color="secondary" variant="contained">Enviar</Button>
        </Paper>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    section:{
      minHeight:"100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
    },
    sectiondark:{
      background:"#333",
      color:"#fff",
    },
    root:{
      marginTop: theme.spacing(4),
      background:"#E5B301"/*"#00aae4"*/,
      color:"#333",
      fontSize:"1.2rem",
      maxWidth:"700px",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      padding: theme.spacing(4),
      "& button":{
        backgroundColor:"#00aae4",
        color:"#fff",
        fontWeight:"600",
        fontSize:"1.2rem",
        marginTop: theme.spacing(4),
      },
      "& button:hover":{
        backgroundColor:"#03a680",
        color:"#E5B301",
      }
    },
    sectionContent:{
      maxWidth:"80vw",
    },
    titleandchoices:{
      "& h4":{
        marginTop: theme.spacing(4),
      }
    },
    form:{
      display:"flex",
      flexDirection:"column",
      maxWidth:"700px",
      "& input":{
        marginBottom: theme.spacing(2),
      },
    },
}))

export default Contacto
