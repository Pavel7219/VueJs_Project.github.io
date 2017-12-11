const Child1 = ({
    props: {
        name: {
            type: String,
            default: 'Nothing'
        }
    },
    data:function () {
        return {
            regionsUa: regionsUa,
        }
    },
    computed: {

        select:function () {
            return this.name
        }
    },
    methods:{

    },
    template:`
    <div>
    <section class="article">
                <div class="item-text" v-for="item in regionsUa[select]">
                    
                        <h2>{{item.head}}</h2>
                        <img :src="item.pict"/>
                        <p>{{item.text}}</p>
                </div>
             </section>
            

     
    </div>
    `
})
const regions = ({
    props: {
        name: {
            type: String,
            default: 'молодец'
        }
    },
    data:function () {
        return {

        }
    },
    methods:{

    },
    components:{

    },
    template:`
    <div>
     <aside class="aside">
        <div class="menu-item"><router-link to="/Region/Child1">North</router-link></div>
        <div class="menu-item"><router-link  to="/Region/Child2">South</router-link></div>
        <div class="menu-item"><router-link to="/Region/Child3">West</router-link></div>
        <div class="menu-item"><router-link to="/Region/Child4">East</router-link></div>
    </aside>
    <router-view></router-view>
    </div>
    `

})
const Second = ({
    props: {
        name: {
            type: String,
            default: 'Nothing'
        }
    },
    data:function () {
        return {

        }
    },
    methods:{
        gotoNext: () => store.commit('nextPicture'),
        gotoPrevious: () => store.commit('previousPicture'),
    },
    components:{
        'slider-component': SliderComponent
    },
    template:`
    <div class="second">
    
        <button class="left-button" @click="gotoPrevious">
            <i class="fa fa-chevron-left" aria-hidden="true"></i></i>
        </button>
        <slider-component></slider-component>
        <button class="right-button" @click="gotoNext">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
        
     
    </div>
    `
})
const Third = ({
    props: {
        name: {
            type: String,
            default: 'Nothing'
        }
    },
    data:function () {
        return {

        }
    },
    methods:{

    },
    template:`
    <div>
       <div class="third">
       <img src="http://vsviti.com.ua/wp-content/uploads/2015/06/enhanced-buzz-wide-5490-1433740376-7.jpg">
            
       </div>
     
    </div>
    `
})