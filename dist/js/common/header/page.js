function Page(){
    this.el = $("#header");
    this.el1 = $("#header1")
    this.el2 = $("#nav")
}

$.extend(Page.prototype,{
    init:function(){
        //调用Header
        this.header = new Header(this.el).init();
        this.header1 = new Header1(this.el1).init();
        this.nav = new Nav(this.el2).init();
        // this.login = new Login(this.el).init();
        // this.register = new Register(this.el).init();
    }
})
new Page().init();