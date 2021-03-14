import React from 'react';
import Artist from './ArtistBox.js';
import NavBar from './NavBar.js';



export default function ListenedList(props) {
    const { artistName } = props;
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
            <NavBar labels={['Home', 'Lo que he escuchado']} showBshowSearchButtonutton3={true}/>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", margin: '100px', flexWrap: "wrap" }}>
                <label style={{ fontSize: '40px', padding: '20px 0px 80px 0px' }}> Tu historial de artistas escuchados</label>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    {artists.reduce((accumulator, artist, index) => {

                        const el = (<div style={{flexGrow: "1", padding: '20px 0px 40px 0px', width: '200px', margin: '0px 80px'}}> <Artist artistName={artist.artist} numListens={artist.worldListens} listensTitle={'Number of listens:'} showButton={false} /> </div>);
                        const el2 = (<div style={{ flexBasis: "100%", height: "100px"}}> </div>)

                        if ( (index+1) % 4 === 0) {
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
    );
}