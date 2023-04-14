import React from 'react'
import styled from 'styled-components'

export default function Login() {
    const HandleClick = async () => {
        const client_id = "7af1ee6808ac43c98661e3a716dca85d";
        const redirect_uri = "http://localhost:3000/";
        const api_uri = "http://accounts.spotify.com/authorize/";
        const scope = [
            "user-read-email",
            "user-read-private",
            "user-read-playback-state",
            "user-modify-playback-state",
            "user-read-currently-playing",
            "user-read-playback-position",
            "user-top-read",
            "user-read-recently-played",
        ];
        window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`;
    };
    return (
        <Container>
            <img src={require('./nigger.png')} alt="suckmycotify"/>
            <button onClick={HandleClick}>Connect Suckmycotify</button>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #1db954;
    gap: 5rem;
    img {
        height:20vh;
    }
    button {
        padding: 1rem 5rem;
        border-radius: 5rem;
        border: none;
        background-color: black;
        color: #49f585;
        font-size: 1.4rem;
        cursor: pointer;
    }
`;