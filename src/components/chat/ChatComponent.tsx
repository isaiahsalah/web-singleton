import React from "react";
import { ChatComponentBox } from "./ChatComponentStyle";
import { 
  RiCodepenFill, 
  RiFacebookBoxFill, 
  RiGithubFill, 
  RiInstagramFill, 
  RiLinkedinFill, 
  RiTwitterFill, 
  RiWhatsappFill, 
  RiYoutubeFill
} from "react-icons/ri"

interface Props {
  SocialMedia: any[];
}

const ChatComponent = (props: Props) => {
  return (
    <ChatComponentBox>
      <div id="chat-container">
        <div className="chat">
          <button className="chat-button"  >
            <h6><RiWhatsappFill className="chat-icon"/></h6>

            <p>Hablá con nosotros</p>
          </button>
        </div>
      </div>
    </ChatComponentBox>
  );
};

export default ChatComponent;
