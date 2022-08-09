import React, { useState } from "react"
import Videos from "./videos"
import { signOut } from "firebase/auth"
import { auth } from "../Firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase"
export default function Feed() {

  return (
    <>
      <div className="feed-header">
        <span className="feed-logo">Instagram</span>
        <img src="https://c8.alamy.com/comp/2HYEGN1/zayn-malik-at-the-2018-pre-grammy-gala-and-salute-to-industry-icons-held-at-the-sheraton-new-york-times-square-hotel-on-january-27-2018-2HYEGN1.jpg" alt="" />
        <button onClick={() => { signOut(auth) }}>signout</button>
      </div>
      <div className="upload">
        <button>upload</button>
        <input type="file"
          onChange={(e) => {
            let videoobj = e.target.files[0];
            let { name, type, size } = videoobj;
            type = type.split('/')[0];
            if (type !== "video") {
              alert("please upload a video")
            }
            else {
              // code from firebase
              // dependencies ref, uploadBytesResumable, getDownloadURL from firebase/storage
              const storageRef = ref(storage, name);

              const uploadTask = uploadBytesResumable(storageRef, videoobj);

              // Register three observers:
              // 1. 'state_changed' observer, called any time the state changes
              // 2. Error observer, called on failure
              // 3. Completion observer, called on successful completion
              uploadTask.on('state_changed',
                (snapshot) => {
                  // Observe state change events such as progress, pause, and resume
                  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log('Upload is ' + progress + '% done');
                  switch (snapshot.state) {
                    case 'paused':
                      console.log('Upload is paused');
                      break;
                    case 'running':
                      console.log('Upload is running');
                      break;
                  }
                },
                (error) => {
                  // Handle unsuccessful uploads
                },
                () => {
                  // Handle successful uploads on complete
                  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                  });
                }
              );

            }

          }}
        />
      </div>
      <div className="reels-container">
        <div className="reels-middle-box">
          <Videos />
        </div>

      </div>
    </>
  )
}
