/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import { Toast } from 'react-native-toast-message/lib/src/Toast';


const showToast = async () => {
    Toast.show({
        type: 'info',
        text1: 'Toast Message',
        text2: 'Sorry! Future Development in progress',
        autoHide: true,
        visibilityTime: 2000,
    });
};

export default showToast;