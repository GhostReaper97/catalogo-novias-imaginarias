Vue.component('itemperfil-component',{
    template : `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img class="card-img-top" :src="perfil.photo">
                <div class="card-body">
                    <h3 class="card-title"> Perfil: {{ perfil.name + ' ' + perfil.surname }} </h3>
                    <h6 class="card-title"> Edad : {{ perfil.age }} </h6>
                    <h6 class="card-title"> Telefono : {{ perfil.phone }} </h6>
                    <h6 class="card-title"> Pais : {{ perfil.region }} </h6>
                </div>
                <div class="card-footer">
                    <slot name="botones" :perfil="perfil" ></slot>
                </div>
                
            </div>
        </div>
    `,

    props : [
        'perfil'
    ],

    created(){


    }

})