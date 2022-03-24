<template>
    <div class="container">
        <div class="frame">
            <img  class="imagen-container" src="../assets/pasteles/pastel-mango-durazno.jpeg" alt="">
            <h2>Pasteles de mango</h2>
            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repudiandae ab necessitatibus, a, distinctio praesentium ipsam autem aperiam deserunt odit ea adipisci nemo cum quibusdam ullam explicabo ratione! Dolorem, natus.</p>
        </div>
         <div class="frame">
            <img  class="imagen-container" src="../assets/pasteles/pastel-mango-durazno.jpeg" alt="">
            <h2>Pasteles de chocolate</h2>
            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repudiandae ab necessitatibus, a, distinctio praesentium ipsam autem aperiam deserunt odit ea adipisci nemo cum quibusdam ullam explicabo ratione! Dolorem, natus.</p>
        </div>
         <div class="frame">
            <img  class="imagen-container" src="../assets/pasteles/pastel-mango-durazno.jpeg" alt="">
            <h2>Pasteles de nuez</h2>
            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repudiandae ab necessitatibus, a, distinctio praesentium ipsam autem aperiam deserunt odit ea adipisci nemo cum quibusdam ullam explicabo ratione! Dolorem, natus.</p>
        </div>
        
    </div>

    
</template>

<style scoped>

.container{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    background-color: black;
    width: 100%;
    height: 500px;
}
.frame{
    margin-top: 10px;
    margin-left: 150px;
    width: 300px;
    height: 480px;
    background-color: azure;
}

.imagen-container{
    margin-top: 10px;
    width: 200px;
    height: 200px;
}

.text-justify{
    Text-justify: auto;
    padding: 10px;
}
</style>