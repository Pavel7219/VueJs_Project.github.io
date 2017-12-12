
const router = new VueRouter({
    props:['id'],
    routes: [
        {
            path: "/Region",
            component: regions,
            props: {name:"one"},
            children:[
               {
                   path:":id",
                   component: Child1,
                   name:"child",
                   props:true

                }
            ]

        },
        {
            path: "/Second",
            component: Second,
            props: {name:"two"}
        },
        {
            path: "/Third",
            component: Third,
            props: {name:"three"}
        }
    ]
})
