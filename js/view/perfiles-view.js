Vue.component('perfiles-component',{
    template : `
        <div class="mt-5 mb-5">
            <menu-component>
                <template slot="header" >
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group form-inline">
                                <label class="mr-2">Buscar por nombre:</label>
                                <input v-model="busqueda" type="text" class="form-control" placeholder="Ejem: Frida" >
                            </div>
                        </div>  
                        <div  style="text-align:end" class="col-md-7">
                            <h1>Buscar novia imaginaria :c</h1>
                        </div>
                    </div>
                 </template>
                <template slot="body" >
                    <div class="d-flex flex-wrap">
                        <itemperfil-component :key="index" :perfil="perfil" v-for="(perfil,index) of busquedaPerfiles" >
                            <template v-slot:botones="perfil">
                                <button @click="ver(perfil.perfil)" class="btn btn-primary btn-block" >Ver perfil</button>
                            </template>
                        </itemperfil-component>
                    </div>
                </template>
                <template slot="footer" >
                    
                </template>
            </menu-component>
        </div>
    `,

    data(){
        return{

            perfiles : [],

            busqueda : "",

        }
    },

    methods : {

        consultar(){

            axios.get(
                'https://uinames.com/api/?ext&amount=24&gender=female'
            ).then( (res) => {

                this.perfiles = res.data;
                
            });

        },
        
        ver(perfil){

            this.$emit('ver', perfil);

        }

    },

    created(){

        this.consultar();
        
    },

    computed : {

        busquedaPerfiles(){

            return this.perfiles.filter( (perfil) => {

                return perfil.name.match(this.busqueda);

            });

        }

    }
});

