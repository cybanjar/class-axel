import crypto from "node:crypto";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { message, secretKey } = body;

  const decryptedData = crypto.privateDecrypt(
    {
      key: Buffer.from(secretKey),
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    Buffer.from(message, "base64")
  );

  return decryptedData.toString();
});