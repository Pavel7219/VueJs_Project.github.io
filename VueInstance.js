var vm = new Vue({
    el: '#app',
    data: {
    },
    components: {
        regions,
        Second,
        Third

    },
    router,
    template: `
    <div>
        <header class="header">
        <div class="logo">
            <img src="img/logo1.jpg" class="logo">
        </div>
            <nav class="nav-nav">
                <router-link class="link" to="/Region">Regions</router-link>
                <router-link class="link" to="/Second">Slider</router-link>
                <router-link class="link" to="/Third">Third</router-link>
        
            </nav>
        </header>
          <footer>
        </footer>
        <router-view></router-view>
    </div>
`
})