let chatClient;

function startChat() {
    if (!chatClient) {
        chatClient =
        new CozeWebSDK.WebChatClient({
            /**
            * Agent configuration information.
            * @param config.bot_iad - Agent ID.
            */
            config: {
              bot_id: '7491579825615355912',
            },
            componentProps: {
              title: 'Germany Application',
            },
            /**
            * The auth property is used to configure the authentication method.
            * @param type - Authentication method, default type is 'unauth', which means no authentication is required; it is recommended to set it to 'token', which means authentication is done through PAT (Personal Access Token) or OAuth.
            * @param token - When the type is set to 'token', you need to configure the PAT (Personal Access Token) or OAuth access key.
            * @param onRefreshToken - When the access key expires, a new key can be set as needed.
            */
           
            /**
            * The userInfo parameter is used to set the display of agent user information in the chat box.
            * @param userInfo.id - ID of the agent user.
            * @param userInfo.url - URL address of the user's avatar.
            * @param userInfo.nickname - Nickname of the agent user.
            */
            userInfo: { 
              id: 'user', 
              url: 'https://cdn-icons-png.flaticon.com/512/7891/7891470.png', 
              nickname: 'Người dùng', 
            }, 
            ui: { 
              base: { 
                icon: 'https://lf16-alice-tos-sign.oceanapi-i18n.com/obj/ocean-cloud-tos-sg/FileBizType.BIZ_BOT_ICON/7438441760610010113_1744275667612345913.jpeg?lk3s=68e6b6b5&x-expires=1744279267&x-signature=wVa5cwZkWc%2FlbaE%2BLxf%2F0JtnLM8%3D', 
                lang: 'vi',
              },
              chatBot: {
                title: 'Germany Application',
                uploadable: false,
              }, 
              asstBtn: { 
                isNeed: true, 
              }, 
              footer: {
                  isShow: false,
              }
          },
          });
    }
}

// Khởi động chat bot ngay khi trang được tải
window.onload = startChat; 

