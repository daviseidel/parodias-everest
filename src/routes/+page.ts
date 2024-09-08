import PocketBase from 'pocketbase';
export const ssr = false;

export const load = async () => {
  const url = 'https://parodias-everest.pockethost.io/'
  const pb = new PocketBase(url)

  const records = await pb.collection('evento').getList(1, 50,{
    sort: '-created',
    expand: "principal"
  });

  return {
		records
	};
};
