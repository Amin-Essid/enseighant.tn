import React, {useContext} from 'react';
import {FilesContext} from '../Context';
import FinalFileBox from './FinalFileBox';
import {withConsumer} from '../Context';



function FinalFilesContainer({sbj, fl}) {

    const context = useContext(FilesContext);
    const {getFiles, url} = context;

    let URL = `/${sbj}/${fl}`;
    let files;

    URL ? (files = getFiles(url)) : (files = getFiles(url));

        
        return (
            <>
                <div className="body-box">
                    <div className="items-box">
                    {files.map((file,index) => {
                            return <FinalFileBox key={index} file={file.name} />
                    })}
                        
                    </div>
                </div>
            </>
            )
}

export default withConsumer(FinalFilesContainer)