import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        mb: 1,
      }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          28 de diciembre 2023
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          placeholder="Ingrese un titulo"
          label="Titulo"
          sx={{ border: 'none', mb: 1 }}
          fullWidth
        />
        <TextField
          type="text"
          variant="filled"
          placeholder="Que sucedio hoy?"
          fullWidth
          multiline
          minRows={5}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
