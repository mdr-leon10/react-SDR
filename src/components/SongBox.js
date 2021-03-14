import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Paper from '@material-ui/core/Paper';


export default function SongBox(props) {
    const { songName} = props; 

    return (
        <div>
            <Paper elevation={3} square>
                <div style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                    <label style={{ width: "100%", height: "100", fontSize: '30px'}}>{songName ? songName : 'Bad liar'}</label>
                    <IconButton color="primary" aria-label="PlayArrow">
                        <PlayArrow />
                    </IconButton>
                </div>
            </Paper>
        </div>
    );
}