import {getAllErrors} from './danalytics/danalytics';

const getFrontendErrors = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const frontendErrors = await getAllErrors();
      resolve(frontendErrors);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};

exports.danalytics = async (req, res) => {
  res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Headers', "Content-Type, Authorization");
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  const postData = req.body;
  try {
    const resp = await getFrontendErrors();
    res.status(200).send({
      errors: resp
    });
  } catch (err) {
    res.status(500).send({
      err: err
    });
  }
};
