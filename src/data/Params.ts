interface Params {
  acssessToken: string;
  web3link: string;

  highlightColor: string;
  headerBgColor: string;
  seondaryBgColor: string;
  containerMaxWidth: 'sm' | 'md' | 'lg' | 'xl';
  bioColor: string;
  subtextColor: string;
}

const Params: Params = {
  acssessToken: 'b4cdf146-1d2f-4bed-88fd-b8d0144fde26',
  web3link: 'https://api.web3forms.com/submit',

  highlightColor: '#3a86ff',
  headerBgColor: '#161f31',
  seondaryBgColor: '#3a86ff',
  containerMaxWidth: 'lg',
  bioColor: 'rgb(78 84 91)',
  subtextColor: 'rgb(78 84 91)',
};

export default Params;
