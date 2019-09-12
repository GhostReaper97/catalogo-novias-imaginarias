const vue = new Vue({
    el : '#app',
    data: {
        mensaje : 'Hola a todos',
        apartado : 'perfiles-component',
        perfil : {},
    },

    methods : {

        VerPerfil(perfil){

            this.apartado = 'perfil-component';
            
            let obj = {
                perfil : perfil
            };

            this.perfil = obj.perfil;

        },

        verPerfiles(){

            this.apartado = 'perfiles-component';
            this.perfil = {};

        },

    }

})