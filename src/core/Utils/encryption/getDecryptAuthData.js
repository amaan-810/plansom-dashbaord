import { decryptData } from "./index.js";

const getDecryptAuthData = () => {
  const encryptedData = sessionStorage.getItem("authData");

  if (encryptedData) {
    try {
      const secretKey = import.meta.env.VITE_ENCRYPT_SECRET_KEY; // Get secret key from .env
      const decryptedData = decryptData(encryptedData, secretKey);
      // console.log("Decrypted Data:", decryptedData);
      return decryptedData;
    } catch (err) {
      console.error("Failed to decrypt data:", err);
      return null;
    }
  }
  return null;
};

export default getDecryptAuthData;