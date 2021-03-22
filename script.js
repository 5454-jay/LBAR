

window.onload = () => {

   
  document.querySelector("#model-viewer").addEventListener('ar-status', (event) => {
    if(event.detail.status === 'failed'){
      // const error = document.querySelector("#error");
      const core = document.querySelector("#arcore");

      // error.classList.remove('hide');
      core.classList.remove('arsupported');

      // error.addEventListener('transitionend',(event) => {
      //   error.classList.add('hide');
      // });
      
      core.addEventListener('transitionend',(event) => {
        core.classList.add('arsupported');
      });

    }
  });
}
// import { ViroUtils } from '../node_modules/react-viro';
  // var isARSupportedOnDevice = ViroUtils.isARSupportedOnDevice;
  
  //   function componentWillMount() 
  //   {
  //     isARSupportedOnDevice(this._handleARNotSupported, this._handleARSupported);
  //   }
  //   function _handleARSupported() 
  //   {
  //     console.log("AR supported");
  //     this._getARNavigator();
  //   }
  //   function _handleARNotSupported(reason) 
  //   {
  //     console.log("AR not supported, with reason: " + reason);
  //     this._getNonARExperience();
  //   }
  //   componentWillMount();


    // }
//     checkIsARSupported();


// function checkIsARSupported()
// {
//   this.isARSupportedOnDevice(this.handleARNotSupported, this.handleARSupported);
//   console.log("AR", this.isARSupportedOnDevice());
//   setTimeout(() => {
//     this.checkIsARSupported()
//   }, 5000)
// }
// // console.log("AR", this.isARSupportedOnDevice());
// function componentWillMount()
//  {
//     this.checkIsARSupported()
    
// }

// function handleARSupported() 
// {
//   console.log("AR is supported");
// }

// function handleARNotSupported(reason)
//  {
//   console.log("AR not supported, with reason: " + reason);
// }