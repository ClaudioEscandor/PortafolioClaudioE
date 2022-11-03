import { AppBar, List, makeStyles, Toolbar, IconButton, Drawer, Divider, ListItemIcon, ListItem } from '@material-ui/core'
import logo from "../img/logoCEC.PNG"
import { Link, animateScroll as scroll } from 'react-scroll';
import InfoIcon from '@material-ui/icons/Info';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import CodeIcon from '@material-ui/icons/Code';
import ContactsIcon from '@material-ui/icons/Contacts';
import MenuIcon from "@material-ui/icons/Menu"
import { useState } from 'react';
import CancelIcon from "@material-ui/icons/Cancel"


const Navbar = () => {

  const styles = useStyles();
  const [open, setOpen] = useState(false);

  const links =[
    {
      id:'about',
      text:'Sobre mí',
      icon: <InfoIcon fontSize="large" className={styles.info}/>
    },
  
    {
      id:'skills',
      text:'Habilidades',
      icon: <EmojiObjectsIcon fontSize="large" className={styles.habil}/>
    },
  
    {
      id:'work',
      text:'Mis trabajos',
      icon: <CodeIcon fontSize="large" className={styles.code}/>
    },
  
    {
      id:'contacto',
      text:'Contactarse Conmigo',
      icon: <ContactsIcon fontSize="large" className={styles.contact}/>
    },
  ]
  

  const scrollToTop = () =>{
    scroll.scrollToTop();
  }

  return (
    <>
    <AppBar position='sticky' className={styles.root}>
      <Toolbar className={styles.toolbar}>
        <img src={logo} onClick={scrollToTop} className={styles.logo} alt='Logo'/>
        <List className={styles.menu}>
          {
            links.map(({id, text}, index) => (
              <Link key={index} 
                    to={id} 
                    spy={true} 
                    activeClass="active" 
                    smooth={true} 
                    duration={500} 
                    offset={-70}>{text}
                </Link>
            ))
          }
        </List>
        <IconButton edge="end" className={styles.menubuttom} onClick={() => setOpen(!open)}>
          <MenuIcon fontSize="large"/>
        </IconButton>
        
      </Toolbar>
    </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <IconButton onClick={() => setOpen(false)}>
            <CancelIcon fontSize='large' className={styles.cancelicon}/>
          </IconButton>
          <Divider/>
          {
            links.map(({id, text, icon}, index) => (
              <Link key={index}
                    className={styles.sidebar} 
                    to={id} 
                    spy={true} 
                    activeClass="active" 
                    smooth={true} 
                    duration={500} 
                    offset={-70}>
                      <ListItem componenet="h5">
                        <span>
                          <ListItemIcon>
                            {icon}
                          </ListItemIcon>
                        </span>{text}
                      </ListItem>
                </Link>
            ))
          }
      </Drawer>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
    background:"#fff",
    top:0,
    left:0,
    right:0,
    zIndex:999,
  },
  toolbar:{
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
  },
  logo:{
    height:"3rem",
    objectFit: "contain",
    "&:hover":{
      cursor:"pointer",
    },

  },
  info:{
    color:"#00aae4",
  },
  habil:{
    color:"#00aae4",
  },
  code:{
    color:"#00aae4",
  },
  contact:{
    color:"#00aae4",
  },
  menu:{
    [theme.breakpoints.down("sm")]:{
      display:"none",
    },
    "& a":{
      color:"#E5B301",
      fontSize:"1.4rem",
      fontWeight:"bold",
      marginLeft:theme.spacing(3),
      
    },
    "& a:hover":{
      cursor:"pointer",
      color:"#00aae4",
      borderBottom:"3px solid #00aae4",
    },
  },
  menubuttom:{
    display:"none",
    [theme.breakpoints.down("sm")]:{
      display:"block",
      color:"#E5B301",
      position:"absolute",
      top:0,
      right:10,
    }
  },
  cancelicon:{
    color:"tomato",
    position:"absolute",
    top:0,
    right:10,
  },
  sidebar:{
    width:"40vw",
    [theme.breakpoints.down("sm")]:{
      width:"60vw",
      color:"#E5B301",
      fontWeight:"bold",
      cursor:"pointer",
    },
    "& h5":{
      margin:theme.spacing(10, 0, 0, 4),
      fontSize:"1.4rem",
      color:"#00aae4",
      fontWeight:"bold",
    },
    "& h5:hover":{
      color:"#00aae4",
      cursor:"pointer",
    },
  },
}))

export default Navbar
