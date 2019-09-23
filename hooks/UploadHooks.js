import {useState, useContext} from 'react';
import mediaAPI from './ApiHooks';

const {uploadFile} = mediaAPI();

const useUploadForm = () => {
    const [inputs, setInputs] = useState({});
    // upload form from event handlers
    const handleTitleChange = (text) => {
        setInputs((inputs) => ({
            ...inputs,
            title: text,
        }));
    };
    const handleDescriptionChange = (text) => {
        setInputs((inputs) => ({
            ...inputs,
            description: text,
        }));
    };

    const handleUpload = (file) => {
        const fd = new FormData();
        const filename = file.uri.split('/').pop();

        // Infer the type of the image
        const match = /\.(w+)$/.exec(filename);
        let type = '';
        if (file.type === 'image') {
            type = match ? `image/${match[1]}` : `image`;
        } else {
            type = match ? `video/${match[1]}` : `video`;
        }

        // Upload the image useing the fetch and FormData APIs
        // Assume "photo" is the name of the form field the server expects
        fd.append('file', {uri: file.uri, name: filename, type});
        fd.append('title', inputs.title);
        fd.append('description', inputs.description);
        console.log(uploadFile(fd));
    };

    return {
        handleTitleChange,
        handleDescriptionChange,
        handleUpload,
        inputs,
    };
};

export default useUploadForm;