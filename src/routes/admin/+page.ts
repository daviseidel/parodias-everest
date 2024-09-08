import PocketBase from 'pocketbase';

export const load = async () => {
  const url = 'https://parodias-everest.pockethost.io/'
  const pb = new PocketBase(url)

  const records = await pb.collection('parodias').getList(1, 50,{
    sort: '-created',
  });
  console.log(records)

  return {
		records
	};
};
