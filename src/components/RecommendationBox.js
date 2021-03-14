import Paper from '@material-ui/core/Paper';
import axios from 'Axios';
import Song from './SongBox.js';
import Artist from './ArtistBox.js';
import NavBar from './NavBar.js';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(11),
            width: "100%"
        },
    },
}));

export default function Recommendation(props) {
    const classes = useStyles();
    const { userName, logout = () => {} } = props;
    const [recomData, setData] = useState({ready: false, message: 'Loading home view...'});

    useEffect(() => {
        axios.get(`http://172.24.100.74:8000/api/recommendation/${userName}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }, [])

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
    return (
        <div>
            <NavBar
                labels={['Home', 'Lo que he escuchado']}
                showSearchButton={true}
                buttonRedirections={['/home', '/history']}
            />

            <div style={{ flexDirection: "column", margin: '50px', justifyItems: "stretch", alignItems: "center" }}>
                <div style={{ display: "flex", padding: '50px 20px 20px 20px' }}>
                    <div style={{ flexGrow: "1" }}>
                        <div style={{ display: "flex", justifyContent: "start" }}>
                            <label style={{ fontSize: '2em', width: "100%", textAlign: 'left', alignSelf: 'stretch' }}>Basado en lo que has escuchado, te recomendamos: </label>
                        </div>
                    </div>
                    <div style={{ flexGrow: "1" }}>
                        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                            <Button variant="contained" color="primary"> Nuevas Recomendaciones </Button>
                        </div>
                    </div>
                </div>

                {artists.map((artist, index) => {
                    return (
                        <div style={{ paddingTop: '75px' }}>
                            <Paper elevation={5} square>
                                <div style={{ justifyContent: "space-evenly", display: "flex", alignItems: "center", padding: '80px 0px 80px 0px' }}>
                                    <div style={{ width: "35%" }}>
                                        <Artist artistName={artist.artist} numListens={artist.worldListens} showButton={false} />
                                    </div>
                                    <div style={{ width: "55%", flexDirection: "column" }}>
                                        {artist.songs.map((song) => {
                                            return (
                                                <div style={{ padding: '40px 0px 40px 0px' }}>
                                                    <Song songName={song.songName} />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </Paper>
                        </div>);
                })}
            </div>
        </div>
    );
}