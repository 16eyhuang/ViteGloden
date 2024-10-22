<template>
  <div class="container">
    <div class="background">
      <img
        src="../../asserts/unicom/background.png"
        alt=""
        style="width: 100%"
      />
    </div>

    <van-button
      color="linear-gradient(to bottom, #ffb929, #fb7421)"
      class="get-button"
      @click="getButtonClick"
    >
      去领取
    </van-button>

    <van-dialog
      v-model:show="showDialog"
      :showConfirmButton="false"
      closeOnClickOverlay
      width="72.4vw"
    >
      <div class="popupContainer">
        <div style="position: absolute">
          <img
            src="../../asserts/unicom/popup-background.png"
            alt=""
            style="width: 100%"
          />
        </div>
        <van-field
          v-model="phone"
          ref="phoneRef"
          placeholder="请输入联通手机号码"
          type="tel"
          style="font-size: 3.5vw"
          autofocus
          class="phone-field"
        />
        <van-button
          color="linear-gradient(to bottom, #ffb929, #fb7421)"
          class="confirm-button"
          @click="getButtonClick"
        >
          确认领取
        </van-button>
      </div>
      <!-- <div>
        <img src="../../asserts/unicom/popup-background.png" alt="" style="width: 100%;">
      </div> -->
    </van-dialog>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";

const showDialog = ref(false); // 是否显示正在领取弹窗
const phone = ref(""); // 手机号
const phoneRef = ref(null); // 手机号输入框ref

function getButtonClick() {
  showDialog.value = true;
  console.log(phoneRef.value);
}
</script>

<style lang="less">
.container {
  width: 100vw;
  position: relative;
  .background {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .get-button {
    position: absolute;
    width: 55.47vw;
    height: 9.6vw;
    left: 22.27vw;
    top: 141.2vw;
    font-size: 6vw;
    font-weight: bolder;
    border-radius: 7vw;
  }
}

.popupContainer {
  width: 72.4vw;
  height: 101.47vw;
  position: relative;
  .phone-field {
    position: absolute;
    width: 48.53vw;
    height: 7.73vw;
    left: 12vw;
    top: 44vw;
    border: 0.2vw solid #666;
    border-radius: 50px;
    input {
      margin-top: -2vw !important;
    }
  }
  .confirm-button {
    position: absolute;
    width: 48.53vw;
    height: 11.33vw;
    left: 12vw;
    top: 56vw;
    font-size: 6vw;
    font-weight: bolder;
    border-radius: 7vw;
  }
}
</style>
