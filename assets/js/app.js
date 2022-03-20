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
            const search = Vue.ref('')
            const tab = Vue.ref('mails')
            return {
                leftDrawerOpen,rightDrawerOpen,
                toggleLeftDrawer () {
                    leftDrawerOpen.value = !leftDrawerOpen.value
                },
                toggleRightDrawer () {
                    rightDrawerOpen.value = !rightDrawerOpen.value
                },
                search,
                tab
            }
        },
        methods:{

        },
        template:`
        <q-layout view="lHr LpR lfr">

        <q-header class="text-dark header">
          <q-toolbar>
            <q-btn round class="q-mr-sm gt-sm" aria-label="Home" href="/">
                <q-avatar size="42px">
                    <img src="/icons/76.png" width="32" height="32" alt="">
                </q-avatar>
            </q-btn>
            <q-btn flat round class="q-mr-sm lt-md" aria-label="Menu" @click="toggleLeftDrawer">
                <q-icon size="32px">
                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
                </q-icon>
            </q-btn>
            <q-input outlined rounded class="full-width" dense v-model="search" placeholder="Carian" readonly>
                <template v-slot:append>
                <q-avatar v-if="search === ''">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                </q-avatar>
                <q-icon v-else class="cursor-pointer" @click="search = ''" aria-label="clear">
                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                </q-icon>
                </template>
                <q-tooltip class="bg-red" :delay="500" anchor="center middle" self="center middle">Sistem carian diselenggara</q-tooltip>
            </q-input>

            <q-btn round flat class="q-ml-sm" aria-label="Settings">
                <q-icon size="32px">
                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path><circle cx="12" cy="12" r="3.5"></circle></svg>
                </q-icon>
                <q-tooltip class="bg-red" :delay="500" anchor="center left" self="center right" :offset="[10, 10]">Login diselenggara</q-tooltip>
            </q-btn>
          </q-toolbar>
        </q-header>
    
        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered :width="$q.platform.is.desktop ? '318' : '300'"  no-swipe-backdrop no-swipe-close no-swipe-open>
            <q-scroll-area class="full-width" style="height:calc(100% - 50px);margin-top:50px">
                <q-list class="text-grey-8">
                    <q-separator inset class="q-my-sm" />
                        <q-item href="/" area-label="Halaman Utama">
                            <q-item-section avatar>
                                <q-icon>
                                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
                                </q-icon>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Halaman Utama</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item href="/artikel/" area-label="Senarai Artikel">
                            <q-item-section avatar>
                                <q-icon>
                                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 3V21H21V3H3M18 18H6V17H18V18M18 16H6V15H18V16M18 12H6V6H18V12Z" /></svg>
                                </q-icon>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Artikel</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item href="/authors/" area-label="Senarai Penulis">
                            <q-item-section avatar>
                                <q-icon>
                                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" /></svg>
                                </q-icon>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Para Penulis</q-item-label>
                            </q-item-section>
                        </q-item>
                    <div class="q-mt-md">
                    <div class="flex flex-center q-gutter-xs">
                      <a class="footer-link" href="/privacy/" aria-label="Learn more about privacy policy">Privacy</a>
                      <span> · </span>
                      <a class="footer-link" href="/terms-and-conditions/" aria-label="Learn more about terms and conditions">Terms</a>
                      <span> · </span>
                      <a class="footer-link" href="/cookie/" aria-label="Learn more about cookie policy">Cookie</a>
                      <span> · </span>
                      <a class="footer-link" href="/code-of-ethics/" aria-label="Our code of ethics">Code of Ethics</a>
                      <span> · </span>
                      <a class="footer-link" href="/code-of-ethics/" aria-label="About us">About</a>
                    </div>
                  </div>
                </q-list>
            </q-scroll-area>
            <div class="absolute-top header">
            <q-toolbar class="q-px-none">
                <q-btn flat stretch no-wrap no-caps class="gt-sm full-width" href="/" aria-label="Kembali Halaman Utama">
                    <span style="font-size:20px;line-height:1" class="text-weight-bold">2r2<br><span class="text-caption">🇲🇾 Malaysia 🇸🇬 Singapore 🇧🇳 Brunei 🇮🇩 Indonesia</span></span>
                </q-btn>
                <div class="lt-md font-weight-bolder q-ml-md" style="font-size:24px">
                <q-toolbar-title class="text-weight-bold">
                <q-avatar size="32px">
                    <img src="/icons/76.png" width="32" height="32" alt="">
                </q-avatar>
                2r2 🇲🇾 🇸🇬 🇧🇳 🇮🇩 
                </q-toolbar-title>
                </div>
                <q-space/>
                <q-btn flat stretch class="q-mr-xs lt-md" @click="toggleLeftDrawer">
                    <q-icon><svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg></q-icon>
                </q-btn>
            </q-toolbar>

            </div>
        </q-drawer>
    
        <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered :width="392" no-swipe-backdrop no-swipe-close no-swipe-open>
            <q-scroll-area class="fit">
                <RightContent/>
            <q-scroll-area>
        </q-drawer>
    
        <q-page-container>
            <q-page padding class="q-pt-none">
                <Content/>
            </q-page>
        </q-page-container>
        `
    })
    app.component('Content',{
        setup(){
            return {
                fontSize: Vue.ref('16'),
                tab: Vue.ref('mails')
            }
        },
        methods:{
            fontPlus(){
                this.fontSize++
            },
            fontMinus(){
                this.fontSize--
            }
        },
        template:'#tulatu'
    })
    app.component('RightContent',{
        template:'#tulatukan'
    })
    app.use(Quasar)
    Quasar.lang.set(Quasar.lang.ms)
    app.mount('#q-app')

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());  
    gtag('config', 'G-4W81EYMJLL');
});