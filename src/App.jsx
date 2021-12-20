import React from 'react';
import {Typography, AppBar,Button,Grid, Card, CardActions,CardContent,CardMedia,CssBaseline,Toolbar,Container } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons';

const App=()=>{
  return(
      <div>
      <CssBaseline/>
          
      <AppBar position="relative">
        <Toolbar>
           <PhotoCamera/>
           <Typography variant="h6">
               Photo Album
           </Typography>

        </Toolbar>
      </AppBar>

     <main>
        <Container  maxWidth="sm">
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
         Photo Album
         </Typography>

         <Typography variant="h5" align="center" color="textSecondary" paragraph>
         The output of the first code and the code above is the same but the main reason for using is that it is a tiny bit faster when compared to the one with the ‘div’ tag inside it, as we didn’t create any DOM node. Also, it takes less memory. Another shorthand also exists for the above method in which we make use of ‘<>’ and ‘</>’ instead of the ‘React.Fragment’. 
         </Typography>
       <div>
       <Grid container spacing={2} justify="center">
           <Grid item>
           <Button variant="contained" color="primary">Contained</Button>
          
           </Grid>

            <Grid item>
            <Button variant="outlined" color="primary">Outlined</Button>
            </Grid>

       </Grid>
         

       </div>
        

        </Container>
        
     </main>


      </div>
  );
}

export default App;