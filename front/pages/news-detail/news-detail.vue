<template>
	<view :style='{"minHeight":"100vh","padding":"24rpx","flexWrap":"wrap","background":"#eefcff","display":"flex","width":"100%","position":"relative","justifyContent":"space-between","height":"auto"}'>
		<view class="title" :style='{"margin":"0","color":"#333","borderRadius":"16rpx 16rpx 0 0","textAlign":"center","background":"url(http://codegen.caihongy.cn/20231213/d1495c4de2a34153b601bf933a392cbe.png) no-repeat center top","width":"100%","lineHeight":"116rpx","fontSize":"32rpx","order":"1"}'>{{detail.title}}</view>
		
		<view :style='{"padding":"0 24rpx","color":"#999","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"center","order":"2"}'>
		  <view :style='{"padding":"0","margin":"0 20rpx 0 0","order":"5"}'>
		    <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"inherit"}'></text>
		    <text :style='{"color":"inherit","lineHeight":"1.5","fontSize":"24rpx"}'>发布时间：{{detail.addtime}}</text>
		  </view>
		  <view :style='{"padding":"0","margin":"0 20rpx 0 0"}'>
		    <text class="icon iconfont icon-geren11" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"inherit"}'></text>
		    <text :style='{"color":"inherit","lineHeight":"1.5","fontSize":"24rpx"}'>{{detail.name}}</text>
		  </view>
		  <view :style='{"padding":"0","margin":"0 20rpx 0 0"}'>
		    <text class="icon iconfont icon-zan10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"inherit"}'></text>
		    <text :style='{"color":"inherit","lineHeight":"1.5","fontSize":"24rpx"}'>{{detail.thumbsupnum}}</text>
		  </view>
		  <view :style='{"padding":"0","margin":"0 20rpx 0 0"}'>
		    <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"inherit"}'></text>
		    <text :style='{"color":"inherit","lineHeight":"1.5","fontSize":"24rpx"}'>{{detail.storeupnum}}</text>
		  </view>
		  <view :style='{"padding":"0","margin":"0 20rpx 0 0"}'>
		    <text class="icon iconfont icon-chakan2" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"inherit"}'></text>
		    <text :style='{"color":"inherit","lineHeight":"1.5","fontSize":"24rpx"}'>{{detail.clicknum}}</text>
		  </view>
		</view>
		
		<view :style='{"padding":"0 24rpx","alignItems":"center","borderRadius":"0 0 16rpx 0","background":"none","display":"flex","width":"100%","justifyContent":"space-between","order":"2"}'>
		  <view :style='{"border":"0px solid #eaeaea","padding":"0px","margin":"0 20rpx","alignItems":"center","borderRadius":"16rpx","display":"flex","height":"64rpx"}' @click="likeClick">
		    <text class="icon iconfont" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"28rpx","color":"#666"}' :class="likeType?'icon-zan10':'icon-zan10'"></text>
		    <text :style='{"color":"#666","lineHeight":"1.5","fontSize":"28rpx"}'>{{likeType?'已':''}}赞</text>
		  </view>
		  <view :style='{"border":"0px solid #eaeaea","padding":"0px","margin":"0 20rpx","alignItems":"center","borderRadius":"16rpx","display":"flex","height":"64rpx"}' @click="collectClick">
		    <text class="icon iconfont" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"28rpx","color":"#666"}' :class="collectType?'icon-shoucang10':'icon-shoucang10'"></text>
		    <text :style='{"color":"#666","lineHeight":"1.5","fontSize":"28rpx"}'>{{collectType?'已':''}}收藏</text>
		  </view>
		</view>
		
		<view class="content" :style='{"padding":"24rpx","margin":"0","background":"none","width":"100%","fontSize":"28rpx","height":"auto","order":"4"}'>
			<rich-text :nodes="detail.content"></rich-text>
		</view>
		
		<div :style='{"padding":"0 24rpx 24rpx","alignItems":"center","borderRadius":"0 0 0 16rpx","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto","order":"5"}'>
		  <div @click="prepDetailClick" :style='{"border":"0px solid #eaeaea","padding":"0 10rpx","lineHeight":"64rpx","fontSize":"28rpx","color":"#666","borderRadius":"16rpx"}'>上一篇：prev</div>
		  <div @click="nextDetailClick" :style='{"border":"0px solid #eaeaea","padding":"0 10rpx","lineHeight":"64rpx","fontSize":"28rpx","color":"#666","borderRadius":"16rpx"}'>下一篇：next</div>
		</div>
		

		<!-- 热门 -->
		<view class="hot" :style='{"width":"100%","margin":"40rpx 0","background":"none","height":"auto","order":"11"}'>
		  <view :style='{"padding":"0 24rpx","color":"#76c4d8","textAlign":"center","background":"url(http://codegen.caihongy.cn/20231213/d1495c4de2a34153b601bf933a392cbe.png) no-repeat center top","width":"100%","fontSize":"32rpx","lineHeight":"116rpx","height":"104rpx"}'>热门信息</view>
		  <view :style='{"padding":"0","margin":"40rpx 0 0","borderRadius":"0 0 16rpx 16rpx","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		    <view v-for="(item,index) in hotList" :key="index" :style='{"padding":"24rpx","boxShadow":"0 2rpx 12rpx #76c4d880","margin":"0 0 40rpx","borderRadius":"60rpx","background":"#fff","width":"48%","height":"auto"}' @click="toDetail(item.id)">
			  <image :style='{"width":"100%","objectFit":"cover","borderRadius":"60rpx","display":"block","height":"200rpx"}' mode="aspectFill" :src="baseUrl + item.picture"></image>
		      <view :style='{"padding":"0 8rpx","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"60rpx","fontSize":"28rpx","textOverflow":"ellipsis"}'>{{ item.title }}</view>
		      <view :style='{"padding":"0 8rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"#999","textAlign":"right"}'>{{ item.addtime }}</view>
		    </view>
		  </view>
		</view>
		<!-- 推荐 -->
		<view class="recommend" :style='{"width":"100%","margin":"40rpx 0","background":"none","height":"auto","order":"12"}'>
		  <view :style='{"padding":"0 24rpx","color":"#76c4d8","textAlign":"center","background":"url(http://codegen.caihongy.cn/20231213/d1495c4de2a34153b601bf933a392cbe.png) no-repeat center top","width":"100%","fontSize":"32rpx","lineHeight":"116rpx","height":"104rpx"}'>热门推荐</view>
		  <view :style='{"padding":"0","margin":"40rpx 0 0","borderRadius":"0 0 16rpx 16rpx","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		    <view v-for="(item,index) in recommendList" :key="index" :style='{"boxShadow":"0 2rpx 12rpx #76c4d880","padding":"20rpx","margin":"0 0 40rpx","borderRadius":"60rpx","background":"#fff","width":"48%","height":"auto"}' @click="toDetail(item.id)">
		      <image :style='{"width":"100%","objectFit":"cover","borderRadius":"60rpx","display":"block","height":"200rpx"}' mode="aspectFill" :src="baseUrl + item.picture"></image>
			  <view :style='{"padding":"0 8rpx","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"60rpx","fontSize":"28rpx","textOverflow":"ellipsis"}'>{{ item.title }}</view>
		      <view :style='{"padding":"0 8rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"#999","textAlign":"right"}'>{{ item.addtime }}</view>
		    </view>
		  </view>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				detail: {},
				id: '',
				likeType: false,
				likeForm: {},
				collectType: false,
				collectForm: {},
				allList: [],
				currentIndex: 0,
				hotList: [],
				recommendList: [],
			}
		},
		async onLoad(options) {
			this.id = options.id;
			this.getInfo()
			
			this.getHotList()
			this.getRecommendList()
		},
		computed:{
			baseUrl() {
				return this.$base.url;
			},
			userid(){
				return uni.getStorageSync('appUserid')
			}
		},
		methods: {
			async getInfo(){
				let res = await this.$api.info('news', this.id)
				res.data.content = res.data.content.replace(/<img/g,'<img style="width: 100%;"');
				this.detail = res.data;
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 100,
				})
				this.getLike()
				this.getCollect()
				res = await this.$api.list('news',{page:1,limit:100,sort:'addtime',order:'desc'})
				for(let x in res.data.list){
					if(res.data.list[x].id == this.id){
						this.currentIndex = Number(x)
						break
					}
				}
				this.allList = res.data.list
				
			},
			// 获取点赞状态
			async getLike() {
				let res = await this.$api.list('storeup', {
					page: 1,
					limit: 1,
					type: 21,
					userid: uni.getStorageSync('appUserid'),
					refid: this.id,
					tablename: 'news'
				})
				if (res.data.list.length) {
					this.likeType = true
					this.likeForm = res.data.list[0]
				} else {
					this.likeType = false
					this.likeForm = {}
				}
			},
			// 获取热门列表
			async getHotList(){
				let res = await this.$api.recommend('news',{page:1, limit: 4,sort:'addtime',order:'desc'})
				this.hotList = res.data.list;
			},
			// 获取推荐列表	
			async getRecommendList(){
				let res;
				if(uni.getStorageSync("appUserid")){
					res = await this.$api.recommend2('news',{page:1, limit: 4,sort:'addtime',order:'desc'})
				}else{
					res = await this.$api.recommend('news',{page:1, limit: 4,sort:'addtime',order:'desc'})
				}
				
				this.recommendList = res.data.list;
			},
			// 上一篇
			prepDetailClick(){
				if(this.currentIndex == 0){
					this.$message.error('已经是第一篇了')
					return false
				}
				this.currentIndex--
				this.id = this.allList[this.currentIndex].id
				this.getInfo()
			},
			// 下一篇
			nextDetailClick(){
				if(this.currentIndex == this.allList.length - 1){
					this.$message.error('已经是最后一篇了')
					return false
				}
				this.currentIndex++
				this.id = this.allList[this.currentIndex].id
				this.getInfo()
			},
			toDetail(id){
				this.id = id
				this.getInfo()
			},
			// 获取收藏状态
			async getCollect() {
				let res = await this.$api.list('storeup', {
					page: 1,
					limit: 1,
					type: 1,
					userid: uni.getStorageSync('appUserid'),
					refid: this.id,
					tablename: 'news'
				})
				if (res.data.list.length) {
					this.collectType = true
					this.collectForm = res.data.list[0]
				} else {
					this.collectType = false
					this.collectForm = {}
				}
			},
			// 点赞按钮
			async likeClick() {
				let that = this
				if (this.likeType) {
					uni.showModal({
						title: '提示',
						content: '是否取消点赞？',
						async success(res) {
							if (res.confirm) {
								await that.$api.del('storeup', JSON.stringify([that.likeForm.id]))
								that.$utils.msg('取消成功')
								that.detail.thumbsupnum--
								await that.$api.update('news', that.detail)
								that.getLike()
							}
						}
					})
				} else {
					await that.$api.add('storeup', {
						userid: uni.getStorageSync('appUserid'),
						refid: this.id,
						type: 21,
						name: this.detail.title,
						picture: this.detail.picture,
						tablename: 'news',
					})
					this.$utils.msg('点赞成功')
					that.detail.thumbsupnum++
					await that.$api.update('news', that.detail)
					this.getLike()
				}
			},
			// 收藏按钮
			async collectClick() {
				let that = this
				if (this.collectType) {
					uni.showModal({
						title: '提示',
						content: '是否取消收藏？',
						async success(res) {
							if (res.confirm) {
								await that.$api.del('storeup', JSON.stringify([that.collectForm.id]))
								that.$utils.msg('取消成功')
								that.detail.storeupnum--
								await that.$api.update('news', that.detail)
								that.getCollect()
							}
						}
					})
				} else {
					await that.$api.add('storeup', {
						userid: uni.getStorageSync('appUserid'),
						refid: this.id,
						type: 1,
						name: this.detail.title,
						picture: this.detail.picture,
						tablename: 'news',
					})
					this.$utils.msg('收藏成功')
					that.detail.storeupnum++
					await that.$api.update('news', that.detail)
					this.getCollect()
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	page {
		background: #FFFFFF;
	}

	.title {
		text-align: center;
		font-size: 40upx;
		font-weight: bold;
		margin: 20upx;
	}

	.content {
		margin: 40upx;
		font-size: 30upx;
		line-height: 50upx;
		letter-spacing: 5upx;
	}
	.operateView {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;

		.like_box {
			width: 40%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 32rpx;

			.icon {
				font-size: 36rpx;
				padding: 0 6rpx;
			}
		}

		.likeActive {
			color: #f00;
		}
	}
</style>
