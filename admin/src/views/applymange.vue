<template>
    <div >
        <div style="position: relative;">
            <label style="width: 150px;
                    height: 150px;
                    background: #eee;
                    display: flex;
                    justify-content: center;
                    align-items: center;" 
                for='shangchun' id="dropbox"  @dragenter="drophandle" >
                    <span class="el-icon-plus" ></span>
                </label>      
        <input id='shangchun' type="file" multiple @change="uploadImg('',$event)" style="    
        border: 1px solid #000;
        width: 150px;
        height: 150px;
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;">
        
        </div>
        <div style="display:inline-block;overflow:hidden;width:80px;height:100px;">
             <img style="width:100%;" v-for="(images,index) in imagesList" :key='index'  :src="images.url" />
        </div>
       
        
        <el-table
        :data="tableData"
        border
        style="width: 100%">
            <el-table-column
                fixed
                prop="date"
                label="日期"
                width="150">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="120">
            </el-table-column>
            <el-table-column
                prop="province"
                label="省份"
                width="120">
            </el-table-column>
            <el-table-column
                prop="city"
                label="市区"
                width="120">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                width="300">
            </el-table-column>
            <el-table-column
                prop="zip"
                label="邮编"
                width="120">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import vue from "vue";
import { Table, TableColumn,} from "element-ui";

vue.use(Table);
vue.use(TableColumn);

export default {
    methods: {
        uploadImg(imgUrls,e){
            
            let imgUrl=imgUrls || e.target.files;
            let windowURL = window.URL || window.webkitURL;
            console.log(imgUrl)
            Array.from(imgUrl).map((item,index)=>{
                this.imagesList.push({
                    url:windowURL.createObjectURL(item),
                    size:item.size
                })
            })
            console.log(windowURL.createObjectURL(imgUrl[0]))
            
        },
        drophandle(e) {
            var dt = e.dataTransfer;
            var imgUrl = dt.files;
        
            uploadImg(imgUrl)
        },
    },
    props:['addaa'],
    data() {
      return {
        imagesList:[],
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        val:this.addaa,
        fileName:''
      }
    },
    created(){
       
    }
  }
</script>

<style scoped>
</style>