<?php

namespace App;

use App\Orderstatus;
use App\PushToken;
use Carbon\Carbon;
use Ixudra\Curl\Facades\Curl;

class PushNotify
{
    /**
     * @param $orderstatus_id
     * @param $user_id
     */
    public function sendPushNotification($orderstatus_id, $user_id)
    {
        $secretKey = 'key=' . config('settings.firebaseSecret');

        $token = PushToken::where('user_id', $user_id)->first();

        if ($token) {
            if ($orderstatus_id == '2') {
                $msgTitle = config('settings.runningOrderPreparingTitle');
                $msgMessage = config('settings.runningOrderPreparingSub');
                $click_action = config('settings.storeUrl') . '/running-order/';
            }
            if ($orderstatus_id == '3') {
                $msgTitle = config('settings.runningOrderDeliveryAssignedTitle');
                $msgMessage = config('settings.runningOrderDeliveryAssignedSub');
                $click_action = config('settings.storeUrl') . '/running-order/';
            }
            if ($orderstatus_id == '4') {
                $msgTitle = config('settings.runningOrderOnwayTitle');
                $msgMessage = config('settings.runningOrderOnwaySub');
                $click_action = config('settings.storeUrl') . '/running-order/';
            }
            if ($orderstatus_id == '5') {
                $msgTitle = config('settings.runningOrderDelivered');
                $msgMessage = config('settings.runningOrderDeliveredSub');
                $click_action = config('settings.storeUrl') . '/my-orders/';
            }
            if ($orderstatus_id == '6') {
                $msgTitle = config('settings.runningOrderCanceledTitle');
                $msgMessage = config('settings.runningOrderCanceledSub');
                $click_action = config('settings.storeUrl') . '/my-orders/';
            }
            if ($orderstatus_id == '7') {
                $msgTitle = config('settings.runningOrderReadyForPickup');
                $msgMessage = config('settings.runningOrderReadyForPickupSub');
                $click_action = config('settings.storeUrl') . '/my-orders/';
            }
            if ($orderstatus_id == 'TO_RESTAURANT') {
                $msgTitle = config('settings.restaurantNewOrderNotificationMsg');
                $msgMessage = config('settings.restaurantNewOrderNotificationMsgSub');
                $click_action = config('settings.storeUrl') . '/public/restaurant-owner/dashboard';
            }
            if ($orderstatus_id == 'TO_DELIVERY') {
                $msgTitle = config('settings.deliveryGuyNewOrderNotificationMsg');
                $msgMessage = config('settings.deliveryGuyNewOrderNotificationMsgSub');
                $click_action = config('settings.storeUrl') . '/delivery/';
            }
            $msg = array(
                'title' => $msgTitle,
                'message' => $msgMessage,
                'badge' => '/assets/img/favicons/favicon-96x96.png',
                'icon' => '/assets/img/favicons/favicon-512x512.png',
                'timestamp' => Carbon::now()->timestamp,
                'click_action' => $click_action,
            );
            $fullData = array(
                'to' => $token->token,
                'data' => $msg,
            );

            $response = Curl::to('https://fcm.googleapis.com/fcm/send')
                ->withHeader('Content-Type: application/json')
                ->withHeader("Authorization: $secretKey")
                ->withData(json_encode($fullData))
                ->post();
        }
    }
}
