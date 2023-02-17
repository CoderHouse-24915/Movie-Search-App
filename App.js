import React, { useState } from "react";
import "./App.css";

import axios from "axios";

// https://omdbapi.com/?t=${movieInput}&apikey=af8636e
// https://omdbapi.com/?t=terminator&apikey=af8636e

// Components
import Header from "./components/Header/Header";
import CardMovie from "./components/CardMovie/CardMovie";
import Spinner from "./components/Spinner/Spinner";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const movieInput = inputText.toLowerCase().replace(/ /g, "");
    // console.log(movieInput);
    if (movieInput) {
      //  axios(`https://omdbapi.com/?t=${movieInput}&apikey=af8636e`).then((res) =>
      //  console.log(res.data)
      // );
      const getRequest = async () => {
        try {
          const resp = await axios(
            `https://omdbapi.com/?t=${movieInput}&apikey=af8636e`
          );
          // console.log(resp.data);
          setMovieData(resp.data);
        } catch (error) {
          console.log(error);
        }
      };
      getRequest();
    }
    setInputText("");
    setIsLoading(false);
  };

  return (
    <div className="App">
      <Header />

      {isLoading ? <Spinner /> : null}

      <form className="Form" onSubmit={onSubmit}>
        <Box>
          <TextField
            placeholder="Buscar película"
            variant="outlined"
            className="TextField"
            value={inputText}
            onChange={onChange}
          />
          <button className="btn">Buscar</button>
        </Box>
      </form>

      {movieData?.imdbID ? <CardMovie movieData={movieData} /> : null}
    </div>
  );
};

export default App;
