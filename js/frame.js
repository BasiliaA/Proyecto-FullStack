const { createApp } = Vue;

const customHeader = {
    template: `
            <div class="branding-sitio"> <a href="index.html" rel="home" title="Elegir Clínica">
                    <div><img src="img/isologo.svg" height="50" alt="ElegirClinica Logo"></div>
                </a>
                <div><h4 class="descripcion-sitio">{{tagline}}</h4></div>
            </div>
            
            <a href="ingresar.html" id="login-register" class="main-action">Ingresar</a>
        `,
    data() {
        return {
            tagline: 'Ranking de clinicas de Buenos Aires, elaborado por sus pacientes',
        }
    },
};

const customNav = {
    template: `
            <div class="menu-principal-container">
                <div aria-hidden="true" id="menu-principal" class="menu nav-menu">
                    <a v-bind:href="home" id="menu-princ-1" class="menu-item">Inicio</a>
                    <a v-bind:href="ranking" id="menu-princ-2" class="menu-item">Centros médicos</a>
                    <a v-bind:href="analysis" id="menu-princ-3" class="menu-item">Análisis</a>
                    <a v-bind:href="about" id="menu-princ-4" class="menu-item">Acerca de</a>
                    <a href="javascript:void(0);" id="menu-hamburg" class="hamburguesa" onclick="abrirMenu()">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        `,
        data() {
            return {
                home: "index.html",
                about: "acerca.html",
                analysis: "analisis-cm.html",
                ranking: "lista-cm.html"
            }
        }
};

const customFooter = {
    template: `
            <div class="bottom-logo"><img src="img/logo.svg" height="75" alt="ElegirClinica Logo"></div>
            <div class="info-sitio">
                <ul>
                    <li>Elegir Clínica</li>
                    <li>Los centros médicos más elegidos de la ciudad de Buenos Aires</li>
                    <li><a href="contacto.html">Contactanos</a></li>
                </ul>
                <a href="https://www.twitter.com" target="_blank" class="redsoc">
                    <i aria-hidden="true" class="fa fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank" class="redsoc">
                    <i aria-hidden="true" class="fa fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" class="redsoc">
                    <i aria-hidden="true" class="fa fa-instagram"></i>
                </a>
                </a> <a href="https://www.linkedin.com" target="_blank" class="redsoc">
                    <i aria-hidden="true" class="fa fa-linkedin"></i>
                </a>
                <p>Copyright © 2023 Venture Design</p>
            </div>
        `,
};

const headerApp = Vue.createApp({
    components: {
        'custom-header': customHeader,
    }
}).mount('#header-index');

const navApp = Vue.createApp({
    components: {
        'custom-nav': customNav,
    }
}).mount('#nav-index');

const footerApp = Vue.createApp({
    components: {
        'custom-footer': customFooter,
    }
}).mount('#footer-index');