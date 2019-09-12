Vue.component('menu-component',{
    template : `
        <div class="card">
            <div  class="card-header">
                <slot name="header"></slot>
            </div>
            <div class="card-body">
                <slot name="body"></slot>
            </div>
            <div class="card-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    `
});