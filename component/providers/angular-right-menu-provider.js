class RightMenuCSS {
    constructor(){
        this.path = 'vendor/angular-right-menu/dist/assets/angular-right-menu.css';
    }

    setCSSPath(_path){
        this.path = _path;
    }

    /*@ngInject*/
    $get(){
        return{
            path: this.path
        };
    }
}

rmRightMenu.provider('rmRightMenuCSS', RightMenuCSS);