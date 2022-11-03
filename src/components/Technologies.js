import React from 'react'
import csharp from "../img/Csharp_Logo.png"
import java from "../img/java.png"
import sql from "../img/sql-logo.png"
import html from "../img/html.png"
import css from "../img/CSS3_logo_and_wordmark.svg.png"
import mongo from "../img/mongobd-logo.png"
import javascript from "../img/jslogo.png"
import react from "../img/logo-react.png"
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineOpositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import { makeStyles, Paper, Typography } from '@material-ui/core'
import StarRating from './StarRating'

const Technologies = () => {

    const styles = useStyles();

    const skills = [
        {
            year:"2016",
            src: csharp,
            title: "C#",
            stars:3.5,
        },

        {
            year:"2016",
            src: java,
            title: "JAVA",
            stars:4,
        },

        {
            year:"2016",
            src: sql,
            title: "BD SQL",
            stars:4,
        },

        {
            year:"2019",
            src: html,
            title: "HTML",
            stars:3,
        },

        {
            year:"2019",
            src: css,
            title: "CSS",
            stars:3,
        },

        {
            year:"2021",
            src: mongo,
            title: "Mongo DB",
            stars:3,
        },

        {
            year:"2021",
            src: javascript,
            title: "JavaScript ES6",
            stars:4,
        },
        
        {
            year:"2021",
            src: react,
            title: "React js",
            stars:4,
        },
    ];

  return (
    <Timeline align="left">
      {
        skills.map(({year,src,title,stars}, index) => (
            <TimelineItem key={index}>
                <TimelineOpositeContent>
                    <Typography variant='h6'>
                        {year}
                    </Typography>
                </TimelineOpositeContent>
                    <TimelineSeparator>
                        <img src={src} alt={title} className={styles.customlogo}/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={styles.paper}>
                        <Typography variant='h6' componenet="h1">
                            {title}
                        </Typography>
                        <StarRating  stars={stars}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        ))
      }
    </Timeline>
  )
}

const useStyles = makeStyles((theme) => ({
    customlogo:{
      width:"50px",
      borderRadius:"10px",
    },
    paper:{
        padding:"6px 16px",
        maxWidth:"200px",
        backgroundColor:"#333",
        color:"#fff",
        borderRadius:"10px",
    }
  }))

export default Technologies
