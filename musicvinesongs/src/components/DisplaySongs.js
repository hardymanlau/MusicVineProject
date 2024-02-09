import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./DisplaySongs.css"
import Header from "./Header";
import { Button } from "bootstrap";
import FavouriteButton from "./FavouritesButton";

// import results from './tracks.json'



const DisplaySongs = () => {

    const [songs, setSongs] = useState([])

    useEffect(() => {

        axios.get('tracks.json')
            .then(response => {

            setSongs(response.data.songs);
        });


        // let url = "tracks.json";
        // ax.get(url)
        //   .then((response) => {
        //     this.songs.results = response.data.results;
        //     console.log(response.data.content);
        //   })


        // fetch('data/tracks.json')
        // .then(r => r.json())
        // .then(songs => setSongs(songs))
    

    }, []);

    // const songs = results.map((results) =>{

    return (
        <div>
            <Header text="Music Vine"/>
            <h1 className="title">List of Tracks</h1>
            <br />
            <Row xs={1} md={2} className="g-4">
                {songs &&
                songs.map((song, id) => (
                    <Col key={id}>
                        <Card key={id}>
                            <Card.Body>
                                <Card.Title>{song.name}</Card.Title>
                                <Card.Text>{song.artist}</Card.Text>
                                <FavouriteButton />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );

}

export default DisplaySongs;