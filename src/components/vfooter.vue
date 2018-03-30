<template>
        <!--固定底部-->
        <div  class="footer">
            <ul class="nav">
                <li>
                    <router-link  :to="{ name: 'year'}" >
                            <div class="footer-icon img_chart"></div>
                            <span>报表查询</span>
                    </router-link>
                </li>
                <li>
                    <router-link  :to="{ name: 'dealer'}" >
                            <div class="footer-icon img_detail"> </div>
                            <span>交易明细</span>
                    </router-link>
                </li>
                 <li>
                    <router-link  :to="{ name: 'exam'}" >
                            <div class="footer-icon img_exam"> </div>
                            <span>领导审批</span>
                    </router-link>
                </li>
                <li>
                    <router-link  :to="{ name: 'person'}" >
                            <div class="footer-icon img_person"> </div>
                            <span> 我</span>       
                    </router-link>
                </li>
            </ul>
        </div>
  </template>
<style >
a {
  color: #000000;
  text-decoration: none;
   /* margin: 0 auto;
   display: inline-block; */
}
.router-link-active {
  color: #26a2ff;
}
.footer{
    border-top:1px solid #c0bfc4; 
    /* padding-top: 8px; */
    display: flex;
    position: absolute;
    z-index: 500;
    bottom: 0;
    width: 100%;
    /* background-color: #1AACAC; */
    color:grey;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin: 5px;
}

li {
  display: inline-block;
  text-align: center;
  width: 22%;
  color: #dddddd;
}
.center{
    text-align: center
}
.footer-icon{
    display: block;
    width: 27px;
    height: 27px;
    background-color: red;
    position: relative;
    left:1.5rem;
    padding: 8px 0px;
}
.tipmsg {
  position: absolute;
  right: 7rem;
  bottom: 30px;
}
.router-link-active .img_chart {
  background: url("./../assets/graph_chart.png") center no-repeat;
  background-size: contain;
}
.img_chart {
  background: url("./../assets/unselected_graph_chart.png") center no-repeat;
  background-size: contain;
}
.img_detail {
  background: url("./../assets/unselected_detail.png") center no-repeat;
  background-size: contain;
}
.router-link-active .img_detail {
  background: url("./../assets/detail.png") center no-repeat;
  background-size: contain;
}
.img_exam {
  background: url("./../assets/unselected_pencil.png") center no-repeat;
  background-size: contain;
}
.router-link-active .img_exam {
  background: url("./../assets/pencil.png") center no-repeat;
  background-size: contain;
}
.img_person {
  background: url("./../assets/person.png") center no-repeat;
  background-size: contain;
}
.router-link-active .img_person {
  background: url("./../assets/person_check.png") center no-repeat;
  background-size: contain;
}
</style>
<script>
export default {
  components: {},
  name: "vfooter",
  data: function() {
    return {
      selected: "",
      noActive: true,
      isActive1: false,
      isActive2: false,
      examNum: 0
    };
  },
  watch: {
    selected: {
      handler: function(newVal) {
        //                     switch (newVal){
        //                         case 'detail':this.img2='././../assets/detail.png';
        //
        //                     }

        if (newVal == "chart") {
          //                        this.noActive=false;
          this.isActive1 = true;
          this.isActive2 = false;
        }

        if (newVal == "detail") {
          //                        this.noActive=false;
          this.isActive1 = false;
          this.isActive2 = true;
        }
      },
      deep: true
    }
  },
  created() {}
};
</script>