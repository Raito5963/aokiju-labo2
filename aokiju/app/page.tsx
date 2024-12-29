import styles from "./page.module.css";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Paper,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1025,
      xl: 1536,
    },
  }
});

export default function Home() {
  return (
    <Container>
      <Paper 
      elevation={3} 
      sx={{
        p: 5,
        
      }}>
        <h1 className={styles.title}>ようこそAokijuLaboへ!</h1>
      </Paper>
      <Paper elevation={3} sx={{ p: 5, mt: 5 }}>
        <h2></h2>
      </Paper>
    </Container>
  );
}