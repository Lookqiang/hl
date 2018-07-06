<template>
    <div style="display:flex;">
        <el-menu
            class="el-menu-vertical-demo"
            style="width: 150px;"
            >
                <el-menu-item  v-for="(navChildren,index2) in navChildrenList" :key='index2' :index="index2+''" @click="openChildrenConnet(navChildren)">
                    <span slot="title">{{navChildren.name}}</span>
                </el-menu-item>                      
        </el-menu>
        <el-container >
            <el-header > 
                <el-tabs type="card" v-model="editableTabsValue2" closable @tab-remove="removeTab">
                    <el-tab-pane
                        :key="tabindex"
                        v-for="(tab,tabindex) in titleTab"
                        :label="tab"
                        :name="tab"
                    >
                    </el-tab-pane>
                </el-tabs>    
            </el-header>
            <el-container style="display:flex;justify-content: center">
                <keep-alive :include="titleTab">
                    <component :is="currentTabComponent" :addaa='currentTabComponent'></component> 
                </keep-alive>
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
        name:'maincontent' , 
        props:['initialnavchildrenlist'],
        data(){
            return {
                titleTab:[],
                currentTab: '',
                firstcurrentTab: '0',
                editableTabsValue2:'',
                titleTab:[],
                currentTab:'',
                currentTabComponent:[],
                navChildrenList:this.initialnavchildrenlist,
            }
        },
        methods:{
            removeTab(targetName){
                let targetNameIndex=this.titleTab.findIndex((n)=>n==targetName)
                if(targetNameIndex==0)this.currentTab='';
                if(targetNameIndex!=0)this.currentTab=this.titleTab[targetNameIndex-1];
                this.titleTab.splice(this.titleTab.findIndex((n)=>n==targetName),1); 
            },
            openChildrenConnet(nav){
                this.currentTab=nav.name
                this.editableTabsValue2=nav.name
                if(!this.titleTab.includes(nav.name)){
                    this.titleTab.push(nav.name);
                    
                }
            }
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
    }
</script>

<style scoped>

</style>