import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import VotingBlock from './votingBlock';
//The card which contains the song object

class SongCard extends Component {
    render() {
        return (
        <div className="card" key={this.props.id}>
            <div className="card-header">
                {this.props.name} 
            </div>
            <div className="card-body">
                {this.props?.music}: Music, {this.props.lyrics}: Lyrics, {this.props.vocals}: Vocals
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Vote for this song</Accordion.Header>
                        <Accordion.Body>
                            <VotingBlock id={this.props.id} username={this.props.username}/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>)
    }
}

export default SongCard