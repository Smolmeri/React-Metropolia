import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import {Form, Button, Text, Content} from 'native-base';
import FormTextInput from '../components/FormTextInput';
import PropTypes from 'prop-types';
import useUploadForm from '../hooks/UploadHooks';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const Upload = (props) => {
    const [file, setFile] = useState(null);
    const {
        inputs,
        handleTitleChange,
        handleDescriptionChange,
        handleUpload,
    } = useUploadForm();

    const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need cameral roll permissions to make this work!');
            }
        }
    };

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            setFile(result);
        }
    };

    useEffect(() => {
        getPermissionAsync();
    }, []);

    return (
        <Content>
            {file &&
                <Image source={{ uri: file.uri }} style={{ width: 200, height: 200 }} />
            }

            <Form>
                <FormTextInput
                    value={inputs.title}
                    placeholder='title'
                    onChangeText={handleTitleChange}
                />

                <FormTextInput
                    value={inputs.description}
                    placeholder='description'
                    onChangeText={handleDescriptionChange}
                />

                <Button block
                    onPress={pickImage}
                >
                    <Text>Choose File</Text>
                </Button>

                <Button block
                    onPress={() => {
                        handleUpload(file);
                    }}
                >
                    <Text>Upload File</Text>
                </Button>

                <Button block>
                    <Text>Reset</Text>
                </Button>
            </Form>
        </Content>
    )
};

Upload.propTypes = {
    navigation: PropTypes.object,
};

export default Upload;