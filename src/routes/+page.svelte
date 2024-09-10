<script>
  import PocketBase from 'pocketbase';
  import eventsource from 'eventsource';
  import Voto from "$lib/Voto.svelte"
  global.EventSource = eventsource;

  const url = 'https://parodias-everest.pockethost.io/'
  const pb = new PocketBase(url)

  let value;

  function iconClick(event){
    value = event.detail.index;
    console.log(value)
  }

  export let data;
  let parodia = data.records.items[0].expand.principal;

  pb.collection('evento').subscribe('*',async function (e) {
    console.log(e.action);
    // console.log(e.record); 
    parodia = await pb.collection('parodias').getOne(e.record.principal)
  });  
</script>

{#key parodia}
  <h1 class="h1 text-center my-1">{parodia.musica}</h1>
  <h4 class="h4 text-center my-5">Grupo: {parodia.nomes}</h4>
  <blockquote class="text-center">{@html parodia.letra}</blockquote>
  <div class="flex justify-center items-center">
    <Voto InsideClass="flex justify-center items-center" parodia="{parodia.id}"/> 
  </div>
{/key}

