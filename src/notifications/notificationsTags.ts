import OneSignal from "react-native-onesignal";

export function tagUserInfoCreate() {
    OneSignal.sendTags({
        'user_name': 'Mateus',
        'user_email': 'mateus_raimundo@email.com'
    })
}

export function tagCartUpdate(itemsCount: string) {
    OneSignal.sendTag('cart_items_count', itemsCount)
}