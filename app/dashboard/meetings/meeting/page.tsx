"use client"
import * as React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';


export default function App() {
    const {roomID} = useParams()
    let myMeeting = async (element:any) => {
        const generatedRoomID = uuidv4();
        const appID = 1089232711;
        const serverSecret = "1c191b34b22b1ecd063800767c8b8aa0";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, "123465", generatedRoomID,generatedRoomID);


        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Meeting link',
                    url: window.location.origin + window.location.pathname + '?roomID=' + generatedRoomID
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall, 
            },
        });


    };

    return (
        <div
            className=" ml-10 mt-10 max-w-fit max-h-[75vh] justify-center items-center"
            ref={myMeeting}
        ></div>
    );
}