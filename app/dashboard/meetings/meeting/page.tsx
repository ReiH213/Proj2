"use client"
import * as React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';


export default function App() {
    const {roomID} = useParams()
    let myMeeting = async (element:any) => {
        const generatedRoomID = uuidv4();
        const appID = 522538495;
        const serverSecret = "62691771bb1e4e4c10bca03bf1be20ac";
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