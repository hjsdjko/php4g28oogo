<template>
  <div class="main-content" :style='{"padding":"20px 30px 30px","fontSize":"14px","color":"#666","background":"none","height":"100%"}'>
    <!-- 列表页 -->
    <template v-if="!showFlag">
      <el-form :style='{"padding":"0","margin":"0px","overflow":"hidden","flexWrap":"wrap","background":"none","display":"flex","fontSize":"inherit"}' :inline="true" :model="searchForm" class="center-form-pv">
        <el-row :style='{"padding":"10px","boxShadow":"0 1px 3px 0px rgba(115,108,203,.23)","margin":"0 20px 20px 0","borderRadius":"3px","alignItems":"center","textAlign":"left","background":"#fff","display":"flex","width":"auto","fontSize":"inherit","order":"2"}'>
			<div :style='{"margin":"0 10px 0 0","fontSize":"inherit","display":"inline-block"}'>
			  <label :style='{"margin":"0 10px 0 0","color":"inherit","display":"inline-block","lineHeight":"40px","fontSize":"inherit","fontWeight":"500","height":"40px"}' class="item-label">试题</label>
			  <el-input v-model="searchForm.questionname" placeholder="试题名称" clearable></el-input>
			</div>
			<el-button class="search" :style='{"border":"0","cursor":"pointer","padding":"0 24px","outline":"none","color":"#fff","borderRadius":"3px","background":"#2bb3c0","width":"auto","fontSize":"inherit","height":"40px"}' type="success" @click="search()">
				<span class="icon iconfont icon-chakan14" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","height":"40px"}'></span>
				查询信息
			</el-button>
		</el-row>
        <el-row class="actions" :style='{"boxShadow":"0 1px 3px 0px rgba(115,108,203,.23)","padding":"10px","margin":"0px 0 20px","color":"#fff","alignItems":"center","textAlign":"left","display":"flex","borderRadius":"3px","flexWrap":"wrap","background":"#fff","flex":"1","width":"100%","fontSize":"inherit","order":"2"}'>
		  <el-button class="add" :style='{"border":"0px solid rgba(244,100,130,.3)","cursor":"pointer","padding":"0 10px 0 10px","margin":"4px 4px 5px","outline":"none","color":"inherit","borderRadius":"3px","background":"#2bb3c0","width":"auto","fontSize":"inherit","minWidth":"66px","height":"36px"}' type="success" @click="addOrUpdateHandler()">
		  	<span class="icon iconfont icon-tianjia13" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"none"}'></span>
		  	新增
		  </el-button>
		  <el-button class="del" :disabled="dataListSelections.length <= 0" :style='{"border":"0px solid rgba(244,100,130,.3)","cursor":"pointer","padding":"0 10px 0 10px","boxShadow":"inset 0px 0px 12px 0px rgba(244,100,130,.3)","margin":"4px 4px 5px","color":"inherit","minWidth":"66px","outline":"none","borderRadius":"3px","background":"#ff518a","width":"auto","fontSize":"inherit","height":"36px"}' type="danger" @click="deleteHandler()">
		  	<span class="icon iconfont icon-shanchu7" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"none","height":"40px"}'></span>
		  	删除
		  </el-button>
          <download-excel v-if="isAuth('examquestion','导出')" class = "export-excel-wrapper" :data = "dataList" :fields = "json_fields" name = "试卷题目.xls">
            <!-- 导出excel -->
			<el-button class="btn18" type="success">
				<span class="icon iconfont icon-daochu17" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"none"}'></span>
				导出
			</el-button>
          </download-excel>
		  <el-button class="btn18" v-if="isAuth('examquestion','打印')"  type="success" @click="printJson">
		  	<span class="icon iconfont icon-dayin6" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"none"}'></span>
		  	打印
		  </el-button>
        </el-row>
      </el-form>

	<div :style='{"padding":"0 0 2px","boxShadow":"0 1px 3px 0px rgba(115,108,203,.23)","borderColor":"rgba(252,234,238,1)","margin":"0 0 20px","borderRadius":"3px","background":"rgba(255,255,255,1)","borderWidth":"0px","width":"100%","borderStyle":"solid"}'>
        <el-table
		  :stripe='false'
		  :style='{"padding":"0","borderColor":"#e5e9ec","color":"inherit","borderRadius":"0px","borderWidth":"0px","background":"none","width":"100%","fontSize":"inherit","borderStyle":"solid"}'
          :data="dataList"
          :border='false'
          v-loading="dataListLoading"
          @selection-change="selectionChangeHandler"
          style="width: 100%;"
        >
          <el-table-column :resizable='true' type="selection" header-align="center" align="center" width="50"></el-table-column>
          <el-table-column
		    :resizable='true' :sortable='true'
            width="300"
            prop="questionname"
            header-align="center"
            align="center"
            sortable
            label="试题名称"
          ></el-table-column>
          <el-table-column :resizable='true' :sortable='true' prop="score" header-align="center" align="center" sortable label="分值"></el-table-column>
          <el-table-column :resizable='true' :sortable='true' prop="answer" header-align="center" align="center" sortable label="答案"></el-table-column>
          <el-table-column :resizable='true' :sortable='true' prop="type" header-align="center" align="center" sortable label="类型">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.type==0">单选题</el-tag>
              <el-tag v-if="scope.row.type==1" type="info">多选题</el-tag>
              <el-tag v-if="scope.row.type==2" type="success">判断题</el-tag>
              <el-tag v-if="scope.row.type==3" type="warning">填空题</el-tag>
              <el-tag v-if="scope.row.type==4" type="warning">主观题</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            width="150"
            label="操作"
          >
            <template slot-scope="scope">
			  <el-button class="edit" :style='{"cursor":"pointer","padding":"0 6px 0 0px","boxShadow":"inset 0px 0px 0px 0px rgba(244,100,130,.3)","margin":"0 2px 5px 0","borderColor":"rgba(244,111,139,.3)","color":"#fff","minWidth":"40px","outline":"none","borderRadius":"3px","background":"#34bfa3","borderWidth":"0px","width":"auto","fontSize":"13px","lineHeight":"24px","borderStyle":"solid","height":"24px"}' type="success" @click="addOrUpdateHandler(scope.row.id)">
			  	<span class="icon iconfont icon-xiugai13" :style='{"margin":"0 0 0 4px","fontSize":"14px","color":"inherit","height":"auto"}'></span>
			  	更改
			  </el-button>
			  <el-button class="del" :style='{"cursor":"pointer","padding":"0 6px 0 0px","boxShadow":"inset 0px 0px 0px 0px rgba(244,100,130,.3)","margin":"0 2px 5px 0","borderColor":"rgba(244,111,139,.3)","color":"#fff","minWidth":"40px","outline":"none","borderRadius":"3px","background":"#ff518a","borderWidth":"0px","width":"auto","fontSize":"13px","lineHeight":"24px","borderStyle":"solid","height":"24px"}' type="primary" @click="deleteHandler(scope.row.id)">
			  	<span class="icon iconfont icon-shanchu8" :style='{"margin":"0 0 0 4px","fontSize":"inherit","color":"inherit","height":"auto"}'></span>
			  	移除
			  </el-button>
            </template>
          </el-table-column>
        </el-table>
	</div>

        <el-pagination
          @size-change="sizeChangeHandle"
          @current-change="currentChangeHandle"
          :current-page="pageIndex"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="pageSize"
          :total="totalPage"
          :layout="layouts.join()"
		  prev-text="上一页"
		  next-text="下一页"
		  :hide-on-single-page="false"
		  :style='{"padding":"0","margin":"0px 0 0","whiteSpace":"nowrap","color":"inherit","textAlign":"center","width":"100%","fontSize":"inherit","fontWeight":"500"}'
        ></el-pagination>
    </template>
    <!-- 添加/修改页面  将父组件的search方法传递给子组件-->
    <add-or-update v-else :parent="this" ref="addOrUpdate"></add-or-update>
  </div>
</template>
<script>
	import AddOrUpdate from "./question-add-or-update";
	export default {
		data() {
			return {
				layouts: ["total","prev","pager","next","sizes","jumper"],
				searchForm: {
					key: ""
				},
				dataList: [],
				pageIndex: 1,
				pageSize: 10,
				totalPage: 0,
				dataListLoading: false,
				dataListSelections: [],
				showFlag: false,
				//导出excel
				json_fields: {
					"题目名称": "questionname",    //常规字段
					"题目类型": {
					field: 'type',
					callback: value => {
						let str = ''
						switch (value) {
							case 0:
								str = '单选题'
								break
							case 1:
								str = '多选题'
								break
							case 2:
								str = '判断题'
								break
							case 3:
								str = '填空题'
								break
							case 4:
								str = '主观题'
								break
							}
							return str
						}
                    },
					"选项": "options",    //常规字段
					"分值": "score",    //常规字段
					"正确答案": "answer",    //常规字段
					"答案解析": "analysis",    //常规字段
				},
				json_meta: [
					[
						{
						  "key": "charset",
						  "value": "utf- 8"
						}
					]
				]
			};
		},
		mounted() {
			this.init();
			this.getDataList();
		},
		components: {
			AddOrUpdate
		},
		methods: {
			init() {},
			search() {
				this.pageIndex = 1;
				this.getDataList();
			},
			// 获取数据列表
			getDataList() {
				this.dataListLoading = true;
				var params = {
					page: this.pageIndex,
					limit: this.pageSize,
					sort: "id"
				};
				if(this.searchForm.questionname){
					params['questionname'] = `%${this.searchForm.questionname}%`
				}
				this.$http({
					url: this.$api.examquestionbankpage,
					method: "get",
					params: params
				}).then(({ data }) => {
					if (data && data.code === 0) {
						this.dataList = data.data.list;
						this.totalPage = data.data.total;
					} else {
						this.dataList = [];
						this.totalPage = 0;
					}
					this.dataListLoading = false;
				});
			},
			// 每页数
			sizeChangeHandle(val) {
				this.pageSize = val;
				this.pageIndex = 1;
				this.getDataList();
			},
			// 当前页
			currentChangeHandle(val) {
				this.pageIndex = val;
				this.getDataList();
			},
			// 多选
			selectionChangeHandler(val) {
				this.dataListSelections = val;
			},
			// 添加/修改
			addOrUpdateHandler(id) {
				this.showFlag = true;
				this.$nextTick(() => {
					this.$refs.addOrUpdate.init(id);
				});
			},
			// 删除
			deleteHandler(id) {
				var ids = id
					? [Number(id)]
					: this.dataListSelections.map(item => {
						return Number(item.id);
					});
				this.$confirm(`确定进行[${id ? "删除" : "批量删除"}]操作?`, "提示", {
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning"
				}).then(() => {
					this.$http({
						url: this.$api.examquestionbankdelete,
						method: "post",
						data: ids
					}).then(({ data }) => {
						if (data && data.code === 0) {
							this.$message({
								message: "操作成功",
								type: "success",
								duration: 1500,
								onClose: () => {
									this.search();
								}
							});
						} else {
							this.$message.error(data.msg);
						}
					});
				});
			},
			async printJson() {
				//通过getdata调用后台接口获取数据封装到res
				this.list = this.dataList;
				let data = []
				for (let i=0; i < this.list.length; i++) {
					let typeName = '';
					if(this.list[i].type==0) {
						typeName = '单选题'
					} else if(this.list[i].type==1) {
						typeName = '多选题'
					} else if(this.list[i].type==2) {
						typeName = '判断题'
					} else if(this.list[i].type==3) {
						typeName = '填空题'
					} else if(this.list[i].type==4) {
						typeName = '主观题'
					}
					data.push({
						questionname: this.list[i].questionname,
						type: typeName,
						options: this.list[i].options,
						score: this.list[i].score,
						answer: this.list[i].answer,
						analysis: this.list[i].analysis,
					})
				}
				printJS({
					printable: data,
					properties: [
						{
							field: 'questionname',
							displayName: '题目名称',
							columnSize: 1
						},
						{
							field: 'type',
							displayName: '题目类型',
							columnSize: 1
						},
						{
							field: 'options',
							displayName: '选项',
							columnSize: 1
						},
						{
							field: 'score',
							displayName: '分值',
							columnSize: 1
						},
						{
							field: 'answer',
							displayName: '正确答案',
							columnSize: 1
						},
						{
							field: 'analysis',
							displayName: '答案解析',
							columnSize: 1
						},
					],
					type: 'json',
					header: '试卷题目',
					// 样式设置
					gridStyle: 'border: 2px solid #3971A5;',
					gridHeaderStyle: 'color: red;  border: 2px solid #3971A5;'
				})
			},
		}
	};
</script>
<style lang="scss" scoped>
    //导出excel
      .export-excel-wrapper{
        display: inline-block;
      }
	.form-content {
		background: transparent;
	}
	.table-content {
		background: transparent;
	}
	
	.center-form-pv {
		.el-input {
		  width: auto;
		}
	  .el-date-editor.el-input {
	    width: auto;
	  }
	}
	
	// form
	.center-form-pv .el-input /deep/ .el-input__inner {
				border: 1px solid #eee;
				border-radius: 3px;
				padding: 0 12px;
				outline: none;
				color: inherit;
				background: #fff;
				width: 170px;
				font-size: inherit;
				height: 40px;
			}
	
	.center-form-pv .el-select /deep/ .el-input__inner {
				border: 1px solid #eee;
				border-radius: 3px;
				padding: 0 10px;
				box-shadow: 0 0 0px rgba(64, 158, 255, .5);
				outline: none;
				color: inherit;
				background: #fff;
				width: 170px;
				font-size: inherit;
				height: 40px;
			}
	
	.center-form-pv .el-date-editor /deep/ .el-input__inner {
				border: 1px solid #eee;
				border-radius: 3px;
				padding: 0 10px 0 30px;
				box-shadow: 0 0 0px rgba(64, 158, 255, .5);
				outline: none;
				color: inherit;
				background: #fff;
				width: 170px;
				font-size: inherit;
				height: 40px;
			}
	
	// table
	.el-table /deep/ .el-table__header-wrapper thead {
				color: inherit;
				background: rgba(254,169,34,0);
				width: 100%;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr {
				background: none;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr th {
				padding: 6px 0;
				background: none;
				border-color: #e5e9ec;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: left;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr th .cell {
				padding: 0 10px;
				word-wrap: normal;
				word-break: break-all;
				white-space: normal;
				font-weight: 500;
				display: inline-block;
				vertical-align: middle;
				width: 100%;
				line-height: 24px;
				position: relative;
				text-overflow: ellipsis;
			}
	
	
	.el-table /deep/ .el-table__body-wrapper tbody {
				padding: 0;
				width: 100%;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr {
				background: none;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 5px 0 0;
				color: inherit;
				background: none;
				font-size: inherit;
				border-color: #e5e9ec;
				border-width: 0 1px 1px 0px;
				border-style: solid;
				text-align: left;
			}
	
		
	.el-table /deep/ .el-table__body-wrapper tbody tr:hover td {
				padding: 5px 0 0;
				color: #666;
				background: none;
				border-color: #e5e9ec;
				border-width: 0 1px 1px 0px;
				border-style: solid;
				text-align: left;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 5px 0 0;
				color: inherit;
				background: none;
				font-size: inherit;
				border-color: #e5e9ec;
				border-width: 0 1px 1px 0px;
				border-style: solid;
				text-align: left;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .cell {
				padding: 0 10px;
				overflow: hidden;
				color: inherit;
				word-break: break-all;
				white-space: normal;
				line-height: 24px;
				text-overflow: ellipsis;
			}
	
	// pagination
	.main-content .el-pagination /deep/ .el-pagination__total {
				margin: 0 10px 0 0;
				color: inherit;
				font-weight: 400;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev {
				border: none;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 5px;
				color: inherit;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next {
				border: none;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 5px;
				color: inherit;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 5px;
				color: #999;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 5px;
				color: #999;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager {
				padding: 0;
				margin: 0;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: inherit;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 24px;
				text-align: center;
				height: 24px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number:hover {
				cursor: pointer;
				border-radius: 3px;
				padding: 0 4px;
				margin: 0 5px;
				color: #fff;
				background: #34bfa3;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: auto;
				text-align: center;
				height: 24px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number.active {
				cursor: default;
				border-radius: 3px;
				padding: 0 4px;
				margin: 0 5px;
				color: #fff;
				background: #34bfa3;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: auto;
				text-align: center;
				height: 24px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes {
				color: inherit;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input {
				margin: 0 5px;
				color: inherit;
				width: 100px;
				font-size: inherit;
				position: relative;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
				border: 0px solid #ddd;
				cursor: pointer;
				padding: 0 25px 0 8px;
				color: inherit;
				display: inline-block;
				font-size: inherit;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: none;
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
				top: 0;
				position: absolute;
				right: 0;
				height: 100%;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
				cursor: pointer;
				color: #C0C4CC;
				width: 25px;
				font-size: 14px;
				line-height: 28px;
				text-align: center;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump {
				margin: 0 0 0 24px;
				color: inherit;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input {
				border-radius: 3px;
				padding: 0 2px;
				margin: 0 2px;
				color: inherit;
				display: inline-block;
				width: 50px;
				font-size: inherit;
				line-height: 18px;
				position: relative;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
				border: 1px solid #eee;
				cursor: pointer;
				padding: 0 0px;
				color: inherit;
				display: inline-block;
				font-size: inherit;
				line-height: 24px;
				border-radius: 3px;
				outline: 0;
				background: #fff;
				width: auto;
				text-align: center;
				height: 24px;
			}
	
	.center-form-pv .search {
				border: 0;
				cursor: pointer;
				border-radius: 3px;
				padding: 0 24px;
				outline: none;
				color: #fff;
				background: #2bb3c0;
				width: auto;
				font-size: inherit;
				height: 40px;
			}
	
	.center-form-pv .search:hover {
				opacity: 0.8;
			}
	
	.center-form-pv .actions .add {
				border: 0px solid rgba(244,100,130,.3);
				cursor: pointer;
				border-radius: 3px;
				padding: 0 10px 0 10px;
				margin: 4px 4px 5px;
				outline: none;
				color: inherit;
				background: #2bb3c0;
				width: auto;
				font-size: inherit;
				min-width: 66px;
				height: 36px;
			}
	
	.center-form-pv .actions .add:hover {
				opacity: 0.8;
			}
	
	.center-form-pv .actions .del {
				border: 0px solid rgba(244,100,130,.3);
				cursor: pointer;
				padding: 0 10px 0 10px;
				margin: 4px 4px 5px;
				color: inherit;
				font-size: inherit;
				border-radius: 3px;
				box-shadow: inset 0px 0px 12px 0px rgba(244,100,130,.3);
				outline: none;
				background: #ff518a;
				width: auto;
				min-width: 66px;
				height: 36px;
			}
	
	.center-form-pv .actions .del:hover {
				opacity: 0.8;
			}
	
	.center-form-pv .actions .btn18 {
				border: 0px solid rgba(244,100,130,.3);
				cursor: pointer;
				border-radius: 3px;
				padding: 0 10px 0 10px;
				margin: 4px 4px 5px;
				outline: none;
				color: inherit;
				background: #36a2f5;
				width: auto;
				font-size: inherit;
				min-width: 66px;
				height: 36px;
			}
	
	.center-form-pv .actions .btn18:hover {
				opacity: 0.8;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .edit {
				cursor: pointer;
				padding: 0 6px 0 0px;
				margin: 0 2px 5px 0;
				color: #fff;
				font-size: 13px;
				border-color: rgba(244,111,139,.3);
				line-height: 24px;
				border-radius: 3px;
				box-shadow: inset 0px 0px 0px 0px rgba(244,100,130,.3);
				outline: none;
				background: #34bfa3;
				width: auto;
				border-width: 0px;
				border-style: solid;
				min-width: 40px;
				height: 24px;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .edit:hover {
				opacity: 0.8;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .del {
				cursor: pointer;
				padding: 0 6px 0 0px;
				margin: 0 2px 5px 0;
				color: #fff;
				font-size: 13px;
				border-color: rgba(244,111,139,.3);
				line-height: 24px;
				border-radius: 3px;
				box-shadow: inset 0px 0px 0px 0px rgba(244,100,130,.3);
				outline: none;
				background: #ff518a;
				width: auto;
				border-width: 0px;
				border-style: solid;
				min-width: 40px;
				height: 24px;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .del:hover {
				opacity: 0.8;
			}
	
	.one .list1-edit {
				cursor: pointer;
				padding: 0 4px 0 0px;
				margin: 0px 5px 5px 0;
				color: inherit;
				font-size: inherit;
				border-color: rgba(244,111,139,.3);
				line-height: 24px;
				border-radius: 3px;
				box-shadow: inset 0px 0px 0px 0px rgba(244,100,130,.3);
				outline: none;
				background: #34bfa3;
				width: auto;
				border-width: 0 0 0px;
				border-style: double;
				min-width: 40px;
				height: 24px;
			}
	
	.one .list1-edit:hover {
				opacity: 0.8;
			}
	
	.one .list1-del {
				cursor: pointer;
				padding: 0 4px 0 0px;
				margin: 0px 5px 5px 0;
				color: inherit;
				font-size: inherit;
				border-color: rgba(244,111,139,.3);
				line-height: 24px;
				border-radius: 3px;
				box-shadow: inset 0px 0px 0px 0px rgba(244,100,130,.3);
				outline: none;
				background: #ff518a;
				width: auto;
				border-width: 0 0 0px;
				border-style: double;
				min-width: 40px;
				height: 24px;
			}
	
	.one .list1-del:hover {
				opacity: 0.8;
			}
</style>
