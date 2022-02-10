import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from './App.module.css';
import 'bulma';
import AudioCardPage from './pages/AudioCardPage';
import AudioUploadPage from './pages/AudioUploadPage';
import { getContext } from "./utils/getUtilsAudioClip";


function App() {
  const context = getContext();
  const [audioClip, setAudioClip] = useState();
  const [file, setFile] = useState();
  const [audioBuffer, setAudioBuffer] = useState();
  const [position, setPosition] = useState(0);
  const [showMarker, setShowMarker] = useState(false);

  return (
    <Router>
      <header>
        <Link to="/"><h1 className={styles.AppLink}>Audio Segmentation Tool</h1></Link>
      </header>
      <main>
        <Routes>
          <Route exact path="/audio/:audioClip" element={
            <AudioCardPage
              context={context}
              file={file}
              audioClip={audioClip}
              buffer={audioBuffer}
              setAudioBuffer={setAudioBuffer}
              position={position}
              setPosition={setPosition}
              showMarker={showMarker}
              setShowMarker={setShowMarker}
            />
          }
          />

          <Route path="/" element={
            <AudioUploadPage
              context={context}
              setFile={setFile}
              setAudioClip={setAudioClip}
            />
          }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
