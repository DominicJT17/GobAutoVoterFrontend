import React, { useState } from 'react';
import sendVotes from '../brokers/sendVotes';
//The form attached to each song which indicates the vote

/*
interface postVotesRequest {
    songId: string;
    trackVote: boolean;
    musicVote: boolean;
    lyricsVote: boolean;
    vocalsVote: boolean;
    voter: string;
    comment?: string;
}
*/
function VotingBlock(props) {
    const [active, setActive] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        setActive(true);
        const formData = new FormData(e.target);
        console.log(formData.entries())

        //Create a vote object
        const vote = {
            songId: 't1_' + props.id,
            voter: props.username,
            trackVote: formData.get('trackVote') ? 'true' : 'false',
            musicVote: formData.get('musicVote') ? 'true' : 'false',
            lyricsVote: formData.get('lyricsVote') ? 'true' : 'false',
            vocalsVote: formData.get('vocalsVote') ? 'true' : 'false',
            comment: formData.get('comments')
        };
        sendVotes(vote);
    }


    return (
        <div>
            <form onSubmit={handleSubmit} active={active}>

                <label>
                    Track Vote: <input type="checkbox" name="trackVote" defaultChecked={false}/>
                </label>
                <br/>
                <label>
                    Music Vote: <input type="checkbox" name="musicVote" defaultChecked={false}/>
                </label>
                <br/>
                <label>
                    Lyrics Vote: <input type="checkbox" name="lyricsVote" defaultChecked={false}/>
                </label>
                <br/>
                <label>
                    Vocals Vote: <input type="checkbox" name="vocalsVote" defaultChecked={false}/>
                </label>
                <br/>
                <label>
                    Comments: <input name="comments" />
                </label>
                <br/>
                <button type="submit form" disabled={active}>Submit vote </button>
                </form>
        </div>
    )
}


export default VotingBlock;