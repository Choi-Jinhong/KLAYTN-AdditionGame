// truffle.js config for klaytn.
const PrivateKeyConnector = require("connect-privkey-to-provider");
const NETWORK_KEY = "1001";
const GASLIMIT = "20000000";
const URL = "https://api.baobab.klaytn.net:8651";
const PRIVATE_KEY =
  "0x43b20d916127b0d225d70b57b2a19b7fd6eff3cbd8a692d4f4261d5f993f3b87";

module.exports = {
  networks: {
    klaytn: {
      provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
      network_id: NETWORK_KEY,
      gas: GASLIMIT,
      gasPrice: null,
    },
  },
};
