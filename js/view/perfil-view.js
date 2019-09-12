Vue.component('perfil-component',{
    template : `
        <div class="mt-5 mb-5">
            <menu-component>
                <template slot="header" >
                    <div class="row">
                        <div class="col-md-10">
                            <h1 > Perfil : {{ perfil.name + ' ' + perfil.surname }} </h1>
                        </div>
                        <div class="col-md-2">
                            <button @click="ver()" class="btn btn-danger btn-block">Regresar</button>
                        </div>
                    </div>
                </template>
                <template slot="body" >
                    <div class="row">
                        <div class="col-md-8">
                            <h3>Datos del perfil</h3>
                        </div>
                        <div class="col-md-4">
                            <h3>Tarjeta</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <h5> Nombre : {{ perfil.name }} </h5>
                            <h5> Apellido : {{ perfil.surname }} </h5>
                            <h5> Edad : {{ perfil.age }} años </h5>
                            <h5> Correo : {{ perfil.email }} </h5>
                            <h5> Pais : {{ perfil.region }} </h5>
                            <h3> Datos bancarios </h3>
                            <h5> Expiracion de tarjeta : {{ perfil.credit_card.expiration }} </h5>
                            <h5> Numero de tarjeta : {{ perfil.credit_card.number }} </h5>
                            <h5> PIN : {{ perfil.credit_card.pin }} </h5>
                        </div>
                            <itemperfil-component :perfil="perfil" ></itemperfil-component>               
                    </div>
                </template>
                <template slot="footer" ></template>
            </menu-component>
        </div>
    `,

    props : [
        'perfil'
    ],

    methods : {
        
        ver(){

            this.$emit('ver');

        }

    }


});