let instance;

function WebSocketSingleton(url) {
  function createInstance() {
    const ws = new WebSocket(url, localStorage.getItem("userId"));
    ws.onopen = () => {
      console.log("WebSocket connection established.");
    };
    ws.onclose = () => {
      console.log("WebSocket connection closed.");
    };
    return ws;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
    closeInstance: function () {
      if (instance) {
        instance.close();
        instance = null;
      }
    },
  };
}

export default WebSocketSingleton;
