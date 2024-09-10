<script>
  import FaRegStar from 'svelte-icons/fa/FaRegStar.svelte'
  import FaStar from 'svelte-icons/fa/FaStar.svelte'
  import FaStarHalfAlt from 'svelte-icons/fa/FaStarHalfAlt.svelte'
  import { Ratings } from '@skeletonlabs/skeleton';

  
  import PocketBase from 'pocketbase';
  const url = 'https://parodias-everest.pockethost.io/'
  const pb = new PocketBase(url)


  let value;
  export let parodia;
  export let InsideClass;

  function iconClick(event){
    value = event.detail.index;
    console.log(value)
  }

  async function enviar(){
    alert(parodia)
    const record = await pb.collection('notas').create({
      "nota": value,
      "parodia": parodia
    });
    console.log(record)
  }
</script>

<div class="flex flex-col my-16 p-12 card">
  <h3 class="h3 text-center">Avalie o Grupo!</h3>
  <Ratings bind:value={value} max={5} interactive on:icon={iconClick} class="w-60 h-32 m-0">
      <svelte:fragment slot="empty">
        <FaRegStar/>      
      </svelte:fragment>

      <svelte:fragment slot="half">
        <FaStarHalfAlt/>
      </svelte:fragment>

      <svelte:fragment slot="full">
        <FaStar/>
      </svelte:fragment>
  </Ratings>
  <a on:click={enviar} class="btn justify-center text-center variant-filled">Enviar</a>
</div>
