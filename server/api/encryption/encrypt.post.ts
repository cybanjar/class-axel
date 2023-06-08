import CryptoJS from "crypto-js";

export default defineEventHandler(async (event) => {
  const secretKey = "rahasia";
  const body = await readBody(event);

  return CryptoJS.AES.encrypt(body, secretKey).toString();
});