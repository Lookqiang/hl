<template>
    <div class="home">
        <el-container >
            <el-header>Header</el-header>
            <el-container >
                <el-aside >
                    <el-menu
                        default-active="0"
                        class="el-menu-vertical-demo"
                        >
                        <el-menu-item  v-for="(nav,index1) in navList" :key='index1' :index="index1+''" @click="openChildren(nav,index1)">
                            <span slot="title">{{nav.name}}</span>
                        </el-menu-item> 
                    </el-menu>
                    <el-menu
                        class="el-menu-vertical-demo"
                        style="width: 150px;"
                        :default-active="currentTabIndex[firstcurrentTab]"
                        >
                            <el-menu-item  v-for="(navChildren,index2) in navChildrenList" :key='index2' :index="navChildren.name" @click="openChildrenConnet(navChildren,index2)">
                                <span slot="title">{{navChildren.name}}</span>
                            </el-menu-item>                      
                    </el-menu>
                </el-aside>
                <el-main style="padding:0;display: flex;flex-direction: column;">
                    <el-header> 
                        <el-tabs type="card" v-model="editableTabsValue2" closable @tab-remove="removeTab" @tab-click="handleClick">
                            <el-tab-pane
                                :key="tabindex"
                                v-for="(tab,tabindex) in titleTab[firstcurrentTab]"
                                :label="tab"
                                :name="tab"
                            >
                            </el-tab-pane>
                        </el-tabs>    
                    </el-header>
                    <el-container style="display:flex;justify-content: center">
                        <keep-alive :include="titleTab">
                            <component :is="currentTabComponent"></component> 
                        </keep-alive>
                    </el-container>
                </el-main>
            </el-container>
           
        </el-container>
    </div>
</template>

<script>
import vue from "vue";
import { Container, Header, Aside, Main, Footer ,Menu,MenuItem,MenuItemGroup,Submenu,Tabs,TabPane} from "element-ui";
import applymange from "@/views/applymange";
import mangemange from "@/views/mangemange";

vue.use(Container);
vue.use(Header);
vue.use(Aside);
vue.use(Main);
vue.use(Footer);
vue.use(Menu);
vue.use(MenuItem);
vue.use(MenuItemGroup);
vue.use(Submenu);
vue.use(Tabs);
vue.use(TabPane);
export default {
    name: "home",
    methods: {
        handleClick(tab, event){
            console.log(tab.name);
            this.currentTabIndex[this.firstcurrentTab]=tab.name;  
            this.editableTabsValue2=tab.name;        
        },
        removeTab(targetName){
            let targetNameIndex=this.titleTab[this.firstcurrentTab].findIndex((n)=>n==targetName);
            if(targetNameIndex==0&&this.titleTab[this.firstcurrentTab].length==1){
                this.currentTab='';
                this.editableTabsValue2='';
                this.childrenIndex[this.firstcurrentTab]=[];
                this.currentTabIndex[this.firstcurrentTab]=''
            };
            if(targetNameIndex==0&&this.titleTab[this.firstcurrentTab].length>1){
                this.currentTab=this.titleTab[this.firstcurrentTab][targetNameIndex+1];
                this.editableTabsValue2=this.currentTab;
                //this.childrenIndex[this.firstcurrentTab]=this.childrenIndex[this.firstcurrentTab][targetNameIndex+1];
                this.currentTabIndex[this.firstcurrentTab]=this.childrenIndex[this.firstcurrentTab][targetNameIndex+1]+'';
                
            };
            if(targetNameIndex!=0){
                this.currentTab=this.titleTab[this.firstcurrentTab][targetNameIndex-1];
                this.editableTabsValue2=this.currentTab;
                this.currentTabIndex[this.firstcurrentTab]=this.childrenIndex[this.firstcurrentTab][targetNameIndex-1]+'';
               
            };
            this.titleTab[this.firstcurrentTab].splice(this.titleTab[this.firstcurrentTab].findIndex((n)=>n==targetName),1); 
            this.childrenIndex[this.firstcurrentTab].splice(this.childrenIndex[this.firstcurrentTab].findIndex((n)=>n==targetName),1);
        },
        openChildren(nav,index){
            this.navChildrenList=nav.children;
            this.firstcurrentTab=index;
            
            this.editableTabsValue2=this.currentTabIndex[this.firstcurrentTab];
        },
        openChildrenConnet(nav,index){
            this.currentTab=nav.name
            this.currentTabIndex[this.firstcurrentTab]=nav.name
             this.editableTabsValue2=nav.name
            
            if(!this.titleTab[this.firstcurrentTab].includes(nav.name)){
                this.titleTab[this.firstcurrentTab].push(nav.name);
                this.childrenIndex[this.firstcurrentTab].push(nav.name)
            }
        }
    },
    data(){
        return {
            editableTabsValue2:'',
            titleTab:[],
            currentTab: '',
            currentTabIndex:[],
            firstcurrentTab: 0,
            childrenIndex:[],
            navList:[
                {
                    name:'导航一',
                    id:'nav1',
                    children:[
                        {
                            name:'applymange',
                            id:'applymange'
                        },
                        {
                            name:'mangemange',
                            id:'mangemange'
                        }
                    ]
                },{
                    name:'导航er',
                    id:'nav2',
                    children:[
                        {
                            name:'mangemange',
                            id:'mangemange'
                        },
                        {
                            name:'applymange',
                            id:'applymange'
                        }
                    ]
                }
            ],
            navChildrenList:[],
        }
    },
    created(){
       
        for(let index=0;index<this.navList.length;index++){
            console.log(index)
            this.$set(this.titleTab,index,[])
            this.$set(this.childrenIndex,index,[])
            this.$set(this.currentTabIndex,index,'')
            
        }
        this.navChildrenList=this.navList[0]['children'];
    },
    components: {
        'applymange': applymange,
        'mangemange':mangemange
    },
    computed: {
        currentTabComponent: function () {
            return  this.currentTab.toLowerCase()
        }
    },
    watch:{
        editableTabsValue2(val){
            if(val!=0){
               this.currentTab= val     
            }
           
        }
    }
};
</script>

<style scoped>
.el-header {
  /* background-color: #b3c0d1; */
  color: #333;
  line-height: 60px;
  /* border-bottom: 1px solid #e6e6e6; */
}

.el-aside {
  color: #333;
  display: flex;
  /* background-color: rgb(11, 96, 206); */
}
.home {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex
}
</style>