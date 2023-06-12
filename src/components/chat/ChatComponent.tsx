import { ChatComponentBox } from "./ChatComponentStyle";
import { 
  RiWhatsappFill, 
} from "react-icons/ri"

 
const ChatComponent = () => {
  return (
    <ChatComponentBox>
      <div id="chat-container">
        <div className="chat">
          <button className="chat-button"  >
            <h6><RiWhatsappFill className="chat-icon"/></h6>

            <p className="chat-text">Hablá con nosotros</p>
          </button>
        </div>
      </div>
    </ChatComponentBox>
  );
};

export default ChatComponent;
