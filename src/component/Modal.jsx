import React from "react";

function Modal({ show, onHide, title, body }) {
    if (!show) return null;
    return (
        <>
            <div className="modal-backdrop">
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{title}</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={onHide}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {body}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onHide}>
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Modal;
