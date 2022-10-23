import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from '../../store/auth';

const formData = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignin = () => {
    console.log('onGoogleSignin');
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title='Login'>
      <form
        aria-label='submit-form'
        onSubmit={onSubmit}
        className='animate__animated animate__fadeIn animate__faster'
      >
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder='email@email.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='contraseña'
              fullWidth
              name='password'
              inputProps={{
                'data-testid': 'password',
              }}
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type='submit'
                variant='contained'
                fullWidth
                disabled={isAuthenticating}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                fullWidth
                aria-label='google-btn'
                onClick={onGoogleSignin}
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ marginLeft: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
