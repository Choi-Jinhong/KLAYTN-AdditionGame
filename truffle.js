// truffle.js config for klaytn.
const PrivateKeyConnector = require("connect-privkey-to-provider");
const NETWORK_KEY = "1001";
const GASLIMIT = "20000000";
const URL = "https://api.baobab.klaytn.net:8651";
const PRIVATE_KEY =
  "0xe0c3a1d0cd21858b90066639b2b5aad8c0043e9a898e22602f7d6353b3c08999";

module.exports = {
  networks: {
    klaytn: {
      provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
      network_id: NETWORK_KEY,
      gas: GASLIMIT,
      gasPrice: null,
    },
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};
