import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Artist from './ArtistBox.js';
import NavBar from './NavBar.js';



export default function ListenedList(props) {
    const { userName, logout = () => { } } = props;
    const [historyData, setHistory] = useState({artists: []});

    useEffect(() => {
        axios.get(`http://172.24.100.74:8000/api/history/${userName}/`)
        .then(res => {
              setHistory({
                  artists: res.data['history']
              });
        })
        .catch(err => console.log(err));
    }, [])

    const itemWidth = '250px';
    const itemsPerRow = 5;
    const placeholders = new Array(itemsPerRow - (historyData.artists.length%itemsPerRow)).fill(0);
    return (
        <div>
            <NavBar
                labels={['Home', 'Lo que he escuchado']}
                showSearchButton={true}
                buttonRedirections={['/home', '/history']}
                showLogoutButton={true}
                logoutCallback={logout}
            />
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", margin: '50px', flexWrap: "wrap" }}>
                <label style={{ fontSize: '3em', padding: '20px 0px 20px 0px' }}> Los artistas que has escuchado </label>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {historyData.artists.reduce((accumulator, artist, index) => {

                        const el = (<div style={{ flexGrow: "1", padding: '20px 0px 20px 0px', maxWidth: itemWidth, margin: '0px 20px' }}>
                            <ArtistWrapper aid={artist['artist_id']} plays={artist['play_count']} />
                        </div>);
                        const el2 = (<div style={{ flexBasis: "100%", height: "40px" }}> </div>);

                        if ((index + 1) % itemsPerRow === 0) {
                            accumulator.push(el, el2);
                        } else {
                            accumulator.push(el);
                        }
                        return accumulator
                    }, []
                    )}
                    {placeholders.length < itemsPerRow && placeholders.map(() => (
                        <div style={{ flexGrow: "1", padding: '20px 0px 20px 0px', width: itemWidth, margin: '0px 20px' }}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ArtistWrapper(props) {
    const { aid, plays } = props;
    const [ artistName, setName ] = useState('Loading...');

    useEffect(() => {
        axios.get(`http://172.24.100.74:8000/api/artist/${aid}/`)
        .then(res => {
            setName(res.data['artist_name']);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <Artist artistName={artistName} numListens={plays} listensTitle={'You have listened:'} showButton={false} />
    );
};
