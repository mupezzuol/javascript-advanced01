class Bind{

    //... -> aceita vários valores como parametro e ele irá encapsular dentro de um Array, é como se fosse um VARARGS em Java
    constructor(model, view, ...props) {

        let proxy = ProxyFactory.create(model, props, model => {
            view.update(model)
        });
 
        view.update(model);
        return proxy;
     }

}