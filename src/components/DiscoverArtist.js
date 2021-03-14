import Paper from '@material-ui/core/Paper';
import SongBox from './SongBox.js';
import NavBar from './NavBar.js';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Artist from './ArtistBox.js'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            width: '65ch',
        },
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));

export default function DiscoverArtist(props) {
    const classes = useStyles();
    const { artistsArray } = props;
    const artists = [
        {
            idArtist: '1',
            artist: 'Imagine Dragons',
            worldListens: 10,
            imageURL: ''
        },

        {
            idArtist: '2',
            artist: 'Flo Rida',
            worldListens: 100,
            imageURL: ''
        }
        ,
        {
            idArtist: '3',
            artist: 'Andrea Bocelli',
            worldListens: 1000000,
            imageURL: ''
        },
        {
            idArtist: '1',
            artist: 'Imagine Dragons',
            worldListens: 10,
            imageURL: ''
        },

        {
            idArtist: '2',
            artist: 'Flo Rida',
            worldListens: 100,
            imageURL: ''
        }
        ,
        {
            idArtist: '3',
            artist: 'Andrea Bocelli',
            worldListens: 1000000,
            imageURL: ''
        },
        {
            idArtist: '1',
            artist: 'Imagine Dragons',
            worldListens: 10,
            imageURL: ''
        },

        {
            idArtist: '2',
            artist: 'Flo Rida',
            worldListens: 100,
            imageURL: ''
        }
        ,
        {
            idArtist: '3',
            artist: 'Andrea Bocelli',
            worldListens: 1000000,
            imageURL: ''
        }
    ];
    return (
        <div>
            <NavBar showSearchButton={true} />

            <div style={{ justifyContent: "center", display: "flex", alignItems: "center", padding: '50px 20px 20px 20px' }}>
            <label style={{ fontSize: '3em', padding: '20px 0px 20px 0px' }}> ¿Qué artista quieres escuchar hoy?</label>
                <div style={{ width: "80%", flexDirection: "column" }}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Artist" variant="outlined" />
                    </form>
                </div>
                <div style={{ width: "20%", flexDirection: "column" }}>
                    <Button variant="contained" color="primary" className={classes.button}> Buscar </Button>
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", margin: '50px', flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {artists.reduce((accumulator, artist, index) => {

                        const el = (<div style={{ flexGrow: "1", padding: '20px 0px 20px 0px', width: '250px', margin: '0px 20px' }}> <Artist artistName={artist.artist} numListens={artist.worldListens} showButton={true} /> </div>);
                        const el2 = (<div style={{ flexBasis: "100%", height: "40px" }}> </div>)
                        const el3 = (<div style={{ flexBasis: "100%", width: "0" }}> </div>)

                        if ((index + 1) % 4 === 0) {
                            accumulator.push(el, el2);
                        } else {
                            accumulator.push(el);
                        }
                        return accumulator
                    }, []
                    )}
                </div>
            </div>
        </div>
    );}