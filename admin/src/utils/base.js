const base = {
    get() {
        return {
            url : "http://localhost:8080/php4g28oogo/",
            name: "php4g28oogo",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/php4g28oogo/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的学习交流平台"
        } 
    }
}
export default base
