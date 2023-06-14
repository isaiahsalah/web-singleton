import { useEffect } from "react";
import { ChatButtonData } from "../../utils/Config";
import MyScrollReveal from "../myScrollReveal/MyScrollReveal";
import { ChatComponentBox } from "./ChatComponentStyle";
import { 
  RiWhatsappFill, 
} from "react-icons/ri"
import { DelayAnimationIntro } from "../../utils/Animations";

 
const ChatComponent = () => {
  useEffect(() => {
    MyScrollReveal.reveal("#chat-container", { origin: 'bottom', ...DelayAnimationIntro(0) });

    MyScrollReveal.reveal("#logo-container", { origin: 'top', ...DelayAnimationIntro(0) });
    MyScrollReveal.reveal(".nav-menu", { origin: 'top', ...DelayAnimationIntro(250) });
    MyScrollReveal.reveal(".nav-button-cotizar", { origin: 'top', ...DelayAnimationIntro(500) });
    MyScrollReveal.reveal(".hamburger", { origin: 'top', ...DelayAnimationIntro(250) });

  }, [])
  const chatClick = () => {
    const nuevaVentana = window.open(ChatButtonData.url, '_blank');
    if(nuevaVentana)nuevaVentana.focus();
}
  return (
    <ChatComponentBox>
      <div id="chat-container">
        <div className="chat">
          <button onClick={chatClick} className="chat-button"  >
            <div className="h6"><RiWhatsappFill className="chat-icon"/></div>

            <p className="chat-text">{ChatButtonData.title}</p>
          </button>
        </div>
      </div>
    </ChatComponentBox>
  );
};

export default ChatComponent;
