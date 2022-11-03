import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Technologies from './Technologies';

const Skills = ({title, dark, id}) => {

  const styles = useStyles();

  return (
    <div className={`${styles.section} ${dark && styles.sectiondark}`}>
      <div className={styles.sectionContent} id={id}>
        <Typography variant='h3'>{title}</Typography>
        <Technologies/>
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
}))

export default Skills
