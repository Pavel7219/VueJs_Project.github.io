const SliderComponent = ('slider-component',{
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
    computed:{
        img: () =>
    store.state.pictures [ store.state.currentCounterValue ].url,
    trans: () => store.state.transitionName
    },
    methods:{

    },
    template:` 
        
           
                <transition :name="trans" >
                    <img :src="img"  :key="img"/>
                </transition>  
            
          
    `
})