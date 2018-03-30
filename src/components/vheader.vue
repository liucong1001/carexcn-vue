<template>
    <div class="page-header-main header">
        <div class="wraptop"></div>
        <header class="mint-header is-fixed topheader">
            <div class="mint-header-button is-left"></div>
            <h1 class="mint-header-title topheader"><br>  {{headermsg}}</h1>
            <div class="mint-header-button is-right" ></div>
        </header>
        <!-- <div style="height: 20px"></div> -->
    </div>
</template>
<style scoped>
.wraptop {
  height: 20px;
  background-color: #26a2ff;
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1;
}
.header {
  margin-bottom: 40px;
}
.topheader {
  padding: 0px;
  margin: 0px;
}
.mint-header.is-fixed {
  top: 20px;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1;
}
</style>
<script>
export default {
  components: {},
  name: "vheader",
  props: {
    headermsg: String //定义传值的类型<br>    }
  },
  data: function() {
    return {};
  },
  methods: {
    set: function() {
      console.log("开始设置");
      this.$router.push({ path: "/person" });
    }
  },

  watch: {}
};
</script>