import {makeStyles, MuiThemeProvider, unstable_createMuiStrictModeTheme } from "@material-ui/core";
import About from "./components/About";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import Contacto from "./components/Contacto";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";

const theme = unstable_createMuiStrictModeTheme({
  palette:{
    primary:{main: "#00aae4"},
    secondary: {main: "#333"}
  }
})

function App() {

  const styles = useStyles();

  return (
   
    <MuiThemeProvider theme={theme}>
    <Helmet>
			<title>Portafolio ClaudioE</title>
		</Helmet>
    <div className={styles.root}>
      <Navbar/>
      <About title='Sobre mí' id='about' dark={true}/>
      <Skills title='Mi viaje de codificación' id='skills' dark={true}/>
      <MyWork title='Mis trabajos' id='work' dark={true}/>
      <Contacto title='Ponerse en contacto' id='contacto' dark={true}/>
    </div>
    </MuiThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{
    
  }
}))

export default App;
