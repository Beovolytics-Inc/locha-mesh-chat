export const chats = [
  {
    idChat: "1",
    senderName: "broadcast",
    lastMessage: "hi, how are you?",
    photo: require("./img/fotoperfil.jpg"),
    date: new Date()
  }
];

export const images = {
  noPhoto: { url: require("./img/fotoperfil.jpg") },
  file: { url: require("./img/archivo.jpg") },
  camera: { url: require("./img/camara.jpg") }
};

export const IntialUser = {
  id: undefined,
  name: undefined,
  image: null,
  contacts: []
};
