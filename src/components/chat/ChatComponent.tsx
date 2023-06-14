import { ChatButtonData } from "../../utils/Config";
import { ChatComponentBox } from "./ChatComponentStyle";
import { 
  RiWhatsappFill, 
} from "react-icons/ri"

 
const ChatComponent = () => {
  const chatClick = () => {
    const nuevaVentana = window.open(ChatButtonData.url, '_blank');
    if(nuevaVentana)nuevaVentana.focus();
}
  return (
    <ChatComponentBox>
      <div id="chat-container">
        <div className="chat">
          <button onClick={chatClick} className="chat-button"  >
            <h6><RiWhatsappFill className="chat-icon"/></h6>

            <p className="chat-text">{ChatButtonData.title}</p>
          </button>
        </div>
      </div>
    </ChatComponentBox>
  );
};

export default ChatComponent;
