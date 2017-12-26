import mockjs from 'mockjs';

export default {
	'POST /api/test': (req, res) => {
    	const {value} = req.body;
      console.log(value);
    	res.send({
        value:value+" has been mocked"
      });
  	},
};