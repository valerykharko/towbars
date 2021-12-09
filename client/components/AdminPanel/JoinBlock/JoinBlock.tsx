import React from "react";
import styles from "components/AdminPanel/Chat/ChatPage.module.scss";
import axios from "axios";
import { notification } from "antd";

const JoinBlock = ({ onLogin }: any) => {
  const [roomId, setRoomId] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const onEnter = async () => {
    if (!roomId || !userName) {
      return openNotification;
    }
    const obj = {
      roomId,
      userName,
    };
    setLoading(true);
    await axios.post(`${process.env.API_URL}` + "/api/sockets/rooms", obj);
    onLogin(obj);
  };

  const openNotification = (message: string, description: string) => {
    notification.open({
      message: message,
      description: description,
      icon: (
        <img
          className={styles.icon}
          src="/static/images/profile/cancel.png"
          alt="cancel-icon"
        />
      ),
    });
  };

  return (
    <div className={styles.enterBlock}>
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ваше имя"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button disabled={isLoading} onClick={onEnter}>
        {isLoading ? "Подключение..." : "Подключиться"}
      </button>
    </div>
  );
};

export default JoinBlock;
