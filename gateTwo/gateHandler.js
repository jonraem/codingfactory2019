import needle from 'needle';

export default () => {
  const url = 'http://192.168.10.61/gate2/open'; // REPLACE THIS WITH ACTUAL URL
  needle.get(url, (err, res) => {
    if (err) {
      console.log(err);
    }
  });
};
