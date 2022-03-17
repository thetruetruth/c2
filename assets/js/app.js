function ready(callback) {
    // in case the document is already rendered
    if (document.readyState != 'loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function () {
        if (document.readyState == 'complete') callback();
    });
}

ready(function () {
    const app = Vue.createApp({
        setup() {
            const leftDrawerOpen = Vue.ref(false)
            const rightDrawerOpen = Vue.ref(false)
            return {
                leftDrawerOpen,rightDrawerOpen
            }
        },
        template:`
        <q-layout view="lhr LpR lfr">

        <q-header bordered class="bg-primary text-white">
          <q-toolbar>
            <q-btn dense flat round @click="leftDrawerOpen = !leftDrawerOpen">
                <q-icon>
                    <svg viewBox="0 0 24 24"><path style="" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path></svg>
                </q-icon>
            </q-btn>
    
            <q-toolbar-title>
              <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
              </q-avatar>
              Title
            </q-toolbar-title>
    
            <q-btn dense flat round @click="rightDrawerOpen = !rightDrawerOpen">
                <q-icon>
                    <svg viewBox="0 0 24 24"><path style="" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path></svg>
                </q-icon>
            </q-btn>
          </q-toolbar>
        </q-header>
    
        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
        </q-drawer>
    
        <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
        </q-drawer>
    
        <q-page-container>
            <q-page padding>
                <Content/>
            </q-page>
        </q-page-container>
    
        <q-footer bordered class="bg-white text-dark"></q-footer>
        `
    })
    app.component('Content',{
        template:'#c2'
    })
    app.use(Quasar)
    Quasar.lang.set(Quasar.lang.ms)
    app.mount('#q-app')
});