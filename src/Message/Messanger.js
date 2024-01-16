
import "./Messanger.css";
import Conversation from "./components/Conversation/Conversations.js";
import Message from "./components/Message/Message.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Messanger() {
    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                  <input type="text" placeholder="&#128269; Search for tenants" className="chatMenuInput" />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message />
                        <Message own={true} />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message own={true} />
                        <Message own={true} />
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className="chatMssgInput" placeholder="write here.."></textarea>
                        {/* Replace the text "Send" with the send icon */}
                        <button className="sendButton">
                             <FontAwesomeIcon icon={faPaperPlane}  />
                        </button>
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="onlineWrapper">onlineChat</div>
            </div>
        </div>
    );
}
