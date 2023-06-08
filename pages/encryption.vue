<script setup lang="ts">
const messageAes = ref("");
const hashResult = ref("");
const handleHMAC = async () => {
  const { data } = await useFetch("/api/encryption/hash", {
    method: "post",
    body: messageAes.value,
  });

  if (data.value) {
    hashResult.value = data.value;
  }
};

const plainText = "testing string for encryption";
const encryptResult = ref("");
const decryptResult = ref("");

const handleEncrypt = async () => {
  const { data } = await useFetch("/api/encryption/encrypt", {
    method: "post",
    body: plainText,
  });
  if (data.value) {
    encryptResult.value = data.value;
    decryptResult.value = "";
  }
}

const handleDecrypt = async () => {
  if (encryptResult.value) {
    const { data } = await useFetch("/api/encryption/decrypt", {
      method: "post",
      body: encryptResult.value,
    });
    if (data.value) {
      decryptResult.value = data.value;
    }
  } else {
    alert("Nothing to decrypt");
  }
}

const publicKey = ref("");
const privateKey = ref("");
const encryptResultRSA = ref("");
const decryptResultRSA = ref("");
const message = ref('')

const handleGenerateRSA = async () => {
  const { data } = await useFetch("/api/encryption/generateRSA");
  if (data.value) {
    publicKey.value = data.value.publicKey;
    privateKey.value = data.value.privateKey;
  }
};
const handleEncryptRSA = async () => {
  const { data } = await useFetch("/api/encryption/encryptRSA", {
    method: "post",
    body: {
      message: message.value,
      secretKey: publicKey.value,
    },
  });
  if (data.value) {
    encryptResultRSA.value = data.value;
  }
};
const handleDecryptRSA = async () => {
  const { data } = await useFetch("/api/encryption/decryptRSA", {
    method: "post",
    body: {
      message: encryptResultRSA.value,
      secretKey: privateKey.value,
    },
  });
  if (data.value) {
    decryptResultRSA.value = data.value;
  }
};
</script>

<template>
  <div class="flex justify-center p-10">
    <div>
      <div class="border border-gray-400 p-4 rounded-xl">
        <div>
          <span>Source : </span>
          <a-input placeholder="Message.." v-model="messageAes" />
        </div>
        <div>
          <span>Result : </span>
          <span>{{ hashResult }}</span>
        </div>
        <a-button class="flex mx-auto mt-2 btn-indigo" :disabled="messageAes === ''" @click="handleHMAC">Hash</a-button>
      </div>
      <div class="border border-gray-400 p-4 rounded-xl mt-5">
        <div>
          <span>Plain Text : </span>
          <span>{{ plainText }}</span>
        </div>
        <div>
          <span>Encrypt Result : </span>
          <span>{{ encryptResult }}</span>
        </div>
        <div>
          <span>Decrypt Result : </span>
          <span>{{ decryptResult }}</span>
        </div>
        <div class="flex justify-center mt-2 gap-2">
          <a-button class="btn-indigo" @click="handleEncrypt" :disabled="hashResult === ''">Encrypt</a-button>
          <a-button class="btn-default" @click="handleDecrypt">Decrypt</a-button>
        </div>
      </div>
      
      <div class="border border-gray-400 p-4 rounded-xl mt-5">
        <strong class="text-2xl">RSA Encryption</strong>
        <div>
          <span>publicKey : </span>
          <span>{{ publicKey }}</span>
        </div>
        <div>
          <span>privateKey : </span>
          <span>{{ privateKey }}</span>
        </div>
        <div class="break-words max-w-screen-md">
          <span>Encrypt Result RSA :</span>
          <div>{{ encryptResultRSA }}</div>
        </div>
        <div>
          <span>Decrypt Result RSA :</span>
          <div>{{ decryptResultRSA }}</div>
        </div>
        <div class="flex justify-center mt-2">
          <a-button class="btn-indigo" @click="handleGenerateRSA">Generate RSA Key</a-button>
        </div>
        <div class="flex justify-center mt-2 gap-2">
          <a-input placeholder="Message.." v-model="message" autofocus />
          <a-button class="btn-indigo" :disabled="(publicKey === '' && privateKey === '') || message === ''" @click="handleEncryptRSA">Encrypt RSA</a-button>
          <a-button class="btn-default" @click="handleDecryptRSA">Decrypt RSA</a-button>
        </div>
      </div>
    </div>
  </div>
</template>