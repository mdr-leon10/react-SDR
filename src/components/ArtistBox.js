import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export default function ArtistBox (props) {
    const { artistName, numListens, showButton, listensTitle} = props;    
    return (
        <div>
            <Paper elevation={4} square>
                <div>
                    <img src={process.env.PUBLIC_URL + '/micro.jpg'} width="100%" alt='Artist'/>
                </div>
                <div>
                    <div style={{justifyContent: "left", display: "flex", alignItems: "left", alignContent: "space-between", padding: '20px 0px 20px 0px'}}>
                        <label style={{ width: "100%", fontSize: '25px' }}>Artist: </label>
                        <label style={{ width: "100%", fontSize: '25px' }}>{artistName ? artistName : 'Imagine Dragons'}</label>
                    </div>
                    <div style={{justifyContent: "center", display: "flex", alignItems: "center", padding: '20px 0px 20px 0px'}}>
                        <label style={{ width: "100%", fontSize: '25px' }}> {listensTitle? listensTitle: 'World listens:'} </label>
                        <label style={{ width: "100%", fontSize: '25px' }}>{numListens ? numListens : '1000'}</label>
                    </div>
                    <div style={{ justifyContent: "center", display: "flex", alignItems: "center", padding: '10px 0px 10px 0px', width: "100%" }}>
                    {showButton && (
                            <IconButton color="primary" aria-label="ThumbUpIcon">
                                <ThumbUpIcon />
                            </IconButton>)}
                    </div>
                </div>

            </Paper>
        </div>
    );
}