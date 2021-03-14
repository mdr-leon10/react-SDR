import Paper from '@material-ui/core/Paper';
import Song from './SongBox.js'
import Artist from './ArtistBox.js'
import NavBar from './NavBar.js'


export default function Recommendation(props) {
    const { artistsArray} = props;
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
            <NavBar labels ={['Home','Lo que he escuchado']} showSearchButton={true}/>
            
            <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: "space-evenly", alignItems: "start", flexDirection: "column", margin: '100px' }}>
                <label style={{ fontSize: '40px' }}>Basado en lo que has escuchado, te recomendamos: </label>
                
                {artists.map((artist, index) => {
                    return (
                        <div style={{ paddingTop: '75px' }}>
                            <Paper elevation={5} square>
                                <div style={{ justifyContent: "space-evenly", display: "flex", alignItems: "center", padding: '20px 0px 80px 0px' }}>
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