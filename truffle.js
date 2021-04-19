// truffle.js config for klaytn.
const PrivateKeyConnector = require("connect-privkey-to-provider");
const NETWORK_KEY = "1001";
const GASLIMIT = "20000000";
const URL = "https://api.baobab.klaytn.net:8651";
const PRIVATE_KEY =
  "0x1992571484fb897b48b3f568c942388b0e78ccc52db528ca4ba377d8feb0449c";

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
