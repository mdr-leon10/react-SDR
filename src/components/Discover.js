import Paper from '@material-ui/core/Paper';
import SongBox from './SongBox.js';
import NavBar from './NavBar.js';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            width: '47%',
        },
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));


export default function Discover(props) {
    const classes = useStyles();
    const artists = [
        {
            idArtist: '1',
            artist: 'Imagine Dragons',
            songs: [
                {
                    idSong: '1',
                    songName: 'Demons'
                },
                {
                    idSong: '2',
                    songName: 'Radioactive'
                },
                {
                    idSong: '3',
                    songName: 'Bad liar'
                },
            ],
            worldListens: 10,
            imageURL: ''
        },

        {
            idArtist: '2',
            artist: 'Flo Rida',
            songs: [
                {
                    idSong: '4',
                    songName: 'Club Cant Handle Me'
                },
                {
                    idSong: '5',
                    songName: 'Low'
                },
                {
                    idSong: '6',
                    songName: 'Hola'
                },
            ],
            worldListens: 100,
            imageURL: ''
        }
        ,
        {
            idArtist: '3',
            artist: 'Andrea Bocelli',
            songs: [
                {
                    idSong: '7',
                    songName: 'Amo Soltanto Te'
                },
                {
                    idSong: '8',
                    songName: 'Because We Believe'
                },
                {
                    idSong: '9',
                    songName: 'Gloria the gift of life'
                },
            ],
            worldListens: 1000000,
            imageURL: ''
        }
    ];
    const {songArray=artists} = props;


    return (
        <div>
            <NavBar button1={['Home', 'Lo que he escuchado']} showSearchButton={true}/>

            <div style={{ justifyContent: "center", display: "flex", alignItems: "center", padding: '100px 20px 20px 20px' }}>
                <div style={{ width: "80%" }}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Artist" variant="outlined" />
                        <TextField id="outlined-basic" label="Song" variant="outlined" />
                    </form>
                </div>
                <div style={{ width: "20%", flexDirection: "column" }}>
                    <Button variant="contained" color="primary" className={classes.button}> Buscar </Button>
                </div>
            </div>

            <div style={{padding: '30px 60px 20px 60px'}}>
                <Paper elevation={5} square>
                    <div style={{ justifyContent: "center", display: "flex", alignItems: "center", padding: '20px 0px 20px 0px', flexDirection: "column" }}>
                        {songArray.map((artist) => {
                            var artistName = artist.artist;
                            return (
                                artist.songs.map((song) => {
                                    return(
                                        <div style={{ width: "95%", padding: '10px 100px 30px 100px' }}>
                                        <SongBox songName={' '+ artistName + ': ' + song.songName}/>
                                    </div>

                                    );
                                })
                            );
                        }) }
                    </div>
                </Paper>
            </div>
        </div>
    );
}