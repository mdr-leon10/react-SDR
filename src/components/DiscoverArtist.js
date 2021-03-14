import NavBar from './NavBar.js';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Artist from './ArtistBox.js'
import { useState } from 'react';
import axios from 'axios';


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
    const { logout } = props;
    const [searchData, setSearchData] = useState({ ready: false, results: [] });
    const [searchVal, setSearchVal] = useState('');

    const updateSearch = (query) => {
        axios.get(`http://172.24.100.74:8000/api/search/?artist_name_prefix=${query}`)
            .then(res => {
                setSearchData({
                    ready: true,
                    results: res.data
                });
            })
            .catch(err => console.log(err))
    };

    const handleClick = () => {
        setSearchData(prevState => ({
            ...prevState,
            ready: false,
        }));
        updateSearch(searchVal);
    }

    useEffect(() => {
        updateSearch('');
    }, []);


    const placeholders = new Array(4 - (historyData.artists.length % 4)).fill(0);

    return (
        <div>
            <NavBar
                labels={['Home', 'Lo que he escuchado']}
                buttonRedirections={['/home', '/history']}
                showLogoutButton={true}
                logoutCallback={logout}
                showSearchButton={true}
            />

            <div style={{ justifyContent: "center", display: "flex", alignItems: "center", padding: '50px 20px 20px 20px' }}>
                <label style={{ fontSize: '3em', padding: '20px 0px 20px 0px' }}> ¿Qué artista quieres escuchar hoy?</label>
                <div style={{ width: "80%", flexDirection: "column" }}>
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                        <TextField value={searchVal} onChange={e => setSearchVal(e.target.value)} id="outlined-basic" label="Artist" variant="outlined" />
                    </form>
                </div>
                <div style={{ width: "20%", flexDirection: "column" }}>
                    <Button onClick={() => handleClick()} disabled={!searchData.ready} variant="contained" color="primary" className={classes.button}> Buscar </Button>
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", margin: '50px', flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {!searchData.ready && (
                        <label> Loading... </label>
                    )}
                    {searchData.ready && searchData.results.reduce((accumulator, artist, index) => {

                        const el = (
                            <div style={{ flexGrow: "1", padding: '20px 0px 20px 0px', width: '250px', margin: '0px 20px' }}>
                                <Artist artistName={artist['artist_name']} numListens={artist['play_total']} showButton={true} />
                            </div>
                        );
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
                    {searchData.ready && placeholders.length < 4 && placeholders.map(() => (
                        <div style={{ flexGrow: "1", padding: '20px 0px 20px 0px', width: '250px', margin: '0px 20px' }}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}