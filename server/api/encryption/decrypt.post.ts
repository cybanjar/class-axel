import CryptoJS from "crypto-js";

export default defineEventHandler(async (event) => {
  const secretKey = "rahasia";
  const body = await readBody(event);

  const bytes = CryptoJS.AES.decrypt(body, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
})