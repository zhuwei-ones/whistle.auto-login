import * as Cookie from "cookie";

const AuthKey = {
  UserId: "OauthUserID",
  Token: "OauthAccessToken",
  Expires: "OauthExpires",
};

const LongDateTime = new Date("3000-12-31").getTime() / 1000;

export default (server: Whistle.PluginServer) => {
  server.on("request", (req, res) => {
    const cookies = req.headers.cookie;

    const cookiesObj = Cookie.parse(cookies || "");

    const userId = cookiesObj[AuthKey.UserId];

    let rule = ``;

    if (userId) {
      const authCookie = {
        [AuthKey.UserId]: userId,
        [AuthKey.Token]: `dev.myones.net${userId}${LongDateTime}`,
        [AuthKey.Expires]: LongDateTime,
      };

      const apiRules = `
            \`\`\`authCookie.json
           ${JSON.stringify(authCookie)}
            \`\`\`
            
            * reqCookies://{authCookie.json} resCookies://{authCookie.json} 
            
        `;

      rule = apiRules;
    }

    res.end(rule);
  });
};
