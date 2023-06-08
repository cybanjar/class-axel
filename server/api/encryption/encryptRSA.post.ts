import crypto from "node:crypto";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { message, secretKey } = body;
  // const { message } = body;

  // const secretKey =
  //   "-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEAkg33dhcfafgog/PYX2fIXDuV272+nWZf+73kCt3lyVMfCFm3b4vy CG4YIP0D/bfW2s1qJOfT13+CEHFU3DFvZ+xbun1B0DPDsUTfz8QhVb33Nhbw7XyI /2Tfss/H7/kbWN2yVAeNTfC5Z6GiakLHFCMERbCIU0IHudcVgYGXhpc1pPnmVtpN a433o4beMHoVm+N+4xQSwblOayyxoFGwrqrkiirDk22zmgTlxRmuuyJQlKjX2p0O e9iz2TAQ9TfYiOEJIuZI6ME1KINJNDlCgVtQioV5e+wxp8EAfQRpQDiKfIDjRzGD GL6da9aE4ZI284A3hlOdpmFKY1upWIgOGwIDAQAB\n-----END RSA PUBLIC KEY-----";

  const encryptedData = crypto.publicEncrypt(
    {
      key: Buffer.from(secretKey),
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    Buffer.from(message)
  );

  return encryptedData.toString("base64");
});