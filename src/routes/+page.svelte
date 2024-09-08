<script>
  import PocketBase from 'pocketbase';
  import eventsource from 'eventsource';
  global.EventSource = eventsource;

  const url = 'https://parodias-everest.pockethost.io/'
  const pb = new PocketBase(url)

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
{/key}

