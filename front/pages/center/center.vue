<template>
	<view class="content">
		<view :style='{"minHeight":"100vh","width":"100%","padding":"24rpx","position":"relative","background":"#eefcff","height":"auto"}'>
			<view v-if="user&&user.id" :style='{"padding":"24rpx 24rpx","boxShadow":"0 2rpx 12rpx #76c4d850","margin":"0 0 80rpx 0","borderRadius":"60rpx","background":"#fff","display":"flex","width":"100%","position":"relative","height":"auto"}' @tap="onPageTap('../user-info/user-info')" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"alignContent":"center","padding":"0","margin":"0","alignItems":"center","flexWrap":"wrap","flex":"1","background":"none","display":"flex","width":"100%","height":"100%"}' v-if="tableName=='yonghu'" class="userinfo">
					<image :style='{"width":"88rpx","padding":"0","margin":"0 20rpx 0 0","borderRadius":"100%","height":"88rpx"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"width":"240rpx","flex":"1","flexDirection":"column","justifyContent":"center","display":"flex"}' class="info">
						<view :style='{"width":"100%","lineHeight":"36rpx","fontSize":"28rpx","color":"#000"}'>{{user.yonghuzhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
						<view :style='{"overflow":"hidden","whiteSpace":"nowrap","color":"#888","width":"100%","lineHeight":"36rpx","fontSize":"28rpx","textOverflow":"ellipsis"}'>{{user.xuexijingli}}</view>
					</view>
					
					<view :style='{"width":"100%","margin":"20rpx 0 0","flexWrap":"wrap","flexDirection":"row","display":"flex"}' class="info">
					</view>
				</view>
				<view :style='{"padding":"8rpx 20rpx","alignItems":"center","top":"24rpx","borderRadius":"16rpx","background":"none","display":"flex","width":"auto","position":"absolute","right":"24rpx","justifyContent":"center","height":"auto"}' class="setting">
					<text class="icon iconfont icon-qita6" :style='{"border":"0","margin":"0 6rpx 0 0","color":"#76c4d8","borderRadius":"0","display":"inline-block","width":"48rpx","lineHeight":"48rpx","fontSize":"48rpx"}'></text>
					<text :style='{"lineHeight":"2","fontSize":"28rpx","color":"#76c4d8","display":"inline-block"}'>设置</text>
				</view>
			</view>
			
			<view v-else :style='{"padding":"24rpx 24rpx","boxShadow":"0 2rpx 12rpx #76c4d850","margin":"0 0 80rpx 0","borderRadius":"60rpx","background":"#fff","display":"flex","width":"100%","position":"relative","height":"auto"}' @tap="loginClick" class="header" v-bind:class="{'status':isH5Plus}">
				<view style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;font-size: 18px;color: #666">登录/注册</view>
			</view>
			
			<view :style='{"width":"100%","background":"none","height":"auto"}' class="list">
				
				<view :style='{"width":"100%","padding":"10rpx 6rpx","margin":"40rpx 0 0","borderRadius":"16rpx","background":"none","height":"auto"}'>
					<view :style='{"padding":"0 20rpx","background":"url(http://codegen.caihongy.cn/20231213/2ba3fe4cf1134a6aa6bc64f2785ede40.png) no-repeat center bottom / 100% auto","display":"flex","width":"100%","lineHeight":"100rpx","justifyContent":"center","height":"88rpx"}'>
						<view :style='{"fontSize":"32rpx","lineHeight":"72rpx","color":"#76c4d8","fontWeight":"500"}'>我的服务</view>
					</view>
					<view :style='{"padding":"0 2% 0 0","margin":"40rpx 0 0","flexWrap":"wrap","flexDirection":"row","display":"flex","width":"100%","justifyContent":"flex-start","height":"auto"}'>
					
						<block v-for="item in menuList" v-bind:key="item.roleName">
							<block v-if="role==item.roleName" v-bind:key="menu.menu" v-for="(menu,index) in item.backMenu">
								<block v-bind:key="child.tableName" v-for=" (child,sort) in menu.child">
									<view :style='{"padding":"20rpx 4rpx","boxShadow":"2rpx 4rpx 16rpx #76c4d880","borderColor":"#e2e2e2","margin":"0 0 40rpx 3%","alignItems":"center","display":"flex","justifyContent":"center","borderRadius":"60rpx","flexWrap":"wrap","borderWidth":"0px","background":"#fff","width":"47%","borderStyle":"solid","height":"100%"}' v-if="child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' && child.tableName!='exampaper' && child.tableName!='examquestion' " @tap="onPageTap('../'+child.tableName+'/list?userid='+user.id+'&menuJump='+child.menuJump)" class="li" hover-class="hover">
										<view :style='{"width":"100%","lineHeight":"1","fontSize":"64rpx","color":"#e2887e","textAlign":"center"}' :class="child.appFrontIcon"></view>
										<view :style='{"padding":"0 20rpx","margin":"10rpx 0 0","color":"#333","textAlign":"center","flex":"1","width":"100%","fontSize":"28rpx"}' class="text">{{child.menu}}</view>
										<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#999","display":"none"}' class="icon iconfont icon-jinru"></view>
									</view>
								</block>
							</block>
						</block>
						
						<view @tap="onPageTap('../forum-add-or-update/forum-add-or-update')" :style='{"padding":"20rpx 4rpx","boxShadow":"2rpx 4rpx 16rpx #76c4d880","borderColor":"#e2e2e2","margin":"0 0 40rpx 3%","alignItems":"center","display":"flex","justifyContent":"center","borderRadius":"60rpx","flexWrap":"wrap","borderWidth":"0px","background":"#fff","width":"47%","borderStyle":"solid","height":"100%"}' class="li"
						 hover-class="hover">
							<view :style='{"width":"100%","lineHeight":"1","fontSize":"64rpx","color":"#e2887e","textAlign":"center"}' class="cuIcon-scan"></view>
							<view class="text" :style='{"padding":"0 20rpx","margin":"10rpx 0 0","color":"#333","textAlign":"center","flex":"1","width":"100%","fontSize":"28rpx"}'>我要发贴</view>
							<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#999","display":"none"}' class="icon iconfont icon-jinru"></view>
						</view>
						<view @tap="onPageTap('../forum-my/forum-my')" :style='{"padding":"20rpx 4rpx","boxShadow":"2rpx 4rpx 16rpx #76c4d880","borderColor":"#e2e2e2","margin":"0 0 40rpx 3%","alignItems":"center","display":"flex","justifyContent":"center","borderRadius":"60rpx","flexWrap":"wrap","borderWidth":"0px","background":"#fff","width":"47%","borderStyle":"solid","height":"100%"}' class="li"
						 hover-class="hover">
							<view :style='{"width":"100%","lineHeight":"1","fontSize":"64rpx","color":"#e2887e","textAlign":"center"}' class="cuIcon-scan"></view>
							<view class="text" :style='{"padding":"0 20rpx","margin":"10rpx 0 0","color":"#333","textAlign":"center","flex":"1","width":"100%","fontSize":"28rpx"}'>我的发贴</view>
							<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#999","display":"none"}' class="icon iconfont icon-jinru"></view>
						</view>
						<view v-if="user&&user.id" @tap="passwordShow()" :style='{"padding":"20rpx 4rpx","boxShadow":"2rpx 4rpx 16rpx #76c4d880","borderColor":"#e2e2e2","margin":"0 0 40rpx 3%","alignItems":"center","display":"flex","justifyContent":"center","borderRadius":"60rpx","flexWrap":"wrap","borderWidth":"0px","background":"#fff","width":"47%","borderStyle":"solid","height":"100%"}' class="li" hover-class="hover">
							<view :style='{"width":"100%","lineHeight":"1","fontSize":"64rpx","color":"#e2887e","textAlign":"center"}' class="cuIcon-lock"></view>
							<view class="text" :style='{"padding":"0 20rpx","margin":"10rpx 0 0","color":"#333","textAlign":"center","flex":"1","width":"100%","fontSize":"28rpx"}'>修改密码</view>
							<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#999","display":"none"}' class="icon iconfont icon-jinru"></view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 推荐 -->
			<view class="recommend" :style='{"width":"100%","padding":"20rpx 0","margin":"40rpx 0 0","borderRadius":"0px","background":"none","height":"auto"}' v-if="recommendList.length">
				<view :style='{"padding":"0 24rpx","color":"#76c4d8","textAlign":"center","background":"url(http://codegen.caihongy.cn/20231213/d1495c4de2a34153b601bf933a392cbe.png) no-repeat center top","width":"100%","lineHeight":"116rpx","fontSize":"32rpx","fontWeight":"500"}'>为你推荐</view>
				<view :style='{"padding":"0px","margin":"40rpx 0 0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
					<view v-for="(item,index) in recommendList" :key="index" :style='{"padding":"20rpx","boxShadow":"0 2rpx 12rpx #76c4d880","margin":"0 0 40rpx","borderRadius":"60rpx","background":"#fff","width":"100%","height":"auto"}' @click="recommendDetail(item.id)">
						<image :style='{"width":"240rpx","objectFit":"cover","borderRadius":"60rpx","float":"left","display":"block","height":"180rpx"}' :src="item[recommendPicture]?(baseUrl + item[recommendPicture].split(',')[0]):''"></image>
						<view :style='{"padding":"0 8rpx","overflow":"hidden","whiteSpace":"nowrap","color":"#000","width":"calc(100% - 280rpx)","lineHeight":"80rpx","fontSize":"28rpx","textOverflow":"ellipsis","float":"right"}'>{{item[recommendTitle]}}</view>
						<view :style='{"padding":"0 8rpx","color":"#999","textAlign":"right","width":"calc(100% - 280rpx)","lineHeight":"48rpx","fontSize":"28rpx","float":"right"}'>{{item.addtime}}</view>
					</view>
				</view>
			</view>
			<view style="width: 100%;height: 80px"></view>
		</view>
		<uni-popup class="popup-content" ref="passwordPopup" type="bottom">
			<view class="passwordForm">
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.mima" placeholder="原密码" />
				</view>
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.newmima" placeholder="新密码" />
				</view>
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.newmima1" placeholder="确认密码" />
				</view>
				<view class="passwordBtnView">
					<button class="passwordBtn" @click="updatePassword">更新</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				isH5Plus: true,
				user: {},
				tableName:'',
				role: '',
				menuList: [],
				iconArr: [
				  'cuIcon-same',
				  'cuIcon-deliver',
				  'cuIcon-evaluate',
				  'cuIcon-shop',
				  'cuIcon-ticket',
				  'cuIcon-cascades',
				  'cuIcon-discover',
				  'cuIcon-question',
				  'cuIcon-pic',
				  'cuIcon-filter',
				  'cuIcon-footprint',
				  'cuIcon-pulldown',
				  'cuIcon-pullup',
				  'cuIcon-moreandroid',
				  'cuIcon-refund',
				  'cuIcon-qrcode',
				  'cuIcon-remind',
				  'cuIcon-profile',
				  'cuIcon-home',
				  'cuIcon-message',
				  'cuIcon-link',
				  'cuIcon-lock',
				  'cuIcon-unlock',
				  'cuIcon-vip',
				  'cuIcon-weibo',
				  'cuIcon-activity',
				  'cuIcon-friendadd',
				  'cuIcon-friendfamous',
				  'cuIcon-friend',
				  'cuIcon-goods',
				  'cuIcon-selection'
				],
				recommendList: [],
				recommendTable: '',
				recommendTitle: '',
				recommendPicture: '',
				passwordForm: {
					mima: '',
					newmima: '',
					newmima1: '',
				},
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(){
			let menus = menu.list();
			this.menuList = menus;
		},
		async onShow(){
            uni.removeStorageSync("useridTag");
			this.role = uni.getStorageSync("role");
			await this.getSession()
			this.getThumbsup()
			this.getStoreup()
			this.tableName = uni.getStorageSync("nowTable");
			let menus = menu.list();
			this.menuList = menus;
			this.getRecommendList()
		},
		methods: {
			async getSession(){
				let table = uni.getStorageSync("nowTable");
				let res = await this.$api.session(table);
				this.user = res.data;
				this.$forceUpdate()
			},
			async getThumbsup(){
				if(!this.user||!this.user.id){
					return false
				}
				let res = await this.$api.page('storeup',{userid: this.user.id,type: 21})
				this.user.thumbsnum = Number(res.data.total)
				this.$forceUpdate()
			},
			async getStoreup(){
				if(!this.user||!this.user.id){
					return false
				}
				let res = await this.$api.page('storeup',{userid: this.user.id,type: 1})
				this.user.storenum = Number(res.data.total)
				this.$forceUpdate()
			},
			loginClick(){
				uni.navigateTo({
					url: '../login/login'
				});
			},
			onPageTap(url) {
                uni.setStorageSync("useridTag",1);
				uni.navigateTo({
					url: url,
					fail: function() {
						uni.switchTab({
							url: url
						});
					}
				});
			},
			async getRecommendList(){
				let params = {
					page: 1,
					limit: 3
				}
				let res;
				if(uni.getStorageSync("appUserid")) {
					res = await this.$api.recommend2('kechengxinxi', params);
				} else {
					res = await this.$api.recommend('kechengxinxi', params);
				}
				console.log(res.data)
				this.recommendList = res.data.list
				this.recommendTable = 'kechengxinxi'
				this.recommendTitle = 'kechengmingcheng'
				this.recommendPicture = 'kechengfengmian'
				this.$forceUpdate()
			},
			recommendDetail(id) {
				uni.navigateTo({
					url: `../${this.recommendTable}/detail?id=${id}`,
					fail: function() {
						uni.switchTab({
							url: `../${this.recommendTable}/detail?id=${id}`
						});
					}
				});
			},
			passwordShow() {
				this.passwordForm = {
					mima: '',
					newmima: '',
					newmima1: '',
				}
				this.$forceUpdate()
				this.$refs.passwordPopup.open()
			},
			async updatePassword() {
				if (this.passwordForm.mima == ''){
					this.$utils.msg('原密码不能为空')
					return false
				}
				if (this.passwordForm.newmima == ''){
					this.$utils.msg('新密码不能为空')
					return false
				}
				if (this.passwordForm.newmima1 == ''){
					this.$utils.msg('确认密码不能为空')
					return false
				}
				let password = ''
				if (this.user.mima) {
					password = this.user.mima;
				} else if (this.user.password) {
					password = this.user.password;
				}
				let newpassword = this.passwordForm.mima
				let res = await this.$api.encrypt('md5',this.passwordForm.mima)
				newpassword = res.data
				if(password != newpassword){
					this.$utils.msg('原密码不正确')
					return false
				}
				if (this.passwordForm.newmima != this.passwordForm.newmima1){
					this.$utils.msg('两次密码不一致')
					return false
				}
				if (this.tableName == 'yonghu') {
				}
				this.user.password = this.passwordForm.newmima
				this.user.mima = this.passwordForm.newmima
				await this.$api.update(this.tableName,this.user)
				this.$utils.msg('修改密码成功,下次登录系统生效')
				this.$refs.passwordPopup.close()
				this.getSession()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: calc(100vh - 94px);
		box-sizing: border-box;
	}
	.passwordForm {
		width: 100%;
		padding: 10px 20px 60px;
		background: #fff;
	
		.passwordInput {
			background: #eee;
			margin: 0 0 10px;
			padding: 0 10px;
	
			input {
				height: 36px;
				line-height: 36px;
				font-size: 14px;
			}
		}
	
		.passwordBtnView {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 10px 0;
	
			.passwordBtn {
				padding: 0 20px;
				width: auto;
				height: 20px;
				line-height: 20px;
				font-size: 14px;
				color: #fff;
				background: #007aff;
				border: none;
				border-radius: 5px;
	
			}
		}
	}
</style>
