import Paper from '@material-ui/core/Paper';
import NavBar from './NavBar.js';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '80ch',
        },
    },
}));

export default function SignUp(props) {
    const classes = useStyles();

    return (
        <div>
            <NavBar labels={['Sign Up', 'Sign In']} showSearchButton={false} />
            <div style={{ padding: '50px 100px 50px 100px' }}>
                <Paper elevation={5} square>
                    <div style={{ padding: '25px 50px 25px 50px' }}>
                        <label style={{ width: "100%", fontSize: '3em' }}> Sign up</label>
                    </div>
                    <div style={{ padding: '25px 50px 25px 50px' }}>
                        <img src={process.env.PUBLIC_URL + '/musical-note.png'} width="15%" alt='musica' />
                    </div>
                    <div style={{ flexDirection: "column", justifyContent: "center", display: "flex", alignItems: "center", width: "100%", padding: '25px 50px 25px 50px' }}>
                        <label style={{ width: "100%", fontSize: '3em' }}> Ingresa un usuario para la plataforma</label>
                        <div style={{ flexBasis: "100%", height: "100px", padding: '25px 50px 25px 50px' }}> </div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Usuario" variant="outlined" />
                        </form>
                    </div>
                </Paper>
            </div>
        </div>

    )


}