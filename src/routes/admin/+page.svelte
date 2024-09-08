<script>
  import PocketBase from 'pocketbase';

  const url = 'https://parodias-everest.pockethost.io/'
  const pb = new PocketBase(url)

  export let data;
  async function updatePrincipal(id){
    const data = {
      "principal": id
    };
    const record = await pb.collection('evento').update('shbz4hs36pd6z1p', data);
    console.log(record)
  }
</script>

{#each data.records.items as parodia}
  <a class="block btn variant-filled-surface m-3 flex flex-center text-center p-4 justify-center" on:click={updatePrincipal(parodia.id)} >{parodia.musica}</a>
{/each}
