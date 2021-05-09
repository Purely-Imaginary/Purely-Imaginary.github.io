import React from 'react';
import MenuLink from './menuLink';
import MenuLogo from './menuLogo';
import { BackendURL } from '../../constants';
import { HashRouter as Router } from "react-router-dom";
import Dropzone from 'react-dropzone'
import upload from '../../assets/img/upload.png';
import axios from 'axios';
import loader from '../../assets/img/littleLoader.gif';
import { useHistory } from 'react-router-dom';

let fileTransferActive = false;

const fileDrop = async (file: any) => {
    file = file[0];
    fileTransferActive = true;
    if (-1 === file.name.indexOf('.hbr2')){
        return
    }

    let formData = new FormData();
    formData.append("file", file);

    axios.post(BackendURL + "/raw/match", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
        fileTransferActive = false;
        window.location.href = "/#/showMatch/" + response.data;
    });

}
export const Menu: React.FC = () => {
    return (
        <Router>
            <div className="menu">
                <Dropzone onDrop={files => fileDrop(files)}>
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div className="upload" {...getRootProps()}>
                                <input {...getInputProps()} />
                                {!fileTransferActive && <img src={upload} />}
                                {fileTransferActive && <img src={loader} />}
                            </div>
                        </section>
                    )}
                </Dropzone>
                <MenuLogo url="logo512blue.png" name="mainLogo" />
                <MenuLink text="Last matches" url="/#/matches" icon="🕑" />
                <MenuLink text="Players table" url="/#/players" icon="⚔" />
                <MenuLink text="Charts" url="/#/charts" icon="📊" />
                <MenuLink text="Future features" url="/#/future" icon="💡" />
                <div className="backendURL"><span>{BackendURL}/p?u=</span></div>
            </div>
        </Router>
    )
}

export default Menu;
