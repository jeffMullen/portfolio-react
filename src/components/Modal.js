import React from 'react';

function Modal() {
    return (
         <div className="modal fade" tabIndex="-1" id="application-modal">
         <div className="modal-dialog">
             <div className="modal-content">
                 <div className="modal-header">
                     <h5 className="modal-title">Modal Placeholder</h5>
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                     </button>
                 </div>
                 <div className="modal-body row">
                     <a id="liveApp" href="placeholder" className="col-6" target="_blank">Live Application</a>
                     <a id="gitHubRepo" href="placeholder" className="col-6" target="_blank">GitHub Repository</a>
                 </div>
                 <div className="modal-footer row">
                     <p id="projectDescription" className="col-12"></p>
                     <p id="techUsed" className="col-12"></p>
                 </div>
             </div>
         </div>
     </div>
    )
}

export default Modal;