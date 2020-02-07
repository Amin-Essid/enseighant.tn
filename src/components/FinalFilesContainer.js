import React, {useContext} from 'react';
import {FilesContext} from '../Context';
import FinalFileBox from './FinalFileBox';
import {withConsumer} from '../Context';



function FinalFilesContainer({sbj, fl}) {

    const context = useContext(FilesContext);
    const {getFiles, url} = context;

    let URL = `/${sbj}/${fl}`;
    let files;
    console.log(url);

    function isItUrl (Url){
        let count = 0;
        for (let i = 0; i < Url.length; i++){

            if (Url[i]==="/") {count = count+ 1}
    }
    return count > 1 
    }

    let IsItUrl = isItUrl(url);

    console.log(IsItUrl)



    IsItUrl ? (files = getFiles(url)) : (files = getFiles(URL));
    let Files = files.map( (file, index) => {
        return <FinalFileBox key={index} file={file.name} />
    }) 
        
        return (
            <>
                <div className="body-box">
                    <div className="items-box">
                    {Files}
                    </div>
                </div>
            </>
            )
}

export default withConsumer(FinalFilesContainer)