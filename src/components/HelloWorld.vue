<template>
  <div >
    <p>ここに打ったデータ表示</p>
    <input type="text" v-model="inputText">
    <ul>
      <li v-for="(item,index) in textData" v-bind:key="index">
        <button v-on:click="SearchAns(item.name)" >{{ item.name }}</button>
        </li>
        <li >{{ profile.class }}</li>
    </ul><br>

    <button v-on:click="openImg"><svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="width: 256px; height: 256px; opacity: 1;" xml:space="preserve">
<g>
	<path class="st0" d="M256,224.828c-34.344,0-62.156,28.078-62.156,62.719s27.813,62.719,62.156,62.719s62.156-28.078,62.156-62.719
		S290.344,224.828,256,224.828z" style="fill: rgb(75, 75, 75);"></path>
	<path class="st0" d="M478.766,135.75h-58.625c-13.078,0-24.938-7.75-30.297-19.781l-17.547-39.313
		c-5.359-12.016-17.234-19.766-30.313-19.766H170.016c-13.078,0-24.953,7.75-30.328,19.766l-17.531,39.313
		C116.797,128,104.938,135.75,91.859,135.75H33.234C14.875,135.75,0,150.766,0,169.266v252.328c0,18.5,14.875,33.516,33.234,33.516
		h244.25h201.281c18.344,0,33.234-15.016,33.234-33.516V169.266C512,150.766,497.109,135.75,478.766,135.75z M256,403.844
		c-63.688,0-115.297-52.063-115.297-116.297S192.313,171.234,256,171.234s115.297,52.078,115.297,116.313
		S319.688,403.844,256,403.844z" style="fill: rgb(75, 75, 75);"></path>
</g>
</svg></button>

  <ul v-if="Disp">
    <li v-for="(item, index) in WomanDatas" v-bind:key="index">
      {{ item.class }}
    </li>
  </ul>
  </div>
</template>
<!-- v-if、v-forは同じタグの中に入れないというのが条件 -->
<script>
import datas from '../data_1.json'
export default {
  data(){
    return{
      inputText: '',
      WomanDatas: datas,
      Disp: false,
      disp_2:true,
      profile:'',
    }
  },
  computed: {
    textData() {
      if(this.inputText=='') {
        return ''
      } else {
      return this.WomanDatas.filter((WomanDatas)=>{
        return WomanDatas.name.indexOf(this.inputText) != -1 ||
        WomanDatas.class.indexOf(this.inputText) != -1 ||
        WomanDatas.birthplace.indexOf(this.inputText) != -1
      })
      }
    }
  },
  methods: {
    openImg: function(){
      this.Disp = !this.Disp  
    },
    // アイコンを押したときそれがturuなら！＝でその表示の逆になる
  //   openImg(){
  //     // console.log('click');
  //   return this.WomanDatas.filter(function(i) {
  //       console.log(i.name)
  //       return i.name
  //   })
  // },
    SearchAns: function(name){
      this.disp_2 = !this.disp_2  
      // console.log(this.disp);
      this.profile = this.WomanDatas.find(item => {
        return item.name === name
      })
    }
  }
}
</script>

<style scoped>
.st0{
  fill:#b82d2d
}
</style>
