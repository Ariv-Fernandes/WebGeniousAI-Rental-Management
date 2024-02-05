

import AuthPage from "./Chatlogin.js";
import ChatsPage from "./chatsPage";
import Signup from "../Signup.js";
import { useAuthContext } from "../../hooks/useAuthContext.js";

function Chatmiddleware({chatUser, setchatUser}) {
 

  if (!chatUser) {
    // 
    return <AuthPage  chatUser={chatUser} setchatUser={setchatUser} onAuth={(chatUser)=>{setchatUser(chatUser)} } />;

  } else {
    return <ChatsPage user={chatUser} />;
  }
}

export default Chatmiddleware;
