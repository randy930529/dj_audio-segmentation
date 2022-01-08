import React from "react";
import AudioUploadPage from "../components/AudioUploadPage";
import AudioCard from "./AudioCard";

class LandigPage extends React.Component{

    render() {
        return (
            <div className="content p-3">
                <AudioUploadPage />
                <AudioCard />
            </div>
        ) 
    }
   
}

export default LandigPage;