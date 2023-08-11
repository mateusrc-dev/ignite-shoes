import OneSignal from "react-native-onesignal";

export function tagUserInfoCreate() {
    OneSignal.sendTags({
        'user_name': 'Mateus',
        'user_email': 'mateus_raimundo@email.com'
    })
}