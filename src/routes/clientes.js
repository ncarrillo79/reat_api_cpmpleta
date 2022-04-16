const { Router } = require("express");
const router = Router();
const clientes = require("../sample.json");
//const _ = require('underscore')
const _ = require('lodash')
console.log(clientes);

router.get("/", (req, res) => {
  res.json(clientes);
});

router.post("/", (req, res) => {
  const id = clientes.length + 1;
  const { name, lastname, age, email } = req.body;
  const newCliente = { id, ...req.body };

  if ((id, name && lastname && age && email)) {
    clientes.push(newCliente);
    res.json(clientes);
  } else {
    res.status(500).json({ error: "There was an error." });
  }
}); 

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastname, age, email } = req.body;
  if (id && name && lastname && age && email) {
    _.each(clientes, (cliente, i) => {
      if (cliente.id === id) {
        cliente.name = name;
        cliente.lastname = lastname;
        cliente.age = age;
        cliente.email = email;
      }
    });
    res.json(clientes);
  } else {
    res.status(500).json({ error: "There was an error." });
  }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;//req.params é um objeto que devolve todos os parámetros
    if (id)
    {
        _.remove(clientes,(cliente,i)=> cliente.id ==id)
    }
   
       
        res.json(clientes);
        
            

})
    
module.exports = router;