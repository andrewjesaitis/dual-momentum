const bgImg = require('../images/shattered.png');

export const mainComponent = {
  backgroundImage: String.prototype.concat("url('.", bgImg, "')"),
  backgroundRepeat: 'repeat',
  minHeight: '100%',
  position: 'relative',
};

export const vcenter = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
};

export const hcenter = {
  display: 'flex',
  justifyContent: 'center',
};

export const symbolList = {
  textDecoration: 'None',
  padding: 0,
};

