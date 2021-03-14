import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Song from './SongBox.js';
import Artist from './ArtistBox.js';
import NavBar from './NavBar.js';
import { makeStyles, recomposeColor } from '@material-ui/core/styles';
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
    const { userName, logout = () => { } } = props;
    const [recomData, setData] = useState({ ready: false, artists: [] });

    useEffect(() => {
        axios.get(`http://172.24.100.74:8000/api/recommendation/${userName}/`)
            .then(res => {
                var recomUpdate = []
                if ('iid' in res.data) {
                    recomUpdate = Object.values(res.data['iid'])
                } else {
                    recomUpdate = res.data['results']
                }
                setData({
                    ...recomData,
                    ready: true,
                    artists: recomUpdate,
                })
            })
            .catch(err => console.log(err))
    }, []);

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
                {!recomData.ready && (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                )}
                {recomData.ready && recomData.artists.map((aid, index) => (
                    <ArtistContainer aid={aid} />
                ))}
            </div>
        </div>
    );
}


function ArtistContainer(props) {
    const { aid } = props;
    const [artistData, setArtistData] = useState({ ready: false });

    useEffect(() => {
        axios.get(`http://172.24.100.74:8000/api/artist/${aid}/`)
            .then(res => {
                setArtistData(prevState => ({
                    ...prevState,
                    ready: true,
                    name: res.data['artist_name'],
                    worldListens: res.data['total_play'],
                    songs: res.data['songs'].slice(0, 3),
                }))
            })
            .catch(err => console.log(err))
    }, []);


    if (artistData.ready) {
        return (
            <div style={{ paddingTop: '75px'}}>
                <Paper elevation={5} square style={{height: '500px'}}>
                    <div style={{ justifyContent: "space-evenly", display: "flex", alignItems: "center", padding: '80px 0px 80px 0px' }}>
                        <div style={{ maxWidth: "25%", maxHeight: "80%" }}>
                            <Artist artistName={artistData.name} numListens={artistData.worldListens} showButton={false} />
                        </div>
                        <div style={{ width: "70%", flexDirection: "column" }}>
                            {artistData.songs.map((song) => {
                                return (
                                    <div style={{ padding: '40px 0px 40px 0px' }}>
                                        <Song songName={song['track_name']} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Paper>
            </div>
        );
    } else {
        return (<div></div>);
    }
}
