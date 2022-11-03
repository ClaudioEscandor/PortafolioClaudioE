import { Card, CardContent, CardMedia, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import mockData from "./mockData"

const MyWork = ({title, dark, id}) => {

  const styles = useStyles();

  return (
    <div className={`${styles.section} ${dark && styles.sectiondark}`}>
      <div className={styles.sectionContent} id={id}>
        <Typography variant='h3'>{title}</Typography>
        <Grid container className={styles.grid}>
          {
            mockData.map(({title, image, link}, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={styles.card}>
                  <CardMedia image={image} className={styles.caratulas} titulo="Gastos"/>
                  <CardContent>
                    <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                      {title}
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
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
      maxWidth:"90vw",
      margin:"0 auto",
      padding:theme.spacing(5),
    },
    grid:{
      marginTop: theme.spacing(10),
    },
    card:{
      maxWidth:345,
      minHeight:275,
      margin:theme.spacing(3),
    },
    caratulas:{
      height:0,
      paddingTop:'56.25%', //16:9
    },
}))

export default MyWork
