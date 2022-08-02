<template>
    <div class="login_wrap">   
        <img class="bg_img" src="../assets/images/1.png" alt="">
        <div class="form_wrap">
            <img class="bear_img" src="../assets/images/2.png" alt="">    
            <!-- 表单 --> 
            <van-field class="login_input" v-model="userName" placeholder="请输入用户名" />
        
            <van-field class="login_input" v-model="password" placeholder="请输入密码" />
                
            <van-button class="login_btn" v-if="loginStatus==1" type="primary" @click="handleLogin">登录</van-button>
            <van-button class="login_btn" v-if="loginStatus==2"  type="primary" @click="handleRegist">注册</van-button>
            <p class="form_bottom">
                <span @click="handleChangeStatus">
                    {{
                        loginStatus==1?"去注册":"去登陆" 
                    }}    
                </span>    
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import {Options , Vue } from "vue-class-component"
import {loginApi,registApi} from "@/utils/request"
import {useStore} from "vuex"
import {useRouter} from "vue-router"
import {Toast} from "vant"
@Options({})
export default class Login extends Vue{
    userName:string=""
    password:string=""
    // 1 ,登录 2的时候是注册
    loginStatus:number=1
    router=useRouter()
    handleChangeStatus(){
        this.loginStatus=this.loginStatus==1?2:1
    }
    store:any = useStore()
    handleLogin(){
        loginApi({
            "userName":this.userName,
            "userPassword":this.password
        }).then((res:any)=>{
            console.log("登录数据",res)
            if(res.code==200){
                // 把登录信息存储到本地
                localStorage.setItem("uInfo",JSON.stringify(res.body))
                this.store.commit("uInfo/setUInfo",res.body) 
                this.router.push({path:"/"})
            }
        })
        console.log("用户信息",this.userName,this.password)
    }
    handleRegist(){
        registApi({
            "userName":this.userName,
            "userPassword":this.password
        }).then((res:any)=>{
            console.log("注册信息",res)
            if(res.code===200){
                Toast("注册成功")
                this.loginStatus=1
            }
        })
        console.log("用户信息",this.userName,this.password)
    }
}
</script>