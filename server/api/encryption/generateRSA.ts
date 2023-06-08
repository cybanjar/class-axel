import crypto from "node:crypto";

export default defineEventHandler(() => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
      // cipher: "aes-256-cbc",
      // passphrase: "rahasia",
    },
  });
  // console.log(publicKey, privateKey);

  // console.log(
  //   crypto.KeyObject.from(publicKey),
  //   crypto.KeyObject.from(privateKey)
  // );

  return {
    publicKey,
    privateKey,
  };
});