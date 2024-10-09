
<template>
<view>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view class="container" :style='{"minHeight":"100vh","width":"100%","padding":"24rpx 24rpx 24rpx","position":"relative","background":"#eefcff","height":"auto"}'>
						<swiper :style='{"padding":"24rpx 0","boxShadow":"0 -8rpx 8rpx #76c4d850","borderRadius":"40rpx 40rpx 0 0","textAlign":"center","background":"#fff","width":"100%","height":"248rpx","zIndex":"9"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='6000' :vertical='false'>
				<swiper-item :style='{"width":"100%","borderRadius":"100%","background":"none","height":"100%"}' v-for="(swiper,index) in swiperList" :key="index">
					<image :style='{"margin":"0 auto","objectFit":"cover","borderRadius":"100%","background":"none","display":"block","width":"200rpx","height":"200rpx"}' mode="aspectFill" v-if="swiper.substring(0,4)=='http'" :src="swiper"></image>
					<image :style='{"margin":"0 auto","objectFit":"cover","borderRadius":"100%","background":"none","display":"block","width":"200rpx","height":"200rpx"}' mode="aspectFill" v-else :src="baseUrl+swiper"></image>
				</swiper-item>
			</swiper>
												            <view :style='{"padding":"0","margin":"0 0 0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","position":"relative","justifyContent":"space-between","height":"auto"}' class="detail-content">
				<view :style='{"width":"50%","padding":"0","borderColor":"#76c4d8","borderStyle":"solid","textAlign":"right","borderWidth":"0 0 2rpx"}' v-if="storeupFlag==1" @click="shoucang">
					<text class="icon iconfont icon-shoucang11" :style='{"margin":"0 4rpx 0 0","lineHeight":"76rpx","fontSize":"36rpx","color":"#f15b12"}'></text>
					<text :style='{"color":"#f15b12","lineHeight":"76rpx","fontSize":"28rpx"}'>收藏</text>
				</view>
				<view :style='{"width":"50%","padding":"0","borderColor":"#76c4d8","borderStyle":"solid","textAlign":"right","borderWidth":"0 0 2rpx"}' v-if="storeupFlag==0" @click="shoucang">
					<text class="icon iconfont icon-shoucang11" :style='{"margin":"0 4rpx 0 0","lineHeight":"76rpx","fontSize":"36rpx","color":"#f15b12"}'></text>
					<text :style='{"color":"#f15b12","lineHeight":"76rpx","fontSize":"28rpx"}'>收藏</text>
				</view>

				<view :style='{"padding":"0 24rpx 0px","margin":"0","borderColor":"#76c4d8","borderRadius":"0","borderWidth":"0 0 0px 0","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 20rpx 0 0","borderColor":"#76c4d8","color":"#333","borderRadius":"0","textAlign":"right","borderWidth":"0 0 2rpx","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="lable">课程名称：</view>
					<view :style='{"padding":"0px","margin":"0px","borderColor":"#76c4d8","color":"#666","borderWidth":"0 0 2rpx","flex":"1","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="text">{{detail.kechengmingcheng}}</view>
				</view>
				<view :style='{"padding":"0 24rpx 0px","margin":"0","borderColor":"#76c4d8","borderRadius":"0","borderWidth":"0 0 0px 0","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 20rpx 0 0","borderColor":"#76c4d8","color":"#333","borderRadius":"0","textAlign":"right","borderWidth":"0 0 2rpx","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="lable">课程分类：</view>
					<view :style='{"padding":"0px","margin":"0px","borderColor":"#76c4d8","color":"#666","borderWidth":"0 0 2rpx","flex":"1","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="text">{{detail.kechengfenlei}}</view>
				</view>

				<view class="detail-list-item" :style='{"padding":"0 24rpx 0px","margin":"0","borderColor":"#76c4d8","borderRadius":"0","borderWidth":"0 0 0px 0","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","borderColor":"#76c4d8","color":"#333","borderRadius":"0","textAlign":"right","borderWidth":"0 0 2rpx","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>课程编号：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","borderColor":"#76c4d8","color":"#666","borderWidth":"0 0 2rpx","flex":"1","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>{{detail.kechengbianhao}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"0 24rpx 0px","margin":"0","borderColor":"#76c4d8","borderRadius":"0","borderWidth":"0 0 0px 0","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","borderColor":"#76c4d8","color":"#333","borderRadius":"0","textAlign":"right","borderWidth":"0 0 2rpx","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>课程费用：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","borderColor":"#76c4d8","color":"#666","borderWidth":"0 0 2rpx","flex":"1","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>{{detail.kechengfeiyong}}</view>
				</view>
				<view :style='{"padding":"0 24rpx 0px","margin":"0","borderColor":"#76c4d8","borderRadius":"0","borderWidth":"0 0 0px 0","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item" @tap="download(detail.kechengfujian)" >
					<view class="lable" :style='{"padding":"0 20rpx 0 0","borderColor":"#76c4d8","color":"#333","borderRadius":"0","textAlign":"right","borderWidth":"0 0 2rpx","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>课程附件：</view>
					<view class="text" :style='{"padding":"0px","margin":"0px","borderColor":"#76c4d8","color":"#666","borderWidth":"0 0 2rpx","flex":"1","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>下载文件</view>
				</view>
				<view :style='{"padding":"0 24rpx 0px","margin":"0","borderColor":"#76c4d8","borderRadius":"0","borderWidth":"0 0 0px 0","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item" @tap="download(detail.kechengbiao)" >
					<view class="lable" :style='{"padding":"0 20rpx 0 0","borderColor":"#76c4d8","color":"#333","borderRadius":"0","textAlign":"right","borderWidth":"0 0 2rpx","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>课程表：</view>
					<view class="text" :style='{"padding":"0px","margin":"0px","borderColor":"#76c4d8","color":"#666","borderWidth":"0 0 2rpx","flex":"1","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>下载文件</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"0 24rpx 0px","margin":"0","borderColor":"#76c4d8","borderRadius":"0","borderWidth":"0 0 0px 0","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","borderColor":"#76c4d8","color":"#333","borderRadius":"0","textAlign":"right","borderWidth":"0 0 2rpx","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>发布时间：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","borderColor":"#76c4d8","color":"#666","borderWidth":"0 0 2rpx","flex":"1","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>{{detail.fabushijian}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"0 24rpx 0px","margin":"0","borderColor":"#76c4d8","borderRadius":"0","borderWidth":"0 0 0px 0","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","borderColor":"#76c4d8","color":"#333","borderRadius":"0","textAlign":"right","borderWidth":"0 0 2rpx","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>点击次数：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","borderColor":"#76c4d8","color":"#666","borderWidth":"0 0 2rpx","flex":"1","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>{{detail.clicknum}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"0 24rpx 0px","margin":"0","borderColor":"#76c4d8","borderRadius":"0","borderWidth":"0 0 0px 0","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","borderColor":"#76c4d8","color":"#333","borderRadius":"0","textAlign":"right","borderWidth":"0 0 2rpx","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>评论数：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","borderColor":"#76c4d8","color":"#666","borderWidth":"0 0 2rpx","flex":"1","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>{{detail.discussnum}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"0 24rpx 0px","margin":"0","borderColor":"#76c4d8","borderRadius":"0","borderWidth":"0 0 0px 0","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","borderColor":"#76c4d8","color":"#333","borderRadius":"0","textAlign":"right","borderWidth":"0 0 2rpx","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>收藏数：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","borderColor":"#76c4d8","color":"#666","borderWidth":"0 0 2rpx","flex":"1","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>{{detail.storeupnum}}</view>
				</view>





				<view class="detail-list-item rich" :style='{"padding":"24rpx","boxShadow":"0 8rpx 8rpx #76c4d820","margin":"0 0 24rpx 0","borderColor":"#d8d8d8","borderRadius":"0 0 40rpx 40rpx","borderWidth":"0 0 0px 0","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>课程详情</view>
					<view class="rich-text" :style='{"padding":"0px 24rpx 24rpx 0","margin":"0","lineHeight":"48rpx","color":"#666","flex":"1"}'>
						<rich-text :nodes="detail.kechengxiangqing"></rich-text>
					</view>
				</view>


				<view class="time-content" :style='{"padding":"0","margin":"24rpx 0 24rpx 0","borderRadius":"40rpx","background":"none","width":"100%","height":"auto","order":"11"}'>
					<view class="comoment-header" :style='{"borderColor":"#76c4d8","borderRadius":"0px","background":"none","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"space-between","height":"auto"}'>
						<view :style='{"padding":"0 24rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333"}'>评论</view>
						<view :style='{"padding":"0 40rpx 0 20rpx","borderRadius":"0 60rpx 60rpx 0","background":"none","display":"flex"}' @click="onCommentTap" class="btn-comment-content" style="display: flex;align-items: center;">
							<view :style='{"margin":"0 8rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#76c4d8"}' class="cuIcon-add"></view>
							<view :style='{"color":"#76c4d8","lineHeight":"80rpx","fontSize":"28rpx"}'>添加评论</view>
						</view>
					</view>
				
					<view :style='{"padding":"24rpx","margin":"24rpx 0 0 0","borderColor":"#76c4d8","borderRadius":"0px","background":"none","borderWidth":"0 0 2rpx","width":"100%","borderStyle":"dotted","height":"auto"}' v-for="(item,index) in commentList" v-bind:key="index" class="cu-item comment-item">
						<view :style='{"width":"100%","display":"flex","height":"auto"}'>
							<image :style='{"width":"60rpx","margin":"0 8rpx 0 0","borderRadius":"100%","display":"block","height":"60rpx"}' v-if="item.avatarurl" mode="aspectFill" :src="baseUrl+item.avatarurl"></image>
							<view :style='{"color":"#333","lineHeight":"60rpx","fontSize":"28rpx"}' class="text-grey">{{item.nickname}}</view>
						</view>
						<view :style='{"margin":"8rpx 0","lineHeight":"1.5","fontSize":"28rpx","color":"#666","textIndent":"2em"}' class="text-gray text-content text-df">
							<rich-text :nodes="item.content"></rich-text>
						</view>
						<view :style='{"lineHeight":"48rpx","fontSize":"26rpx","color":"#999","textAlign":"right"}' class="margin-top-sm text-gray text-df">{{item.addtime}}</view>
						<view v-if="item.reply" :style='{"margin":"8rpx 0","lineHeight":"1.5","fontSize":"28rpx","color":"#666","textIndent":"2em"}' class="text-gray text-content text-df">
							回复:<rich-text :nodes="item.reply"></rich-text>
						</view>
						<view style="display: flex;display: flex;justify-content: flex-end;padding: 6rpx 0;" v-if="user&&user.id==item.userid">
							<view style="color: #999;font-size: 16rpx;" @click="delClick(item.id)">删除</view>
						</view>
					</view>
				</view>

				<view class="bottom-content bg-white tabbar border shop" :style='{"padding":"24rpx 0","margin":"0 auto","borderRadius":"0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","height":"auto","order":"2"}'>

					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 3% 20rpx 0","color":"rgb(255, 255, 255)","borderRadius":"60rpx","background":"#76c4d8","width":"auto","fontSize":"28rpx","minWidth":"21%","lineHeight":"80rpx","height":"80rpx"}' v-if="userid&&isAuth('kechengxinxi','购买')" @tap="onAcrossTap('goumaikecheng','','','')" class="cu-btn bg-brown round shadow-blur" >购买</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 3% 20rpx 0","color":"rgb(255, 255, 255)","borderRadius":"60rpx","background":"#76c4d8","width":"auto","fontSize":"28rpx","minWidth":"21%","lineHeight":"80rpx","height":"80rpx"}' v-if="!userid&&isAuthFront('kechengxinxi','购买')" @tap="onAcrossTap('goumaikecheng','','','')" class="cu-btn bg-brown round shadow-blur" >购买</button>
					
				</view>
			</view>

		</view>
	</view>
</mescroll-uni>
</view>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				id: '',
                userid: '',
				detail: {},
				swiperList: [],
				commentList: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				user: {},
				storeupFlag: 0,
				count: 0,
				timer: null,
				title:'',
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(options) {
			// #ifdef APP-PLUS
			let page = getCurrentPages()
			this.href = this.baseUrl + 'front/h5/#/' + page[page.length - 1].route
			// #endif
			this.id = options.id;
            if(options.userid) {
                this.userid = options.userid;
            }
			// 渲染数据
			this.init();
		},
		// #ifdef MP-WEIXIN
		onShareAppMessage(){
			var obj = {
				title: this.title,
				imageUrl: this.swiperList[0]?this.baseUrl + this.swiperList[0]: ''
			}
			return obj
		},
		// #endif
        onUnload() {
            if(this.timer) {
                clearInterval(this.timer);
            }
        },
		async onShow(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
			this.getStoreup();
			let cleanType = uni.getStorageSync('discusskechengxinxiCleanType')
			if(cleanType){
				uni.removeStorageSync('discusskechengxinxiCleanType')
				this.mescroll.num = 1
				this.upCallback(this.mescroll)
				this.init();
			}
			let crossCleanType = uni.getStorageSync('crossCleanType')
            if(crossCleanType) {
				uni.removeStorageSync('crossCleanType')
                res = await this.$api.info('kechengxinxi', this.id);
                this.detail = res.data;
				this.title = this.detail.kechengmingcheng
            }
		},
		destroyed: function() {
			//window.clearInterval(this.inter);
		},
		methods: {
			// 支付
			onPayTap(){
				if(!this.user){
					return false
				}
				uni.setStorageSync('paytable','kechengxinxi');
				uni.setStorageSync('payObject',this.detail);
				this.$utils.jump('../pay-confirm/pay-confirm?type=1')
			},
            onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
                this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
            },
			// 收藏
			async getStoreup() {
				if(!this.user){
					return false
				}
				let params = {
					page: 1,
					limit: 1,
					refid : this.id,
					tablename : 'kechengxinxi',
					userid: this.user.id,
					type: 1,
				}
				let res = await this.$api.list(`storeup`, params);
				this.storeupFlag = res.data.list.length;
			},
			async shoucang(){
				if(!this.user){
					return false
				}
				let _this = this;
				let params = {
					page: 1,
					limit: 1,
					refid : _this.detail.id,
					tablename : 'kechengxinxi',
					userid: _this.user.id,
					type: 1,
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length == 1) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消',
						success: async function(res) {
							if (res.confirm) {
								_this.detail.storeupnum--
								await _this.$api.update('kechengxinxi',_this.detail)
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.$utils.msg('取消成功');
								_this.getStoreup();
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否收藏',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
								name: _this.detail.kechengmingcheng,
                                inteltype: _this.detail.kechengfenlei,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'kechengxinxi',
                                type: 1
							});
							_this.detail.storeupnum++
							await _this.$api.update('kechengxinxi',_this.detail)
							_this.$utils.msg('收藏成功');
							_this.getStoreup();
						}
					}
				});
			},
			// 跨表
			onAcrossTap(tableName,crossOptAudit,statusColumnName,tips,statusColumnValue){
				if(!this.user){
					return false
				}
				uni.setStorageSync('crossTable','kechengxinxi');
				uni.setStorageSync(`crossObj`, this.detail);
				uni.setStorageSync(`statusColumnName`, statusColumnName);
				uni.setStorageSync(`statusColumnValue`, statusColumnValue);
				uni.setStorageSync(`tips`, tips);
				if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
					var obj = uni.getStorageSync('crossObj');
					for (var o in obj){
						if(o==statusColumnName && obj[o]==statusColumnValue){
							this.$utils.msg(tips);
							return
						}
					}
				}
				this.$utils.jump(`../${tableName}/add-or-update?cross=true`);
			},
			// 获取详情
			async init(){
                if(this.timer) {
                    clearInterval(this.timer);
                }
				let res = await this.$api.info('kechengxinxi', this.id);
				this.detail = res.data;

				this.title = this.detail.kechengmingcheng
				// 轮播图片
				this.swiperList = this.detail.kechengfengmian ? this.detail.kechengfengmian.split(",") : [];
				

				//修改富文本的图片样式
				this.detail.kechengxiangqing = this.detail.kechengxiangqing.replace(/img src/gi,"img style=\"width:100%;\" src");
			},

			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},

			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				mescroll.resetUpScroll()
			},

			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
                let res = await this.$api.list('discusskechengxinxi', {
					page: mescroll.num,
					limit: 10,
					refid: this.id
				});
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.commentList = [];
				this.commentList = this.commentList.concat(res.data.list);
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);

            },



			onChatTap() {
				this.$utils.jump('../chat/chat')
			},
			// 下载
			download(url){
				let _this = this;
				url=_this.$base.url +  url;
				uni.downloadFile({
					url: url,
					success: (res) => {
						if (res.statusCode === 200) {
							_this.$utils.msg('下载成功');
							 window.open(url);
						}
					}
				});
			},
			//
			onCartTabTap() {
				this.$utils.tab('../shop-cart/shop-cart')
			},
			// 添加评论
			async onCommentTap() {
				if(!this.user){
					return false
				}
				this.$utils.jump(`../discusskechengxinxi/add-or-update?refid=${this.id}`)
			},
			delClick(id){
				let that = this
				uni.showModal({
					title: '提示',
					content: '是否删除此评论？',
					async success(res) {
						if(res.confirm){
							await that.$api.del('discusskechengxinxi',JSON.stringify([id]))
							that.$utils.msg('删除成功')
							that.detail.discussnum--
							await that.$api.update('kechengxinxi',that.detail)
							setTimeout(()=>{
								that.upCallback(that.mescroll)
							},1500)
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	page {
	  --animate-duration: 1s;
	  --animate-delay: 1s;
	  --animate-repeat: 1;
	}
	
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.seat-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #FFFFFF;
		margin: 20upx;
		border-radius: 20upx;
		padding: 20upx;
		font-size: 30upx;
		.seat-item {
			width: 33.33%;
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 20upx;
	
			.seat-icon {
				width: 50upx;
				height: 50upx;
				margin-bottom: 10upx;
			}
		}
	}
	
	audio {
		display: flex;
		flex-direction: column;
	}
	
	.audio /deep/ .uni-audio-default {
		width: inherit;
	}
	

</style>
