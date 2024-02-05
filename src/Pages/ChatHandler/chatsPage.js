import { PrettyChatWindow } from "react-chat-engine-pretty";
import { useLocation } from "react-router-dom";

const ChatsPage = (props) => {
  const location = useLocation();
  console.log(location.state);
  console.log(process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID);
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId="cc848e5b-aaed-4884-bd18-1b15fe32ae8b"
        username={location.state.username} // adam
        secret={location.state.secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
