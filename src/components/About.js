import { Card, CardActions, CardContent, CardMedia, makeStyles, Button, Typography } from '@material-ui/core';
import React from 'react'
import claudio from "../img/FotoClaudioE.jpg"
import TypeWriterEffect from "react-typewriter-effect"
import pdf from "../img/Curriculum Claudio Escandor C.pdf"

const About = ({title, dark, id}) => {
    const styles = useStyles();

  return (
    <div className={`${styles.section} ${dark && styles.sectiondark}`}>
      <div className={styles.sectionContent} id={id}>
        <Typography variant='h3'>{title}</Typography>

        <Card className={styles.card}>
          <CardMedia image={claudio} className={styles.media} title="Foto"/>
          <CardContent className={styles.cardcontent}>
            <TypeWriterEffect
              text="Hola, mi nombre es Claudio Escandor"
              textStyle={{fontSize:"2rem", fontWeight:"700px", color:"#00aae4"}}
              startDelay={100}
              cursorColor="black"
              typeSpeed={100}
            />
            <TypeWriterEffect
              text="Soy un desarrollador front end developer"
              textStyle={{fontSize:"1.2rem", fontWeight:"500px"}}
              startDelay={2500}
              cursorColor="black"
              typeSpeed={100}
            />
            <Typography variant='h6' color="textSecondary">
                Soy una persona que sabe trabajar en
                equipo colaborando, dando ideas u
                opiniones de lo que se debe hacer. soy
                una persona que no se frustra rápido
                siempre trato de llegar al error del que
                se cometió o del que uno comete, trato de
                ver siempre una forma efectiva de poder
                solucionarlo.
            </Typography>         
          </CardContent>
          <CardActions>
            <Button variant="contained" className={styles.botoncv}>
              <a href={pdf} download >
                Descargar CV
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

//Stylos
const useStyles = makeStyles((theme) => ({
      section:{
        minHeight:"100vh",
      },
      sectiondark:{
        background:"#333",
        color:"#fff",
      },
      sectionContent:{
        maxWidth:"80vw",
        margin:"0 auto",
      },
      card:{
        height:"70vh",
        display:"flex",
        marginTop: theme.spacing(6),
        position:"relative",
      },
      media:{
        width:"250px",
        height:"auto",
        objectFit:"cover",
        borderRadius:"10px",
        margin:theme.spacing(5),
      },
      cardcontent:{
        marginTop:theme.spacing(2),
        "& h6":{
          marginTop:theme.spacing(6),
          [theme.breakpoints.down("sm")]:{
            display:"none"
          },
        },
      },
      botoncv:{
        position:"absolute",
        bottom:10,
        right:"4rem",
        [theme.breakpoints.down("sm")]:{
          bottom:"2.5rem",
          right:"1rem",
        },
        backgroundColor:"#E5B301",
        padding:theme.spacing(3),
        "&:hover":{
          backgroundColor:"#fff",
        },
        "& a":{
          color:"#333",
          textDecoration:"none",
          fontWeight:900,
        },
      },
  }))

export default About
